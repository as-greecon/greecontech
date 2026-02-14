import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greecon Platform",
  description: "Unified SCADA and IoT operations for energy, water, and agriculture."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
