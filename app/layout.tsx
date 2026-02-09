// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Taher Ahmedou Portfolio",
  description: "Backend & Full-Stack Developer | Cyber Security | Next.js Portfolio",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
  openGraph: {
    title: "Taher Ahmedou Portfolio",
    description: "Backend & Full-Stack Developer | Cyber Security | Next.js Portfolio",
    url: "https://yourdomain.com",
    siteName: "Taher Ahmedou Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taher Ahmedou Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taher Ahmedou Portfolio",
    description: "Backend & Full-Stack Developer | Cyber Security | Next.js Portfolio",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-black text-white dark:bg-gray-900 dark:text-gray-100"
    >
      <body
        className={`${inter.className} font-sans min-h-screen flex flex-col`}
      >
        {/* Main content */}
        <main role="main" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/50 border-t border-gray-800 text-gray-400 text-sm py-6 flex flex-col md:flex-row justify-between items-center px-6 gap-4">
          <span>&copy; {new Date().getFullYear()} Taher Ahmedou. All rights reserved.</span>
          <div className="flex gap-4">
            <a
              href="https://github.com/TAher-Ahmedou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/taher-ahmedou-39ba642bb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
