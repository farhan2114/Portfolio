// Mohammed Farhan - Verified Portfolio Data Model
export const PROFILE = {
  name: "Mohammed Farhan",
  title: "Software Engineer / Full-Stack Developer",
  tagline: "Building software that thinks, connects, and scales.",
  bio: "Software Engineer with multi-disciplinary experience across full-stack systems, backend engineering, automated pipelines, AI/ML evaluation, cloud technologies, and software reliability. Passionate about engineering clean, performant, and resilient digital products.",
  location: "India",
  status: "AVAILABLE FOR ROLES",
  socials: {
    github: "https://github.com/mohammedfarhan",
    linkedin: "https://linkedin.com/in/mohammedfarhan",
    email: "mohammedfarhan.dev@gmail.com"
  }
};

export const PROJECTS = [
  {
    id: "task-management-platform",
    title: "Full-Stack Task & Team Management Platform",
    subtitle: "Multi-tier collaborative workflow system with granular role controls and real-time state management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    category: "Full-Stack / Systems",
    summary: "High-performance team coordination platform engineered with reusable UI components, centralized REST authentication middleware, and robust DB schema validation.",
    flowType: "taskFlow",
    caseStudy: {
      problem: "Distributed teams need deterministic state tracking, fine-grained access control, and low-latency API interactions without UI synchronization lag.",
      approach: "Built a modular multi-tier application separating frontend view models from scalable backend services, implementing JWT-based role authentication and sanitized schema validation.",
      architecture: [
        "React SPA with modular component hierarchy and custom state hooks.",
        "Express RESTful API routing with rate-limiting & authorization middleware.",
        "MongoDB document database with optimized indexing and aggregation pipelines."
      ],
      implementation: "Created reusable input validation routines, centralized error-handling middleware, and automated REST API validation scripts for endpoint verification.",
      testing: "Functional testing across user roles, payload boundary testing, and regression suite execution for critical CRUD pathways.",
      outcome: "Delivered a clean, responsive workflow engine supporting seamless task assignments, status tracking, and deterministic data flow."
    }
  },
  {
    id: "microservices-analytics",
    title: "Customer Analytics & Order Management Microservices",
    subtitle: "Decoupled microservice architecture for order processing and query profiling.",
    tech: ["Python", "Flask", "REST APIs", "PostgreSQL", "SQL", "JWT", "Microservices", "Docker"],
    category: "Backend / Microservices",
    summary: "Decoupled backend infrastructure separating analytics from transactional workflows using Flask REST microservices, PostgreSQL indexing, and JWT authentication.",
    flowType: "microservicesFlow",
    caseStudy: {
      problem: "Monolithic order management systems suffer from database query bottlenecks during analytical processing.",
      approach: "Designed decoupled microservice modules for customer workflows and transactional orders, communicating over structured REST APIs with optimized PostgreSQL query profiling.",
      architecture: [
        "Client App -> API Gateway -> Dedicated Flask Services -> Dedicated PostgreSQL DB.",
        "JWT-based session authentication with strict input sanitization.",
        "SQL query profiling and index tuning for high-throughput reads."
      ],
      implementation: "Implemented robust exception handling, REST endpoint integration tests, and structured JSON logging for static and dynamic issue investigation.",
      testing: "API integration testing, data validation routines, and SQL query profiling under concurrent request patterns.",
      outcome: "Ensured isolated fault domains and clean data isolation across order processing pipelines."
    }
  },
  {
    id: "data-analytics-automation",
    title: "Engineering Data Analytics & AI Automation Platform",
    subtitle: "High-throughput data processing engine with diagnostic workflows and system KPI tracking.",
    tech: ["Python", "C++", "Data Processing", "Automation", "Analytics", "System KPIs"],
    category: "Automation / Systems",
    summary: "Automated diagnostic engine combining C++ performance routines with Python data pipelines for system runtime verification and data quality validation.",
    flowType: "pipelineFlow",
    caseStudy: {
      problem: "Complex engineering systems generate noisy log streams and fragmented metrics, hindering root-cause analysis.",
      approach: "Engineered reusable automation utilities and data-quality validation routines that parse runtime behavior, extract key performance metrics, and generate diagnostic signals.",
      architecture: [
        "Data Stream -> Parsing & Preprocessing (C++) -> Validation Engine (Python) -> Analytics Dashboard."
      ],
      implementation: "Built static log parsing, dynamic data-flow analysis, and automated quality check scripts for monitoring performance trends.",
      testing: "Data quality validation checks, automated regression scripts, and log verification workflows under boundary conditions.",
      outcome: "Streamlined diagnostic routines, accelerating root-cause analysis for runtime system anomalies."
    }
  },
  {
    id: "document-intelligence-rag",
    title: "Multi-LLM Document Intelligence Framework",
    subtitle: "Semantic extraction and document question-answering pipeline using RAG architecture.",
    tech: ["LLMs", "RAG", "Embeddings", "Vector Search", "Semantic Search", "Python", "PyTorch"],
    category: "AI / ML Engineering",
    summary: "RAG-driven document processing framework engineered for semantic chunking, vector retrieval, evaluation, and precise context-aware question answering.",
    flowType: "ragFlow",
    caseStudy: {
      problem: "Large technical documentation sets present information retrieval challenges for standard keyword search.",
      approach: "Constructed an automated RAG pipeline with semantic chunking, embedding generation, vector similarity search, and structured LLM prompt context injection.",
      architecture: [
        "Document -> Text Chunking -> Vector Embedding -> Indexing & Vector Search -> LLM Prompt -> Grounded Answer."
      ],
      implementation: "Developed evaluation workflows for response fidelity, chunk overlap tuning, and retrieval recall analysis.",
      testing: "Failure-pattern analysis, semantic context verification, and automated evaluation logging for consistency.",
      outcome: "Self-initiated framework proving accurate document synthesis and evaluation documentation."
    }
  },
  {
    id: "phishing-detection-ml",
    title: "Phishing Website Detection Using ML/DL",
    subtitle: "Multi-model threat classification system based on structural and lexical URL features.",
    tech: ["Machine Learning", "Deep Learning", "PyTorch", "Python", "Feature Analysis", "NLP"],
    category: "AI / ML & Security",
    summary: "Research-backed security classifier analyzing URL features, SSL attributes, and structural patterns to detect malicious phishing websites (Published at ICCET 2026).",
    flowType: "mlFlow",
    caseStudy: {
      problem: "Phishing attacks rapidly evolve, bypassing traditional static blocklists and domain blacklists.",
      approach: "Formulated a multi-model ML/DL architecture extracting structural features, lexical indicators, and domain trust telemetry for predictive threat classification.",
      architecture: [
        "URL Input -> Feature Extraction Pipeline -> Model Ensemble (ML/DL) -> Risk Classification Output."
      ],
      implementation: "Processed complex feature sets, trained PyTorch and scikit-learn classifiers, and performed extensive model behavior and failure-pattern evaluation.",
      testing: "Cross-validation evaluation, ROC-AUC analysis, and dataset imbalance verification.",
      outcome: "Peer-reviewed research publication: 'Multi-Model Approach for Phishing Website Detection Using ML and DL Techniques' (ICCET 2026)."
    }
  },
  {
    id: "blockchain-document-verification",
    title: "Blockchain-Based Secure Document Verification System",
    subtitle: "Decentralized document integrity verification utilizing cryptographic hashing and smart contracts.",
    tech: ["JavaScript", "Web3", "Cryptographic Hashing", "Smart Contracts", "Node.js"],
    category: "Blockchain / Security",
    summary: "Immutable document verification protocol generating SHA-256 cryptographic digests verified against decentralized smart contracts.",
    flowType: "blockchainFlow",
    caseStudy: {
      problem: "Centralized document verification systems are susceptible to single-point tampering and unauthorized alteration.",
      approach: "Designed a cryptographic hashing pipeline that generates immutable document fingerprints and verifies them on-chain via smart contracts.",
      architecture: [
        "Document -> Client-Side SHA-256 Hashing -> Web3 Smart Contract Query -> Blockchain Audit Verification."
      ],
      implementation: "Implemented Web3 RPC communication layers, cryptographic hash comparison routines, and responsive status indicators.",
      testing: "Tamper detection testing, smart contract state verification, and boundary validation for modified files.",
      outcome: "Demonstrated tamper-proof document validation without exposing sensitive payload data."
    }
  }
];

export const EXPERIENCE = [
  {
    company: "ETHARA.AI",
    role: "LLM Engineer Intern",
    period: "March 2026 – June 2026",
    location: "Remote / Hybrid",
    highlights: [
      "Evaluated LLM outputs across complex structured datasets, identifying failure patterns and model behavior edge cases.",
      "Designed and executed automated validation workflows to measure response consistency and reasoning quality.",
      "Analyzed model failure patterns, documenting detailed behavior profiles to guide iterative prompt and system refinement.",
      "Authored evaluation documentation and quality benchmarks to support systematic model validation standards."
    ],
    techStack: ["LLMs", "Automated Validation", "Evaluation Documentation", "Dataset Processing", "Failure-Pattern Analysis", "Python"]
  },
  {
    company: "HEXAGON",
    role: "Full Stack Developer Intern",
    period: "July 2025 – December 2025",
    location: "Hyderabad, India",
    highlights: [
      "Engineered multi-tier application components, participating in static and dynamic log inspection for runtime issue diagnosis.",
      "Executed data-flow analysis and query profiling to identify system bottlenecks and optimize Python-based data workflows.",
      "Developed functional test cases and test scripts for code verification, bug tracking, and troubleshooting software defect cycles.",
      "Conducted software validation and technical issue investigation to drive continuous system reliability improvements."
    ],
    techStack: ["Python", "Multi-tier Architecture", "Log Inspection", "Query Profiling", "Data Workflows", "Functional Testing", "Bug Tracking", "Software Validation"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    name: "Programming",
    skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "Bash / Shell Scripting"]
  },
  {
    name: "Frontend",
    skills: ["React.js", "Angular", "Next.js", "HTML5", "CSS3", "TypeScript", "Material UI", "Joy UI", "React Flow", "React Query", "Tailwind CSS", "Sass", "React Bootstrap", "AG Grid", "MUI Data Grid", "Axios", "jQuery", "AJAX", "JSON"]
  },
  {
    name: "Backend",
    skills: ["Python", "Flask", "Node.js", "NestJS", "Express.js", "Spring Boot", ".NET Core", "REST APIs", "Microservices", "API Integration"]
  },
  {
    name: "Databases",
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "RDBMS", "NoSQL"]
  },
  {
    name: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "PyTorch", "NLP", "LLMs", "RAG", "Prompt Engineering", "Embeddings", "Vector Search", "Model Evaluation", "Data Preprocessing", "Predictive Modeling"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "EC2", "Docker", "Kubernetes", "CI/CD", "Cloud Infrastructure", "Git", "GitHub", "Bitbucket"]
  },
  {
    name: "Testing & Quality",
    skills: ["Functional Testing", "Test Case Development", "Test Scripts", "Regression Testing", "Unit Testing", "Debugging", "Bug Tracking", "Defect Analysis", "Software Validation", "Test Automation", "Data Validation", "Data Quality Checks"]
  },
  {
    name: "Systems Engineering",
    skills: ["Linux", "Embedded Linux", "Red Hat Enterprise Linux", "Unix/Linux Administration", "TCP/IP", "UDP", "DNS", "HTTP/HTTPS", "Log Analysis", "System Troubleshooting", "Monitoring", "Root Cause Analysis"]
  },
  {
    name: "Accessibility",
    skills: ["WCAG 2.x", "VoiceOver", "NVDA", "Semantic HTML", "Keyboard Navigation", "Accessible Focus States", "Reduced Motion"]
  }
];

export const PUBLICATION = {
  title: "Multi-Model Approach for Phishing Website Detection Using ML and DL Techniques",
  conference: "International Conference on Computer Engineering and Technology (ICCET 2026)",
  year: "2026",
  abstract: "Presents a multi-model predictive framework leveraging machine learning and deep learning techniques to detect phishing websites through lexical analysis, structural feature extraction, and model evaluation protocols.",
  highlights: [
    "Feature extraction from structural URL properties and trust indicators.",
    "Comparative evaluation across Machine Learning & Deep Learning classifiers.",
    "Formulated failure-pattern diagnostics for false-positive reduction."
  ]
};

export const CERTIFICATIONS = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    focus: "Deploying applications, monitoring operations, and managing enterprise cloud solutions on GCP."
  },
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    focus: "Core system administration skills across Red Hat Enterprise Linux environments, storage, security, and process management."
  }
];

export const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  specializations: ["Cyber Security", "Blockchain Technology", "IoT"],
  focus: "Full-stack software engineering, algorithms, networks, security protocols, distributed systems, and data analytics."
};

export const ENGINEERING_DNA = [
  {
    step: "BUILD",
    tagline: "Architect modular software components",
    desc: "Structuring decoupled frontend applications, multi-tier backends, and reusable utilities with strict domain boundaries."
  },
  {
    step: "TEST",
    tagline: "Validate execution contracts",
    desc: "Writing functional test cases, REST validation scripts, and automated regression routines to verify runtime expectations."
  },
  {
    step: "DEBUG",
    tagline: "Trace failures empirically",
    desc: "Analyzing static and dynamic log files, query execution plans, and data flows to locate root causes without guesswork."
  },
  {
    step: "MEASURE",
    tagline: "Profile latency and system KPIs",
    desc: "Monitoring memory footprints, network throughput, model evaluation metrics, and query execution bottlenecks."
  },
  {
    step: "IMPROVE",
    tagline: "Refine patterns continuously",
    desc: "Optimizing indexing strategies, refactoring redundant workflows, and hardening code reliability."
  },
  {
    step: "SHIP",
    tagline: "Deliver resilient digital products",
    desc: "Deploying accessible, tested, and reliable software engineered to perform predictably in production environments."
  }
];
