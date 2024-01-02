import type { Metadata } from "next";
import "./globals.css";
import { Viewport } from "next";
import Provider from "./provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Bruno Postai",
    default: "Bruno Postai",
    absolute: "Bruno Postai - Front-end Dev",
  },
  description:
    "Portfolio where I show my skills, knowledge and experience from previous works",
  category: "Portfolio",
  openGraph: {
    type: "website",
    title: "Bruno Postai - Front-end Dev",
    emails: "cechinelbruno@gmail.com",
    description: "My stack experience museum",
    countryName: "Italy",
    siteName: "Bruno Postai - Front-end Dev",
    phoneNumbers: "+393452265961",
    locale: "EN",
    images: "./images/me.webp",
  },
  authors: [{ name: "Bruno Postai" }],
  keywords: [
    "Portfolio",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Fullstack",
    "Fullstack  Developer",
    "Developer",
    "Desenvolvedor",
    "Programador",
    "Front-end",
    "Back-end",
    "Full Stack",
    "React",
  ],
  applicationName: "Bruno Postai - Front-end Dev",
  creator: "Bruno Postai",
  publisher: "Vercel",
  manifest: "/manifest.json",
  icons: {apple: "/icon.png",},
  appleWebApp: {
    title: "Bruno Postai - Front-end Dev",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3A86DF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
