# Webpack + Tailwind CSS Template

A modern, production-ready template for building web applications with Webpack, JavaScript, and Tailwind CSS.

## 🚀 Features

- **Webpack 5** - Modern bundler with hot reload
- **Tailwind CSS 3** - Utility-first CSS framework
- **Babel** - ES6+ JavaScript support
- **PostCSS** - CSS processing with Autoprefixer
- **Development Server** - Hot reload and fast development
- **Production Build** - Optimized for production
- **Modern JavaScript** - ES6+ features with transpilation

## 📦 Installation

1. **Clone or download this template**

   ```bash
   git clone <your-repo-url>
   cd webpack-tailwind-template-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🛠️ Available Scripts

- **Development server**

  ```bash
  npm run dev
  ```

  Starts the development server at `http://localhost:3000` with hot reload.

- **Production build**

  ```bash
  npm run build
  ```

  Creates an optimized production build in the `dist/` folder.

- **Watch mode**
  ```bash
  npm run watch
  ```
  Watches for file changes and rebuilds automatically.

## 📁 Project Structure

```
├── src/
│   ├── index.html          # Main HTML template
│   ├── index.js            # JavaScript entry point
│   └── styles.css          # Main CSS file with Tailwind
├── dist/                   # Build output (generated)
├── webpack.config.js       # Webpack configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .babelrc               # Babel configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Tailwind CSS

- Edit `tailwind.config.js` to customize colors, fonts, and other design tokens
- Add custom components in `src/styles.css` using `@layer components`

### Webpack Configuration

- Modify `webpack.config.js` to add loaders, plugins, or change build settings
- Add environment-specific configurations

### JavaScript

- Use modern ES6+ features - they'll be transpiled automatically
- Import CSS files directly in your JavaScript modules

## 🔧 Development

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. Make changes to your files - they'll automatically reload!

## 🚀 Production Deployment

1. Build for production:

   ```bash
   npm run build
   ```

2. The optimized files will be in the `dist/` folder

3. Deploy the contents of `dist/` to your web server

## 📚 Dependencies

### Development Dependencies

- **Webpack 5** - Module bundler
- **Webpack CLI** - Command line interface
- **Webpack Dev Server** - Development server with hot reload
- **Babel Core & Preset Env** - JavaScript transpilation
- **Babel Loader** - Webpack loader for Babel
- **CSS Loader** - Webpack loader for CSS
- **Style Loader** - Inject CSS into DOM
- **Mini CSS Extract Plugin** - Extract CSS into separate files
- **PostCSS Loader** - Webpack loader for PostCSS
- **PostCSS** - CSS processing
- **Autoprefixer** - Add vendor prefixes
- **Tailwind CSS** - Utility-first CSS framework
- **HTML Webpack Plugin** - Generate HTML files

## 🙏 Acknowledgments

- [Webpack](https://webpack.js.org/) - Module bundler
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Babel](https://babeljs.io/) - JavaScript compiler
- [PostCSS](https://postcss.org/) - CSS processing

---

Happy coding! 🎉
