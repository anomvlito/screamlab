import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { contact } from "@/lib/content";
import { instagramUrl, site, whatsappUrl } from "@/lib/site";

function formatPhone(digits: string): string {
  // 56939592909 -> +56 9 3959 2909
  const m = digits.match(/^(\d{2})(\d)(\d{4})(\d{4})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]} ${m[4]}` : `+${digits}`;
}

export function Contact() {
  const channels = [
    { label: "WhatsApp", value: formatPhone(site.whatsapp.number), note: "Respuesta el mismo día", href: whatsappUrl() },
    { label: "Instagram", value: `@${site.instagram}`, note: "Clips de alumnos y tips", href: instagramUrl() },
    { label: "Correo", value: site.email, note: site.city, href: `mailto:${site.email}` },
  ];

  return (
    <Section id="contacto" eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro} tone="raised">
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <ContactForm />
        <div className="flex flex-col gap-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group rounded-card border border-line bg-bg p-6 transition hover:border-accent"
            >
              <span className="label text-[0.7rem] text-accent">{c.label}</span>
              <span className="display mt-2 block break-all text-step-2 transition group-hover:grad-text">{c.value}</span>
              <span className="mt-1 block text-step--1 text-muted">{c.note}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
