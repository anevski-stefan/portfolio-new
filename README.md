# Stefan Anevski - Portfolio

A modern, responsive portfolio website built with Next.js, featuring server-side rendering, smooth animations, and dark mode support. Visit the live site at [anevskistefan.xyz](https://anevskistefan.xyz).

## ✨ Features

- 🎨 Responsive design with Tailwind CSS
- 🌙 Dark/Light theme toggle with smooth transitions
- ✨ Animated page transitions and scroll effects using Framer Motion
- 📱 Mobile-first navigation
- 🚀 Optimized performance with Next.js
- 📧 Contact form with EmailJS integration
- 🖼️ Lazy-loaded images with blur placeholders
- 🧪 Comprehensive testing suite with Jest and Cypress
- 📊 Bundle analysis and performance monitoring
- ♿ Accessibility-focused development

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js with Next.js 15.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS

### Development Tools
- **Language**: TypeScript
- **Testing**: Jest, React Testing Library, Cypress
- **Linting**: ESLint
- **Package Manager**: npm/yarn
- **Version Control**: Git & GitHub

## 🚀 Getting Started

1. Clone the repository and switch to the development branch:
```bash
git clone https://github.com/anevski-stefan/portfolio-new.git

cd portfolio-new
git checkout develop  # Development happens on the develop branch
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## 📝 Available Scripts

- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint
- `test` - Run Jest tests
- `test:watch` - Run Jest in watch mode
- `test:coverage` - Generate test coverage report
- `cypress` - Open Cypress test runner
- `lighthouse` - Generate Lighthouse report
- `analyze` - Analyze bundle size

## 📁 Project Structure

```
src/
├── components/     # React components
├── pages/         # Next.js pages
├── styles/        # Global styles
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── context/       # React Context providers
└── __tests__/     # Test files
```

## 🧪 Testing

The project includes:
- Unit tests with Jest and React Testing Library
- End-to-end tests with Cypress
- Accessibility testing with jest-axe
- Performance testing with Lighthouse

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🚀 Deployment

The application is deployed on Vercel and accessible at [anevskistefan.xyz](https://anevskistefan.xyz).

**Stefan Anevski**
- Website: [anevskistefan.xyz](https://anevskistefan.xyz)
- GitHub: [@anevski-stefan](https://github.com/anevski-stefan)
- LinkedIn: [stefan-anevski](https://linkedin.com/in/stefan-anevski)
- Twitter: [@s_anevski](https://twitter.com/s_anevski)
```