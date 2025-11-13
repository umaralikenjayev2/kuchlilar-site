// app/blog/posts.ts

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;        // yyyy-mm-dd
  updatedAt?: string;  // ixtiyoriy: yangilangan sana
  published: boolean;  // sitemap & blogda chiqarilsinmi
};

export const posts: BlogPost[] = [
  {
    slug: "first-post",
    title: "Kuchlilar blogining birinchi posti",
    description: "Nega Kuchlilar platformasini yaratdik va undan qanday foyda olasiz.",
    date: "2025-10-01",
    updatedAt: "2025-10-05",
    published: true,
  },
  {
    slug: "kuchlilar-loyihasi-haqida",
    title: "Kuchlilar loyihasi haqida batafsil",
    description:
      "Kuchlilar — intizom, odatlar va maqsadlar orqali har kuni 1% o‘sishga yordam beradigan platforma.",
    date: "2025-11-01",
    published: true,
  },
  // keyin yana qo‘shib borasan:
  // {
  //   slug: "yangi-post-slug",
  //   title: "...",
  //   description: "...",
  //   date: "2025-11-15",
  //   published: true,
  // },
];