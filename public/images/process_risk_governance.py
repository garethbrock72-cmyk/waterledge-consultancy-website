import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Canvas scaling factor (1 = 1024x1024, 2 = 2048x2048 for Retina sharpness)
SCALE = 2
INPUT_PATH = "image_d27f6b.jpg"
OUTPUT_PATH = "occupational_hygiene_risk_governance_2x.webp"

# Consistent Color Palette
PALETTE = {
    "cyan_title": (115, 215, 255),      # Cyan Titles / Section Headers
    "subtitle_badge": (95, 185, 235),   # Subtitles & Badges
    "primary_white": (245, 250, 255),   # Primary Readouts & Standards
    "secondary_text": (205, 228, 248),  # Secondary Bullet Text & Units
    "accent_orange": (245, 170, 75),    # Secondary Defense / Amber accents
    "accent_green": (100, 225, 135),    # Green accents
}


def load_fonts(scale=SCALE):
    bold_candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "C:/Windows/Fonts/arialbd.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    bold_path = next((p for p in bold_candidates if os.path.exists(p)), None)

    def get_f(path, size):
        return ImageFont.truetype(path, int(round(size * scale))) if path else ImageFont.load_default()

    return {
        "hero_lg": get_f(bold_path, 31.0),
        "hero_sm": get_f(bold_path, 22.5),
        "sec_title": get_f(bold_path, 19.5),
        "tier_title": get_f(bold_path, 15.0),
        "tier_title_sm": get_f(bold_path, 12.5),
        "tier_title_xs": get_f(bold_path, 11.0),
        "tier_sub": get_f(bold_path, 11.2),
        "circle_title": get_f(bold_path, 11.5),
        "circle_sub": get_f(bold_path, 10.0),
        "body_md": get_f(bold_path, 10.5),
        "body_sm": get_f(bold_path, 9.2),
        "body_xs": get_f(bold_path, 8.6),
        "nav_xs": get_f(bold_path, 8.5),
        "footer_xs": get_f(bold_path, 8.2),
    }


def sample_bg_color(arr, x1, y1, x2, y2, s=SCALE):
    h, w, _ = arr.shape
    sub = arr[
        max(0, int(y1 * s)) : min(h, int(y2 * s)),
        max(0, int(x1 * s)) : min(w, int(x2 * s)),
    ]
    lum = sub.mean(axis=2)
    mask = lum <= np.percentile(lum, 25)
    return tuple(int(c) for c in np.median(sub[mask], axis=0).astype(int))


def clear_rect(draw, arr, x1, y1, x2, y2, s=SCALE):
    bg = sample_bg_color(arr, x1, y1, x2, y2, s)
    draw.rectangle([int(x1 * s), int(y1 * s), int(x2 * s), int(y2 * s)], fill=bg)


def clear_poly(draw, arr, points, sample_box, s=SCALE):
    """Erases angled funnel or circular text regions without clipping borders."""
    bg = sample_bg_color(arr, *sample_box, s)
    scaled_pts = [(int(x * s), int(y * s)) for x, y in points]
    draw.polygon(scaled_pts, fill=bg)


def put_text(draw, x, y, text, font, fill, anchor="la", s=SCALE):
    draw.text((int(x * s), int(y * s)), text, font=font, fill=fill, anchor=anchor)


def put_multiline_centered(draw, cx, y_start, lines, font, fill, line_gap=11.5, s=SCALE):
    for i, line in enumerate(lines):
        put_text(draw, cx, y_start + i * line_gap, line, font, fill, anchor="ma", s=s)


def refine_risk_governance(input_path=INPUT_PATH, output_path=OUTPUT_PATH):
    # 1. Load & 2x Lanczos Upscale
    base_im = Image.open(input_path).convert("RGB")
    target_size = (base_im.width * SCALE, base_im.height * SCALE)
    final_im = base_im.resize(target_size, resample=Image.Resampling.LANCZOS)

    arr = np.array(final_im)
    draw = ImageDraw.Draw(final_im)
    fonts = load_fonts(SCALE)

    # =========================================================================
    # 2. LUMINANCE-SAMPLED MASKING (Erase Soft AI Typography)
    # =========================================================================

    # Top Header & Navigation
    clear_rect(draw, arr, 30, 22, 505, 114)    # Left Main Title & Subtitle
    clear_rect(draw, arr, 695, 24, 994, 42)    # Top-Right Breadcrumb
    clear_rect(draw, arr, 885, 60, 994, 108)   # Top-Right Stacked Outcomes

    # Section Headers (Extended right mask to x=990 to erase leftover 'E' in CYCLE)
    clear_rect(draw, arr, 198, 162, 518, 209)  # HIERARCHY OF CONTROL
    clear_rect(draw, arr, 634, 165, 990, 210)  # REGULATORY VERIFICATION CYCLE

    # Left Effectiveness Axis Labels (protecting the vertical arrow x=33..45)
    clear_rect(draw, arr, 30, 172, 132, 202)   # HIGHER EFFECTIVENESS
    clear_rect(draw, arr, 54, 258, 136, 290)   # REMOVES THE HAZARD
    clear_rect(draw, arr, 54, 360, 130, 390)   # REPLACES THE HAZARD
    clear_rect(draw, arr, 54, 466, 130, 496)   # ISOLATES THE HAZARD
    clear_rect(draw, arr, 54, 578, 132, 620)   # REDUCES EXPOSURE & BEHAVIOUR
    clear_rect(draw, arr, 54, 672, 128, 715)   # PROVIDES PERSONAL PROTECTION
    clear_rect(draw, arr, 30, 748, 110, 778)   # SECONDARY DEFENSE

    # Funnel Tiers (Trapezoid-aware polygons to preserve icons & slanted walls)
    # Tier 1: Elimination
    clear_poly(draw, arr, [(262, 248), (545, 248), (518, 312), (262, 312)], (265, 250, 480, 310))
    # Tier 2: Substitution
    clear_poly(draw, arr, [(280, 350), (505, 350), (478, 424), (280, 424)], (285, 352, 465, 422))
    # Tier 3: Engineering Controls
    clear_poly(draw, arr, [(302, 456), (536, 456), (502, 528), (302, 528)], (292, 485, 304, 520),
    )
    # Tier 4: Administrative (Extended top-right edge to x=511..502 to fully erase old 'S')
    clear_poly(
        draw, arr,
        [(322, 562), (511, 562), (502, 580), (476, 633), (322, 633)],
        (325, 564, 470, 630),
    )
    # Tier 5: RPE / PPE
    clear_poly(draw, arr, [(356, 665), (466, 665), (434, 738), (356, 738)], (358, 668, 435, 734))

    # Regulatory Verification Cycle (4 Circular Nodes - preserving icons & rings)
    # Top Node: Hazard Identification
    clear_poly(
        draw, arr,
        [(760, 305), (874, 305), (874, 356), (866, 376), (854, 386), (780, 386), (768, 376), (760, 356)],
        (770, 308, 860, 380),
    )
    # Right Node: Control Implementation
    clear_poly(
        draw, arr,
        [(878, 474), (992, 474), (992, 522), (982, 542), (972, 548), (896, 548), (886, 542), (878, 522)],
        (885, 476, 985, 540),
    )
    # Bottom Node: Quantitative Verification (Expanded lower arc to erase 'confirm performance.' artifacts)
    clear_poly(
        draw, arr,
        [
            (762, 622), (874, 622),
            (874, 678), (872, 696), (862, 706), (853, 711),
            (783, 711), (774, 706), (764, 696), (762, 678),
        ],
        (770, 624, 865, 702),
    )
    # Left Node: ALARP Confirmation
    clear_poly(
        draw, arr,
        [(634, 472), (742, 472), (742, 524), (734, 542), (724, 548), (652, 548), (642, 542), (634, 524)],
        (642, 474, 735, 542),
    )

    # Bottom 4 Governance Pillars
    clear_rect(draw, arr, 85, 895, 205, 932)   # PROTECT
    clear_rect(draw, arr, 300, 895, 480, 932)  # COMPLY
    clear_rect(draw, arr, 580, 895, 695, 932)  # CONTROL
    clear_rect(draw, arr, 825, 895, 940, 932)  # VERIFY

    # Footer Bar
    clear_rect(draw, arr, 30, 976, 480, 994)   # Left Footer
    clear_rect(draw, arr, 810, 976, 994, 994)  # Right Footer

    # =========================================================================
    # 3. TRUETYPE VECTOR OVERLAY (Crisp High-DPI Typography)
    # =========================================================================

    # --- Top Banner ---
    put_text(draw, 34, 24, "OCCUPATIONAL HYGIENE", fonts["hero_sm"], PALETTE["primary_white"])
    put_text(draw, 34, 53, "RISK GOVERNANCE", fonts["hero_lg"], PALETTE["cyan_title"])
    put_text(draw, 34, 100, "HEALTHY PEOPLE   /   SAFE WORKPLACES   /   SUSTAINABLE OPERATIONS", fonts["nav_xs"], PALETTE["subtitle_badge"])

    put_text(draw, 989, 27, "IDENTIFY   /   CONTROL   /   VERIFY   /   ASSURE", fonts["nav_xs"], PALETTE["secondary_text"], anchor="ra")
    put_text(draw, 989, 62, "LESS EXPOSURE", fonts["nav_xs"], PALETTE["secondary_text"], anchor="ra")
    put_text(draw, 989, 78, "LOWER RISK", fonts["nav_xs"], PALETTE["secondary_text"], anchor="ra")
    put_text(draw, 989, 94, "BETTER OUTCOMES", fonts["nav_xs"], PALETTE["primary_white"], anchor="ra")

    # --- Section Headers ---
    put_text(draw, 358, 165, "HIERARCHY OF CONTROL", fonts["sec_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 358, 193, "(IN ORDER OF EFFECTIVENESS)", fonts["body_sm"], PALETTE["subtitle_badge"], anchor="ma")

    put_text(draw, 815, 165, "REGULATORY VERIFICATION CYCLE", fonts["sec_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 815, 192, "(CLOSED LOOP)", fonts["body_sm"], PALETTE["subtitle_badge"], anchor="ma")

    # --- Left Effectiveness Axis ---
    put_text(draw, 34, 174, "HIGHER", fonts["body_xs"], PALETTE["cyan_title"])
    put_text(draw, 34, 186, "EFFECTIVENESS", fonts["body_xs"], PALETTE["cyan_title"])

    put_text(draw, 58, 261, "REMOVES", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 273, "THE HAZARD", fonts["body_xs"], PALETTE["secondary_text"])

    put_text(draw, 58, 362, "REPLACES", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 374, "THE HAZARD", fonts["body_xs"], PALETTE["secondary_text"])

    put_text(draw, 58, 469, "ISOLATES", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 481, "THE HAZARD", fonts["body_xs"], PALETTE["secondary_text"])

    put_text(draw, 58, 580, "REDUCES", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 592, "EXPOSURE", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 604, "& BEHAVIOUR", fonts["body_xs"], PALETTE["secondary_text"])

    put_text(draw, 58, 675, "PROVIDES", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 687, "PERSONAL", fonts["body_xs"], PALETTE["secondary_text"])
    put_text(draw, 58, 699, "PROTECTION", fonts["body_xs"], PALETTE["secondary_text"])

    put_text(draw, 34, 750, "SECONDARY", fonts["body_xs"], PALETTE["accent_orange"])
    put_text(draw, 34, 763, "DEFENSE", fonts["body_xs"], PALETTE["accent_orange"])

    # --- Hierarchy of Control Funnel Tiers ---
    # 1. Elimination
    put_text(draw, 268, 251, "1. ELIMINATION", fonts["tier_title"], PALETTE["primary_white"])
    put_text(draw, 291, 278, "Remove the hazard completely", fonts["body_md"], PALETTE["secondary_text"])
    put_text(draw, 291, 293, "from the workplace.", fonts["body_md"], PALETTE["secondary_text"])

    # 2. Substitution
    put_text(draw, 285, 351, "2. SUBSTITUTION", fonts["tier_title"], PALETTE["primary_white"])
    put_text(draw, 309, 372, "(Low-Volatility / Solids)", fonts["tier_sub"], PALETTE["cyan_title"])
    put_text(draw, 309, 393, "Replace with a safer alternative", fonts["body_sm"], PALETTE["secondary_text"])
    put_text(draw, 309, 406, "(low volatility or solid form).", fonts["body_sm"], PALETTE["secondary_text"])

    # 3. Engineering Controls
    put_text(draw, 306, 457, "3. ENGINEERING CONTROLS", fonts["tier_title_sm"], PALETTE["primary_white"])
    put_text(draw, 328, 477, "(LEV Enclosure & Capture)", fonts["tier_sub"], PALETTE["accent_green"])
    put_text(draw, 328, 498, "Isolate and capture at source", fonts["body_sm"], PALETTE["secondary_text"])
    put_text(draw, 328, 511, "(e.g. local exhaust ventilation).", fonts["body_sm"], PALETTE["secondary_text"])

    # 4. Administrative
    put_text(draw, 326, 563, "4. ADMINISTRATIVE", fonts["tier_title_sm"], PALETTE["primary_white"])
    put_text(draw, 347, 582, "(SSoW)", fonts["tier_sub"], PALETTE["accent_orange"])
    put_text(draw, 347, 602, "Manage people, processes", fonts["body_sm"], PALETTE["secondary_text"])
    put_text(draw, 347, 615, "and procedures.", fonts["body_sm"], PALETTE["secondary_text"])

    # 5. RPE / PPE
    put_text(draw, 402, 667, "5. RPE / PPE", fonts["tier_title_sm"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 402, 684, "(HSG 53)", fonts["body_sm"], PALETTE["accent_orange"], anchor="ma")
    put_text(draw, 402, 704, "Last line of defence", fonts["body_xs"], PALETTE["secondary_text"], anchor="ma")
    put_text(draw, 402, 717, "for residual risk.", fonts["body_xs"], PALETTE["secondary_text"], anchor="ma")

    # --- Regulatory Verification Cycle (4 Nodes) ---
    # Node 1 (Top): Hazard Identification
    put_text(draw, 817, 307, "HAZARD", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 817, 322, "IDENTIFICATION", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_multiline_centered(
        draw, 817, 343,
        ["Identify hazards,", "assess risks, define", "control needs."],
        fonts["body_xs"], PALETTE["secondary_text"], line_gap=11.5
    )

    # Node 2 (Right): Control Implementation
    put_text(draw, 935, 476, "CONTROL", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 935, 491, "IMPLEMENTATION", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_multiline_centered(
        draw, 935, 514,
        ["Apply controls from", "the hierarchy."],
        fonts["body_xs"], PALETTE["secondary_text"], line_gap=11.5
    )

    # Node 3 (Bottom): Quantitative Verification
    put_text(draw, 818, 622, "QUANTITATIVE", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 818, 637, "VERIFICATION", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 818, 653, "(COSHH Reg 7 & 10)", fonts["circle_sub"], PALETTE["accent_orange"], anchor="ma")
    put_multiline_centered(
        draw, 818, 672,
        ["Measure exposure,", "compare to limits,", "confirm performance."],
        fonts["body_xs"], PALETTE["secondary_text"], line_gap=11.0
    )

    # Node 4 (Left): ALARP Confirmation
    put_text(draw, 688, 474, "ALARP", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_text(draw, 688, 489, "CONFIRMATION", fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
    put_multiline_centered(
        draw, 688, 510,
        ["Risk reduced to", "as low as reasonably", "practicable."],
        fonts["body_xs"], PALETTE["secondary_text"], line_gap=11.5
    )

    # --- Bottom 4 Governance Pillars ---
    pillars = [
        (146, "PROTECT", "WORKER HEALTH"),
        (391, "COMPLY", "REGULATORY REQUIREMENTS"),
        (638, "CONTROL", "RISK AT SOURCE"),
        (882, "VERIFY", "WITH EVIDENCE"),
    ]
    for cx, title, sub in pillars:
        put_text(draw, cx, 897, title, fonts["circle_title"], PALETTE["primary_white"], anchor="ma")
        put_text(draw, cx, 915, sub, fonts["body_xs"], PALETTE["subtitle_badge"], anchor="ma")

    # --- Footer Bar ---
    put_text(draw, 34, 979, "OCCUPATIONAL HYGIENE   /   RISK GOVERNANCE   /   COMPLIANCE   /   ALARP", fonts["footer_xs"], PALETTE["subtitle_badge"])
    put_text(draw, 989, 979, "COSHH   /   HSG 53   /   REG 7 & 10", fonts["footer_xs"], PALETTE["subtitle_badge"], anchor="ra")

    # 4. WebP Output Encoding
    final_im.save(output_path, format="WEBP", quality=95, method=6)
    print(f"Saved high-DPI WebP to: {output_path} ({final_im.size[0]}x{final_im.size[1]})")


if __name__ == "__main__":
    refine_risk_governance()