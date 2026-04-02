# Mise En POP Landing Page Design Guidelines

## Design Approach: Brand Guidelines-Based Implementation

This design strictly follows the comprehensive brand guidelines provided in the PDF. We will create a premium, hospitality-focused landing page that positions Mise En POP as a professional technology company while showcasing their products (Jenry and Bar Connect).

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Corporate Orange: 14 72% 64% - Primary CTAs, accents, interactive elements
- Professional Navy: 229 52% 24% - Typography, navigation, structural elements  
- Premium Gold: 43 89% 61% - Premium features, success indicators, achievements
- Cream White: 44 83% 94% - Section backgrounds, soft contrast areas
- Pure White: 0 0% 100% - Primary backgrounds, clean sections

**Supporting Colors:**
- Success Green: 160 84% 39% - Metrics, growth indicators
- Info Blue: 217 91% 60% - Trust badges, security features
- Dark Gray: 218 11% 28% - Lead paragraphs
- Medium Gray: 217 11% 45% - Body text
- Light Gray: 218 11% 65% - Supporting text

**Usage Ratio:** 60% White/Cream backgrounds, 30% Navy structural elements, 10% Orange accents, touches of Gold for premium features

### B. Typography

**Font Family:** Inter (Light 300, Regular 400, Medium 500, Semi-Bold 600, Bold 700, Black 900)

**Hierarchy:**
- Hero H1: Bold 700, 56px desktop/36px mobile, Navy, letter-spacing -0.02em, line-height 1.1
- Section H2: Semi-Bold 600, 40px desktop/28px mobile, Navy, line-height 1.2
- Subsection H3: Medium 500, 28px desktop/22px mobile, Navy, line-height 1.3
- Lead Paragraph: Regular 400, 22px desktop/18px mobile, Dark Gray, line-height 1.6, max-width 700px
- Body Text: Regular 400, 18px desktop/16px mobile, Medium Gray, line-height 1.6
- Supporting Text: Regular 400, 14px, Light Gray, line-height 1.5
- CTA Text: Semi-Bold 600, 18px, White on orange, letter-spacing 0.01em

### C. Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm

**Container Widths:**
- Full-width sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-prose (optimal reading)

**Section Padding:** py-20 to py-32 desktop, py-12 to py-16 mobile

### D. Component Library

**Navigation:**
- Sticky header with Mise en POP logo (vertical stacking: "Mise en" Light Navy + "POP" Bold Orange)
- Navigation links: Inter Medium, Navy, orange underline on hover
- Primary CTA button in header: Orange background, white text, navy hover state

**Buttons:**
- Primary: Orange background (#FF7A47), white text, rounded-lg, shadow-md, navy hover
- Secondary: Navy outline, navy text, transparent background, orange hover
- Ghost (on images): Blurred background, white text/border, no hover effects (native states only)

**Cards:**
- White/cream backgrounds with subtle shadow
- Rounded corners (rounded-xl)
- Hover: gentle lift with increased shadow
- Icons: Navy line icons with orange accents

**Forms:**
- Clean, minimal input fields with navy borders
- Orange focus states
- Inline validation with green success/red error states

## Landing Page Structure

### 1. Hero Section (100vh)
**Layout:** Full-screen impact with large hero image
**Background:** High-quality photography showing diverse hospitality workers in modern restaurant/bar environment, warm natural lighting
**Content:** 
- Vertical Mise en POP logo (top left)
- Hero headline: "Empowering Hospitality Professionals to Take Control of Their Careers"
- Subheadline: "Jenry revolutionizes how the industry connects workers, employers, and customers"
- Dual CTAs: Primary "Join Jenry Waitlist" (orange), Secondary "Explore Bar Connect" (ghost button with blur)
- Tagline: "People Over Places"

**Image:** Professional photography of diverse hospitality team (bartenders, servers, kitchen staff) collaborating in modern setting, authentic not stock, warm color temperature

### 2. Problem Statement Section
**Background:** White
**Layout:** 3-column grid on desktop, stack on mobile
**Content:** "The Hospitality Industry Deserves Better" headline with 3-4 pain points featuring navy icons with orange accents, statistics in large orange numbers

### 3. Solution Overview - Jenry
**Background:** Cream (#FDF6E3)
**Layout:** Two-column (60/40 split) - large iPhone mockup on left, feature list on right
**Content:** "Meet Jenry: Your Career, Your Terms" with 4 core features, gold badge for "Coming Soon"
**Image:** Clean iPhone mockup showing Jenry app interface on modern teal/blue background

### 4. Features Breakdown
**Background:** Alternating white and cream sections
**Layout:** Three-column cards
**Content:** For Workers | For Employers | For Customers - each with custom navy line icons, orange hover states

### 5. How It Works
**Background:** Navy (#1E2A5E) with subtle diagonal pattern
**Layout:** Horizontal 4-step process with large gold numbered circles (1-2-3-4) connected by dotted orange lines
**Content:** White text, orange accent numbers

### 6. Products Showcase
**Background:** White
**Layout:** Two-column grid featuring both products
**Content:** 
- Jenry card: Teal/blue product screenshot, "Coming Soon" gold badge, waitlist CTA
- Bar Connect card: Product preview, "Coming Soon" badge, connect.jenry.app link
Both cards with rounded-xl, shadow-lg, hover lift effect

### 7. Team Section
**Background:** Cream
**Layout:** Two-column leadership cards
**Content:**
- Jucely Marie Rivera (CEO): Professional photo in hospitality setting, LinkedIn bio summary, orange "Connect on LinkedIn" link
- Samuel Rivera (CTO): Professional photo, technical background from LinkedIn, orange link
Cards with navy borders, white backgrounds, subtle gold accent on top

### 8. Impact Metrics
**Background:** Navy with subtle texture overlay
**Layout:** Four-column stat display
**Content:** Large orange numbers (56px), white supporting text below, icons representing each metric
**Stats:** Vision/mission focused (e.g., "1 Mission: Empower Hospitality", "2 Products: Launching Soon", "∞ Possibilities")

### 9. Final CTA Section
**Background:** Orange gradient (lighter to darker)
**Layout:** Centered content, max-width 800px
**Content:** "Ready to Transform Hospitality?" headline, email capture form with navy submit button, benefit statement in white text

### 10. Footer
**Background:** Navy (#1E2A5E)
**Layout:** Four-column grid (Company, Products, Legal, Contact)
**Content:**
- White Mise en POP logo variant
- Links: Jenry, Bar Connect, About, Careers, Privacy, Terms
- Contact: info@miseenpop.com in orange
- Social media icons in white with orange hover
- Copyright in light gray

## Visual Elements

**Photography Style:**
- Authentic hospitality workers in action (diverse representation)
- Modern restaurant/bar environments
- Mobile app usage in natural settings
- Warm, natural lighting
- Candid moments over posed shots
- High resolution 2x for web

**Icons:**
- Heroicons library via CDN
- Navy primary color with orange accents on hover
- Consistent 24px or 32px sizing
- Line style (not filled)

**Animations:**
- Minimal, purposeful only
- Gentle fade-in on scroll for sections
- Smooth button hover transitions (200ms)
- Card lift effects on hover
- No distracting parallax or heavy animations

## Accessibility & Dark Mode

Maintain light theme only as per brand guidelines - the navy/orange/gold palette is optimized for light backgrounds. Ensure WCAG AA contrast ratios: Navy on white (excellent), Orange on white (test), White on navy (excellent).