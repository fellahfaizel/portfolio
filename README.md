# 🌟 Fellah Faizel - Portfolio Website

A modern, responsive portfolio website built with React.js featuring smooth animations, elegant design, and a beautiful color palette of beige, baby pink, and cream tones.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Modern-pink?style=for-the-badge&logo=css3)

## ✨ Features

### 🎭 **Stunning Entrance Animation**
- Full-screen "Hello Everyone" welcome message with pink blur background
- Smooth transition animation that morphs into the navigation bar
- Floating sparkles and glowing text effects

### 🎨 **Modern Design Elements**
- Soft color palette (beige, baby pink, cream)
- Gradient backgrounds and smooth transitions
- Professional typography with custom animations
- Responsive design for all device sizes

### 🚀 **Interactive Components**
- **Animated Navigation**: Bubble-style nav links with hover effects
- **Typing Animation**: Dynamic text in hero section
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Menu**: Elegant hamburger menu with animations

### 📱 **Fully Responsive**
- Desktop, tablet, and mobile optimized
- Adaptive layouts and components
- Touch-friendly mobile interface

## 🛠️ Tech Stack

- **Frontend**: React.js 18+
- **Styling**: Pure CSS3 (No external frameworks)
- **Icons**: Unicode emojis and custom designs
- **Animations**: CSS keyframes and transitions
- **Build Tool**: Create React App

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fellahfaizel/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with intro animation
│   │   ├── Home.js            # Hero section with typing effect
│   │   ├── Skills.js          # Skills showcase
│   │   ├── Projects.js        # Project portfolio
│   │   └── Contact.js         # Contact form and info
│   ├── App.js                 # Main app component
│   ├── App.css               # All styling and animations
│   └── index.js              # App entry point
└── README.md
```

## 🎨 Customization

### Personal Information
Update your details in the respective components:

**Home.js** - Hero section
```javascript
const fullText = "Backend Developer | AI/ML Enthusiast";
// Update with your title/role
```

**Contact.js** - Contact information
```javascript
// Update email, phone, location, etc.
<p>faizelfellah@gmail.com</p>
<p>+91 87147 65536</p>
<p>Kannur, Kerala, India</p>
```

**Projects.js** - Your projects
```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "etc."],
    github: "your-github-link"
  }
];
```

### Adding Your Photo
1. Add your photo to the `public` folder as `profile.jpg`
2. Update the image source in `Home.js`:
```javascript
src="/profile.jpg"
```

### Social Links
Update your social media links in `Contact.js`:
```javascript
<a href="https://github.com/yourusername" ... >
<a href="https://linkedin.com/in/yourusername" ... >
```

### Color Customization
Modify the CSS variables in `App.css`:
```css
:root {
  --cream: #fefcf7;
  --baby-pink: #fce7f3;
  --rose: #fb7185;
  /* Add your custom colors */
}
```

## 📄 Sections

### 🏠 **Home**
- Animated introduction with typing effect
- Professional profile image with floating backgrounds
- Call-to-action buttons

### 💪 **Skills**
- Frontend, Backend, Tools, and Computer Science categories
- Interactive skill cards with hover animations
- Comprehensive technology showcase

### 🚀 **Projects**
- Featured project cards with descriptions
- Technology stack tags
- Links to GitHub repositories
- Current projects: WikiGraph, AI Visual Clothes, DomSev, Movie Recommendation System

### 📬 **Contact**
- Contact form with validation
- Personal information display
- Social media links
- Educational background

## 🌟 Key Animations

- **Entrance Animation**: Full-screen welcome message
- **Navigation Transitions**: Smooth hover and active states
- **Typing Effect**: Dynamic text animation
- **Card Hover Effects**: Lift and glow animations
- **Mobile Menu**: Hamburger to X transformation
- **Scroll Indicators**: Bouncing arrows and smooth scrolling

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Your site is live!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 About

**Fellah Faizel**
- 🎓 Final Year CSE Student at Government College of Engineering Kannur
- 💻 Backend Developer
- 🌐 [GitHub](https://github.com/fellahfaizel)
- 💼 [LinkedIn](http://www.linkedin.com/in/fellah-faizel)
- 📧 [Email](mailto:faizelfellah@gmail.com)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- CSS animations inspired by modern web design trends
- Icons and emojis for visual appeal
- Open source community for inspiration

---

*Built with ❤️ by Fellah Faizel*