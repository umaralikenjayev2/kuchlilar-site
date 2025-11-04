import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function K100Page() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold">“Kuchli 100” — intizom marafoni</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl">
            100 kun davomida: sport, o‘qish, loyiha va sog‘lom odatlar. Progress paneli, badge’lar va jamiyat yordami.
          </p>
          <div className="mt-6"><Button href="https://app.kuchlilar.com">Boshlash</Button></div>
        </Container>
      </Section>
      <Section>
        <Container>
          <ol className="grid md:grid-cols-4 gap-6">
            {["Ro‘yxatdan o‘ting","3 odat tanlang","Har kuni 20–40 daqiqa","Haftalik hisobot"].map((s,i)=>(
              <li key={i} className="card p-6">
                <div className="text-sm text-zinc-400">Qadam {i+1}</div>
                <div className="mt-2 font-semibold">{s}</div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      {/* FAQ/Testimonials bloklarini ham qo‘shamiz */}
    </>
  );
}