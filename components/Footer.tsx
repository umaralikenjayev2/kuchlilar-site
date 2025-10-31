export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-500 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-white font-semibold">Kuchlilar</div>
          <div>Intizom. O‘sish. Kuch.</div>
        </div>

        <div className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Kuchlilar. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}