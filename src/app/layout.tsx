import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
