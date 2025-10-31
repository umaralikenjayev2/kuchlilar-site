import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      {/* HERO */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Kuchlilar platformasiga xush kelibsiz 🚀
        </h1>
        <p className="section-text mt-4">
          Intizom, sog‘lom odatlar, fokus va maqsadlarni ushlab turish uchun
          bitta joy. Har kuni +1% o‘sish.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <CTAButton />
          <Link
            href="/kuchli-100"
            className="text-neutral-400 text-sm hover:text-white"
          >
            “Kuchli 100” nima?
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24 grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="100 kunlik marafon"
          desc="Har kuni sport, kitob, sog‘lom odat va loyiha. O‘zingni nazorat qil."
          href="/kuchli-100"
        />
        <FeatureCard
          title="Fokus rejimi"
          desc="Pomodoro taymer va chalg‘imasdan ishlash rejimi. Maqsadga ishlash uchun."
          href="https://app.kuchlilar.com/pomodoro"
          external
        />
        <FeatureCard
          title="Mutolaa o‘rmoni"
          desc="Har kuni o‘qigan betlaring daraxt kabi o‘sadi. O‘qish odatini gamification orqali mustahkamla."
          href="https://app.kuchlilar.com/forest"
          external
        />
      </section>

      {/* BLOG CTA */}
      <section className="mt-24 rounded-2xl border border-neutral-800 bg-neutral-900/20 p-8 text-center">
        <h2 className="section-headline">Blog</h2>
        <p className="section-text mt-2">
          Intizom, odatlar va produktivlik bo‘yicha qo‘llanmalar, tajribalar,
          va real hayotdan darslar.
        </p>
        <Link
          href="/blog"
          className="btn-outline mt-6 inline-block rounded-xl"
        >
          Maqolalarni o‘qish →
        </Link>
      </section>
    </div>
  );
}

function FeatureCard(props: {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={props.href}
      {...(props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900/20 p-6 hover:border-brand-500/40 hover:bg-neutral-900/40 transition-colors"
    >
      <div className="text-white font-semibold text-lg">{props.title}</div>
      <div className="text-neutral-400 text-sm mt-2">{props.desc}</div>
      <div className="text-brand-500 text-sm mt-4 inline-block">
        Batafsil →
      </div>
    </a>
  );
}