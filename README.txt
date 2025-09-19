# Artisan AI - Handmade Goods Platform

A futuristic React application for artisans to showcase and sell their handmade creations using AI-powered tools.

## 🚀 Features

- **AI-Powered Product Copy Generation**
- **Visual Touch-ups with AI**
- **Product Scraping from E-commerce Sites**
- **Storytelling Assistant for Product Descriptions**
- **Product Bundle Management**
- **Responsive Design with Advanced Animations**
- **Dark/Light Mode Support**

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software:
- **Node.js** (version 16.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

### System Requirements:
- **Operating System:** Windows 10/11, macOS, or Linux
- **RAM:** At least 4GB
- **Storage:** 500MB free space

## 🔧 Installation Guide

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>
```

### Step 2: Navigate to the React App Directory
```bash
cd react-app
```

### Step 3: Install Dependencies
```bash
npm install
```
or if you prefer yarn:
```bash
yarn install
```

### Step 4: Install Additional Dependencies (if needed)
The project uses the following key dependencies:
- React 19.1.1
- React Router DOM 7.9.1
- Tailwind CSS
- TypeScript

All dependencies should be installed automatically with the above command.

## ▶️ Running the Application

### Development Mode
```bash
npm start
```
or
```bash
yarn start
```

This will start the development server. The app will open automatically in your default browser at:
```
http://localhost:3000
```

### Production Build
```bash
npm run build
```
or
```bash
yarn build
```

This creates an optimized production build in the `build` folder.

### Serving Production Build
```bash
npm install -g serve
serve -s build
```

## 🛠️ Project Structure

```
react-app/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # App favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── HomePage.tsx           # Landing page
│   │   ├── ProductUploadPage.tsx  # Product upload interface
│   │   ├── QuickScrapeModal.tsx   # Product scraping modal
│   │   ├── ScrapingDetailPage.tsx # Scraped product details
│   │   ├── StorytellingAssistantPage.tsx # AI storytelling
│   │   ├── PackHolderPage.tsx     # Product bundles
│   │   ├── ContactUsPage.tsx      # Contact information
│   │   └── ThemeToggle.tsx        # Dark/light mode toggle
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx       # Theme management
│   ├── App.tsx             # Main app component
│   ├── App.css             # App-specific styles
│   ├── index.tsx           # App entry point
│   ├── index.css           # Global styles
│   └── react-app-env.d.ts  # TypeScript declarations
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: "#13a4ec",     // Main brand color
      "background-light": "#f6f7f8",
      "background-dark": "#101c22",
    }
  }
}
```

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `src/App.tsx`
3. Update navigation if needed

### Modifying Animations
Edit `src/index.css` to customize animations and effects.

## 🔧 Troubleshooting

### Common Issues:

#### 1. Port 3000 Already in Use
```bash
# Kill process using port 3000
npx kill-port 3000
# Or run on different port
PORT=3001 npm start
```

#### 2. Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 3. Build Errors
```bash
# Clear build cache
npm run build -- --reset-cache
```

#### 4. Permission Errors (Linux/Mac)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### Development Tips:

- Use `npm start` for development with hot reloading
- Check browser console for errors
- Use React DevTools for debugging
- Test on multiple screen sizes

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📱 Mobile Support

The app is fully responsive and works on:
- iOS Safari
- Android Chrome
- Mobile Firefox

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, contact:
- **Vijay Jangid:** +91 8949063XX
- **Priyanka Taneja:** +91 9315403XX
- **Email:** vsjangid60@gmail.com

## 🔄 Updates

To update the app:
```bash
git pull origin main
npm install
npm start
```

---

**Happy coding! 🎉**

Built with ❤️ using React, TypeScript, and Tailwind CSS