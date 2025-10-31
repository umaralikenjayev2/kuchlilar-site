// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css"; // agar styles/globals.css bo'lmasa: "./globals.css" deb yoz

export const metadata: Metadata = {
  title: "Kuchlilar ⚡ Intizom, rivojlanish, kuchli hayot",
  description:
    "Kuchlilar – odatlar, maqsadlar va kunlik intizom orqali o'zingni kuchli versiyangga aylantirish tizimi.",
  openGraph: {
    title: "Kuchlilar platformasi",
    description:
      "100 kunlik challenge, kunlik nazorat, fokus, mutolaa va shaxsiy o‘sish jamlanmasi.",
    url: "https://kuchlilar.com",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="bg-neutral-950 text-neutral-50 flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-800 bg-neutral-950/80 text-neutral-500 text-xs text-center py-6">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-white font-semibold text-sm mb-2">
              Kuchlilar
            </div>
            <div>Intizom. O‘sish. Kuch. © {new Date().getFullYear()}</div>
          </div>
        </footer>
      </body>
    </html>
  );
}