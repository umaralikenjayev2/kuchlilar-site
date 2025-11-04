import Link from "next/link";

const posts = [
  {
    slug: "first-post",
    title: "Nega 100 kunlik challenge sindirmaydi, balki tuzatadi",
    desc: "Motivatsiya o‘tadi, sistema qoladi. Qanday qilib barqarorlikni quramiz?",
    date: "2025-10-29",
  },
];

export default function BlogIndex() {
  return (
    <div className="container-grid py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
      <p className="mt-3 text-zinc-300">Intizom, fokus, odatlar va o‘sish.</p>

      <div className="mt-10 space-y-6">
        {posts.map(p=>(
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 block hover:ring-brand-500/30 transition">
            <div className="text-xs text-zinc-400">{p.date}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-zinc-300">{p.desc}</div>
            <div className="mt-4 text-brand-500">O‘qish →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}