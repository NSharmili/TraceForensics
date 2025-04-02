from flask import Flask, render_template, request, send_file
from PIL import Image
import os
from flask_cors import CORS

app = Flask(__name__)
UPLOAD_FOLDER = "static/uploads"
ENCODED_FOLDER = "static/encoded"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCODED_FOLDER, exist_ok=True)

CORS(app)  # Allow cross-origin requests

def encode_text(image_path, message, output_image):
    img = Image.open(image_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    encoded = img.copy()
    width, height = img.size
    pixels = encoded.load()
    message += "###"
    binary_message = ''.join(format(ord(i), '08b') for i in message)

    max_capacity = width * height * 3
    if len(binary_message) > max_capacity:
        print("Message too long! Truncating...")
        binary_message = binary_message[:max_capacity]

    data_index = 0
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            if data_index < len(binary_message):
                r = (r & 0xFE) | int(binary_message[data_index])
                data_index += 1
            if data_index < len(binary_message):
                g = (g & 0xFE) | int(binary_message[data_index])
                data_index += 1
            if data_index < len(binary_message):
                b = (b & 0xFE) | int(binary_message[data_index])
                data_index += 1

            pixels[x, y] = (r, g, b)

            if data_index >= len(binary_message):
                encoded.save(output_image, format="PNG")
                return output_image

def decode_text(image_path):
    img = Image.open(image_path)
    pixels = img.load()
    width, height = img.size
    
    binary_message = ""
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            binary_message += str(r & 1)
            binary_message += str(g & 1)
            binary_message += str(b & 1)

    byte_message = [binary_message[i:i+8] for i in range(0, len(binary_message), 8)]
    decoded_text = "".join([chr(int(byte, 2)) for byte in byte_message if int(byte, 2) != 0])
    
    if "###" in decoded_text:
        return decoded_text.split("###")[0]
    return None

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
                encoded_image_path = encode_text(image_path, message, output_image)
                return render_template('encode.html', original=image.filename, encoded="encoded_" + image.filename)
            except ValueError as e:
                return str(e)
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