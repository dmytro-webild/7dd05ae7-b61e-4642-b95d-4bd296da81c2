import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Le Bernardin | Legendary Seafood Fine Dining NYC',
  description: 'Experience Michelin-starred culinary excellence at Le Bernardin, New York\'s premier seafood restaurant. Reserve your table for an unforgettable dining journey.',
  keywords: ["Le Bernardin, fine dining, seafood restaurant, Michelin star, New York, NYC, Eric Ripert, luxury dining, reservations, tasting menu, private events"],
  openGraph: {
    "title": "Le Bernardin | Legendary Seafood Fine Dining NYC",
    "description": "Experience Michelin-starred culinary excellence at Le Bernardin, New York's premier seafood restaurant.",
    "url": "https://www.le-bernardin.com",
    "siteName": "Le Bernardin",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-japanese-fried-gedza-dumplings-sauce-with-greens-plate_141793-11303.jpg",
        "alt": "Exquisite plated seafood dish at Le Bernardin"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Le Bernardin | Legendary Seafood Fine Dining NYC",
    "description": "Experience Michelin-starred culinary excellence at Le Bernardin, New York's premier seafood restaurant.",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-japanese-fried-gedza-dumplings-sauce-with-greens-plate_141793-11303.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
