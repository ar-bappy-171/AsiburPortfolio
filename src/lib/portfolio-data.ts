/* ============================================================
   Portfolio content data — single source of truth
   ============================================================ */

export const profile = {
  name: "Asibur Rahman Bappy",
  eyebrowQuote: '"Knowledge is Power." — Francis Bacon',
  lead: "I am passionate about pursuing opportunities that expand my expertise and drive professional excellence. With a curious, proactive mindset, I am committed to continuous growth and innovation in both personal and professional realms. I thrive in collaborative environments where I can contribute meaningfully, sharpen my skills, and make a tangible impact.",
  typingRoles: [
    "EEE Engineer",
    "VLSI Design Enthusiast",
    "Embedded Systems Developer",
    "Electronics Researcher",
  ],
  profileBio:
    "I am a dedicated Electrical and Electronic (EEE) Engineer with hands-on experience in VLSI design, embedded systems, digital circuits, and automation projects. I design and implement hardware and software solutions, from transistor-level circuits to microcontroller-based systems. I thrive on solving complex engineering problems, optimizing designs for performance and efficiency, and collaborating in multidisciplinary teams to deliver practical and innovative solutions. My work focuses on bringing research and practical applications together, ensuring projects are reliable, efficient, and aligned with modern technological standards.",
  avatar: "/media/profile.jpg",
  resume: "/media/Bappy_CV.pdf",
  video: "/media/bg.mp4",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/md.bappi.397948/", icon: "fab fa-facebook" },
  { label: "Instagram", href: "https://www.instagram.com/cat_bipps/", icon: "fab fa-instagram" },
  { label: "WhatsApp", href: "https://wa.me/8801853265996/", icon: "fab fa-whatsapp" },
  { label: "X (Twitter)", href: "https://x.com/ar_bappy_/", icon: "fab fa-x-twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-asibur-rahman-13a38637a/", icon: "fab fa-linkedin" },
  { label: "GitHub", href: "https://github.com/ar-bappy-171/", icon: "fab fa-github" },
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
      "Cadence Virtuoso",
      "PSpice, Proteus, Quartus",
      "AutoCAD, FreeCAD",
      "Code::Blocks, MATLAB, Arduino",
      "PowerWorld Simulator (Student version)",
      "CST Studio, Siemens",
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
      "Electronics 1, Electronics 2",
      "Power System 1, Power System 2",
      "Digital Electronics, Digital Signal Processing",
      "Computer Architecture, Optoelectronics",
      "Biomedical Engineering",
    ],
  },
];

export const projects: CardItem[] = [
  {
    badge: "Vibration Meter using IC LM3915",
    bullets: [
      "Displays vibration strength on a 10-LED bar graph, lighting more LEDs as vibration increases.",
      "Uses a sensor to convert vibrations into voltage signals for display.",
    ],
  },
  {
    badge: "App Design Project using MATLAB",
    bullets: [
      "Created interactive GUIs with MATLAB App Designer.",
      "Combined visual components and MATLAB code for user-friendly applications.",
    ],
  },
  {
    badge: "Wireless RC Car Control with GPS Tracker",
    bullets: [
      "Remote control of an RC car via wireless signals.",
      "Tracks location in real-time using GPS for monitoring mobility.",
    ],
  },
  {
    badge: "Full Adder using MOSFET Combinations",
    bullets: [
      "Implemented a full adder using different MOSFET transistor configurations.",
      "Optimized power, delay, and area with various transistor-level logic styles.",
    ],
  },
  {
    badge: "Solar Energy-Based Inverter Design",
    bullets: [
      "Converts DC from solar panels to AC electricity for appliances or grid use.",
      "Ensures efficient and eco-friendly energy conversion.",
    ],
  },
  {
    badge: "10T SRAM Cell Implementation in Cadence",
    bullets: [
      "Designed and simulated a 10-transistor SRAM cell using Cadence based on research papers.",
      "Focused on improving memory stability and reducing power consumption.",
    ],
  },
  {
    badge: "Microcontroller-Controlled Adaptive DC Charger",
    bullets: [
      "Used a microcontroller to regulate DC output for battery charging.",
      "Adapted charging parameters for different battery types ensuring efficiency and safety.",
    ],
  },
  {
    badge: "Traffic Light Automation with Microcontroller",
    bullets: [
      "Implemented traffic light control using a microcontroller with timers and sensors.",
      "Sensors provide feedback to the microcontroller to manage traffic flow efficiently.",
      "Traffic lights give proper signals based on real-time traffic conditions.",
    ],
  },
  {
    badge: "Smart Image Enhancement & Wireless Transmission",
    bullets: [
      "Captured images from users and improved quality using noise reduction techniques.",
      "Transmitted images wirelessly for real-time analysis and display.",
      "Focused on research-driven enhancement to preserve details and reduce artifacts.",
    ],
  },
  {
    badge: "Surface Plasmon Resonance Numerical Analysis",
    bullets: [
      "Built code to generate essential SPR parameters using the Transfer Matrix Method (TMM).",
      "Implemented Kretschmann configuration rules for accurate simulation.",
      "Designed for precise and comprehensive analysis of plasmonic behavior.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Ahsanullah University of Science & Technology (AUST) — 2024",
    meta: "Bachelor of Science in Electrical & Electronic Engineering",
    bullets: [
      "Conference: Design and Performance Analysis of a Highly Sensitive SPR Biosensor for Water Pollution Detection.",
      "Journal: Design and Numerical Analysis of a Highly Sensitive SPR Biosensor for Detecting Contaminants in Water.",
      "CGPA: 3.20 out of 4.00",
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
    title: "Khandakar Md. Ishtiak",
    meta: "Assistant Professor · Department of EEE, AUST",
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
  address: "House 409/11A, SP Road, South Paikpara, Kallyanpur, Dhaka, Bangladesh",
  formAction: "https://formspree.io/f/mzzaqakn",
};
