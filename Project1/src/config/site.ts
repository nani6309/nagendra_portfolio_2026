/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Change text without touching a
 * single component. Layout is driven by geometry (see `tokens.ts`), never by
 * the length of the content that happens to be sitting in it today.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Index of the character in `displayWord` that the face illustration replaces. */
  faceLetterIndex: 5, // P-O-R-T-F-[O]-L-I-O

  eyebrow: 'FULL STACK DEVELOPER',
  year: '2026',

  firstName: 'NAGENDRA KUMAR',
  /**
   * The signature form the hero reveals as the visitor starts scrolling —
   * deliberately separate from `firstName`, which the introduction, the poster
   * and the contact note all use.
   */
  signatureName: 'P N KUMAR',
  /** Leave empty until a surname is supplied — the black strip adapts either way. */
  lastName: 'PALLA',

  /**
   * An invitation, not a job application. "Available to talk" rather than
   * "available for hire" is the whole difference between a personal site and
   * a job board, and it is carried by four words.
   */
  connect: {
    status: 'is available to talk',
    cta: "Let's connect",
    /** Points at the CONTACT section. Swap for a mailto: if you prefer. */
    href: '#contact',
  },

  resume: {
    url: '/resume',
    pdfPath: '/assets/skills/Palla_NagendraKumar_Resume.pdf.pdf',
    filename: 'Palla_NagendraKumar_Resume.pdf',
    title: 'NAGENDRA KUMAR — RESUME',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm NAGENDRA.",
    paragraphs: [
      'I build digital products that are not just functional, but fast, scalable, and meaningful.',
      "I've worked across frontend, backend, APIs, databases, and cloud technologies to turn ideas into reliable, user-focused applications.",
      "Right now, I'm focused on building full-stack experiences that are seamless, efficient, and powerful—from the first line of code to the final user interaction.",
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'Bachelor of Computer Science',
        detail: 'SRI HARI DEGREE COLLEGE, AP | 2020 – 2023',
      },
      {
        degree: 'Board of Intermediate Education',
        detail: 'Sri Y.S.R.M Junior College, AP | 2018 – 2020',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',
    /**
     * Three columns, two rows, in file order as supplied.
     *
     * Each file carries its own background treatment and it is preserved
     * exactly: Photoshop, Premiere Pro, Claude and Procreate are rounded
     * tiles, Figma is a square black tile, Blender is a bare glyph. Nothing
     * is recoloured, restyled or given an invented container — the only
     * processing was trimming the flat padding the export files carried, so
     * they sit on paper instead of in a white box.
     *
     * `scale` is an optical nudge, not a resize: a bare glyph and a filled
     * tile of identical height do not read as the same size.
     */
    items: [
      { label: 'Java & Spring Boot', short: 'Java', src: '/assets/skills/java-springboot.png', scale: 1 },
      { label: 'HTML, CSS & JavaScript', short: 'Web', src: '/assets/skills/html-css-js.png', scale: 1 },
      { label: 'MySQL, Supabase, MongoDB', short: 'DB', src: '/assets/skills/databases.png', scale: 1 },
      { label: 'Git & Docker', short: 'DevOps', src: '/assets/skills/git-docker.png', scale: 1 },
      { label: 'Claude Code', short: 'Claude', src: '/assets/skills/claude.png', scale: 1 },
      { label: 'CI/CD & Postman', short: 'API', src: '/assets/skills/cicd-postman.png', scale: 1 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  /**
   * THE STU — abbreviated on purpose. Do not expand it.
   *
   * Every angle, drop, shadow weight and slant of handwriting is a value here
   * rather than a random seed, because randomness reads as a bug and a
   * decision reads as a hand. Rotations follow the brief: -5 / +1.2 / +4.
   */
  studio: {
    heading: 'THE JOURNEY',
    items: [
      {
        quote:
          'Started my Java Full Stack journey in 2023—proudly stepping up from a Computer Science Degree background.',
        author: '2023 • Java & CS Degree',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: 'https://github.com/nani6309' as string | null,
      },
      {
        quote:
          'Mastered full-stack web tech and launched my freelance development business in 2024.',
        author: '2024 • Freelance & Mastery',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '50% 50%',
        href: 'https://masterrweb.vercel.app/' as string | null,
      },
      {
        quote:
          'Joined Wipro Limited in 2025 as an SDET Engineer, driving test automation and enterprise reliability.',
        author: '2025 • Wipro Limited (SDET)',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: 'https://www.linkedin.com/in/nagendra-kumar-palla-579220411' as string | null,
      },
    ],
  },

  experience: {
    heading: 'EXPERIENCE',
    items: [
      { period: '2024 – Present', role: 'FULL STACK DEVELOPER ', company: 'Freelance' },
      { period: '2025 – Present', role: 'SDET', company: 'WIPRO PRIVATE LTD' },
    ],
  },

  /**
   * FREELANCE SHOWCASE — real-time web projects delivered to real clients.
   *
   * Every project here is live, in production, and earning revenue for its
   * owner. The section visualises them with live previews and categorises them
   * by industry so recruiters see breadth. The 5/5 client rating is carried
   * on the section, not on each card, because the consistency is the point.
   */
  freelance: {
    heading: 'MASTER WEB FREELANCE PROJECTS',
    sub: 'Real-time web projects delivered as freelance — built by understanding business needs, delivered at reasonable prices, and rated ★★★★★ by every client.',
    badge: '11 PROJECTS • 5/5 CLIENT RATING',
    categories: ['All', 'Restaurants', 'Education', 'E-Commerce', 'Photography', 'Events'] as const,
    projects: [
      {
        name: 'Hyderabad Mandi',
        category: 'Restaurants',
        href: 'https://hyderabadmandi.vercel.app/',
        description: 'Authentic Hyderabadi restaurant with online ordering, menu showcase, and reservation system.',
        tags: ['Next.js', 'Vercel', 'Responsive'],
        color: '#C4953A',
        image: '/assets/freelance/hyderabad-mandi.png',
      },
      {
        name: 'Thanjavur Kitchen',
        category: 'Restaurants',
        href: 'https://thanjavurkitchen.netlify.app/',
        description: 'South Indian restaurant with dual sites — customer-facing menu and internal operations dashboard.',
        tags: ['React', 'Netlify', 'Multi-site'],
        color: '#B93E3E',
        image: '/assets/freelance/thanjavur-kitchen.png',
      },
      {
        name: 'Visishta High School',
        category: 'Education',
        href: 'https://visishtaschool.com/',
        description: 'Full school ecosystem with public site, parent dashboard, and admin portal for attendance and grades.',
        tags: ['Full Stack', 'Auth', 'Dashboard'],
        color: '#3B82C4',
        image: '/assets/freelance/visishta-school.png',
      },
      {
        name: 'Gladia Brewery',
        category: 'Restaurants',
        href: 'https://www.gladiabrewery.com/',
        description: 'Premium craft brewery with immersive brand experience, events calendar, and reservation flow.',
        tags: ['Branding', 'Animation', 'Premium'],
        color: '#D4A853',
        image: '/assets/freelance/gladia-brewery.png',
      },
      {
        name: 'Kabooz',
        category: 'Restaurants',
        href: 'https://kabooz.in/',
        description: 'Trendy restaurant with dynamic menu, online ordering, and loyalty program integration.',
        tags: ['React', 'UI/UX', 'Ordering'],
        color: '#E85D4A',
        image: '/assets/freelance/kabooz.png',
      },
      {
        name: 'Biryani Bhojanam',
        category: 'Restaurants',
        href: 'https://biryanibhojanam.com/',
        description: 'Speciality biryani house with rich visual storytelling, menu system, and delivery integration.',
        tags: ['Branding', 'SEO', 'Full Stack'],
        color: '#C4742A',
        image: '/assets/freelance/biryani-bhojanam.png',
      },
      {
        name: 'Saptha Knots',
        category: 'Events',
        href: 'https://saptha-knots-frontend.vercel.app/',
        description: 'Wedding planning platform with galleries, vendor management, and client booking system.',
        tags: ['Vercel', 'Gallery', 'Booking'],
        color: '#C2728A',
        image: '/assets/freelance/saptha-knots.png',
      },
      {
        name: 'New Tirumala Sarees',
        category: 'E-Commerce',
        href: 'https://newtirumalasareecenter.vercel.app/',
        description: 'Traditional saree e-commerce with product catalogue, size guide, and WhatsApp ordering.',
        tags: ['E-Commerce', 'Catalogue', 'Vercel'],
        color: '#9B3A8F',
        image: '/assets/freelance/tirumala-sarees.png',
      },
      {
        name: 'Vasavi General Store',
        category: 'E-Commerce',
        href: 'https://vasavi-general-store.vercel.app/',
        description: 'Neighbourhood grocery store brought online with product search, cart, and delivery scheduling.',
        tags: ['E-Commerce', 'Cart', 'Search'],
        color: '#3AA85A',
        image: '/assets/freelance/vasavi-store.png',
      },
      {
        name: 'PlutoGraphy',
        category: 'Photography',
        href: 'https://plutography.in/',
        description: 'Professional photography studio with cinematic portfolio galleries and booking system.',
        tags: ['Portfolio', 'Gallery', 'Booking'],
        color: '#4A4A5A',
        image: '/assets/freelance/plutography.png',
      },
      {
        name: 'Zero Watts Photography',
        category: 'Photography',
        href: 'https://www.zerowattsphotography.com/',
        description: 'Creative photography brand with artistic portfolio, package pricing, and client testimonials.',
        tags: ['Branding', 'Portfolio', 'Creative'],
        color: '#2A2A3A',
        image: '/assets/freelance/zerowatts.png',
      },
    ] as const,
  },

  /**
   * The last page. The giant heading IS the button — there is no separate
   * rectangular CTA, the typography is the interface.
   *
   * `href: null` means the CTA acknowledges the click (the heading flips to
   * `acknowledged` for a beat) but goes nowhere yet. Set a mailto:, a Calendly
   * URL, or a contact route and it becomes a real link with the same
   * behaviour. Same rule for the social row: null renders as a muted label
   * holding the composition; a real URL turns it into a link. No invented
   * destinations.
   */
  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an idea, a project, or simply want to say hello?',
    /** The ask opens Gmail Web composer directly. */
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nagvenky57@gmail.com',
    marquee: ['NAGENDRA', 'FULL STACK', 'SDET'],
    /**
     * URLs are the canonical profile paths — the `igsi` and `utm_source=share_via`
     * parameters the share sheet appends are tracking artefacts, not part of the
     * address, and they resolve identically without them.
     *
     * A `null` href renders as a muted label rather than a link, so add Behance
     * or a portfolio here the moment you have one and it lights up on its own.
     */
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagendra-kumar-palla-579220411' as string | null },
      { label: 'Instagram', href: 'https://www.instagram.com/mas.terweb/' as string | null },
      { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nagvenky57@gmail.com' as string | null },
    ],
  },
} as const

export type Site = typeof site
