export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Site
    'site.title': 'Zhanwei ZHANG',
    'site.description': 'Aspiring Software Engineer & Machine Learning Researcher',

    // Nav
    'nav.home': 'Home',
    'nav.experiences': 'Experiences',
    'nav.publications': 'Publications',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home page
    'home.hero.description':
      'A dedicated and innovative engineer with a strong background in software development and machine learning, seeking to apply academic knowledge and practical skills to solve complex challenges.',
    'home.hero.downloadCv': 'Download CV',
    'home.cv.selectLanguage': 'Select CV Language',
    'home.cv.pleaseChoose': 'Please choose English or Chinese.',
    'home.cv.english': 'English',
    'home.cv.chinese': '中文',
    'home.cv.cancel': 'Cancel',
    'home.education': 'Education',
    'home.education.mphil': 'M.Phil. in Data Science and Analytics',
    'home.education.mphil.school': 'The Hong Kong University of Science and Technology (Guangzhou)',
    'home.education.mphil.period': '2025 - Present',
    'home.education.beng': 'B.Eng. in Computer Science and Technology',
    'home.education.beng.school': 'Southern University of Science and Technology',
    'home.education.beng.period': '2021 - 2025',
    'home.education.institution.hkustgz': 'HKUST(GZ)',
    'home.education.institution.dsa': 'DSA',
    'home.featuredProjects': 'Featured Projects',
    'home.viewAll': 'View All',
    'home.tools': 'Tools',
    'home.creativeExpression': 'Creative Expression',
    'home.creativeExpression.tooltip': 'Like front-end technologies, these tools are also a direct way for me to express my thoughts and ideas to others.',
    'home.languages': 'Languages',
    'home.frameworks': 'Frameworks',
    'home.languagesFrameworks': 'Languages & Frameworks',

    // Projects page
    'projects.title': 'Projects',
    'projects.description':
      'A collection of my work in web development, machine learning, and data science. Each project represents a unique challenge and solution.',
    'projects.filterAll': 'All',
    'projects.techStack': 'Tech Stack',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.report': 'Report',
    'projects.private': 'Private',

    // Publications page
    'publications.title': 'Publications',
    'publications.readPaper': 'Read Paper',
    'publications.viewCode': 'View Code',

    // Experiences page
    'experiences.title': 'Experiences',

    // Contact page
    'contact.title': 'Contact',
    'contact.getInTouch': 'Get in Touch',
    'contact.description':
      "I'm open to discussing technology, project collaborations, or any potential opportunities. I look forward to hearing from you.",
    'contact.emailMe': 'Email Me',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your Name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can I help you?',
    'contact.send': 'Send Message',

    // Footer
    'footer.rights': 'All Rights Reserved.',

    // Categories
    'category.Web Development': 'Web Development',
    'category.Machine Learning': 'Machine Learning',
    'category.Data Science': 'Data Science',
    'category.Embedded Systems': 'Embedded Systems',

    // Position info
    'home.position.mphilIn': 'M.Phil. in',
  },
  zh: {
    // Site
    'site.title': '张展玮',
    'site.description': '软件工程师 & 机器学习研究者',

    // Nav
    'nav.home': '首页',
    'nav.experiences': '经历',
    'nav.publications': '论文',
    'nav.projects': '项目',
    'nav.contact': '联系',

    // Home page
    'home.hero.description':
      '一位充满热情的工程师，在软件开发和机器学习领域拥有扎实的背景，致力于将学术知识和实践技能应用于解决复杂的工程挑战。',
    'home.hero.downloadCv': '下载简历',
    'home.cv.selectLanguage': '选择简历语言',
    'home.cv.pleaseChoose': '请选择英文或中文版本。',
    'home.cv.english': 'English',
    'home.cv.chinese': '中文',
    'home.cv.cancel': '取消',
    'home.education': '教育经历',
    'home.education.mphil': '数据科学与分析 硕士研究生',
    'home.education.mphil.school': '香港科技大学（广州）',
    'home.education.mphil.period': '2025 - 至今',
    'home.education.beng': '计算机科学与技术 工学学士',
    'home.education.beng.school': '南方科技大学',
    'home.education.beng.period': '2021 - 2025',
    'home.education.institution.hkustgz': '港科大（广州）',
    'home.education.institution.dsa': '数据科学与分析',
    'home.featuredProjects': '精选项目',
    'home.viewAll': '查看全部',
    'home.tools': '工具',
    'home.creativeExpression': '创意表达',
    'home.creativeExpression.tooltip': '和前端技术一样，这些工具也是我向他人直接表达思考与想法的方式。',
    'home.languages': '编程语言',
    'home.frameworks': '框架',
    'home.languagesFrameworks': '编程语言 & 框架',

    // Projects page
    'projects.title': '项目',
    'projects.description':
      '我在 Web 开发、机器学习和数据科学领域的工作合集。每个项目都代表着独特的挑战和解决方案。',
    'projects.filterAll': '全部',
    'projects.techStack': '技术栈',
    'projects.code': '代码',
    'projects.demo': '演示',
    'projects.report': '报告',
    'projects.private': '私有',

    // Publications page
    'publications.title': '论文发表',
    'publications.readPaper': '阅读论文',
    'publications.viewCode': '查看代码',

    // Experiences page
    'experiences.title': '经历',

    // Contact page
    'contact.title': '联系我',
    'contact.getInTouch': '联系我',
    'contact.description':
      '我很乐意讨论技术话题、项目合作或任何潜在的机会，期待您的来信。',
    'contact.emailMe': '发送邮件',
    'contact.sendMessage': '发送消息',
    'contact.name': '姓名',
    'contact.namePlaceholder': '您的姓名',
    'contact.email': '邮箱',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.message': '留言',
    'contact.messagePlaceholder': '有什么我可以帮助您的？',
    'contact.send': '发送消息',

    // Footer
    'footer.rights': '保留所有权利。',

    // Categories
    'category.Web Development': 'Web 开发',
    'category.Machine Learning': '机器学习',
    'category.Data Science': '数据科学',
    'category.Embedded Systems': '嵌入式系统',

    // Position info
    'home.position.mphilIn': '硕士研究生，',
  },
} as const;
