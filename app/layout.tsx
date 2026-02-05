// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <main className="flex-1">{children}</main>

        {/* Optional: Footer */}
        <footer className="text-center py-6 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Taher Ahmedou. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
