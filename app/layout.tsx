import type { Metadata, Viewport } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Kuchlilar — Har kuni +1%",
  description: "Intizom, sog‘lom odatlar, fokus va maqsadlar platformasi.",
  openGraph: {
    title: "Kuchlilar",
    description: "Har kuni +1% kuchliroq.",
    url: "https://kuchlilar.com",
    type: "website",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  themeColor: "#111827",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          {/* @ts-expect-error Server Component children */}
          {children}
          {/* Footer */}
        </div>
      </body>
    </html>
  );
}