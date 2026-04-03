import urllib.request
from PIL import Image
import io
import sys

def crop_favicon(url, output_path):
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read()
        
        img = Image.open(io.BytesIO(data)).convert("RGBA")
        
        # Get bounding box of non-transparent content
        bbox = img.getbbox()
        if bbox:
            print(f"Cropping from {img.size} to {bbox}")
            # Crop to bounding box
            cropped = img.crop(bbox)
            
            # Create a square canvas
            w, h = cropped.size
            size = max(w, h)
            
            # Make the canvas slightly larger to give a tiny bit of breathing room (e.g. 5%)
            margin = int(size * 0.05)
            final_size = size + margin * 2
            
            canvas = Image.new("RGBA", (final_size, final_size), (0, 0, 0, 0))
            
            # Center the cropped image on the square canvas
            x = (final_size - w) // 2
            y = (final_size - h) // 2
            canvas.paste(cropped, (x, y))
            
            print(f"Saving square favicon -> {output_path} (size: {final_size}x{final_size})")
            canvas.save(output_path, format="PNG")
        else:
            print("Image is entirely empty/transparent.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    url = "https://customer-assets.emergentagent.com/job_21b320ec-6500-44c0-8260-dd4b2f3c4f72/artifacts/pz2yzx51_logo%20negro%20png.png"
    output = r"c:\Users\benja\OneDrive\Desktop\ToK\tokweb\frontend\public\favicon-cropped.png"
    crop_favicon(url, output)
