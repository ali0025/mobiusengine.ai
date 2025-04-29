# Mobius Resume Builder

<div align="center">
  <img src="./src/assets/logos/white_full_logo.svg" alt="Mobius Logo" width="300"/>
  <p>Build tailored resumes and accelerate your job search</p>
</div>

## 📋 Overview

Mobius Resume Builder is a React-based web application designed to help job seekers create tailored resumes and apply for jobs efficiently. The platform offers personalized resume-building services, job application support, and career coaching to help users land interviews faster. Built with modern web technologies, it provides an intuitive user interface and a seamless experience.

## ✨ Features

- **Custom Resume Building**: Create resumes tailored to specific industries, roles, or companies
- **Job Application Services**: Automated job search and application process with curated job listings
- **Career Coaching**: One-on-one sessions with experienced professionals for resume reviews and interview preparation
- **Pricing Plans**: Flexible plans (April Promo, Starter, Plus, Advance) to suit different needs and budgets
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive Components**: Includes testimonials, service cards, and a dynamic navbar for easy navigation

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Lucide React (icons)
- **Languages**: JavaScript (JSX), HTML, CSS
- **Tools**: Vite (build tool)
- **Dependencies**:
  - `react-router-dom` for routing
  - `lucide-react` for icons
  - Custom assets (images, SVGs) for branding and visuals

## 📁 Project Structure

```
├── src
│   ├── assets
│   │   ├── components        # SVG icons (e.g., Asset31.svg, Star1.svg)
│   │   ├── images            # Images (e.g., Rectangle.png, ebook.png)
│   │   ├── logos             # Logo files (e.g., white_full_logo.svg)
│   ├── common
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Navbar.jsx        # Navigation bar component
│   ├── components
│   │   ├── Aboutus.jsx       # About Us section
│   │   ├── HowWeWork.jsx     # How We Work section
│   │   ├── PricingCard.jsx   # Pricing plan card component
│   │   ├── PricingPlans.jsx  # Pricing plans section
│   │   ├── ResumeServices.jsx # Resume services section
│   │   ├── ServiceCard.jsx   # Service card component
│   │   ├── Testimonials.jsx  # Testimonials section
│   │   ├── WhyChooseUs.jsx   # Why Choose Us section
│   ├── data
│   │   ├── navbar-links.js   # Navigation link data
│   ├── App.jsx               # Main app component
│   ├── index.html            # HTML entry point
│   ├── main.jsx              # React entry point
├── README.md                 # Project documentation
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite configuration
```

## 🚀 Installation

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd mobius-resume-builder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port specified by Vite) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## 💻 Usage

- **Homepage**: The `Home.jsx` component serves as the landing page, showcasing the main value proposition, a downloadable e-book, and various sections (How We Work, About Us, Testimonials, etc.).
- **Navigation**: The `Navbar.jsx` provides links to key pages (configured in `navbar-links.js`).
- **Pricing Plans**: The `PricingPlans.jsx` and `PricingCard.jsx` components display subscription options with features and pricing.
- **Resume Services**: The `ResumeServices.jsx` and `ServiceCard.jsx` components detail resume-building and coaching services.
- **About Us**: The `Aboutus.jsx` component highlights the team and company mission.
- **Testimonials**: The `Testimonials.jsx` component showcases client feedback with placeholders for video testimonials.
- **Why Choose Us**: The `WhyChooseUs.jsx` component emphasizes the platform's unique value propositions.

## 🎨 Customization

- **Assets**: Replace images and SVGs in the `src/assets` folder to match your branding.
- **Styling**: Modify Tailwind CSS classes in the JSX files or update the `tailwind.config.js` file for global styles.
- **Content**: Update text, links, and data in the respective components or the `navbar-links.js` file.
- **Pricing Plans**: Edit the plans array in `PricingPlans.jsx` or the services array in `ResumeServices.jsx` to adjust offerings.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## ⚠️ Known Issues

- The `Testimonials.jsx` component currently uses placeholder data with identical entries for "Holly." Replace with real testimonials and video content.
- Some image assets (e.g., `Rectangle.png`, `ebook.png`) may need optimization for faster loading.
- The mobile navigation menu is hidden (`hidden md:flex` in `Navbar.jsx`). Consider adding a hamburger menu for mobile support.

## 🔮 Future Improvements

- Add a mobile-friendly navigation menu
- Implement video playback for testimonials
- Integrate a backend for user authentication and job application tracking
- Add form handling for the "Contact Us" section
- Optimize images and SVGs for performance

## 📝 License

This project is proprietary and intended for use by Mobius Engine AI. Contact the team for licensing details.

## 📞 Contact

For inquiries, reach out via the [Mobius LinkedIn page](https://www.linkedin.com/company/mobius-engine-ai) or visit [mobiusengine.ai](https://mobiusengine.ai).

---

<div align="center">
  <p>Built with 💼 by Mobius Engine AI</p>
</div>
