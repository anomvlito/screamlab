import { faq } from "@/lib/content";
import { instagramUrl, site } from "@/lib/site";

/** Datos estructurados para Google: negocio local + FAQ. */
export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: `+${site.whatsapp.number}`,
    sameAs: [instagramUrl()],
    founder: { "@type": "Person", name: "Tamara Rivas", jobTitle: "Coach de distorsiones vocales" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    priceRange: "$$",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
