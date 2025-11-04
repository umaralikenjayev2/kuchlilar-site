import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Section className="relative">
        <Container>
          <div className="text-center space-y-6">
            <div className="inline-flex rounded-full ring-1 ring-white/10 px-3 py-1 text-sm text-zinc-300">
              Har kuni +1% kuchliroq
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Intizom, odatlar va fokus — <span className="text-brand-500">bitta joyda</span>.
            </h1>
            <p className="mx-auto max-w-2xl text-zinc-300">
              100 kunlik challenge, Pomodoro, o‘qish odati va progress panellari. Sizni tortadigan, lekin charchatmaydigan ritm.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="https://app.kuchlilar.com">Boshlash → (Kirish)</Button>
              <Link className="underline underline-offset-4 text-zinc-300 hover:text-white" href="/kuchli-100">
                “Kuchli 100” nima?
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {t:"100 kunlik marafon",d:"Har kun sport/kitob/loyiha. Hisobot va badge’lar."},
              {t:"Fokus rejimi",d:"Pomodoro, deep-work rejimlari, chalg‘itmaslik."},
              {t:"Mutolaa o‘rmoni",d:"O‘qish odatini gamification bilan mustahkamlang."},
            ].map((i)=>(
              <div key={i.t} className="card p-6">
                <div className="text-lg font-semibold">{i.t}</div>
                <p className="mt-2 text-zinc-300">{i.d}</p>
                <Link href="/kuchli-100" className="mt-4 inline-block text-brand-500">Batafsil →</Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Bugun boshlaysizmi?</h2>
            <p className="mt-3 text-zinc-300">5 daqiqadan start. Profil oching, birinchi maqsadni belgilang.</p>
            <div className="mt-6">
              <Button href="https://app.kuchlilar.com">Kirish</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}