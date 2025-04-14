from flask import Flask, render_template, request
from PIL import Image
import os
import zlib
from flask_cors import CORS

app = Flask(__name__)
UPLOAD_FOLDER = "static/uploads"
ENCODED_FOLDER = "static/encoded"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCODED_FOLDER, exist_ok=True)

CORS(app)  # Enable CORS

# --------- Encoding ---------
def encode_text(image_path, message, output_image):
    img = Image.open(image_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    encoded = img.copy()
    width, height = img.size
    pixels = encoded.load()

    # Compress the message
    compressed = zlib.compress(message.encode('utf-8'))
    message_length = len(compressed)
    binary_length = format(message_length, '032b')  # 32 bits for length
    binary_data = binary_length + ''.join(format(byte, '08b') for byte in compressed)

    max_capacity = width * height * 3
    if len(binary_data) > max_capacity:
        raise ValueError("Message too long for this image size!")

    data_index = 0
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            if data_index < len(binary_data):
                r = (r & 0xFE) | int(binary_data[data_index])
                data_index += 1
            if data_index < len(binary_data):
                g = (g & 0xFE) | int(binary_data[data_index])
                data_index += 1
            if data_index < len(binary_data):
                b = (b & 0xFE) | int(binary_data[data_index])
                data_index += 1

            pixels[x, y] = (r, g, b)

            if data_index >= len(binary_data):
                encoded.save(output_image, format="PNG")
                return output_image

# --------- Decoding ---------
def decode_text(image_path):
    img = Image.open(image_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    pixels = img.load()
    width, height = img.size

    binary_data = ""
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            binary_data += str(r & 1)
            binary_data += str(g & 1)
            binary_data += str(b & 1)

    # Get length from first 32 bits
    message_length_bits = binary_data[:32]
    message_length = int(message_length_bits, 2)

    total_message_bits = message_length * 8
    message_bits = binary_data[32:32 + total_message_bits]

    bytes_data = bytearray()
    for i in range(0, len(message_bits), 8):
        byte = message_bits[i:i+8]
        if len(byte) == 8:
            bytes_data.append(int(byte, 2))

    try:
        decompressed = zlib.decompress(bytes_data).decode('utf-8')
    except Exception as e:
        return "No hidden data found"
    
    return decompressed

# --------- Routes ---------
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encode', methods=['GET', 'POST'])
def encode():
    if request.method == 'POST':
        image = request.files['image']
        message = request.form['message']
        if image and message:
            image_path = os.path.join(UPLOAD_FOLDER, image.filename)
            output_image = os.path.join(ENCODED_FOLDER, "encoded_" + image.filename)
            image.save(image_path)
            try:
                encode_text(image_path, message, output_image)
                return render_template('encode.html', original=image.filename, encoded="encoded_" + image.filename)
            except ValueError as e:
                return render_template('encode.html', error=str(e))
    return render_template('encode.html')

@app.route('/decode', methods=['GET', 'POST'])
def decode():
    if request.method == 'POST':
        uploaded_files = request.files.getlist('images')
        decoded_results = []

        for file in uploaded_files:
            if file:
                image_path = os.path.join(ENCODED_FOLDER, file.filename)
                file.save(image_path)
                hidden_text = decode_text(image_path)
                
                decoded_results.append({
                    "image": file.filename,
                    "hidden_data": hidden_text if hidden_text else "No hidden data"
                })

        return render_template('decode.html', decoded_data=decoded_results)

    return render_template('decode.html')

if __name__ == '__main__':
    app.run(debug=True)
