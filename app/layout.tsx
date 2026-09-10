import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sakiyesi.netlify.app";
const title = "Sàkíyèsí — A Mindful Colouring Experience";
const description =
  "Discover Sàkíyèsí, a mindful colouring experience by Dr. Adérónkẹ́ Lawal, and get details about the book launch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sàkíyèsí",
  },
  description,
  keywords: [
    "Sàkíyèsí",
    "mindful colouring book",
    "Dr. Adérónkẹ́ Lawal",
    "book launch",
    "mindfulness colouring",
    "Nigerian author",
  ],
  authors: [{ name: "Dr. Adérónkẹ́ Lawal" }],
  icons: {
    icon: "/logo-white-bg.png",
    shortcut: "/logo-white-bg.png",
    apple: "/logo-white-bg.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sàkíyèsí",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sàkíyèsí book mockup — A Mindful Colouring Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
