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
    title: "EyeLeads — Premium Eyewear Store",
    slug: "eyeleads-eyewear-store",
    category: "E-Commerce / Direct-to-Consumer",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Lead Full-Stack E-Commerce Developer",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Razorpay Gateway",
      "Shiprocket Logistics",
      "MediaPipe Virtual Try-On",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://eyeleadscare.com",
    githubUrl: "https://github.com/Sujanmultani/portfolio",
    problem: "Eyewear shoppers required an intuitive, high-performance online store for browsing prescription eyeglasses, sunglasses, blue-light computer glasses, and sports frames with Virtual Try-On and seamless checkout.",
    solution: "Architected and engineered EyeLeads — a modern e-commerce storefront featuring interactive frame catalogs, prescription selection workflows, MediaPipe Virtual Try-On face tracking, Shiprocket logistics integration, and secure Razorpay payment gateway checkout.",
    result: "Shipped a production-ready D2C e-commerce platform powering direct eyewear sales, automated payment verification, and order tracking.",
    featured: true,
    order: 1,
  },
  {
    title: "EstatePortal — Real Estate Marketplace",
    slug: "estate-portal-real-estate",
    category: "Full Stack / Internship Project",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Full-Stack Web Developer (MCA Capstone Project)",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Sujanmultani/portfolio",
    problem: "Property buyers and real estate agents needed a centralized platform to explore property listings, filter by location/budget, save favorites, and manage inquiry leads.",
    solution: "Built EstatePortal as a full-stack real estate marketplace featuring dynamic property search filters, interactive location maps, buyer favorite bookmarks, and a role-based agent management dashboard.",
    result: "Developed as an MCA internship capstone project, demonstrating server-side rendering, indexed database queries, and clean responsive UI architecture.",
    featured: true,
    order: 2,
  },
  {
    title: "VELORO — Reselling Marketplace Demo",
    slug: "veloro-reselling-marketplace",
    category: "Full Stack / Concept & Demo Build",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    ],
    role: "Full-Stack Developer",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Sujanmultani/portfolio",
    problem: "Pre-owned gear sellers needed a streamlined interface to list items, negotiate prices, and communicate with prospective buyers.",
    solution: "Designed VELORO as an interactive concept demo for a peer-to-peer reselling marketplace featuring instant product search, buyer-seller messaging layout, and responsive item posting flows.",
    result: "Created as a portfolio demonstration build to showcase real-time search UI and responsive full-stack marketplace architecture.",
    featured: true,
    order: 3,
  },
];
