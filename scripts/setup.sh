#!/bin/bash

# Webpack + Tailwind Template Setup Script
echo "🚀 Setting up Webpack + Tailwind Template..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   • Run 'npm run dev' to start the development server"
    echo "   • Run 'npm run build' to build for production"
    echo "   • Run 'npm run watch' to watch for changes"
    echo ""
    echo "📝 Next steps:"
    echo "   • Edit src/index.html to modify the HTML"
    echo "   • Edit src/styles.css to add custom styles"
    echo "   • Edit src/index.js to add JavaScript functionality"
    echo "   • Create components in src/components/"
    echo ""
    echo "🌐 The development server will be available at http://localhost:3000"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi 