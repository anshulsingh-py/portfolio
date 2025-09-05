# Anshul Kumar Singh - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Data Engineer. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages hosting.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Integrated contact form with email functionality
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Sections

1. **Hero Section**: Introduction with contact links
2. **About**: Professional summary and key achievements
3. **Experience**: Detailed work history at TCS
4. **Projects**: Featured project with technical details
5. **Skills**: Comprehensive technical skills categorized by domain
6. **Education & Certifications**: Academic background and professional certifications
7. **Contact**: Multiple ways to get in touch

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Hosting**: GitHub Pages

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment Instructions

### Option 1: Quick Setup (Recommended)

1. **Fork/Clone this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Update personal information**
   - Edit `index.html` to update:
     - Name and contact details
     - About section content
     - Work experience details
     - Project information
     - Skills and certifications
   - Update social media links with your actual profiles

3. **Deploy to GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Access your website**
   - Your site will be available at: `https://yourusername.github.io/portfolio`

### Option 2: Custom Domain (Optional)

1. **Add a custom domain**
   - Create a `CNAME` file in the root directory
   - Add your domain name (e.g., `www.yourname.com`)
   - Configure DNS settings with your domain provider

## 📝 Customization Guide

### Updating Content

1. **Personal Information**
   ```html
   <!-- Update in index.html -->
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   <h2 class="hero-subtitle">Your Title</h2>
   ```

2. **Contact Links**
   ```html
   <!-- Update href attributes -->
   <a href="mailto:your.email@gmail.com">
   <a href="https://github.com/yourusername">
   <a href="https://linkedin.com/in/yourprofile">
   ```

3. **Colors and Styling**
   ```css
   /* Update in style.css */
   :root {
     --primary-color: #2563eb;
     --secondary-color: #fbbf24;
     --accent-color: #10b981;
   }
   ```

### Adding New Sections

1. **HTML Structure**
   ```html
   <section id="new-section" class="new-section">
     <div class="container">
       <div class="section-header">
         <h2 class="section-title">Section Title</h2>
         <p class="section-subtitle">Section description</p>
       </div>
       <!-- Section content -->
     </div>
   </section>
   ```

2. **Navigation Link**
   ```html
   <a href="#new-section" class="nav-link">New Section</a>
   ```

## 📈 Performance Tips

- **Optimize Images**: Use WebP format and appropriate sizes
- **Minimize CSS/JS**: Use minified versions for production
- **Enable Caching**: Configure proper cache headers
- **Use CDN**: Consider using a CDN for external libraries

## 🔧 Development

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open with a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server extension
   ```

3. **Access locally**
   - Open `http://localhost:8000` in your browser

### File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── CNAME              # Custom domain (optional)
```

## 🎨 Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Secondary**: #fbbf24 (Yellow/Gold)
- **Success**: #10b981 (Green)
- **Text**: #1f2937 (Dark Gray)
- **Background**: #ffffff (White)
- **Light Background**: #f9fafb (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 700 weight
- **Body**: 400 weight
- **Bold**: 600 weight

### Spacing
- **Section Padding**: 80px vertical
- **Container Max Width**: 1200px
- **Grid Gap**: 2rem standard

## 📧 Contact Form

The contact form uses a `mailto:` link to open the user's default email client. For a more advanced solution, consider:

- **Formspree**: Simple form backend
- **Netlify Forms**: If hosting on Netlify
- **EmailJS**: JavaScript-based email service

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization:

- 📧 Email: anshulsingh.py@gmail.com
- 💼 LinkedIn: [linkedin.com/in/anshulsingh](https://linkedin.com/in/anshulsingh)
- 🐙 GitHub: [github.com/anshulsingh](https://github.com/anshulsingh)

---

⭐ **Star this repository if you found it helpful!**
