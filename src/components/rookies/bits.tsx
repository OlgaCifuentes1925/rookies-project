import { useEffect, useRef, useState, type ReactNode } from "react";

/** Silueta esquemática del archipiélago canario (8 islas), usada como marca de agua. */
export function IslasCanarias({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 200" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="60" cy="120" rx="26" ry="16" transform="rotate(-12 60 120)" />
      <ellipse cx="130" cy="112" rx="18" ry="11" transform="rotate(8 130 112)" />
      <ellipse cx="196" cy="126" rx="14" ry="9" />
      <ellipse cx="252" cy="120" rx="12" ry="8" />
      <ellipse cx="330" cy="112" rx="38" ry="27" />
      <ellipse cx="432" cy="104" rx="34" ry="24" transform="rotate(-6 432 104)" />
      <ellipse cx="520" cy="82" rx="44" ry="18" transform="rotate(-24 520 82)" />
      <ellipse cx="592" cy="56" rx="26" ry="14" transform="rotate(-32 592 56)" />
    </svg>
  );
}

export function Palmera({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="currentColor">
      <path d="M30 60c0-14 1-22 3-30l4 1c-2 8-3 15-3 29z" />
      <path d="M33 27c8-9 18-11 25-6-7-1-13 1-19 8zM33 27C25 18 15 16 8 21c7-1 13 1 19 8zM33 26c2-11 9-18 17-18-6 3-10 8-12 18zM33 26c-4-10-12-15-20-13 6 1 12 5 15 14z" />
    </svg>
  );
}

export function Ola({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M2 16c6-8 12 8 18 0s12 8 18 0 12 8 18 0" />
    </svg>
  );
}

/** Revela el contenido con fade+slide cuando entra en pantalla. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setVisible(true);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Marcador de foto. Mientras no haya imagen real muestra un bloque de color
 * con el nombre del marcador (ej. [IMAGEN_QUEVEDO]) para sustituirla fácil.
 */
export function PhotoSlot({
  photoKey,
  src,
  alt,
  className = "",
}: {
  photoKey: string;
  src?: string | undefined;
  alt: string;
  className?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-turquesa/25 text-center ${className}`}
      role="img"
      aria-label={`Marcador de imagen pendiente: ${alt}`}
    >
      <Palmera className="h-8 w-8 text-oceano/70" />
      <span className="font-display text-sm tracking-wide text-oceano">[{photoKey}]</span>
      <span className="px-4 text-xs text-lava/60">Foto pendiente</span>
    </div>
  );
}

export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-lava/10 bg-lava/90 shadow-[var(--shadow-slide)]">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function VideoPendiente({ nombre }: { nombre: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-lava/25 bg-arena text-center text-sm text-lava/60">
      Vídeo de {nombre} pendiente — pásame el enlace de YouTube y lo incrusto aquí.
    </div>
  );
}
