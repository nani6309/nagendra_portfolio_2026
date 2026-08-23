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
