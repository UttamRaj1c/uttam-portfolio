import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTTAM | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in PHP, Laravel, WordPress, APIs and scalable web applications.",

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}