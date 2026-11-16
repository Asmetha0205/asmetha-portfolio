export const profile = {
  name: 'Asmetha Sureshbabu Thoppe',
  taglines: ['AI Developer', 'React Developer', 'Python Developer', 'ML Enthusiast', 'Problem Solver'],
  roles: [
    'Computer Science Engineering Student',
    'AI Enthusiast',
    'Full Stack Developer',
    'Machine Learning Explorer',
  ],
  email: 'thoppeasmi@gmail.com',
  github: 'https://github.com/Asmetha0205',
  githubHandle: '@Asmetha0205',
  linkedin: 'https://www.linkedin.com/in/asmetha-thoppe-a641b62a5/',
  linkedinHandle: '/in/asmetha-thoppe-a641b62a5',
  location: 'India',
  resumeUrl: '/resume/Asmetha_Thoppe_Updated.pdf',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering student passionate about Artificial Intelligence, Full Stack Development, and building impactful software solutions.",
    'I enjoy transforming ideas into real-world applications using AI, Machine Learning, React, Flask, Django, Java, and Big Data technologies.',
    "I'm continuously learning emerging technologies while creating meaningful projects.",
  ],
  stats: [
    { label: 'CGPA', value: 8.32, decimals: 2 },
    { label: 'Projects', value: 5, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'Certifications', value: 8, suffix: '+' },
  ],
}

export const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 84 },
      { name: 'Flask', level: 80 },
      { name: 'Django', level: 76 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Artificial Intelligence', level: 82 },
      { name: 'TensorFlow', level: 74 },
      { name: 'Random Forest', level: 80 },
      { name: 'LSTM', level: 76 },
      { name: 'Prompt Engineering', level: 88 },
    ],
  },
  {
    title: 'Big Data',
    skills: [
      { name: 'Apache Spark', level: 72 },
      { name: 'Hadoop', level: 68 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Firebase', level: 85 },
      { name: 'Firestore', level: 82 },
      { name: 'SQLite', level: 80 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 88 },
      { name: 'Streamlit', level: 80 },
      { name: 'Android Studio', level: 72 },
      { name: 'PyQt5', level: 74 },
      { name: 'Chart.js', level: 78 },
      { name: 'Pandas', level: 86 },
    ],
  },
]

// ─── Featured Projects ───────────────────────────────────────────────────────
// Large showcase cards with alternating image layout.
export const featuredProjects = [
  {
    id: 'study-planner',
    title: 'AI Assignment & Exam Preparation Tracker',
    description:
      'An AI-powered educational platform that helps students manage assignments, generate personalised study schedules, auto-summarise notes, create quizzes and flashcards, solve academic doubts, and track progress — all backed by Firebase for real-time sync and gamification.',
    tech: ['React', 'Flask', 'Firebase', 'Gemini API', 'Hugging Face', 'Python'],
    github: 'https://github.com/Asmetha0205/ai-assignment-tracker',
    cover: '/images/projects/study-planner.svg',
  },
  {
    id: 'nasdaq-prediction',
    title: 'NASDAQ AI Stock Prediction System',
    description:
      'A Big Data–powered stock prediction platform that combines Machine Learning (Random Forest) and Deep Learning (LSTM) models to forecast NASDAQ stock prices. Leverages Apache Spark and Hadoop for large-scale data processing and MongoDB for storage, with an interactive Streamlit dashboard for live visualisation.',
    tech: ['Python', 'Random Forest', 'LSTM', 'Apache Spark', 'Hadoop', 'MongoDB', 'Streamlit'],
    github: 'https://github.com/Asmetha0205/NASDAQ-AI-Stock-Prediction-System',
    cover: '/images/projects/stock-prediction.svg',
  },
  {
    id: 'chem-visualizer',
    title: 'Chemical Equipment Parameter Visualizer',
    description:
      'A hybrid web and desktop application for analysing chemical equipment parameters. The React frontend communicates with a Django REST backend to fetch and render sensor data as interactive charts. A companion PyQt5 desktop app provides offline access, and the system supports PDF report generation from Matplotlib figures.',
    tech: ['React', 'Django REST', 'PyQt5', 'Chart.js', 'Matplotlib', 'SQLite'],
    github: 'https://github.com/Asmetha0205/chemical-visualizer',
    cover: '/images/projects/chem-visualizer.svg',
  },
  {
    id: 'food-delivery',
    title: 'Online Food Delivery System',
    description:
      'A Java-based food ordering and management platform featuring menu browsing, cart management, order placement, and database-driven persistence. Built with Java Swing for the GUI, JDBC for database connectivity, and MySQL as the backend store.',
    tech: ['Java', 'Swing', 'JDBC', 'MySQL', 'Servlets'],
    github: null, // not yet on GitHub
    cover: '/images/projects/food-delivery.svg',
  },
]

// ─── Hackathon Projects ──────────────────────────────────────────────────────
// Compact grid cards. hackathon field drives the event badge.
export const hackathonProjects = [
  {
    id: 'transitops',
    title: 'TransitOps',
    subtitle: 'Smart Transit Operations Platform',
    description:
      'A transit operations management system built for the Odoo Hackathon. TransitOps provides real-time vehicle tracking, route management, on-time performance analytics, and an operations dashboard — all integrated within the Odoo ERP ecosystem.',
    tech: ['Odoo', 'Python', 'PostgreSQL', 'JavaScript', 'XML'],
    hackathon: 'Odoo Hackathon',
    github: 'https://github.com/Asmetha0205/TransitOps',
    cover: '/images/projects/transitops.svg',
  },
  {
    id: 'aurex',
    title: 'AI-Powered Adaptive Learning Prototype',
    subtitle: 'Adaptive Microlearning & AI Doubt-Resolution for Mixed-Ability Classrooms',
    description:
       'A prototype developed for TetraTHON 2026 Round 1, exploring an adaptive learning approach for mixed-ability classrooms. The concept combines microlearning experiences with AI-assisted doubt resolution to support different learning needs. Developed by Team AUREX.',
    tech: ['Python', 'AI/ML', 'React', 'Flask'],
    hackathon: 'TetraTHON 2026 · Round 1',
    github: 'https://github.com/Asmetha0205/AUREX-TetraTHON-2026',
    cover: '/images/projects/aurex.svg',
  },
  
{
  id: 'tetra029',
  title: 'CurricuAlign AI',
  subtitle: 'Dynamic Syllabus & Industry Skill-Gap Synchronizer',
  description:
    'An AI-driven solution developed for the second round of TetraTHON 2026, a 36-hour Indo-French AI innovation sprint hosted by Navrachana University under the IndiaAI Mission. CurricuAlign AI focuses on synchronizing academic syllabi with industry skill requirements. Developed by Team AUREX after progressing from the first round.',
  tech: ['Python', 'AI/ML', 'React', 'Flask'],
  hackathon: 'TetraTHON 2026 · Round 2',
  github: 'https://github.com/Asmetha0205/TETRA029',
  cover: '/images/projects/tetra029.svg',
},
]

// ─── Additional Projects ─────────────────────────────────────────────────────
// Smaller cards for other work.
export const additionalProjects = [
  {
    id: 'dreamy-doodle',
    title: 'Dreamy Doodle',
    description:
      'A creative WordPress website showcasing design and content management skills. The project demonstrates custom theme selection, layout composition, responsive design, and WordPress CMS workflows for publishing web content.',
    tech: ['WordPress', 'PHP', 'CSS', 'Web Design'],
    github: 'https://github.com/Asmetha0205/Dreamy_Doodle_Wordpress',
    liveUrl: 'https://samplesaationaryshop.wordpress.com/',
    cover: '/images/projects/dreamy-doodle.svg',
  },
  {
    id: 'globetalk',
    title: 'GlobeTalk — AI Translator Chat App',
    description:
      'A real-time multilingual chat application with AI-powered translation and secure Firebase authentication. Currently in development — full feature set and repository will be shared once complete.',
    tech: ['Android', 'Java', 'Firebase', 'AI Translation'],
    github: null, // not yet on GitHub
    cover: '/images/projects/globetalk.svg',
  },
  {
    id: 'insightmint',
    title: 'InsightMint – Digital Marketing & Insights Blog',
    description:
      'A collaborative WordPress website exploring digital marketing strategies, brand campaigns, case studies, and creative advertising approaches. Features marketing insights and analyses of popular brands.',
    tech: ['WordPress', 'Web Design', 'Digital Marketing', 'Content Strategy'],
    github: 'https://github.com/Asmetha0205/InsightMint_Wordpress',
    liveUrl: 'https://insightmintblog.wordpress.com/',
    cover: '/images/projects/insightmint.svg',
  },
]

// ─── Legacy export kept for any components still referencing `projects` ──────
export const projects = featuredProjects


export const timeline = [
  {
    year: '2023',
    items: [
      'Started B.Tech in Computer Science Engineering',
      'Built foundations in Python, C, Java and programming fundamentals',
      'Learned data structures, algorithms and object-oriented programming',
      'Started exploring databases and software development',
    ],
  },
  {
    year: '2024',
    items: [
      'Developed Java desktop applications using Swing, JDBC and MySQL',
      'Built an Online Food Delivery System',
      'Explored Android development using Java and Firebase',
      'Started frontend development with HTML, CSS and JavaScript',
      'Created the GlobeTalk multilingual chat application',
    ],
  },
  {
    year: '2025',
    items: [
      'Developed the AI Assignment & Exam Preparation Tracker',
      'Integrated Gemini API and Hugging Face models into AI-powered features',
      'Explored React, Flask, Firebase and full-stack application development',
      'Earned certifications from AWS, IBM, HackerRank and Simplilearn',
      'Strengthened knowledge of machine learning and prompt engineering',
    ],
  },
  {
    year: '2026',
    items: [
          {
      text: 'Software Development Intern at Beaumont Solutions (July–September)',
      highlight: true,
    },
      'Developed NASDAQ AI Stock Prediction System using Random Forest, LSTM, Spark and Hadoop',
      'Presented NASDAQ AI Stock Prediction System at the University Project Exhibition',
      'Participated in Odoo Hackathon and TetraTHON 2026, progressing to Round 2',
      'Earned AWS Academy ML for NLP and Anthropic MCP certifications',
    ],
  },
]


export const certifications = [
  {
    name: 'AWS Academy Graduate – Data Engineering',
    issuer: 'AWS Academy',
    meta: '40 hours · Issued April 2026',
    url: 'https://www.credly.com/go/znu2biUG',
  },
  {
    name: 'AWS Academy Graduate – Machine Learning Foundations',
    issuer: 'AWS Academy',
    meta: '20 hours · Issued April 2026',
    url: 'https://www.credly.com/go/HfvGXmSG',
  },
  {
    name: 'AWS Academy Graduate – Machine Learning for Natural Language Processing',
    issuer: 'AWS Academy',
    meta: '20 hours · Issued October 2026',
    url: 'https://www.credly.com/go/F6QBZXtn',
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    meta: 'Issued November 2025',
    url: 'https://www.credly.com/badges/2eedbab5-64f4-4fa6-85cd-fc758af7b580',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Simplilearn',
    meta: 'Issued November 2025',
    url: 'https://simpli-web.app.link/e/WEUUMRWb47b'
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    meta: 'Issued December 2024',
    url: 'https://www.hackerrank.com/certificates/iframe/a40016ca65f2'
  },
  {
    name: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    meta: 'Issued June 2025',
    url: 'https://www.hackerrank.com/certificates/iframe/1061952c319e'
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    url: '/certificates/introduction-to-model-context-protocol.pdf',
  },
  {
    name: 'AWS Solutions Architecture Job Simulation',
    issuer: 'AWS · Forage',
    meta: 'Certificate of Completion · June 2025',
    url: '/certificates/AWS solutions architect.pdf',
  },

{
  name: 'Data Science Essentials with Python',
  issuer: 'Cisco Networking Academy',
  meta: 'Course Completion · October 2026',
  url: '/certificates/data-science-essentials-with-python.pdf',
},
]

export const achievements = [
  'Presented NASDAQ AI Stock Prediction System at University Project Exhibition.',
  'Built AI Powered Study Planner integrating AI models and Firebase.',
  'Participated in university hackathon developing an AI supplier search solution.',
]
