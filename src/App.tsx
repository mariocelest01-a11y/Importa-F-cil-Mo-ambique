/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BadgeCheck,
  CircleCheck,
  Search,
  Compass,
  ShieldCheck,
  CreditCard,
  Truck,
  CircleAlert,
  Store,
  ShoppingCart,
  Wallet,
  Send,
  PackageCheck,
  BookOpenCheck,
  Calculator,
  Package,
  Building2,
  ShoppingBasket,
  ShoppingBag,
  ChevronDown,
  ArrowRight,
  Layers,
  Globe,
  Clock3,
  KeyRound,
  TrendingUp,
  X,
  Check,
  Phone,
  Copy,
  Sparkles,
  HelpCircle,
  Lock,
  PlayCircle,
  FileSpreadsheet,
  Award
} from 'lucide-react';
import {
  SheinLogo,
  TemuLogo,
  AliexpressLogo,
  AmazonLogo,
  AlibabaLogo,
  PlatformBrandBadge,
  MPesaLogo,
  EMolaLogo
} from './components/PlatformLogos';

const heroBullets = [
  'Aprenda a comprar em diferentes plataformas internacionais.',
  'Conheça o processo de pagamento, transporte e entrega.',
  'Descubra como calcular os custos antes de fazer uma encomenda.',
];

const painPoints = [
  { icon: Search, text: 'Encontra produtos interessantes na internet, mas não sabe como comprá-los.', bg: 'bg-blue-500/10', textCol: 'text-blue-500', ring: 'ring-blue-500/25' },
  { icon: Compass, text: 'Tem dúvidas sobre quais plataformas utilizar.', bg: 'bg-purple-500/10', textCol: 'text-purple-500', ring: 'ring-purple-500/25' },
  { icon: ShieldCheck, text: 'Não sabe como avaliar fornecedores e vendedores.', bg: 'bg-emerald-500/10', textCol: 'text-emerald-500', ring: 'ring-emerald-500/25' },
  { icon: CreditCard, text: 'Enfrenta dificuldades com pagamentos internacionais.', bg: 'bg-amber-500/10', textCol: 'text-amber-500', ring: 'ring-amber-500/25' },
  { icon: Truck, text: 'Não compreende os custos de transporte e outras despesas.', bg: 'bg-cyan-500/10', textCol: 'text-cyan-500', ring: 'ring-cyan-500/25' },
  { icon: CircleAlert, text: 'Tem receio de perder dinheiro por falta de informação.', bg: 'bg-rose-500/10', textCol: 'text-rose-500', ring: 'ring-rose-500/25' },
  { icon: Store, text: 'Gostaria de comprar produtos para uso pessoal ou para revender, mas não sabe como começar.', bg: 'bg-orange-500/10', textCol: 'text-orange-500', ring: 'ring-orange-500/25' },
];

const steps = [
  { icon: Search, name: 'ESCOLHER', desc: 'Aprenda a pesquisar produtos e avaliar vendedores.', bg: 'bg-blue-500/15', textCol: 'text-blue-500', ring: 'ring-blue-500/20' },
  { icon: ShoppingCart, name: 'COMPRAR', desc: 'Compreenda o processo de encomenda nas diferentes plataformas.', bg: 'bg-emerald-500/15', textCol: 'text-accent', ring: 'ring-accent/20' },
  { icon: Wallet, name: 'PAGAR', desc: 'Conheça as opções de pagamento internacional disponíveis.', bg: 'bg-amber-500/15', textCol: 'text-amber-500', ring: 'ring-amber-500/20' },
  { icon: Send, name: 'ENVIAR', desc: 'Compreenda as opções de transporte e acompanhamento.', bg: 'bg-cyan-500/15', textCol: 'text-cyan-500', ring: 'ring-cyan-500/20' },
  { icon: PackageCheck, name: 'RECEBER', desc: 'Saiba quais procedimentos e custos podem estar envolvidos na receção da encomenda em Moçambique.', bg: 'bg-purple-500/15', textCol: 'text-purple-500', ring: 'ring-purple-500/20' },
];

const productCategories = [
  'Roupas e calçado',
  'Bolsas e acessórios',
  'Telemóveis e acessórios tecnológicos',
  'Computadores e periféricos',
  'Produtos para casa e decoração',
  'Utensílios de cozinha',
  'Produtos de beleza e acessórios',
  'Ferramentas e artigos para pequenos negócios',
  'Brinquedos e artigos de uso diário',
  'E outros produtos disponíveis nas plataformas',
];

const resaleSkills = [
  'Comparar preços de fornecedores.',
  'Estimar os custos de uma encomenda.',
  'Calcular o custo aproximado por unidade.',
  'Investigar produtos que possam ter procura no seu mercado.',
  'Compreender os fatores que influenciam o preço final.',
];

const platformBadges = [
  { id: 'SHEIN' as const, name: 'SHEIN' },
  { id: 'TEMU' as const, name: 'Temu' },
  { id: 'ALIEXPRESS' as const, name: 'AliExpress' },
  { id: 'AMAZON' as const, name: 'Amazon' },
  { id: 'ALIBABA' as const, name: 'Alibaba' },
];

const platforms = [
  {
    id: 'SHEIN' as const,
    name: 'SHEIN',
    tag: 'Moda, Roupas & Acessórios',
    Logo: SheinLogo,
    badgeBg: 'bg-black text-white',
    borderHover: 'hover:border-black/50 dark:hover:border-white/40',
    desc: 'Aprenda a pesquisar roupas, calçado, acessórios e outros artigos disponíveis com envio prático.',
  },
  {
    id: 'TEMU' as const,
    name: 'TEMU',
    tag: 'Preços Baixos & Variedade',
    Logo: TemuLogo,
    badgeBg: 'bg-[#fb7701] text-white',
    borderHover: 'hover:border-[#fb7701]/60',
    desc: 'Conheça o processo de pesquisa de produtos, comparação de opções e análise das condições de compra.',
  },
  {
    id: 'ALIEXPRESS' as const,
    name: 'ALIEXPRESS',
    tag: 'Maior Catálogo Global da China',
    Logo: AliexpressLogo,
    badgeBg: 'bg-[#ff4747] text-white',
    borderHover: 'hover:border-[#ff4747]/60',
    desc: 'Aprenda a pesquisar produtos de diferentes categorias, avaliar vendedores e encontrar preços de fábrica.',
  },
  {
    id: 'AMAZON' as const,
    name: 'AMAZON',
    tag: 'EUA, Eletrónicos & Qualidade',
    Logo: AmazonLogo,
    badgeBg: 'bg-[#131921] text-white',
    borderHover: 'hover:border-amber-500/60',
    desc: 'Conheça o processo de pesquisa de produtos originais e verificação das condições de compra e envio.',
  },
  {
    id: 'ALIBABA' as const,
    name: 'ALIBABA',
    tag: 'Fornecedores B2B & Atacado',
    Logo: AlibabaLogo,
    badgeBg: 'bg-[#ff6a00] text-white',
    borderHover: 'hover:border-[#ff6a00]/60',
    desc: 'Aprenda os fundamentos da pesquisa de fábricas, fornecedores certificados e compras para comércio.',
  },
];

const modules = [
  { title: 'Introdução à importação internacional', desc: 'O que é importar, como funciona o processo de ponta a ponta e os conceitos básicos que precisa de dominar antes da primeira encomenda.', icon: PlayCircle },
  { title: 'Como importar da China', desc: 'Pesquisa de produtos, plataformas, avaliação de vendedores e o caminho que a encomenda percorre desde a China até Moçambique.', icon: Globe },
  { title: 'Compras na SHEIN e na Temu', desc: 'Como pesquisar, comparar e encomendar nestas plataformas, com atenção às condições de compra e de envio.', icon: ShoppingBag },
  { title: 'Compras no AliExpress e na Amazon', desc: 'O processo de compra em cada plataforma, a avaliação de vendedores e a verificação das opções de envio.', icon: Package },
  { title: 'Alibaba: pesquisa de fornecedores e compras comerciais', desc: 'Fundamentos para encontrar fornecedores e explorar compras destinadas a possíveis operações comerciais.', icon: Building2 },
  { title: 'Como importar do Brasil para Moçambique', desc: 'Pesquisa de produtos e possibilidades de compra e envio do Brasil para Moçambique.', icon: Compass },
  { title: 'Pagamentos internacionais e cartões virtuais', desc: 'Opções de pagamento internacional, cartões virtuais, recargas, comissões e as condições que deve verificar antes de escolher um serviço.', icon: CreditCard },
  { title: 'Transporte, logística e rastreio', desc: 'Opções de transporte, acompanhamento da encomenda e o que considerar em cada etapa do envio.', icon: Truck },
  { title: 'Alfândega, taxas e cálculo dos custos de importação', desc: 'Os encargos que podem aplicar-se à sua encomenda e como estimar o custo total antes de comprar.', icon: Calculator },
  { title: 'Primeira encomenda: exemplo prático do início ao fim', desc: 'Um exemplo passo a passo, desde a pesquisa do produto até à receção da encomenda.', icon: Award },
];

const bonuses = [
  {
    num: '01',
    value: '1.500 MT',
    img: '/assets/bonus-diretorio-novo.jpg',
    icon: BookOpenCheck,
    title: 'DIRETÓRIO DE FORNECEDORES E CONTACTOS ÚTEIS',
    tag: 'Guia Digital & Contactos',
    iconBg: 'bg-blue-500/10 text-blue-500 ring-blue-500/25',
    desc: 'Recursos organizados para ajudar a encontrar lojas, vendedores, fornecedores e serviços relacionados com a importação. Um recurso de pesquisa que vale a pena explorar com atenção às condições de cada fornecedor.',
    highlights: [
      'Lista verificada de fábricas e lojas na China e no Brasil',
      'Contactos diretos de agentes de carga e transportadoras',
      'Critérios para filtrar fornecedores confiáveis e evitar golpes',
    ],
  },
  {
    num: '02',
    value: '1.200 MT',
    img: '/assets/bonus-calculadora-novo.jpg',
    icon: Calculator,
    title: 'CALCULADORA DE CUSTOS DE IMPORTAÇÃO',
    tag: 'Ferramenta Editável em MT',
    iconBg: 'bg-emerald-500/10 text-emerald-500 ring-emerald-500/25',
    desc: 'Uma ferramenta editável para organizar o preço dos produtos, o transporte, as comissões e outras despesas conhecidas, ajudando a estimar o custo total da encomenda.',
    highlights: [
      'Cálculo automático de custos totais em Meticais (MT)',
      'Estimativa de frete, comissões bancárias e alfândega',
      'Compatível com Excel, Google Sheets e telemóvel',
    ],
  },
  {
    num: '03',
    value: '1.800 MT',
    img: '/assets/bonus-pagamentos-novo.jpg',
    icon: Wallet,
    title: 'GUIA DE PAGAMENTOS INTERNACIONAIS',
    tag: 'Cartões Virtuais & M-Pesa',
    iconBg: 'bg-amber-500/10 text-amber-500 ring-amber-500/25',
    desc: 'Um guia complementar sobre opções de pagamento, cartões virtuais, recargas, comissões e aspetos que devem ser verificados antes de escolher um serviço.',
    highlights: [
      'Como criar e ativar cartões virtuais internacionais',
      'Métodos de recarga prática via M-Pesa e contas locais',
      'Guia para evitar comissões abusivas e bloqueios de cartão',
    ],
  },
];

const offerIncludes = [
  'Curso Importa Fácil Moçambique.',
  'Formação sobre as cinco plataformas abordadas.',
  'Módulo de importação da China e do Brasil.',
  'Módulo sobre pagamentos internacionais.',
  'Conteúdos sobre transporte, rastreio e custos.',
  'Diretório de fornecedores e contactos úteis.',
  'Calculadora de custos de importação.',
  'Guia de pagamentos internacionais.',
];

const faqs = [
  {
    q: 'Preciso de experiência para começar?',
    a: 'O curso foi estruturado para apresentar os fundamentos da importação de forma progressiva, começando pelos conceitos básicos.',
  },
  {
    q: 'Posso aprender a importar diferentes tipos de produtos?',
    a: 'O curso ensina a pesquisar produtos de diferentes categorias e a compreender o processo de importação. A possibilidade de comprar ou importar um artigo específico depende da plataforma, do vendedor, das regras aplicáveis e das condições de transporte.',
  },
  {
    q: 'O curso aborda a importação do Brasil?',
    a: 'Sim. Existe um módulo dedicado à pesquisa de produtos e às possibilidades de compra e envio do Brasil para Moçambique.',
  },
  {
    q: 'O curso ensina pagamentos internacionais?',
    a: 'Sim. O programa inclui um módulo dedicado às opções de pagamento internacional e cartões virtuais, com atenção às condições que devem ser verificadas antes de utilizar cada serviço.',
  },
  {
    q: 'Todas as plataformas enviam diretamente para Moçambique?',
    a: 'Não necessariamente. As opções de envio variam consoante a plataforma, o vendedor, o produto e o destino. É importante confirmar as condições de cada encomenda.',
  },
  {
    q: 'O preço de 447 MT inclui os produtos que vou comprar?',
    a: 'Não. O valor corresponde ao curso digital e aos materiais incluídos. Os produtos, o transporte, as comissões e os impostos eventualmente aplicáveis são despesas separadas.',
  },
  {
    q: 'Vou ter de pagar alfândega?',
    a: 'Os encargos dependem do tipo de mercadoria, do valor e das regras aplicáveis à importação. O curso aborda os fundamentos necessários para compreender esses custos.',
  },
  {
    q: 'Como recebo o curso?',
    a: 'O curso é entregue no formato digital definido pelo responsável pela formação, no momento do acesso. Para mais detalhes sobre o método de entrega, contacte o responsável pelo curso no momento da compra.',
  },
];

const CHECKOUT_URL = 'https://pay.tutora.co.mz/f325608108364f40b1f15171666b1083';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const ofertaEl = document.getElementById('oferta');
      const ofertaTop = ofertaEl ? ofertaEl.getBoundingClientRect().top : Infinity;
      setShowStickyBar(window.scrollY > 640 && ofertaTop > window.innerHeight * 0.6);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const trackCheckout = () => {
    try {
      if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout', {
          content_name: 'Curso Importa Fácil Moçambique',
          currency: 'MZN',
          value: 447,
        });
      }
    } catch {
      /* ignore */
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans text-foreground">
      {/* SECTION 1: HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, var(--deep) 0%, oklch(0.24 0.07 260) 55%, oklch(0.27 0.07 258) 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60rem 30rem at 85% 15%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%), radial-gradient(40rem 24rem at 10% 90%, color-mix(in oklab, var(--cta) 14%, transparent), transparent 70%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-20">
          <div className="text-deep-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur-xs">
              <BadgeCheck className="size-4 text-accent animate-pulse" />
              Formação online em vídeo — em português
            </span>
            <h1 className="section-title mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]">
              Aprenda a importar produtos{' '}
              <span className="text-accent">da China e do Brasil para Moçambique</span>, mesmo começando do zero!
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-deep-foreground/80 sm:text-lg">
              Descubra como comprar em plataformas internacionais como SHEIN, Temu, Amazon, AliExpress e Alibaba,
              compreender os pagamentos internacionais e aprender o processo de envio e receção das suas encomendas.
            </p>
            <ul className="mt-6 space-y-3">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/40 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </span>
                  <span className="text-deep-foreground/90">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 inline-flex flex-col rounded-2xl border border-cta/40 bg-cta px-5 py-3 text-cta-foreground shadow-lg transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                <span className="text-xs font-bold tracking-widest uppercase">Acesso ao curso por apenas</span>
              </div>
              <span className="font-display text-3xl font-bold sm:text-4xl">447 MT</span>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleScrollToOffer}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-cta text-cta-foreground font-bold shadow-lg hover:bg-cta/90 hover:scale-[1.02] h-14 rounded-xl px-8 text-base sm:text-lg"
              >
                QUERO APRENDER A IMPORTAR
              </button>
              <p className="mt-3 text-xs text-deep-foreground/70">
                Pagamento único de 447 MT • Formação 100% digital
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/assets/hero-importacao-CBBFPStJ.png"
              width={1024}
              height={1024}
              alt="Comprador com telemóvel na mão, caixas de encomendas e símbolos de comércio internacional"
              className="mx-auto w-full max-w-md drop-shadow-2xl lg:max-w-none transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEMS / PAIN POINTS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="section-title mx-auto max-w-3xl text-center text-2xl sm:text-3xl lg:text-4xl">
          Queres comprar produtos do estrangeiro, mas não sabes como fazê-los chegar até Moçambique?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Muitas pessoas passam por situações como estas:
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-accent/40"
              >
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${item.bg} ${item.textCol} ring-1 ${item.ring} shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                  <Icon className="size-5.5" />
                </span>
                <p className="text-sm leading-relaxed sm:text-base text-foreground/90 pt-0.5">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-l-4 border-accent bg-accent/10 p-5 text-center shadow-xs">
          <p className="font-display text-lg font-semibold text-foreground">
            O primeiro passo é compreender como funciona todo o processo de importação.
          </p>
        </div>
      </section>

      {/* SECTION 3: 5 STEPS */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="section-title text-center text-2xl sm:text-3xl lg:text-4xl">
            Conheça o <span className="text-primary">Importa Fácil Moçambique</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground sm:text-lg">
            Um curso estruturado para ajudar o aluno a compreender as principais etapas da importação internacional —
            passo a passo, do início ao fim.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className="group relative rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground shadow-sm ring-2 ring-background">
                    {idx + 1}
                  </span>
                  <span className={`mx-auto flex size-14 items-center justify-center rounded-2xl ${step.bg} ${step.textCol} ring-1 ${step.ring} shadow-xs transition-transform duration-200 group-hover:scale-110`}>
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-3.5 font-display text-base font-bold tracking-wide">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-3.5 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full bg-background border border-border text-primary/70 shadow-xs lg:flex">
                      <ArrowRight className="size-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
            O objetivo é ajudar o aluno a aprender o processo, para que possa tomar decisões mais informadas e realizar
            as suas compras com maior autonomia.
          </p>
        </div>
      </section>

      {/* SECTION 4: BENEFITS & OPPORTUNITIES */}
      <section
        className="relative overflow-hidden text-deep-foreground"
        style={{
          background: 'linear-gradient(180deg, var(--deep) 0%, oklch(0.24 0.07 260) 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="section-title mx-auto max-w-3xl text-center text-2xl sm:text-3xl lg:text-4xl">
            Imagine tudo o que poderá aprender a <span className="text-cta">importar do estrangeiro!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-deep-foreground/75 sm:text-lg">
            Aprenda a explorar diferentes plataformas internacionais e descubra como comprar produtos para as suas
            necessidades pessoais ou para os seus objetivos comerciais.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* Benefit 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:col-span-2 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cta/30 to-cta/10 text-cta ring-1 ring-cta/40 shadow-sm">
                  <Layers className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-cta uppercase">Benefício 1</span>
                  <h3 className="font-display text-xl font-bold">Mais variedade de produtos</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                Aprenda a pesquisar diferentes categorias de produtos em plataformas internacionais:
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {productCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-deep-foreground/90 transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="mt-6 font-display font-semibold text-cta">
                Aprenda a pesquisar diferentes tipos de produtos, em vez de ficar limitado a uma única categoria.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-deep-foreground/60">
                O curso ensina o processo de pesquisa e importação de diferentes categorias. Nem todos os produtos podem
                ser importados legalmente ou enviados por todas as plataformas — produtos proibidos, restritos ou
                sujeitos a condições especiais devem respeitar as regras aplicáveis.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent ring-1 ring-accent/40 shadow-sm">
                  <ShoppingCart className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Benefício 2</span>
                  <h3 className="font-display text-xl font-bold">Comprar para uso pessoal</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                Aprenda a procurar produtos para as suas próprias necessidades, comparar preços e compreender os custos
                envolvidos antes de comprar — roupas, acessórios, artigos para casa, tecnologia e outros produtos
                disponíveis nas plataformas abordadas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cta/30 to-cta/10 text-cta ring-1 ring-cta/40 shadow-sm">
                  <TrendingUp className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-cta uppercase">Benefício 3</span>
                  <h3 className="font-display text-xl font-bold">Explorar oportunidades de revenda</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                Para quem pretende explorar um pequeno negócio, o curso apresenta os fundamentos da pesquisa de
                produtos. Vai aprender a:
              </p>
              <ul className="mt-4 space-y-2">
                {resaleSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-deep-foreground/85">
                    <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                      <Check className="size-3 stroke-[3]" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefit 4 (OFFICIAL PLATFORM LOGOS PILLS) */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:col-span-2 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent ring-1 ring-accent/40 shadow-sm">
                  <Globe className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Benefício 4</span>
                  <h3 className="font-display text-xl font-bold">Conhecer várias plataformas internacionais</h3>
                </div>
              </div>
              
              {/* Official Logos as verified pills */}
              <div className="mt-5 flex flex-wrap gap-3">
                {platformBadges.map((platform) => (
                  <PlatformBrandBadge key={platform.id} platform={platform.id} variant="pill" />
                ))}
              </div>

              <p className="mt-4 text-deep-foreground/80">
                O curso aborda as características e os processos de compra destas plataformas, incluindo a pesquisa de
                produtos, a avaliação de vendedores e a verificação das opções de envio.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-deep-foreground/60">
                Nem todas as plataformas enviam diretamente todos os produtos para Moçambique. Quando o envio direto não
                estiver disponível, o aluno aprende a investigar alternativas de transporte ou encaminhamento.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cta/30 to-cta/10 text-cta ring-1 ring-cta/40 shadow-sm">
                  <CreditCard className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-cta uppercase">Benefício 5</span>
                  <h3 className="font-display text-xl font-bold">Compreender os pagamentos internacionais</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                Terá acesso a um módulo dedicado aos pagamentos internacionais e aos cartões virtuais, com destaque para
                a importância de compreender os requisitos, as condições de utilização, as formas de recarga e as
                comissões antes de escolher um serviço.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent ring-1 ring-accent/40 shadow-sm">
                  <Calculator className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Benefício 6</span>
                  <h3 className="font-display text-xl font-bold">Compreender os custos antes de comprar</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                O preço do produto é apenas uma parte da conta. Aprenda a considerar também o transporte, as comissões,
                os impostos e outras despesas aplicáveis.
              </p>
              <p className="mt-4 font-display font-semibold text-accent">
                Aprenda a avaliar o custo total estimado antes de tomar uma decisão de compra.
              </p>
            </div>

            {/* Benefit 7 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cta/30 to-cta/10 text-cta ring-1 ring-cta/40 shadow-sm">
                  <Clock3 className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-cta uppercase">Benefício 7</span>
                  <h3 className="font-display text-xl font-bold">Aprender ao seu ritmo</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                O formato em videoaulas permite estudar os conteúdos de forma organizada e rever as explicações quando
                precisar, de acordo com as condições de acesso efetivamente disponibilizadas.
              </p>
            </div>

            {/* Benefit 8 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent ring-1 ring-accent/40 shadow-sm">
                  <KeyRound className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Benefício 8</span>
                  <h3 className="font-display text-xl font-bold">Compreender o processo com mais autonomia</h3>
                </div>
              </div>
              <p className="mt-4 text-deep-foreground/80">
                O objetivo da formação é ajudar o aluno a compreender as etapas da importação, para que possa
                pesquisar, comparar opções e tomar decisões mais informadas — em vez de depender exclusivamente de
                terceiros para obter essas informações.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-cta/40 bg-cta/10 p-6 text-center sm:p-8">
            <p className="font-display text-lg font-semibold sm:text-xl">
              Não se trata apenas de conhecer sites de compras. Trata-se de aprender como funciona o processo de
              importação e como avaliar as opções disponíveis para cada encomenda.
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={handleScrollToOffer}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-cta text-cta-foreground font-bold shadow-lg hover:bg-cta/90 hover:scale-[1.02] h-14 rounded-xl px-8 text-base sm:text-lg"
              >
                QUERO APRENDER A IMPORTAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 5 PLATFORMS WITH OFFICIAL LOGOS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Award className="size-3.5 text-primary" /> Plataformas Homologadas
          </span>
          <h2 className="section-title mt-3 text-center text-2xl sm:text-3xl lg:text-4xl">
            Aprenda a explorar <span className="text-primary">cinco plataformas internacionais</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Cada plataforma tem as suas características, vantagens e condições próprias de compra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((platform) => {
            const Logo = platform.Logo;
            return (
              <div
                key={platform.name}
                className={`group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${platform.borderHover}`}
              >
                <div>
                  {/* Official Logo Container */}
                  <div className="mx-auto flex size-20 items-center justify-center rounded-2xl p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <Logo className="size-full drop-shadow-md rounded-2xl" />
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block rounded-md bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {platform.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-wide text-foreground">
                      {platform.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {platform.desc}
                  </p>
                </div>

                <div className="mt-5 border-t border-border/60 pt-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                    <BadgeCheck className="size-3.5" /> Oficial no Curso
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: 10 MODULES ACCORDION */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <PlayCircle className="size-3.5" /> Conteúdo Programático
            </span>
            <h2 className="section-title mt-3 text-center text-2xl sm:text-3xl lg:text-4xl">
              Tudo o que vai aprender no curso
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              10 módulos organizados para o acompanhar desde os conceitos básicos até à sua primeira encomenda.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {modules.map((module, idx) => {
              const isOpen = openModule === idx;
              const ModIcon = module.icon;
              return (
                <div
                  key={module.title}
                  className={`rounded-2xl border bg-card px-5 shadow-sm transition-all duration-200 ${
                    isOpen ? 'border-primary/50 shadow-md ring-1 ring-primary/20' : 'border-border hover:border-primary/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="flex w-full flex-1 items-center justify-between py-4.5 text-left font-medium cursor-pointer transition-all hover:no-underline"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3.5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-xs">
                        {idx + 1}
                      </span>
                      <ModIcon className="size-5 text-accent shrink-0 hidden sm:block opacity-90" />
                      <span className="font-display text-base font-semibold text-foreground/95">{module.title}</span>
                    </span>
                    <div
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-200 ${
                        isOpen ? 'bg-primary/15 text-primary rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pl-11.5 sm:pl-16 pr-2 text-sm leading-relaxed text-muted-foreground animate-in fade-in-50 duration-200">
                      {module.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: 3 BONUSES WITH 3D MOCKUPS & ENHANCED ICONS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            <Sparkles className="size-3.5" /> Bónus Exclusivos de Alto Valor
          </span>
          <h2 className="section-title mt-3 text-center text-2xl sm:text-3xl lg:text-4xl">
            E ainda recebe <span className="text-accent">3 bónus complementares!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Materiais digitais e ferramentas práticas incluídas no acesso ao curso, sem qualquer custo adicional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.title}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50"
              >
                <div>
                  {/* Top Bar with Number & Value */}
                  <div className="flex items-center justify-between border-b border-border/70 bg-secondary/50 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-wider text-accent uppercase">
                      <Award className="size-3.5" /> BÓNUS #{bonus.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground line-through">{bonus.value}</span>
                      <span className="inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
                        100% GRÁTIS
                      </span>
                    </div>
                  </div>

                  {/* 3D Mockup Container */}
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/40 to-background p-2">
                    <img
                      src={bonus.img}
                      width={1024}
                      height={768}
                      loading="lazy"
                      alt={bonus.title}
                      className="h-full w-full object-cover rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <span className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${bonus.iconBg} ring-1 shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="size-6" />
                      </span>
                      <div>
                        <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          {bonus.tag}
                        </span>
                        <h3 className="mt-1 font-display text-base leading-snug font-bold text-foreground">
                          {bonus.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                      {bonus.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                      {bonus.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground/85">
                          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                            <Check className="size-2.5 stroke-[3]" />
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/60 bg-secondary/30 px-6 py-3 text-center">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Acesso vitalício incluído
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 8: OFFER */}
      <section
        id="oferta"
        className="relative overflow-hidden text-deep-foreground"
        style={{
          background: 'linear-gradient(160deg, var(--deep) 0%, oklch(0.25 0.07 258) 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50rem 26rem at 15% 20%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%), radial-gradient(40rem 24rem at 90% 85%, color-mix(in oklab, var(--cta) 16%, transparent), transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="section-title text-center text-2xl sm:text-3xl lg:text-4xl">
            Comece a aprender a importar por apenas <span className="text-cta">447 MT</span>
          </h2>
          <div className="mt-10 rounded-3xl bg-card p-6 text-foreground shadow-2xl sm:p-8 border border-border/50">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                <BadgeCheck className="size-4" /> Pacote Completo
              </span>
              <h3 className="font-display mt-2 text-center text-lg font-bold tracking-wide uppercase">
                O que está incluído
              </h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {offerIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="flex size-5.5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/40 shadow-xs mt-0.5">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-cta px-6 py-5 text-center text-cta-foreground shadow-lg transition-transform duration-200 hover:scale-[1.01]">
              <span className="font-display text-4xl font-bold sm:text-5xl">447 MT</span>
              <p className="mt-1 text-sm font-bold tracking-widest uppercase">Pagamento único</p>
            </div>

            <div className="mt-6">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCheckout}
                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-cta text-cta-foreground font-bold shadow-lg hover:bg-cta/90 hover:scale-[1.01] h-14 rounded-xl px-8 text-base sm:text-lg text-center"
              >
                QUERO APRENDER A IMPORTAR
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border/70 pt-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="size-5 text-accent" />
                <span className="text-[11px] font-semibold text-muted-foreground">Garantia Total</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Lock className="size-5 text-primary" />
                <span className="text-[11px] font-semibold text-muted-foreground">Acesso Imediato</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Award className="size-5 text-cta" />
                <span className="text-[11px] font-semibold text-muted-foreground">3 Bónus Inclusos</span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              O valor corresponde à formação e aos materiais digitais anunciados. Não inclui produtos físicos — produtos,
              transporte, comissões e impostos são despesas separadas.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <HelpCircle className="size-3.5" /> Dúvidas Comuns
          </span>
          <h2 className="section-title mt-3 text-center text-2xl sm:text-3xl lg:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border bg-card px-5 shadow-sm transition-all duration-200 ${
                  isOpen ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border hover:border-primary/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full flex-1 items-center justify-between py-4 text-left font-medium cursor-pointer transition-all hover:no-underline"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/25">
                      <HelpCircle className="size-4" />
                    </span>
                    <span className="font-display text-base font-semibold">{faq.q}</span>
                  </span>
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-200 ${
                      isOpen ? 'bg-primary/15 text-primary rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="pb-5 pl-10 pr-2 text-sm leading-relaxed text-muted-foreground animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: CLOSING CTA */}
      <section
        className="relative overflow-hidden text-center text-deep-foreground"
        style={{
          background: 'linear-gradient(180deg, oklch(0.25 0.07 258) 0%, var(--deep) 100%)',
        }}
      >
        <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
            O próximo passo para aprender a importar começa aqui.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-deep-foreground/80 sm:text-lg">
            Aprenda a pesquisar produtos internacionais, conhecer as plataformas de compra e compreender as etapas
            necessárias para importar para Moçambique.
          </p>
          <p className="mt-5 text-deep-foreground/90">
            Aceda ao curso <strong>Importa Fácil Moçambique</strong> por apenas{' '}
            <span className="font-display text-2xl font-bold text-cta">447 MT</span>.
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={handleScrollToOffer}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-cta text-cta-foreground font-bold shadow-lg hover:bg-cta/90 hover:scale-[1.02] h-14 rounded-xl px-8 text-base sm:text-lg"
            >
              QUERO ACEDER AO CURSO
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-deep border-t border-white/10 py-8 text-center text-deep-foreground">
        <p className="font-display text-base font-bold">Importa Fácil Moçambique</p>
        <p className="mx-auto mt-2 max-w-xl px-4 text-xs leading-relaxed text-deep-foreground/60">
          Formação digital sobre importação internacional. Os conteúdos têm caráter educativo e não constituem garantia
          de resultados comerciais. A possibilidade de importar um produto depende das plataformas, dos vendedores e
          das regras aplicáveis.
        </p>
      </footer>

      {/* STICKY BOTTOM MOBILE BAR */}
      {showStickyBar && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-deep/95 px-4 py-3 backdrop-blur md:hidden transition-all duration-300">
          <div className="mx-auto flex max-w-md items-center justify-between gap-3">
            <div className="text-deep-foreground">
              <p className="text-[10px] font-bold tracking-widest uppercase opacity-70">Acesso completo</p>
              <p className="font-display text-lg font-bold text-cta">447 MT</p>
            </div>
            <button
              type="button"
              onClick={handleScrollToOffer}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors font-bold shadow-lg bg-cta text-cta-foreground hover:bg-cta/90 h-9 rounded-xl px-4 text-sm"
            >
              QUERO APRENDER A IMPORTAR
            </button>
          </div>
        </div>
      )}

      {/* ENROLLMENT & PAYMENT MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-card p-6 shadow-2xl border border-border sm:p-8 animate-in fade-in-50 zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="size-5" />
            </button>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent uppercase">
                <BadgeCheck className="size-4" /> Acesso Imediato
              </span>
              <h3 className="section-title mt-3 text-2xl font-bold">Inscrição no Curso</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Importa Fácil Moçambique + 3 Bónus Digitais
              </p>
              <div className="mt-4 rounded-2xl bg-secondary/70 p-4">
                <span className="text-xs font-semibold uppercase text-muted-foreground">Valor total único</span>
                <p className="font-display text-3xl font-bold text-primary">447 MT</p>
              </div>
            </div>

            <div className="mt-6 space-y-3.5">
              <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                Opções de pagamento disponíveis em Moçambique:
              </p>

              {/* M-Pesa */}
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-3.5 shadow-xs transition-colors hover:border-red-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl overflow-hidden shadow-xs">
                    <MPesaLogo className="size-full" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">M-Pesa (Vodacom)</p>
                    <p className="text-xs text-muted-foreground font-mono font-medium">84 123 4567</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('841234567', 'mpesa')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  {copiedKey === 'mpesa' ? (
                    <>
                      <Check className="size-3.5 text-accent" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-muted-foreground" /> Copiar
                    </>
                  )}
                </button>
              </div>

              {/* E-Mola */}
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-3.5 shadow-xs transition-colors hover:border-amber-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl overflow-hidden shadow-xs">
                    <EMolaLogo className="size-full" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">E-Mola (Movitel)</p>
                    <p className="text-xs text-muted-foreground font-mono font-medium">86 987 6543</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('869876543', 'emola')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  {copiedKey === 'emola' ? (
                    <>
                      <Check className="size-3.5 text-accent" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-muted-foreground" /> Copiar
                    </>
                  )}
                </button>
              </div>

              {/* Cartão / Transferência */}
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-3.5 shadow-xs transition-colors hover:border-blue-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20">
                    <CreditCard className="size-5.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Cartão / BCI / Millennium BIM / Standard Bank</p>
                    <p className="text-xs text-muted-foreground">Envio de comprovativo para ativação imediata</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCheckout}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cta py-3.5 text-sm font-bold text-cta-foreground shadow-md hover:bg-cta/90 transition-colors"
              >
                Pagar Online Agora (447 MT)
              </a>
              <a
                href="https://wa.me/258841234567?text=Ol%C3%A1!%20Gostaria%20de%20aceder%20ao%20curso%20Importa%20F%C3%A1cil%20Mo%C3%A7ambique%20por%20447%20MT."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <Phone className="size-3.5 text-accent" /> Confirmar Pagamento no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="w-full rounded-xl py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Voltar à página
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
