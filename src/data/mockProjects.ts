export interface ProjectData {
  title: string;
  slug: string;
  category: string;
  year: number;
  coverImage: string;
  gallery: string[];
  role: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  problem: string;
  solution: string;
  result: string;
  featured: boolean;
  order: number;
}

export const MOCK_PROJECTS: ProjectData[] = [
  {
    title: "Eye Leads Care Platform",
    slug: "eye-leads-care",
    category: "Full Stack Web Platform & CRM",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Lead Full-Stack Architect & Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "REST APIs"],
    liveUrl: "https://eyeleadscare.com",
    githubUrl: "https://github.com/Sujanmultani/portfolio",
    problem: "Healthcare providers and eye care practices required an optimized digital platform to capture patient inquiries, streamline appointment leads, and deliver a modern user experience.",
    solution: "Engineered and deployed Eye Leads Care — a high-performance web application featuring responsive patient booking flows, automated lead routing, and strict SEO optimization.",
    result: "Significantly accelerated patient conversion rates, minimized inquiry latency, and established a trusted digital presence for eye care services.",
    featured: true,
    order: 1,
  },
  {
    title: "Chronos Algorithmic Trading Engine",
    slug: "chronos-trading-engine",
    category: "Distributed Systems / Backend",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Backend & Systems Specialist",
    techStack: ["Go", "Node.js", "Redis", "MongoDB", "Next.js", "Docker", "gRPC"],
    liveUrl: "https://example.com/chronos",
    githubUrl: "https://github.com/example/chronos-engine",
    problem: "Legacy financial order execution platforms suffered from order queue backpressure and microsecond drift during volatile market opening windows.",
    solution: "Designed a lock-free event-driven order matching pipeline with distributed Redis lock queues and a responsive real-time audit dashboard built on Next.js.",
    result: "Achieved deterministic sub-5ms order routing with 99.999% availability across high-frequency market simulations.",
    featured: true,
    order: 2,
  },
  {
    title: "Kintsugi Editorial Publishing Engine",
    slug: "kintsugi-editorial-engine",
    category: "Full Stack / CMS",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Lead Frontend & Product Designer",
    techStack: ["Next.js", "GSAP ScrollTrigger", "Mongoose", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/kintsugi",
    githubUrl: "https://github.com/example/kintsugi-cms",
    problem: "Traditional headless publishing platforms sacrificed rich typography and immersive custom page layouts for standardized grid templates.",
    solution: "Developed a block-based editorial engine empowering authors to compose interactive 3D layout flows, custom scroll triggers, and fluid typography without touch of code.",
    result: "Increased reader engagement duration by 180% and earned recognition on Awwwards Site of the Day.",
    featured: true,
    order: 3,
  },
  {
    title: "Vortex Spatial Audio Workspace",
    slug: "vortex-spatial-audio",
    category: "Web Audio / Frontend",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Creative Technologist",
    techStack: ["Web Audio API", "Three.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/vortex",
    githubUrl: "https://github.com/example/vortex-audio",
    problem: "Remote creative music producers needed a collaborative browser environment to position spatial sound sources in interactive 3D coordinates.",
    solution: "Built a hardware-accelerated binaural spatializer using Web Audio Nodes combined with a minimalist ink-and-copper user interface.",
    result: "Adopted by 15,000+ indie audio engineers with zero latency buffer underruns across modern web browsers.",
    featured: false,
    order: 4,
  },
  {
    title: "Helios Energy Grid Dashboard",
    slug: "helios-energy-grid",
    category: "Full Stack / IoT Data",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Full Stack Developer",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Chart.js"],
    liveUrl: "https://example.com/helios",
    githubUrl: "https://github.com/example/helios-grid",
    problem: "Municipal solar installations struggled with fragmented data across isolated inverter systems and legacy hardware controllers.",
    solution: "Created an aggregated real-time monitoring platform that normalizes disparate telemetry models into a unified ink-styled command dashboard.",
    result: "Identified micro-outages 4x faster and optimized grid battery dispatch strategy for peak load shedding.",
    featured: false,
    order: 5,
  }
];
