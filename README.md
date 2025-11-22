# Muhammad.my Blog

A premium Next.js blog with a stunning **Antigravity** design theme featuring blue and purple gradients, glassmorphism effects, and modern interactions.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?logo=tailwind-css)

## ✨ Features

- 🎨 **Antigravity Theme** - Deep blue/purple gradient design with glassmorphism
- 🔍 **Real-time Search** - Instant post filtering
- 🏷️ **Tag System** - Clickable tags for easy content discovery
- 🌙 **Dark Mode Default** - Beautiful dark theme out of the box
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast Performance** - Built with Next.js 16 and React 19
- 🔒 **Security Hardened** - Production-ready with security headers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/muham/blog-muhammad-my.git
cd blog-muhammad-my

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding New Posts

Create a new `.mdx` file in the `/posts` directory:

```mdx
---
title: Your Post Title
description: "A brief description of your post"
date: Nov 22 2025
tags: [Tech, Tutorial]
---

Your content here...
```

## 🎨 Customization

### Theme Colors

Edit `themes.js` to customize the color palette:

```javascript
antigravity: {
  colors: {
    primary: '#8b5cf6',      // Purple
    'gradient-1': '#3b82f6', // Blue
    // ... more colors
  },
}
```

### Global Settings

Configure in `utils/global-data.js` or use environment variables:

- `BLOG_NAME` - Your name
- `BLOG_TITLE` - Blog title
- `BLOG_FOOTER_TEXT` - Footer text
- `BLOG_THEME` - Theme name (default: 'antigravity')

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muham/blog-muhammad-my)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/muham/blog-muhammad-my)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Or export as static site
npm run export
```

## 🔒 Security

This project follows security best practices:

- ✅ No sensitive data in code
- ✅ Security headers enabled
- ✅ Safe MDX rendering
- ✅ Regular dependency updates

See [SECURITY.md](SECURITY.md) for our security policy.

## 📦 Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown for components
- [Prism](https://prismjs.com/) - Syntax highlighting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original template by [Bejamas](https://bejamas.io/) and [Netlify](https://www.netlify.com/)
- **Antigravity Theme** inspired by and built with [Google Antigravity](https://antigravity.google)
- Theme design credits to [Antigravity](https://antigravity.google)

---

**Made in 🇲🇾 Malaysia**
