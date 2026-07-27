# Asibur Rahman Bappy — Portfolio

> *"Knowledge is Power." — Francis Bacon*

Welcome to the personal portfolio of **Asibur Rahman Bappy** — an Electrical & Electronic Engineer passionate about VLSI design, embedded systems, and translating research into practical engineering solutions. This site is a single-page showcase of who I am, what I've built, and how to get in touch.

---

## 👋 What you'll find here

The portfolio is a single-page experience with smooth scrolling navigation. Here's a tour of every section:

### 🏠 Home
The opening hero with my name, an animated typing role that cycles through what I do — *EEE Engineer · VLSI Design Enthusiast · Embedded Systems Developer · Electronics Researcher* — a short intro paragraph, and quick-action buttons to download my resume or reach out.

### 📊 Quick Stats
Four animated counter cards that summarise my work at a glance: project count, ULKASEMI training rank, CGPA, and languages spoken.

### 👤 Profile
A longer bio describing my engineering background, the bridge I build between hardware and software, and the collaborative approach I bring to multidisciplinary teams.

### 💼 Experience
A vertical timeline of my professional and academic journey:
- **HR Intern – Learning & Development** at Prime Bank PLC (Feb 2026 – May 2026)
- **IC Mask Design Training** at ULKASEMI (2nd place out of 13 participants)
- **Senior Tutor** at Science and Commerce Coaching Center (2024 – present)
- **Tutor** at Science and Commerce Coaching Center (2021 – 2023)
- A **Core Competencies** card highlighting my soft skills.

### 🛠 Technical Skills
A bento-grid layout of four skill categories:
- **Software & EDA** — Cadence Virtuoso, Innovus, PSpice, Proteus, Quartus, AutoCAD, MATLAB, and more.
- **Programming & OS** — C, C++, Python, MATLAB, Verilog, PLC, Windows, Linux.
- **Language Proficiency** — Bangla (native), English (professional), German A2, Japanese A1.
- **Specialized Courses** — VLSI, Digital Logic Design, Power Systems, DSP, Biomedical Engineering, and more.

### 🚀 Project Experience
A grid of 14 projects spanning hardware, software, and research — each with tech-stack chips and bullet-point descriptions. **Featured projects** (marked with a star ribbon) include:
- Training Management & Evaluation System – Prime Bank PLC
- 10T SRAM Cell Implementation in Cadence
- Surface Plasmon Resonance Numerical Analysis

Other projects cover vibration meters, MATLAB apps, wireless RC cars, MOSFET full adders, solar inverters, adaptive chargers, traffic-light automation, image enhancement, and a couple of personal fun projects (Movie Tracker, Productivity Tools).

### 🎓 Education
Timeline of my academic background:
- **BSc in Electrical & Electronic Engineering** — Ahsanullah University of Science & Technology (2024), CGPA 3.20 / 4.00. Includes a conference paper and journal article on SPR biosensors for water-pollution detection.
- **HSC** — Government Science College, Dhaka (2019), GPA 5.00.
- **SSC** — Government Laboratory High School, Dhaka (2017), GPA 5.00.

### 📝 References
A list of professional and academic referees available on request, including:
- **Umme Salma** — SVP & Head of L&D, Prime Bank PLC
- **Dr. Khandakar Md. Ishtiak** — Associate Professor, Department of EEE, AUST
- **Dr. Bobby Barua** — Professor, Department of EEE, AUST
- **Sabbir Hossain** — Director, Science and Commerce Coaching Center

### ✉️ Contact
A contact form (powered by Formspree) plus direct contact details — phone, email, and address — and a row of social links to follow me.

---

## ✨ Design highlights

- **Dark / light theme toggle** with system-preference detection
- **Animated gradient name** with cyan → purple → pink shimmer
- **Floating circular avatar** with a rotating conic-gradient glow ring
- **Glassmorphism cards** with frosted-glass blur across all sections
- **Bento-grid skill layout** for an asymmetric, modern feel
- **3D tilt + cursor-following spotlight** on every card
- **Magnetic buttons** that gently pull toward your cursor
- **Count-up stat cards** that animate when scrolled into view
- **Scroll-down indicator**, smooth-scrolling nav, and mobile FAB menu
- **Full responsive** from large desktops to small phones
- **Reduced-motion aware** — all animations respect `prefers-reduced-motion`
- **Accessible** — ARIA landmarks, skip-link, focus-visible rings, keyboard-navigable

---

## 🧰 Tech stack

| Layer | Tools |
|---|---|
| Framework | **Next.js 16** (App Router, React Server / Client Components) |
| Language | **TypeScript** |
| Styling | Plain CSS with `color-mix()`, custom properties, `backdrop-filter` |
| Icons | Font Awesome 6.6 |
| Fonts | System stack (Trebuchet MS / Segoe UI / Roboto) |
| Form backend | Formspree |
| Build / dev | Bun |

---

## 🌐 Connect with me

| Platform | Link |
|---|---|
| 📞 Phone | +880 1853-265996 |
| ✉️ Email | asibur.eee.171@gmail.com |
| 📍 Location | Dhaka, Bangladesh |
| Facebook | [md.bappi.397948](https://www.facebook.com/md.bappi.397948/) |
| Instagram | [cat_bipps](https://www.instagram.com/cat_bipps/) |
| WhatsApp | [+8801853265996](https://wa.me/8801853265996/) |
| Discord | [night_owl_171](https://discord.com/users/night_owl_171) |
| X (Twitter) | [ar_bappy_](https://x.com/ar_bappy_/) |
| LinkedIn | [md-asibur-rahman](https://www.linkedin.com/in/md-asibur-rahman-13a38637a/) |
| GitHub | [ar-bappy-171](https://github.com/ar-bappy-171/) |
| ORCID | [0009-0006-9444-8982](https://orcid.org/0009-0006-9444-8982) |

---

## 📂 Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout + metadata + Font Awesome
│   ├── page.tsx             # Renders <Portfolio />
│   └── globals.css          # All styling (theme, glass, bento, animations)
├── components/portfolio/
│   ├── Portfolio.tsx        # Page composition root
│   ├── Hero.tsx             # Name, typing role, CTAs, avatar
│   ├── StatsRow.tsx         # Count-up stat cards
│   ├── Profile.tsx          # Bio panel
│   ├── Experience.tsx       # Timeline + competencies
│   ├── Skills.tsx           # Bento-grid skills
│   ├── Projects.tsx         # Project cards with tech badges
│   ├── Education.tsx        # Education timeline
│   ├── Reference.tsx        # Referees list
│   ├── Contact.tsx          # Form + contact info + socials
│   ├── Navbar / Footer / Background / Preloader / ...
│   └── ...
├── hooks/
│   ├── useTyping.ts         # Typewriter effect
│   ├── useReveal.ts         # Scroll-reveal animations
│   ├── useScrollSpy.ts      # Active nav-link highlighting
│   ├── useTheme.ts          # Dark/light theme persistence
│   ├── useMagnetic.ts       # Magnetic button effect
│   ├── useRipple.ts         # Button ripple on click
│   └── useProgressBar.ts    # Top scroll progress bar
└── lib/
    └── portfolio-data.ts    # ← All editable content lives here
```

### ✏️ Editing content

Every piece of text on the site is centralised in **`src/lib/portfolio-data.ts`** — name, bio, experience, skills, projects, education, references, contact details, socials, and even the typing roles. Edit that one file and the whole site updates.

### 🖼 Replacing media

Profile photo, resume PDF, and background video live in **`public/media/`**. Replace the files there (keeping the same filenames) or update the paths in `portfolio-data.ts`.

---

## 📄 License

Personal portfolio content © Asibur Rahman Bappy. Code structure is provided as-is for educational reference.

---

Thanks for visiting — let's build something together. ⚡
