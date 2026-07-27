"""
Compress profile.png -> profile.webp
- Resize to max 1000x1000 (2x retina for ~500px display)
- Preserve alpha transparency
- WebP quality 92 (visually lossless)
"""
from PIL import Image
from pathlib import Path

SRC = Path("/home/z/my-project/public/media/profile.png")
DST_WEBP = Path("/home/z/my-project/public/media/profile.webp")
DST_JPG_FALLBACK = Path("/home/z/my-project/public/media/profile.jpg")

MAX_SIZE = 1000  # max dimension; square image stays square
WEBP_QUALITY = 92
JPEG_QUALITY = 95

original_size = SRC.stat().st_size

with Image.open(SRC) as img:
    img.load()  # detach from file
    # Resize using LANCZOS (best downscaling filter)
    w, h = img.size
    scale = min(MAX_SIZE / w, MAX_SIZE / h)
    new_size = (round(w * scale), round(h * scale))
    img_resized = img.resize(new_size, Image.LANCZOS)

    # Save as WebP (preserves alpha)
    img_resized.save(DST_WEBP, format="WEBP", quality=WEBP_QUALITY, method=6, alpha_quality=100)

    # Save as high-quality JPEG fallback (flatten alpha onto dark background matching site)
    if img_resized.mode in ("RGBA", "LA"):
        bg = Image.new("RGB", img_resized.size, (15, 14, 23))  # site dark bg
        bg.paste(img_resized, mask=img_resized.split()[-1])
        img_for_jpg = bg
    else:
        img_for_jpg = img_resized.convert("RGB")
    img_for_jpg.save(DST_JPG_FALLBACK, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)

webp_size = DST_WEBP.stat().st_size
jpg_size = DST_JPG_FALLBACK.stat().st_size

def kb(n):
    return f"{n/1024:.1f} KB"

print("=" * 60)
print("Profile image compression results")
print("=" * 60)
print(f"Original (PNG):   {original_size:>10,} bytes  ({kb(original_size)})")
print(f"WebP q={WEBP_QUALITY}:     {webp_size:>10,} bytes  ({kb(webp_size)})  -> {webp_size/original_size*100:.1f}% of original")
print(f"JPEG q={JPEG_QUALITY}:    {jpg_size:>10,} bytes  ({kb(jpg_size)})  -> {jpg_size/original_size*100:.1f}% of original")
print()
print(f"Recommended: WebP ({kb(webp_size)}) -- visually lossless, preserves transparency")
