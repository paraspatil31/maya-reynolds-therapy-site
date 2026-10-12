// content/site.ts
// ALL copy lives here. Words wrapped in {{double braces}} render in the script font.
// Everything is derived from Dr. Maya Reynolds' profile. TODO markers = not in profile.

export const site = {
  brand: {
    name: "Dr. Maya Reynolds",
    credential: "PsyD",
    tagline: "Licensed Clinical Psychologist",
    // wordmark: serif name + small spaced caps label (like the original logo lockup)
    wordmarkLabel: "ANXIETY & TRAUMA THERAPY",
  },

  contact: {
    address: "123th Street 45 W, Santa Monica, CA 90401", // as given in profile; verify spelling
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    phone: "TODO: add phone", // not in profile
    email: "TODO: add email", // not in profile
    bookingHref: "#contact", // TODO: replace with booking link if provided
  },

  seo: {
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Licensed clinical psychologist offering anxiety, panic, trauma (EMDR) and burnout therapy for adults in Santa Monica, CA. In-person sessions and secure telehealth across California.",
    keywords: [
      "anxiety therapy Santa Monica",
      "trauma therapy Santa Monica",
      "EMDR Santa Monica",
      "burnout therapy Santa Monica",
      "clinical psychologist Santa Monica CA",
      "telehealth therapy California",
    ],
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Methods", href: "#methods" },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  hero: {
    eyebrow: "IN-PERSON IN SANTA MONICA & ONLINE ACROSS CALIFORNIA",
    // H1 contains specialty + location
    h1: "Anxiety & trauma therapy in Santa Monica to help you feel {{grounded}}.",
    subtext:
      "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist helping thoughtful, high-achieving adults move from overwhelmed and on edge to rested, regulated and reconnected.",
    cta: { label: "BOOK AN APPOINTMENT", href: "#contact" },
  },

  intro: {
    h2: "You look like you're coping. Inside, you're exhausted.",
    lead: "THERAPY FOR ADULTS WHO SEEM FINE ON THE OUTSIDE BUT ARE ALWAYS BRACING FOR SOMETHING TO GO WRONG.",
    paragraphs: [
      "Many of the people I see in my Santa Monica practice are capable, self-aware and driven. They're also stuck in overthinking, carrying tension in their bodies, sleeping poorly, or quietly worrying all the time.",
      "Others are living with the impact of earlier experiences that still shape their relationships, confidence and sense of safety. Whatever brought you here, you don't have to keep pushing through it alone. I offer a warm, collaborative and grounded space to start untangling it.",
    ],
  },

  whoIHelp: {
    heading: "Who I {{help}}",
    cards: [
      {
        title: "Overwhelmed High-Achievers",
        text: "Feeling anxious, tense or constantly on edge despite looking successful? I help you quiet the worry and find steadier ground.",
      },
      {
        title: "Adults Healing from Trauma",
        text: "Whether it was a single event or long-standing patterns from childhood, relationships or chronic stress, we move at a pace that feels safe.",
      },
      {
        title: "Entrepreneurs, Creatives & Professionals",
        text: "After years of pushing through stress, it's easy to feel disconnected from yourself. Therapy is a place to slow down and reconnect.",
      },
    ],
  },

  banner: {
    quote:
      "You deserve a space to slow down. {{em:Healing doesn't have to be one more thing you push through.}}",
  },

  expertise: {
    heading: "Areas of {{expertise}}",
    items: [
      "Anxiety",
      "Panic",
      "Trauma",
      "Complex Trauma",
      "Professional Burnout",
      "Perfectionism",
      "Chronic Stress",
      "Overthinking",
      "Sleep Difficulties",
      "Emotional Regulation",
    ],
    more: "...AND MORE.",
  },

  about: {
    id: "about",
    eyebrow: "HOW I WORK",
    h2: "Practical tools, with real depth.",
    lead: "STRUCTURED ENOUGH TO FEEL SUPPORTIVE, WITH ROOM FOR REFLECTION.",
    col1: [
      "I'm a licensed clinical psychologist based in Santa Monica, California. My approach is warm, collaborative and grounded, and I believe therapy works best when you feel respected, understood and actively involved.",
      "My goal isn't only symptom relief. It's helping you build insight, resilience and a stronger relationship with yourself over time.",
    ],
    col2: [
      "I integrate evidence-based methods, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques, so we can address both the emotional and physiological sides of what you're experiencing.",
      "If you want a therapist who combines practical tools with depth-oriented work, and who understands life in a fast-paced environment, I may be a good fit.",
    ],
    link: { label: "MEET DR. REYNOLDS", href: "#about" },
    image: {
      src: "/images/maya/maya.jpeg",
      alt: "Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
    },
  },

  split: {
    h2: "Working through what happened & building {{steadier}} days ahead.",
    // keep the "&" rendered in script like the original
    image: {
      src: "/images/split.webp",
      alt: "Calm Santa Monica coastline in soft morning light",
    },
  },

  services: {
    id: "specialties",
    heading: "My {{specialties}} include...",
    items: [
      {
        title: "Anxiety & Panic Therapy",
        text: "Constant worry, racing thoughts, tension in the body and difficulty sleeping can make you feel like you're always bracing. Using CBT, mindfulness and body-oriented techniques, we work on both the mind and the body so anxiety loosens its grip.",
        cta: "LEARN MORE",
      },
      {
        title: "Trauma Therapy & EMDR",
        text: "I work with adults facing single-incident trauma as well as complex, long-standing patterns. With EMDR and careful pacing, we focus on safety, stabilization and helping you feel regulated in daily life, not just in session.",
        cta: "LEARN MORE",
      },
      {
        title: "Burnout & Perfectionism Therapy",
        text: "High internal pressure and years of pushing through can leave you exhausted and disconnected. Therapy becomes a place to slow down and build more sustainable ways of living and working.",
        cta: "LEARN MORE",
      },
    ],
    // 4th grid cell (original has 4 items; we have 3 services)
    fourthCell: {
      title: "Not sure where to start?",
      text: "Reach out and we can talk about whether we're a good fit.",
      cta: { label: "GET IN TOUCH", href: "#contact" },
    },
  },

  office: {
    id: "office",
    eyebrow: "OUR OFFICE",
    h2: "A calm space in {{Santa Monica}}.",
    paragraphs: [
      "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
      "Clients often tell me the space itself helps them feel more at ease the moment they arrive. Whether it's your first session or your fiftieth, it's meant to be a place where you can exhale.",
      "Prefer to meet from home? I also offer secure telehealth sessions for clients located in California.",
    ],
    details: [
      { label: "Location", value: "123th Street 45 W, Santa Monica, CA 90401" },
      { label: "Session formats", value: "In-person and secure telehealth (California)" },
      { label: "What to expect", value: "Private, quiet, natural light, comfortable seating" },
    ],
    images: [
      {
        src: "/images/maya/office1.jpeg",
        alt: "Therapy office in Santa Monica with tall windows, sheer curtains, exposed brick and a cream armchair",
      },
      {
        src: "/images/maya/office2.jpeg",
        alt: "Comfortable counseling room with gray sofa, glass coffee table, plant and bookshelf",
      },
      // optional 3rd: a cropped detail from office1 (armchair + window light), same file, different object-position
      {
        src: "/images/maya/office1.jpeg",
        alt: "Natural light falling across the seating area of Dr. Reynolds' Santa Monica therapy office",
        crop: true,
      },
    ],
  },

  faqs: {
    id: "faqs",
    heading: "Frequently asked {{questions}}",
    items: [
      {
        q: "Do you offer in-person therapy in Santa Monica?",
        a: "Yes. I see clients in person at my private, quiet office in Santa Monica, California.",
      },
      {
        q: "Do you offer online therapy?",
        a: "Yes. I offer secure telehealth sessions for clients located in California.",
      },
      {
        q: "What does anxiety therapy with you look like?",
        a: "Sessions are structured enough to feel supportive, with space for reflection. I draw on CBT, mindfulness-based practices and body-oriented techniques to address both the emotional and physical sides of anxiety.",
      },
      {
        q: "How do you approach trauma therapy and EMDR?",
        a: "I work with single-incident and complex, long-standing trauma. The pace is careful, with an emphasis on safety and stabilization, using evidence-based methods including EMDR.",
      },
      {
        q: "I seem fine on the outside. Is therapy right for me?",
        a: "Many of my clients feel functional on the outside while quietly struggling with worry, tension, poor sleep or burnout. If that sounds familiar, therapy can help.",
      },
      {
        q: "How do I get started, and what are your fees?",
        a: "TODO: fees, insurance and booking details are not in the profile. Suggested placeholder: Please reach out through the contact form to ask about availability and current rates.",
      },
    ],
  },

  cta: {
    id: "contact",
    eyebrow: "SCHEDULE AN APPOINTMENT",
    h2: "Find a therapist who is the right fit for {{you}}.",
    paragraphs: [
      "Reaching out is a big step. Therapy works best when you feel respected, understood and involved, and I'd be glad to talk about whether my approach fits what you need.",
      "Click the button below to schedule an appointment.",
    ],
    button: { label: "BOOK NOW", href: "#contact" },
  },

  footer: {
    blurb:
      "Dr. Maya Reynolds, PsyD. Licensed clinical psychologist offering anxiety, trauma and burnout therapy in Santa Monica, CA, and telehealth across California.",
    copyright: "© Dr. Maya Reynolds, PsyD. All rights reserved.",
  },
} as const;
