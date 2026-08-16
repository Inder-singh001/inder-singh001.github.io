export const profile = {
  name: 'Inderpreet Singh',
  role: 'Software Engineer',
  location: 'India',
  email: 'singhinderpreet238@gmail.com',
  github: 'https://github.com/inder-singh001',
  githubHandle: 'inder-singh001',
  overview:
    'I build reliable systems that handle real-time operations smoothly and consistently. With experience in VoIP platforms, high-availability infrastructure, and full-stack development, I develop applications that handle live data, user interactions, and critical operations without breaking down.',
  goal:
    'My goal is to deliver solutions that are stable, scalable, and ready to perform in real-world environments.',
  summary:
    'Full Stack Developer experienced in building scalable and reliable applications with a focus on performance, real-time communication, and system stability. Delivered production-ready solutions used by 20+ clients and platforms handling 1000+ users.',
}

export const stats = [
  { value: '20+', label: 'Client deployments' },
  { value: '1000+', label: 'Users served' },
  { value: '7+', label: 'Production projects' },
]

export const services = [
  {
    title: 'Full Stack Development',
    description:
      'End-to-end web and mobile application development — from responsive frontends to robust backend APIs.',
    icon: 'stack',
  },
  {
    title: 'ERP System Development',
    description:
      'Enterprise Resource Planning solutions tailored to business workflows, built for reliability and scale.',
    icon: 'grid',
  },
  {
    title: 'Quick Development Gigs',
    description:
      'Small-scale projects and rapid prototypes delivered fast without compromising on quality.',
    icon: 'bolt',
  },
]

export const projects = [
  {
    title: 'VoIP & Real-Time Communication System',
    tag: 'Currently Working',
    accentIndex: 0,
    tech: ['Vue', 'WebSockets', 'Laravel Echo', 'TypeScript'],
    points: [
      'Dynamic call UI components for real-time call control and monitoring',
      'WhatsApp & SMS messaging integration — template-based and custom',
      'WebSocket-based event handling for live call updates and sync',
      'Scalable, reusable component architecture with modular design patterns',
      'Efficient state management for real-time data flow',
      'UI performance tuned for concurrent live call events',
    ],
  },
  {
    title: 'Firewall Management System',
    tag: 'Currently Working · Solo',
    accentIndex: 1,
    tech: ['Linux', 'VPN', 'Web Filtering', 'SMS'],
    points: [
      'Maintained a user-based firewall system in production environments',
      'Managed VPN configurations, web filtering and internet access control',
      'Developed and integrated new add-on features on client demand',
      'Enhanced SMS functionality and improved the admin dashboard',
      'Handled deployments, monitoring and ongoing maintenance',
      'Supported the solution across 20+ client deployments',
    ],
  },
  {
    title: 'High Availability VoIP Infrastructure',
    tag: 'Infrastructure',
    accentIndex: 2,
    tech: ['Keepalived (VRRP)', 'PostgreSQL', 'Bash', 'Rsync'],
    points: [
      'HA architecture with automatic failover via Keepalived (VRRP) and a virtual IP',
      'PostgreSQL physical replication (primary/standby) with WAL archiving and replication slots',
      'Automation scripts for failover handling, standby rebuild and health checks',
      'File synchronization for recordings and user data using rsync-based services',
      'Monitored replication health and optimized WAL retention to prevent data loss',
    ],
  },
  {
    title: 'Intrusion Detection System',
    tag: 'Security',
    accentIndex: 3,
    tech: ['Suricata', 'OpenWISP', 'OpenWRT', 'Honeypots'],
    points: [
      'Network intrusion detection system built on Suricata',
      'Honeypots integrated for proactive attack detection',
      'Network infrastructure managed with OpenWISP; OpenWRT routers configured and maintained',
      'Packet inspection, threat classification and risk prioritization for incoming traffic',
      'Logging and alert mechanisms for suspicious activity',
    ],
  },
  {
    title: 'Algorithmics Forums',
    tag: 'Web App',
    accentIndex: 4,
    tech: ['MVC', 'Node.js', 'Pagination'],
    points: [
      'Community forum web application built on MVC architecture',
      'Post interactions — create, delete, comment — with multi-level nested replies',
      'Pagination and user interaction features for performance and UX',
      'Guest login for non-registered users',
    ],
  },
  {
    title: 'DIGI-Pass',
    tag: 'Web + Mobile',
    accentIndex: 5,
    tech: ['Flutter', 'Express.js', 'REST API'],
    points: [
      'Bus pass management system with a web portal for colleges and authorities',
      'Cross-platform Flutter app for students to apply for and renew passes',
      'Backend APIs with Express.js for application workflows and data processing',
      'Admin panel for pass management, approval and verification',
    ],
  },
  {
    title: 'Athletix',
    tag: '1000+ users',
    accentIndex: 0,
    tech: ['Web Platform', 'Event Management', 'Responsive UI'],
    points: [
      'Sports information platform with event details, registration workflows and app downloads',
      'Supported 1000+ users with robust participation and activity tracking',
      'Event management: registration handling, attendance tracking and record maintenance',
      'Structured data flow and responsive UI for efficient data handling',
    ],
  },
]

export const skills = [
  {
    group: 'Frontend',
    icon: 'monitor',
    items: ['Vue', 'TypeScript', 'JavaScript', 'Next.js', 'React', 'Vuetify', 'TailwindCSS', 'Vite', 'Vuexy'],
  },
  {
    group: 'Backend',
    icon: 'server',
    items: ['PHP (Laravel)', 'CakePHP', 'Node.js', 'Express.js', 'REST API Development'],
  },
  {
    group: 'Databases',
    icon: 'database',
    items: ['PostgreSQL (Replication, WAL)', 'MySQL', 'MariaDB', 'MongoDB'],
  },
  {
    group: 'Real-Time Systems',
    icon: 'signal',
    items: ['WebSockets', 'Laravel Echo', 'Event-driven Architecture'],
  },
  {
    group: 'DevOps & Systems',
    icon: 'terminal',
    items: ['Linux', 'Keepalived (HA/VRRP)', 'Bash Scripting', 'Rsync'],
  },
  {
    group: 'Mobile Development',
    icon: 'phone',
    items: ['Flutter', 'React Native'],
  },
]

export const education = {
  school: 'Guru Nanak Dev Engineering College',
  degree: 'B.Tech in Computer Science & Engineering',
  period: '2021 – 2025',
}
