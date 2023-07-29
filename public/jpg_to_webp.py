import os
import subprocess

# path to cwebp
cwebp_path = "C:/WebDevelopment/libwebp-1.3.1-windows-x64/bin/cwebp.exe"

# quality of the output image
quality = 100

# walk the current directory
for dirpath, dirnames, filenames in os.walk("."):
    # for each file in the directory
    for filename in filenames:
        # if the file is a jpg file
        if filename.lower().endswith(".jpg"):
            # full path to the jpg file
            jpg_file = os.path.join(dirpath, filename)
            # full path to the webp file
            webp_file = os.path.join(dirpath, os.path.splitext(filename)[0] + ".webp")
            # convert jpg to webp using cwebp
            subprocess.run([cwebp_path, "-q", str(quality), jpg_file, "-o", webp_file])
