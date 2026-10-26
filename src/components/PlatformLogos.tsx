import React from 'react';

export function SheinLogo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#000000" />
      {/* Official SHEIN typography */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="2.5"
      >
        SHEIN
      </text>
    </svg>
  );
}

export function TemuLogo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#FB7701" />
      {/* 4 Iconic Temu Silhouettes: Dress, Rocking Horse, Stiletto, Handbag */}
      <g fill="#FFFFFF">
        {/* Dress (top left) */}
        <path d="M28 26c1.5 0 2.5 1 3 2.5l2 8c.3 1-.3 1.8-1.2 2l-1.3.2 4.5 13.3c.3.8-.3 1.6-1.1 1.7-.2 0-.4 0-.6-.1L23 50.5l-4.3 3.1c-.7.5-1.7.3-2.1-.4-.2-.3-.2-.6-.1-.9L21 38.7l-1.3-.2c-.9-.2-1.5-1-1.2-2l2-8c.5-1.5 1.5-2.5 3-2.5h4.5z" />
        {/* Rocking horse (top right) */}
        <path d="M68 26c2 0 3.5 1.2 4 3l1.5 4.5 5.5 1.5c1 .3 1.5 1.3 1.2 2.3-.2.8-.8 1.4-1.6 1.5l-5.6.8 1.8 6.4c.3 1-.3 2-1.3 2.3-.3.1-.6.1-.9 0l-5.7-2-5.7 2c-1 .3-2-.3-2.3-1.3-.1-.3-.1-.6 0-.9l1.8-6.4-5.6-.8c-.8-.1-1.4-.7-1.6-1.5-.3-1 .2-2 1.2-2.3l5.5-1.5L64 29c.5-1.8 2-3 4-3z" />
        {/* Stiletto / High heel (bottom left) */}
        <path d="M22 66c3.5 0 7 1.2 9.5 3.5l4.5 4.2c1.2 1.1 1.8 2.6 1.8 4.2 0 1.2-.5 2.3-1.4 3.1l-2.2 1.8c-.8.6-1.8.9-2.8.8l-12.4-1.2c-1.5-.1-2.6-1.4-2.5-2.9.1-1.2.9-2.2 2.1-2.5l6.4-1.6-1.5-7.5c-.3-1.5.7-2.9 2.2-3.2.3 0 .5-.1.8-.1h-2z" />
        {/* Handbag (bottom right) */}
        <path d="M68 64c3.5 0 6 2.5 6 6v10c0 2-1.5 3.5-3.5 3.5h-13c-2 0-3.5-1.5-3.5-3.5V70c0-3.5 2.5-6 6-6h8zm-1 3.5h-6c-1.5 0-2.5 1-2.5 2.5v1h11v-1c0-1.5-1-2.5-2.5-2.5z" />
      </g>
      {/* Official TEMU text wordmark below */}
      <text
        x="50"
        y="93"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, Arial, sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="1.2"
      >
        TEMU
      </text>
    </svg>
  );
}

export function AliexpressLogo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="aliGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5000" />
          <stop offset="100%" stopColor="#E60012" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#aliGradient)" />
      {/* White Shopping Bag with the distinctive AliExpress 'a' */}
      <path
        d="M32 36V28a18 18 0 0 1 36 0v8h8a4 4 0 0 1 4 4.3l-3.2 38.4A6 6 0 0 1 70.8 84H29.2a6 6 0 0 1-6-5.3L20 40.3A4 4 0 0 1 24 36h8zm8 0h20v-8a10 10 0 0 0-20 0v8z"
        fill="#FFFFFF"
      />
      {/* AliExpress smile / lowercase 'a' cutout */}
      <path
        d="M44 52a9 9 0 0 0-4 1.2c-3 1.8-4.5 4.8-4 8 1 5.2 6.5 7.8 11.5 6.2 2-.6 3.8-2 4.8-3.9v3.5h5.5V50h-5.5v2.8A8.8 8.8 0 0 0 44 52zm2.6 11.5c-3 0-5.2-1.7-5.5-4-.3-2.5 1.5-4.5 4.5-4.7 2.5-.2 4.7 1.2 5.2 3.4.4 2.8-1.5 5.3-4.2 5.3z"
        fill="#FF3A00"
      />
    </svg>
  );
}

export function AmazonLogo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#131921" />
      {/* amazon letters */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="'Amazon Ember', system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="-0.5"
      >
        amazon
      </text>
      {/* Famous Amazon curved arrow from a to z with dimple */}
      <path
        d="M26 62c12 7.5 28 8 42-1.5 1.4-1 2.8-.2 2.2 1.3-3.6 8.5-22.5 12.8-42.5 4.5-1.6-.7-.8-3.2-1.7-4.3z"
        fill="#FF9900"
      />
      <path
        d="M68.5 56.5c1.6 1.8 3.5 5.5 2.8 7.2-.6 1.5-3.5 2.1-5.5 1.8-1.2-.2-1.4-.9-.8-1.7 1.5-2.1 3-5.3 3.5-7.3z"
        fill="#FF9900"
      />
    </svg>
  );
}

export function AlibabaLogo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="alibabaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FF5000" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#alibabaGrad)" />
      {/* Alibaba smiling face outline / letter 'a' inside circle */}
      <circle cx="50" cy="50" r="32" stroke="#FFFFFF" strokeWidth="5.5" fill="none" />
      {/* Alibaba smiling face profile & curl */}
      <path
        d="M40 37c5-3.5 16-3.5 21 3 3 4 3 10-1 15-4 5-11 7-18 6 1.5 5 7 7.5 12 6.5 3.5-.7 6-2.5 8-4.5l3.5 4c-3 3-7 5.5-12 6.5-9 1.8-18-2.5-20.5-12-2.5-9.5 2-19 8-24.5zm14 7c-2.5-2.5-7.5-2.5-10 1-2 2.5-2 6.5 0 9 2.5 2.5 7.5 2.5 10-1 2-2.5 2-6.5 0-9z"
        fill="#FFFFFF"
      />
      {/* Eye / smile point */}
      <circle cx="49" cy="46" r="2.5" fill="#FF6A00" />
    </svg>
  );
}

// Full horizontal brand badge with authentic logo + stylized typography
export function PlatformBrandBadge({
  platform,
  variant = "card",
}: {
  platform: 'SHEIN' | 'TEMU' | 'ALIEXPRESS' | 'AMAZON' | 'ALIBABA';
  variant?: 'card' | 'pill';
}) {
  const meta = {
    SHEIN: {
      Logo: SheinLogo,
      name: 'SHEIN',
      tag: 'Fast Fashion & Lifestyle',
      color: 'bg-black text-white border-neutral-800',
      pillColor: 'bg-neutral-900/90 text-white border-neutral-700',
    },
    TEMU: {
      Logo: TemuLogo,
      name: 'TEMU',
      tag: 'Preços Baixos & Variedade',
      color: 'bg-[#fb7701]/10 text-[#ea580c] border-[#fb7701]/30',
      pillColor: 'bg-[#fb7701]/20 text-[#ff8c2b] border-[#fb7701]/40',
    },
    ALIEXPRESS: {
      Logo: AliexpressLogo,
      name: 'AliExpress',
      tag: 'Catálogo Global da China',
      color: 'bg-red-500/10 text-red-600 border-red-500/30',
      pillColor: 'bg-red-500/20 text-red-400 border-red-500/40',
    },
    AMAZON: {
      Logo: AmazonLogo,
      name: 'Amazon',
      tag: 'EUA, Europa & Global',
      color: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
      pillColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    },
    ALIBABA: {
      Logo: AlibabaLogo,
      name: 'Alibaba',
      tag: 'Fornecedores B2B & Atacado',
      color: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
      pillColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
    },
  }[platform];

  const LogoComponent = meta.Logo;

  if (variant === "pill") {
    return (
      <span className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-1.5 font-display text-sm font-bold tracking-wide transition-all hover:scale-105 ${meta.pillColor}`}>
        <LogoComponent className="size-5 shrink-0 rounded-md" />
        <span>{meta.name}</span>
      </span>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <LogoComponent className="size-12 shrink-0 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110" />
      <div className="text-left">
        <h3 className="font-display text-lg font-bold tracking-wide text-foreground">{meta.name}</h3>
        <p className="text-[11px] font-medium text-muted-foreground">{meta.tag}</p>
      </div>
    </div>
  );
}

export function MPesaLogo({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="20" fill="#E60000" />
      <circle cx="50" cy="50" r="34" fill="#FFFFFF" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#E60000"
        fontFamily="system-ui, sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="-1"
      >
        M
      </text>
    </svg>
  );
}

export function EMolaLogo({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="20" fill="#FF8200" />
      <circle cx="50" cy="50" r="34" fill="#FFFFFF" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#FF8200"
        fontFamily="system-ui, sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="-1"
      >
        e
      </text>
    </svg>
  );
}

