import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { contact } from "@/lib/content";
import { instagramUrl, site, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contacto" title={contact.title} intro={contact.intro}>
      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="flex flex-col gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent"
          >
            <span className="display text-sm tracking-[0.3em] text-accent">WhatsApp</span>
            <span className="mt-2 block text-lg">+{site.whatsapp.number}</span>
            <span className="mt-1 block text-sm text-muted">Respuesta el mismo día</span>
          </a>
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent"
          >
            <span className="display text-sm tracking-[0.3em] text-accent">Instagram</span>
            <span className="mt-2 block text-lg">@{site.instagram}</span>
            <span className="mt-1 block text-sm text-muted">Clips de alumnos y tips semanales</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent"
          >
            <span className="display text-sm tracking-[0.3em] text-accent">Correo</span>
            <span className="mt-2 block text-lg">{site.email}</span>
            <span className="mt-1 block text-sm text-muted">{site.city}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
