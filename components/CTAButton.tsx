import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="https://app.kuchlilar.com"
      className="btn-primary text-base px-5 py-3 rounded-xl"
    >
      Boshlash → (Kirish)
    </Link>
  );
}