export default function MentionsLegales() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-xl mx-auto text-ink/90 leading-relaxed">
      <h1 className="font-display text-2xl font-semibold text-ink mb-6">
        Mentions légales
      </h1>

      <p className="mb-4">
        Éditeur du site : [TON NOM COMPLET], entrepreneur individuel.
        <br />
        Adresse : [TON ADRESSE]
        <br />
        SIRET : [À COMPLÉTER QUAND TU AURAS TON STATUT — micro-entreprise
        recommandée, immatriculation gratuite sur autoentrepreneur.urssaf.fr]
        <br />
        Email : moreauclement18@gmail.com
      </p>

      <p className="mb-4">
        Hébergement : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
        USA.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
        Politique de confidentialité
      </h2>
      <p className="mb-4">
        Les relevés bancaires envoyés servent uniquement à établir la liste
        de tes prélèvements récurrents. Ils ne sont ni revendus ni partagés,
        et sont supprimés après traitement. [À AJUSTER selon ta pratique
        réelle une fois le traitement automatisé.]
      </p>

      <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
        Conditions générales de vente
      </h2>
      <p>
        Prestation : audit d'abonnements récurrents à partir d'un relevé
        bancaire fourni par le client, livré par email sous 48h. Prix : 19€
        TTC, paiement unique, non remboursable une fois l'audit livré. [À
        COMPLÉTER avec ta politique de remboursement en cas de non-livraison.]
      </p>
    </main>
  );
}
