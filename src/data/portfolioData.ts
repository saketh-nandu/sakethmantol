import { Project, CreativeWork, JourneyItem, GalleryItem, JournalArticle, MusicTrack, ResearchPaper, SkillGroup } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'susa',
    title: 'SUSA Programming Language',
    subtitle: 'Simple Universal Scripting Architecture',
    tagline: 'A programming language ecosystem engineered for human clarity, expressive syntax, and developer joy.',
    category: 'Ecosystem & Compiler',
    heroImage: new URL('../../assets/projects/susa logo.png', import.meta.url).href,
    description: 'SUSA (Simple Universal Scripting Architecture) is Saketh\'s flagship project. It is a full programming language ecosystem built from first principles, designed to reduce cognitive load while preserving performance.',
    problem: 'Existing scripting languages often force a trade-off between cryptic, verbose syntax and runtime inefficiency. Developers lose focus navigating boilerplate rather than expressing core logic.',
    solution: 'Engineered an intuitive, near-natural language syntax backed by an efficient lexer, parser, AST builder, and bytecode runtime. The project spans a custom compiler, lightweight IDE, CLI toolchain, and documentation portal.',
    architecture: [
      'Lexical Analysis & Token Stream Processing',
      'Abstract Syntax Tree (AST) Generation via Recursive Descent',
      'Bytecode Virtual Machine Engine & Memory Manager',
      'Extensible Standard Library (I/O, Math, Data Structures)',
      'CLI Compiler & Native Developer Tooling'
    ],
    technologies: ['Python', 'C/C++', 'EBNF Grammar', 'LLVM IR / Custom VM', 'TypeScript (IDE)', 'Linux CLI'],
    challenges: [
      'Designing unambiguous grammar rules without sacrificing natural readability.',
      'Constructing clear, helpful compiler error diagnostics with exact source line pointers.',
      'Optimizing memory management during deep recursive AST evaluations.'
    ],
    futureRoadmap: [
      'Self-hosting compiler implementation.',
      'First-class async/await concurrency primitives.',
      'WebAssembly compilation target for browser execution.'
    ],
    codeSnippet: {
      language: 'susa',
      filename: 'main.susa',
      code: `# If-else statements
LET age = 18
IF age >= 18:
START:
  PRINT "You are an adult"
END:
ELSE:
START:
  PRINT "You are a minor"
END:

# For loop example
LOOP i = 1 FOR 5 TIMES:
START:
  PRINT "Count: " + i
END:`
    },
    github: 'https://github.com/saketh-nandu/susa1',
    link: 'https://www.susastudio.online'
  },
  {
    id: 'studyhub',
    title: 'StudyHub Platform',
    subtitle: 'AI-Powered Academic Intelligence Suite',
    tagline: 'An integrated ecosystem transforming how students synthesize notes, schedule learning, and master complex subjects.',
    category: 'EdTech & Artificial Intelligence',
    heroImage: '',
    description: 'StudyHub unifies note synthesis, flashcard generation, timetable management, and automated question practice into a singular cohesive workspace designed for academic acceleration.',
    problem: 'Students waste hours juggling fragmented applications for note-taking, calendar planning, flashcards, and exam preparation, resulting in disjointed focus and forgotten material.',
    solution: 'Built an all-in-one AI platform leveraging language models and active recall algorithms to generate structured summary notes, automated revision schedules, and practice questions from raw lecture materials.',
    architecture: [
      'Multi-Modal PDF & Document Processor',
      'Automated Note Summarization Engine',
      'Spaced-Repetition Flashcard Algorithm (SM-2 variant)',
      'Real-time Code Playground & Execution Service',
      'Student Analytics & Progress Dashboard'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Gemini AI API', 'PostgreSQL'],
    challenges: [
      'Handling unstructured multi-page lecture PDFs with inconsistent formatting and diagrams.',
      'Ensuring AI-generated practice questions adhere strictly to syllabus guidelines.'
    ],
    futureRoadmap: [
      'Collaborative real-time peer study rooms.',
      'Voice-guided interactive audio summaries for commute learning.',
      'Offline-first mobile client powered by Flutter.'
    ],
    github: 'https://github.com/saketh-nandu/studyhub'
  },
  {
    id: 'medirag',
    title: 'MediRAG Assistant',
    subtitle: 'Document-Grounded Clinical Knowledge Retrieval',
    tagline: 'Retrieval-Augmented Generation system minimizing AI hallucinations in critical medical references.',
    category: 'Healthcare AI & RAG Systems',
    heroImage: '',
    description: 'MediRAG delivers factual, citation-backed answers to complex medical inquiries by strictly retrieving verified medical literature prior to response synthesis.',
    problem: 'Generative AI models frequently hallucinate medical facts or invent unverified drug interactions, making raw LLMs unsafe for medical information lookup.',
    solution: 'Designed a dense vector retrieval pipeline coupled with hybrid reranking that anchors all AI output directly to peer-reviewed clinical documents and textbook chunks.',
    architecture: [
      'Document Parsing & Chunking with Metadata Layering',
      'High-Density Vector Embedding Generation',
      'FAISS Vector Database Indexing',
      'Contextual Reranking & Citation Attachment',
      'Strict Zero-Hallucination Guardrails'
    ],
    technologies: ['Python', 'LangChain', 'FAISS Vector Search', 'HuggingFace Embeddings', 'Gemini API', 'FastAPI'],
    challenges: [
      'Retrieving precise context chunks when medical queries use colloquial rather than clinical terminology.',
      'Enforcing rigorous attribution where every claim cites its exact document source.'
    ],
    futureRoadmap: [
      'Integration with clinical guideline updates via automated RSS feeds.',
      'Multi-lingual medical terminology translation layer.'
    ],
    github: 'https://github.com/saketh-nandu/medassist-rag'
  },
  {
    id: 'exam-evaluator',
    title: 'AI Hard Copy Exam Evaluator',
    subtitle: 'Automated Handwritten Answer Sheet Correction',
    tagline: 'Computer vision and NLP platform that assists educators by evaluating physical handwritten exam papers.',
    category: 'Computer Vision & Education',
    heroImage: '',
    description: 'An AI-assisted platform that digitizes, transcribes, and evaluates handwritten student answer sheets against answer keys while keeping human educators in total evaluative control.',
    problem: 'Manual correction of hundreds of handwritten exam papers takes weeks, causes grading fatigue, and delays constructive feedback for students.',
    solution: 'Created an automated scan-to-score pipeline using OCR for handwriting extraction, semantic matching against rubrics, and an interactive teacher review panel for score overrides.',
    architecture: [
      'Document Bounding & Perspective Correction',
      'Handwritten Text Recognition (HTR / OCR)',
      'Question-to-Answer Segmentation Engine',
      'Semantic Similarity & Rubric Scoring Engine',
      'Educator Audit & Manual Score Adjustment GUI'
    ],
    technologies: ['Python', 'OpenCV', 'Tesseract OCR', 'Transformers', 'React', 'Tailwind CSS', 'Flask'],
    challenges: [
      'Processing variable student handwriting legibility and non-standard page margins.',
      'Calculating partial credit accurately based on key concepts rather than literal keyword matching.'
    ],
    futureRoadmap: [
      'Diagram & mathematical formula recognition.',
      'Batch scan processing via mobile phone camera capture.'
    ],
    github: 'https://github.com/saketh-nandu/hard-copy-exam-evaluator'
  },
  {
    id: 'sentinel-ai',
    title: 'Sentinel AI',
    subtitle: 'Deepfake, News & Scam Detection Engine',
    tagline: 'An intelligent multi-modal detection system identifying deepfake media, misinformation articles, and digital scams in real time.',
    category: 'AI Safety & Media Integrity',
    heroImage: '',
    description: 'Sentinel AI is a deepfake and misinformation detection platform designed to protect users from fabricated media, fake news, and digital scams using state-of-the-art computer vision and NLP pipelines.',
    problem: 'The rapid proliferation of deepfake videos, synthetic media, and AI-generated misinformation is eroding public trust and enabling widespread scams with devastating real-world consequences.',
    solution: 'Built a multi-modal AI system combining vision transformers for video/image deepfake detection, NLP-driven news fact-checking, and pattern-based scam signal analysis to flag deceptive content in real time.',
    architecture: [
      'Vision Transformer Pipeline for Deepfake Frame Analysis',
      'NLP Misinformation & Fact-Check Cross-Reference Engine',
      'Scam Pattern Recognition & Signal Classifier',
      'Multi-Modal Confidence Scoring & Threat Dashboard',
      'REST API for third-party platform integrations'
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'OpenCV', 'FastAPI', 'React', 'Tailwind CSS'],
    challenges: [
      'Handling adversarially compressed deepfakes designed to evade detection models.',
      'Building a robust news verification layer without relying on a single source of truth.'
    ],
    futureRoadmap: [
      'Browser extension for real-time content scanning.',
      'Federated learning model updates to stay ahead of evolving deepfake techniques.'
    ],
    github: 'https://github.com/saketh-nandu/sentinel-ai'
  }
];

const storyImg = (name: string) => new URL(`../../assets/stories/${name}`, import.meta.url).href;

export const CREATIVE_WORKS: CreativeWork[] = [
  {
    id: 'devaverse',
    title: 'Devaverse',
    type: 'Cinema',
    universe: 'Devaverse Cinematic Universe',
    logline: 'A grand mythological science-fiction universe where ancient divine powers collide with hyper-advanced technology, exploring sacrifice, lineage, and cosmic balance.',
    fullPremise: 'Devaverse spans centuries of conflict, ancient prophecies, and futuristic warfare. At its core, it tells the story of mortals endowed with celestial attributes who must choose between political domination and universal harmony. Rich with emotional bonds, betrayal, family legacy, and breathtaking scale.',
    themes: ['Mythology & High-Tech Convergence', 'Divine Duty vs. Personal Love', 'Lineage & Legacy', 'Cosmic Order & Chaos'],
    characters: [
      { name: 'Devan', role: 'Protagonist', desc: 'A reclusive engineer who discovers his bloodline carries ancient celestial resonance.' },
      { name: 'Kasyap', role: 'Architect of War', desc: 'A tactical mastermind seeking to harness divine artifacts to reshape galactic order.' },
      { name: 'Amrita', role: 'Guardian', desc: 'A loyal warrior torn between allegiance to her dynasty and the truth.' }
    ],
    status: 'Active World-Building & Screenplay Outline',
    coverImage: storyImg('deveverse.png')
  },
  {
    id: 'ikshara',
    title: 'IKSHARA Trilogy',
    type: 'Books',
    universe: 'Republic of Ikshara',
    logline: 'An epic political thriller trilogy examining power, constitutional crisis, sacrifice, and the price of leadership in a fictional republic.',
    fullPremise: 'Set in the sovereign Republic of Ikshara, the trilogy follows three defining eras: "Ascension", "Onslaught", and "Reckoning". As institutional corruption threatens to fracture the nation, a young reformist leader must navigate moral grey zones, military coup threats, and deep-seated societal division.',
    themes: ['Statecraft & Governance', 'Moral Compromise', 'Justice vs. Order', 'The Isolation of Leadership'],
    characters: [
      { name: 'Vikram Ikshav', role: 'Statesman', desc: 'The youngest minister elevated to crisis leadership during political collapse.' },
      { name: 'General Rathore', role: 'Military Chief', desc: 'A staunch nationalist who believes military order is the republic\'s only salvation.' }
    ],
    status: 'Trilogy Outline & Republic Lorebook Complete',
    coverImage: storyImg('ikshara.png')
  },
  {
    id: 'silence-love',
    title: 'Silence Love',
    type: 'Stories',
    universe: 'Standalone Feature',
    logline: 'An intimate narrative exploring emotional communication beyond words, focusing on quiet presence, unspoken feelings, and mature companionship.',
    fullPremise: 'Bypassing dramatic dialogue and forced conflict, Silence Love observes two souls navigating distance, life transitions, and unsaid emotions. Through shared silences, subtle gestures, and profound emotional realism, the story reveals that true understanding rarely needs loud declarations.',
    themes: ['Unspoken Connection', 'Emotional Maturity', 'Presence Over Words', 'Gentle Healing'],
    status: 'Completed Short Prose & Screenplay Concept',
    coverImage: storyImg('silence love.png')
  },
  {
    id: '16',
    title: '16',
    type: 'Cinema',
    universe: 'Crime Thriller Series',
    logline: 'When a college student dies mysteriously on her 16th milestone date, her closest friend embarks on a quiet, methodical search for the truth.',
    fullPremise: 'Initially dismissed by authorities as a tragic suicide, the death of 16-year-old student Ananya leaves unanswered questions. Her reclusive friend uncovers a web of hidden campus secrets, digital footprints, and institutional cover-ups, realizing that Room 16 holds the master key to everything.',
    themes: ['Grief & Truth', 'Campus Shadows', 'Unflinching Loyalty', 'The Weight of Secrets'],
    characters: [
      { name: 'Siddharth', role: 'Investigating Friend', desc: 'An observant quiet student who relies on logic and detail to piece together evidence.' },
      { name: 'Ananya', role: 'The Catalyst', desc: 'Whose sudden absence forces everyone to confront the dark underbelly of the academy.' }
    ],
    status: 'Treatment & Scene Breakdown',
    coverImage: storyImg('16.png')
  },
  {
    id: 'oka-kala',
    title: 'Oka Kala',
    type: 'Writing',
    universe: 'Philosophical Story',
    logline: 'A dream-like exploration of human ambition, creative longing, and the delicate dance between vivid imagination and grounded reality.',
    fullPremise: '"Oka Kala" (A Dream) examines how youthful aspirations shape human identity. It reflects on how reality tests our cherished ideals, and how holding onto a single pure vision can ignite transformation even in the face of mundane hardships.',
    themes: ['Ambition & Reality', 'Creative Persistence', 'Identity Formation', 'Hope Against Odds'],
    status: 'Philosophical Essay & Story Outline',
    coverImage: storyImg('oka kala.png')
  },
  {
    id: 'accident',
    title: 'Accident – Oka Prema Kadha',
    type: 'Stories',
    universe: 'Romantic Drama',
    logline: 'A life-altering highway accident redirects two contrasting lives onto a path of healing, unexpected grace, and quiet romantic redemption.',
    fullPremise: 'Far from a standard tragic trope, the unforeseen accident becomes a turning point. As two strangers navigate recovery, physical rehabilitation, and shared vulnerability, they discover that life\'s sudden fractures often open space for profound love.',
    themes: ['Serendipity', 'Healing & Recovery', 'Unconditional Care', 'Second Chances'],
    status: 'Draft Screenplay',
    coverImage: storyImg('accident.png')
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    year: '2018 — 2021',
    title: 'Foundational Curiosity & Schooling',
    institution: 'Nagarjuna High School',
    type: 'Primary Education',
    summary: 'Developed an early fascination with computing, logic puzzles, and structural storytelling.',
    highlights: [
      'Discovered passion for computer science and basic programming concepts.',
      'Explored logic design, mathematics, and creative creative writing.',
      'Formed the foundational belief that technology and stories are two sides of human expression.'
    ],
    expandedContent: 'At Nagarjuna High School, Saketh\'s curiosity for computers shifted from simple user fascination to a deep desire to understand how software works under the hood. He spent hours experimenting with basic code, reading technical manuals, and writing imaginative short stories.'
  },
  {
    year: '2021 — 2024',
    title: 'Diploma in Artificial Intelligence & Machine Learning',
    institution: 'Government Institute of Electronics, Secunderabad',
    type: 'Technical Diploma',
    summary: 'Immersed in AI/ML fundamentals, Python, Java, Linux administration, and hands-on software construction.',
    highlights: [
      'Mastered core AI concepts, data structures, and object-oriented paradigms.',
      'Built practical software projects beyond routine classroom assignments.',
      'Pioneered early prototypes for automated learning tools and language processing.'
    ],
    expandedContent: 'This intense technical diploma provided Saketh with rigorous practical grounding. Rather than focusing solely on exams, Saketh built real applications, mastered the Linux command line, set up database schemas, and began designing his custom language grammar.'
  },
  {
    year: '2023 — Present',
    title: 'Hackathons & Rapid Innovation',
    institution: 'National & Regional Competitive Stages',
    type: 'Competitive Product Building',
    summary: 'Led teams in building high-pressure prototypes spanning AI evaluation, medical RAG, and automation tools.',
    highlights: [
      'Secured top rankings in competitive hackathons.',
      'Developed MediRAG and AI Exam Evaluator in 24-48 hour intensive sprints.',
      'Honed the ability to translate complex technical concepts into slick, working software.'
    ],
    expandedContent: 'Hackathons became Saketh\'s testing ground for rapid prototyping, user experience polish, and high-pressure team leadership. He repeatedly demonstrated that great software is born from clarity under constraints.'
  },
  {
    year: '2023 — Present',
    title: 'Architecting the SUSA Language Ecosystem',
    institution: 'Independent Research & Open Source',
    type: 'Flagship Core Project',
    summary: 'Began building SUSA (Simple Universal Scripting Architecture) from first principles.',
    highlights: [
      'Designed custom EBNF grammar rules, AST parser, and bytecode VM engine.',
      'Built developer tools, CLI compiler, and documentation infrastructure.',
      'Created a language ecosystem aimed at lowering cognitive barriers for developers.'
    ],
    expandedContent: 'Building SUSA represents Saketh\'s deepest engineering undertaking. By tackling compiler design, lexers, parsers, and runtime virtual machines, he gained rare insight into how software languages bridge human thought and computer execution.'
  },
  {
    year: '2024 — Present',
    title: 'StudyHub & AI Product Engineering',
    institution: 'Independent Product Building',
    type: 'Full-Stack EdTech Architecture',
    summary: 'Designed and deployed StudyHub — an all-in-one AI study workstation for university students.',
    highlights: [
      'Integrated LLMs, active recall flashcards, and automated revision scheduling.',
      'Built end-to-end full-stack web architectures with responsive editorial UX.',
      'Empowered student workflows with instant note synthesis and exam prep tools.'
    ],
    expandedContent: 'StudyHub proved Saketh\'s capability to take complex AI APIs and package them into intuitive, beautiful products that directly solve daily user pain points.'
  },
  {
    year: '2024 — Present',
    title: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
    institution: 'Hyderabad Institute of Technology and Management (HITAM)',
    type: 'Undergraduate Degree (Lateral Entry)',
    summary: 'Advancing research in Agentic AI systems, scalable software engineering, and human-computer interaction.',
    highlights: [
      'Deepening theoretical foundations in deep learning, distributed systems, and computer vision.',
      'Collaborating with research groups on human-centric AI tool design.',
      'Mentoring junior developers and advocating for clean code craftsmanship.'
    ],
    expandedContent: 'At HITAM, Saketh continues to refine his expertise in AI product building, combining academic rigor with ongoing real-world product releases.'
  },
  {
    year: 'Future Horizon',
    title: 'AI Product Builder, Language Creator & Filmmaker',
    institution: 'Global Vision',
    type: 'Long-term Career & Creative Goal',
    summary: 'Merging software engineering, language design, and cinematic storytelling to create worlds that inspire.',
    highlights: [
      'Expanding SUSA into a globally recognized developer ecosystem.',
      'Developing Devaverse and IKSHARA into cinematic motion pictures and books.',
      'Building human-centered AI products that expand human potential.'
    ],
    expandedContent: 'Saketh\'s ultimate vision is to stand at the intersection of technology and story — building software that empowers people while directing films and writing stories that touch the human spirit.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming & Languages',
    skills: [
      { name: 'Python', note: 'Data Science, AI/ML, Compiler Prototypes' },
      { name: 'Java', note: 'Object-Oriented Architecture & Enterprise Logic' },
      { name: 'TypeScript', note: 'Full-Stack Applications & Strong Typing' },
      { name: 'JavaScript', note: 'Web Engines & Interactive Workspaces' },
      { name: 'Dart', note: 'Cross-Platform Mobile Client Engineering' },
      { name: 'SUSA Scripting', note: 'Custom Language Creator & Maintainer' },
      { name: 'C / C++', note: 'Systems Programming & Performance Memory' }
    ]
  },
  {
    category: 'Artificial Intelligence & Data',
    skills: [
      { name: 'Agentic AI', note: 'Autonomous Agent Workflows & Tool Usage' },
      { name: 'RAG Systems', note: 'Dense Vector Retrieval & Hallucination Defense' },
      { name: 'LLM Integration', note: 'Gemini, Transformers & Prompt Pipelines' },
      { name: 'Vector Search', note: 'FAISS, Embedding Indexing & Semantic Search' },
      { name: 'Computer Vision', note: 'OpenCV, OCR & Document Processing' },
      { name: 'NLP & Text Analytics', note: 'Semantic Matching & Sentiment Analysis' }
    ]
  },
  {
    category: 'Software Engineering & Systems',
    skills: [
      { name: 'System Architecture', note: 'Modular Full-Stack Design' },
      { name: 'Linux Administration', note: 'Kernel Utilities, Shell Scripting & CLI' },
      { name: 'Backend Engineering', note: 'Node.js, Express, FastAPI, REST APIs' },
      { name: 'Database Design', note: 'PostgreSQL, Vector DBs, Schema Normalization' },
      { name: 'Docker & Containers', note: 'Containerization & Cloud Deployment' },
      { name: 'Version Control', note: 'Git Workflows & Collaborative Repositories' }
    ]
  },
  {
    category: 'Product & Editorial Design',
    skills: [
      { name: 'Product Strategy', note: 'Zero-to-One Vision & Scope Definition' },
      { name: 'UI/UX Design', note: 'Minimalist Spatial Layouts & Micro-interactions' },
      { name: 'Swiss Editorial Typography', note: 'Modular Scales & Grid Alignment' },
      { name: 'Human-AI Interaction', note: 'Intent-Driven User Interfaces' },
      { name: 'Prototyping', note: 'Figma, Responsive CSS & Design Systems' }
    ]
  },
  {
    category: 'Creative & World-Building',
    skills: [
      { name: 'Cinematic Storytelling', note: 'World-Building & Narrative Architecture' },
      { name: 'Screenwriting', note: 'Scene Structure, Dialogue & Pacing' },
      { name: 'Lore Design', note: 'Fictional Statecraft & Mythology Creation' },
      { name: 'Technical Direction', note: 'Cross-Disciplinary Team Guidance' },
      { name: 'Problem Solving', note: 'First-Principles Deconstruction' }
    ]
  }
];

const galleryImg = (name: string) => new URL(`../../assets/gallery/${name}`, import.meta.url).href;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Concept Art 1',
    category: 'Concept Art',
    image: galleryImg('concept art 1.png'),
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g2',
    title: 'Concept Art 2',
    category: 'Concept Art',
    image: galleryImg('concept art 2.png'),
    date: '2024',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'g3',
    title: 'Concept Art 3',
    category: 'Concept Art',
    image: galleryImg('concept art 3.png'),
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g4',
    title: 'Concept Art 6',
    category: 'Concept Art',
    image: galleryImg('concept art 6.png'),
    date: '2024',
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'g5',
    title: 'Concept Art 12',
    category: 'Concept Art',
    image: galleryImg('concept art 12.png'),
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g6',
    title: 'Devaverse — Concept I',
    category: 'Devaverse',
    image: galleryImg('concept deva 1.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'g7',
    title: 'Devaverse — Concept II',
    category: 'Devaverse',
    image: galleryImg('concept deva 2.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g8',
    title: 'Devaverse — Concept III',
    category: 'Devaverse',
    image: galleryImg('concept deva 3.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'g9',
    title: 'Devaverse — Concept IV',
    category: 'Devaverse',
    image: galleryImg('concept deva 4.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'g10',
    title: 'Devaverse — Concept V',
    category: 'Devaverse',
    image: galleryImg('concept deva 5.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g11',
    title: 'Devaverse — Concept VI',
    category: 'Devaverse',
    image: galleryImg('concept deva 6.png'),
    location: 'Devaverse Cinematic Universe',
    date: '2024',
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'g12',
    title: 'Silence Love — Visual',
    category: 'Stories',
    image: galleryImg('silence love.png'),
    location: 'Standalone Feature',
    date: '2024',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'g13',
    title: 'Oka Kala — Visual',
    category: 'Stories',
    image: galleryImg('oka kala.png'),
    location: 'Philosophical Story',
    date: '2024',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'g14',
    title: 'Accident — Visual',
    category: 'Stories',
    image: galleryImg('accident.png'),
    location: 'Romantic Drama',
    date: '2024',
    aspectRatio: 'aspect-[16/9]'
  }
];

const musicTrack = (name: string) => new URL(`../../assets/music/${name}`, import.meta.url).href;
const paperAsset = (name: string) => new URL(`../../assets/papers/${name}`, import.meta.url).href;

export const MUSIC_TRACKS: MusicTrack[] = [
  {
    id: 'm1',
    title: 'Blood Sword',
    subtitle: 'Dark Ambient Combat Concept',
    description: 'A cinematic, tension-heavy concept built around rhythmic percussion and ominous low-end motion.',
    fileUrl: musicTrack('Blood sword.mp3'),
    accent: 'from-[#111111] via-[#333333] to-[#666666]',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'm2',
    title: 'The Last Dawn of Chains',
    subtitle: 'Epic Emotional Arc',
    description: 'A soaring, melancholic concept that leans into layered strings and a restrained, hopeful chorus.',
    fileUrl: musicTrack('The Last Dawn of Chains.mp3'),
    accent: 'from-[#1f2937] via-[#4b5563] to-[#9ca3af]',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'm3',
    title: 'The Mastermind',
    subtitle: 'Tense Psychological Pulse',
    description: 'A sharp, suspense-driven composition using minimal motifs and a steady, creeping pulse.',
    fileUrl: musicTrack('The Mastermind.mp3'),
    accent: 'from-[#2d1b69] via-[#4c1d95] to-[#7c3aed]',
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'm4',
    title: 'Whisper',
    subtitle: 'Quiet Intimate Sketch',
    description: 'A softer theme that prioritizes breath, space, and gentle emotional texture over dramatic density.',
    fileUrl: musicTrack('Whisper.mp3'),
    accent: 'from-[#1e3a5f] via-[#2563eb] to-[#60a5fa]',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'm5',
    title: 'Echoes of the Earth',
    subtitle: 'Organic Worldbuilding Sound',
    description: 'A grounded, earthy concept with expansive movement and a sense of ancient, living space.',
    fileUrl: musicTrack('Echoes of the Earth.mp3'),
    accent: 'from-[#14532d] via-[#16a34a] to-[#86efac]',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'm6',
    title: 'Evil Arrival',
    subtitle: 'Threatening Foreboding Theme',
    description: 'An ominous dark concept built around tension, sudden shifts, and a cold, invasive atmosphere.',
    fileUrl: musicTrack('Evil Arrival.mp3'),
    accent: 'from-[#111827] via-[#374151] to-[#6b7280]',
    aspectRatio: 'aspect-[16/9]'
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'p1',
    title: 'The Role of Augmented Reality in Human-Computer Interaction',
    category: 'Research Paper',
    summary: 'A concept-driven research note examining visual identity, narrative architecture, and worldbuilding systems.',
    fileUrl: paperAsset('research paper.pdf'),
    fileType: 'pdf',
    year: '2025',
    readTime: '10 min read'
  },
  {
    id: 'p2',
    title: 'FOVX(Field of View EXtended)-New Movie Format idea',
    category: 'Concept Paper',
    summary: 'A design and storytelling brief outlining the creative framework, references, and tonal direction.',
    fileUrl: paperAsset('FOVX.docx'),
    fileType: 'docx',
    year: '2025',
    readTime: '6 min read'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    title: 'Building a Programming Language from First Principles: Lessons from SUSA',
    date: 'July 14, 2024',
    readTime: '6 min read',
    category: 'Engineering & Languages',
    excerpt: 'What happens when you decide that existing scripting tools carry too much cognitive baggage? A look inside lexer design, AST trees, and grammar simplicity.',
    content: `Building a programming language forces you to examine the atomic structure of developer intent. When I started SUSA (Simple Universal Scripting Architecture), the goal wasn't merely to make another interpreter — it was to craft a syntax that feels like thinking out loud.

### The Cognitive Friction of Modern Syntax
Most programming languages were created in eras where byte consumption and compiler complexity dictated user syntax. Modern developers spend a disproportionate amount of mental energy navigating punctuation quirks, cryptic keywords, and boilerplates rather than expressing core logic.

### EBNF and Unambiguous Grammar
Designing SUSA required defining strict EBNF rules where keywords feel like standard English while remaining strictly deterministic for recursive descent parsing.

By eliminating redundant punctuation and keeping block scopes clean, the resulting language lets developers focus purely on algorithm architecture.`
  },
  {
    id: 'j2',
    title: 'The Cinema of Tomorrow: How Mythological Lore Meets High Technology',
    date: 'May 28, 2024',
    readTime: '5 min read',
    category: 'Storytelling & Cinema',
    excerpt: 'Exploring why ancient mythic archetypes paired with hard sci-fi resonate deeply with modern audiences, and how Devaverse was born.',
    content: `Mythology is humanity's oldest open-source lorebook. From the Mahabharata to Greek epics, these stories endured not because of spectacle, but because they deal with timeless moral dilemmas: duty versus love, lineage versus personal integrity, and the weight of power.

### Synthesizing Sci-Fi with Sacred Lore
In creating *Devaverse*, my objective was to avoid superficial "futuristic gods" tropes. Instead, the universe treats ancient celestial powers as forgotten physical laws and advanced energy dynamics. When a character wields a celestial weapon, it operates with orbital mechanics and physical consequences.

Storytelling and software architecture share a common core: both require internal consistency, rule-bound worlds, and emotional resonance.`
  },
  {
    id: 'j3',
    title: 'Why Software Design Needs Editorial Elegance, Not SaaS Clutter',
    date: 'April 02, 2024',
    readTime: '4 min read',
    category: 'Design Philosophy',
    excerpt: 'An argument for removing loud gradients, artificial glassmorphism, and neon buttons in favor of Swiss grids, white space, and typographic hierarchy.',
    content: `Walk into a high-end architecture gallery or open an issue of *Kinfolk*, and you immediately feel calm. The space breathes. The typography commands attention without screaming. 

Yet, most modern web applications look like casino floors: glowing neon gradients, bouncing badges, persistent toast popups, and three-column feature grids that look identical across a hundred startups.

### The Quiet Power of White Space
White space isn't empty space; it's a structural element. By relying strictly on typography scale, crisp borders (#ECECEC), and monochromatic tones (#111111 on #FFFFFF), an interface communicates confidence.

When software respects the user's focus, the product feels timeless rather than trendy.`
  },
  {
    id: 'j4',
    title: 'Grounding AI in Truth: Preventing Hallucinations with RAG Architectures',
    date: 'February 18, 2024',
    readTime: '7 min read',
    category: 'Artificial Intelligence',
    excerpt: 'How dense vector retrieval and strict document context guardrails transform generative AI from unpredictable generators into reliable domain assistants.',
    content: `Generative language models are inherently creative probabilistic engines. While wonderful for creative writing, this unconstrained generation poses severe risks in high-stakes domains like medicine and law.

### The MediRAG Blueprint
While developing MediRAG, our primary mandate was zero unverified claims. By employing a Retrieval-Augmented Generation pipeline:
1. Every user query is converted into a high-dimensional vector.
2. Verified medical textbooks and peer-reviewed journals are searched via dense FAISS vector indexing.
3. Only relevant chunks are injected into the prompt context with strict citation requirements.

If the retrieved literature does not contain the answer, the system gracefully declines rather than fabricating facts.`
  }
];
