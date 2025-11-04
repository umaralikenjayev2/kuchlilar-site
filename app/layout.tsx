// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kuchlilar — Intizom, odatlar, +1% o‘sish",
  description:
    "Kuchlilar: intizom, odatlar, fokus va +1% o‘sish uchun jamiyat. Challenge’lar, maqolalar, va foydali vositalar.",
  metadataBase: new URL("https://kuchlilar.com"),
  openGraph: {
    title: "Kuchlilar — Intizom, odatlar, +1% o‘sish",
    description:
      "Kuchlilar: intizom, odatlar, fokus va +1% o‘sish uchun jamiyat.",
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
      <body className="bg-neutral-950 text-neutral-200 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}