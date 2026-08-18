#!/usr/bin/env python3
"""
Generates consistent, on-brand placeholder SVG illustrations for
ArcticAir Pro Services (navy / ice-blue / electric-cyan technical style).

These are illustrative demo graphics only, referenced from public/images/.
Replace with real photography for a production deployment (see README).
"""
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)

NAVY_950 = "#050b16"
NAVY_900 = "#0a1526"
NAVY_800 = "#0f1f36"
ICE_300 = "#7dd6fb"
ICE_400 = "#45c2ef"
ACCENT_400 = "#4deeff"
ACCENT_500 = "#14d4f4"
WHITE = "#ffffff"

ICONS = {
    "install": "M18 44h28 M22 44V21a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v23 M22 32h14 M18 8h7 M25 8h7",
    "repair": "M27.2 12.5a7 7 0 0 1-9.4 9.4L10 30l3.5 3.5 7.5-7.5a7 7 0 0 1 9.4-9.4l-4.5 4.5-3.5-3.5 4.5-4.5z",
    "maintenance": "M24 9v4 M24 35v4 M9 24h4 M35 24h4 M13.6 13.6l2.8 2.8 M31.6 31.6l2.8 2.8 M13.6 34.4l2.8-2.8 M31.6 16.4l2.8-2.8 M24 17a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
    "cleaning": "M6 24h36 M10 24l3 14a4 4 0 0 0 4 3h14a4 4 0 0 0 4-3l3-14 M16 24V12a8 8 0 0 1 16 0v12 M24 6v2",
    "gas": "M24 6s10 11 10 19a10 10 0 0 1-20 0C14 17 24 6 24 6z M24 25a5 5 0 0 1 0 10",
    "duct": "M6 16h36v6H6z M6 30h36v6H6z M14 22v8 M34 22v8",
    "commercial": "M8 42V18l16-10 16 10v24 M18 42V30h12v12 M8 18h32 M18 13h.02 M30 13h.02",
    "emergency": "M24 4 6 14v12c0 10 8 17 18 18 10-1 18-8 18-18V14L24 4z M24 16v10 M24 32h.02",
}

GRID_PATTERN = """
    <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
      <path d="M 34 0 L 0 0 0 34" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
"""


def base_svg(width, height, body, bg_from=NAVY_950, bg_to=NAVY_800, grid=True):
    grid_rect = f'<rect width="{width}" height="{height}" fill="url(#grid)"/>' if grid else ""
    return f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="{width}" y2="{height}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="{bg_from}"/>
      <stop offset="1" stop-color="{bg_to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.75" cy="0.2" r="0.9">
      <stop offset="0" stop-color="{ACCENT_500}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="{ACCENT_500}" stop-opacity="0"/>
    </radialGradient>
    {GRID_PATTERN}
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bg)"/>
  <rect width="{width}" height="{height}" fill="url(#glow)"/>
  {grid_rect}
  {body}
</svg>"""


def service_image(name, icon_key, accent=ICE_400, label=""):
    icon_path = ICONS[icon_key]
    w, h = 800, 600
    cx, cy = w / 2, h / 2 - 20
    panel = f"""
    <g transform="translate({cx-95},{cy-95})">
      <rect width="190" height="190" rx="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>
      <g transform="translate(47,47) scale(2)" fill="none" stroke="{accent}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="{icon_path}"/>
      </g>
    </g>
    """
    # decorative circuit lines
    lines = f"""
    <g stroke="rgba(125,214,251,0.25)" stroke-width="1.5" fill="none">
      <path d="M60 500 h180 a10 10 0 0 0 10-10 v-60"/>
      <path d="M740 100 h-160 a10 10 0 0 1-10 10 v70"/>
      <circle cx="60" cy="500" r="4" fill="{accent}"/>
      <circle cx="740" cy="100" r="4" fill="{accent}"/>
    </g>
    """
    corner = f'<path d="M0 0 L60 0 L0 60 Z" fill="rgba(20,212,244,0.08)"/>'
    text = f"""
    <text x="60" y="555" font-family="'Space Grotesk', Arial, sans-serif" font-size="22" font-weight="700" fill="{WHITE}" opacity="0.85">{label}</text>
    <text x="60" y="578" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="{ICE_300}" opacity="0.6">ARCTICAIR PRO SERVICES</text>
    """
    body = panel + lines + corner + text
    return base_svg(w, h, body)


def hero_image():
    w, h = 900, 1125
    body = f"""
    <g stroke="rgba(125,214,251,0.18)" stroke-width="1.5" fill="none">
      <path d="M0 780 C 220 720, 300 900, 900 840"/>
      <path d="M0 360 C 260 420, 420 260, 900 320"/>
    </g>
    <g transform="translate(450,470)">
      <rect x="-190" y="-140" width="380" height="280" rx="20" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.09)"/>
      <g transform="translate(-100,-40) scale(4.2)" fill="none" stroke="{ICE_300}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 44h28 M22 44V21a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v23 M22 32h14"/>
      </g>
      <g transform="translate(20,20)" fill="none" stroke="{ACCENT_400}" stroke-width="1.3" stroke-linecap="round">
        <circle cx="0" cy="0" r="70" opacity="0.18"/>
        <circle cx="0" cy="0" r="100" opacity="0.1"/>
      </g>
    </g>
    <g transform="translate(120,880)" fill="none" stroke="{ICE_400}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.55">
      <rect x="-4" y="-4" width="56" height="56" rx="10" fill="rgba(20,212,244,0.08)" stroke="rgba(255,255,255,0.1)"/>
      <g transform="scale(1.9)"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L5 16l2 2 4.3-4.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/></g>
    </g>
    <text x="60" y="1060" font-family="'Space Grotesk', Arial, sans-serif" font-size="26" font-weight="700" fill="{WHITE}" opacity="0.9">Certified AC Technician</text>
    <text x="60" y="1088" font-family="Arial, sans-serif" font-size="14" letter-spacing="2" fill="{ICE_300}" opacity="0.6">ILLUSTRATIVE DEMO GRAPHIC</text>
    """
    return base_svg(w, h, body, bg_from=NAVY_950, bg_to="#0c2038")


def coil_image(dirty=True):
    w, h = 900, 600
    accent = "#8a7550" if dirty else ICE_400
    dust = ""
    if dirty:
        import random
        random.seed(7)
        dots = []
        for _ in range(90):
            x = random.uniform(260, 640)
            y = random.uniform(160, 440)
            r = random.uniform(1, 3.2)
            dots.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" fill="#5a4a30" opacity="0.55"/>')
        dust = "<g>" + "".join(dots) + "</g>"
    fins = "".join(
        f'<line x1="{260+i*8}" y1="160" x2="{260+i*8}" y2="440" stroke="{"#4a5568" if dirty else ICE_300}" stroke-width="2" opacity="{"0.5" if dirty else "0.7"}"/>'
        for i in range(48)
    )
    frame = f'<rect x="240" y="140" width="420" height="320" rx="14" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>'
    label = "Before: Coil with dust build-up" if dirty else "After: Deep-cleaned coil"
    text = f'<text x="60" y="555" font-family="\'Space Grotesk\', Arial, sans-serif" font-size="22" font-weight="700" fill="{WHITE}" opacity="0.9">{label}</text>'
    body = frame + fins + dust + text
    return base_svg(w, h, body)


def about_image():
    w, h = 900, 675
    body = f"""
    <g transform="translate(200,120)">
      <rect width="220" height="300" rx="16" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.1)"/>
      <g transform="translate(60,90) scale(3.4)" fill="none" stroke="{ICE_300}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21c0-4 3-6 6-6s6 2 6 6"/>
        <circle cx="18" cy="9" r="4"/>
      </g>
    </g>
    <g transform="translate(460,180)">
      <rect width="220" height="300" rx="16" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.1)"/>
      <g transform="translate(60,90) scale(3.4)" fill="none" stroke="{ACCENT_400}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21c0-4 3-6 6-6s6 2 6 6"/>
        <circle cx="18" cy="9" r="4"/>
      </g>
    </g>
    <text x="60" y="600" font-family="'Space Grotesk', Arial, sans-serif" font-size="24" font-weight="700" fill="{WHITE}" opacity="0.9">The ArcticAir Pro Team</text>
    <text x="60" y="626" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="{ICE_300}" opacity="0.6">ILLUSTRATIVE DEMO GRAPHIC</text>
    """
    return base_svg(w, h, body)


def map_image():
    w, h = 900, 675
    import random
    random.seed(3)
    pins = []
    for i in range(6):
        x = random.uniform(120, 780)
        y = random.uniform(100, 560)
        pins.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="7" fill="{ACCENT_400}" opacity="0.85"/><circle cx="{x:.0f}" cy="{y:.0f}" r="16" fill="none" stroke="{ACCENT_400}" stroke-width="1.5" opacity="0.35"/>')
    roads = f"""
    <g stroke="rgba(255,255,255,0.15)" stroke-width="3" fill="none">
      <path d="M0 200 H900"/>
      <path d="M0 420 H900"/>
      <path d="M260 0 V675"/>
      <path d="M620 0 V675"/>
    </g>
    """
    body = roads + "".join(pins) + f'<text x="60" y="620" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="{ICE_300}" opacity="0.55">ILLUSTRATIVE MAP — NOT TO SCALE</text>'
    return base_svg(w, h, body)


def case_image(label, icon_key, accent=ICE_400):
    return service_image("case", icon_key, accent=accent, label=label)


def og_cover():
    w, h = 1200, 630
    body = f"""
    <g transform="translate(600,290)">
      <g transform="translate(-80,-80) scale(4)" fill="none" stroke="{ICE_300}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="{ICONS['install']}"/>
      </g>
    </g>
    <text x="90" y="150" font-family="'Space Grotesk', Arial, sans-serif" font-size="52" font-weight="700" fill="{WHITE}">ArcticAir Pro Services</text>
    <text x="90" y="200" font-family="Arial, sans-serif" font-size="24" fill="{ICE_300}" opacity="0.85">Cooler Spaces. Smarter Comfort.</text>
    <text x="90" y="560" font-family="Arial, sans-serif" font-size="16" letter-spacing="3" fill="{ICE_300}" opacity="0.5">AC INSTALLATION · REPAIR · MAINTENANCE · COMMERCIAL HVAC</text>
    """
    return base_svg(w, h, body)


def favicon():
    body = f"""
    <rect width="48" height="48" rx="10" fill="{NAVY_950}"/>
    <g transform="translate(9,9) scale(1.25)" fill="none" stroke="{ACCENT_400}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z"/>
      <path d="M12 15v-6"/>
    </g>
    """
    return base_svg(48, 48, body, grid=False)


files = {
    "service-installation.svg": service_image("install", "install", label="AC Installation"),
    "service-repair.svg": service_image("repair", "repair", accent=ACCENT_400, label="AC Repair"),
    "service-maintenance.svg": service_image("maintenance", "maintenance", label="Preventive Maintenance"),
    "service-cleaning.svg": service_image("cleaning", "cleaning", accent=ACCENT_400, label="AC Deep Cleaning"),
    "service-gas-refill.svg": service_image("gas", "gas", label="Gas Refill"),
    "service-duct.svg": service_image("duct", "duct", accent=ACCENT_400, label="Duct Cleaning"),
    "service-commercial.svg": service_image("commercial", "commercial", label="Commercial HVAC"),
    "service-emergency.svg": service_image("emergency", "emergency", accent="#ff6b6b", label="Emergency AC Service"),
    "hero-technician.svg": hero_image(),
    "before-cleaning.svg": coil_image(dirty=True),
    "after-cleaning.svg": coil_image(dirty=False),
    "about-team.svg": about_image(),
    "contact-map.svg": map_image(),
    "case-office-1.svg": case_image("Office HVAC Upgrade", "commercial"),
    "case-office-2.svg": case_image("Ceiling Cassette Unit", "install", accent=ACCENT_400),
    "case-residential-1.svg": case_image("Residential Split Unit", "repair"),
    "case-residential-2.svg": case_image("Coil Cleaning", "cleaning", accent=ACCENT_400),
    "case-restaurant-1.svg": case_image("Restaurant HVAC", "commercial", accent=ACCENT_400),
    "case-restaurant-2.svg": case_image("Filter Inspection", "maintenance"),
    "og-cover.svg": og_cover(),
}

for filename, svg in files.items():
    with open(os.path.join(OUT_DIR, filename), "w") as f:
        f.write(svg)

# favicon goes in public/ root
with open(os.path.join(OUT_DIR, "..", "favicon.svg"), "w") as f:
    f.write(favicon())

print(f"Generated {len(files) + 1} SVG assets.")
