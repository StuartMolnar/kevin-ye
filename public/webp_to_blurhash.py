import os
import json
from PIL import Image
from blurhash import encode

def generate_blurhash(image_path: str) -> str:
    with Image.open(image_path) as img:
        return encode(img, x_components=4, y_components=3)

def process_directory():
    directory = os.getcwd()  # get the current directory
    blurhash_map = {}  # store the blurhashes

    for subdir, dirs, files in os.walk(directory):
        for file in files:
            filepath = subdir + os.sep + file

            if filepath.endswith(".webp"):
                blurhash_str = generate_blurhash(filepath)
                blurhash_map[file] = blurhash_str  # save the blurhash in the map

    # Write the blurhashes to a json file
    with open('blurhash_map.json', 'w') as f:
        json.dump(blurhash_map, f, indent=4)

if __name__ == "__main__":
    process_directory()
