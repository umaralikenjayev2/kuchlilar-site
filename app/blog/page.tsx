import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
        Blog
      </h1>
      <p className="section-text mt-4">
        Intizom, fokus, odatlar va o‘sish bo‘yicha maqolalar.
      </p>

      <div className="mt-10 space-y-8">
        <ArticlePreview
          href="/blog/first-post"
          title="Nega 100 kunlik challenge hayotingizni sindirmaydi, balki tuzatadi"
          desc="Motivatsiya o‘tib ketadi. Sistemalar qoladi. Mana qanday qilib o‘zingni majburlamasdan barqaror bo‘lish mumkin."
          date="2025-10-29"
        />
      </div>
    </div>
  );
}

function ArticlePreview(props: {
  href: string;
  title: string;
  desc: string;
  date: string;
}) {
  return (
    <Link
      href={props.href}
      className="block rounded-xl border border-neutral-800 bg-neutral-900/20 p-5 hover:bg-neutral-900/40 hover:border-brand-500/40 transition-colors"
    >
      <div className="text-xs text-neutral-500">{props.date}</div>
      <div className="text-white font-semibold text-lg mt-1">
        {props.title}
      </div>
      <div className="text-neutral-400 text-sm mt-2">
        {props.desc}
      </div>
      <div className="text-brand-500 text-sm mt-4 inline-block">
        O‘qish →
      </div>
    </Link>
  );
}