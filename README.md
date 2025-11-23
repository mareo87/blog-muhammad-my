<!-- SPDX-License-Identifier: MIT -->
# Muhammad.my Blog

[![Build Status](https://img.shields.io/github/actions/workflow/status/mare.../ci.yml?branch=main&label=build&logo=github)](https://github.com/mare.../actions)
[![License](https://img.shields.io/github/license/mare.../blog-muhammad-my?color=blue)](LICENSE)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-success?logo=dependabot)](https://github.com/mare.../blog-muhammad-my/network/updates)
[![npm version](https://img.shields.io/npm/v/@vercel/analytics?color=red&logo=npm)](https://www.npmjs.com/package/@vercel/analytics)
[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mare.../blog-muhammad-my)

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Customization](#-customization)
- [📦 Deployment](#-deployment)
- [🔒 Security](#-security)
- [🧩 Built With](#-built-with)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

- 🎨 **Antigravity Theme** – Deep blue/purple gradient with glassmorphism.
- 🔍 **Real‑time Search** – Instant post filtering.
- 🏷️ **Tag System** – Clickable tags for easy discovery.
- 🌙 **Dark Mode Default** – Beautiful dark theme out of the box.
- 📱 **Fully Responsive** – Looks great on all devices.
- ⚡ **Fast Performance** – Built with Next.js 16 and React 19.
- 🔒 **Security Hardened** – Production‑ready with security headers.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mare.../blog-muhammad-my.git
cd blog-muhammad-my

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open <http://localhost:3000> in your browser.

---

## 🛠️ Customization

### Theme Colors

Edit `themes.js` to adjust the palette:

```js
antigravity: {
  colors: {
    primary: '#8b5cf6',      // Purple
    'gradient-1': '#3b82f6', // Blue
    // …more colors
  },
},
```

### Global Settings

Configure via `utils/global-data.js` or environment variables:

- `BLOG_NAME` – Your name
- `BLOG_TITLE` – Blog title
- `BLOG_FOOTER_TEXT` – Footer text
- `BLOG_THEME` – Theme name (default: `antigravity`)

---

## 📦 Deployment

### Deploy to Vercel (recommended)

Click the button above or run:

```bash
vercel
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🔒 Security

- ✅ No sensitive data in the codebase.
- ✅ Security headers are configured in `next.config.js`.
- ✅ Regular dependency updates via Dependabot.

See [SECURITY.md](SECURITY.md) for the full security policy.

---

## 🧩 Built With

- **[Next.js](https://nextjs.org/)** – React framework
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility‑first CSS
- **[MDX](https://mdxjs.com/)** – Markdown with JSX
- **[Prism](https://prismjs.com/)** – Syntax highlighting

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Original template by [Bejamas](https://bejamas.io/) and [Netlify](https://www.netlify.com/).
- **Antigravity Theme** inspired by and built with [Google Antigravity](https://antigravity.google).
- Design credits to [Antigravity](https://antigravity.google).

---

**Made in 🇲🇾 Malaysia**
