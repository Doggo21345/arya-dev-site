// Everything on the site comes from this file. Edit here, not in the components.
// Any link left as '' is hidden on the page.

export const profile = {
  name: 'Arya Panda',
  role: 'Data scientist & data engineer',
  headline: 'I figure out why people come back, why they leave, and which accounts are about to grow.',
  tagline: 'Growth & GTM data science. Behavioral analytics. Black belt.',
  location: 'Austin, TX · Bellevue, WA (Fall 2026)',
  now: 'Product Data Engineering Intern at Amazon Alexa',
  links: {
    email: 'a12pandaa@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aryapanda',
    github: 'https://github.com/Doggo21345',
    youtube: '',
    tiktok: '',
    newsletter: '',
    resume: '',
  },
};

export const about = [
  'I\'m a junior at UT Austin studying Business Analytics, Plan II Honors, and Data Science (3.91 GPA, graduating May 2027).',
  'In high school I started AP Media and Tech Pulse, a marketing agency. Clients were spending on ads without knowing what worked, so I tested every channel and moved budget to the ones that paid off. I grew it to six figures and sold it. That\'s still the kind of problem I like most: messy behavior, a real decision, and data that settles it.',
  'Since then I\'ve done five internships across Amazon, Microsoft, TikTok, Snowflake, and Cloudflare, mostly building tools that let people answer their own questions instead of waiting on an analyst. Long term, I want to do growth and behavioral data science at a media, streaming, or gaming company.',
];

export const highlights = [
  { value: '5', label: 'internships' },
  { value: '1', label: 'company founded & sold' },
  { value: '1,000+', label: 'questions a day answered by a tool I built' },
  { value: '1', label: 'black belt' },
];

export const experience = [
  {
    company: 'Amazon Alexa',
    logo: 'images/logos/amazon.svg',
    role: 'Product Data Engineering Intern',
    when: 'Fall 2026',
    where: 'Bellevue, WA',
    current: true,
    brief:
      'Building agents that let product managers pull subscription numbers on their own, and automating churn prediction (who is about to stop using Alexa).',
    story:
      'PMs had to wait on analysts for every question. I turned their needs into clear metric definitions and an agent that answers directly. Now I am extending it to explain why a metric moved, starting with why people stop using Alexa.',
    details: [
      'Self-serve agents used by 20+ people.',
      'Automated churn prediction, saving the product team 10+ hours a month.',
    ],
    tools: ['AI agents', 'SQL', 'Redshift', 'Python', 'Claude Code'],
  },
  {
    company: 'Microsoft Xbox',
    logo: 'images/logos/xbox.svg',
    role: 'Growth Marketing Data Science Intern',
    when: 'Summer 2026',
    where: 'Redmond, WA',
    brief: 'Built a self-serve tool that turns plain-English questions into SQL for the growth marketing org.',
    story:
      'My team was laid off mid-internship, which left me alone on growth data requests for about a month. I moved 3 years of data from Cosmos DB to Databricks and built a tool that turns plain-English questions into SQL. Early results were weak, so I trained it on my own past queries and talked to as many teams as I could.',
    details: [
      'Interviewed 10+ stakeholders. The tool is used by 60+ people and answers 1,000+ questions a day.',
      'Found 2 subscriber groups driving 90%+ of engagement.',
      'Measured a 17% lift in click-through rate from targeting changes.',
    ],
    tools: ['Databricks', 'Cosmos DB', 'SQL', 'Python', 'LLMs'],
  },
  {
    company: 'TikTok',
    logo: 'images/logos/tiktok.svg',
    role: 'BizOps Data Engineer',
    when: 'Spring 2026',
    where: 'Austin, TX',
    brief: 'Built a pipeline that automated creative audits (reviews of how a seller\'s ads are doing) and opened the results to the whole sales org.',
    story:
      'Audits were done by hand every time someone asked. I made it one click, and built a Tableau dashboard so people without SQL skills could explore the results.',
    details: [
      'Cut 3 hours of analyst work per audit run.',
      'Self-serve reporting for 100+ analysts and 200+ salespeople.',
      'Cut scattered data by over 90%.',
      'Ran an A/B test on onboarding across 200+ sellers.',
    ],
    tools: ['Airflow', 'dbt', 'Apache Spark', 'Tableau', 'A/B testing'],
  },
  {
    company: 'Snowflake',
    logo: 'images/logos/snowflake.svg',
    role: 'ABM Marketing Operations Intern',
    when: 'Fall 2025',
    where: 'Menlo Park, CA',
    brief: 'Built models in Python that ranked which accounts sales should go after.',
    story:
      'Sales could not tell which accounts were worth chasing. My model scored them and found new contacts to reach them another way.',
    details: [
      '21% lift in engagement and $365K in annual contract value.',
      'Cut automation errors by 90% and manual data steps by 40%.',
    ],
    tools: ['Python', 'Machine learning', 'SQL'],
  },
  {
    company: 'Cloudflare',
    logo: 'images/logos/cloudflare.svg',
    role: 'Marketing Analyst Intern',
    when: 'Summer 2025',
    where: 'Austin, TX',
    brief: 'Built a model in BigQuery to predict which partner and event marketing campaigns would perform well.',
    story:
      'Partner and marketing teams were reporting from messy, mismatched data and choosing campaigns without a clear way to spot winners. I gave them one clean source and a model to score campaigns ahead of time.',
    details: [
      'Logistic regression model that improved prediction quality (ROC-AUC) by 17%.',
      'Rebuilt the partner onboarding data flow, cleaning 98%+ of records and saving 40+ hours a quarter.',
      'Automated recurring work, cutting errors by 65%.',
    ],
    tools: ['BigQuery', 'SQL', 'Logistic regression'],
  },
  {
    company: 'PepsiCo',
    logo: '',
    role: 'Intern',
    when: '',
    where: '',
    brief: 'Built RAG agents (AI helpers that look up company information before answering) to handle routine questions.',
    story:
      'People kept phoning the warehouse with the same questions, pulling staff away from their work. My agents answered those questions directly.',
    details: ['Cut phone calls to the warehouse by 21% in one month.'],
    tools: ['LLMs', 'RAG', 'Python'],
  },
  {
    company: 'AP Media and Tech Pulse',
    logo: '',
    role: 'Founder and CEO',
    when: '2020 – 2025',
    where: 'Dallas, TX',
    badge: 'Acquired',
    brief: 'Started a marketing agency in high school and grew it to six figures before it was acquired.',
    story:
      'Clients were spending on ads without knowing what worked. I tested and measured each channel, then moved budget to the ones that paid off.',
    details: [
      'Ran 15+ A/B tests for 5+ clients.',
      'Built a model showing which channels drove sales, improving conversion rates by 25%.',
    ],
    tools: ['A/B testing', 'Attribution modeling', 'Paid social'],
  },
];

// Empty brief hides the card. Leave link as '' to hide it.
export const projects = [
  {
    name: 'Green Portfolio',
    type: 'Data science project',
    status: '',
    brief: '',
    details: [],
    tools: [],
    link: '',
  },
  {
    name: 'Genie',
    type: 'Text-to-SQL · Xbox',
    status: 'Shipped',
    brief: 'A self-serve tool that turns plain-English questions into SQL, so the Xbox growth team could get answers without waiting on an analyst.',
    details: [
      'Moved 3 years of data from Cosmos DB to Databricks so the tool had one place to query.',
      'Trained it on my own past queries and on what 10+ teams told me they needed.',
      'Used by 60+ people, answering 1,000+ questions a day.',
    ],
    tools: ['Databricks', 'SQL', 'LLMs'],
    link: '',
  },
  {
    name: 'Sourcing Helper',
    type: 'Chrome extension',
    status: 'Live',
    brief: 'Reads the LinkedIn job posting you are looking at and builds one-click searches for the recruiters, hiring team, and past interns behind it.',
    details: [
      'Builds LinkedIn Boolean searches and Google X-ray searches from the role and company on the page.',
      'Optional email finder that tries several sources in order and checks each address before you use it.',
      'Never scrapes or automates LinkedIn. It only reads the posting on screen.',
    ],
    tools: ['JavaScript', 'Chrome Extensions API', 'Python tests'],
    link: 'https://github.com/azpanda-glitch/linkedin-sourcing-helper',
  },
  {
    name: 'Job Application Tracker',
    type: 'Google Apps Script',
    status: 'Live',
    brief: 'Watches Gmail for application updates and logs every one to a Google Sheet, so I never update a tracker by hand.',
    details: [
      'Sorts each email into applied, online assessment, interview, rejection, or offer, with one tab per term.',
      'Backfills a full year of email, then scans every hour.',
      'Asks for the smallest Gmail permission possible.',
    ],
    tools: ['Apps Script', 'Gmail API', 'Google Sheets'],
    link: '',
  },
  {
    name: 'The Beehive',
    type: 'Newsletter',
    status: 'Ongoing',
    brief: 'A newsletter that rounds up early-career internship openings every other day.',
    details: [
      'Each post lists company, role, pay, location, degree level, and a direct link to apply.',
      'My own Python and SVG pipeline turns each roundup into on-brand graphics.',
    ],
    tools: ['Beehiiv', 'Python', 'SVG'],
    link: '',
  },
];

export const skills = [
  { group: 'Data', items: ['SQL', 'Redshift', 'BigQuery', 'Databricks', 'Snowflake', 'Metric design'] },
  { group: 'ML & stats', items: ['Python', 'Churn prediction', 'Lead scoring', 'Logistic regression', 'A/B testing', 'Attribution'] },
  { group: 'Engineering', items: ['Airflow', 'dbt', 'Spark', 'Cosmos DB', 'Apps Script', 'JavaScript'] },
  { group: 'AI', items: ['LLM agents', 'Text-to-SQL', 'RAG', 'Claude Code'] },
  { group: 'BI', items: ['Tableau', 'Self-serve dashboards'] },
];

// Off the clock.
export const life = [
  { emoji: '🥋', what: 'Martial arts', line: 'Black belt. Discipline first, then everything else.' },
  { emoji: '🏀', what: 'Gym & basketball', line: 'Pickup runs and lifting keep the brain working.' },
  { emoji: '🍳', what: 'Cooking', line: 'Same recipe, small changes, taste test. Basically A/B testing.' },
  { emoji: '🎥', what: 'Making videos', line: 'Short videos on YouTube and TikTok about the internship grind, so others can skip the guesswork.' },
  { emoji: '🐝', what: 'The Beehive', line: 'A newsletter of early-career internship openings.' },
  { emoji: '🎮', what: 'Games', line: 'Cyberpunk 2077 is my all-time favorite, with Mass Effect and Persona 5 close behind.' },
];
