# Portfolio Website

A modern personal portfolio built with Next.js 16, React 19, and Tailwind CSS 4. This project showcases a responsive developer portfolio with animated sections, project highlights, skills, experience, contact form, and a polished landing page.

## Features

- Responsive UI with a clean, mobile-friendly layout
- Hero section with introduction and social links
- Project showcase and experience timeline
- Skills categories and technology highlights
- Contact form powered by a Next.js API route
- Reusable React components for easy maintenance
- Smooth scrolling and subtle animations using `framer-motion`

## Tech Stack

- `Next.js` 16
- `React` 19
- `TypeScript`
- `Tailwind CSS` 4
- `Framer Motion`
- `react-scroll`
- `react-icons`
- `react-github-calendar`
- `nodemailer` for contact handling

## Project Structure

- `app/` – Next.js application routes and layout
- `components/` – Reusable UI components like `Hero`, `About`, `Projects`, `Contact`, `Skills`, and `Footer`
- `public/` – Static assets and images
- `app/api/contact/route.ts` – Contact form API route
- `app/globals.css` – Global styles and Tailwind imports

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Build for production

```bash
npm run build
npm start
```

## Customize

Update the portfolio content by editing the components inside `components/` and the layout in `app/layout.tsx`. Customize your contact settings inside `app/api/contact/route.ts`.

## Notes

- Ensure your environment supports React 19 and Next.js 16.
- Tailwind CSS is configured using `postcss.config.mjs`.

## Author

Created by Shubham. This repository is a personal portfolio website intended to present projects, experience, and contact details in a professional, modern layout.
