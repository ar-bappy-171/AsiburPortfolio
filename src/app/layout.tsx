import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Asibur Rahman Bappy — EEE Engineer",
  description:
    "Electrical & Electronic Engineer specializing in VLSI design, embedded systems, and digital circuits. View projects, experience, and contact.",
  keywords: [
    "Asibur Rahman Bappy",
    "EEE Engineer",
    "VLSI",
    "Embedded Systems",
    "Cadence Virtuoso",
    "AUST",
    "Bangladesh",
  ],
  authors: [{ name: "Asibur Rahman Bappy" }],
  openGraph: {
    title: "Asibur Rahman Bappy — EEE Engineer",
    description:
      "Electrical & Electronic Engineer specializing in VLSI design, embedded systems, and digital circuits.",
    type: "website",
    images: ["/media/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asibur Rahman Bappy — EEE Engineer",
    description:
      "Electrical & Electronic Engineer specializing in VLSI design, embedded systems, and digital circuits.",
  },
};

// Inline script — runs synchronously before paint to set the theme from
// localStorage/system. Prevents the flash-of-wrong-theme on first render.
// Plain <script> tag (not next/script) so it executes inline.
const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t;if(s==='light'||s==='dark'){t=s;}else if(window.matchMedia('(prefers-color-scheme: light)').matches){t='light';}else{t='dark';}document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',t==='dark'?'#070a12':'#f1f5fa');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#070a12" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
