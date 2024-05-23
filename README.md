# Portfolio

This is a personal portfolio project built using React and Tailwind CSS. The portfolio showcases various projects such as Instastaff and Photolabs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)

## Introduction

This project serves as a personal portfolio to showcase various projects, skills, and experiences. It is designed to be a single-page application (SPA) built with React and styled using Tailwind CSS.

## Features

- **Responsive Design:** Optimized for different screen sizes.
- **Modern UI:** Utilizes Material UI and Tailwind CSS for a sleek, modern look.
- **Animated Transitions:** Uses Framer Motion for smooth animations.
- **Interactive Components:** Includes components such as tooltips and modals for better user interaction.

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dialop/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`npm run build`**: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- **`npm run build:css`**: Compiles Tailwind CSS to the main stylesheet.

## Project Structure

The project has the following structure:

```plaintext
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── profile.jpeg
│   ├── robots.txt
├── src
│   ├── assets
│   │   └── images
│   │       ├── logos
│   │       │   ├── footwear_fusion.jpeg
│   │       │   ├── instastaff.gif
│   │       │   ├── instastaff.png
│   │       │   ├── photolabs.gif
│   │       │   ├── photolabs.png
│   │       │   ├── photolabs_image.jpeg
│   │       │   ├── photolabs_modal.png
│   │       │   ├── portfolio.png
│   │       │   └── tweeter.JPG
│   ├── components
│   │   └── navigation
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Footer.jsx
│   │       └── Projects.jsx
│   ├── styles
│   │   ├── App.css
│   │   ├── main.css
│   │   └── tailwind.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── reportWebVitals.js
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Dependencies

The project relies on several key dependencies:

- **React:** A JavaScript library for building user interfaces.
- **React DOM:** A package that provides DOM-specific methods for React.
- **React Router DOM:** A collection of navigational components that compose declaratively with your application.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Material UI:** A popular React UI framework with pre-built components.
- **FontAwesome:** Provides icons and social logos.
- **GSAP:** A robust JavaScript library for high-performance animations.
- **Framer Motion:** A library to power production-ready animations.

For a complete list, see `package.json`.

## DevDependencies

Development dependencies include:

- **Babel:** A JavaScript compiler that helps you use next-generation JavaScript, today.
- **PostCSS:** A tool for transforming CSS with JavaScript.
- **React Scripts:** A set of scripts from Create React App to optimize the development experience.
- **Tailwind CSS Forms:** A plugin that provides a basic reset for form styles.
- **Autoprefixer:** A PostCSS plugin which parses your CSS and adds vendor prefixes.

For a complete list, see `package.json`.
.

## Conclusion

Thank you for checking out my portfolio!
