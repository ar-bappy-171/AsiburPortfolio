/* ============================================================
   Portfolio content data — single source of truth
   ============================================================ */

import profileData from "@/content/profile.json";

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

import experienceData from "@/content/experience.json";

import skillsData from "@/content/skills.json";

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
