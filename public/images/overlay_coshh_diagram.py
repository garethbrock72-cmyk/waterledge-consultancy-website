import os
from PIL import Image, ImageDraw, ImageFont

src_path = "public/images/coshh-personal-sampling.jpeg"
dst_webp = "public/images/coshh-exposure-assessment.webp"
dst_jpg = "public/images/coshh-exposure-assessment-clean.jpg"

img = Image.open(src_path).convert("RGBA")
W, H = img.size
draw = ImageDraw.Draw(img)

def get_font(size_ratio, bold=False):
    size = int(H * size_ratio)
    mac_fonts = (
        [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "/Library/Fonts/Arial Bold.ttf",
        ]
        if bold
        else [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "/Library/Fonts/Arial.ttf",
        ]
    )
    for path in mac_fonts:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default(size=size)

# Typography scale
f_title = get_font(0.022, bold=True)
f_sub = get_font(0.013, bold=False)
f_proc_title = get_font(0.0185, bold=True)
f_proc_sub = get_font(0.0155, bold=True)
f_box_h = get_font(0.021, bold=True)
f_bullet = get_font(0.0135, bold=False)
f_callout_h = get_font(0.0155, bold=True)
f_callout_b = get_font(0.0135, bold=False)
f_bz_h = get_font(0.018, bold=True)
f_bz_b = get_font(0.014, bold=True)
f_leg_h = get_font(0.014, bold=True)
f_leg_b = get_font(0.0135, bold=False)
f_scale = get_font(0.0115, bold=False)

# Palette matched to schematic
BG_MAIN = (11, 22, 38, 255)
BG_CARD = (13, 25, 43, 255)
WHITE = (245, 248, 252, 255)
MUTED = (165, 185, 208, 255)
BODY = (215, 228, 242, 255)
BLUE_ACCENT = (78, 155, 215, 255)

def mask_box(x1, y1, x2, y2, fill=BG_MAIN):
    draw.rectangle([int(x1 * W), int(y1 * H), int(x2 * W), int(y2 * H)], fill=fill)

def put_text(x, y, text, font, fill=WHITE, line_spacing=0.019):
    lines = text.split("\n")
    curr_y = int(y * H)
    for line in lines:
        draw.text((int(x * W), curr_y), line, font=font, fill=fill)
        curr_y += int(line_spacing * H)

# --- 1. TOP LEFT HEADER ---
mask_box(0.02, 0.012, 0.55, 0.038)
mask_box(0.02, 0.045, 0.48, 0.068)
put_text(0.026, 0.016, "OCCUPATIONAL HYGIENE PERSONAL SAMPLING", f_title, WHITE)
put_text(0.026, 0.049, "AIR SAMPLING   /   EXPOSURE ASSESSMENT   /   COMPLIANCE", f_sub, MUTED)

# --- 2. TOP RIGHT HEADER ---
mask_box(0.66, 0.018, 0.97, 0.066)
put_text(0.668, 0.023, "OCCUPATIONAL HYGIENE PROCESS", f_proc_title, WHITE)
put_text(0.668, 0.046, "FROM RISK TO COMPLIANCE", f_proc_sub, BLUE_ACCENT)

# --- 3. BREATHING ZONE CALLOUT ---
mask_box(0.548, 0.245, 0.658, 0.320)
put_text(0.551, 0.250, "300 mm", f_bz_h, BLUE_ACCENT)
put_text(0.551, 0.274, "Breathing Zone\n(BS EN 689)", f_bz_b, BLUE_ACCENT, line_spacing=0.019)

# --- 4. CENTRAL CALLOUTS ---
# IOM Sampling Cassette
mask_box(0.425, 0.380, 0.625, 0.448)
put_text(0.428, 0.388, "IOM Sampling Cassette", f_callout_h, WHITE)

# Clear flexible sampling tubing
mask_box(0.425, 0.525, 0.625, 0.598)