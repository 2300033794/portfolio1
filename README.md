# This is my portfolio

 [Visit my portfolio](https://2300033794.github.io/portfolio1/)




# Developer Portfolio

A modern, dark-themed developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design:** Fully responsive layout for all devices.
- **Dark Theme:** Premium dark aesthetic with cyan and blue accents.
- **Animations:** Smooth scroll and fade-in animations using Framer Motion.
- **Interactive:** Hover effects and smooth navigation.

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/2300033794/portfolio1.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## Customization

- Edit `src/components/` to update content.
- Modify `tailwind.config.js` to change the theme.

















# Developer Portfolio

A modern, dark-themed developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design:** Fully responsive layout for all devices.
- **Dark Theme:** Premium dark aesthetic with cyan and blue accents.
- **Animations:** Smooth scroll and fade-in animations using Framer Motion.
- **Interactive:** Hover effects and smooth navigation.

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

---

# How to Update the Portfolio

Whenever you want to update your portfolio, use the sections below to find the correct files.

## 1. Update Personal Information

To change your name, title, introduction, education, or other personal details, check:

```text
src/components/
```

Look for the component related to the section you want to change.

Common sections may include:

```text
Hero.jsx
About.jsx
Education.jsx
Experience.jsx
```

Edit the text inside the relevant file.

---

## 2. Update About Me

To change your personal description, background, or career information, check:

```text
src/components/About.jsx
```

Update the text or content inside this component.

---

## 3. Update Skills

To add, remove, or modify technical skills, check:

```text
src/components/Skills.jsx
```

Update the skills, technologies, icons, or categories inside this file.

For example:

```text
Java
Python
React
Spring Boot
MongoDB
Docker
Kubernetes
Git
```

---

## 4. Update Projects

To add new projects or modify existing projects, check:

```text
src/components/Projects.jsx
```

You can update:

- Project name
- Project description
- Technologies used
- GitHub link
- Live demo link
- Project image

When adding a new project, copy the format of an existing project and replace its details.

---

## 5. Update Experience

To update internships, hackathons, jobs, or other experience, check:

```text
src/components/Experience.jsx
```

Add or modify the relevant experience information there.

---

## 6. Update Education

To change college, degree, course, or education details, check:

```text
src/components/Education.jsx
```

Update the existing education entries.

---

## 7. Update Resume

If the portfolio has a Resume button or resume download link, search the project for:

```text
resume
```

In VS Code or Cursor, use:

```text
Ctrl + Shift + F
```

Then search for:

```text
resume
```

This will help you find the Resume button, resume file, or resume link.

Replace the old resume file or link with the new one.

---

## 8. Update Contact Information

To change your email, phone number, LinkedIn, GitHub, or other contact information, check:

```text
src/components/Contact.jsx
```

Also check the footer component if the same contact information is displayed there.

You can search the whole project using:

```text
Ctrl + Shift + F
```

Search for:

```text
linkedin
github
gmail
mailto
```

This helps find every place where your contact information is used.

---

## 9. Update Social Media Links

Search the project using:

```text
Ctrl + Shift + F
```

Then search for:

```text
github.com
linkedin.com
```

Replace the old links with your latest profiles.

---

## 10. Update Images

If your portfolio uses profile pictures, project screenshots, certificates, or other images, check:

```text
public/
```

and/or:

```text
src/assets/
```

Replace the old image with the new image while keeping the file path correct.

If you change the filename, update its reference in the corresponding React component.

---

## 11. Update Colors and Theme

For global styling and theme changes, check:

```text
tailwind.config.js
```

You can also check the component files for Tailwind CSS classes such as:

```text
bg-black
bg-gray-900
text-cyan-400
text-blue-400
```

Modify these classes to change the colors and appearance of the portfolio.

---

## 12. Update Animations

Animations are implemented using Framer Motion.

Search inside:

```text
src/components/
```

for:

```text
motion
animate
initial
transition
whileHover
whileInView
```

These control animations such as:

- Fade-in effects
- Slide animations
- Hover effects
- Scroll animations
- Page transitions

---

# Running the Portfolio Locally

After making changes, run the project locally to check your changes before deploying.

## 1. Install Dependencies

```bash
npm install
```

## 2. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

Check the portfolio and make sure everything works correctly.

---

# Build the Portfolio

Before deploying, create the production build:

```bash
npm run build
```

If the build completes successfully, the production files will be generated inside:

```text
dist/
```

Make sure there are no build errors before deploying.

---

# Deploy Updated Portfolio to GitHub Pages

This project uses the `gh-pages` branch for the live GitHub Pages website.

After making changes, first create the production build:

```bash
npm run build
```

Then deploy the new build:

```bash
npx gh-pages -d dist
```

Wait a few minutes for GitHub Pages to update.

## Live Website

```text
https://2300033794.github.io/portfolio1/
```

If the website still shows the old version, perform a hard refresh:

```text
Ctrl + F5
```

You can also open the website in an Incognito or Private window to check the latest version.

---

# Push Source Code to GitHub

After making changes to the source code, save the source code to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Remember:

- `main` → stores the source/development code.
- `gh-pages` → contains the files used by GitHub Pages for the live website.

---

# Recommended Update Workflow

Whenever you make a portfolio change, follow this process:

```text
1. Edit the required file
        ↓
2. Run npm run dev
        ↓
3. Check the website locally
        ↓
4. Run npm run build
        ↓
5. Run npx gh-pages -d dist
        ↓
6. Push source changes to GitHub
        ↓
7. Open the live website
```

## Commands

```bash
npm run dev
npm run build
npx gh-pages -d dist
git add .
git commit -m "Update portfolio"
git push origin main
```

---

# GitHub Pages Information

## Live Portfolio

```text
https://2300033794.github.io/portfolio1/
```

## GitHub Repository

```text
https://github.com/2300033794/portfolio1
```

---

# Getting Started

## Clone the Repository

```bash
git clone https://github.com/2300033794/portfolio1.git
```

## Enter the Project Folder

```bash
cd portfolio1
```

## Install Dependencies

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

---

# Project Structure

A typical project structure looks like:

```text
portfolio1/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

> The exact filenames may be different depending on the current project structure. Use `Ctrl + Shift + F` in VS Code or Cursor to search for the section you want to update.

---

# Important Notes

Before deploying a new version, always test it locally first.

Run:

```bash
npm run dev
```

Then create the production build:

```bash
npm run build
```

Then deploy:

```bash
npx gh-pages -d dist
```

Finally, update GitHub with:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

This keeps both your source code and the live GitHub Pages website updated.

---

# Quick Reference

| What you want to change | Where to look |
|---|---|
| Name / Hero section | `src/components/` |
| About Me | `src/components/About.jsx` |
| Skills | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Experience | `src/components/Experience.jsx` |
| Education | `src/components/Education.jsx` |
| Contact details | `src/components/Contact.jsx` |
| Resume | Search `resume` |
| GitHub / LinkedIn | Search `github.com` / `linkedin.com` |
| Images | `public/` or `src/assets/` |
| Colors / Theme | `tailwind.config.js` and component files |
| Animations | Search `motion`, `animate`, `whileHover`, etc. |
| Live deployment | `gh-pages` branch |

---

## Final Deployment Commands

For future updates, the main commands you need are:

```bash
npm run dev
npm run build
npx gh-pages -d dist
git add .
git commit -m "Update portfolio"
git push origin main
```

Your live portfolio:

```text
https://2300033794.github.io/portfolio1/
```

Your GitHub repository:

```text
https://github.com/2300033794/portfolio1
```
