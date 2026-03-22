export const profile = {
  name: 'Tyson Gentry',
  displayName: 'TysonGentry',
  folio: '01',
  role: 'Computer Science student',
  headline: 'Hi, I’m Tyson Gentry.',
  heroTagline: 'CS student at University of Houston building algorithms, data systems, and useful software.',
  summary:
    'I’m a Computer Science student at the University of Houston (graduating December 2027) with a strong foundation in algorithms, Python development, SQL, and Linux environments. I’m especially interested in scalable AI systems and performance-focused development, and I’ve built projects in C++, Python, and React that apply these skills in practice. I’m currently seeking a Summer 2026 Software Engineering Internship.',
  introTitle: 'Computer Science student specializing in algorithms & full-stack projects',
  introBody:
    'I build systems that blend solid CS fundamentals with practical engineering. I enjoy shipping coursework and personal projects that improve workflows and sharpen skills in data structures, pipelines, and modern web tooling.',
  email: 'tysontgtg@gmail.com',
  phone: '(972) 765-3813',
  location: 'Dallas, TX',
  school: 'University of Houston',
  schoolLine: 'University of Houston',
  degree: 'B.S. Computer Science',
  degreeLine: 'B.S. Computer Science',
  grad: 'December 2027',
  gradRange: '2024 — 2027',
  availability: 'Summer 2026',
  linkedin: 'https://www.linkedin.com/in/tyson-gentry/',
  /** Add your GitHub URL to show a GitHub link in the footer */
  github: '',
  resumePath: '/resume.pdf',
}

export const highlights = [
  {
    num: '01',
    before: 'Engineered ',
    strong: 'graph and backtracking solvers',
    after: ' in C++ with Linux-based test validation and O(E log V) Dijkstra implementations.',
  },
  {
    num: '02',
    before: 'Automated ',
    strong: 'large-scale CSV pipelines',
    after: ' in Python, cutting manual prep time by an estimated 50% with NumPy validation.',
  },
  {
    num: '03',
    before: 'Active in ',
    strong: 'NSBE, ColorStack, BMEN',
    after: ', and related STEM communities to grow networks and access in tech.',
  },
  {
    num: '04',
    before: 'Building a ',
    strong: 'React portfolio',
    after: ' with AI-assisted development for faster iteration and cleaner architecture.',
  },
]

export const orgPills = [
  'NSBE · UH',
  'ColorStack · UH',
  'Black Men in STEM',
  'Collegiate 100',
  'BMEN',
]

export const experienceStats = [
  { label: 'ORGANIZATIONS', value: '5+' },
  { label: 'YEARS RETAIL', value: '1+' },
  { label: 'PROJECTS', value: '4' },
  { label: 'TECH STACK', value: '6+' },
]

export const experienceTimeline = [
  {
    id: 'walmart',
    role: 'Associate',
    company: 'Walmart',
    location: 'Desoto, TX',
    dates: '2023 — Present',
    description:
      'Managed and audited inventory data for high-volume retail operations, ensuring accurate records for thousands of SKUs using proprietary scanning software. Troubleshot hardware and software inconsistencies in scanning devices, reducing processing delays and improving workflow efficiency.',
  },
  {
    id: 'stem',
    role: 'Member & participant',
    company: 'STEM & CS organizations',
    location: 'Houston, TX',
    dates: '2024 — Present',
    description:
      'Engaged with NSBE, Black Men in STEM, Collegiate 100, ColorStack, and Black Male Engineering Network—building community, attending events, and supporting academic and professional growth in engineering.',
    isSecondary: true,
  },
]

export const projects = [
  {
    title: 'Shortest Path Graph Solver',
    subtitle: 'C++ · Algorithms',
    description:
      'Built a high-performance graph solver in C++ using Dijkstra’s algorithm to compute shortest paths in weighted graphs. Optimized with priority queues for O(E log V) time and validated with a Linux-based testing suite.',
    tags: ['C++', 'Dijkstra', 'Data Structures'],
  },
  {
    title: 'Knight’s Tour Backtracking Solver',
    subtitle: 'C++ · Algorithms',
    description:
      'Implemented recursive backtracking to solve closed Knight’s Tour problems with board constraints, blocked tiles, and dynamic output for valid tours.',
    tags: ['C++', 'Backtracking'],
  },
  {
    title: 'Data Pipeline Automation',
    subtitle: 'Python · Data',
    description:
      'Python preprocessing pipeline for large CSV datasets—cleaning, normalization, and NumPy validation for nulls and outliers, improving downstream analysis quality.',
    tags: ['Python', 'NumPy', 'Pipelines'],
  },
  {
    title: 'Portfolio Website',
    subtitle: 'React · In progress',
    description:
      'Responsive portfolio using HTML, CSS, and React; Cursor AI for code generation, refactoring, and design iteration.',
    tags: ['React', 'Vite', 'AI-assisted'],
    highlight: true,
  },
]

export const expertiseIntro =
  'A blend of core CS depth and practical tooling—algorithms, systems-style thinking, data work, and user-facing engineering.'

export const expertiseGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', pct: 90 },
      { name: 'C++', pct: 86 },
      { name: 'JavaScript', pct: 78 },
      { name: 'SQL', pct: 72 },
    ],
  },
  {
    title: 'Frameworks & tools',
    items: [
      { name: 'React', pct: 82 },
      { name: 'Git / Linux', pct: 88 },
      { name: 'NumPy / Pandas', pct: 80 },
    ],
  },
  {
    title: 'CS fundamentals',
    items: [
      { name: 'Data structures & algorithms', pct: 88 },
      { name: 'Systems & architecture', pct: 74 },
    ],
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
]
