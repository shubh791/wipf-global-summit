import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://wipforum.com"),
  title: {
    default: "World Intellectual Property Forum | AIPx Bangkok 2026 & Indo Global Bengaluru 2027",
    template: "%s | World Intellectual Property Forum",
  },
  description:
    "Official Global Intellectual Property Summits — AIPx Global Summit 2026 (Bangkok) & Indo Global IPR Summit 2027 (Bengaluru) presented by World Intellectual Property Forum (WIPF).",
  keywords: [
    "World Intellectual Property Forum",
    "WIPF",
    "AIPx Bangkok 2026",
    "Indo Global IPR Summit 2027",
    "Intellectual Property",
    "Patents",
    "Trademarks",
    "Bangkok Summit",
    "Bengaluru Summit",
  ],
  authors: [{ name: "World Intellectual Property Forum" }],
  openGraph: {
    title: "World Intellectual Property Forum | AIPx Bangkok 2026 & Indo Global Bengaluru 2027",
    description:
      "Official Global Intellectual Property Summits — AIPx Global Summit 2026 (Bangkok) & Indo Global IPR Summit 2027 (Bengaluru) presented by World Intellectual Property Forum (WIPF).",
    url: "https://wipforum.com",
    siteName: "World Intellectual Property Forum",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "World Intellectual Property Forum — Bangkok 2026 & Bengaluru 2027",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Intellectual Property Forum | AIPx Bangkok 2026 & Indo Global Bengaluru 2027",
    description:
      "Official Global Intellectual Property Summits — AIPx Global Summit 2026 (Bangkok) & Indo Global IPR Summit 2027 (Bengaluru).",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#02040a] text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#02040a] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
