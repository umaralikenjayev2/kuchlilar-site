// content/posts.ts
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format: YYYY-MM-DD
  cover?: string; // public ichidagi rasm nisbiy yo'li (ixtiyoriy)
  keywords?: string[];
};

export const SITE_URL = "https://kuchlilar.com";

export const posts: Post[] = [
  {
    slug: "first-post",
    title:
      "Nega 100 kunlik challenge hayotingizni sindirmaydi, balki tuzatadi",
    description:
      "Motivatsiya o‘tib ketadi. Sistemalar qoladi. O‘zingizni majburlamasdan barqaror bo‘lish yo‘li.",
    date: "2025-10-29",
    cover: "/og-image.png",
    keywords: [
      "100 kunlik challenge",
      "intizom",
      "odatlar",
      "motivatsiya",
      "Kuchlilar blog",
    ],
    
  },
  {
  slug: "kuchlilar-loyihasi-haqida",
  title: "Kuchlilar loyihasi haqida — maqsad, qadriyat va reja",
  description: "Kuchlilar ekotizimi: 1% growth, odatlar, fokus va roadmap.",
  date: "2025-11-04",
  cover: "/og-image.png",
  keywords: ["Kuchlilar", "odatlar", "intizom", "1% growth", "roadmap"],
},
  // keyin yangi postlarni shu ro'yxatga qo'shasiz
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}