"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Calculator, Clock, ChevronDown, Star, MessageCircle, MapPin, CheckCircle2, Menu, X, Award } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// ============================================================
// CARLOS DIEGO — CONSULTOR DE CONSÓRCIO VW
// Landing page pessoal, mobile-first, tema vermelho
// ============================================================

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const whatsappNumber = "5583993983943";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Oi%20Carlos%2C%20quero%20saber%20mais%20sobre%20o%20cons%C3%B3rcio`;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 400px (já passou o botão do Hero)
      setShowStickyCta(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center justify-between px-5 h-14 md:h-16 max-w-6xl mx-auto">
          <span className="font-heading font-bold text-lg tracking-tight">
            Carlos<span className="text-primary">Diego</span>
          </span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 md:hidden" aria-label="Menu">
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">Clientes</a>
            <button onClick={() => scrollTo("contato")} className="px-5 py-2 bg-primary text-white font-bold rounded-full text-sm hover:brightness-110 transition-all">
              Falar no WhatsApp
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-20 px-8">
            <nav className="flex flex-col gap-1">
              {[{ href: "sobre", label: "Sobre" }, { href: "servicos", label: "Serviços" }, { href: "depoimentos", label: "Clientes" }, { href: "contato", label: "Contato" }].map((item, i) => (
                <motion.button key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} onClick={() => scrollTo(item.href)} className="text-left text-2xl font-heading font-bold py-4 border-b border-white/5 hover:text-primary transition-colors">
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} onClick={() => scrollTo("contato")} className="mt-8 w-full h-14 bg-primary text-white font-bold rounded-2xl text-lg">
              Falar no WhatsApp
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* ===== HERO — PERSONAL ===== */}
        <section className="relative pt-20 pb-10 md:pt-28 md:pb-20 px-5 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 blur-[100px] rounded-full -z-10" />

          <div className="max-w-6xl mx-auto">
            {/* Photo + Intro Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-end gap-6 md:gap-10 mb-8">
              {/* Photo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 shrink-0">
                <Image src="/carlos-diego.jpg" alt="Carlos Diego - Consultor" fill sizes="160px" className="object-cover" priority />
                {/* Online badge */}
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-background shadow-sm" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-3">
                  <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
                  Disponível agora
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
                  Carlos Diego
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                  Consultor Especialista em <span className="text-gradient-red font-bold">Consórcios</span> e Vendas com mais de +100.5 Milhões em Resultados.
                </p>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                Seu carro <span className="text-gradient-red">zero</span> sem juros,<br className="sm:hidden" /> com estratégia.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                Eu uso <strong className="text-foreground">lance embutido + matemática</strong> para acelerar sua contemplação. Sem depender de sorte, sem juros de banco.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="h-14 px-8 bg-primary text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all">
                <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
              </a>
              <button onClick={() => scrollTo("servicos")} className="h-14 px-8 bg-white/5 border border-white/10 text-foreground font-medium text-base rounded-2xl hover:bg-white/10 transition-colors">
                Ver como funciona
              </button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-4 md:gap-10 text-center flex-wrap">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">+1.000</p>
                <p className="text-xs text-muted-foreground">Clientes atendidos</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">+7 anos</p>
                <p className="text-xs text-muted-foreground">De experiência</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">100.5M+</p>
                <p className="text-xs text-muted-foreground">Em vendas (R$)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== SERVICES / BENEFITS ===== */}
        <section id="servicos" className="py-16 md:py-24 px-5 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Por que escolher o <span className="text-gradient-red">consórcio</span> comigo?</h2>
              <p className="text-sm text-muted-foreground max-w-lg">Atendimento pessoal, humanizado e focado em resultados reais para o cliente.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Calculator, title: "Estratégia de Lance", desc: "Calculo a porcentagem ideal para você ser contemplado rápido. Sem achismo.", accent: true },
                { icon: Shield, title: "Zero Juros", desc: "Consórcio não cobra juros. Apenas uma taxa de administração fixa e transparente." },
                { icon: Clock, title: "Lance Embutido", desc: "Use até 30% da própria carta como lance, sem precisar de dinheiro vivo." },
                { icon: Award, title: "Experiência Comprovada", desc: "Com mais de 7 anos e 100 milhões em vendas, conheço o mercado como ninguém." },
              ].map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-6 md:p-8 border transition-all group ${item.accent ? "bg-primary/[0.08] border-primary/30 shadow-lg shadow-primary/5" : "bg-white/[0.03] border-white/10 hover:border-white/20"}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.accent ? "bg-primary/20" : "bg-white/5"}`}>
                    <item.icon className={`w-6 h-6 ${item.accent ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="sobre" className="py-16 md:py-24 px-5 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                  Sobre mim
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Seu consultor, <span className="text-gradient-red">não um vendedor.</span></h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Meu nome é Carlos Diego e há mais de 7 anos ajudo clientes no Brasil e no exterior a conquistarem seu carro zero, imóveis e outros bens com planejamento.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Já ajudei mais de 1.000 clientes a investirem melhor o seu dinheiro, alcançando a marca de R$ 100.5 milhões em vendas. Minha missão é entregar o melhor negócio com estratégia matemática e muita transparência.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["+7 Anos de Experiência", "Especialista em Consórcios", "Brasil e Exterior", "+100.5M em Vendas"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-bold rounded-full text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/carlos-diego.jpg" alt="Carlos Diego" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="depoimentos" className="py-16 md:py-24 px-5 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">O que meus clientes <span className="text-gradient-red">dizem</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Lucas M.", car: "VW Polo", city: "Campina Grande", quote: "O Carlos calculou meu lance certinho. Em 4 meses eu tava com o carro na garagem. Atendimento nota 10." },
                { name: "Ana Paula", car: "VW Nivus", city: "João Pessoa", quote: "Ele me explicou tudo com calma, sem pressão. Hoje tenho meu Nivus zero e pago parcela que cabe no bolso." },
                { name: "Roberto S.", car: "Imóvel", city: "Patos - PB", quote: "Achei que consórcio era furada. O Carlos me mostrou os números e mudei de ideia. Já fui contemplado." },
              ].map((review, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex gap-1 mb-3">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">&ldquo;{review.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{review.name[0]}</div>
                    <div>
                      <p className="text-sm font-bold">{review.name}</p>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{review.car} · {review.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-16 md:py-24 px-5 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Dúvidas <span className="text-gradient-red">frequentes</span></h2>
            <div className="space-y-3">
              {[
                { q: "É realmente sem juros?", a: "Sim! No consórcio você paga apenas uma taxa de administração fixa, muito menor que os juros de um financiamento." },
                { q: "Em quanto tempo posso ser contemplado?", a: "Depende da estratégia. Com lance embutido bem calculado, muitos clientes meus são contemplados em 3 a 8 meses." },
                { q: "O que é lance embutido?", a: "Você usa até 30% do valor da própria carta de crédito como lance, sem precisar de dinheiro extra." },
                { q: "Posso usar para imóvel também?", a: "Sim! Temos grupos para veículos e imóveis. O processo é o mesmo." },
              ].map((item, i) => (
                <button key={i} onClick={() => setFaqOpen(faqOpen === i ? null : i)} className={`w-full text-left rounded-2xl p-5 border transition-all ${faqOpen === i ? "bg-primary/[0.05] border-primary/30" : "bg-white/[0.03] border-white/10"}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm md:text-base pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${faqOpen === i ? "rotate-180 text-primary" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-sm text-muted-foreground mt-3 leading-relaxed overflow-hidden">
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA / CONTACT ===== */}
        <section id="contato" className="py-16 md:py-24 px-5 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-primary/30 mx-auto mb-6 relative shadow-xl shadow-primary/10">
                <Image src="/carlos-diego.jpg" alt="Carlos Diego" fill sizes="80px" className="object-cover" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Vamos conversar?</h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                Me chama no WhatsApp. Sem compromisso. Eu faço uma simulação gratuita e te mostro o plano ideal.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-14 px-10 bg-primary text-white font-bold text-base rounded-2xl shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all">
                <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
              </a>
              <p className="text-xs text-muted-foreground/50 mt-4 flex items-center justify-center gap-1.5">
                <Shield className="w-3 h-3" /> Seus dados estão seguros. Sem spam.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="font-heading font-bold text-base mb-1">Carlos<span className="text-primary">Diego</span></p>
              <p className="text-xs text-muted-foreground">Especialista em Consórcios · Brasil e Exterior</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors"><Phone className="w-3 h-3" /> (83) 99398-3943</a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-6 pt-6 text-center">
            <p className="text-[10px] text-muted-foreground/40">© 2026 Carlos Diego. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* ===== MOBILE STICKY CTA ===== */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 w-full p-4 pb-7 bg-background/60 backdrop-blur-2xl border-t border-white/10 z-50"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-13 bg-primary text-white font-bold rounded-2xl text-base shadow-lg shadow-primary/25 active:scale-95 transition-all">
              <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}