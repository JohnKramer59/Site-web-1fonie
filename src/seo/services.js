export const SERVICES = [
  { slug: "standard-telephonique", name: "Standard téléphonique (VoIP / Centrex)" },
  { slug: "maintenance-informatique", name: "Maintenance informatique (Infogérance)" },
  { slug: "telephonie-mobile", name: "Téléphonie mobile pro" },
  { slug: "internet-fibre", name: "Internet fibre & Réseau d’entreprise" },
];
export const SERVICE_MAP = Object.fromEntries(SERVICES.map(s => [s.slug, s]));
