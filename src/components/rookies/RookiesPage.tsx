import { useEffect, useState } from "react";
import { artists, sections, timeline } from "@/data/rookies";
import grupo1 from "@/assets/foto_los_rookis_1.jpg.asset.json";
import grupo2 from "@/assets/foto_los_rookis_2.jpg.asset.json";
import pareja1 from "@/assets/foto_quevedo_y_jusepe.jpg.asset.json";
import pareja2 from "@/assets/foto_lucho_rk_y_la_pantera.jpg.asset.json";
import pareja3 from "@/assets/foto_quevedo_camiseta_las_palmas.jpg.asset.json";
import {
  IslasCanarias,
  Ola,
  Palmera,
  PhotoSlot,
  Reveal,
  VideoPendiente,
  YouTubeEmbed,
} from "@/components/rookies/bits";

function useActiveSection(scroller: HTMLElement | null) {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActive(top.target.id);
      },
      { root: scroller ?? null, threshold: [0.5, 0.75] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [scroller]);

  return active;
}

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function RookiesPage() {
  const [scroller, setScroller] = useState<HTMLElement | null>(null);
  const active = useActiveSection(scroller);

  return (
    <div className="relative bg-arena text-lava">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-oceano/40 backdrop-blur-xl">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3"
        >
          <button
            onClick={() => goTo("intro")}
            className="font-display text-lg tracking-widest text-white"
          >
            Los Rookies
          </button>
          <ul className="hidden items-center gap-5 text-sm font-medium text-white/85 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => goTo(s.id)}
                  className={`rounded-full px-2 py-1 transition-colors hover:text-sol ${
                    active === s.id ? "text-sol" : ""
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => goTo("juntos")}
            className="rounded-full bg-sol px-4 py-1.5 text-sm font-bold text-lava transition-transform hover:scale-105 md:hidden"
          >
            Juntos
          </button>
        </nav>
      </header>

      <nav
        aria-label="Ir a sección"
        className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            aria-label={`Ir a ${s.label}`}
            aria-current={active === s.id}
            className={`h-3 w-3 rounded-full border-2 transition-all ${
              active === s.id
                ? "scale-125 border-sol bg-sol"
                : "border-white/70 bg-white/20 hover:bg-white/60"
            }`}
          />
        ))}
      </nav>

      <main ref={setScroller} className="snap-shell">
        <Hero />
        {artists.map((a, i) => (
          <ArtistSlide key={a.id} artist={a} index={i} />
        ))}
        <Juntos />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="intro"
      className="snap-page relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: "var(--gradient-mar)" }}
    >
      {/* [IMAGEN_GRUPO_1] — foto de los 4 juntos, fondo del hero (horizontal) */}
      <div className="absolute inset-0">
        <PhotoSlot photoKey="IMAGEN_GRUPO_1" src={grupo1.url} alt="Los cuatro artistas juntos en backstage" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-oceano/85 via-oceano/70 to-turquesa/85" />
      <IslasCanarias className="pointer-events-none absolute -bottom-4 left-1/2 w-[130%] max-w-none -translate-x-1/2 text-white/10" />

      <div className="relative mx-auto w-full max-w-4xl px-6 pt-24 pb-28 text-center text-white">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase">
            <Palmera className="h-4 w-4" /> Islas Canarias
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mt-5 text-6xl leading-[0.9] sm:text-8xl">Los Rookies</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-base font-semibold text-sol sm:text-xl">
            Quevedo · La Pantera · Lucho RK · Juseph
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            “Los Rookies” es como la gente llama a lo que pasa cuando se juntan cuatro de los
            artistas urbanos más grandes salidos de las Islas Canarias. No es un grupo al uso, es
            una familia. Todo empezó en una casa normal y corriente de Gran Canaria —Los Brezos—,
            un par de habitaciones donde la amistad y las ganas de hacer música terminaron haciendo
            historia. De ahí salieron al mundo, pero el acento, el mar y el orgullo isleño no se les
            han caído nunca.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {artists.map((a) => (
              <li key={a.id}>
                <button
                  onClick={() => goTo(a.id)}
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold transition-all hover:scale-105 hover:bg-sol hover:text-lava"
                >
                  {a.name}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <button
          onClick={() => goTo("quevedo")}
          className="animate-bounce-down mt-10 inline-flex flex-col items-center gap-1 text-sm font-semibold text-white/90"
        >
          Desliza para conocerlos
          <span aria-hidden="true" className="text-2xl leading-none">
            ↓
          </span>
        </button>
      </div>
      <div className="wave-strip absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
}

function ArtistSlide({ artist, index }: { artist: (typeof artists)[number]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <section
      id={artist.id}
      className="snap-page relative flex min-h-[100svh] items-center overflow-hidden bg-arena py-24"
    >
      <IslasCanarias className="pointer-events-none absolute right-0 bottom-6 w-[60%] text-oceano/5" />
      <div
        className={`relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="mx-auto w-full max-w-sm">
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[var(--shadow-slide)]"
            style={{ background: "var(--gradient-mar)" }}
          >
            <div
              className="absolute -inset-6 -z-10 rounded-full blur-3xl opacity-40"
              style={{ background: artist.accent }}
            />
            {/* [{artist.photoKey}] — retrato vertical del artista */}
            <PhotoSlot photoKey={artist.photoKey} src={artist.photo} alt={artist.name} />
          </div>
        </Reveal>

        <div>
          <Reveal delay={1}>
            <p className="text-xs font-semibold tracking-[0.2em] text-oceano uppercase">
              {artist.realName}
            </p>
            <h2 className="font-display mt-1 text-5xl leading-none sm:text-7xl">{artist.name}</h2>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-sol px-3 py-1 text-xs font-semibold text-lava">
              <Ola className="h-3 w-6 text-lava" /> {artist.origin}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-lava/80">{artist.bio}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {artist.chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-lava/10 bg-white px-3 py-1 text-xs font-semibold text-lava/80"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={3} className="mt-5 max-w-xl">
            {artist.video ? (
              <YouTubeEmbed id={artist.video} title={`Vídeo de ${artist.name}`} />
            ) : (
              <VideoPendiente nombre={artist.name} />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Juntos() {
  return (
    <section
      id="juntos"
      className="snap-page relative min-h-[100svh] overflow-y-auto py-24"
      style={{ background: "var(--gradient-sol)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl leading-none sm:text-6xl">
            Cuando se juntan, algo va a pasar
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-lava/80">
            Todo nace en Los Brezos, esa casa de Gran Canaria que es medio mito medio cuartel
            general. Ahí, entre risas, beats y lealtad, se forjó lo que hoy la gente llama “los
            Rookies”. Cuando estos cuatro coinciden en una canción, se nota: suena a isla, a orgullo
            y a que efectivamente <strong>algo va a pasar</strong>. Su tema a cuatro bandas, “Algo va
            a pasar” (del disco El Baifo de Quevedo), es pura declaración de intenciones, y el mítico
            “Cayó la noche (Remix)” ya es historia del urbano español. ¡Chacho, qué nivel!
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal delay={1}>
            <YouTubeEmbed id="knGfe_UujWE" title="Algo va a pasar" />
          </Reveal>
          <Reveal delay={2}>
            <YouTubeEmbed id="dIrG9FB8Pnc" title="Cayó la noche (Remix)" />
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-8">
          {/* [IMAGEN_GRUPO_2] — segunda foto de los 4 juntos, imagen destacada */}
          <div className="h-56 overflow-hidden rounded-2xl sm:h-72">
            <PhotoSlot photoKey="IMAGEN_GRUPO_2" src={grupo2.url} alt="Los Rookies juntos" />
          </div>
        </Reveal>

        <ol className="mt-10 space-y-5 border-l-2 border-lava/15 pl-6">
          {timeline.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={(i % 3) as 0 | 1 | 2}>
                <span className="absolute -ml-[1.9rem] mt-1 h-3 w-3 rounded-full bg-oceano" />
                <h3 className="font-display text-lg">{t.title}</h3>
                <p className="text-sm text-lava/75">{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { key: "IMAGEN_PAREJA_1", src: pareja1.url, alt: "Quevedo y Juseph" },
            { key: "IMAGEN_PAREJA_2", src: pareja2.url, alt: "Lucho RK y La Pantera" },
            { key: "IMAGEN_PAREJA_3", src: pareja3.url, alt: "Quevedo con la camiseta de Las Palmas" },
          ].map((foto, i) => (
            <Reveal key={foto.key} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className={`overflow-hidden rounded-2xl ${i === 1 ? "h-56" : "h-44"} bg-white/60`}
              >
                <PhotoSlot photoKey={foto.key} src={foto.src} alt={foto.alt} />
              </div>
            </Reveal>
          ))}
        </div>

        <footer className="mt-14 rounded-3xl bg-lava px-6 py-10 text-center text-white/80">
          <IslasCanarias className="mx-auto w-64 text-white/25" />
          <p className="font-display mt-4 text-3xl tracking-widest text-white">Los Rookies</p>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed">
            Web de fans dedicada a la escena urbana canaria. Todos los derechos de la música,
            imágenes y marcas pertenecen a sus respectivos autores y artistas.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold">
            {artists.map((a) => (
              <li key={a.id} className="flex items-center gap-2">
                <span className="text-sol">{a.name}:</span>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-sol">
                  YouTube
                </a>
                <a href="https://open.spotify.com" target="_blank" rel="noreferrer" className="hover:text-sol">
                  Spotify
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-sol">
                  Instagram
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[11px] text-white/50">Hecho con millo, mar y baifo 🐐</p>
        </footer>
      </div>
    </section>
  );
}
