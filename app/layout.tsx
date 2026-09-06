import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sàkíyèsí — A Mindful Colouring Experience",
  description:
    "Discover Sàkíyèsí, a mindful colouring experience by Dr. Adérónkẹ́ Lawal, and get details about the book launch.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
