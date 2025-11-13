export type Post = {
  slug: string;
  title: string;
  updatedAt?: string; // ISO
};

export const posts: Post[] = [
  { slug: "first-post", title: "Nega 100 kunlik challenge...", updatedAt: "2025-10-29" },
  { slug: "kuchlilar-loyihasi-haqida", title: "Kuchlilar loyihasi haqida", updatedAt: "2025-11-04" },
];