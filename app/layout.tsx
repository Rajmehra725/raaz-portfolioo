// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// Google Fonts (Professional)
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raj Mehra | Full-Stack Developer Portfolio",
  description:
    "I am Raj Mehra, a MERN Full-Stack Developer & Software Engineer. I build modern websites, apps and UI experiences.",
  keywords: [
    "Raj Mehra",
    "Portfolio",
    "Full Stack Developer",
    "MERN Developer",
    "Web Developer",
  ],
  openGraph: {
    title: "Raj Mehra | Full Stack Developer",
    description: "Modern portfolio website with animations & Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Smooth Scroll */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>

      <body
        className={`${poppins.className} bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen`}
      >
        {/* Floating Background Glow Balls */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full animate-ping"></div>
        </div>

        {/* Navbar (Client Component call allowed) */}
        <header className="w-full backdrop-blur-xl bg-white/10 shadow-xl sticky top-0 z-50 border-b border-white/10">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-semibold tracking-wide">
              Raj<span className="text-blue-400">Mehra</span>
            </h1>

            <ul className="flex gap-6 font-medium text-lg">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4">{children}</main>

        {/* Animated Footer */}
        <footer className="mt-20 py-10 text-center text-white/70 text-sm">
          <p className="animate-pulse">
            © {new Date().getFullYear()} Raj Mehra — All Rights Reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
