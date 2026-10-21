/* ============================================================
   Portfolio content data — single source of truth
   ============================================================ */

export const profile = {
  name: "Asibur Rahman Bappy",
  eyebrowQuote: '"Knowledge is Power." — Francis Bacon',
  lead: "Deeply committed to pursuing opportunities that broaden my expertise and foster professional excellence, I bring a curious and proactive disposition to continuous growth and innovation in both personal and professional endeavors. Collaborative environments allow me to contribute meaningfully, refine my capabilities, and deliver a tangible impact.",
  typingRoles: [
    "EEE Engineer",
    "VLSI Design Enthusiast",
    "Embedded Systems Developer",
    "Electronics Researcher",
  ],
  profileBio:
    "I am a dedicated Electrical and Electronic Engineer with hands-on experience spanning VLSI design, embedded systems, digital circuit design, and automation. My work bridges hardware and software — from transistor-level IC design to microcontroller-based systems — with a strong focus on solving complex engineering challenges and optimizing designs for performance, efficiency, and reliability. I bring a collaborative, detail-oriented approach to multidisciplinary teams, translating research and theoretical concepts into practical, technologically sound solutions that meet real-world engineering standards.",
  avatar: "/media/profile.webp",
  resume: "/media/Asibur_Rahman_Bappy_Resume.pdf",
  video: "/media/bg.mp4",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ar-bappy-171/", icon: "fab fa-github" },
  { label: "ORCID", href: "https://orcid.org/0009-0006-9444-8982", icon: "fab fa-orcid" },
  { label: "WhatsApp", href: "https://wa.me/8801853265996/", icon: "fab fa-whatsapp" },
  { label: "Facebook", href: "https://www.facebook.com/md.bappi.397948/", icon: "fab fa-facebook" },
  { label: "Instagram", href: "https://www.instagram.com/cat_bipps/", icon: "fab fa-instagram" },
  { label: "Discord (night_owl_171)", href: "https://discord.com/users/night_owl_171", icon: "fab fa-discord" },
  { label: "X (Twitter)", href: "https://x.com/ar_bappy_/", icon: "fab fa-x-twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-asibur-rahman-13a38637a/", icon: "fab fa-linkedin" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#reference", label: "Reference" },
  { href: "#contact", label: "Contact" },
];

export type TimelineItem = {
  title: string;
  meta: string;
  bullets: string[];
};

export type CardItem = {
  badge: string;
  bullets: string[];
  techStack?: string[];
  featured?: boolean;
};

export const experience: {
  groups: TimelineItem[][];
  competencies: CardItem;
} = {
  groups: [
    [
      {
        title: "IC Mask Design Training — ULKASEMI",
        meta: "Duration: 01 Sep – 08 Sep 2025",
        bullets: [
          "Gained hands-on experience with Cadence Virtuoso using 14nm technology for circuit layout design and verification.",
          "Learned about advanced layers in short-channel technology and applied DRC and LVS checks for validation.",
          "Achieved 2nd position out of 13 participants in the final assessment.",
        ],
      },
    ],
    [
      {
        title: "HR Intern – Learning & Development, Prime Bank PLC, Head Office",
        meta: "Duration: Feb 2026 – May 2026",
        bullets: [
          "Contributed ideas to develop and improve the official e-learning platform.",
          "Supported training program organization and cross-department coordination.",
          "Managed and analyzed employee training data and hiring documents.",
          "Maintained documentation and training records for tracking and compliance.",
          "Prepared reports and presentations for HR and training sessions.",
        ],
      },
    ],
    [
      {
        title: "Science And Commerce Coaching Center, Mirpur, Dhaka",
        meta: "Promoted: Jan 2024 — Present",
        bullets: [
          "Promoted to Senior Tutor, leading curriculum planning and advanced classes.",
          "Mentor junior tutors and guide students to improve problem-solving skills.",
          "Organize workshops and track student progress for academic success.",
        ],
      },
      {
        title: "Science And Commerce Coaching Center, Mirpur, Dhaka",
        meta: "Joined: Oct 2021 – Dec 2023",
        bullets: [
          "Teach Physics and Mathematics to HSC candidates.",
          "Help students solve problems effectively and understand concepts deeply.",
          "Prepare them for academic success and future challenges.",
        ],
      },
    ],
  ],
  competencies: {
    badge: "Core Competencies",
    bullets: [
      "Analytical problem solving",
      "Clear documentation and collaboration",
      "Communication and teamwork skills",
      "Problem solving and decision making",
      "Multitasking and adaptability",
      "Knowledge sharing and time management",
    ],
  },
};

export const skills: CardItem[] = [
  {
    badge: "Software & EDA",
    bullets: [
      "Cadence Virtuoso, Cadence Innovus",
      "PSpice, Proteus, Quartus",
      "AutoCAD, FreeCAD",
      "Code::Blocks, MATLAB, Arduino",
      "PowerWorld Simulator (Student version)",
      "Microsoft Word, Excel, PowerPoint",
      "VS Code, Antigravity",
    ],
  },
  {
    badge: "Programming & OS",
    bullets: [
      "C, C++, Python",
      "MATLAB, Verilog, PLC basics",
      "Windows, Linux (Bash)",
    ],
  },
  {
    badge: "Language Proficiency",
    bullets: [
      "Bangla (native)",
      "English (professional)",
      "Deutsch (German) — A2",
      "Japanese — A1",
    ],
  },
  {
    badge: "Specialized Courses",
    bullets: [
      "VLSI 1, Fabrication and Processing",
      "Digital Logic Design",
      "Electronics 1, Electronics 2",
      "Power System 1, Power System 2",
      "Digital Electronics, Digital Signal Processing",
      "Computer Architecture, Optoelectronics",
      "Biomedical Engineering",
    ],
  },
];

import projectsData from "@/content/projects.json";

export const education: TimelineItem[] = [
  {
    title: "Ahsanullah University of Science & Technology (AUST) — 2024",
    meta: "Bachelor of Science in Electrical & Electronic Engineering",
    bullets: [
      "Conference: Design and Performance Analysis of a Highly Sensitive SPR Biosensor for Water Pollution Detection.",
      "Journal: Design and Numerical Analysis of a Highly Sensitive SPR Biosensor for Detecting Contaminants in Water.",
      "CGPA: 3.2 out of 4.00",
    ],
  },
  {
    title: "Government Science College, Dhaka — 2019",
    meta: "Higher Secondary Certificate (HSC)",
    bullets: ["GPA: 5.00 out of 5.00"],
  },
  {
    title: "Government Laboratory High School, Dhaka — 2017",
    meta: "Secondary School Certificate (SSC)",
    bullets: ["GPA: 5.00 out of 5.00"],
  },
];

export const references: TimelineItem[] = [
  {
    title: "Umme Salma",
    meta: "SVP & Head of L&D, Prime Bank PLC",
    bullets: ["Email: salma.umme@primebank.com.bd"],
  },
  {
    title: "Dr. Khandakar Md. Ishtiak",
    meta: "Associate Professor · Department of EEE, AUST",
    bullets: ["Email: ishtiak.eee@aust.edu"],
  },
  {
    title: "Dr. Bobby Barua",
    meta: "Professor · Department of EEE, AUST",
    bullets: ["Email: bobby@aust.edu"],
  },
  {
    title: "Sabbir Hossain",
    meta: "Director · Science and Commerce Coaching Center, Dhaka",
    bullets: ["Email: sciencecommercecoaching@gmail.com"],
  },
];

export const contact = {
  phone: "+880 1853-265996",
  phoneHref: "tel:+8801853265996",
  email: "asibur.eee.171@gmail.com",
  emailHref: "mailto:asibur.eee.171@gmail.com",
  address: "Dhaka, Bangladesh",
  formAction: "https://formspree.io/f/mzzaqakn",
};
