# 📦 Barcodo — Barcode and QR Code Generator

A simple, modern, and lightweight **Barcode and QR Code Generator** built using HTML, CSS, and JavaScript.
[Click Here](https://barcodo.vercel.app/) to view.
This project generates barcodes **live while typing**, with a clean dark theme interface, scanner-friendly output, fully customizable QR codes, and a public REST API for programmatic generation.

---

## 🚀 Features

* ✅ Live barcode generation (no button required)
* ✅ Supports **Code 128 format**
* ✅ **QR Code** generator with tab switcher
* ✅ QR customizations: colors, gradients, dot/corner styles, **center logo**, and **frames** (solid, rounded, double)
* ✅ Dark theme UI
* ✅ Large, centered barcode display
* ✅ Scanner-friendly (black on white background)
* ✅ Fully responsive layout
* ✅ **Download as PNG / SVG** (print-ready)
* ✅ **Print** button (opens a clean print view)
* ✅ **Public REST API** (`/api/barcode`) — generate barcodes **and QR codes** from any app
* ✅ CORS enabled, no API key required

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript
* [JsBarcode](https://github.com/lindell/JsBarcode) (via CDN)
* [QR Code Styling](https://github.com/kozakdenys/qr-code-styling) (via CDN)
* [Bwip-JS](https://github.com/metafloor/bwip-js) (server-side API)
* Node.js (Vercel serverless functions)

---

## 📂 How to Use

1. Clone or download this repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Start typing in the input field — the barcode will generate instantly.

5. Switch to the **QR Code** tab to generate styled QR codes (colors, logo, frames).

6. Use the buttons below the barcode/QR to **download** or **print** it.

---

## 🖼️ How It Works

* User types into the input field.
* The `oninput` event triggers the `generateBarcode()` function.
* JsBarcode renders the barcode dynamically inside the `<svg>` element.
* If the input is cleared, the barcode disappears automatically.
* Download/print buttons work from the generated `<svg>` element.

---

## 📡 REST API

Anyone can generate a barcode or QR code without opening the page, using the public REST API.

### Barcode (Code 128)

```http
GET /api/barcode?value=1234567890
```

```http
POST /api/barcode
Content-Type: application/json

{ "value": "1234567890" }
```

### QR Code

```http
GET /api/barcode?value=https://example.com&format=qrcode
```

```http
POST /api/barcode
Content-Type: application/json

{ "value": "https://example.com", "format": "qrcode" }
```

### Response

The response is a **PNG image** (`image/png`).

### Optional parameters

| Param     | Type   | Default  | Description                                  |
|-----------|--------|----------|----------------------------------------------|
| `value`   | string | —        | Text to encode (required)                    |
| `format`  | string | code128  | `code128` or `qrcode`                        |
| `scale`   | number | 3 (8 for QR) | Pixel size multiplier                    |
| `height`  | number | 20       | Bar height, Code 128 only                    |
| `eclevel` | string | Q        | Error correction `L` `M` `Q` `H`, QR only     |

### Examples

```bash
curl -o barcode.png "https://128barcode-generator.vercel.app/api/barcode?value=1234567890"
curl -o qrcode.png "https://128barcode-generator.vercel.app/api/barcode?value=hello&format=qrcode&eclevel=H"
```

### Local testing

```bash
npm install
npm start
# then visit http://localhost:3000/  (the site)
# or hit the API directly: http://localhost:3000/api/barcode?value=1234567890
```

> Note: on Vercel, the function lives at `api/barcode.js` and is deployed automatically.

---

## 📦 Dependencies

### Frontend (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/qr-code-styling@1.9.2/lib/qr-code-styling.js"></script>
```

### Backend

```json
{ "dependencies": { "bwip-js": "^4.4.0" } }
```

---

## 🎨 Customization

You can easily modify:

* Barcode width & height (inside `JsBarcode()` settings)
* API defaults (in `api/barcode.js`)
* Theme colors (CSS)
* Footer text
* Convert to a PWA
* Add light/dark mode toggle

---

## 📜 License

© 2026 yafis_yasar. All Rights Reserved.

If you plan to make this open-source, consider adding an MIT License.

---

## ✨ Author

**yafis_yasar**
