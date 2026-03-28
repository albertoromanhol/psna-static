# Site Plan — Paróquia Nossa Senhora Aparecida (PNSA)
> Static website build plan and implementation prompt

---

## 1. Project Overview

**Client:** Paróquia Nossa Senhora Aparecida
**Diocese:** Diocese de Itabira–Coronel Fabriciano
**Location:** Rua Caetés, 495 — Bairro Iguaçu — Ipatinga/MG — CEP 35162-038
**Instagram:** [@pnsa.ipatinga](https://www.instagram.com/pnsa.ipatinga/)
**Reference site style:** https://www.paroquiadeaparecida.com.br/

The goal is a **modern, welcoming, and spiritually-resonant static website** for a Brazilian Catholic parish. The site must be in **Brazilian Portuguese**, mobile-first, fast, accessible, and maintainable without a backend.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + TypeScript | Type safety, component reuse |
| Build tool | Vite | Fast dev, optimal static output |
| Routing | React Router v6 (hash or memory router) | Static hosting compatible |
| Styling | Tailwind CSS v3 | Utility-first, easy theming |
| UI Primitives | Radix UI | Accessible dialogs, menus, accordions |
| Icons | Lucide React | Lightweight, consistent icons |
| Fonts | Google Fonts (Playfair Display + Inter) | Elegant + readable |
| Forms backend | Formspree (or Netlify Forms) | Zero-backend form handling |
| Calendar | Google Calendar embed | Parish agenda (existing Google Calendar) |
| Maps | Google Maps embed | Community locations |
| Hosting | Netlify / GitHub Pages / Vercel | Free static hosting |

---

## 3. Design System

### 3.1 Color Palette

Inspired by Marian devotion and the warmth of Brazilian Catholic aesthetics:

```
Primary (Deep Blue / Marian Blue)    — #1B3A6B  (headings, navbar, CTAs)
Primary Light                        — #2D5FA0  (hover states)
Gold / Accent                        — #C9A84C  (dividers, icons, highlights)
Gold Light                           — #F0D080  (hover on gold elements)
Background White                     — #FAFAF8  (main background)
Surface                              — #F3F0EB  (cards, sections)
Text Primary                         — #1A1A1A  (body text)
Text Muted                           — #6B6B6B  (subtitles, metadata)
Border                               — #E2DDD6  (card borders, dividers)
Red (alerts/important)               — #8B1A1A  (urgent notices)
```

### 3.2 Typography

```css
--font-heading: 'Playfair Display', Georgia, serif;   /* page titles, section headers */
--font-body:    'Inter', system-ui, sans-serif;        /* all body text, UI labels */
```

Scale (Tailwind):
- Display: `text-4xl` / `text-5xl` (hero title)
- H1: `text-3xl font-semibold`
- H2: `text-2xl font-semibold`
- H3: `text-xl font-medium`
- Body: `text-base`
- Small: `text-sm`

### 3.3 Component Tokens

```
border-radius: rounded-lg (cards), rounded-full (badges/pills)
shadow: shadow-sm (default), shadow-md (hover/elevated)
spacing unit: 4px base (Tailwind default)
max-content-width: max-w-6xl mx-auto
```

### 3.4 Overall Aesthetic

- **Warm, traditional, trustworthy** — not sterile corporate, not overly ornate
- **Generous whitespace** between sections
- Subtle gold decorative dividers (`<hr>` styled with gradient)
- Section alternation: white → warm gray → white
- Hero with a full-width photo of the church or Our Lady of Aparecida image, with a dark overlay and centered text
- Cross or religious motif as a subtle background pattern option for hero

---

## 4. Site Architecture

```
/                          → Home (Início)
/paroquia                  → Parish (hub page with links)
  /paroquia/historia       → History
  /paroquia/padroeira      → Patron Saint (Nossa Senhora Aparecida)
  /paroquia/clero          → Clergy
  /paroquia/brasao         → Coat of Arms
  /paroquia/comunidades    → Communities
  /paroquia/cpp            → CPP
  /paroquia/caep           → CAEP
  /paroquia/pastorais      → Pastorals
  /paroquia/movimentos     → Movements & Services
  /paroquia/privacidade    → Privacy Policy
/para-voce                 → For You (hub page)
  /para-voce/missas        → Mass Schedule
  /para-voce/confissoes    → Confession Schedule
  /para-voce/elos-liturgicos → Liturgical Links (PDF download)
  /para-voce/agenda        → Parish Agenda (Google Calendar embed)
  /para-voce/sacramentos/batizados     → Baptism
  /para-voce/sacramentos/eucaristia   → First Communion
  /para-voce/sacramentos/crisma       → Confirmation
  /para-voce/sacramentos/casamento    → Marriage
  /para-voce/sacramentos/taxas        → Fees & Emoluments
  /para-voce/oracao        → Prayer Request form
  /para-voce/noticias      → Submit News form
/midias-sociais            → Social Media hub page
/contato                   → Contact page
```

---

## 5. Page-by-Page Specification

### 5.1 Home (Início)

**Purpose:** First impression. Communicate identity, warmth, and the main calls to action.

**Sections (top to bottom):**

1. **Navbar** — Logo (parish name/coat of arms) left, nav links center/right, social icons top-right. Sticky on scroll. Mobile: hamburger menu (Radix NavigationMenu).
2. **Hero** — Full-width image of the church facade or Our Lady statue. Dark blue overlay. Centered text: parish name, tagline (e.g. "Bem-vindo à nossa comunidade de fé"). Two CTAs: "Horário de Missas" + "Fale Conosco".
3. **Quick Info Bar** — 3–4 horizontal cards: next mass time, confession schedule, WhatsApp link, address. Icon + label + value.
4. **About the Parish** — Two columns: left = short text about the parish history and mission; right = image of the church interior or community gathering. CTA → `/paroquia/historia`.
5. **Patron Saint Highlight** — Full-width warm section with the story/image of Nossa Senhora Aparecida. Background: deep blue with gold accent. CTA → `/paroquia/padroeira`.
6. **Sacraments Grid** — Cards for each sacrament (Baptism, First Communion, Confirmation, Marriage) with icon, name, and short description. CTA per card.
7. **Pastorals & Movements** — Horizontal scroll (mobile) or grid (desktop) of logos/names of active pastorals and movements.
8. **Parish Agenda Preview** — Embedded Google Calendar or a list of next 3–5 upcoming events. CTA → full agenda.
9. **Social Media Strip** — Instagram feed embed (or static screenshot grid) + links to WhatsApp, YouTube, Facebook.
10. **Footer** — Logo, address, phone, email, social icons, quick links, Diocese credit, Privacy Policy link.

---

### 5.2 Paróquia (Hub)

Cards grid linking to all sub-pages: História, Padroeira, Clero, Brasão, Comunidades, CPP, CAEP, Pastorais, Movimentos, Política de Privacidade.

---

### 5.3 História

Long-form text page. Optional timeline component (vertical). Images alongside text.

---

### 5.4 Padroeira

Dedicated page to Nossa Senhora Aparecida. Hero image of the statue. Devotional text, novena links, history of the apparition.

---

### 5.5 Clero

Card per priest/deacon:
- Photo (circular crop)
- Name
- Role (Pároco / Vigário / Diácono)
- Brief bio

---

### 5.6 Brasão

Image of the coat of arms with description/symbolism explanation. Clean, centered layout.

---

### 5.7 Comunidades

For each community:
- Name + history text
- Coordinator name + contact
- Google Maps embed of location

Tab or accordion component (Radix Tabs / Accordion) to switch between communities.

---

### 5.8 CPP / CAEP

Simple content pages: what it is, who participates, contact info.

---

### 5.9 Pastorais

List/grid of all pastoral ministries. Each card:
- Name of pastoral
- Short description
- Coordinator name + contact (phone/WhatsApp)
- Optional: icon or image

---

### 5.10 Movimentos e Serviço

Same pattern as Pastorais — grid of cards with name, description, coordinator contact.

---

### 5.11 Política de Privacidade

Full text of the privacy policy (V03 already provided). Structured with numbered headings. Clean text layout, max-w-3xl centered.

---

### 5.12 Para Você (Hub)

Cards grid: Missas, Confissões, Elos Litúrgicos, Agenda, Sacramentos, Pedido de Oração, Enviar Notícia.

---

### 5.13 Horário de Missas

Table or card layout listing:
- Day of week
- Time
- Community/location

Clean, scannable. Could use a Radix Table or simple styled table.

---

### 5.14 Horário das Confissões

Same pattern as mass schedule.

---

### 5.15 Elos Litúrgicos

Description + download button (PDF link from Diocese website). Could embed an iframe or direct link.

---

### 5.16 Agenda Paroquial

Google Calendar embed (`<iframe>` from the parish's Google Calendar). Full-width, responsive.

---

### 5.17 Sacramentos Pages (5 pages)

Each sacrament page (Batizados, Primeira Eucaristia, Crisma, Casamento, Taxas):
- Hero with sacrament image/icon
- What is it (brief spiritual explanation)
- Requirements/process
- How to register / contact

---

### 5.18 Faça seu Pedido de Oração

Form with:
- Name (required)
- Intention type (select: health, family, gratitude, other)
- Intention text (textarea)
- Email (optional, if they want a response)
- LGPD consent checkbox

Submit via Formspree. Confirmation message on success.

---

### 5.19 Enviei sua Notícia

Form with:
- Name (required)
- Contact (phone or email)
- News title
- News text (textarea)
- Image upload (optional — Formspree supports attachments)
- LGPD consent checkbox

Submit via Formspree.

---

### 5.20 Mídias Sociais Hub

Cards/links with icons for:
- Informativo Paroquial (PDF newsletter download or link)
- WhatsApp Channel (link to join)
- Instagram (@pnsa.ipatinga)
- Facebook
- YouTube

Each card: platform icon, name, description, and CTA button.

---

### 5.21 Contato

**Left column:**
- Contact form (Fale Conosco): name, email, subject, message, LGPD consent → Formspree
- Hours: Secretaria schedule

**Right column:**
- Address: Rua Caetés, 495, Bairro Iguaçu, Ipatinga/MG, CEP 35162-038
- Phone (General): (31) 3822-4420
- Phone (Pastorals): (31) 9 8978-3159
- Phone (Financial): (31) 9 7147-0551
- WhatsApp Business: (31) 9 9899-3276
- Email: pnsaparecidaipatinga@dioceseitabira.org.br
- Google Maps embed (parish location)

---

## 6. Key Components to Build

### 6.1 Navbar (`<Navbar>`)
- Logo (image or text with coat of arms)
- Radix `NavigationMenu` with dropdowns for Paróquia and Para Você
- Social icons row (Instagram, Facebook, YouTube, WhatsApp) — top bar or inline
- Mobile: Radix `Sheet` (drawer) or custom hamburger
- Sticky with scroll-triggered shadow

### 6.2 Footer (`<Footer>`)
- 4-column grid: Logo+tagline | Quick Links | Contact Info | Social
- Bottom bar: © year, Diocese credit, Privacy Policy link
- CNPJ: 20.963.351/0039-88

### 6.3 HubPage (`<HubPage>`)
- Reusable component: page title + description + grid of `<NavCard>` components
- `<NavCard>`: icon, title, description, link

### 6.4 SectionDivider (`<GoldDivider>`)
- Decorative gold/gradient horizontal rule
- Optional centered icon (cross, dove)

### 6.5 ContactCard (`<ContactCard>`)
- Name, role, phone, WhatsApp link, email
- Used for clergy, coordinators, secretary

### 6.6 FormBase (`<FormBase>`)
- Radix-based form fields (Label + Input/Textarea/Select)
- LGPD consent checkbox (required)
- Submit button with loading state
- Success/error toast (Radix Toast)

### 6.7 MassScheduleTable (`<ScheduleTable>`)
- Days vs. times grid
- Highlight "today" row

### 6.8 SacramentPage (`<SacramentPage>`)
- Reusable layout: hero, about, requirements, contact

---

## 7. Static Data Strategy

Since there is no CMS, content is stored as **TypeScript data files** (`src/data/`):

```
src/data/
  masses.ts         — Mass and confession schedules
  clergy.ts         — Priest/deacon info
  communities.ts    — Community data
  pastorals.ts      — Pastoral ministries
  movements.ts      — Movements and services
  sacraments.ts     — Sacrament info per type
  contacts.ts       — All contact info (single source of truth)
  nav.ts            — Navigation structure
```

This makes future updates straightforward — edit a `.ts` file, redeploy.

---

## 8. Forms & Third-party Integrations

| Feature | Integration |
|---|---|
| Contact form | Formspree (free tier: 50 submissions/month) |
| Prayer request form | Formspree |
| News submission form | Formspree |
| Parish agenda | Google Calendar iframe embed |
| Maps (communities, main address) | Google Maps iframe embed |
| Instagram feed | Elfsight widget (free tier) or static screenshots |
| Newsletter PDF | Hosted PDF file, direct download link |
| WhatsApp link | `https://wa.me/5531998993276` |

---

## 9. Accessibility & LGPD

- All forms include LGPD consent checkbox (required, not pre-checked)
- `lang="pt-BR"` on `<html>`
- All images have descriptive `alt` text
- Keyboard navigable (Radix UI handles this for primitives)
- Color contrast meets WCAG AA
- Cookie notice if analytics (e.g. Google Analytics) is added
- Privacy Policy page linked in footer and all forms

---

## 10. SEO & Meta

```html
<title>Paróquia Nossa Senhora Aparecida — Ipatinga/MG</title>
<meta name="description" content="Site oficial da Paróquia Nossa Senhora Aparecida, Diocese de Itabira–Coronel Fabriciano. Horários de missas, sacramentos, pastorais e contato." />
<meta property="og:image" content="/og-image.jpg" />
<!-- structured data: LocalBusiness / Church schema -->
```

---

## 11. Project Structure

```
psna-static/
├── public/
│   ├── images/           — church photos, clergy, patron saint
│   ├── pdfs/             — newsletters, liturgical links, fees
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/       — Navbar, Footer, Layout
│   │   ├── ui/           — Button, Card, FormBase, GoldDivider, etc.
│   │   └── sections/     — Hero, QuickInfoBar, SacramentsGrid, etc.
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── paroquia/
│   │   ├── para-voce/
│   │   ├── midias-sociais/
│   │   └── Contato.tsx
│   ├── data/             — all static content (TypeScript)
│   ├── lib/              — utilities
│   ├── styles/
│   │   └── globals.css   — Tailwind base + custom tokens
│   ├── App.tsx           — Router setup
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 12. Contact Information (Source of Truth)

```typescript
// src/data/contacts.ts
export const contacts = {
  cnpj: "20.963.351/0039-88",
  name: "Paróquia Nossa Senhora Aparecida",
  legalName: "Diocese de Itabira",
  address: {
    street: "Rua Caetés, 495",
    neighborhood: "Bairro Iguaçu",
    city: "Ipatinga",
    state: "MG",
    zip: "35162-038",
  },
  email: "pnsaparecidaipatinga@dioceseitabira.org.br",
  phones: {
    general: "(31) 3822-4420",
    pastorals: "(31) 9 8978-3159",
    financial: "(31) 9 7147-0551",
    whatsapp: "(31) 9 9899-3276",
    whatsappUrl: "https://wa.me/5531998993276",
  },
  social: {
    instagram: "https://www.instagram.com/pnsa.ipatinga/",
    facebook: "", // to be provided
    youtube:  "", // to be provided
  },
  pastor: "Pe. Marco José de Almeida",
};
```

---

## 13. Open Questions / Content Still Needed

Before development, the parish needs to provide:

- [ ] High-quality photos: church facade, interior, community gatherings, Our Lady statue
- [ ] Parish coat of arms (Brasão) — image file
- [ ] Logo (if any)
- [ ] Clergy photos + short bios (Pároco, Vigário, Diácono)
- [ ] Complete mass schedule (day, time, location)
- [ ] Complete confession schedule
- [ ] List of all communities with: name, history, coordinator name + contact, address/map link
- [ ] List of all Pastorais with: name, description, coordinator name + contact
- [ ] List of all Movimentos e Serviços with: name, description, coordinator name + contact
- [ ] Google Calendar link (for agenda embed)
- [ ] Facebook page URL
- [ ] YouTube channel URL
- [ ] WhatsApp Channel link (to be created)
- [ ] Informativo Paroquial PDFs
- [ ] Elos Litúrgicos PDF or link from Diocese
- [ ] Fees (Taxas, Espórtulas e Emolumentos) document
- [ ] CPP and CAEP descriptions
- [ ] Requirements per sacrament (Batizados, Crisma, Casamento, etc.)
- [ ] Formspree account / email to receive form submissions
- [ ] Preferred hosting platform (Netlify recommended)

---

## 14. Implementation Phases

### Phase 1 — Foundation
- Vite + React + TypeScript + Tailwind + Radix UI setup
- Design tokens (colors, fonts) in `tailwind.config.ts`
- Navbar + Footer + Layout wrapper
- Router with all routes stubbed

### Phase 2 — Core Pages
- Home page (all sections)
- Contato page (form + info + map)
- Horário de Missas and Confissões

### Phase 3 — Parish Section
- História, Padroeira, Clero, Brasão, Comunidades, CPP, CAEP, Pastorais, Movimentos

### Phase 4 — Para Você Section
- Agenda (calendar embed), Elos Litúrgicos
- All 5 Sacrament pages
- Prayer request and news submission forms

### Phase 5 — Polish & Launch
- SEO meta tags, Open Graph
- Accessibility audit
- Performance optimization (image compression, lazy loading)
- Privacy policy page
- Deploy to Netlify

---

*Generated: 2026-03-28 | Paróquia Nossa Senhora Aparecida — Ipatinga/MG*
