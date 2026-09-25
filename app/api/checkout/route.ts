import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!secretKey) {
    return NextResponse.json(
      { error: "Clé Stripe manquante côté serveur." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Fantômes — Audit complet",
              description:
                "Analyse de ton relevé bancaire, liste des abonnements inutiles et lettres de résiliation.",
            },
            unit_amount: 1900,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/`,
    });

    return NextResponse.redirect(session.url as string, 303);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible de créer le paiement. Réessaie dans un instant." },
      { status: 500 }
    );
  }
}
