// Projects list and case studies for Sujan Multani
// Parsed from Sujan's Resume and active editor context

export const projects = [
  {
    id: "eyeleads",
    title: "EyeLeads Web App",
    subtitle: "MERN Stack E-commerce & Wishlist Portal",
    shortDescription: "A modern full-stack web application featuring dynamic wishlist management, ordering schemas, contact channels, and customized administrator configuration dashboards.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    github: "Coming Soon",
    live: "Coming Soon",
    thumbnailColor: "from-emerald-600 to-teal-900",
    deviceType: "browser",
    caseStudy: {
      problem: "Standard online ordering systems lack responsive customer wishlists and modular configurations, leading to user friction and slow item management flows.",
      solution: "Constructed Express contact routing schemas, mapped a flexible Mongoose Order template, and designed reusable frontend ProductCard grids that synchronize wishlist arrays locally.",
      role: "Full Stack Engineer (Backend route design, order schema modeling, and frontend wishlist pages wiring).",
      features: [
        "Dynamic customer Wishlist pages displaying loaded items.",
        "Express order and contact routing engines connected to MongoDB.",
        "Admin control routes to update shop configuration settings in real-time."
      ],
      outcome: "Delivered a decoupled, fast-loading e-commerce prototype reducing transaction load bottlenecks by 30%."
    }
  },
  {
    id: "agroxchange",
    title: "AgroXchange Mobile App",
    subtitle: "Kotlin B2B Android Marketplace & Trading Platform",
    shortDescription: "A native Android application designed as a direct B2B marketplace connecting farmers directly with agricultural product buyers, cutting out middleman transaction fees.",
    tags: ["Kotlin", "Android SDK", "Android Studio", "Firebase", "Room DB", "REST APIs"],
    github: "Coming Soon",
    live: "Coming Soon",
    thumbnailColor: "from-green-600 to-emerald-900",
    deviceType: "phone",
    caseStudy: {
      problem: "Traditional supply chains in agriculture create massive price disparities where farmers receive low rates for their produce, and buyers pay premium markup costs due to middleman interference.",
      solution: "Developed a native Kotlin Android application with an optimized local Room Database cache, real-time Firebase syncing, and structured REST API integrations. It enables farmers to list crops with pictures and price demands directly, while allowing verified wholesalers to place bidding orders in real time.",
      role: "Lead Android App Developer (Authored UI components, structured database caching rules in Room, designed activity lifecycle state maps, and integrated Firebase notifications).",
      features: [
        "Farmer dashboard supporting crop listing uploads with dynamic photo capture.",
        "Real-time bidding engine for local buyers and wholesalers with push alerts.",
        "Local-first caching using Room DB allowing offline inventory updates."
      ],
      outcome: "Built and tested a secure Kotlin mobile application prototype, achieving a sub-100ms real-time notification sync and seamless offline operation."
    }
  },
  {
    id: "charitybridge",
    title: "CharityBridge Portal",
    subtitle: "Web Platform for NGO & Food Donation Coordination",
    shortDescription: "A web platform acting as a mediator between local NGOs, donors, restaurants, and volunteers to streamline food donation logistics and volunteer coordination.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    github: "Coming Soon",
    live: "Coming Soon",
    thumbnailColor: "from-indigo-600 to-violet-900",
    deviceType: "browser",
    caseStudy: {
      problem: "Local restaurants and individuals frequently discard high-quality excess food due to lack of standard logistics, while nearby NGOs face severe resource shortages because of coordinate delays.",
      solution: "Engineered a unified PHP-MySQL portal that allows restaurants to post available food details and quantities, while enabling local NGOs to request collections, all mapped dynamically through a responsive Tailwind CSS dashboard.",
      role: "Lead Full Stack Developer (Created database architecture, designed responsive web pages, wrote PHP CRUD scripts, and handled database validations).",
      features: [
        "NGO-donor matchboard supporting listings creation and update requests.",
        "Interactive volunteer coordination dashboard to sync pick-up runs.",
        "Secure restaurant profiles showcasing active donation histories."
      ],
      outcome: "Successfully prototyped a secure web service resolving the coordination gap, enabling local agencies to claim donations within minutes."
    }
  }
];
