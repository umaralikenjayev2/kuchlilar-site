// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kuchlilar — 1% o‘sish har kuni",
  description: "Intizom, sog‘lom turmush va o‘sish uchun platforma.",
  openGraph: {
    title: "Kuchlilar",
    description: "Har kuni 1% kuchliroq",
    url: "https://kuchlilar.com",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Ixtiyoriy: kerak bo‘lsa Viewport (bu ham 'next' dan)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}