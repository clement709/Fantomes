export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col justify-center px-6 py-16 max-w-xl mx-auto w-full">
        <h1 className="font-display font-semibold text-[2.1rem] leading-[1.15] text-ink">
          Tu paies sûrement des abonnements que tu as oubliés.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          En moyenne, un relevé bancaire cache entre 180€ et 400€ par an de
          prélèvements qu'on ne regarde plus jamais : un essai jamais résilié,
          un service remplacé, une option activée une fois. Dépose ton
          relevé, on retrouve tout.
        </p>

        <div className="mt-9 space-y-5">
          <div className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-corail shrink-0" />
            <p className="text-ink/90">
              La liste complète de tes prélèvements récurrents, classée par
              ce qu'ils te coûtent vraiment sur un an.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-corail shrink-0" />
            <p className="text-ink/90">
              Une lettre de résiliation prête à envoyer pour chacun d'entre
              eux.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-corail shrink-0" />
            <p className="text-ink/90">
              Le total que tu récupères sur l'année, en un coup d'œil.
            </p>
          </div>
        </div>

        <form action="/api/checkout" method="POST" className="mt-10">
          <button
            type="submit"
            className="w-full rounded-xl bg-corail text-paper font-semibold text-lg py-4 active:scale-[0.98] transition-transform"
          >
            Débusquer mes abonnements — 19€
          </button>
          <p className="mt-3 text-center text-sm text-ink/60">
            Paiement unique. Réponse sous 48h par email.
          </p>
        </form>
      </section>

      <footer className="px-6 py-6 text-center text-xs text-ink/50">
        Fantômes — <a href="/mentions-legales" className="underline">Mentions légales</a>
      </footer>
    </main>
  );
}
