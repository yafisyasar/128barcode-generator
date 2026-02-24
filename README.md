# 📦 Code 128 Barcode Generator

A simple, modern, and lightweight **Code 128 Barcode Generator** built using HTML, CSS, and JavaScript.

This project generates barcodes **live while typing**, with a clean dark theme interface and scanner-friendly output.

---

## 🚀 Features

* ✅ Live barcode generation (no button required)
* ✅ Supports **Code 128 format**
* ✅ Dark theme UI
* ✅ Large, centered barcode display
* ✅ Scanner-friendly (black on white background)
* ✅ Fully responsive layout
* ✅ No backend required
* ✅ Uses CDN (no installation needed)

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript
* [JsBarcode](https://github.com/lindell/JsBarcode) (via CDN)

---

## 📂 How to Use

1. Clone or download this repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Start typing in the input field — the barcode will generate instantly.

---

## 🖼️ How It Works

* User types into the input field.
* The `oninput` event triggers the `generateBarcode()` function.
* JsBarcode renders the barcode dynamically inside the `<svg>` element.
* If the input is cleared, the barcode disappears automatically.

---

## 📦 Dependency

This project uses JsBarcode via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
```

No additional installation required.

---

## 🎨 Customization

You can easily modify:

* Barcode width & height (inside `JsBarcode()` settings)
* Theme colors (CSS)
* Footer text
* Add export/download button
* Add print functionality
* Convert to a PWA
* Add light/dark mode toggle

---

## 📜 License

© 2026 yafis_yasar. All Rights Reserved.

If you plan to make this open-source, consider adding an MIT License.

---

## ✨ Author

**yafis_yasar**
