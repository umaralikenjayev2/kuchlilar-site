import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function Kuchli100Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
        “Kuchli 100 Kun” Challengi 💪
      </h1>

      <p className="section-text mt-4">
        Maqsad: har kuni atigi 4 ta narsani bajarish.
      </p>

      <ul className="mt-6 space-y-4 text-neutral-300 text-base leading-relaxed">
        <li>✅ Sport / tanani harakatga keltirish (30+ daqiqa)</li>
        <li>📚 Kitob / bilim (10+ bet)</li>
        <li>🥗 Sog‘lom odat (suv, uxlash, zararli ovqat yemaymiz va hokazo)</li>
        <li>🚀 Loyiha / fokusli ish (haqiqiy orzuga ishlash)</li>
      </ul>

      <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/20 p-5 text-sm text-neutral-400">
        Har kuning belgilanadi. Streak yo‘qotmaslik — bosh maqsad.
        Intizom — hammasidan ustun.
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <CTAButton />
        <Link
          href="https://app.kuchlilar.com/today"
          className="btn-outline text-center"
        >
          Men allaqachon ichidaman →
        </Link>
      </div>
    </div>
  );
}