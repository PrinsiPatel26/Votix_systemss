# Votix Systems - Industrial Mixing Technology

A modern, fully responsive website for **Votix Systems**, a leading manufacturer of precision-engineered industrial agitators, mixers, and mixing systems.

**Live Website**: [https://votix-systems.vercel.app](https://votix-systems.vercel.app)

---

## 🎯 About Votix Systems

Votix Systems delivers precision-engineered industrial agitators, mixers and complete mixing systems — engineered around your process and built for demanding applications across:
- Pharmaceutical
- Chemical Processing
- Food & Beverage
- Biotechnology
- Energy & Utilities
- Environmental Solutions

---

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Hosting**: Vercel

---

## 📁 Project Structure

```
src/
├── components/        # React components (organized by feature)
│   ├── Hero/
│   ├── ProductShowcase/
│   ├── IndustryShowcase/
│   ├── Footer/
│   ├── Navbar/
│   └── ...
├── pages/            # Page components
├── data/             # Static data (products, industries, testimonials, etc.)
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── App.tsx           # Main app component
```

---

## ✨ Features

✅ **Fully Responsive Design** - Optimized for mobile (320px), tablet, desktop, and ultra-wide displays  
✅ **Touch-Optimized Interactions** - 44px+ minimum touch targets  
✅ **Smooth Animations** - Framer Motion for polished UI transitions  
✅ **Product Showcase** - Interactive product explorer and carousel  
✅ **Industry-Specific Sections** - Tailored content for each industry  
✅ **Contact & Quote Forms** - Full form validation and submission  
✅ **Mobile Navigation** - Responsive menu with mega menus on desktop  
✅ **Search Functionality** - Full-text search overlay  
✅ **SEO Optimized** - Structured data, meta tags, and semantic HTML  
✅ **Accessible** - WCAG compliant with proper ARIA labels  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PrinsPatel26/Votix_systemss.git
cd Votix_systemss

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📱 Responsive Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Mobile | 320px - 640px | `sm:` |
| Tablet | 641px - 1024px | `md:`, `lg:` |
| Desktop | 1025px+ | `lg:`, `xl:` |
| Ultra-Wide | 2560px+ | Contained max-width |

---

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (`#071525`)
- **Accent**: Gold (`#F4B942`)
- **Accent Dark**: Royal Blue (`#0B3FD6`)
- **Text**: Ink (`#111418`)
- **Background**: White (`#FFFFFF`)

### Typography
- **Display**: Inter Tight (headings)
- **Body**: Inter (paragraphs, body text)
- **Responsive Font Sizes**: Using `clamp()` for fluid scaling

### Spacing System
```
Mobile (px-6)  →  Tablet (md:px-10)  →  Desktop (lg:px-20)
py-[60px]      →  md:py-[88px]       →  lg:py-[140px]
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI framework |
| framer-motion | ^11.5 | Animations |
| react-router-dom | ^6 | Routing |
| tailwindcss | Latest | Styling |
| lucide-react | 0.522 | Icons |

---

## 🔄 Development Workflow

### Local Development
```bash
npm run dev          # Start dev server with hot reload
npm run build        # Production build
npm run preview      # Preview production build locally
```

### Code Structure Guidelines
- Components: Feature-based folder structure
- Hooks: Reusable logic in `src/hooks/`
- Utils: Helper functions in `src/utils/`
- Data: Static content in `src/data/`

---

## ✅ Responsive Design Features

### Mobile Optimization
- Touch targets: minimum 44px × 44px
- Form inputs: responsive padding and sizing
- Mobile menu: full-screen navigation
- Images: optimized aspect ratios

### Tablet/Desktop
- Mega menus for product/industry navigation
- Multi-column layouts
- Hover effects and transitions
- Responsive imagery

### Accessibility
- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

---

## 📊 Performance

- **Lazy Loading**: Images load on-demand
- **Code Splitting**: Route-based chunking
- **Optimized Bundle**: Tree-shaken dependencies
- **Mobile-First CSS**: Minimal overhead

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software owned by Votix Systems.

---

## 📞 Contact

For questions, features, or support regarding Votix Systems:
- **Email**: info@votixsystems.com
- **Phone**: +31 (0)10 000 0000
- **Website**: https://votix-systems.vercel.app

---

## 🔗 Links

- [GitHub Repository](https://github.com/PrinsPatel26/Votix_systemss)
- [Live Website](https://votix-systems.vercel.app)
- [Vercel Deployment](https://votix-systems.vercel.app)

---

**Last Updated**: August 18, 2026  
**Status**: Production Ready ✅
