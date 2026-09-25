import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantômes — Débusque les abonnements qu'on paie sans s'en servir",
  description:
    "Dépose ton relevé bancaire. On te dit exactement combien tu perds par an en abonnements oubliés, et on te fournit la lettre pour les résilier.",
  openGraph: {
    title: "Fantômes — Débusque les abonnements qu'on paie sans s'en servir",
    description:
      "Dépose ton relevé bancaire. On te dit exactement combien tu perds par an en abonnements oubliés.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body">{children}</body>
    </html>
  );
}
