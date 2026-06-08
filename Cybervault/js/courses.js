/* ══════════════════════════════════════════════
   CYBERVAULT — COURSES.JS
   100+ Free Courses · 10 Categories
   Cybersecurity · Web Dev · AI · Data · Cloud
   ══════════════════════════════════════════════ */

const COURSES = [

  /* ── CYBERSECURITY (28 courses) ── */
  { title: 'Google Cybersecurity Certificate',      platform: 'Coursera',     topic: 'Cybersecurity', level: 'beginner',     duration: '6 months', cert: true,  free: true,  url: 'https://coursera.org/google-certificates/cybersecurity-certificate', desc: 'Industry-recognized cert from Google. Covers networks, Linux, SQL, Python, SIEM tools & more.' },
  { title: 'IBM Cybersecurity Analyst Professional',platform: 'Coursera',     topic: 'Cybersecurity', level: 'intermediate', duration: '8 months', cert: true,  free: true,  url: 'https://coursera.org/professional-certificates/ibm-cybersecurity-analyst', desc: 'IBM\'s full cybersecurity analyst program covering threat intelligence, SIEM, and incident response.' },
  { title: 'Intro to Cybersecurity',               platform: 'Cisco NetAcad', topic: 'Cybersecurity', level: 'beginner',     duration: '15 hours', cert: true,  free: true,  url: 'https://skillsforall.com/course/introduction-to-cybersecurity', desc: 'Cisco\'s official intro to cybersecurity. Covers threats, vulnerabilities, attacks, and best practices.' },
  { title: 'Cybersecurity Essentials',             platform: 'Cisco NetAcad', topic: 'Cybersecurity', level: 'intermediate', duration: '30 hours', cert: true,  free: true,  url: 'https://skillsforall.com/course/cybersecurity-essentials', desc: 'Deep dive into network security, cryptography, firewalls, and intrusion detection systems.' },
  { title: 'Ethical Hacking Fundamentals',         platform: 'edX',           topic: 'Cybersecurity', level: 'intermediate', duration: '8 weeks',  cert: false, free: true,  url: 'https://edx.org', desc: 'Learn penetration testing concepts, tools like Nmap, Metasploit, and ethical hacking methodology.' },
  { title: 'Practical Ethical Hacking',            platform: 'TCM Security',  topic: 'Cybersecurity', level: 'intermediate', duration: '25 hours', cert: false, free: true,  url: 'https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course', desc: 'One of the best free ethical hacking courses. Real-world labs and methodology.' },
  { title: 'Try Hack Me — Pre-Security',           platform: 'TryHackMe',     topic: 'Cybersecurity', level: 'beginner',     duration: '40 hours', cert: true,  free: true,  url: 'https://tryhackme.com/path/outline/presecurity', desc: 'Interactive cybersecurity training with hands-on labs. Perfect starting point for beginners.' },
  { title: 'Try Hack Me — SOC Level 1',            platform: 'TryHackMe',     topic: 'Cybersecurity', level: 'intermediate', duration: '60 hours', cert: true,  free: true,  url: 'https://tryhackme.com/path/outline/soclevel1', desc: 'Become a SOC analyst. Learn SIEM, Splunk, log analysis, threat intelligence and incident response.' },
  { title: 'Hack The Box Academy',                 platform: 'Hack The Box',  topic: 'Cybersecurity', level: 'intermediate', duration: 'Self-paced',cert: true, free: true,  url: 'https://academy.hackthebox.com', desc: 'Industry-leading cyber labs. Free modules cover enumeration, exploitation, privilege escalation.' },
  { title: 'OverTheWire: Bandit',                  platform: 'OverTheWire',   topic: 'Cybersecurity', level: 'beginner',     duration: 'Self-paced',cert: false, free: true,  url: 'https://overthewire.org/wargames/bandit', desc: 'Learn Linux security via wargames. Perfect for beginners learning command-line hacking basics.' },
  { title: 'OWASP Top 10 Training',                platform: 'OWASP',         topic: 'Cybersecurity', level: 'intermediate', duration: '10 hours', cert: false, free: true,  url: 'https://owasp.org/www-project-webgoat', desc: 'Learn the 10 most critical web security risks with hands-on intentionally vulnerable app.' },
  { title: 'Cybersecurity for Business',           platform: 'Coursera',      topic: 'Cybersecurity', level: 'beginner',     duration: '4 weeks',  cert: true,  free: true,  url: 'https://coursera.org/learn/cyber-security-domain', desc: 'University of Colorado course covering cyber risk management and security policies.' },
  { title: 'Network Security Fundamentals',        platform: 'SANS Cyber Aces',topic:'Cybersecurity', level: 'beginner',     duration: '20 hours', cert: false, free: true,  url: 'https://www.sans.org/cyberaces', desc: 'Free SANS course covering operating systems, networking, and system administration basics.' },
  { title: 'Penetration Testing with Kali Linux',  platform: 'Offensive Security',topic:'Cybersecurity',level:'advanced',   duration: '3 months', cert: true,  free: false, url: 'https://offensive-security.com/pwk-oscp', desc: 'The gold standard OSCP certification. Free learning materials available.' },
  { title: 'Digital Forensics Fundamentals',       platform: 'Cybrary',       topic: 'Cybersecurity', level: 'intermediate', duration: '15 hours', cert: true,  free: true,  url: 'https://cybrary.it', desc: 'Learn disk imaging, memory analysis, log investigation, and digital forensics tools.' },
  { title: 'Malware Analysis Fundamentals',        platform: 'OpenSecurityTraining2',topic:'Cybersecurity',level:'advanced',duration: '30 hours', cert: false, free: true,  url: 'https://opensecuritytraining2.info', desc: 'Reverse engineer malware using static & dynamic analysis. Free university-level training.' },
  { title: 'CompTIA Security+ Study',              platform: 'Professor Messer',topic:'Cybersecurity', level: 'intermediate', duration: '20 hours', cert: false, free: true,  url: 'https://professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course', desc: 'Complete free Security+ exam prep by Professor Messer. One of the best free study resources.' },
  { title: 'Web Application Security',             platform: 'PortSwigger',   topic: 'Cybersecurity', level: 'intermediate', duration: 'Self-paced',cert: true,  free: true,  url: 'https://portswigger.net/web-security', desc: 'Free Web Security Academy by Burp Suite creators. Labs on SQLi, XSS, CSRF, SSRF and more.' },
  { title: 'Cloud Security Fundamentals',          platform: 'AWS',           topic: 'Cybersecurity', level: 'intermediate', duration: '10 hours', cert: false, free: true,  url: 'https://aws.amazon.com/training/digital/aws-cloud-security-fundamentals', desc: 'AWS\'s free security training covering IAM, encryption, monitoring, and compliance.' },
  { title: 'Cyber Threat Intelligence',            platform: 'Cybrary',       topic: 'Cybersecurity', level: 'advanced',     duration: '12 hours', cert: true,  free: true,  url: 'https://cybrary.it', desc: 'Understand threat actors, TTPs, MITRE ATT&CK framework, and threat intel reporting.' },
  { title: 'Introduction to Linux Security',       platform: 'Linux Foundation',topic:'Cybersecurity', level: 'beginner',    duration: '14 hours', cert: false, free: true,  url: 'https://training.linuxfoundation.org', desc: 'Secure Linux systems, manage permissions, configure firewalls, and audit system activity.' },
  { title: 'Certified in Cybersecurity (CC)',      platform: 'ISC2',          topic: 'Cybersecurity', level: 'beginner',     duration: '14 hours', cert: true,  free: true,  url: 'https://isc2.org/certifications/cc', desc: 'ISC2\'s entry-level free certification covering security principles, access controls, and incident response.' },
  { title: 'Privacy & Security in Online Social',  platform: 'Coursera',      topic: 'Cybersecurity', level: 'beginner',     duration: '12 hours', cert: true,  free: true,  url: 'https://coursera.org', desc: 'Princeton course on internet privacy, tracking, anonymization, and protecting your digital life.' },
  { title: 'Cryptography & PKI Fundamentals',      platform: 'Cybrary',       topic: 'Cybersecurity', level: 'intermediate', duration: '8 hours',  cert: true,  free: true,  url: 'https://cybrary.it', desc: 'Understand symmetric/asymmetric encryption, certificates, TLS, and public key infrastructure.' },
  { title: 'Blue Team Labs Online',                platform: 'Blue Team Labs', topic: 'Cybersecurity', level: 'intermediate', duration: 'Self-paced',cert: true,  free: true,  url: 'https://blueteamlabs.online', desc: 'Defensive security challenges. Practice threat detection, log analysis, and DFIR skills.' },
  { title: 'Splunk Fundamentals 1',               platform: 'Splunk',         topic: 'Cybersecurity', level: 'beginner',     duration: '9 hours',  cert: true,  free: true,  url: 'https://education.splunk.com', desc: 'Free official Splunk course. Learn SIEM operations, SPL queries, dashboards, and threat detection.' },
  { title: 'Incident Response Fundamentals',       platform: 'Cybrary',       topic: 'Cybersecurity', level: 'intermediate', duration: '10 hours', cert: true,  free: true,  url: 'https://cybrary.it', desc: 'Learn the 6-phase IR process, evidence collection, containment, eradication, and recovery.' },
  { title: 'MITRE ATT&CK Training',               platform: 'MITRE',          topic: 'Cybersecurity', level: 'advanced',     duration: '6 hours',  cert: false, free: true,  url: 'https://attack.mitre.org/resources/training', desc: 'Official MITRE training on adversary tactics, techniques, and procedures framework.' },

  /* ── WEB DEVELOPMENT (20 courses) ── */
  { title: 'The Web Developer Bootcamp',           platform: 'freeCodeCamp',  topic: 'Web Dev', level: 'beginner',     duration: '300 hours',cert: true,  free: true,  url: 'https://freecodecamp.org/learn/responsive-web-design', desc: 'Complete HTML, CSS, JavaScript curriculum with certification. Industry-recognized free course.' },
  { title: 'Full Stack Open',                      platform: 'University Helsinki',topic:'Web Dev',level:'intermediate', duration: '12 weeks',cert: true,  free: true,  url: 'https://fullstackopen.com', desc: 'Free university course on React, Node.js, MongoDB, GraphQL, TypeScript, and CI/CD.' },
  { title: 'JavaScript Algorithms & Data Structures',platform:'freeCodeCamp', topic: 'Web Dev', level: 'intermediate', duration: '300 hours',cert: true,  free: true,  url: 'https://freecodecamp.org/learn/javascript-algorithms-and-data-structures', desc: 'Deep JavaScript from basics to ES6, RegEx, debugging, and data structures.' },
  { title: 'The Odin Project — Full Stack',        platform: 'The Odin Project',topic:'Web Dev', level: 'beginner',     duration: '12 months',cert: false, free: true,  url: 'https://theodinproject.com', desc: 'Open-source full stack curriculum. HTML, CSS, JavaScript, Node.js, React, and databases.' },
  { title: 'CS50 Web Programming with Python/JS',  platform: 'Harvard edX',   topic: 'Web Dev', level: 'intermediate', duration: '12 weeks', cert: true,  free: true,  url: 'https://cs50.harvard.edu/web', desc: 'Harvard\'s free web development course. Django, SQL, JavaScript, Git, and more.' },
  { title: 'React — The Complete Guide',           platform: 'Scrimba',       topic: 'Web Dev', level: 'intermediate', duration: '140 hours', cert: true,  free: true,  url: 'https://scrimba.com/learn/learnreact', desc: 'Interactive React course with hands-on coding directly in the browser.' },
  { title: 'CSS Grid & Flexbox',                   platform: 'CSS-Tricks / Kevin Powell',topic:'Web Dev',level:'beginner',duration:'20 hours', cert: false, free: true,  url: 'https://cssgrid.io', desc: 'Master modern CSS layouts with Grid and Flexbox. Free course by Wes Bos.' },
  { title: 'Node.js & Express Fundamentals',       platform: 'freeCodeCamp',  topic: 'Web Dev', level: 'intermediate', duration: '8 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Build REST APIs with Node.js and Express. Free YouTube course with projects.' },
  { title: 'MongoDB for Developers',               platform: 'MongoDB University',topic:'Web Dev',level:'beginner',     duration: '20 hours', cert: true,  free: true,  url: 'https://university.mongodb.com', desc: 'Official free MongoDB certification training. CRUD, aggregation, indexing, and schema design.' },
  { title: 'TypeScript Full Course',               platform: 'freeCodeCamp',  topic: 'Web Dev', level: 'intermediate', duration: '8 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Complete TypeScript from beginner to advanced — types, interfaces, generics, and decorators.' },
  { title: 'Next.js 14 Crash Course',             platform: 'YouTube',        topic: 'Web Dev', level: 'intermediate', duration: '5 hours',  cert: false, free: true,  url: 'https://youtube.com', desc: 'Learn Next.js 14 App Router, Server Components, API routes, and deployment on Vercel.' },
  { title: 'Git & GitHub for Beginners',           platform: 'freeCodeCamp',  topic: 'Web Dev', level: 'beginner',     duration: '4 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Version control fundamentals. Branching, merging, pull requests, and GitHub workflow.' },
  { title: 'Web Accessibility Fundamentals',       platform: 'Google',        topic: 'Web Dev', level: 'beginner',     duration: '6 hours',  cert: false, free: true,  url: 'https://web.dev/learn/accessibility', desc: 'Make websites accessible to everyone. ARIA, semantic HTML, and accessibility testing tools.' },
  { title: 'Django for Beginners',                 platform: 'freeCodeCamp',  topic: 'Web Dev', level: 'intermediate', duration: '10 hours', cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Build web apps with Python and Django. Models, views, templates, authentication, and deployment.' },
  { title: 'Vue.js 3 Complete Guide',             platform: 'Scrimba',        topic: 'Web Dev', level: 'intermediate', duration: '40 hours', cert: true,  free: true,  url: 'https://scrimba.com', desc: 'Learn Vue.js 3 Composition API, Vuex, Vue Router, and build real projects.' },
  { title: 'REST API Design',                      platform: 'Postman Academy',topic: 'Web Dev', level: 'beginner',     duration: '6 hours',  cert: true,  free: true,  url: 'https://academy.postman.com', desc: 'Free official Postman training on API testing, design, and documentation.' },
  { title: 'SQL for Data Science',                 platform: 'Coursera',      topic: 'Web Dev', level: 'beginner',     duration: '4 weeks',  cert: true,  free: true,  url: 'https://coursera.org/learn/sql-for-data-science', desc: 'UC Davis SQL course covering SELECT, joins, subqueries, and data analysis basics.' },
  { title: 'GraphQL Fundamentals',                 platform: 'HowToGraphQL',  topic: 'Web Dev', level: 'intermediate', duration: '8 hours',  cert: false, free: true,  url: 'https://howtographql.com', desc: 'Open-source GraphQL tutorial. Queries, mutations, subscriptions, and schema design.' },
  { title: 'Docker for Developers',               platform: 'freeCodeCamp',   topic: 'Web Dev', level: 'intermediate', duration: '5 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Containerize applications, write Dockerfiles, use Docker Compose, and deploy containers.' },
  { title: 'DevOps Prerequisites',                 platform: 'KodeKloud',     topic: 'Web Dev', level: 'beginner',     duration: '10 hours', cert: true,  free: true,  url: 'https://kodekloud.com', desc: 'Free course covering Linux, networking, Git, Docker, and DevOps fundamentals.' },

  /* ── ARTIFICIAL INTELLIGENCE & ML (18 courses) ── */
  { title: 'Machine Learning Specialization',      platform: 'Coursera',      topic: 'AI & ML', level: 'intermediate', duration: '3 months', cert: true,  free: true,  url: 'https://coursera.org/specializations/machine-learning-introduction', desc: 'Andrew Ng\'s legendary ML course. Regression, neural networks, decision trees, and unsupervised learning.' },
  { title: 'Deep Learning Specialization',         platform: 'Coursera',      topic: 'AI & ML', level: 'advanced',     duration: '5 months', cert: true,  free: true,  url: 'https://coursera.org/specializations/deep-learning', desc: 'Andrew Ng\'s deep learning series. CNNs, RNNs, LSTMs, and transformer architecture fundamentals.' },
  { title: 'Practical Deep Learning for Coders',   platform: 'fast.ai',       topic: 'AI & ML', level: 'intermediate', duration: '20 hours', cert: false, free: true,  url: 'https://fast.ai', desc: 'Top-down practical approach to deep learning. PyTorch, computer vision, NLP, and deployment.' },
  { title: 'CS50 Introduction to AI with Python',  platform: 'Harvard edX',   topic: 'AI & ML', level: 'intermediate', duration: '7 weeks',  cert: true,  free: true,  url: 'https://cs50.harvard.edu/ai', desc: 'Harvard\'s free AI course covering search, optimization, ML, neural networks, and NLP.' },
  { title: 'Intro to Generative AI',               platform: 'Google Cloud',  topic: 'AI & ML', level: 'beginner',     duration: '45 mins',  cert: true,  free: true,  url: 'https://cloudskillsboost.google/course_templates/536', desc: 'Google\'s official intro to Gen AI. Understand LLMs, diffusion models, and responsible AI.' },
  { title: 'Hugging Face NLP Course',              platform: 'Hugging Face',  topic: 'AI & ML', level: 'intermediate', duration: '30 hours', cert: false, free: true,  url: 'https://huggingface.co/learn/nlp-course', desc: 'Official Transformers library course. Fine-tuning, tokenizers, datasets, and model deployment.' },
  { title: 'LLM Bootcamp',                         platform: 'Full Stack DL', topic: 'AI & ML', level: 'advanced',     duration: '20 hours', cert: false, free: true,  url: 'https://fullstackdeeplearning.com/llm-bootcamp', desc: 'Build LLM-powered apps. Prompt engineering, LangChain, retrieval-augmented generation, and agents.' },
  { title: 'AI for Everyone',                      platform: 'Coursera',      topic: 'AI & ML', level: 'beginner',     duration: '6 hours',  cert: true,  free: true,  url: 'https://coursera.org/learn/ai-for-everyone', desc: 'Andrew Ng\'s non-technical intro to AI. Great for understanding AI\'s impact on business and society.' },
  { title: 'Elements of AI',                       platform: 'MinnaLearn',    topic: 'AI & ML', level: 'beginner',     duration: '30 hours', cert: true,  free: true,  url: 'https://elementsofai.com', desc: 'Finland\'s national AI course. No math or programming required. Understand AI basics and ethics.' },
  { title: 'TensorFlow Developer Certificate',     platform: 'Coursera',      topic: 'AI & ML', level: 'intermediate', duration: '4 months', cert: true,  free: true,  url: 'https://coursera.org/professional-certificates/tensorflow-in-practice', desc: 'Official TensorFlow certification prep. Computer vision, NLP, time series, and sequences.' },
  { title: 'Stanford CS229: Machine Learning',     platform: 'YouTube / Stanford',topic:'AI & ML',level:'advanced',    duration: '12 weeks', cert: false, free: true,  url: 'https://cs229.stanford.edu', desc: 'Full Stanford ML course for free on YouTube. Math-heavy, covers theory behind algorithms.' },
  { title: 'Prompt Engineering for LLMs',         platform: 'DeepLearning.AI', topic:'AI & ML', level: 'beginner',    duration: '2 hours',  cert: false, free: true,  url: 'https://deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers', desc: 'Andrew Ng + OpenAI course on advanced prompting techniques for developers.' },
  { title: 'LangChain for LLM Applications',      platform: 'DeepLearning.AI', topic:'AI & ML', level: 'intermediate',duration: '3 hours',  cert: false, free: true,  url: 'https://deeplearning.ai/short-courses/langchain-for-llm-application-development', desc: 'Build LLM apps with LangChain. Chains, agents, memory, and document Q&A systems.' },
  { title: 'Reinforcement Learning Fundamentals',  platform: 'DeepMind / YouTube',topic:'AI & ML',level:'advanced',   duration: '15 hours', cert: false, free: true,  url: 'https://youtube.com', desc: 'DeepMind\'s RL course covering MDPs, Q-learning, policy gradients, and actor-critic methods.' },
  { title: 'AI Ethics and Society',                platform: 'edX',           topic: 'AI & ML', level: 'beginner',     duration: '6 weeks',  cert: true,  free: true,  url: 'https://edx.org', desc: 'Understand bias, fairness, accountability, transparency, and ethics in AI systems.' },
  { title: 'Computer Vision with PyTorch',         platform: 'freeCodeCamp',  topic: 'AI & ML', level: 'intermediate', duration: '12 hours', cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Image classification, object detection, CNNs, and transfer learning with PyTorch.' },
  { title: 'Kaggle ML Micro-Courses',              platform: 'Kaggle',        topic: 'AI & ML', level: 'beginner',     duration: '4 hours',  cert: true,  free: true,  url: 'https://kaggle.com/learn', desc: 'Free bite-sized courses: Python, ML, Pandas, deep learning, feature engineering, and more.' },
  { title: 'Natural Language Processing',          platform: 'Coursera',      topic: 'AI & ML', level: 'advanced',     duration: '4 months', cert: true,  free: true,  url: 'https://coursera.org/specializations/natural-language-processing', desc: 'deeplearning.ai NLP specialization. Attention models, transformers, and sentiment analysis.' },

  /* ── DATA SCIENCE (14 courses) ── */
  { title: 'Google Data Analytics Certificate',    platform: 'Coursera',      topic: 'Data Science', level: 'beginner', duration: '6 months', cert: true,  free: true,  url: 'https://coursera.org/google-certificates/data-analytics-certificate', desc: 'Google\'s professional data analytics cert. R, Tableau, SQL, spreadsheets, and case studies.' },
  { title: 'IBM Data Science Professional',        platform: 'Coursera',      topic: 'Data Science', level: 'beginner', duration: '9 months', cert: true,  free: true,  url: 'https://coursera.org/professional-certificates/ibm-data-science', desc: 'Full data science curriculum by IBM. Python, SQL, ML, visualization, and capstone project.' },
  { title: 'Data Science with Python',             platform: 'freeCodeCamp',  topic: 'Data Science', level: 'beginner', duration: '12 hours', cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn for data analysis and visualization.' },
  { title: 'Statistics for Data Science',          platform: 'Khan Academy',  topic: 'Data Science', level: 'beginner', duration: '20 hours', cert: false, free: true,  url: 'https://khanacademy.org/math/statistics-probability', desc: 'Free statistics from basics. Probability, distributions, hypothesis testing, and regression.' },
  { title: 'Power BI for Beginners',               platform: 'Microsoft Learn',topic: 'Data Science', level: 'beginner', duration: '8 hours',  cert: true,  free: true,  url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi', desc: 'Official Microsoft Power BI training. Data modeling, DAX, reports, and dashboards.' },
  { title: 'Tableau for Beginners',                platform: 'Tableau',       topic: 'Data Science', level: 'beginner', duration: '6 hours',  cert: true,  free: true,  url: 'https://www.tableau.com/learn/training', desc: 'Official free Tableau training. Create visualizations, dashboards, and interactive charts.' },
  { title: 'Python for Data Analysis',             platform: 'Kaggle',        topic: 'Data Science', level: 'beginner', duration: '5 hours',  cert: true,  free: true,  url: 'https://kaggle.com/learn/pandas', desc: 'Hands-on Pandas for data manipulation, cleaning, merging, and analysis.' },
  { title: 'R Programming for Data Science',       platform: 'edX',           topic: 'Data Science', level: 'beginner', duration: '8 weeks',  cert: true,  free: true,  url: 'https://edx.org', desc: 'Harvard\'s free R programming course covering data wrangling, visualization, and inference.' },
  { title: 'SQL for Data Analysis',               platform: 'Mode Analytics',  topic: 'Data Science', level: 'beginner', duration: '10 hours', cert: false, free: true,  url: 'https://mode.com/sql-tutorial', desc: 'Free SQL tutorial for data analysts. Aggregations, joins, subqueries, and window functions.' },
  { title: 'Applied Data Science with Python',     platform: 'Coursera',      topic: 'Data Science', level: 'intermediate',duration: '5 months',cert: true, free: true,  url: 'https://coursera.org/specializations/data-science-python', desc: 'University of Michigan. Applied ML, text mining, social network analysis, and visualization.' },
  { title: 'Data Engineering Fundamentals',        platform: 'DataTalks.Club',topic: 'Data Science',  level: 'intermediate',duration: '10 weeks',cert: true, free: true,  url: 'https://datatalks.club/courses/data-engineering-zoomcamp.html', desc: 'Free data engineering bootcamp. Docker, Terraform, dbt, Spark, Kafka, and BigQuery.' },
  { title: 'Big Data with Apache Spark',           platform: 'edX',           topic: 'Data Science', level: 'advanced', duration: '10 weeks', cert: true,  free: true,  url: 'https://edx.org', desc: 'Berkeley\'s Spark course. Distributed computing, MLlib, Spark SQL, and streaming.' },
  { title: 'Excel Skills for Data Analytics',      platform: 'Coursera',      topic: 'Data Science', level: 'beginner', duration: '5 weeks',  cert: true,  free: true,  url: 'https://coursera.org', desc: 'Macquarie University. Advanced Excel for data analysis, pivot tables, and visualization.' },
  { title: 'Financial Data Analysis',              platform: 'edX',           topic: 'Data Science', level: 'intermediate',duration: '8 weeks',cert: true,  free: true,  url: 'https://edx.org', desc: 'Apply data science to finance. Risk modeling, portfolio optimization, and market analysis.' },

  /* ── CLOUD & DEVOPS (14 courses) ── */
  { title: 'AWS Cloud Practitioner',               platform: 'AWS Skill Builder',topic:'Cloud',  level: 'beginner',    duration: '6 hours',  cert: true,  free: true,  url: 'https://explore.skillbuilder.aws', desc: 'Official free AWS Cloud Practitioner prep. Core services, security, pricing, and architecture.' },
  { title: 'Google Cloud Digital Leader',          platform: 'Google Cloud',  topic: 'Cloud',   level: 'beginner',     duration: '8 hours',  cert: true,  free: true,  url: 'https://cloudskillsboost.google', desc: 'Google\'s free cloud fundamentals training with hands-on Qwiklabs exercises.' },
  { title: 'Azure Fundamentals AZ-900',            platform: 'Microsoft Learn',topic: 'Cloud',   level: 'beginner',     duration: '8 hours',  cert: true,  free: true,  url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals', desc: 'Free official Microsoft Azure prep. Cloud concepts, core services, pricing, and compliance.' },
  { title: 'Kubernetes for Beginners',             platform: 'KodeKloud',     topic: 'Cloud',   level: 'intermediate', duration: '8 hours',  cert: true,  free: true,  url: 'https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on', desc: 'Hands-on Kubernetes. Pods, deployments, services, ConfigMaps, and cluster management.' },
  { title: 'Terraform for Beginners',              platform: 'freeCodeCamp',  topic: 'Cloud',   level: 'intermediate', duration: '5 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Infrastructure as code with Terraform. Provision AWS resources, modules, and state management.' },
  { title: 'CI/CD with GitHub Actions',            platform: 'GitHub',        topic: 'Cloud',   level: 'intermediate', duration: '4 hours',  cert: false, free: true,  url: 'https://skills.github.com', desc: 'Official free GitHub training. Automate builds, tests, and deployments with Actions workflows.' },
  { title: 'Linux Command Line Basics',            platform: 'Linux Foundation',topic:'Cloud',   level: 'beginner',     duration: '8 hours',  cert: true,  free: true,  url: 'https://training.linuxfoundation.org/training/introduction-to-linux', desc: 'Official Linux Foundation intro. Filesystem, commands, text editors, scripting, and networking.' },
  { title: 'DevOps Engineering on AWS',            platform: 'AWS',           topic: 'Cloud',   level: 'advanced',     duration: '40 hours', cert: false, free: true,  url: 'https://explore.skillbuilder.aws', desc: 'CI/CD pipelines, infrastructure as code, monitoring, and microservices on AWS.' },
  { title: 'Prometheus & Grafana Monitoring',      platform: 'freeCodeCamp',  topic: 'Cloud',   level: 'intermediate', duration: '6 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Set up monitoring dashboards, alerts, and metrics collection for your applications.' },
  { title: 'Ansible for Automation',               platform: 'Red Hat',       topic: 'Cloud',   level: 'intermediate', duration: '6 hours',  cert: false, free: true,  url: 'https://redhat.com/en/services/training', desc: 'Automate configuration management, deployments, and IT infrastructure with Ansible.' },
  { title: 'Jenkins for Beginners',                platform: 'freeCodeCamp',  topic: 'Cloud',   level: 'intermediate', duration: '4 hours',  cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Build CI/CD pipelines with Jenkins. Jobs, pipelines, plugins, and integration testing.' },
  { title: 'Serverless Framework',                 platform: 'Serverless.com',topic: 'Cloud',   level: 'intermediate', duration: '5 hours',  cert: false, free: true,  url: 'https://serverless.com', desc: 'Build and deploy serverless applications on AWS Lambda, Azure Functions, and Google Cloud.' },
  { title: 'Cloud Architecture Fundamentals',      platform: 'Google Cloud',  topic: 'Cloud',   level: 'intermediate', duration: '12 hours', cert: true,  free: true,  url: 'https://cloudskillsboost.google', desc: 'Design scalable, resilient cloud architectures. Load balancing, CDN, databases, and HA.' },
  { title: 'Site Reliability Engineering',         platform: 'Google / Coursera',topic:'Cloud', level: 'advanced',     duration: '6 months', cert: true,  free: true,  url: 'https://coursera.org', desc: 'Google\'s SRE practices. Error budgets, SLOs, incident management, and automation.' },

  /* ── PROGRAMMING (12 courses) ── */
  { title: 'CS50: Introduction to Computer Science',platform:'Harvard edX',   topic: 'Programming', level: 'beginner',  duration: '12 weeks', cert: true,  free: true,  url: 'https://cs50.harvard.edu/x', desc: 'Harvard\'s famous free CS intro. C, Python, SQL, web dev, and problem solving. Best beginner course.' },
  { title: 'Python for Everybody',                 platform: 'Coursera',      topic: 'Programming', level: 'beginner',  duration: '8 months', cert: true,  free: true,  url: 'https://coursera.org/specializations/python', desc: 'University of Michigan\'s Python series. Variables, loops, functions, files, databases, and APIs.' },
  { title: 'Automate the Boring Stuff with Python',platform: 'Udemy',         topic: 'Programming', level: 'beginner',  duration: '10 hours', cert: false, free: true,  url: 'https://automatetheboringstuff.com', desc: 'Free online book + free coupon. Automate file tasks, web scraping, PDFs, Excel, and emails.' },
  { title: 'Java Programming',                     platform: 'MOOC.fi',       topic: 'Programming', level: 'beginner',  duration: '14 weeks', cert: true,  free: true,  url: 'https://java-programming.mooc.fi', desc: 'University of Helsinki free Java course. OOP, data structures, algorithms, and projects.' },
  { title: 'C++ for Beginners',                    platform: 'freeCodeCamp',  topic: 'Programming', level: 'beginner',  duration: '10 hours', cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Comprehensive C++ from syntax to OOP, memory management, STL, and algorithms.' },
  { title: 'Rust Programming Language',            platform: 'The Rust Book', topic: 'Programming', level: 'intermediate', duration: '20 hours', cert: false, free: true, url: 'https://doc.rust-lang.org/book', desc: 'Official free Rust book. Memory safety, ownership, borrowing, lifetimes, and systems programming.' },
  { title: 'Go (Golang) for Beginners',            platform: 'freeCodeCamp',  topic: 'Programming', level: 'intermediate', duration: '8 hours',cert: false, free: true,  url: 'https://freecodecamp.org', desc: 'Learn Go from scratch. Goroutines, channels, interfaces, and building REST APIs.' },
  { title: 'Data Structures & Algorithms',         platform: 'Coursera',      topic: 'Programming', level: 'intermediate', duration: '6 months',cert: true,  free: true, url: 'https://coursera.org/specializations/data-structures-algorithms', desc: 'UC San Diego & HSE. Arrays, trees, graphs, dynamic programming, and algorithm design.' },
  { title: 'System Design Fundamentals',           platform: 'ByteByteGo',   topic: 'Programming',  level: 'advanced',   duration: '15 hours', cert: false, free: true,  url: 'https://bytebytego.com', desc: 'Design scalable systems. Databases, caching, load balancers, message queues, and microservices.' },
  { title: 'Operating Systems: Three Easy Pieces', platform: 'OSTEP',        topic: 'Programming',  level: 'advanced',   duration: '30 hours', cert: false, free: true,  url: 'https://ostep.org', desc: 'Free textbook on OS concepts. Processes, memory management, file systems, and concurrency.' },
  { title: 'Competitive Programming',             platform: 'USACO Guide',    topic: 'Programming',  level: 'advanced',   duration: 'Self-paced',cert: false,free: true,  url: 'https://usaco.guide', desc: 'Free competitive programming curriculum from Bronze to Platinum. Algorithms and problem solving.' },
  { title: 'Kotlin for Android',                  platform: 'Google Developers',topic:'Programming', level: 'intermediate',duration: '10 hours', cert: true, free: true,  url: 'https://developer.android.com/courses/android-basics-compose/course', desc: 'Official Google Kotlin + Jetpack Compose Android dev course. Build real apps for free.' },
];

const COURSE_TOPICS = ['All', 'Cybersecurity', 'Web Dev', 'AI & ML', 'Data Science', 'Cloud', 'Programming'];

const PLATFORM_COLORS = {
  'Coursera':          { bg: 'rgba(0,86,210,0.15)', color: '#4b9eff', border: 'rgba(0,86,210,0.3)' },
  'freeCodeCamp':      { bg: 'rgba(10,132,255,0.12)', color: '#3b9eff', border: 'rgba(10,132,255,0.25)' },
  'edX':               { bg: 'rgba(190,0,0,0.12)',   color: '#ff6b6b', border: 'rgba(190,0,0,0.25)' },
  'Harvard edX':       { bg: 'rgba(190,0,0,0.12)',   color: '#ff6b6b', border: 'rgba(190,0,0,0.25)' },
  'Google Cloud':      { bg: 'rgba(66,133,244,0.12)',color: '#4285f4', border: 'rgba(66,133,244,0.25)' },
  'TryHackMe':         { bg: 'rgba(200,0,100,0.12)', color: '#ff4da6', border: 'rgba(200,0,100,0.25)' },
  'Hack The Box':      { bg: 'rgba(159,225,67,0.1)', color: '#9fe143', border: 'rgba(159,225,67,0.2)' },
  'Cisco NetAcad':     { bg: 'rgba(0,120,188,0.12)', color: '#00a3e0', border: 'rgba(0,120,188,0.25)' },
  'fast.ai':           { bg: 'rgba(0,188,212,0.1)',  color: '#00bcd4', border: 'rgba(0,188,212,0.2)' },
  'Kaggle':            { bg: 'rgba(32,178,170,0.12)',color: '#20b2aa', border: 'rgba(32,178,170,0.25)' },
  'AWS Skill Builder': { bg: 'rgba(255,153,0,0.1)',  color: '#ff9900', border: 'rgba(255,153,0,0.2)' },
  'AWS':               { bg: 'rgba(255,153,0,0.1)',  color: '#ff9900', border: 'rgba(255,153,0,0.2)' },
  'Microsoft Learn':   { bg: 'rgba(0,120,212,0.12)', color: '#00a8e8', border: 'rgba(0,120,212,0.25)' },
  'ISC2':              { bg: 'rgba(0,150,136,0.12)', color: '#00bfa5', border: 'rgba(0,150,136,0.25)' },
  'PortSwigger':       { bg: 'rgba(255,90,31,0.12)', color: '#ff5a1f', border: 'rgba(255,90,31,0.25)' },
  'Hugging Face':      { bg: 'rgba(255,190,0,0.1)',  color: '#ffbe00', border: 'rgba(255,190,0,0.2)' },
};

const TOPIC_GRADIENT = {
  'Cybersecurity': { from: '#00d4ff', to: '#7c3aed' },
  'Web Dev':       { from: '#10b981', to: '#0ea5e9' },
  'AI & ML':       { from: '#f59e0b', to: '#ef4444' },
  'Data Science':  { from: '#8b5cf6', to: '#06b6d4' },
  'Cloud':         { from: '#3b82f6', to: '#6366f1' },
  'Programming':   { from: '#ec4899', to: '#f59e0b' },
};

let activeTopic = 'All';
let coursesReady = false;

window.renderCourses = function() {
  if (coursesReady) { filterCourses(); return; }
  coursesReady = true;

  // Topic filter buttons
  const filtersEl = document.getElementById('courseTopicFilters');
  filtersEl.innerHTML = COURSE_TOPICS.map(t => `
    <button class="price-btn${t === 'All' ? ' active' : ''}"
      onclick="setCourseTopic(this,'${t}')" data-topic="${t}">
      ${t === 'All' ? '🌐 All Topics' :
        t === 'Cybersecurity' ? '🔒 ' + t :
        t === 'Web Dev'       ? '💻 ' + t :
        t === 'AI & ML'       ? '🤖 ' + t :
        t === 'Data Science'  ? '📊 ' + t :
        t === 'Cloud'         ? '☁️ ' + t : '⚙️ ' + t}
    </button>
  `).join('');

  filterCourses();
};

window.setCourseTopic = function(btn, topic) {
  activeTopic = topic;
  document.querySelectorAll('#courseTopicFilters .price-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterCourses();
};

window.filterCourses = function() {
  const q = (document.getElementById('courseSearch')?.value || '').toLowerCase().trim();

  const filtered = COURSES.filter(c => {
    const matchTopic = activeTopic === 'All' || c.topic === activeTopic;
    const matchQ = !q ||
      c.title.toLowerCase().includes(q) ||
      c.platform.toLowerCase().includes(q) ||
      c.topic.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.level.toLowerCase().includes(q);
    return matchTopic && matchQ;
  });

  document.getElementById('coursesMeta').innerHTML =
    `Showing <em>${filtered.length}</em> of ${COURSES.length} courses` +
    (q ? ` matching "<em>${q}</em>"` : '');

  if (!filtered.length) {
    document.getElementById('coursesBody').innerHTML = `
      <div class="no-results">
        <span class="no-results-icon">🎓</span>
        No courses found. Try different keywords.
      </div>`;
    return;
  }

  // Group by topic
  const grouped = {};
  filtered.forEach(c => {
    if (!grouped[c.topic]) grouped[c.topic] = [];
    grouped[c.topic].push(c);
  });

  const topicEmojis = { 'Cybersecurity':'🔒','Web Dev':'💻','AI & ML':'🤖','Data Science':'📊','Cloud':'☁️','Programming':'⚙️' };

  document.getElementById('coursesBody').innerHTML =
    Object.entries(grouped).map(([topic, list], si) => {
      const grad = TOPIC_GRADIENT[topic] || { from: '#00d4ff', to: '#7c3aed' };
      return `
        <div class="course-section" style="animation-delay:${si * 0.05}s">
          <div class="cat-hdr">
            <span class="cat-hdr-emoji">${topicEmojis[topic] || '📚'}</span>
            <span class="cat-hdr-name">${topic}</span>
            <span class="cat-hdr-count">${list.length}</span>
          </div>
          <div class="course-grid">
            ${list.map((c, i) => {
              const plat = PLATFORM_COLORS[c.platform] || { bg:'rgba(0,212,255,0.06)', color:'var(--accent)', border:'rgba(0,212,255,0.2)' };
              return `
                <a class="course-card" href="${c.url}" target="_blank" rel="noopener"
                   style="--from-color:${grad.from};--to-color:${grad.to};animation-delay:${(si*0.05+i*0.03)}s">
                  <div class="course-top">
                    <span class="course-platform-badge"
                      style="background:${plat.bg};color:${plat.color};border-color:${plat.border}">
                      ${c.platform}
                    </span>
                    <span class="course-arrow">↗</span>
                  </div>
                  <div class="course-title">${c.title}</div>
                  <div class="course-desc">${c.desc}</div>
                  <div class="course-meta">
                    ${c.free ? '<span class="course-tag free">FREE</span>' : '<span class="course-tag" style="color:var(--danger);border-color:rgba(239,68,68,0.2)">PAID</span>'}
                    ${c.cert ? '<span class="course-tag cert">CERTIFICATE</span>' : ''}
                    <span class="course-tag ${c.level}">${c.level}</span>
                    <span class="course-duration">⏱ ${c.duration}</span>
                  </div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
};
// track views
const _origRenderCourses=window.renderCourses;
window.renderCourses=function(){_origRenderCourses();if(window.CV_USER)FS.incStat(CV_USER.uid,'course_view');};
