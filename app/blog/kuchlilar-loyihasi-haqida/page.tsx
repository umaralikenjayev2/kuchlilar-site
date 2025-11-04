// app/blog/kuchlilar-loyihasi-haqida/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kuchlilar loyihasi haqida — maqsad, qadriyat va reja",
  description:
    "Kuchlilar — intizom, sog‘lom odatlar va fokus orqali har kuni 1% o‘sish uchun tuzilgan ekotizim. Bu yerda loyihaning maqsadi, qadriyatlari va rejalari haqida bilasiz.",
  openGraph: {
    title: "Kuchlilar loyihasi haqida — maqsad, qadriyat va reja",
    description:
      "Kuchlilar — intizom, sog‘lom odatlar va fokus orqali har kuni 1% o‘sish uchun tuzilgan ekotizim.",
    url: "https://kuchlilar.com/blog/kuchlilar-loyihasi-haqida",
    type: "article",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuchlilar loyihasi haqida — maqsad, qadriyat va reja",
    description:
      "Intizom, odatlar, fokus va 1% growth falsafasi asosidagi platforma.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24 prose prose-invert prose-neutral">
      <p className="text-xs text-neutral-400 tracking-wide">Yangilandi: 2025-11-04 · ~6 daqiqa o‘qish</p>
      <h1 className="!mb-3">Kuchlilar loyihasi haqida</h1>
      <p className="lead !text-neutral-300">
        <strong>Kuchlilar</strong> — bu har kuni <em>+1% o‘sish</em> g‘oyasiga tayanadigan ekotizim: intizom, sog‘lom odatlar va fokus orqali
        katta natijaga kichik, ammo uzluksiz qadamlar bilan borish.
      </p>

      <hr className="my-8 border-neutral-800" />

      <h2>Maqsadimiz</h2>
      <p>
        Insonlarga o‘zini majburlamasdan, tizimlar yordamida barqaror rivojlanishda ko‘mak berish. “Motivatsiya ketadi,
        tizim qoladi” — biz aynan shunday tizimlarni quramiz.
      </p>
      <ul>
        <li><strong>Intizom:</strong> kundalik reja va javobgarlik.</li>
        <li><strong>Odatlar:</strong> kichik, oson boshlanadigan, o‘lchanadigan odatlar.</li>
        <li><strong>Fokus:</strong> chalg‘ituvchilarsiz chuqur ish (Deep Work).</li>
      </ul>

      <h2>Asosiy modullar</h2>
      <ol>
        <li>
          <strong>100 kunlik marafon</strong> — maqsad/odatlar bo‘yicha kundalik hisobot, progress va badge’lar.{" "}
          <Link href="/kuchli-100" className="text-brand-500 hover:underline">Batafsil →</Link>
        </li>
        <li>
          <strong>Fokus rejimi (Pomodoro)</strong> — chalg‘imasdan ishlash uchun taymer, sesiyalar statistikasi va
          streaklar.
        </li>
        <li>
          <strong>Mutolaa o‘rmoni</strong> — o‘qish odatini gamifikatsiya orqali mustahkamlash (o‘qigan betlar daraxt
          bo‘lib o‘sadi).
        </li>
      </ol>

      <blockquote>
        Har kuni 1% yaxshilanish — bir yilda 37x natija. Katta sakrash emas, to‘xtamaslik muhim.
      </blockquote>

      <h2>Nega bu ishlaydi?</h2>
      <ul>
        <li><strong>Mikro-qadamlar:</strong> boshlash oson, davom ettirish esa tabiiy.</li>
        <li><strong>O‘lchanish:</strong> ko‘rinarli metrikalar motivatsiyani ichkaridan qo‘zg‘aydi.</li>
        <li><strong>Jamoa:</strong> birga progress qilish — ijobiy bosim va qo‘llab-quvvatlash beradi.</li>
      </ul>

      <h2>Yo‘l xaritasi (Roadmap)</h2>
      <ul>
        <li><strong>V1:</strong> 100-kun, Fokus, Mutolaa (beta), profil va badge’lar.</li>
        <li><strong>V2:</strong> Haftalik sharhlar, maqsad trekeri, ko‘rsatkichlar paneli.</li>
        <li><strong>V3:</strong> “Kuchlilar AI” — shaxsiy reja, tavsiyalar va analitika.</li>
      </ul>

      <h2>Qanday qo‘shilasiz?</h2>
      <p>
        Platformaning ichki dashboard/web ilovasiga <a className="text-brand-500 hover:underline" href="https://app.kuchlilar.com" target="_blank">app.kuchlilar.com</a> orqali kiring.
        Avval qisqa onboarding, so‘ng o‘zingizga mos challenge tanlaysiz.
      </p>

      <div className="not-prose mt-10 grid gap-3 md:flex">
        <Link
          href="/kuchli-100"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-brand-600 hover:bg-brand-500 text-white"
        >
          “Kuchli 100”ni boshlash →
        </Link>
        <a
          href="https://app.kuchlilar.com"
          target="_blank"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-neutral-700 hover:border-brand-600"
        >
          Dashboardga o‘tish →
        </a>
      </div>

      <hr className="my-10 border-neutral-800" />

      <p className="text-sm text-neutral-400">
        Muallif: <strong>Kuchlilar jamoasi</strong>. Fikr va takliflaringizni yozing:
        {" "}
        <a className="hover:underline" href="mailto:hello@kuchlilar.com">hello@kuchlilar.com</a>
      </p>
    </article>
  );
}