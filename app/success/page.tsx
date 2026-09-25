export default function Success() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="font-display font-semibold text-3xl text-ink">
          C'est payé. La suite se passe par email.
        </h1>
        <p className="mt-4 text-ink/80 leading-relaxed">
          Réponds à l'email de confirmation Stripe en joignant ton relevé
          bancaire (PDF ou export CSV/Excel des 3 derniers mois), ou envoie-le
          directement à{" "}
          <a
            href="mailto:moreauclement18@gmail.com"
            className="underline text-corail"
          >
            moreauclement18@gmail.com
          </a>
          . Tu reçois ta liste et tes lettres de résiliation sous 48h.
        </p>
      </div>
    </main>
  );
}
