export const profile = {
  name: 'Tyson Gentry',
  role: 'Computer Science student',
  headline: 'Hi, I’m Tyson Gentry.',
  summary:
    'I’m a Computer Science student at the University of Houston (graduating December 2027) with a strong foundation in algorithms, Python development, SQL, and Linux environments. I’m especially interested in scalable AI systems and performance-focused development, and I’ve built projects in C++, Python, and React that apply these skills in practice. I’m currently seeking a Summer 2026 Software Engineering Internship.',
  email: 'tysontgtg@gmail.com',
  phone: '(972) 765-3813',
  location: 'Dallas, TX',
  school: 'University of Houston',
  degree: 'B.S. Computer Science',
  grad: 'December 2027',
  linkedin: 'https://www.linkedin.com/in/tyson-gentry/',
  resumePath: '/resume.pdf',
}

export const projects = [
  {
    title: 'Shortest Path Graph Solver (C++)',
    meta: 'C++ · Algorithms',
    description:
      'Built a high-performance graph solver in C++ using Dijkstra’s algorithm to compute shortest paths in weighted graphs. Optimized the implementation with priority queues to achieve O(E log V) time complexity and validated correctness using a Linux-based testing suite on complex graph inputs.',
    tags: ['C++', 'Dijkstra’s Algorithm', 'Data Structures'],
  },
  {
    title: 'Knight’s Tour Backtracking Solver (C++)',
    meta: 'C++ · Algorithms',
    description:
      'Implemented a recursive backtracking algorithm in C++ to solve closed Knight’s Tour problems on a chessboard. Added support for board constraints and blocked tiles, and designed clear, dynamic output formatting to visualize valid tours.',
    tags: ['C++', 'Backtracking', 'Algorithms'],
  },
  {
    title: 'Data Pipeline Automation (Python)',
    meta: 'Python · Data Pipelines',
    description:
      'Designed a Python-based data preprocessing pipeline to automate cleaning and normalization of large CSV datasets, reducing manual preparation time by an estimated 50%. Used NumPy for validation checks to detect null values and outliers, ensuring high-quality inputs for downstream analysis workflows.',
    tags: ['Python', 'NumPy', 'Data Pipelines', 'CSV'],
  },
  {
    title: 'Portfolio Website (HTML & CSS) — In Progress',
    meta: 'HTML & CSS · Frontend',
    description:
      'Building a responsive portfolio website using HTML, CSS, and React to showcase software projects and technical experience. Leveraging Cursor AI for AI-assisted development, including code generation, refactoring, debugging, and design iteration to improve development efficiency and code quality.',
    tags: ['React', 'JavaScript', 'Frontend', 'AI-Assisted Dev'],
    highlight: true,
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'Swift'],
  },
  {
    title: 'Tools & frameworks',
    items: ['Pandas', 'NumPy', 'React', 'Git', 'GitHub', 'Linux', 'Excel', 'PowerPoint'],
  },
  {
    title: 'CS topics',
    items: ['Data Structures & Algorithms', 'Computer Security', 'Computer Organization & Architecture'],
  },
]

export const skillsBlurb =
  'I’m strongest in Python and C++, with experience in data structures, algorithms, and basic web development. I also work with modern data and frontend tools, and I’m comfortable collaborating in Linux and Git-based environments.'

export const experience = [
  {
    title: 'Walmart — Associate',
    meta: 'Desoto, TX',
    body:
      'Managed and audited inventory data for high-volume retail operations, ensuring accurate records for thousands of SKUs using proprietary scanning software. Troubleshot hardware and software inconsistencies in scanning devices, reducing processing delays and improving workflow efficiency.',
  },
  {
    title: 'Leadership & organizations',
    meta: 'STEM & CS communities',
    body:
      'Active member of multiple engineering and CS communities, including the National Society of Black Engineers, Black Men in STEM, Collegiate 100, ColorStack, and Black Male Engineering Network, building networks and participating in events that support academic and professional growth in STEM.',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
