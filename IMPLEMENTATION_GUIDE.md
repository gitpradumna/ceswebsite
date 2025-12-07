# CES NIT DGP Website - Implementation Guide

## Overview
Your Civil Engineering Society website is built with React and Vite. This guide explains the design system, components, and how to maintain consistency.

## Project Structure

```
src/
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
├── index.css                # Global styles
└── Components/
    ├── Navbar/              # Navigation bar
    ├── Hero/                # Hero section banner
    ├── About/               # About section
    ├── Programs/            # Events/Programs section
    ├── Campus/              # Gallery section
    ├── Testimonials/        # Team testimonials
    ├── Contact/             # Contact form
    ├── Footer/              # Footer
    ├── VideoPlayer/         # Video modal player
    ├── Title/               # Section titles
    └── EventDetailsModal/   # Event details modal
```

## Design System

### Color Scheme
- **Primary Brand Color**: `#212EA0` (Blue) - Used for buttons, accents, and highlights
- **Dark Text**: `#212121` - Primary text color
- **Section Headers**: `#000F38` - Dark navy for headings
- **Secondary Text**: `#676767` - Gray text for descriptions
- **Background**: `#fafafa` - Light off-white background
- **Card Background**: `#FFFFFF` - White for cards and containers
- **Input Background**: `#EBECFE` - Light blue for form inputs

### Typography
- **Font Family**: "Outfit" (imported from Google Fonts)
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold), 900 (extra bold)

### Sizing Standards
- **Large screens**: 10% horizontal padding
- **Medium screens**: 5% horizontal padding
- **Small screens**: 3% horizontal padding

## Component Details

### 1. Navbar Component
**File**: `src/Components/Navbar/Navbar.jsx`

- **Fixed positioning** at top of page
- **Sticky behavior**: Dark background appears on scroll
- **Logo**: 125px width on desktop
- **Navigation**: HOME, EVENTS, TEAM
- **Mobile**: Hamburger menu slides from right
- **Smooth scrolling** to sections using react-scroll

**Key Props**:
- None (uses internal state)

**Key Features**:
- Automatic dark mode on scroll
- Mobile-responsive hamburger menu
- Smooth anchor navigation

### 2. Hero Section
**File**: `src/Components/Hero/Hero.jsx`

- **Full viewport height** (100vh min)
- **Background**: Overlay image with dark gradient
- **Typography**: Large title and description
- **CTA Button**: "Explore more" button
- **Animation**: Fade-in on load

**Key Content**:
- H1: "Civil Engineering Society"
- H1: "NIT Durgapur"
- Description paragraph
- Explore button with icon

### 3. About Section
**File**: `src/Components/About/About.jsx`

- **Two-column layout**: Image left, text right
- **Image**: Responsive with hover effect
- **Play Button**: Click to open video modal
- **Content Structure**:
  - About heading
  - Vision section
  - Journey section
- **Responsive**: Stacks vertically on mobile

**Props**:
- `setPlayState`: Function to open video modal

### 4. Programs/Events Section
**File**: `src/Components/Programs/Programs.jsx`

- **Three-column grid** on desktop
- **Card hover effect**: Lifts up on hover
- **Overlay**: Blue overlay on hover with title and description
- **Events**:
  1. Technical Workshops
  2. Guest Lectures
  3. Project Expo

**Features**:
- Smooth transitions
- Image object-fit for consistent aspect ratio
- Responsive grid layout

### 5. Campus/Gallery Section
**File**: `src/Components/Campus/Campus.jsx`

- **Image grid**: Responsive layout (2x2 on tablet, 1 column on mobile)
- **Hover effects**: Scale and shadow on hover
- **"See more" button**: Links to full gallery
- **Images**: Four gallery images with equal sizing

### 6. Testimonials/Team Section
**File**: `src/Components/Testimonials/Testimonials.jsx`

- **Slider component**: Navigate between testimonials
- **50% width per slide**: Shows two at a time
- **Navigation buttons**: Previous/Next arrows
- **Team info**: Photo, name, title, description
- **Responsive**: Single slide on mobile

**Features**:
- Smooth scroll transitions
- Arrow button navigation
- Gradient backgrounds on buttons

### 7. Contact Section
**File**: `src/Components/Contact/Contact.jsx`

- **Two-column layout**: Contact info left, form right
- **Contact Information**:
  - Email
  - Phone
  - Address
- **Contact Form**:
  - Name input
  - Phone input
  - Message textarea
  - Submit button
- **Form Integration**: Web3Forms API for email

**Configuration Required**:
- Update `ACCESS_KEY` in Contact.jsx with Web3Forms key
- Update contact details with actual information

### 8. Footer
**File**: `src/Components/Footer/Footer.jsx`

- **Multiple sections**: Logo, links, contact details, social media
- **Social links**: Instagram, Facebook, YouTube, LinkedIn
- **Quick links**: Home, Events, Team
- **Contact info**: Email, phone, address
- **Responsive**: Stacks on mobile

### 9. VideoPlayer Modal
**File**: `src/Components/VideoPlayer/VideoPlayer.jsx`

- **Modal backdrop**: Semi-transparent dark overlay
- **Video player**: HTML5 video with controls
- **Click to close**: Click outside video to close
- **Auto-play**: Video plays when opened
- **Responsive**: Scales for mobile devices

**Props**:
- `playState`: Boolean - whether to show modal
- `setPlayState`: Function to toggle modal

## Styling Patterns

### Button Hover Effects
```css
.btn:hover {
    transform: translateY(-2px);      /* Lift up */
    box-shadow: 0 6px 16px rgba(...); /* Add shadow */
}
```

### Card Hover Effects
```css
.card:hover {
    transform: translateY(-8px) scale(1.02);  /* Lift and scale */
    box-shadow: 0 12px 28px rgba(...);        /* Enhanced shadow */
}
```

### Smooth Transitions
```css
transition: all 0.3s ease;
```

### Mobile-First Approach
- Start with mobile styles
- Use media queries for larger screens
- Standard breakpoints:
  - 480px - Mobile
  - 600px - Mobile landscape/tablet
  - 800px - Tablet
  - 1000px - Desktop
  - 1200px - Large desktop

## Responsive Design Strategy

### Desktop Layout (> 1000px)
- Full width content with 10% padding
- Multi-column grids
- Side-by-side sections
- Fixed navbar

### Tablet Layout (600px - 1000px)
- 5% padding
- 2-column grids
- Adjusted spacing

### Mobile Layout (< 600px)
- 3% padding
- Single column stacks
- Full-width images
- Simplified forms

## Common Tasks

### Add a New Section
1. Create component folder in `src/Components/`
2. Create `ComponentName.jsx` and `ComponentName.css`
3. Follow the styling patterns (flex/grid, hover effects)
4. Import and add to `App.jsx`
5. Ensure mobile responsiveness

### Update Colors
1. Find color in component CSS
2. Update to new color code
3. Consider hover/active states
4. Test on different backgrounds

### Modify Content
1. Update JSX content directly
2. Adjust font sizes if needed
3. Keep alignment consistent
4. Test responsive layout

### Add New Images
1. Save to `src/assets/`
2. Import in component
3. Set appropriate dimensions
4. Ensure responsive sizing

## Performance Tips

1. **Image Optimization**
   - Use appropriate image sizes
   - Consider lazy loading for galleries
   - Use modern formats (WebP)

2. **CSS Organization**
   - Keep global styles in `index.css`
   - Component-specific styles in component CSS
   - Reuse color variables

3. **Smooth Scrolling**
   - Already enabled in global CSS
   - Use react-scroll for anchor links

4. **Animations**
   - Keep animations under 500ms
   - Use `ease-in-out` for natural motion
   - Avoid over-animating

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox support required

## Future Enhancements
- Add more events with modal popups
- Implement lightbox for gallery
- Add testimonial filtering
- Create event registration form
- Add animations on scroll
- Implement team member detail pages

## Contact & Support
For design questions, refer to the DESIGN_SYSTEM.md file.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Notes
- All components use functional components with React hooks
- Responsive design tested on mobile, tablet, and desktop
- Smooth transitions enhance user experience
- Color scheme reflects professional academic institution aesthetic
