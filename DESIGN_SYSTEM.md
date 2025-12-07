# CES NIT DGP Website - Design System

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: `#212EA0` - Main brand color for buttons and accents
- **Dark Navy**: `#212121` - Text and dark elements
- **Light Background**: `#fafafa` - Page background

### Secondary Colors
- **White**: `#FFFFFF` - Buttons, cards, overlays
- **Light Gray**: `#f0f0f0` - Secondary backgrounds
- **Border Gray**: `#e0e0e0` - Dividers and borders

## 🔤 Typography

### Font Family
- **Primary Font**: "Outfit" (Google Fonts)
- **Fallback**: sans-serif

### Font Sizes
- **H1 (Hero Title)**: 48-56px, Bold (900)
- **H2 (Section Title)**: 36-42px, Bold (700)
- **H3 (Subsection)**: 24-28px, SemiBold (600)
- **Body Text**: 16px, Regular (400)
- **Small Text**: 14px, Regular (400)
- **Labels**: 12px, SemiBold (600)

## 📐 Spacing & Layout

### Container
- **Desktop**: Padding 10% left/right
- **Tablet**: Padding 5% left/right
- **Mobile**: Padding 3% left/right
- **Max Width**: 1400px (recommended)

### Spacing Units (8px base)
- **XS**: 8px
- **SM**: 16px
- **MD**: 24px
- **LG**: 32px
- **XL**: 48px
- **2XL**: 64px

## 🔘 Button Styles

### Primary Button (Dark)
- **Background**: `#212EA0`
- **Color**: White
- **Padding**: 14px 25px
- **Border Radius**: 30px
- **Font Size**: 16px
- **Hover**: Darken by 10%

### Secondary Button (Light)
- **Background**: White
- **Color**: `#212121`
- **Padding**: 14px 25px
- **Border Radius**: 30px
- **Font Size**: 16px
- **Hover**: Add subtle shadow

## 🏗️ Component Structure

### 1. Navbar
- Fixed/Sticky after scroll
- Logo on left
- Navigation links (HOME, EVENTS, TEAM)
- Mobile hamburger menu
- Smooth scrolling navigation

### 2. Hero Section
- Full height banner
- Large title text
- Descriptive paragraph
- CTA button (Explore More)
- Hero background image

### 3. About Section
- Two-column layout
- Image on left with play button overlay
- Text content on right
- Sections: About, Vision, Journey

### 4. Events/Programs Section
- Grid layout (3 columns on desktop)
- Event cards with images
- Hover effects
- Modal for event details

### 5. Gallery/Campus
- Image grid (2x2 or 3x3)
- Lightbox/modal for full images
- Smooth transitions

### 6. Team/Testimonials
- Card layout
- Team member photo
- Name and designation
- Brief description

### 7. Contact Section
- Two-column layout
- Contact form on right
- Contact info on left (email, phone, address)
- Email integration via Web3Forms

### 8. Footer
- Links and information
- Social media links
- Copyright info
- Responsive layout

## 📱 Responsive Breakpoints

- **Mobile**: < 400px
- **Mobile**: 400px - 600px
- **Tablet**: 600px - 1000px
- **Desktop**: 1000px - 1400px
- **Large Desktop**: > 1400px

## 🎭 Interactions

### Hover Effects
- Buttons: Color transition + subtle scale
- Cards: Shadow elevation + scale (1.02x)
- Links: Color fade

### Transitions
- Standard: 300ms ease-in-out
- Smooth scroll navigation: 500ms

### Animations
- Fade in on scroll
- Slide animations for modals
- Smooth scrolling throughout

## 🖼️ Assets

### Images Required
- Hero background
- About section image
- Program/Event thumbnails (3)
- Gallery images (4+)
- Team member photos
- Icons for contact info

### Current Assets Available
- CES Logo
- Hero image
- About image
- Program images (3)
- Gallery images (4)
- User/Team photos (4)
- Icons (menu, arrow, mail, phone, location, etc.)

## 🔗 Navigation Structure

```
Home
├── Hero
├── About
├── Events/Programs
├── Gallery
├── Team
└── Contact
```

## ✨ Design Principles

1. **Clean & Minimal**: Avoid clutter, focus on content
2. **Professional**: Reflects academic institution
3. **Accessible**: Good contrast, readable fonts
4. **Responsive**: Works on all devices
5. **Fast**: Optimized images, smooth animations
6. **Modern**: Contemporary design patterns

## 🎯 UI Enhancements to Implement

1. Better Programs component with titles/descriptions
2. Enhanced gallery with hover effects
3. Improved forms styling
4. Better mobile responsiveness
5. Loading animations
6. Scroll animations
7. Better spacing and alignment
8. Consistent hover states
9. Improved card designs
10. Better typography hierarchy
