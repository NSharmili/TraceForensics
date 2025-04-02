from flask import Flask, render_template, request, send_from_directory
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
UPLOAD_FOLDER = "static/uploads"
ENCODED_FOLDER = "static/encoded"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCODED_FOLDER, exist_ok=True)

def encode_image(cover_path, secret_path, output_path):
    cover = Image.open(cover_path).convert('RGB')
    secret = Image.open(secret_path).convert('RGB').resize(cover.size)
    cover_data = np.array(cover)
    secret_data = np.array(secret) // 16  # Reduce secret image bit depth
    encoded_data = (cover_data & 0xF0) | (secret_data & 0x0F)  # Embed secret
    encoded_img = Image.fromarray(encoded_data.astype('uint8'))
    encoded_img.save(output_path, format="PNG")
    return output_path

def decode_image(encoded_path, output_path):
    encoded = Image.open(encoded_path)
    encoded_data = np.array(encoded)
    secret_data = (encoded_data & 0x0F) * 16  # Extract secret
    secret_img = Image.fromarray(secret_data.astype('uint8'))
    secret_img.save(output_path, format="PNG")
    return output_path

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encode', methods=['GET', 'POST'])
def encode():
    if request.method == 'POST':
        cover = request.files['cover_image']
        secret = request.files['secret_image']
        if cover and secret:
            cover_path = os.path.join(UPLOAD_FOLDER, cover.filename)
            secret_path = os.path.join(UPLOAD_FOLDER, secret.filename)
            output_path = os.path.join(ENCODED_FOLDER, 'encoded_' + cover.filename)
            cover.save(cover_path)
            secret.save(secret_path)
            encode_image(cover_path, secret_path, output_path)
            return render_template('encode.html', original=cover.filename, encoded='encoded_' + cover.filename)
    return render_template('encode.html')

@app.route('/decode', methods=['GET', 'POST'])
def decode():
    if request.method == 'POST':
        encoded = request.files['encoded_image']
        if encoded:
            encoded_path = os.path.join(ENCODED_FOLDER, encoded.filename)
            output_path = os.path.join(ENCODED_FOLDER, 'decoded_' + encoded.filename)
            encoded.save(encoded_path)
            decode_image(encoded_path, output_path)
            return render_template('decode.html', encoded=encoded.filename, decoded='decoded_' + encoded.filename)
    return render_template('decode.html')

@app.route('/download/<filename>')
def download_file(filename):
    return send_from_directory(ENCODED_FOLDER, filename)

if __name__ == '__main__':
    app.run(port=5001)  # Change the port as needed
