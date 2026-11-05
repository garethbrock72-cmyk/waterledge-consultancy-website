import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# ==============================================================================
# 1. FILE CONFIGURATION (Matches your local filenames)
# ==============================================================================
BASE_IMAGE_PATH = "tied_wire.jpg"
CLEAN_ACCEL_IMAGE_PATH = "clean_block.jpg"
OUTPUT_PATH = "hav_noise_assessment_cleaned.webp"

# Render at 2x resolution (2048x2048) so small typography is razor-sharp
SCALE = 2


def load_fonts(scale=SCALE):
    bold_candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]
    bold_path = next((p for p in bold_candidates if os.path.exists(p)), None)

    def get_f(path, size):
        return ImageFont.truetype(path, int(size * scale)) if path else ImageFont.load_default()

    # All smaller text is now set to bold_path to match ACOUSTIC SOURCE bullets
    return {
        "title": get_f(bold_path, 21),
        "subtitle": get_f(bold_path, 13),
        "sub_sm": get_f(bold_path, 10),
        "sec_hdr": get_f(bold_path, 13.5),
        "sec_sub": get_f(bold_path, 10),
        "label_b": get_f(bold_path, 10.5),
        "label_b_lg": get_f(bold_path, 12.5),
        "label_r": get_f(bold_path, 9.5),
        "label_xs_b": get_f(bold_path, 10),
        "label_xs": get_f(bold_path, 9.2),
        "label_xxs": get_f(bold_path, 8.8),
        "axis_md": get_f(bold_path, 12.5),
        "footer": get_f(bold_path, 9.2),
    }


# ==============================================================================
# 2. MECHANICAL FIX: CABLE TIE THROUGH LOWER ACCELEROMETER SLOT
# ==============================================================================
def fix_accelerometer_and_cable_tie(base_img, clean_img=None):
    img = base_img.copy()

    if clean_img is not None and clean_img.size == img.size:
        mask = Image.new("L", (60, 62), 0)
        m_draw = ImageDraw.Draw(mask)
        m_draw.polygon(
            [(6, 6), (36, 1), (56, 10), (56, 54), (34, 59), (6, 48)],
            fill=255,
        )
        mask = mask.filter(ImageFilter.GaussianBlur(1.0))
        crop_clean = clean_img.crop((192, 448, 252, 510))
        img.paste(crop_clean, (192, 448), mask)

    draw = ImageDraw.Draw(img)

    flange_fill = (38, 62, 88)
    flange_outline = (130, 175, 215)

    # Slotted mounting base shoe pressing against the handle
    draw.polygon(
        [(193, 460), (203, 456), (203, 501), (193, 496)],
        fill=flange_fill,
        outline=flange_outline,
    )

    # Recessed slot aperture in the lower mounting base
    slot_dark = (10, 20, 32)
    draw.polygon(
        [(195, 471), (202, 469), (202, 483), (195, 481)],
        fill=slot_dark,
        outline=(90, 130, 165),
    )

    # Cable tie strap entering the lower slot from the handle grip
    tie_body = (48, 72, 98)
    tie_edge_top = (145, 185, 220)
    tie_edge_bot = (25, 42, 62)

    draw.polygon(
        [(172, 471), (200, 472), (200, 480), (172, 479)],
        fill=tie_body,
    )
    draw.line([(172, 471), (200, 472)], fill=tie_edge_top, width=1)
    draw.line([(172, 479), (200, 480)], fill=tie_edge_bot, width=1)

    # Outer bridge of the accelerometer base flange overlapping the slot
    draw.polygon(
        [(200, 457), (205, 455), (205, 501), (200, 499)],
        fill=(72, 105, 138),
        outline=flange_outline,
    )
    draw.line([(205, 455), (205, 501)], fill=(180, 215, 245), width=1)

    return img


# ==============================================================================
# 3. 2X HIGH-DPI TEXT MASKING & TYPOGRAPHY OVERWRITE
# ==============================================================================
def sample_bg_color(arr, x1, y1, x2, y2, s=SCALE):
    h, w, _ = arr.shape
    sx1, sy1 = max(0, int(x1 * s)), max(0, int(y1 * s))
    sx2, sy2 = min(w, int(x2 * s)), min(h, int(y2 * s))
    sub = arr[sy1:sy2, sx1:sx2]
    lum = sub.mean(axis=2)
    mask = lum <= np.percentile(lum, 25)
    rgb = np.median(sub[mask], axis=0).astype(int)
    return tuple(int(c) for c in rgb)


def clear_rect(draw, arr, x1, y1, x2, y2, s=SCALE):
    bg = sample_bg_color(arr, x1, y1, x2, y2, s)
    draw.rectangle([int(x1 * s), int(y1 * s), int(x2 * s), int(y2 * s)], fill=bg)


def put_text(draw, x, y, text, font, fill, s=SCALE):
    draw.text((int(x * s), int(y * s)), text, font=font, fill=fill)


def draw_bullet_list(draw, x, y, items, font, color=(210, 232, 250), line_gap=13, s=SCALE):
    for i, item in enumerate(items):
        cy = y + i * line_gap
        put_text(draw, x, cy, f"•  {item}", font=font, fill=color, s=s)


def clean_all_text_hi_dpi(img_1x):
    # Upscale to 2048x2048 before masking and drawing crisp vector fonts
    w, h = img_1x.size
    img = img_1x.resize((w * SCALE, h * SCALE), Image.Resampling.LANCZOS)
    arr = np.array(img)
    draw = ImageDraw.Draw(img)
    f = load_fonts(SCALE)

    C_CYAN_BRIGHT = (115, 215, 255)
    C_CYAN_MED = (95, 185, 235)
    C_WHITE = (245, 250, 255)
    C_LIGHT = (205, 228, 248)
    C_ORANGE = (245, 170, 75)
    C_GREEN = (100, 225, 135)

    # A. TOP BANNER ("OCCUPATIONAL HYGIENE")
    clear_rect(draw, arr, 18, 12, 415, 74)
    put_text(draw, 22, 13, "OCCUPATIONAL HYGIENE", font=f["title"], fill=C_CYAN_BRIGHT)
    put_text(draw, 22, 38, "VIBRATION & NOISE EXPOSURE ASSESSMENT", font=f["subtitle"], fill=C_CYAN_MED)
    put_text(draw, 22, 58, "MEASURE   /   ANALYSE   /   PROTECT", font=f["sub_sm"], fill=C_LIGHT)

    # B. SECTION HEADERS 1 & 2
    clear_rect(draw, arr, 62, 95, 440, 128)
    put_text(draw, 64, 96, "HAND-ARM VIBRATION (HAV) MEASUREMENT", font=f["sec_hdr"], fill=C_CYAN_BRIGHT)
    put_text(draw, 64, 114, "TRI-AXIAL ACCELEROMETER MOUNTED ON POWER TOOL HANDLE", font=f["sec_sub"], fill=C_LIGHT)

    clear_rect(draw, arr, 538, 95, 876, 128)
    put_text(draw, 548, 96, "NOISE EXPOSURE MEASUREMENT", font=f["sec_hdr"], fill=C_CYAN_BRIGHT)
    put_text(draw, 548, 114, "CLASS 1 SOUND LEVEL METER ON INDUSTRIAL TRIPOD", font=f["sec_sub"], fill=C_LIGHT)

    # C. POWER TOOL HANDLE CALLOUT
    clear_rect(draw, arr, 20, 190, 138, 204)
    clear_rect(draw, arr, 20, 209, 142, 252)
    put_text(draw, 25, 191, "POWER TOOL HANDLE", font=f["label_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 25, 211,
        ["rubberised grip", "rigid mounting surface", "minimal damping"],
        font=f["label_r"], color=C_LIGHT, line_gap=13
    )

    # D. TRI-AXIAL ACCELEROMETER CALLOUT
    clear_rect(draw, arr, 304, 518, 420, 604)
    put_text(draw, 307, 519, "TRI-AXIAL", font=f["label_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 307, 532, "ACCELEROMETER", font=f["label_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 307, 546, "(miniature, PCB type)", font=f["label_r"], fill=C_LIGHT)
    draw_bullet_list(
        draw, 307, 563,
        ["10 mV/g (typ.)", "±50 g range", "3-axis (X, Y, Z)"],
        font=f["label_r"], color=C_WHITE, line_gap=14
    )

    # E. X, Y, Z AXES BS EN ISO 5349-1 BLOCK
    clear_rect(draw, arr, 288, 623, 464, 674)
    put_text(draw, 291, 625, "X, Y, Z axes (ahwx, ahwy, ahwz)", font=f["label_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 291, 640, "compliant with", font=f["label_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 291, 656, "BS EN ISO 5349-1", font=f["label_b_lg"], fill=C_WHITE)

    clear_rect(draw, arr, 329, 685, 464, 757)
    put_text(draw, 333, 688, "X", font=f["axis_md"], fill=C_ORANGE)
    put_text(draw, 348, 689, "(ahwx)  –  transverse", font=f["label_r"], fill=C_LIGHT)

    put_text(draw, 333, 714, "Y", font=f["axis_md"], fill=C_GREEN)
    put_text(draw, 348, 715, "(ahwy)  –  longitudinal", font=f["label_r"], fill=C_LIGHT)

    put_text(draw, 333, 740, "Z", font=f["axis_md"], fill=C_CYAN_BRIGHT)
    put_text(draw, 348, 741, "(ahwz)  –  vertical", font=f["label_r"], fill=C_LIGHT)

    # F. BOTTOM-LEFT BOXES (ISOMETRIC VIEW & STANDARDS)
    # 1. Wipe the old middle divider (x=256) and the entire inner "box-within-a-box" (x=266..454)
    clear_rect(draw, arr, 230, 787, 462, 950)

    # 2. Draw the new vertical dividing line shifted left to x=234 (from top border y=785 to bottom border y=952)
    draw.line(
        [(int(234 * SCALE), int(785 * SCALE)), (int(234 * SCALE), int(952 * SCALE))],
        fill=(65, 135, 185),
        width=int(1.5 * SCALE),
    )

    # 3. Box 1 Title & Isometric Axis Labels (kept strictly left of x=232)
    clear_rect(draw, arr, 24, 790, 231, 805)
    put_text(draw, 26, 792, "TRI-AXIAL ORIENTATION (ISOMETRIC VIEW)", font=f["label_xxs"], fill=C_CYAN_BRIGHT)

    clear_rect(draw, arr, 102, 809, 155, 826)
    put_text(draw, 105, 811, "Z (ahwz)", font=f["label_xs"], fill=C_CYAN_BRIGHT)

    clear_rect(draw, arr, 172, 854, 231, 873)
    put_text(draw, 174, 857, "Y (ahwy)", font=f["label_xs"], fill=C_GREEN)

    clear_rect(draw, arr, 178, 916, 231, 934)
    put_text(draw, 180, 919, "X (ahwx)", font=f["label_xs"], fill=C_ORANGE)

    # 4. Box 2 Standards & Requirements (No inner box, cleanly aligned at x=244)
    put_text(draw, 244, 792, "STANDARDS & REQUIREMENTS", font=f["label_xs_b"], fill=C_CYAN_BRIGHT)
    draw.line(
        [(int(244 * SCALE), int(808 * SCALE)), (int(452 * SCALE), int(808 * SCALE))],
        fill=(55, 115, 160),
        width=int(1 * SCALE),
    )

    put_text(draw, 244, 816, "BS EN ISO 5349-1", font=f["label_b"], fill=C_WHITE)
    put_text(draw, 244, 834, "Mechanical vibration —", font=f["label_xs"], fill=C_LIGHT)
    put_text(draw, 244, 848, "Measurement and evaluation of", font=f["label_xs"], fill=C_LIGHT)
    put_text(draw, 244, 862, "human exposure to hand-transmitted", font=f["label_xs"], fill=C_LIGHT)
    put_text(draw, 244, 876, "vibration — Part 1: General requirements", font=f["label_xs"], fill=C_LIGHT)

    put_text(draw, 244, 904, "Tri-axial measurement, frequency weighting", font=f["label_xxs"], fill=C_LIGHT)
    put_text(draw, 244, 918, "and time weighting per standard.", font=f["label_xxs"], fill=C_LIGHT)

    # G. RIGHT PANEL: NOISE EXPOSURE MEASUREMENT CALLOUTS
    clear_rect(draw, arr, 886, 119, 1012, 134)
    clear_rect(draw, arr, 884, 139, 1012, 179)
    put_text(draw, 888, 120, "ACOUSTIC SOURCE", font=f["label_b"], fill=C_ORANGE)
    draw_bullet_list(
        draw, 886, 141,
        ["industrial machinery", "broadband noise", "tonal components"],
        font=f["label_xs"], color=C_LIGHT, line_gap=12.5
    )

    clear_rect(draw, arr, 491, 219, 608, 244)
    clear_rect(draw, arr, 491, 250, 602, 292)
    put_text(draw, 494, 219, "CLASS 1", font=f["label_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 494, 231, "SOUND LEVEL METER", font=f["label_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 494, 252,
        ["IEC 61672-1", "Class 1 accuracy", "1/1 octave & FFT"],
        font=f["label_r"], color=C_LIGHT, line_gap=13
    )

    clear_rect(draw, arr, 709, 309, 765, 323)
    put_text(draw, 711, 310, "0° (on-axis)", font=f["label_xs_b"], fill=C_WHITE)

    clear_rect(draw, arr, 495, 479, 574, 527)
    put_text(draw, 508, 480, "1.5 m", font=f["sec_hdr"], fill=C_CYAN_BRIGHT)
    put_text(draw, 498, 498, "(microphone", font=f["label_r"], fill=C_LIGHT)
    put_text(draw, 498, 511, "centre height)", font=f["label_r"], fill=C_LIGHT)

    clear_rect(draw, arr, 753, 505, 905, 531)
    clear_rect(draw, arr, 807, 535, 898, 565)
    put_text(draw, 756, 505, "SOUND PRESSURE WAVEFRONTS", font=f["label_xs_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 756, 518, "(concentric contours)", font=f["label_xs"], fill=C_LIGHT)
    put_text(draw, 810, 536, "= 10 dB (relative)", font=f["label_r"], fill=C_LIGHT)
    put_text(draw, 810, 552, "= 20 dB (relative)", font=f["label_r"], fill=C_LIGHT)

    # H. 1/1 OCTAVE BAND FREQUENCY BREAKDOWN TABLE
    clear_rect(draw, arr, 754, 584, 996, 613)
    put_text(draw, 758, 585, "1/1 OCTAVE BAND FREQUENCY BREAKDOWN", font=f["label_xs_b"], fill=C_CYAN_BRIGHT)
    put_text(draw, 758, 598, "(example)", font=f["label_xs"], fill=C_LIGHT)

    clear_rect(draw, arr, 758, 620, 812, 814)
    clear_rect(draw, arr, 950, 620, 994, 814)

    freqs = ["16 Hz", "31.5 Hz", "63 Hz", "125 Hz", "250 Hz", "500 Hz", "1 kHz", "2 kHz", "4 kHz", "8 kHz", "16 kHz"]
    dbs = ["72.3 dB", "78.6 dB", "84.7 dB", "88.9 dB", "92.4 dB", "96.1 dB", "93.8 dB", "88.7 dB", "82.5 dB", "76.2 dB", "68.9 dB"]
    row_ys = [621, 639, 657, 675, 693, 711, 729, 747, 765, 784, 802]

    for fr, db_val, ry in zip(freqs, dbs, row_ys):
        fw = draw.textlength(fr, font=f["label_xs"])
        draw.text((int(808 * SCALE) - fw, int(ry * SCALE)), fr, font=f["label_xs"], fill=C_LIGHT)
        put_text(draw, 952, ry, db_val, font=f["label_xs"], fill=C_WHITE)

    # Industrial Survey Tripod (Extended bottom mask to y=841)
    clear_rect(draw, arr, 567, 784, 696, 796)
    clear_rect(draw, arr, 570, 803, 688, 841)
    put_text(draw, 570, 784, "INDUSTRIAL SURVEY TRIPOD", font=f["label_xs_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 574, 804,
        ["adjustable height", "stable base", "vibration-isolated feet"],
        font=f["label_xs"], color=C_LIGHT, line_gap=11.5
    )

    # I. BOTTOM RIGHT SUMMARY BOXES
    # Column 1: Results (Icon ends at x=543, right divider is at x=661)
    clear_rect(draw, arr, 545, 870, 658, 952)
    put_text(draw, 547, 880, "RESULTS", font=f["label_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 547, 902,
        ["A-weighted SPL (dB(A))", "1/1 octave band levels", "Time history / Leq"],
        font=f["label_xxs"], color=C_LIGHT, line_gap=14
    )

    # Column 2: Compliance (Icon ends at x=715, right divider is at x=849)
    clear_rect(draw, arr, 717, 870, 846, 952)
    put_text(draw, 719, 880, "COMPLIANCE", font=f["label_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 719, 902,
        ["IEC 61672-1 (SLM)", "ISO 9612 (noise dosimetry)", "Control limits (e.g. 85 dB(A))"],
        font=f["label_xxs"], color=C_LIGHT, line_gap=14
    )

    # Column 3: Health & Safety (Icon ends at x=904, right border is at x=1004)
    clear_rect(draw, arr, 905, 870, 1002, 952)
    put_text(draw, 906, 880, "HEALTH & SAFETY", font=f["label_b"], fill=C_CYAN_BRIGHT)
    draw_bullet_list(
        draw, 906, 902,
        ["Reduce exposure", "Use hearing protection", "Implement controls"],
        font=f["label_xxs"], color=C_LIGHT, line_gap=14
    )

    # J. FOOTERS ("OCCUPATIONAL HYGIENE")
    clear_rect(draw, arr, 15, 984, 380, 1002)
    put_text(draw, 18, 986, "BETTER DATA   /   SAFER WORKPLACES   /   HEALTHIER PEOPLE", font=f["footer"], fill=C_CYAN_MED)

    clear_rect(draw, arr, 680, 984, 1014, 1002)
    put_text(draw, 685, 986, "OCCUPATIONAL HYGIENE   |   VIBRATION   •   NOISE   •   ERGONOMICS", font=f["footer"], fill=C_CYAN_MED)

    return img


if __name__ == "__main__":
    base_im = Image.open(BASE_IMAGE_PATH).convert("RGB")
    clean_im = (
        Image.open(CLEAN_ACCEL_IMAGE_PATH).convert("RGB")
        if os.path.exists(CLEAN_ACCEL_IMAGE_PATH)
        else None
    )
    step1 = fix_accelerometer_and_cable_tie(base_im, clean_im)
    final_im = clean_all_text_hi_dpi(step1)
    final_im.save(OUTPUT_PATH, format="WEBP", quality=95, method=6)
    print(f"Saved 2x High-DPI ({final_im.size[0]}x{final_im.size[1]}) infographic to: {OUTPUT_PATH}")