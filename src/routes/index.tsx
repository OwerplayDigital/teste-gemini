import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Instagram, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const flavors = [
  { name: "Açaí Tradicional", description: "Cremoso, gelado e na medida certa.", price: "R$ 15,90" },
  { name: "Açaí Especial", description: "Açaí + leite em pó + banana + morango.", price: "R$ 19,90" },
  { name: "Açaí do Lelei", description: "Nossa combinação especial, feita para viciar.", price: "R$ 24,90", featured: true },
];

const toppings = ["Leite em pó", "Banana", "Morango", "Granola", "Paçoca", "Nutella"];

function Index() {
  const whatsapp = "https://wa.me/5500000000000?text=Oi%20Açaí%20Do%20Lelei!%20Quero%20fazer%20um%20pedido.";

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#211529]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#211529]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="font-black tracking-tight text-xl sm:text-2xl">
            Açaí <span className="text-[#c9f04a]">Do Lelei</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#cardapio" className="transition hover:text-[#c9f04a]">Cardápio</a>
            <a href="#combina" className="transition hover:text-[#c9f04a]">Monte o seu</a>
            <a href="#sobre" className="transition hover:text-[#c9f04a]">Sobre nós</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c9f04a] px-4 py-2.5 text-sm font-extrabold text-[#211529] transition hover:scale-105">
            <MessageCircle size={17} /> Pedir agora
          </a>
        </div>
      </nav>

      <section id="inicio" className="relative flex min-h-[760px] items-center bg-[#211529] pt-20 text-white">
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#7b2cff]/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#c9f04a]/15 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.05fr_.95fr] md:items-center md:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[#d9d0df]">
              <Sparkles size={16} className="text-[#c9f04a]" /> O açaí que virou paixão
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-7xl lg:text-8xl">
              Seu momento <span className="text-[#c9f04a]">merece</span> um açaí de verdade.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d9d0df] sm:text-xl">
              Açaí cremoso, ingredientes caprichados e combinações que fazem você querer repetir. Do seu jeito, do jeitinho do Lelei.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9f04a] px-7 py-4 font-black text-[#211529] shadow-[0_12px_40px_rgba(201,240,74,.18)] transition hover:-translate-y-1">
                Fazer meu pedido <ArrowRight size={19} />
              </a>
              <a href="#cardapio" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10">Ver cardápio</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#c9c0ca]">
              <span className="flex items-center gap-2"><Check size={17} className="text-[#c9f04a]" /> Feito na hora</span>
              <span className="flex items-center gap-2"><Check size={17} className="text-[#c9f04a]" /> Ingredientes frescos</span>
              <span className="flex items-center gap-2"><Check size={17} className="text-[#c9f04a]" /> Entrega rápida</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute inset-8 rounded-full bg-[#c9f04a]/20 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[42%_58%_55%_45%/45%_45%_55%_55%] border border-white/10 bg-gradient-to-br from-[#7b2cff] via-[#5720b5] to-[#2b0f5b] shadow-2xl">
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#c9f04a] opacity-90 blur-[2px]" />
              <div className="absolute bottom-10 right-3 h-44 w-44 rounded-full bg-[#ff477e] opacity-70 blur-[2px]" />
              <div className="absolute inset-12 rounded-[45%] border border-white/15 bg-[#24102f]/40 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div>
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c9f04a] text-4xl shadow-xl">A</div>
                  <p className="text-4xl font-black leading-none sm:text-5xl">Açaí<br /><span className="text-[#c9f04a]">Do Lelei</span></p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[.28em] text-white/60">Sabor que conquista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#211529]/10 bg-white px-5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div><strong className="block text-2xl font-black">100%</strong><span className="text-sm text-black/55">Sabor e qualidade</span></div>
          <div><strong className="block text-2xl font-black">+6</strong><span className="text-sm text-black/55">Toppings deliciosos</span></div>
          <div><strong className="block text-2xl font-black">5★</strong><span className="text-sm text-black/55">Experiência</span></div>
          <div><strong className="block text-2xl font-black">Gelado</strong><span className="text-sm text-black/55">Do jeito certo</span></div>
        </div>
      </section>

      <section id="cardapio" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-[#7b2cff]">Escolha seu favorito</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Cardápio do Lelei</h2>
          </div>
          <p className="max-w-md text-[#211529]/60">Comece por uma das nossas combinações ou monte a sua do zero. A única regra é se deliciar.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {flavors.map((flavor) => (
            <article key={flavor.name} className={`relative rounded-[28px] border p-7 transition hover:-translate-y-1 hover:shadow-xl ${flavor.featured ? "border-[#7b2cff] bg-[#211529] text-white" : "border-[#211529]/10 bg-white"}`}>
              {flavor.featured && <span className="absolute right-5 top-5 rounded-full bg-[#c9f04a] px-3 py-1 text-xs font-black text-[#211529]">QUERIDINHO</span>}
              <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black ${flavor.featured ? "bg-[#7b2cff]" : "bg-[#f0e8fa] text-[#7b2cff]"}`}>A</div>
              <h3 className="text-2xl font-black">{flavor.name}</h3>
              <p className={`mt-2 min-h-12 text-sm leading-relaxed ${flavor.featured ? "text-white/60" : "text-black/55"}`}>{flavor.description}</p>
              <div className="mt-7 flex items-center justify-between">
                <strong className="text-2xl font-black">{flavor.price}</strong>
                <a href={whatsapp} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 text-sm font-extrabold ${flavor.featured ? "bg-[#c9f04a] text-[#211529]" : "bg-[#211529] text-white"}`}>Pedir</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="combina" className="bg-[#e9dff5] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-[#7b2cff]">Do seu jeito</p>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">Monte o açaí que tem a sua cara.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#211529]/65">Escolha o tamanho, adicione seus toppings favoritos e crie uma combinação só sua.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {toppings.map((topping) => <span key={topping} className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">+ {topping}</span>)}
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#211529] px-7 py-4 font-black text-white transition hover:-translate-y-1">Montar meu açaí <ArrowRight size={18} /></a>
          </div>
          <div className="rounded-[36px] bg-[#211529] p-7 text-white shadow-2xl sm:p-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-6"><span className="font-black">Seu pedido</span><span className="rounded-full bg-[#c9f04a] px-3 py-1 text-xs font-black text-[#211529]">PERSONALIZADO</span></div>
            <div className="space-y-4 py-7 text-sm"><div className="flex justify-between"><span className="text-white/60">Açaí 500ml</span><strong>R$ 18,90</strong></div>{["Leite em pó", "Morango", "Paçoca"].map(x => <div key={x} className="flex justify-between"><span className="text-white/60">+ {x}</span><strong>Incluído</strong></div>)}</div>
            <div className="flex items-end justify-between border-t border-white/10 pt-6"><div><span className="text-xs uppercase text-white/45">Total</span><strong className="mt-1 block text-3xl font-black">R$ 18,90</strong></div><span className="text-sm text-[#c9f04a]">Uma delícia.</span></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div className="rounded-[36px] bg-[#7b2cff] p-8 text-white sm:p-12"><Star className="mb-8 fill-[#c9f04a] text-[#c9f04a]" size={34} /><p className="text-3xl font-black leading-tight">“Mais que um açaí. É aquele momento gostoso que você estava esperando.”</p><p className="mt-6 text-sm font-semibold text-white/60">— Açaí Do Lelei</p></div>
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-[#7b2cff]">Feito com carinho</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">A gente acredita que o simples pode ser inesquecível.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#211529]/60">Por isso, cada copo do Açaí Do Lelei é preparado com cuidado, ingredientes caprichados e aquela vontade de entregar uma experiência que dá gosto de repetir.</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold"><span className="flex items-center gap-2"><Clock3 size={18} className="text-[#7b2cff]" /> Atendimento rápido</span><span className="flex items-center gap-2"><MapPin size={18} className="text-[#7b2cff]" /> Na sua região</span></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#211529] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><p className="text-xl font-black">Açaí <span className="text-[#c9f04a]">Do Lelei</span></p><p className="mt-1 text-sm text-white/45">Sabor que conquista.</p></div>
          <div className="flex items-center gap-4"><a href="#inicio" className="text-sm text-white/55 hover:text-white">Voltar ao topo</a><a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"><Instagram size={18} /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9f04a] text-[#211529]"><MessageCircle size={18} /></a></div>
        </div>
      </footer>
    </main>
  );
}
