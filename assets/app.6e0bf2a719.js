var SKETCH_FONTS = [{"url": "assets/fonts/caveat-cyrillic-ext-500-normal.woff2", "weight": 500, "range": "U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F"}, {"url": "assets/fonts/caveat-cyrillic-500-normal.woff2", "weight": 500, "range": "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116"}, {"url": "assets/fonts/caveat-latin-500-normal.woff2", "weight": 500, "range": "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"}, {"url": "assets/fonts/caveat-cyrillic-ext-700-normal.woff2", "weight": 700, "range": "U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F"}, {"url": "assets/fonts/caveat-cyrillic-700-normal.woff2", "weight": 700, "range": "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116"}, {"url": "assets/fonts/caveat-latin-700-normal.woff2", "weight": 700, "range": "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"}];
/* Site configuration — change contacts and study-time coefficients here, in one place. */
var CONFIG = {
  /* Author contact. Only https://t.me/<username> links are accepted (checked in app.js). */
  telegram: 'https://t.me/MAKSIMTUBE',
  author: 'Макс',

  /* Study-time model.
     Every roadmap stage has base hours (h) for a balanced pace. The estimate for a method is
       stage hours = h × mult[level-1] × (1 + practiceShare × practice)
     and is shown as a range [low × hours, high × hours] because real speed varies a lot.
     daily = focused minutes per study day that the method's rhythm gives (sessions × focus length).
     Calendar length assumes `studyDays` days per week unless the course has its own schedule in "My courses". */
  pace: {
    low: 0.8,
    high: 1.35,
    studyDays: 5,
    practiceShare: 0.15,
    methods: {
      pomodoro: { daily: 100, mult: [1.0, 1.05, 1.15], practice: 0 },
      p5217:    { daily: 156, mult: [1.0, 1.0, 1.05], practice: 0 },
      deep90:   { daily: 180, mult: [1.05, 0.95, 0.9], practice: 0 },
      flowtime: { daily: 120, mult: [1.0, 1.0, 1.0], practice: 0 },
      feynman:  { daily: 80,  mult: [1.15, 1.2, 1.25], practice: 0 },
      recall:   { daily: 100, mult: [1.1, 1.15, 1.2], practice: 0 },
      spaced:   { daily: 80,  mult: [1.15, 1.15, 1.2], practice: 0 },
      projects: { daily: 120, mult: [0.95, 1.0, 1.05], practice: 1 },
      twenty:   { daily: 45,  mult: [0.95, 1.0, 1.1], practice: 0 },
      custom:   { daily: 0,   mult: [1.0, 1.0, 1.0], practice: 0 }
    }
  }
};

/* Catalog data. To add a resource: copy any line inside "items" and change the fields.
   n — name, nk — optional Kazakh name, r — path after github.com/, kk / ru — descriptions. */
var SECTIONS = [
  { id: "libraries", kk: "IT-білімнің басты кітапханалары", ru: "Главные библиотеки IT-образования", sk: "Кітапханалар", sr: "Библиотеки", items: [
      { n: "Awesome Certificates", r: "PanXProject/awesome-certificates", kk: "Тегін курстар мен сертификаттар жинағы.", ru: "Подборка бесплатных курсов и сертификатов." },
      { n: "Free IT Courses", r: "alinebastos/free-courses", kk: "Әртүрлі бағыттағы тегін IT-курстар каталогы.", ru: "Каталог бесплатных IT-курсов по разным направлениям." },
      { n: "Free Programming Books", r: "EbookFoundation/free-programming-books", kk: "Түрлі тілдердегі бағдарламалау бойынша тегін кітаптар.", ru: "Бесплатные книги по программированию на разных языках." },
      { n: "Awesome Courses", r: "prakhar1989/awesome-courses", kk: "Computer Science бойынша университет курстарының жинағы.", ru: "Подборка университетских курсов по Computer Science." },
      { n: "Learn to Program", r: "karlhorky/learn-to-program", kk: "Бағдарламалауды өз бетінше үйренуге арналған материалдар.", ru: "Материалы для самостоятельного изучения программирования." },
      { n: "Free Certifications", r: "ArslanYM/Free-Certifications", kk: "Тегін курстар мен сертификаттау каталогы.", ru: "Каталог бесплатных курсов и сертификаций." },
      { n: "Awesome Free Certifications", r: "RBLucky/Awesome-Free-Certifications", kk: "Тегін кәсіби сертификаттар жинағы.", ru: "Подборка бесплатных профессиональных сертификатов." },
      { n: "Awesome", r: "sindresorhus/awesome", kk: "Тақырыптық жинақтар мен ресурстардың үлкен каталогы.", ru: "Большой каталог тематических подборок и ресурсов." }
  ]},
  { id: "basics", kk: "Нөлден бағдарламалау және Computer Science", ru: "Программирование с нуля и Computer Science", sk: "Нөлден бастау", sr: "С нуля и CS", items: [
      { n: "freeCodeCamp", r: "freeCodeCamp/freeCodeCamp", kk: "Бағдарламалауды, веб-әзірлеуді, алгоритмдерді және басқа IT-дағдыларды тәжірибе арқылы үйрену.", ru: "Практическое обучение программированию, веб-разработке, алгоритмам и другим IT-навыкам." },
      { n: "OSSU — Computer Science", r: "ossu/computer-science", kk: "Өз бетінше оқуға арналған университеттік бағдарлама: математика, алгоритмдер, ОЖ, желілер және бағдарламалау.", ru: "Самостоятельная университетская программа: математика, алгоритмы, ОС, сети и программирование." },
      { n: "The Odin Project", r: "TheOdinProject/curriculum", kk: "Жобалары мен тәжірибесі бар тегін Full Stack Web Development бағдарламасы.", ru: "Бесплатная программа Full Stack Web Development с проектами и практикой." },
      { n: "Coding Interview University", r: "jwasham/coding-interview-university", kk: "Software Engineer жұмысына дайындалуға арналған Computer Science оқу жоспары.", ru: "Учебный план Computer Science для подготовки к работе Software Engineer." },
      { n: "Microsoft Web Development for Beginners", r: "microsoft/Web-Dev-For-Beginners", kk: "HTML, CSS және JavaScript бойынша 24 сабақ, 12 апталық оқу.", ru: "24 урока и 12 недель обучения HTML, CSS и JavaScript." },
      { n: "Project Based Learning", r: "practical-tutorials/project-based-learning", kk: "Жобалар арқылы оқу: түрлі тілдердегі қадамдық туториалдар.", ru: "Обучение через проекты: пошаговые туториалы на разных языках." },
      { n: "App Ideas", r: "florinpop17/app-ideas", kk: "Портфолиоға арналған жоба идеялары — оңайдан күрделіге дейін.", ru: "Идеи проектов для портфолио — от простых к сложным." },
      { n: "Learn Git Branching", r: "pcottle/learnGitBranching", kk: "Git-ті интерактивті ойын түрінде үйрену.", ru: "Интерактивное изучение Git в формате игры." }
  ]},
  { id: "languages", kk: "Бағдарламалау тілдері", ru: "Языки программирования", sk: "Тілдер", sr: "Языки", items: [
      { n: "Python-100-Days", r: "jackfrued/Python-100-Days", kk: "Python-ды 100 күнде үйрену: негіздерден жобаларға дейін.", ru: "Изучение Python за 100 дней: от основ до проектов." },
      { n: "30 Days of Python", r: "Asabeneh/30-Days-Of-Python", kk: "Python-ды 30 күнде үйренудің практикалық жоспары.", ru: "Практический план изучения Python за 30 дней." },
      { n: "30 Days of JavaScript", r: "Asabeneh/30-Days-Of-JavaScript", kk: "JavaScript-ті 30 күнде үйренудің практикалық жоспары.", ru: "Практический план изучения JavaScript за 30 дней." },
      { n: "30 Days of HTML", r: "Asabeneh/30-Days-Of-HTML", kk: "HTML бойынша оқу материалдары.", ru: "Учебные материалы по HTML." },
      { n: "MDN Learning Area: CSS", r: "mdn/learning-area/tree/main/css", kk: "MDN-нің CSS сабақтарына арналған код мысалдары: layout, блоктар, қаріптер.", ru: "Примеры кода к урокам CSS на MDN: раскладка, блоки, шрифты." },
      { n: "30 Days of React", r: "Asabeneh/30-Days-Of-React", kk: "React кітапханасын практикада үйрену.", ru: "Практическое изучение библиотеки React." },
      { n: "Modern C++ Programming", r: "federico-busato/Modern-CPP-Programming", kk: "Заманауи C++ бойынша материалдар.", ru: "Материалы по современному C++." },
      { n: "You Don't Know JS", r: "getify/You-Dont-Know-JS", kk: "JavaScript-ті терең үйрену.", ru: "Подробное изучение JavaScript." },
      { n: "Airbnb JavaScript Style Guide", r: "airbnb/javascript", kk: "JavaScript кодының стилі мен сапасы бойынша ұсыныстар.", ru: "Рекомендации по стилю и качеству JavaScript-кода." },
      { n: "33 JS Concepts", r: "leonardomso/33-js-concepts", kk: "Әр JavaScript-әзірлеуші білуі тиіс 33 тұжырымдама.", ru: "33 концепции, которые должен знать каждый JavaScript-разработчик." },
      { n: "Learn Go with Tests", r: "quii/learn-go-with-tests", kk: "Go тілін тесттер арқылы үйрену.", ru: "Изучение Go через тесты." },
      { n: "Rustlings", r: "rust-lang/rustlings", kk: "Rust тілін үйренуге арналған шағын жаттығулар.", ru: "Небольшие упражнения для изучения Rust." },
      { n: "What the f*ck Python", r: "satwikkansal/wtfpython", kk: "Python-ның күтпеген мінез-құлқы мысалдармен.", ru: "Неочевидное поведение Python на примерах." }
  ]},
  { id: "web", kk: "Frontend және Backend әзірлеу", ru: "Frontend и Backend-разработка", sk: "Frontend және Backend", sr: "Frontend и Backend", items: [
      { n: "Full Stack Open", r: "fullstack-hy2020/fullstack-hy2020.github.io", kk: "React, Node.js, REST API, GraphQL, TypeScript, тестілеу және CI/CD.", ru: "React, Node.js, REST API, GraphQL, TypeScript, тестирование и CI/CD." },
      { n: "Developer Roadmap", r: "kamranahmedse/developer-roadmap", kk: "Frontend, Backend, DevOps, Python, AI және басқа мамандықтардың жол карталары.", ru: "Дорожные карты Frontend, Backend, DevOps, Python, AI и других специализаций." },
      { n: "Node.js Lessons", r: "alsotang/node-lessons", kk: "Node.js-те серверлік әзірлеу бойынша практикалық сабақтар.", ru: "Практические уроки серверной разработки на Node.js." },
      { n: "JavaScript Algorithms", r: "trekhleb/javascript-algorithms", kk: "JavaScript-тегі алгоритмдер мен деректер құрылымдары.", ru: "Алгоритмы и структуры данных на JavaScript." },
      { n: "TypeScript", r: "microsoft/TypeScript", kk: "TypeScript тілі мен оның құжаттамасының ресми репозиторийі.", ru: "Официальный репозиторий языка TypeScript и его документации." },
      { n: "Node.js Best Practices", r: "goldbergyoni/nodebestpractices", kk: "Node.js бойынша үздік тәжірибелер жинағы.", ru: "Сборник лучших практик Node.js." },
      { n: "Front-End Checklist", r: "thedaviddias/Front-End-Checklist", kk: "Сайтты іске қосар алдындағы frontend чек-листі.", ru: "Чек-лист frontend-разработчика перед запуском сайта." }
  ]},
  { id: "ai", kk: "Жасанды интеллект және Machine Learning", ru: "Искусственный интеллект и Machine Learning", sk: "ЖИ және ML", sr: "ИИ и ML", items: [
      { n: "Generative AI for Beginners", r: "microsoft/generative-ai-for-beginners", kk: "Генеративті ЖИ, LLM, RAG негізінде қосымшалар жасау және промпт-инжиниринг бойынша 21 сабақ.", ru: "21 урок по созданию приложений на базе генеративного ИИ, LLM, RAG и промпт-инжинирингу." },
      { n: "ML for Beginners", r: "microsoft/ML-For-Beginners", kk: "Машиналық оқыту, Python және Scikit-learn бойынша 26 сабақ.", ru: "26 уроков по машинному обучению, Python и Scikit-learn." },
      { n: "AI for Beginners", r: "microsoft/AI-For-Beginners", kk: "Нейрондық желілер, компьютерлік көру және табиғи тілді өңдеу бойынша материалдар.", ru: "Материалы по нейросетям, компьютерному зрению и обработке языка." },
      { n: "AI Agents for Beginners", r: "microsoft/ai-agents-for-beginners", kk: "AI-агенттер мен мультиагенттік жүйелер жасау бойынша 18 сабақ.", ru: "18 уроков по созданию AI-агентов и мультиагентных систем." },
      { n: "LLM Course", r: "mlabonne/llm-course", kk: "Үлкен тілдік модельдер, Transformer, fine-tuning және практикалық материалдар.", ru: "Большие языковые модели, Transformer, fine-tuning и практические материалы." },
      { n: "Made With ML", r: "GokuMohandas/Made-With-ML", kk: "Практикалық машиналық оқыту және ML-ді production-ға енгізу.", ru: "Практическое машинное обучение и внедрение ML в production." },
      { n: "Dive into Deep Learning", r: "d2l-ai/d2l-en", kk: "Коды мен жаттығулары бар терең оқыту оқулығы.", ru: "Учебник по глубокому обучению с кодом и упражнениями." },
      { n: "LLMs from Scratch", r: "rasbt/LLMs-from-scratch", kk: "Үлкен тілдік модельдерді нөлден құру принциптерін үйрену.", ru: "Изучение принципов создания больших языковых моделей с нуля." },
      { n: "Data Science for Beginners", r: "microsoft/Data-Science-For-Beginners", kk: "Data Science бойынша кіріспе бағдарлама.", ru: "Вводная программа по Data Science." },
      { n: "Neural Networks: Zero to Hero", r: "karpathy/nn-zero-to-hero", kk: "Андрей Карпатидің видеокурсы: нейрондық желілер нөлден GPT-ге дейін.", ru: "Видеокурс Андрея Карпаты: нейросети с нуля и до GPT." },
      { n: "fast.ai Fastbook", r: "fastai/fastbook", kk: "fast.ai терең оқыту кітабы Jupyter-ноутбуктар түрінде.", ru: "Книга fast.ai по глубокому обучению в виде Jupyter-ноутбуков." },
      { n: "fast.ai Course", r: "fastai/course22", kk: "fast.ai-дың «Practical Deep Learning for Coders» курсы.", ru: "Курс fast.ai «Practical Deep Learning for Coders»." },
      { n: "YSDA Practical DL", r: "yandexdataschool/Practical_DL", kk: "Яндекс ШАД-тың терең оқыту курсы: ноутбуктар мен тапсырмалар.", ru: "Курс ШАД Яндекса по глубокому обучению: ноутбуки и задания." },
      { n: "mlcourse.ai", r: "Yorko/mlcourse.ai", kk: "Open Data Science қауымдастығының ашық машиналық оқыту курсы.", ru: "Открытый курс машинного обучения от сообщества Open Data Science." }
  ]},
  { id: "llm", kk: "LLM және промпт-инжиниринг", ru: "LLM и промпт-инжиниринг", sk: "LLM және промпт", sr: "LLM и промпты", items: [
      { n: "Hugging Face LLM Course", r: "huggingface/course", kk: "Hugging Face-тің LLM курсы: Transformers, fine-tuning, датасеттер.", ru: "Курс Hugging Face по LLM: Transformers, fine-tuning, датасеты." },
      { n: "Smol Course", r: "huggingface/smol-course", kk: "Шағын тілдік модельдерді баптау бойынша практикалық курс.", ru: "Практический курс по дообучению небольших языковых моделей." },
      { n: "LLM Zoomcamp", r: "DataTalksClub/llm-zoomcamp", kk: "LLM мен RAG бойынша тегін практикалық курс.", ru: "Бесплатный практический курс по LLM и RAG." },
      { n: "Anthropic Courses", r: "anthropics/courses", kk: "Anthropic-тің ресми курстары: Claude API, промпт-инжиниринг, құралдармен жұмыс.", ru: "Официальные курсы Anthropic: Claude API, промпт-инжиниринг, работа с инструментами." },
      { n: "Prompt Engineering Tutorial", r: "anthropics/prompt-eng-interactive-tutorial", kk: "Промпт-инжиниринг бойынша интерактивті туториал.", ru: "Интерактивный туториал по промпт-инжинирингу." },
      { n: "Prompt Engineering Guide", r: "dair-ai/Prompt-Engineering-Guide", kk: "Промпт-инжиниринг бойынша толық нұсқаулық.", ru: "Подробное руководство по промпт-инжинирингу." },
      { n: "OpenAI Cookbook", r: "openai/openai-cookbook", kk: "OpenAI API-мен жұмыс істеудің мысалдары мен нұсқаулары.", ru: "Примеры и руководства по работе с OpenAI API." }
  ]},
  { id: "agents", kk: "AI-агенттер және автоматтандыру", ru: "AI-агенты и автоматизация", sk: "AI-агенттер", sr: "AI-агенты", items: [
      { n: "MCP for Beginners", r: "microsoft/mcp-for-beginners", kk: "Model Context Protocol курсы: ЖИ-ді құралдар мен деректерге қосу.", ru: "Курс по Model Context Protocol: как подключать ИИ к инструментам и данным." },
      { n: "Hugging Face Agents Course", r: "huggingface/agents-course", kk: "Hugging Face-тің AI-агенттер курсы: smolagents, LangGraph, LlamaIndex.", ru: "Курс Hugging Face по AI-агентам: smolagents, LangGraph, LlamaIndex." },
      { n: "Hugging Face MCP Course", r: "huggingface/mcp-course", kk: "Hugging Face-тің MCP бойынша курсы.", ru: "Курс Hugging Face по MCP." },
      { n: "LangChain Academy", r: "langchain-ai/langchain-academy", kk: "LangGraph бойынша ресми курс: агенттер, жад, адамның бақылауы.", ru: "Официальный курс по LangGraph: агенты, память, контроль человеком." },
      { n: "GenAI Agents", r: "NirDiamant/GenAI_Agents", kk: "Қарапайымнан күрделіге дейінгі AI-агенттер туториалдары.", ru: "Туториалы по AI-агентам — от простых до продвинутых." },
      { n: "RAG Techniques", r: "NirDiamant/RAG_Techniques", kk: "RAG техникалары: кодпен түсіндірілген практикалық ноутбуктар.", ru: "Техники RAG в практических ноутбуках с кодом." },
      { n: "Awesome LLM Apps", r: "Shubhamsaboo/awesome-llm-apps", kk: "AI-агенттер мен RAG негізіндегі дайын LLM-қосымшалар жинағы.", ru: "Коллекция готовых LLM-приложений с AI-агентами и RAG." },
      { n: "AI Engineering Hub", r: "patchy631/ai-engineering-hub", kk: "LLM, RAG және агенттер бойынша практикалық жобалар.", ru: "Практические проекты по LLM, RAG и AI-агентам." },
      { n: "Awesome AI Agents", r: "e2b-dev/awesome-ai-agents", kk: "AI-агенттер мен агенттік фреймворктар каталогы.", ru: "Каталог AI-агентов и агентных фреймворков." },
      { n: "n8n Self-hosted AI Starter Kit", r: "n8n-io/self-hosted-ai-starter-kit", kk: "n8n мен жергілікті ЖИ-модельдерде автоматтандыруды бастауға арналған шаблон.", ru: "Шаблон для старта автоматизаций на n8n с локальными ИИ-моделями." },
      { n: "Awesome n8n Templates", r: "enescingoz/awesome-n8n-templates", kk: "n8n автоматтандыруларына арналған дайын шаблондар жинағы.", ru: "Коллекция готовых шаблонов автоматизаций для n8n." }
  ]},
  { id: "security", kk: "Киберқауіпсіздік", ru: "Кибербезопасность", sk: "Киберқауіпсіздік", sr: "Кибербезопасность", items: [
      { n: "PayloadsAllTheThings", r: "swisskyrepo/PayloadsAllTheThings", kk: "Веб-қауіпсіздік және осалдықтарды тестілеу бойынша анықтамалық материалдар.", ru: "Справочные материалы по веб-безопасности и тестированию уязвимостей." },
      { n: "OWASP Top 10", r: "OWASP/Top10", kk: "Веб-қосымшалар қауіпсіздігінің негізгі тәуекел санаттары.", ru: "Основные категории рисков безопасности веб-приложений." },
      { n: "OWASP WebGoat", r: "WebGoat/WebGoat", kk: "Веб-қауіпсіздік бойынша практикалық оқу ортасы.", ru: "Практическая учебная среда по веб-безопасности." },
      { n: "OWASP NodeGoat", r: "OWASP/NodeGoat", kk: "Node.js қосымшаларының қауіпсіздігін тәжірибеде үйрену.", ru: "Практика изучения безопасности приложений Node.js." },
      { n: "Awesome Pentest", r: "enaqx/awesome-pentest", kk: "Penetration testing бойынша құралдар мен оқу ресурстарының каталогы.", ru: "Каталог инструментов и учебных ресурсов по penetration testing." },
      { n: "The Book of Secret Knowledge", r: "trimstray/the-book-of-secret-knowledge", kk: "Жүйелік әкімшілендіру және қауіпсіздік бойынша білім мен құралдар жинағы.", ru: "Подборка знаний и инструментов по системному администрированию и безопасности." },
      { n: "Awesome Cyber Security University", r: "brootware/awesome-cyber-security-university", kk: "Киберқауіпсіздікті үйренуге арналған құрылымдалған материалдар жинағы.", ru: "Структурированная подборка материалов для изучения кибербезопасности." },
      { n: "Microsoft Security 101", r: "microsoft/Security-101", kk: "Microsoft-тың киберқауіпсіздік негіздері бойынша курсы.", ru: "Курс Microsoft по основам кибербезопасности." },
      { n: "OWASP Cheat Sheet Series", r: "OWASP/CheatSheetSeries", kk: "Қосымшалар қауіпсіздігі бойынша қысқа шпаргалкалар.", ru: "Краткие шпаргалки по безопасности приложений." },
      { n: "OWASP Web Security Testing Guide", r: "OWASP/wstg", kk: "Веб-қосымшалардың қауіпсіздігін тестілеу нұсқаулығы.", ru: "Руководство по тестированию безопасности веб-приложений." }
  ]},
  { id: "devops", kk: "DevOps, Linux және бұлтты технологиялар", ru: "DevOps, Linux и облака", sk: "DevOps және бұлт", sr: "DevOps и облака", items: [
      { n: "The Missing Semester", r: "missing-semester/missing-semester", kk: "Пәрмен жолы, Shell, Git және әзірлеуші құралдары; MIT курсы.", ru: "Командная строка, Shell, Git и инструменты разработчика; курс MIT." },
      { n: "DevOps Exercises", r: "bregman-arie/devops-exercises", kk: "DevOps-ты үйренуге арналған практикалық сұрақтар мен тапсырмалар.", ru: "Практические вопросы и задания для изучения DevOps." },
      { n: "Kubernetes Administrator Course", r: "kodekloudhub/certified-kubernetes-administrator-course", kk: "Kubernetes-ті және оны әкімшілендіруді үйренуге арналған материалдар.", ru: "Материалы для изучения Kubernetes и администрирования." },
      { n: "100 Days of Cloud", r: "100DaysOfCloud/100DaysOfCloud", kk: "Бұлтты технологияларды үйренудің практикалық жоспары.", ru: "Практический план изучения облачных технологий." },
      { n: "Kubernetes The Hard Way", r: "kelseyhightower/kubernetes-the-hard-way", kk: "Kubernetes кластерін қадам-қадаммен қолмен жинау.", ru: "Пошаговая практическая сборка Kubernetes-кластера." },
      { n: "90 Days of DevOps", r: "MichaelCade/90DaysOfDevOps", kk: "DevOps-ты 90 күнде үйрену жоспары.", ru: "План изучения DevOps за 90 дней." },
      { n: "Kubernetes Learning Path", r: "techiescamp/kubernetes-learning-path", kk: "Kubernetes-ті үйренудің қадамдық жолы.", ru: "Пошаговый путь изучения Kubernetes." },
      { n: "The Art of Command Line", r: "jlevy/the-art-of-command-line", kk: "Пәрмен жолымен жұмыс істеу өнері — бір беттік шпаргалка.", ru: "Искусство командной строки — шпаргалка на одной странице." },
      { n: "Introduction to Bash Scripting", r: "bobbyiliev/introduction-to-bash-scripting", kk: "Bash-скрипттерге кіріспе — тегін кітап.", ru: "Бесплатная книга-введение в Bash-скрипты." },
      { n: "Cantrill AWS Labs", r: "acantril/learn-cantrill-io-labs", kk: "AWS бойынша практикалық зертханалық жұмыстар.", ru: "Практические лабораторные работы по AWS." },
      { n: "Open Guide to AWS", r: "open-guides/og-aws", kk: "AWS бойынша практикалық нұсқаулық.", ru: "Практическое руководство по AWS." }
  ]},
  { id: "data", kk: "Data Science және Data Engineering", ru: "Data Science и Data Engineering", sk: "Data Science", sr: "Data Science", items: [
      { n: "Data Engineering Zoomcamp", r: "DataTalksClub/data-engineering-zoomcamp", kk: "Data Engineering бойынша тегін практикалық курс.", ru: "Бесплатный практический курс по Data Engineering." },
      { n: "Hands-On Machine Learning", r: "ageron/handson-ml3", kk: "Python-мен практикалық машиналық оқыту.", ru: "Практическое машинное обучение с Python." },
      { n: "Pandas Exercises", r: "guipsamora/pandas_exercises", kk: "Pandas-та деректермен жұмыс істеуге арналған практикалық жаттығулар.", ru: "Практические упражнения для работы с данными в Pandas." },
      { n: "Python Data Science Handbook", r: "jakevdp/PythonDataScienceHandbook", kk: "Деректерді талдауға арналған Python нұсқаулығы.", ru: "Руководство по Python для анализа данных." },
      { n: "Data Science IPython Notebooks", r: "donnemartin/data-science-ipython-notebooks", kk: "Data Science бойынша практикалық ноутбуктар жинағы.", ru: "Подборка практических ноутбуков по Data Science." },
      { n: "Machine Learning Zoomcamp", r: "DataTalksClub/machine-learning-zoomcamp", kk: "Машиналық оқыту бойынша тегін практикалық курс.", ru: "Бесплатный практический курс по машинному обучению." },
      { n: "MLOps Zoomcamp", r: "DataTalksClub/mlops-zoomcamp", kk: "MLOps бойынша тегін курс: модельдерді production-ға шығару.", ru: "Бесплатный курс по MLOps: вывод моделей в production." },
      { n: "Awesome Data Science", r: "academic/awesome-datascience", kk: "Data Science-ті үйренуге арналған ресурстар жинағы.", ru: "Подборка ресурсов для изучения Data Science." }
  ]},
  { id: "architecture", kk: "SQL, дерекқорлар және архитектура", ru: "SQL, базы данных и архитектура", sk: "SQL және архитектура", sr: "SQL и архитектура", items: [
      { n: "System Design Primer", r: "donnemartin/system-design-primer", kk: "Масштабталатын IT-жүйелерді жобалау бойынша материалдар.", ru: "Материалы по проектированию масштабируемых IT-систем." },
      { n: "System Design 101", r: "ByteByteGoHq/system-design-101", kk: "Жүйелер архитектурасы мен негізгі техникалық тұжырымдамалардың түсіндірмесі.", ru: "Объяснения архитектуры систем и ключевых технических концепций." },
      { n: "PostgreSQL Exercises", r: "AlisdairO/pgexercises", kk: "SQL және PostgreSQL бойынша практикалық жаттығулар.", ru: "Практические упражнения по SQL и PostgreSQL." },
      { n: "Build Your Own X", r: "codecrafters-io/build-your-own-x", kk: "Өз ОЖ-ңды, дерекқорыңды, компиляторыңды және басқа технологияларды жасау жобалары.", ru: "Проекты по созданию собственных ОС, баз данных, компиляторов и других технологий." },
      { n: "System Design Course", r: "karanpratapsingh/system-design", kk: "Жүйелерді жобалау бойынша толық курс.", ru: "Полный курс по проектированию систем." }
  ]},
  { id: "qa", kk: "QA және тестілеуді автоматтандыру", ru: "QA и автоматизация тестирования", sk: "QA және тестілеу", sr: "QA и тесты", items: [
      { n: "Awesome Test Automation", r: "atinfo/awesome-test-automation", kk: "Тестілеуді автоматтандыру бойынша құралдар мен материалдар каталогы.", ru: "Каталог инструментов и материалов по автоматизации тестирования." },
      { n: "Playwright", r: "microsoft/playwright", kk: "Браузерлік тестілеуді автоматтандыру құралы.", ru: "Инструмент автоматизации браузерного тестирования." },
      { n: "Selenium", r: "SeleniumHQ/selenium", kk: "Браузерлерді автоматтандыру және тестілеу құралдары.", ru: "Инструменты для автоматизации браузеров и тестирования." },
      { n: "Karate", r: "karatelabs/karate", kk: "API тестілеуге арналған құрал.", ru: "Инструмент для тестирования API." },
      { n: "Cypress", r: "cypress-io/cypress", kk: "Веб-қосымшаларды тестілеу платформасы.", ru: "Платформа для тестирования веб-приложений." },
      { n: "Appium", r: "appium/appium", kk: "Мобильді қосымшаларды тестілеуді автоматтандыру.", ru: "Автоматизация тестирования мобильных приложений." },
      { n: "JavaScript Testing Best Practices", r: "goldbergyoni/javascript-testing-best-practices", kk: "JavaScript пен Node.js тестілеудің үздік тәжірибелері.", ru: "Лучшие практики тестирования JavaScript и Node.js." }
  ]},
  { id: "mobile", kk: "Мобильді әзірлеу", ru: "Мобильная разработка", sk: "Мобильді әзірлеу", sr: "Мобильная разработка", items: [
      { n: "Flutter", r: "flutter/flutter", kk: "Android және iOS қосымшаларын әзірлеуге арналған фреймворк.", ru: "Фреймворк для разработки приложений Android и iOS." },
      { n: "React Native", r: "facebook/react-native", kk: "JavaScript және React көмегімен мобильді қосымшалар әзірлеу.", ru: "Разработка мобильных приложений с JavaScript и React." },
      { n: "Android Compose Samples", r: "android/compose-samples", kk: "Android қосымшаларын әзірлеу мысалдары.", ru: "Примеры разработки Android-приложений." },
      { n: "Now in Android", r: "android/nowinandroid", kk: "Толыққанды заманауи Android қосымшасының үлгісі.", ru: "Пример полноценного современного Android-приложения." },
      { n: "Kotlin Koans", r: "Kotlin/kotlin-koans", kk: "Kotlin-ді үйренуге арналған практикалық тапсырмалар.", ru: "Практические задания для изучения Kotlin." },
      { n: "Flutter Samples", r: "flutter/samples", kk: "Flutter мысалдары мен демо-жобалары.", ru: "Примеры и демонстрационные проекты Flutter." },
      { n: "Android Architecture Samples", r: "android/architecture-samples", kk: "Android қосымшаларының архитектурасы бойынша мысалдар.", ru: "Примеры архитектуры Android-приложений." },
      { n: "Awesome Flutter", r: "Solido/awesome-flutter", kk: "Flutter бойынша ресурстар мен кітапханалар каталогы.", ru: "Каталог ресурсов и библиотек по Flutter." }
  ]},
  { id: "algorithms", kk: "Алгоритмдер және сұхбатқа дайындық", ru: "Алгоритмы и подготовка к собеседованиям", sk: "Алгоритмдер", sr: "Алгоритмы", items: [
      { n: "The Algorithms Python", r: "TheAlgorithms/Python", kk: "Python-дағы алгоритмдер мен деректер құрылымдарының іске асырылуы.", ru: "Реализации алгоритмов и структур данных на Python." },
      { n: "The Algorithms Java", r: "TheAlgorithms/Java", kk: "Java-дағы алгоритмдердің іске асырылуы.", ru: "Реализации алгоритмов на Java." },
      { n: "Algorithm Visualizer", r: "algorithm-visualizer/algorithm-visualizer", kk: "Алгоритмдерді көрнекі түрде үйрену.", ru: "Визуальное изучение алгоритмов." },
      { n: "Clean Code JavaScript", r: "ryanmcdermott/clean-code-javascript", kk: "Түсінікті әрі қолдауға ыңғайлы код жазу принциптері.", ru: "Принципы написания понятного и поддерживаемого кода." },
      { n: "OSSU Mathematics", r: "ossu/math", kk: "IT және Computer Science-ке арналған математика курстарының жинағы.", ru: "Подборка математических курсов для IT и Computer Science." },
      { n: "Stanford CS229", r: "afshinea/stanford-cs-229-machine-learning", kk: "Stanford-тың Machine Learning курсының конспектілері мен материалдары.", ru: "Конспекты и материалы курса Stanford по Machine Learning." },
      { n: "Tech Interview Handbook", r: "yangshun/tech-interview-handbook", kk: "Техникалық сұхбатқа дайындық нұсқаулығы.", ru: "Руководство по подготовке к техническим собеседованиям." },
      { n: "NeetCode Solutions", r: "neetcode-gh/leetcode", kk: "NeetCode есептерінің түрлі тілдердегі шешімдері.", ru: "Решения задач NeetCode на разных языках." }
  ]},
  { id: "russian", kk: "Орыс тіліндегі материалдар", ru: "Русскоязычные материалы", sk: "Орыс тілінде", sr: "На русском", items: [
      { n: "Современный учебник JavaScript", nk: "Заманауи JavaScript оқулығы", r: "javascript-tutorial/ru.javascript.info", kk: "Негіздерден күрделі тақырыптарға дейінгі орыс тіліндегі толық JavaScript оқулығы.", ru: "Подробный русскоязычный учебник JavaScript от основ до продвинутых тем." },
      { n: "Самоучитель программирования", nk: "Бағдарламалау бойынша өздік оқулық", r: "rodion-m/self_taught_programming", kk: "Бағдарламалауды өз бетінше үйренуге арналған материалдар.", ru: "Материалы для самостоятельного изучения программирования." },
      { n: "Python Beginners FAQ", r: "ru-python-beginners/faq", kk: "Python-ды жаңадан үйренушілерге арналған сұрақтар, жауаптар және материалдар.", ru: "Вопросы, ответы и материалы для начинающих изучать Python." },
      { n: "Free Programming Books — курсы на русском", nk: "Free Programming Books — орыс тіліндегі курстар", r: "EbookFoundation/free-programming-books/blob/main/courses/free-courses-ru.md", kk: "Бағдарламалау бойынша орыс тіліндегі тегін курстар тізімі.", ru: "Список бесплатных русскоязычных курсов по программированию." },
      { n: "Programming Books", r: "rosharp/Programming-Books", kk: "Бағдарламалау және IT бойынша кітаптар жинағы.", ru: "Подборка книг по программированию и IT." },
      { n: "Lectorea", r: "fivol/lectorea", kk: "Университеттік бейнедәрістер мен оқу курстарының каталогы.", ru: "Каталог университетских видеолекций и учебных курсов." },
      { n: "Курс машинного обучения ВШЭ", nk: "ЖЭМ машиналық оқыту курсы", r: "esokolov/ml-course-hse", kk: "Жоғары экономика мектебінің (ВШЭ) машиналық оқыту курсы: дәрістер мен семинарлар.", ru: "Курс машинного обучения ВШЭ: лекции и семинары." },
      { n: "Курс ML от girafe-ai", nk: "girafe-ai машиналық оқыту курсы", r: "girafe-ai/ml-course", kk: "Орыс тіліндегі дәрістер мен ноутбуктары бар машиналық оқыту курсы.", ru: "Курс машинного обучения с лекциями и ноутбуками на русском." },
      { n: "Искусство командной строки", nk: "Пәрмен жолы өнері (орысша)", r: "jlevy/the-art-of-command-line/blob/master/README-ru.md", kk: "The Art of Command Line шпаргалкасының орысша аудармасы.", ru: "Русский перевод шпаргалки The Art of Command Line." }
  ]},
  { id: "university", kk: "Университет бағдарламалары", ru: "Университетские программы", sk: "Университеттер", sr: "Университеты", items: [
      { n: "OSSU Computer Science", r: "ossu/computer-science", kk: "Computer Science-ті өз бетінше оқу бағдарламасы.", ru: "Самостоятельная программа обучения Computer Science." },
      { n: "OSSU Mathematics", r: "ossu/math", kk: "Өз бетінше оқуға арналған математика бағдарламасы.", ru: "Математическая программа для самостоятельного обучения." },
      { n: "MIT Missing Semester", r: "missing-semester/missing-semester", kk: "Әзірлеуші құралдарымен жұмыс істеудің практикалық дағдылары.", ru: "Практические навыки работы с инструментами разработчика." },
      { n: "CS Self Learning", r: "PKUFlyingPig/cs-self-learning", kk: "Computer Science бойынша курстар мен материалдар жинағы.", ru: "Подборка курсов и материалов по Computer Science." },
      { n: "Tsinghua CS Courses", r: "PKUanonym/REKCARC-TSC-UHT", kk: "Компьютерлік ғылымдар бойынша материалдар мен курстар.", ru: "Материалы и курсы по компьютерным наукам." },
      { n: "Stanford CS221", r: "stanford-cs221/lectures", kk: "Жасанды интеллект бойынша курс материалдары.", ru: "Материалы курса по искусственному интеллекту." },
      { n: "Comprehensive Rust", r: "google/comprehensive-rust", kk: "Google-дың Rust тілі бойынша тегін оқу курсы.", ru: "Бесплатный учебный курс по языку Rust от Google." },
      { n: "Stanford CS231n", r: "cs231n/cs231n.github.io", kk: "Stanford CS231n: компьютерлік көруге арналған нейрондық желілер конспектілері.", ru: "Stanford CS231n: конспекты по нейросетям для компьютерного зрения." },
      { n: "CS Video Courses", r: "Developer-Y/cs-video-courses", kk: "Computer Science бойынша университеттік видеокурстардың үлкен тізімі.", ru: "Большой список университетских видеокурсов по Computer Science." }
  ]}
];

var TOP = [
      { n: "freeCodeCamp", r: "freeCodeCamp/freeCodeCamp", kk: "Бағдарламалауды тәжірибе арқылы үйрену", ru: "Практическое обучение программированию" },
      { n: "OSSU Computer Science", r: "ossu/computer-science", kk: "Computer Science-ті өз бетінше толық оқу бағдарламасы", ru: "Полная самостоятельная программа Computer Science" },
      { n: "The Odin Project", r: "TheOdinProject/curriculum", kk: "Full Stack Web Development", ru: "Full Stack Web Development" },
      { n: "Microsoft Web Dev for Beginners", r: "microsoft/Web-Dev-For-Beginners", kk: "HTML, CSS және JavaScript", ru: "HTML, CSS и JavaScript" },
      { n: "Generative AI for Beginners", r: "microsoft/generative-ai-for-beginners", kk: "Генеративті жасанды интеллект", ru: "Генеративный искусственный интеллект" },
      { n: "ML for Beginners", r: "microsoft/ML-For-Beginners", kk: "Машиналық оқыту", ru: "Машинное обучение" },
      { n: "AI Agents for Beginners", r: "microsoft/ai-agents-for-beginners", kk: "AI-агенттер жасау", ru: "Создание AI-агентов" },
      { n: "Python-100-Days", r: "jackfrued/Python-100-Days", kk: "Python нөлден", ru: "Python с нуля" },
      { n: "Full Stack Open", r: "fullstack-hy2020/fullstack-hy2020.github.io", kk: "Заманауи Full Stack әзірлеу", ru: "Современная Full Stack-разработка" },
      { n: "Data Engineering Zoomcamp", r: "DataTalksClub/data-engineering-zoomcamp", kk: "Деректер инженериясы", ru: "Инженерия данных" },
      { n: "The Missing Semester", r: "missing-semester/missing-semester", kk: "Linux, Git және әзірлеуші құралдары", ru: "Linux, Git и инструменты разработчика" },
      { n: "System Design Primer", r: "donnemartin/system-design-primer", kk: "IT-жүйелер архитектурасы", ru: "Архитектура IT-систем" },
      { n: "JavaScript Algorithms", r: "trekhleb/javascript-algorithms", kk: "Алгоритмдер мен деректер құрылымдары", ru: "Алгоритмы и структуры данных" },
      { n: "OWASP WebGoat", r: "WebGoat/WebGoat", kk: "Веб-қауіпсіздік практикасы", ru: "Практика веб-безопасности" },
      { n: "LLMs from Scratch", r: "rasbt/LLMs-from-scratch", kk: "Үлкен тілдік модельдерді нөлден үйрену", ru: "Изучение больших языковых моделей с нуля" }
];

var TOPICS = [
      { n: "Curriculum", r: "topics/curriculum", kk: "Оқу бағдарламалары мен жоспарлары", ru: "Учебные программы и планы" },
      { n: "Courses", r: "topics/courses", kk: "Курстары бар репозиторийлер", ru: "Репозитории с курсами" },
      { n: "Free Courses", r: "topics/free-courses", kk: "Тегін курстар жинақтары", ru: "Подборки бесплатных курсов" },
      { n: "Free Course", r: "topics/free-course", kk: "Жеке тегін курстар", ru: "Отдельные бесплатные курсы" },
      { n: "Online Courses", r: "topics/online-courses", kk: "Онлайн оқыту", ru: "Онлайн-обучение" }
];

/* Self-study methods. timer: work/brk in minutes; long + every = long break after N cycles; flow = count-up stopwatch. */
var METHODS = [
  { id: 'pomodoro', glyph: '25/5', timer: { work: 25, brk: 5, long: 15, every: 4 },
    kk: { name: 'Помодоро', tag: '25 минут фокус, 5 минут үзіліс.',
      fits: 'Бастаушыларға, зейіні тез шашырайтындарға және ұзақ курстарды кішкене қадамдармен өтуге.',
      steps: ['Бір нақты тапсырма таңда: бір сабақ, бір тарау немесе бір есеп.', 'Таймерді 25 минутқа қос, телефонды аулақ қой.', 'Сигнал шыққанда 5 минут демал: орныңнан тұр, су іш, экранға қарама.', 'Әр төрт помодородан кейін 15 минуттық ұзақ үзіліс жаса.'],
      tip: 'Помодоро ортасында басқа ой келсе, қағазға жазып қой да, кейін орында.' },
    ru: { name: 'Помодоро', tag: '25 минут фокуса, 5 минут отдыха.',
      fits: 'Новичкам, тем, кто быстро отвлекается, и для длинных курсов маленькими шагами.',
      steps: ['Выбери одну конкретную задачу: урок, главу или задачу.', 'Запусти таймер на 25 минут и убери телефон.', 'По сигналу отдохни 5 минут: встань, попей воды, не смотри в экран.', 'После каждых четырёх помодоро сделай длинный перерыв на 15 минут.'],
      tip: 'Если посреди помодоро всплыла посторонняя мысль, запиши её на бумаге и вернись к ней позже.' } },

  { id: 'p5217', glyph: '52/17', timer: { work: 52, brk: 17 },
    kk: { name: '52/17 ырғағы', tag: '52 минут терең жұмыс, 17 минут толық демалыс.',
      fits: 'Помодоро қысқа көрінетіндерге: код жазу, жоба, практика.',
      steps: ['52 минут бойы тек бір іспен айналыс, хабарламаларды өшір.', '17 минут шынымен демал: серуенде, созыл, экраннан алыс бол.', 'Күніне үш-төрт цикл жеткілікті.'],
      tip: 'Үзілісте әлеуметтік желіге кірме — ми онда демалмайды.' },
    ru: { name: 'Ритм 52/17', tag: '52 минуты глубокой работы, 17 минут полного отдыха.',
      fits: 'Тем, кому помодоро кажется коротким: код, проекты, практика.',
      steps: ['52 минуты занимайся только одним делом, уведомления выключены.', '17 минут отдыхай по-настоящему: прогулка, растяжка, без экрана.', 'Трёх-четырёх циклов в день достаточно.'],
      tip: 'Не листай соцсети в перерыве — так мозг не отдыхает.' } },

  { id: 'deep90', glyph: '90/20', timer: { work: 90, brk: 20 },
    kk: { name: 'Терең жұмыс 90/20', tag: '90 минут фокус, 20 минут қалпына келу.',
      fits: 'Күрделі тақырыптарға: алгоритмдер, ML, архитектура.',
      steps: ['Мақсатты алдын ала қой: 90 минуттан кейін не дайын болуы керек?', 'Қажетті материалдың бәрін аш, артық қойындыларды жап.', '90 минут үзіліссіз жұмыс істе.', '20 минут демал, содан кейін ғана келесі блокқа өт.'],
      tip: 'Күніне бір-екі блок — бұл көп. Сапа ұзақтықтан маңызды.' },
    ru: { name: 'Глубокая работа 90/20', tag: '90 минут фокуса, 20 минут восстановления.',
      fits: 'Для сложных тем: алгоритмы, ML, архитектура.',
      steps: ['Заранее поставь цель: что должно быть готово через 90 минут?', 'Открой все нужные материалы и закрой лишние вкладки.', 'Работай 90 минут без перерыва.', 'Отдохни 20 минут и только потом переходи к следующему блоку.'],
      tip: 'Один-два блока в день — это много. Качество важнее длительности.' } },

  { id: 'flowtime', glyph: '∞', timer: { flow: true },
    kk: { name: 'Flowtime', tag: 'Қатаң таймер жоқ: зейін тұрғанша оқисың.',
      fits: 'Ағынға оңай кіретіндерге және шығармашылық жобаларға.',
      steps: ['Секундомерді қосып, жұмысқа кіріс.', 'Шаршағаныңды немесе зейін кеткенін сезгенде «Аяқтау» батырмасын бас.', 'Үзіліс жұмыстың шамамен бестен бір бөлігі: 50 минутқа 10 минут.', 'Таймер үзілістің ұзақтығын өзі есептейді.'],
      tip: 'Егер 15 минуттан аз отырсаң, бұл ағын емес, алаңдау. Себебін тауып, алып таста.' },
    ru: { name: 'Flowtime', tag: 'Без жёсткого таймера: учишься, пока держится фокус.',
      fits: 'Тем, кто легко входит в поток, и для творческих проектов.',
      steps: ['Запусти секундомер и принимайся за работу.', 'Когда почувствуешь усталость или потерю фокуса, нажми «Завершить».', 'Отдых — примерно пятая часть работы: 10 минут на 50 минут.', 'Таймер сам посчитает длину перерыва.'],
      tip: 'Если сидишь меньше 15 минут, это не поток, а отвлечение. Найди причину и убери её.' } },

  { id: 'feynman', glyph: '20/5', timer: { work: 20, brk: 5 },
    kk: { name: 'Фейнман әдісі', tag: 'Тақырыпты бала түсінетіндей қарапайым түсіндір.',
      fits: 'Теорияны терең түсінуге: алгоритмдер, ML ұғымдары, архитектура.',
      steps: ['Тақырыпты таңдап, оны парақтың басына жаз.', 'Оны өз сөзіңмен, терминсіз, қарапайым түсіндір.', 'Қай жерде тұтылғаныңды белгіле — бұл білімдегі олқылық.', 'Материалға оралып, сол жерді түсін де, түсіндірмені жеңілдет.'],
      tip: 'Түсіндірмені дауыстап айт немесе бір минуттық видео жаз — олқылықтар бірден көрінеді.' },
    ru: { name: 'Метод Фейнмана', tag: 'Объясни тему так просто, чтобы понял ребёнок.',
      fits: 'Для глубокого понимания теории: алгоритмы, понятия ML, архитектура.',
      steps: ['Выбери тему и запиши её вверху листа.', 'Объясни её своими словами, просто и без терминов.', 'Отметь, где запнулся, — это пробел в знаниях.', 'Вернись к материалу, разберись с этим местом и упрости объяснение.'],
      tip: 'Проговори объяснение вслух или запиши минутное видео — пробелы сразу станут видны.' } },

  { id: 'recall', glyph: '25/5', timer: { work: 25, brk: 5 },
    kk: { name: 'Белсенді еске түсіру', tag: 'Қайта оқыма — материалды жауып, есіңе түсір.',
      fits: 'Видеосабақтар мен кітаптардан кейін білімді бекітуге.',
      steps: ['Сабақты көріп немесе тарауды оқып шық.', 'Материалды жап та, есіңде қалғанның бәрін жаз немесе кодпен қайтала.', 'Материалды қайта ашып, нені ұмытқаныңды тексер.', 'Тек ұмытылған бөліктерге қайта орал.'],
      tip: 'Тақырып бойынша өзіңе сұрақтар құрастыр: кейін соларға жауап беру — ең жақсы жаттығу.' },
    ru: { name: 'Активное вспоминание', tag: 'Не перечитывай — закрой материал и вспомни.',
      fits: 'Чтобы закрепить знания после видеоуроков и книг.',
      steps: ['Посмотри урок или прочитай главу.', 'Закрой материал и запиши всё, что помнишь, или повтори кодом.', 'Открой материал снова и проверь, что забыл.', 'Возвращайся только к забытым частям.'],
      tip: 'Составь себе вопросы по теме: отвечать на них потом — лучшая тренировка.' } },

  { id: 'spaced', glyph: '1·3·7', tool: 'spaced', timer: { work: 20, brk: 5 },
    kk: { name: 'Аралық қайталау', tag: 'Ұмытпай тұрып қайтала: 1, 3, 7, 14 және 30 күннен кейін.',
      fits: 'Синтаксисті, терминдерді және сұхбат сұрақтарын есте сақтауға.',
      steps: ['Жаңа тақырыпты оқыған күнді белгіле.', 'Төмендегі калькулятор қайталау күндерін есептейді.', 'Күндерді күнтізбеге қос — телефон өзі еске салады.', 'Әр қайталауда алдымен есіңе түсір, содан кейін тексер.'],
      tip: 'Карточкалар үшін Anki немесе кез келген флэш-карта қолданбасы жарайды.' },
    ru: { name: 'Интервальное повторение', tag: 'Повторяй, пока не забыл: через 1, 3, 7, 14 и 30 дней.',
      fits: 'Чтобы запомнить синтаксис, термины и вопросы к собеседованию.',
      steps: ['Отметь день, когда изучил новую тему.', 'Калькулятор ниже рассчитает даты повторений.', 'Добавь даты в календарь — телефон сам напомнит.', 'На каждом повторении сначала вспоминай, потом проверяй.'],
      tip: 'Для карточек подойдёт Anki или любое приложение с флеш-картами.' } },

  { id: 'projects', glyph: '60/10', timer: { work: 60, brk: 10 }, links: ['florinpop17/app-ideas', 'practical-tutorials/project-based-learning'],
    kk: { name: 'Жоба арқылы оқу', tag: 'Алдымен жоба, теория — қажет болғанда.',
      fits: 'Портфолио жинап, жұмысқа дайындалып жүргендерге.',
      steps: ['Шағын, бірақ нақты жоба таңда: бот, сайт немесе автоматтандыру.', 'Оны үш-бес кішкене кезеңге бөл.', 'Әр кезеңде тек білмейтін нәрсеңді оқы.', 'Нәтижені GitHub-қа жүктеп, README жаз.'],
      tip: 'Жоба идеялары керек болса, төмендегі екі репозиторийден баста.' },
    ru: { name: 'Обучение через проекты', tag: 'Сначала проект, теория — по мере необходимости.',
      fits: 'Тем, кто собирает портфолио и готовится к работе.',
      steps: ['Выбери небольшой, но реальный проект: бот, сайт или автоматизацию.', 'Разбей его на три-пять маленьких этапов.', 'На каждом этапе изучай только то, чего не знаешь.', 'Выложи результат на GitHub и напиши README.'],
      tip: 'Если нужны идеи для проекта, начни с двух репозиториев ниже.' } },

  { id: 'twenty', glyph: '20h', timer: { work: 45, brk: 10 },
    kk: { name: '20 сағат ережесі', tag: 'Жаңа дағдының негізін 20 сағат саналы практикамен меңгеруге болады.',
      fits: 'Жаңа тілді, фреймворкты немесе құралды тез бастауға. Идея Джош Кауфманға тиесілі.',
      steps: ['Дағдыны кішкене бөліктерге бөліп, ең маңыздыларын таңда.', 'Бастар алдында үш-бес ресурс жина, бірақ шексіз оқып кетпе.', 'Кедергілерді алып таста: ортаны баптап, хабарламаларды өшір.', 'Күніне 40–45 минуттан 20 сағат жина — «Фокус» бөлімі сағаттарды өзі есептейді.'],
      tip: '20 сағат — шамамен бір ай. Мақсат шебер болу емес, сенімді бастау.' },
    ru: { name: 'Правило 20 часов', tag: 'Базу нового навыка можно освоить за 20 часов осознанной практики.',
      fits: 'Чтобы быстро стартовать в новом языке, фреймворке или инструменте. Идея Джоша Кауфмана.',
      steps: ['Разбей навык на маленькие части и выбери самые важные.', 'Собери три-пять ресурсов перед стартом, но не застревай в чтении.', 'Убери препятствия: настрой окружение, выключи уведомления.', 'Набери 20 часов по 40–45 минут в день — раздел «Фокус» сам считает часы.'],
      tip: '20 часов — это примерно месяц. Цель не мастерство, а уверенный старт.' } }
];

var UI = {
  kk: {
    title: 'GitHub-тағы тегін IT-курстар',
    skip: 'Мазмұнға өту',
    brand: 'Тегін IT-курстар',
    langGroup: 'Тіл',
    tabCatalog: 'Каталог', tabFocus: 'Фокус', tabMethods: 'Әдістер', tabsLabel: 'Бөлімдер',
    h1: 'GitHub-тағы тегін <span class="nw">IT-курстар</span> мен оқу ресурстары',
    lead: function (s) { return 'GitHub-тағы тегін әрі ашық оқу репозиторийлерінің анықтамалығы: курстар, оқу жоспарлары, практикалық тапсырмалар, кітаптар және құжаттама. ' + s.res + ' ресурс, ' + s.sec + ' бағыт.'; },
    heroFocus: 'Фокус-таймер', heroMethods: 'Оқу әдістері',
    searchLabel: 'Ресурс іздеу', searchPh: 'Іздеу: Python, React, агенттер…', clear: 'Іздеуді тазалау',
    results: function (n) { return 'Табылды: ' + n; },
    empty: function (q) { return '«' + q + '» бойынша ештеңе табылмады. Басқа сөзбен іздеп көріңіз, мысалы «Python» немесе «AI».'; },
    noteTitle: 'Маңызды.',
    note: 'GitHub-репозиторийді қарау тегін, бірақ кейбір сыртқы платформалардың, сертификаттардың немесе қосымша сервистердің шарттары ақылы болуы мүмкін. Репозиторийлердің танымалдығы мен мазмұны уақыт өте өзгереді.',
    startTitle: 'Неден бастау керек', startSub: 'Бүкіл жинақтан іріктелген 15 ұсынылатын репозиторий.',
    allTitle: 'Барлық бағыттар', navLabel: 'Бағыттар',
    count: function (n) { return n + ' ресурс'; },
    topicsTitle: 'Әрі қарай іздеу үшін', topicsSub: 'Жаңа курстарды өзіңіз табуға арналған GitHub каталогтары.',
    disclaimer: 'Бұл — навигациялық жинақ. Курсты бастамас бұрын README-ді, лицензияны, соңғы жаңартылған күнін және қажетті құралдарды тексеріңіз.',
    author: 'Жинақты дайындаған — Макс, ЖИ-инженер. Сұрағыңыз болса, жеке хабарламаға жазыңыз.',
    tg: 'Telegram-ға жазу',
    toDark: 'Түнгі режимге ауысу', toLight: 'Күндізгі режимге ауысу',
    newTab: 'жаңа қойындыда ашылады', close: 'Жабу',
    addToMy: 'Менің курстарыма қосу', inMy: 'Менің курстарымда — кестені өзгерту',
    install: 'Орнату', installAria: 'Қолданбаны орнату',
    installTitle: 'Телефонға орнату',
    installText: 'Басты экраннан қолданба сияқты ашылады және интернетсіз де жұмыс істейді.',
    installLater: 'Кейін', installed: 'Қолданба орнатылды',
    iosSteps: ['Safari-дің төменгі панеліндегі «Бөлісу» (Поделиться) батырмасын бас.', '«На экран „Домой“» (Add to Home Screen) тармағын таңда.', 'Жоғарғы оң жақтағы «Қосу» (Добавить) батырмасын бас.'],
    inappTitle: 'Браузерде ашыңыз',
    inappText: 'Instagram мен Telegram ішіндегі браузерден орнату мүмкін емес. Мәзірді (⋯) ашып, «Браузерде ашу» тармағын таңдаңыз, содан кейін орнатыңыз.',
    androidSteps: ['Chrome мәзірін (⋮) аш.', '«Қолданбаны орнату» немесе «Басты экранға қосу» тармағын таңда.'],
    copyLink: 'Сілтемені көшіру', copied: 'Сілтеме көшірілді',
    planTitle: 'Оқу кестесі', planDays: 'Қай күндері', planTime: 'Уақыты', planDur: 'Бір сессия', planMethod: 'Әдіс', planGoal: 'Мақсат',
    save: 'Сақтау', remove: 'Курсты өшіру', saved: 'Кесте сақталды', addedToast: 'Менің курстарыма қосылды', removed: 'Курс өшірілді', undo: 'Қайтару',
    needDay: 'Кемінде бір күнді таңда',
    wd: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жк'],
    wdFull: ['дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі', 'жексенбі'],
    min: 'мин', hr: 'сағ',
    focusTitle: 'Фокус-таймер', focusSub: 'Әдісті таңда, курсты белгіле де, баста. Уақыт өзі есептеледі.',
    phaseWork: 'Фокус', phaseBreak: 'Үзіліс', phaseLong: 'Ұзақ үзіліс', phaseFlow: 'Ағын', phaseIdleFlow: 'Секундомер',
    start: 'Бастау', pause: 'Кідірту', resume: 'Жалғастыру', reset: 'Қайта бастау', skip: 'Өткізу', finish: 'Аяқтау',
    course: 'Курс', noCourse: 'Курссыз',
    sound: 'Дыбыс', notify: 'Хабарлама', wake: 'Экран сөнбесін',
    custom: 'Өзім', customFocus: 'Фокус', customBreak: 'Үзіліс',
    methodsLink: 'Әдіс туралы',
    workDone: function (n) { return 'Жарайсың! ' + n + ' мин жазылды. Енді демал.'; },
    breakDone: 'Үзіліс бітті. Келесі фокусқа дайынсың ба?',
    notifWork: 'Фокус аяқталды', notifWorkBody: function (n) { return 'Үзіліс: ' + n + ' мин.'; },
    notifBreak: 'Үзіліс бітті', notifBreakBody: 'Келесі фокус-сессияға дайынсың ба?',
    notifDenied: 'Браузер хабарламаларға рұқсат бермеді', wakeNA: 'Бұл браузер экранды сөндірмей ұстай алмайды',
    bgHint: 'Таймер жүріп тұрғанда қолданбаны ашық ұста: фондағы браузер сигналды кешіктіруі мүмкін.',
    statToday: 'Бүгін', statWeek: 'Осы апта', statStreak: 'Қатарынан',
    days: function (n) { return n + ' күн'; },
    myTitle: 'Менің курстарым', mySub: 'Кесте мен прогресс. Сағаттар фокус-таймерден есептеледі.',
    myEmpty: 'Әзірге курс жоқ. Каталогтан курсты тауып, «+» батырмасын бас.', toCatalog: 'Каталогқа өту',
    next: 'Келесі сабақ', today: 'бүгін', tomorrow: 'ертең',
    startCourse: 'Бастау', toCal: 'Күнтізбеге', edit: 'Кестені өзгерту',
    calHint: 'Күнтізбе әр сабақтан 10 минут бұрын еске салады.', calSaved: 'Файл жүктелді — оны ашып, күнтізбеге қос.',
    calSummary: function (n) { return 'Оқу: ' + n; },
    goalOf: function (h, g) { return h + ' / ' + g + ' сағ'; },
    methodsTitle: 'Өз бетінше оқу әдістері', methodsSub: 'Өз ырғағыңды тап. Таймері бар әдістер бір батырмамен іске қосылады.',
    more: 'Толығырақ', fits: 'Кімге қолайлы', howTo: 'Қалай жасау керек', tip: 'Кеңес', startMethod: 'Таймерді бастау', ideas: 'Жоба идеялары',
    spTopic: 'Тақырып', spTopicPh: 'Мысалы: Python тізімдері', spDate: 'Оқыған күн', spDates: 'Қайталау күндері',
    spAfter: function (n) { return n + ' күннен кейін'; }, spCal: 'Бәрін күнтізбеге қосу', spSummary: function (t) { return 'Қайталау: ' + t; }, spDefault: 'жаңа тақырып',
    offline: 'Интернет жоқ — сақталған нұсқа ашылды'
  },
  ru: {
    title: 'Бесплатные IT-курсы на GitHub',
    skip: 'Перейти к содержанию',
    brand: 'Бесплатные IT-курсы',
    langGroup: 'Язык',
    tabCatalog: 'Каталог', tabFocus: 'Фокус', tabMethods: 'Методы', tabsLabel: 'Разделы',
    h1: 'Бесплатные <span class="nw">IT-курсы</span> и учебные ресурсы на GitHub',
    lead: function (s) { return 'Справочник бесплатных и открытых учебных репозиториев GitHub: курсы, учебные планы, практические задания, книги и документация. ' + s.res + ' ' + ruPlural(s.res, 'ресурс', 'ресурса', 'ресурсов') + ', ' + s.sec + ' ' + ruPlural(s.sec, 'направление', 'направления', 'направлений') + '.'; },
    heroFocus: 'Фокус-таймер', heroMethods: 'Методы учёбы',
    searchLabel: 'Поиск ресурса', searchPh: 'Поиск: Python, React, агенты…', clear: 'Очистить поиск',
    results: function (n) { return 'Найдено: ' + n; },
    empty: function (q) { return 'По запросу «' + q + '» ничего не нашлось. Попробуйте другое слово, например «Python» или «AI».'; },
    noteTitle: 'Важно.',
    note: 'GitHub-репозиторий бесплатен для просмотра, но отдельные внешние платформы, сертификаты или дополнительные сервисы могут иметь платные условия. Популярность и содержимое репозиториев со временем меняются.',
    startTitle: 'С чего начать', startSub: '15 рекомендуемых репозиториев из всей подборки.',
    allTitle: 'Все направления', navLabel: 'Направления',
    count: function (n) { return n + ' ' + ruPlural(n, 'ресурс', 'ресурса', 'ресурсов'); },
    topicsTitle: 'Для дальнейшего поиска', topicsSub: 'Каталоги GitHub, где можно самостоятельно находить новые курсы.',
    disclaimer: 'Материал подготовлен как навигационная подборка. Перед началом курса проверьте README, лицензию, дату обновления и требования к инструментам.',
    author: 'Подборку подготовил Макс, ИИ-инженер. Есть вопросы — пишите в личные сообщения.',
    tg: 'Написать в Telegram',
    toDark: 'Включить тёмную тему', toLight: 'Включить светлую тему',
    newTab: 'откроется в новой вкладке', close: 'Закрыть',
    addToMy: 'Добавить в мои курсы', inMy: 'В моих курсах — изменить график',
    install: 'Установить', installAria: 'Установить приложение',
    installTitle: 'Установить на телефон',
    installText: 'Открывается с главного экрана как приложение и работает без интернета.',
    installLater: 'Позже', installed: 'Приложение установлено',
    iosSteps: ['Нажми «Поделиться» на нижней панели Safari.', 'Выбери «На экран „Домой“».', 'Нажми «Добавить» в правом верхнем углу.'],
    inappTitle: 'Откройте в браузере',
    inappText: 'Из встроенного браузера Instagram или Telegram установить нельзя. Открой меню (⋯), выбери «Открыть в браузере» и установи оттуда.',
    androidSteps: ['Открой меню Chrome (⋮).', 'Выбери «Установить приложение» или «Добавить на главный экран».'],
    copyLink: 'Скопировать ссылку', copied: 'Ссылка скопирована',
    planTitle: 'График обучения', planDays: 'По каким дням', planTime: 'Время', planDur: 'Одна сессия', planMethod: 'Метод', planGoal: 'Цель',
    save: 'Сохранить', remove: 'Удалить курс', saved: 'График сохранён', addedToast: 'Добавлено в мои курсы', removed: 'Курс удалён', undo: 'Вернуть',
    needDay: 'Выбери хотя бы один день',
    wd: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    wdFull: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    min: 'мин', hr: 'ч',
    focusTitle: 'Фокус-таймер', focusSub: 'Выбери метод, отметь курс и начинай. Время посчитается само.',
    phaseWork: 'Фокус', phaseBreak: 'Перерыв', phaseLong: 'Длинный перерыв', phaseFlow: 'Поток', phaseIdleFlow: 'Секундомер',
    start: 'Старт', pause: 'Пауза', resume: 'Продолжить', reset: 'Сбросить', skip: 'Пропустить', finish: 'Завершить',
    course: 'Курс', noCourse: 'Без курса',
    sound: 'Звук', notify: 'Уведомления', wake: 'Не гасить экран',
    custom: 'Свой', customFocus: 'Фокус', customBreak: 'Перерыв',
    methodsLink: 'О методе',
    workDone: function (n) { return 'Отлично! Записано ' + n + ' мин. Теперь отдых.'; },
    breakDone: 'Перерыв закончился. Готов к следующему фокусу?',
    notifWork: 'Фокус завершён', notifWorkBody: function (n) { return 'Перерыв: ' + n + ' мин.'; },
    notifBreak: 'Перерыв закончился', notifBreakBody: 'Готов к следующей фокус-сессии?',
    notifDenied: 'Браузер не разрешил уведомления', wakeNA: 'Этот браузер не умеет держать экран включённым',
    bgHint: 'Пока идёт таймер, держи приложение открытым: в фоне браузер может задержать сигнал.',
    statToday: 'Сегодня', statWeek: 'Эта неделя', statStreak: 'Подряд',
    days: function (n) { return n + ' ' + ruPlural(n, 'день', 'дня', 'дней'); },
    myTitle: 'Мои курсы', mySub: 'График и прогресс. Часы считаются из фокус-таймера.',
    myEmpty: 'Пока курсов нет. Найди курс в каталоге и нажми «+».', toCatalog: 'Перейти в каталог',
    next: 'Следующее занятие', today: 'сегодня', tomorrow: 'завтра',
    startCourse: 'Начать', toCal: 'В календарь', edit: 'Изменить график',
    calHint: 'Календарь напомнит за 10 минут до каждого занятия.', calSaved: 'Файл скачан — открой его и добавь в календарь.',
    calSummary: function (n) { return 'Учёба: ' + n; },
    goalOf: function (h, g) { return h + ' / ' + g + ' ч'; },
    methodsTitle: 'Методы самообразования', methodsSub: 'Найди свой ритм. Методы с таймером запускаются одной кнопкой.',
    more: 'Подробнее', fits: 'Кому подходит', howTo: 'Как это делать', tip: 'Совет', startMethod: 'Запустить таймер', ideas: 'Идеи для проектов',
    spTopic: 'Тема', spTopicPh: 'Например: списки в Python', spDate: 'Дата изучения', spDates: 'Даты повторений',
    spAfter: function (n) { return 'через ' + n + ' ' + ruPlural(n, 'день', 'дня', 'дней'); }, spCal: 'Добавить все в календарь', spSummary: function (t) { return 'Повторение: ' + t; }, spDefault: 'новая тема',
    offline: 'Нет интернета — открыта сохранённая версия'
  }
};

function ruPlural(n, one, few, many) {
  var m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

/* Interface strings added in v3 (roadmaps, sketchbooks, contacts, updates). Merged into UI from content.js. */
(function () {
  var KK = {
    title: 'TEGIN IT Courses — GitHub-тағы тегін IT-курстар',
    brand: 'TEGIN',
    brandSub: 'IT Courses',
    logoAlt: 'TEGIN логотипі',
    lead: function (s) { return 'GitHub-тағы тегін әрі ашық оқу репозиторийлерінің анықтамалығы: курстар, оқу жоспарлары, практикалық тапсырмалар, кітаптар және құжаттама. ' + s.res + ' ресурс, ' + s.sec + ' бағыт, әрқайсысына жеке Roadmap.'; },
    roadmap: 'Roadmap',
    roadmapOf: function (n) { return n + ': Roadmap'; },
    kind: {
      course: 'Курс',
      collection: 'Авторлық маршрут: жинақ негізінде',
      reference: 'Авторлық маршрут: анықтамалық негізінде',
      practice: 'Практика',
      tool: 'Құрал',
      book: 'Кітап'
    },
    authorRoute: 'Бұл ресурс дайын курс емес. Маршрутты Макс оның мазмұны негізінде құрастырды, бұл ресурс авторының ресми бағдарламасы емес.',
    source: function (d) { return 'Маршрут репозиторийдің README-і мен құрылымы бойынша құрастырылды, тексерілді: ' + d + '.'; },
    pre: 'Алдын ала не білу керек',
    fin: 'Қорытынды жоба',
    rmNote: 'Ескерту',
    stages: 'Кезеңдер',
    practice: 'Практика',
    checkpoint: 'Бақылау нүктесі',
    topics: 'Тақырыптар',
    level: ['Бастапқы', 'Орта', 'Жоғары'],
    levelWord: 'деңгей',
    method: 'Оқу әдісі',
    estimate: 'Шамамен уақыт',
    hrsRange: function (lo, hi) { return '≈ ' + lo + '–' + hi + ' сағ'; },
    calLine: function (d1, d2, w1, w2, rhythm) { return d1 + '–' + d2 + ' оқу күні, шамамен ' + w1 + '–' + w2 + ' апта (' + rhythm + ')'; },
    rhythmMethod: function (min, days) { return 'аптасына ' + days + ' күн, күніне ' + min + ' мин'; },
    rhythmCourse: function (days, min) { return 'сенің кестең: аптасына ' + days + ' рет, ' + min + ' мин'; },
    compare: 'Басқа әдіспен (апта)',
    estimateNote: 'Бұл бағалау. Әр кезеңнің базалық сағаты әдіс коэффициентіне көбейтіледі, күрделі тақырыптар мен практика ескеріледі. Нақты уақыт тәжірибеңе байланысты.',
    progress: function (d, t) { return 'Прогресс: ' + d + ' / ' + t; },
    markStage: function (i) { return i + '-кезеңді орындалды деп белгілеу'; },
    dlSvg: 'SVG жүктеу',
    dlPng: 'PNG жүктеу',
    dlMd: 'Roadmap мәтіні (.md)',
    downloads: 'Жүктеу',
    zoom: 'Үлкейту',
    sketchTitle: 'Скетчбук',
    sketchStart: 'Старт',
    sketchFinish: 'Мәре',
    sketchLegend: ['деңгей', 'практика', 'бақылау', 'орындалды'],
    sketchMethod: function (m, lo, hi) { return m + ' әдісімен ≈ ' + lo + '–' + hi + ' сағ'; },
    sketchFooter: 'TEGIN IT Courses · тегін және ашық',
    openRepo: 'GitHub-та ашу',
    resetProgress: 'Прогресті тазалау',
    progressReset: 'Прогресс тазаланды',
    stageDone: 'Кезең белгіленді',
    contactTitle: 'Оқуда көмек керек пе?',
    contactText: 'Материалды талдау, оқу жоспары немесе менторлық бойынша Макске жаз. Сайттағы барлық материал тегін әрі ашық қалады.',
    contactBtn: 'Автормен байланысу',
    tgBtn: 'Telegram арқылы жазу',
    contactTopics: ['Оқудағы көмек', 'Материалды талдау', 'Менторлық'],
    contactTopic: 'Тақырып',
    contactCourse: 'Курс (міндетті емес)',
    contactMsg: 'Хабарлама',
    contactPh: 'Қай курсты оқып жатырсың және не қиын?',
    contactSend: 'Көшіріп, Telegram-ды ашу',
    contactHint: 'Сайт ештеңе жібермейді: мәтін алмасу буферіне көшіріледі, Telegram-да оны жапсырып жібересің.',
    contactCopied: 'Мәтін көшірілді — Telegram-да жапсыр',
    contactNoCopy: 'Мәтінді көшіру мүмкін болмады — оны қолмен көшір',
    contactGreeting: function (topic, course, msg) { return 'Сәлем, Макс! Тақырып: ' + topic + (course ? '. Курс: ' + course : '') + '.\n\n' + msg; },
    contactEmpty: 'Хабарлама жаз',
    linkBroken: 'Байланыс сілтемесі бапталмаған',
    prevMethods: 'Алдыңғы әдіс',
    nextMethods: 'Келесі әдіс',
    methodPicked: function (n) { return 'Таңдалған әдіс: ' + n; },
    updateReady: 'Сайттың жаңа нұсқасы дайын',
    updateNow: 'Жаңарту',
    storageOff: 'Браузер деректерді сақтауға тыйым салды: прогресс бет жабылғанша ғана сақталады'
  };
  var RU = {
    title: 'TEGIN IT Courses — бесплатные IT-курсы на GitHub',
    brand: 'TEGIN',
    brandSub: 'IT Courses',
    logoAlt: 'Логотип TEGIN',
    lead: function (s) { return 'Справочник бесплатных и открытых учебных репозиториев GitHub: курсы, учебные планы, практические задания, книги и документация. ' + s.res + ' ' + ruPlural(s.res, 'ресурс', 'ресурса', 'ресурсов') + ', ' + s.sec + ' ' + ruPlural(s.sec, 'направление', 'направления', 'направлений') + ', для каждого свой Roadmap.'; },
    roadmap: 'Roadmap',
    roadmapOf: function (n) { return 'Roadmap: ' + n; },
    kind: {
      course: 'Курс',
      collection: 'Авторский маршрут на основе подборки',
      reference: 'Авторский маршрут на основе справочника',
      practice: 'Практика',
      tool: 'Инструмент',
      book: 'Книга'
    },
    authorRoute: 'Этот ресурс — не готовый курс. Маршрут составил Макс на основе его содержимого; это не официальная программа автора ресурса.',
    source: function (d) { return 'Маршрут составлен по README и структуре репозитория, проверено: ' + d + '.'; },
    pre: 'Что нужно знать заранее',
    fin: 'Итоговый проект',
    rmNote: 'Важно',
    stages: 'Этапы',
    practice: 'Практика',
    checkpoint: 'Контрольная точка',
    topics: 'Темы',
    level: ['Базовый', 'Средний', 'Продвинутый'],
    levelWord: 'уровень',
    method: 'Метод обучения',
    estimate: 'Ориентировочное время',
    hrsRange: function (lo, hi) { return '≈ ' + lo + '–' + hi + ' ч'; },
    calLine: function (d1, d2, w1, w2, rhythm) { return d1 + '–' + d2 + ' ' + ruPlural(d2, 'учебный день', 'учебных дня', 'учебных дней') + ', примерно ' + w1 + '–' + w2 + ' ' + ruPlural(w2, 'неделя', 'недели', 'недель') + ' (' + rhythm + ')'; },
    rhythmMethod: function (min, days) { return days + ' ' + ruPlural(days, 'день', 'дня', 'дней') + ' в неделю по ' + min + ' мин'; },
    rhythmCourse: function (days, min) { return 'твой график: ' + days + ' ' + ruPlural(days, 'раз', 'раза', 'раз') + ' в неделю по ' + min + ' мин'; },
    compare: 'С другим методом (недели)',
    estimateNote: 'Это оценка. Базовые часы каждого этапа умножаются на коэффициент метода с учётом сложности тем и практики. Реальное время зависит от твоего опыта.',
    progress: function (d, t) { return 'Прогресс: ' + d + ' / ' + t; },
    markStage: function (i) { return 'Отметить этап ' + i + ' выполненным'; },
    dlSvg: 'Скачать SVG',
    dlPng: 'Скачать PNG',
    dlMd: 'Текст Roadmap (.md)',
    downloads: 'Скачать',
    zoom: 'Увеличить',
    sketchTitle: 'Скетчбук',
    sketchStart: 'Старт',
    sketchFinish: 'Финиш',
    sketchLegend: ['уровень', 'практика', 'проверка', 'выполнено'],
    sketchMethod: function (m, lo, hi) { return 'метод «' + m + '»: ≈ ' + lo + '–' + hi + ' ч'; },
    sketchFooter: 'TEGIN IT Courses · бесплатно и открыто',
    openRepo: 'Открыть на GitHub',
    resetProgress: 'Сбросить прогресс',
    progressReset: 'Прогресс сброшен',
    stageDone: 'Этап отмечен',
    contactTitle: 'Нужна помощь с обучением?',
    contactText: 'Напиши Максу, если нужна помощь с разбором материала, учебным планом или менторством. Все материалы сайта остаются бесплатными и открытыми.',
    contactBtn: 'Связаться с автором',
    tgBtn: 'Написать в Telegram',
    contactTopics: ['Помощь с обучением', 'Разбор материала', 'Менторство'],
    contactTopic: 'Тема',
    contactCourse: 'Курс (необязательно)',
    contactMsg: 'Сообщение',
    contactPh: 'Какой курс проходишь и что вызывает сложности?',
    contactSend: 'Скопировать и открыть Telegram',
    contactHint: 'Сайт ничего не отправляет сам: текст копируется в буфер обмена, в Telegram просто вставь его.',
    contactCopied: 'Текст скопирован — вставь его в Telegram',
    contactNoCopy: 'Не удалось скопировать текст — скопируй его вручную',
    contactGreeting: function (topic, course, msg) { return 'Привет, Макс! Тема: ' + topic + (course ? '. Курс: ' + course : '') + '.\n\n' + msg; },
    contactEmpty: 'Напиши сообщение',
    linkBroken: 'Ссылка для связи не настроена',
    prevMethods: 'Предыдущий метод',
    nextMethods: 'Следующий метод',
    methodPicked: function (n) { return 'Выбран метод: ' + n; },
    updateReady: 'Доступна новая версия сайта',
    updateNow: 'Обновить',
    storageOff: 'Браузер запретил сохранять данные: прогресс сохранится только до закрытия страницы'
  };
  Object.keys(KK).forEach(function (k) { UI.kk[k] = KK[k]; });
  Object.keys(RU).forEach(function (k) { UI.ru[k] = RU[k]; });
  UI.kk.skipLink = 'Мазмұнға өту';
  UI.ru.skipLink = 'Перейти к содержанию';
  UI.kk.author = 'Жинақты дайындаған — Макс, ЖИ-инженер.';
  UI.ru.author = 'Подборку подготовил Макс, ИИ-инженер.';
})();

/* Roadmap data helpers.
   rm(path, kind, pre, final, stages, note)
     kind: course | collection | reference | practice | tool | book
           (collection/reference: an author's route built on the resource, not the resource author's official programme)
     pre / final: [kk, ru]; note (optional): [kk, ru] — a known limitation of the resource
   st(hours, level, title, keywords, practice, checkpoint)
     hours: base study hours for the stage (balanced pace), level: 1 basic, 2 middle, 3 advanced
     title / practice / checkpoint: [kk, ru]; keywords are technology names shared by both languages.
   All routes were compiled from each repository's README and file structure (checked 02.11.2026). */
var RM = {};
var RM_CHECKED = '2026-11-02';
function st(h, l, t, k, p, c) { return { h: h, l: l, t: t, k: k, p: p, c: c }; }
function rm(r, kind, pre, fin, stages, note) { RM[r] = { kind: kind, pre: pre, fin: fin, s: stages, note: note || null }; }

/* ===== IT-білімнің басты кітапханалары / Главные библиотеки ===== */
rm('PanXProject/awesome-certificates', 'collection',
  ['Ағылшынша оқи алу, бір бағытты таңдап қою', 'Чтение на английском, выбранное направление'],
  ['Бір бағыт бойынша екі сертификат және соларға негізделген шағын жоба', 'Два сертификата по одному направлению и небольшой проект на их основе'],
  [st(2, 1, ['Бағыт пен мақсатты таңдау', 'Выбор направления и цели'], ['Front-End', 'Back-End', 'Cloud Computing', 'Data Science', 'DevOps'],
      ['Тізімнен бір бағыт пен 3 сертификатты таңдап, мақсатың бойынша салыстыр', 'Выбери одно направление и сравни 3 сертификата из списка по своей цели'],
      ['Сертификат не үшін керек екенін бір сөйлеммен түсіндіре аласың', 'Можешь одним предложением объяснить, зачем нужен сертификат']),
   st(12, 1, ['Кіріспе курс', 'Вводный курс'], ['Programming Languages', 'Databases', 'Operating Systems'],
      ['Таңдалған бағыт бойынша бір кіріспе курсты конспектімен аяқта', 'Пройди один вводный курс по направлению с конспектом'],
      ['Курстың барлық бақылау тесттері тапсырылды', 'Сданы все контрольные тесты курса']),
   st(16, 2, ['Негізгі сертификат', 'Профильный сертификат'], ['Cloud Computing', 'Machine and Deep Learning', 'Networking', 'DevOps'],
      ['Сертификат тапсырмаларын өз репозиторийіңде қайталап, нәтижесін сипатта', 'Повтори задания сертификата в своём репозитории и опиши результат'],
      ['Сертификат алынды немесе қорытынды тест 80%-дан жоғары', 'Сертификат получен или итоговый тест выше 80%']),
   st(6, 1, ['Портфолиоға шығару', 'Оформление в портфолио'], ['GitHub', 'LinkedIn', 'Portfolio'],
      ['Сертификат пен жобаны профиліңе дәлел сілтемелерімен қос', 'Добавь сертификат и проект в профиль со ссылками-подтверждениями'],
      ['Профильде әр дағдыға дәлел бар', 'В профиле у каждого навыка есть подтверждение'])]);

rm('alinebastos/free-courses', 'collection',
  ['Компьютерлік сауаттылық, ағылшынша оқу', 'Компьютерная грамотность, чтение на английском'],
  ['Таңдалған стек бойынша frontend пен backend бөлігі бар шағын full-stack қосымша', 'Небольшое full-stack приложение с frontend и backend на выбранном стеке'],
  [st(6, 1, ['Git және GitHub', 'Git и GitHub'], ['Git', 'GitHub', 'branches', 'pull request'],
      ['Тізімдегі Git курсын өтіп, алғашқы репозиторийіңді жарияла', 'Пройди курс по Git из списка и опубликуй первый репозиторий'],
      ['Тармақ құрып, pull request арқылы біріктіре аласың', 'Умеешь создать ветку и слить её через pull request']),
   st(30, 1, ['Frontend негіздері', 'Основы frontend'], ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      ['«Frontend Courses» бөлімінен JavaScript курсын таңдап, интерактивті бет жаса', 'Выбери курс JavaScript в разделе «Frontend Courses» и сделай интерактивную страницу'],
      ['DOM, оқиғалар және fetch-ті қолдана аласың', 'Уверенно используешь DOM, события и fetch']),
   st(30, 2, ['Фреймворк', 'Фреймворк'], ['React', 'Angular', 'Vue.js'],
      ['Бір фреймворкпен компоненттері бар SPA құрастыр', 'Собери SPA с компонентами на одном фреймворке'],
      ['Күй мен маршрутизацияны өз бетіңше баптайсың', 'Самостоятельно настраиваешь состояние и маршрутизацию']),
   st(35, 2, ['Backend тілі', 'Язык backend'], ['Node.js', 'Python', 'Java', 'Go', 'REST API'],
      ['«Backend Courses» ішінен бір тіл бойынша CRUD API жаса', 'Сделай CRUD API на одном языке из «Backend Courses»'],
      ['API дерекқормен жұмыс істейді және қателерді өңдейді', 'API работает с базой данных и обрабатывает ошибки']),
   st(20, 3, ['Full-stack жоба', 'Full-stack проект'], ['Full-stack', 'Deployment', 'Testing'],
      ['Frontend пен API-ді біріктіріп, тегін хостингке шығар', 'Соедини frontend и API и выложи на бесплатный хостинг'],
      ['Қосымша сілтеме арқылы ашылады', 'Приложение открывается по ссылке'])]);

rm('EbookFoundation/free-programming-books', 'reference',
  ['Бағдарламалау тілін таңдап қою', 'Выбранный язык программирования'],
  ['Бір кітап негізінде жасалған жоба және оған жазылған конспект-README', 'Проект по мотивам одной книги и README-конспект к нему'],
  [st(2, 1, ['Тіл мен форматты таңдау', 'Выбор языка и формата'], ['Books', 'Courses', 'Cheat Sheets', 'Russian'],
      ['Каталогтан өз тіліңдегі (мысалы, орысша) бөлімді тауып, 3 ресурсты белгіле', 'Найди раздел на своём языке (например, русском) и отметь 3 ресурса'],
      ['Неге осы кітапты таңдағаныңды түсіндіре аласың', 'Можешь объяснить выбор книги']),
   st(30, 1, ['Негізгі кітап', 'Основная книга'], ['Books', 'Exercises'],
      ['Таңдалған кітапты тарау-тарауымен оқып, әр тараудың жаттығуын орында', 'Читай выбранную книгу по главам и выполняй упражнения каждой главы'],
      ['Әр тараудан кейін 3 сұраққа жауап бересің', 'После каждой главы отвечаешь на 3 вопроса по ней']),
   st(20, 2, ['Есептер жинағы', 'Сборники задач'], ['Problem Sets', 'Competitive Programming'],
      ['«Problem Sets» бөлімінен 20 есеп шығар', 'Реши 20 задач из раздела «Problem Sets»'],
      ['Есептердің 70%-ы бірінші әрекеттен өтеді', '70% задач проходят с первой попытки']),
   st(8, 1, ['Интерактив және playground', 'Интерактив и playground'], ['Interactive Programming Resources', 'Playgrounds'],
      ['Интерактивті ресурста кітаптағы тақырыпты қайтала', 'Повтори тему книги на интерактивном ресурсе'],
      ['Тақырыпты кітапсыз түсіндіре аласың', 'Можешь объяснить тему без книги']),
   st(4, 1, ['Шпаргалкамен қайталау', 'Повторение по шпаргалкам'], ['Cheat Sheets'],
      ['Тіл бойынша шпаргалканы өз мысалдарыңмен толықтыр', 'Дополни шпаргалку по языку своими примерами'],
      ['Шпаргалканы 10 минутта қайталай аласың', 'Повторяешь шпаргалку за 10 минут'])]);

rm('prakhar1989/awesome-courses', 'collection',
  ['Бір бағдарламалау тілі, мектеп математикасы', 'Один язык программирования, школьная математика'],
  ['Таңдалған университет курсының қорытынды жобасы немесе зертханалық жұмысы', 'Итоговый проект или лабораторная выбранного университетского курса'],
  [st(60, 1, ['Computer Science-ке кіріспе', 'Введение в Computer Science'], ['Introduction to CS', 'Python', 'Abstraction'],
      ['«Introduction to CS» бөлімінен бір курсты үй тапсырмаларымен өт', 'Пройди один курс из «Introduction to CS» с домашними заданиями'],
      ['Курстың барлық problem set-тері тапсырылды', 'Сданы все problem set курса']),
   st(70, 2, ['Алгоритмдер', 'Алгоритмы'], ['Algorithms', 'Data Structures', 'Complexity'],
      ['«Algorithms» тізімінен бір курсты өтіп, алгоритмдерді өзің жаз', 'Пройди курс из «Algorithms» и реализуй алгоритмы сам'],
      ['Сұрыптау мен графтарды есептің шартына қарай таңдайсың', 'Выбираешь сортировку и граф под условие задачи']),
   st(80, 3, ['Жүйелер', 'Системы'], ['Systems', 'Operating Systems', 'Networks'],
      ['«Systems» бөлімінен ОЖ немесе желілер курсының зертханаларын орында', 'Выполни лабораторные курса ОС или сетей из раздела «Systems»'],
      ['Процесс, жад және желі стегін түсіндіре аласың', 'Можешь объяснить процессы, память и сетевой стек']),
   st(70, 3, ['Таңдау курсы', 'Курс по выбору'], ['Machine Learning', 'Security', 'Computer Graphics', 'Compilers'],
      ['ML, Security немесе Graphics бойынша бір курсты таңда', 'Выбери один курс по ML, Security или Graphics'],
      ['Курстың аралық емтиханын өз бетіңше тапсырасың', 'Самостоятельно проходишь промежуточный экзамен курса'])]);

rm('karlhorky/learn-to-program', 'collection',
  ['Алдын ала білім қажет емес', 'Предварительные знания не нужны'],
  ['GitHub Pages-те жарияланған JavaScript қосымшасы бар портфолио', 'Портфолио с JavaScript-приложением, опубликованным на GitHub Pages'],
  [st(30, 1, ['Бастапқы деңгей', 'Начальный уровень'], ['HTML', 'CSS', 'JavaScript', 'Interactive courses'],
      ['«Beginner» бөліміндегі интерактивті платформада HTML, CSS, JS негіздерін өт', 'Пройди основы HTML, CSS и JS на интерактивной платформе из «Beginner»'],
      ['Бос беттен қарапайым сайт жасайсың', 'Делаешь простой сайт с пустой страницы']),
   st(40, 2, ['Орта деңгей', 'Средний уровень'], ['JavaScript', 'Node.js', 'Git', 'APIs'],
      ['«Intermediate» ресурстарымен API-ден дерек алатын қосымша жаса', 'По ресурсам «Intermediate» сделай приложение, получающее данные из API'],
      ['Асинхрондылық пен модульдерді түсіндіре аласың', 'Можешь объяснить асинхронность и модули']),
   st(40, 3, ['Жоғары деңгей', 'Продвинутый уровень'], ['Algorithms', 'Frameworks', 'Testing'],
      ['«Advanced» тізімінен бір тақырыпты таңдап, жобаңа тесттер қос', 'Выбери тему из «Advanced» и добавь в проект тесты'],
      ['Жобаның негізгі функциялары тестпен жабылған', 'Основные функции проекта покрыты тестами'])]);

rm('ArslanYM/Free-Certifications', 'collection',
  ['Желі мен бұлт туралы жалпы түсінік', 'Общее понимание сетей и облака'],
  ['Бір бұлт провайдерінің екі тегін сертификаты және соған негізделген деплой', 'Два бесплатных сертификата одного облачного провайдера и деплой на их основе'],
  [st(2, 1, ['Шарттарды тексеру', 'Проверка условий'], ['Free certification', 'Deadline', 'Voucher'],
      ['Кестедегі 5 ұсыныстың әлі де тегін екенін ресми сайттан тексер', 'Проверь на официальных сайтах, что 5 предложений из таблицы ещё бесплатны'],
      ['Әр ұсыныстың мерзімі мен шарты жазылды', 'Для каждого предложения записаны срок и условия']),
   st(14, 1, ['Бұлтқа кіріспе', 'Введение в облако'], ['OCI', 'Azure', 'Google Cloud', 'Alibaba Cloud'],
      ['Бір провайдердің Foundations деңгейіндегі оқу жолын өт', 'Пройди учебный путь уровня Foundations одного провайдера'],
      ['Бұлттың негізгі сервис түрлерін атай аласың', 'Называешь основные типы облачных сервисов']),
   st(16, 2, ['Профильдік сертификат', 'Профильный сертификат'], ['Cloud Networking', 'Huawei Networking', 'Nutanix'],
      ['Желі немесе инфрақұрылым бойынша екінші сертификатқа дайындал', 'Подготовься ко второму сертификату по сетям или инфраструктуре'],
      ['Сынақ емтиханы 80%-дан жоғары', 'Пробный экзамен выше 80%']),
   st(10, 2, ['DevOps құралдары', 'Инструменты DevOps'], ['GitLab', 'CI/CD', 'Cloud Monitoring'],
      ['GitLab сертификатының материалымен CI pipeline жаса', 'По материалам сертификата GitLab собери CI pipeline'],
      ['Pipeline әр push-та жұмыс істейді', 'Pipeline запускается на каждый push'])]);

rm('RBLucky/Awesome-Free-Certifications', 'collection',
  ['Компьютерлік сауаттылық', 'Компьютерная грамотность'],
  ['Қауіпсіздік және дерекқор бойынша сертификаттары бар портфолио', 'Портфолио с сертификатами по безопасности и базам данных'],
  [st(3, 1, ['Санаттармен танысу', 'Знакомство с категориями'], ['General', 'Security', 'Databases', 'Project Management'],
      ['Әр санаттан бір ұсынысты таңдап, шарттарын тексер', 'Выбери по одному предложению в каждой категории и проверь условия'],
      ['Таңдалған сертификаттардың шарттары әлі де тегін', 'Условия выбранных сертификатов всё ещё бесплатные']),
   st(14, 1, ['Киберқауіпсіздік негіздері', 'Основы кибербезопасности'], ['Security', 'Network Security', 'Threats'],
      ['«Security» бөлімінен бір кіріспе сертификат ал', 'Получи один вводный сертификат из раздела «Security»'],
      ['Негізгі шабуыл түрлерін және қорғанысты түсіндіресің', 'Объясняешь основные типы атак и защиту']),
   st(12, 2, ['Дерекқорлар', 'Базы данных'], ['Databases', 'SQL', 'NoSQL'],
      ['«Databases» бөлімінен курсты өтіп, жаттығу дерекқорына сұраулар жаз', 'Пройди курс из «Databases» и напиши запросы к учебной базе'],
      ['JOIN мен индекстерді дұрыс қолданасың', 'Правильно используешь JOIN и индексы']),
   st(8, 1, ['Жобаларды басқару', 'Управление проектами'], ['Project Management', 'Agile', 'Scrum'],
      ['Өз оқу жоспарыңды Scrum спринттеріне бөл', 'Разбей свой учебный план на спринты Scrum'],
      ['Бір спринт жоспарланып, аяқталды', 'Один спринт спланирован и завершён'])]);

rm('sindresorhus/awesome', 'reference',
  ['GitHub-ты қолдана білу', 'Умение пользоваться GitHub'],
  ['Өзің тексерген 20+ ресурсы бар жеке awesome-тізім репозиторийі', 'Собственный репозиторий awesome-списка с 20+ проверенными ресурсами'],
  [st(2, 1, ['Awesome-тізімдер қалай құрылған', 'Как устроены awesome-списки'], ['awesome lists', 'Markdown', 'curation'],
      ['Бір тізімнің құрылымы мен қосу ережелерін талда', 'Разбери структуру одного списка и правила добавления'],
      ['Жақсы тізімнің 3 белгісін атайсың', 'Называешь 3 признака хорошего списка']),
   st(6, 1, ['Тіл бойынша тізім', 'Список по языку'], ['Programming Languages', 'Python', 'JavaScript', 'Go'],
      ['«Programming Languages» ішінен тіліңнің тізімін ашып, оқу шорт-листін жаса', 'Открой список своего языка в «Programming Languages» и составь учебный шорт-лист'],
      ['Шорт-листтегі әр ресурстың не үшін екені жазылған', 'Для каждого ресурса шорт-листа записано, зачем он']),
   st(8, 2, ['Front-End мен Back-End құралдары', 'Инструменты Front-End и Back-End'], ['Front-End Development', 'Back-End Development', 'Databases'],
      ['Екі тізімнен үш құралды жобада сынап көр', 'Опробуй в проекте три инструмента из двух списков'],
      ['Әр құрал бойынша қысқа пікір жазылды', 'По каждому инструменту написан короткий отзыв']),
   st(6, 2, ['Өз тізіміңді жасау', 'Свой список'], ['create-list.md', 'Markdown', 'GitHub'],
      ['create-list.md нұсқауымен өз тақырыбыңа тізім жаса', 'По инструкции create-list.md сделай список по своей теме'],
      ['Тізім awesome-lint тексерісінен өтеді', 'Список проходит проверку awesome-lint'])]);

/* ===== Нөлден бағдарламалау / Программирование с нуля ===== */
rm('freeCodeCamp/freeCodeCamp', 'course',
  ['Компьютерді сенімді қолдану, ағылшынша оқу', 'Уверенное владение ПК, чтение на английском'],
  ['Full-Stack Developer бағдарламасының қорытынды емтиханы және толық стек жоба', 'Итоговый экзамен программы Full-Stack Developer и full-stack проект'],
  [st(40, 1, ['Жауапты веб-дизайн', 'Адаптивная вёрстка'], ['HTML', 'CSS', 'Flexbox', 'Grid', 'Accessibility'],
      ['Сертификаттың жобаларын жаса: сауалнама формасы, лендинг, құжаттама беті', 'Сделай проекты сертификата: форма опроса, лендинг, страница документации'],
      ['Барлық жобалар автотесттерден өтеді', 'Все проекты проходят автотесты']),
   st(60, 2, ['JavaScript', 'JavaScript'], ['variables', 'functions', 'arrays', 'objects', 'regex', 'recursion'],
      ['Палиндром тексеру, рим сандары конвертері және Цезарь шифрын жаса', 'Сделай проверку палиндрома, конвертер римских чисел и шифр Цезаря'],
      ['Сертификаттың 5 жобасы тесттерден өтеді', 'Все 5 проектов сертификата проходят тесты']),
   st(50, 2, ['Frontend кітапханалары', 'Frontend-библиотеки'], ['React', 'Redux', 'Sass', 'Bootstrap', 'jQuery'],
      ['React-та дәйексөз генераторы мен калькулятор жаса', 'Сделай на React генератор цитат и калькулятор'],
      ['Компоненттер мен күйді Redux-сыз да, Redux-пен де жаза аласың', 'Пишешь компоненты и состояние и с Redux, и без него']),
   st(45, 2, ['Python', 'Python'], ['Python', 'OOP', 'algorithms', 'data structures'],
      ['Арифметикалық форматтаушы мен бюджет қосымшасын жаса', 'Сделай арифметический форматтер и бюджетное приложение'],
      ['Жобалар unit-тесттерден өтеді', 'Проекты проходят unit-тесты']),
   st(40, 2, ['Реляциялық дерекқорлар', 'Реляционные базы данных'], ['Bash', 'PostgreSQL', 'SQL', 'Git'],
      ['Дүниежүзілік кубок дерекқоры мен салонға жазылу скриптін жаса', 'Сделай базу чемпионата мира и скрипт записи в салон'],
      ['Тапсырмалардың барлық тексерістері өтті', 'Все проверки заданий пройдены']),
   st(50, 3, ['Backend және API', 'Backend и API'], ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST'],
      ['Timestamp микросервисі мен URL қысқартқыш жаса', 'Сделай микросервис Timestamp и сокращатель URL'],
      ['API жобалары fCC тесттерінен өтеді', 'API-проекты проходят тесты fCC'])]);

rm('ossu/computer-science', 'course',
  ['Мектеп математикасы (алгебра, геометрия), ағылшынша оқу', 'Школьная математика (алгебра, геометрия), чтение на английском'],
  ['OSSU қорытынды жобасы: оқығаныңды біріктіретін нақты бағдарламалық жоба', 'Финальный проект OSSU: реальный программный проект, объединяющий изученное'],
  [st(120, 1, ['Intro CS', 'Intro CS'], ['Python', 'Computational thinking', 'Debugging'],
      ['Intro CS курсының барлық problem set-терін орында', 'Выполни все problem set курса Intro CS'],
      ['Кез келген есепті функцияларға бөліп шешесің', 'Любую задачу разбиваешь на функции']),
   st(250, 2, ['Core programming', 'Core programming'], ['Functional programming', 'OOP', 'Testing', 'Design'],
      ['Әр курстағы жобаларды тесттерімен жаса', 'Делай проекты каждого курса с тестами'],
      ['Бір есепті функционалдық және ООП стилінде жаза аласың', 'Пишешь одну задачу в функциональном и ООП-стиле']),
   st(200, 3, ['Core math', 'Core math'], ['Calculus', 'Discrete Math', 'Probability', 'Linear Algebra'],
      ['Курстардың жаттығуларын қағазда шығарып, кодта тексер', 'Решай упражнения на бумаге и проверяй их кодом'],
      ['Индукция арқылы дәлелдеме жаза аласың', 'Пишешь доказательство по индукции']),
   st(240, 3, ['Құралдар мен жүйелер', 'Инструменты и системы'], ['Shell', 'Git', 'Computer Architecture', 'Operating Systems', 'Networking'],
      ['Nand2Tetris сияқты курстарда компьютерді төменнен жоғары құрастыр', 'В курсах вроде Nand2Tetris собери компьютер снизу вверх'],
      ['Процесс, жад және TCP/IP-ді өз сөзіңмен түсіндіресің', 'Объясняешь процессы, память и TCP/IP своими словами']),
   st(180, 3, ['Теория және қауіпсіздік', 'Теория и безопасность'], ['Algorithms', 'Graphs', 'Complexity', 'Security'],
      ['Алгоритмдер курсының есептерін шығарып, қауіпсіздік курсын өт', 'Реши задачи курса алгоритмов и пройди курс безопасности'],
      ['Алгоритмнің күрделілігін дәлелдей аласың', 'Можешь обосновать сложность алгоритма']),
   st(230, 2, ['Қолданбалы курстар және этика', 'Прикладные курсы и этика'], ['Databases', 'Machine Learning', 'Computer Graphics', 'Software Engineering', 'Ethics'],
      ['Дерекқор, ML және бағдарламалық инженерия курстарының жобаларын жаса', 'Сделай проекты курсов по БД, ML и программной инженерии'],
      ['Әр курстан бір жоба портфолиода тұр', 'По одному проекту от каждого курса в портфолио']),
   st(300, 3, ['Advanced CS', 'Advanced CS'], ['Compilers', 'Parallel computing', 'Cryptography', 'Advanced theory'],
      ['Қызығушылығыңа сай Advanced бөлімінен курстар таңда', 'Выбери курсы из Advanced по интересам'],
      ['Таңдалған курстардың тапсырмалары толық орындалды', 'Задания выбранных курсов выполнены полностью'])]);

rm('TheOdinProject/curriculum', 'course',
  ['Компьютерді сенімді қолдану, Linux/macOS немесе WSL орнатуға дайын болу', 'Уверенное владение ПК, готовность поставить Linux/macOS или WSL'],
  ['Портфолио сайт пен full-stack қосымша; «Getting Hired» бойынша түйіндеме', 'Портфолио-сайт и full-stack приложение; резюме по разделу «Getting Hired»'],
  [st(100, 1, ['Foundations', 'Foundations'], ['Command line', 'Git', 'HTML', 'CSS', 'JavaScript basics'],
      ['Recipes беті, Landing Page, Rock Paper Scissors және Calculator жобаларын жаса', 'Сделай проекты Recipes, Landing Page, Rock Paper Scissors и Calculator'],
      ['Әр жоба GitHub-та, Git тарихы түсінікті', 'Каждый проект на GitHub, история Git понятна']),
   st(70, 2, ['HTML мен CSS тереңірек', 'HTML и CSS глубже'], ['Flexbox', 'Grid', 'Forms', 'Responsive design', 'Accessibility'],
      ['Sign-up Form, Admin Dashboard және адаптивті портфолио жаса', 'Сделай Sign-up Form, Admin Dashboard и адаптивное портфолио'],
      ['Макетті 3 экран өлшемінде дұрыс жинайсың', 'Верстаешь макет корректно на 3 размерах экрана']),
   st(120, 2, ['JavaScript', 'JavaScript'], ['Objects', 'Classes', 'Modules', 'Webpack', 'Async/Await', 'Testing'],
      ['Library, Todo List, Weather App және Battleship (TDD) жобаларын жаса', 'Сделай Library, Todo List, Weather App и Battleship (TDD)'],
      ['Battleship логикасы Jest тесттерімен жабылған', 'Логика Battleship покрыта тестами Jest']),
   st(80, 2, ['React', 'React'], ['Components', 'State', 'Hooks', 'React Router', 'Testing'],
      ['CV Application, Memory Card және Shopping Cart жаса', 'Сделай CV Application, Memory Card и Shopping Cart'],
      ['Компоненттер тестпен тексерілген, маршрутизация жұмыс істейді', 'Компоненты протестированы, роутинг работает']),
   st(110, 3, ['Backend: Node.js немесе Ruby on Rails', 'Backend: Node.js или Ruby on Rails'], ['Express', 'PostgreSQL', 'Authentication', 'REST API', 'Ruby on Rails'],
      ['Members Only, Blog API немесе Odin-Book жобасын жаса', 'Сделай Members Only, Blog API или Odin-Book'],
      ['Тіркелу, авторизация және дерекқор жұмыс істейді', 'Регистрация, авторизация и база данных работают']),
   st(20, 1, ['Жұмысқа орналасу', 'Поиск работы'], ['Portfolio', 'Resume', 'Interviews'],
      ['Getting Hired бөліміне сай түйіндеме мен портфолио дайында', 'Подготовь резюме и портфолио по разделу Getting Hired'],
      ['Түйіндемені тәжірибелі әзірлеуші тексерді', 'Резюме проверил опытный разработчик'])]);

rm('jwasham/coding-interview-university', 'course',
  ['Бір бағдарламалау тілін білу (C, C++, Python немесе Java)', 'Знание одного языка программирования (C, C++, Python или Java)'],
  ['Платформада 100+ есеп және 3 сынақ сұхбат (mock interview)', '100+ задач на платформе и 3 пробных собеседования (mock interview)'],
  [st(30, 1, ['Тіл және Big-O', 'Язык и Big-O'], ['Big-O', 'Asymptotic analysis', 'Language choice'],
      ['Таңдалған тілде қарапайым алгоритмдердің күрделілігін есепте', 'Посчитай сложность простых алгоритмов на своём языке'],
      ['Кез келген циклдің күрделілігін бірден айтасың', 'Сразу называешь сложность любого цикла']),
   st(60, 2, ['Сызықтық құрылымдар', 'Линейные структуры'], ['Arrays', 'Linked Lists', 'Stack', 'Queue', 'Hash table'],
      ['Әр құрылымды өзің іске асыр (кітапханасыз)', 'Реализуй каждую структуру сам (без библиотек)'],
      ['Hash table коллизияларын түсіндіресің', 'Объясняешь коллизии в hash table']),
   st(60, 3, ['Ағаштар мен үйінділер', 'Деревья и кучи'], ['Binary search', 'BST', 'Heap', 'Priority queue', 'Balanced trees'],
      ['BST пен heap-ті жазып, оларға тесттер қос', 'Напиши BST и heap и добавь к ним тесты'],
      ['Ағашты барлық тәсілмен айналып шыға аласың', 'Обходишь дерево всеми способами']),
   st(40, 2, ['Сұрыптау', 'Сортировки'], ['Merge sort', 'Quick sort', 'Heap sort', 'Bitwise'],
      ['Merge, quick және heap sort-ты жазып, жылдамдығын салыстыр', 'Напиши merge, quick и heap sort и сравни их скорость'],
      ['Сұрыптаудың тұрақтылығын түсіндіресің', 'Объясняешь устойчивость сортировки']),
   st(80, 3, ['Графтар, рекурсия, DP', 'Графы, рекурсия, DP'], ['Graphs', 'BFS', 'DFS', 'Recursion', 'Dynamic Programming'],
      ['Графтарға және DP-ге 30 есеп шығар', 'Реши 30 задач на графы и DP'],
      ['DP есебінің күйі мен ауысуын тұжырымдайсың', 'Формулируешь состояние и переход DP-задачи']),
   st(80, 2, ['Сұхбатқа дайындық', 'Подготовка к собеседованию'], ['Coding questions', 'Flashcards', 'Resume', 'System design'],
      ['Күніне 2–3 есептен шығарып, флеш-карталармен қайтала', 'Решай по 2–3 задачи в день и повторяй по флеш-картам'],
      ['45 минуттық сынақ сұхбаттан өтесің', 'Проходишь 45-минутное пробное интервью'])]);

rm('microsoft/Web-Dev-For-Beginners', 'course',
  ['Алдын ала білім қажет емес; браузер және VS Code', 'Предварительные знания не нужны; браузер и VS Code'],
  ['Банк қосымшасы мен ЖИ-чат: курстың соңғы жобаларын өз идеяңмен толықтыру', 'Банковское приложение и ИИ-чат: доработка финальных проектов курса своей идеей'],
  [st(8, 1, ['Кіріспе', 'Введение'], ['Programming basics', 'GitHub', 'Accessibility'],
      ['Ортаны баптап, GitHub-та бірінші репозиторий жаса', 'Настрой окружение и создай первый репозиторий на GitHub'],
      ['Сабақтың алдындағы және кейінгі квиздері өтті', 'Пройдены квизы до и после урока']),
   st(12, 1, ['JavaScript негіздері', 'Основы JavaScript'], ['Data types', 'Functions', 'Decisions', 'Arrays', 'Loops'],
      ['Әр сабақтың тапсырмасын браузер консолінде орында', 'Выполняй задания каждого урока в консоли браузера'],
      ['Шарттар мен циклдерді қатесіз жазасың', 'Пишешь условия и циклы без ошибок']),
   st(10, 1, ['Terrarium: HTML, CSS, DOM', 'Terrarium: HTML, CSS, DOM'], ['HTML', 'CSS', 'DOM', 'Closures', 'Drag and drop'],
      ['Өсімдіктерді сүйреп апаратын террариум жаса', 'Сделай террариум с перетаскиванием растений'],
      ['DOM элементтерімен оқиға арқылы жұмыс істейсің', 'Работаешь с элементами DOM через события']),
   st(12, 2, ['Ойын және браузер кеңейтімі', 'Игра и расширение браузера'], ['Events', 'Forms', 'Fetch API', 'Browser extension'],
      ['Typing game мен көміртек ізін көрсететін кеңейтім жаса', 'Сделай typing game и расширение, показывающее углеродный след'],
      ['Кеңейтім API-ден дерек алып, сақтайды', 'Расширение получает данные из API и сохраняет их']),
   st(12, 2, ['Space game', 'Space game'], ['Canvas', 'Game loop', 'Collision detection', 'Scoring'],
      ['Ғарыш ойынына соқтығысу, ұпай және өмір қос', 'Добавь в космическую игру столкновения, очки и жизни'],
      ['Ойын циклі мен күйді түсіндіресің', 'Объясняешь игровой цикл и состояние']),
   st(14, 2, ['Банк қосымшасы және ЖИ-чат', 'Банковское приложение и ИИ-чат'], ['Routing', 'Forms', 'State management', 'Generative AI'],
      ['Банк қосымшасына маршруттар мен күйді қосып, ЖИ-чат жобасын баста', 'Добавь в банковское приложение маршруты и состояние, начни проект ИИ-чата'],
      ['Қосымша бетті жаңартқанда күйін жоғалтпайды', 'Приложение не теряет состояние при обновлении страницы'])]);

rm('practical-tutorials/project-based-learning', 'collection',
  ['Бір тілдің негізгі синтаксисі', 'Базовый синтаксис одного языка'],
  ['Туториал негізінде жасалып, өз функцияларыңмен кеңейтілген жоба', 'Проект по туториалу, расширенный собственными функциями'],
  [st(6, 1, ['Тіл мен бірінші туториал', 'Язык и первый туториал'], ['Python', 'JavaScript', 'Go', 'C/C++'],
      ['Өз тіліңнің бөлімінен шағын CLI жобаны таңдап, соңына дейін жаса', 'Выбери в разделе своего языка небольшой CLI-проект и доведи до конца'],
      ['Кодты туториалсыз түсіндіре аласың', 'Можешь объяснить код без туториала']),
   st(12, 2, ['Веб-қосымша', 'Веб-приложение'], ['Web Applications', 'REST', 'Database'],
      ['«Web Applications» бөлімінен бір туториал өтіп, бір функция қос', 'Пройди туториал из «Web Applications» и добавь одну свою функцию'],
      ['Қосылған функция туториалда жоқ', 'Добавленной функции нет в туториале']),
   st(8, 2, ['Бот немесе скрапер', 'Бот или скрапер'], ['Bots', 'Web Scraping', 'APIs'],
      ['«Bots» немесе «Web Scraping» бойынша пайдалы құрал жаса', 'Сделай полезный инструмент по разделам «Bots» или «Web Scraping»'],
      ['Құрал қателерді өңдейді және логтайды', 'Инструмент обрабатывает и логирует ошибки']),
   st(14, 3, ['Data/ML немесе ойын', 'Data/ML или игра'], ['Data Science', 'Machine Learning', 'OpenCV', 'Game Development'],
      ['Data Science, ML немесе ойындар бөлімінен күрделірек жоба таңда', 'Выбери более сложный проект из Data Science, ML или игр'],
      ['Жобаның README-де архитектурасы сипатталған', 'В README проекта описана архитектура'])]);

rm('florinpop17/app-ideas', 'practice',
  ['HTML, CSS, JavaScript негіздері', 'Основы HTML, CSS и JavaScript'],
  ['Tier-3 деңгейіндегі қосымша: толық функционалы, тесттері және деплойы бар', 'Приложение уровня Tier-3 с полным функционалом, тестами и деплоем'],
  [st(15, 1, ['Tier-1: бастапқы жобалар', 'Tier-1: начальные проекты'], ['Bin2Dec', 'Calculator', 'Countdown Timer', 'DOM'],
      ['Tier-1 тізімінен 3 жобаны User Stories бойынша жаса', 'Сделай 3 проекта из Tier-1 по User Stories'],
      ['Әр жобаның барлық User Stories орындалған', 'У каждого проекта выполнены все User Stories']),
   st(24, 2, ['Tier-2: орта деңгей', 'Tier-2: средний уровень'], ['APIs', 'LocalStorage', 'Book Finder', 'Card Memory Game'],
      ['Tier-2-ден API-мен жұмыс істейтін 2 жоба жаса', 'Сделай 2 проекта из Tier-2, работающих с API'],
      ['Bonus features бөлімінен кемінде біреуі қосылған', 'Добавлена хотя бы одна фича из Bonus features']),
   st(30, 3, ['Tier-3: күрделі жоба', 'Tier-3: сложный проект'], ['Authentication', 'Real-time', 'Database'],
      ['Tier-3-тен бір жобаны backend-пен жаса', 'Сделай один проект из Tier-3 с backend'],
      ['Жобаның негізгі сценарийлері тесттермен тексерілген', 'Основные сценарии проекта проверены тестами']),
   st(8, 2, ['Жариялау', 'Публикация'], ['Deployment', 'README', 'Portfolio'],
      ['Жобаларды хостингке шығарып, скриншоттары бар README жаз', 'Выложи проекты на хостинг и напиши README со скриншотами'],
      ['Барлық жобалар сілтеме арқылы ашылады', 'Все проекты открываются по ссылке'])]);

rm('pcottle/learnGitBranching', 'tool',
  ['Терминалда команда енгізе білу', 'Умение вводить команды в терминале'],
  ['Өз репозиторийіңде feature-branch, rebase және pull request арқылы жұмыс', 'Работа в своём репозитории через feature-branch, rebase и pull request'],
  [st(2, 1, ['Кіріспе тізбегі', 'Вводная последовательность'], ['git commit', 'git branch', 'git merge', 'git rebase'],
      ['«Introduction Sequence» деңгейлерін аяқта', 'Пройди уровни «Introduction Sequence»'],
      ['Merge мен rebase айырмашылығын суретпен түсіндіресің', 'Объясняешь разницу merge и rebase на схеме']),
   st(2, 1, ['Ramping Up', 'Ramping Up'], ['HEAD', 'Relative refs', 'git reset', 'git revert'],
      ['HEAD, ^ және ~ сілтемелерімен деңгейлерді өт', 'Пройди уровни с HEAD, ^ и ~'],
      ['reset пен revert-ті қашан қолданатыныңды білесің', 'Знаешь, когда использовать reset, а когда revert']),
   st(3, 2, ['Жұмысты жылжыту', 'Перемещение работы'], ['git cherry-pick', 'Interactive rebase'],
      ['«Moving Work Around» және «A Mixed Bag» деңгейлерін аяқта', 'Пройди «Moving Work Around» и «A Mixed Bag»'],
      ['Коммиттерді қайта ретке келтіре аласың', 'Умеешь переупорядочивать коммиты']),
   st(3, 3, ['Advanced Topics', 'Advanced Topics'], ['Multiple rebases', 'Detached HEAD', 'git describe'],
      ['Advanced деңгейлерін ең аз командамен шеш', 'Реши уровни Advanced минимальным числом команд'],
      ['Нәтиже ұсынылған шешімнен көп ерекшеленбейді', 'Результат близок к эталонному решению']),
   st(3, 2, ['Remote', 'Remote'], ['git clone', 'git fetch', 'git pull', 'git push', 'origin'],
      ['«Push & Pull» және «To Origin and Beyond» деңгейлерін өт', 'Пройди «Push & Pull» и «To Origin and Beyond»'],
      ['Remote-пен конфликтсіз синхрондайсың', 'Синхронизируешься с remote без конфликтов'])]);

/* ===== Бағдарламалау тілдері / Языки программирования ===== */
rm('jackfrued/Python-100-Days', 'course',
  ['Компьютерлік сауаттылық; қытай тіліндегі мәтінді аудармашымен оқуға дайын болу', 'Компьютерная грамотность; готовность читать китайский текст через переводчик'],
  ['Day91–99 үлгісімен командалық веб-жоба: Django + дерекқор + деплой', 'Командный веб-проект по образцу Day91–99: Django + база данных + деплой'],
  [st(60, 1, ['Python негіздері (Day01–20)', 'Основы Python (Day01–20)'], ['Variables', 'Functions', 'OOP', 'Modules', 'Exceptions'],
      ['Әр күннің кодын өзің қайта жазып, кішкене ойындар жаса', 'Перепиши код каждого дня сам и сделай небольшие игры'],
      ['Класс пен модульден тұратын бағдарлама жазасың', 'Пишешь программу из классов и модулей']),
   st(30, 2, ['Python қолданбалары (Day21–35)', 'Применение Python (Day21–35)'], ['Files', 'Office automation', 'Image processing', 'Linux'],
      ['Excel/Word файлдарын автоматты өңдейтін скрипт жаса', 'Сделай скрипт автоматической обработки файлов Excel/Word'],
      ['Скрипт 100 файлды қатесіз өңдейді', 'Скрипт без ошибок обрабатывает 100 файлов']),
   st(30, 2, ['Дерекқорлар (Day36–45)', 'Базы данных (Day36–45)'], ['MySQL', 'SQL', 'Redis', 'ORM'],
      ['Оқу дерекқорын жобалап, күрделі SQL сұрауларын жаз', 'Спроектируй учебную базу и напиши сложные SQL-запросы'],
      ['JOIN, GROUP BY және индекстерді түсіндіресің', 'Объясняешь JOIN, GROUP BY и индексы']),
   st(45, 2, ['Django (Day46–60)', 'Django (Day46–60)'], ['Django', 'Models', 'Views', 'Templates', 'REST'],
      ['Тіркелуі және әкімшілік панелі бар Django сайтын жаса', 'Сделай сайт на Django с регистрацией и админкой'],
      ['Сайт модельдер мен формаларды дұрыс қолданады', 'Сайт корректно использует модели и формы']),
   st(50, 3, ['Деректер және ML (Day61–90)', 'Данные и ML (Day61–90)'], ['Web scraping', 'NumPy', 'pandas', 'matplotlib', 'scikit-learn'],
      ['Сайттан дерек жинап, талдап, қарапайым модель құр', 'Собери данные с сайта, проанализируй и построй простую модель'],
      ['Талдау нәтижесі графиктермен түсіндірілген', 'Результат анализа объяснён графиками'])],
  ['Материалдар қытай тілінде жазылған; кодтың өзі түсінікті, бірақ мәтінді аудару керек', 'Материалы написаны на китайском; код понятен, но текст придётся переводить']);

rm('Asabeneh/30-Days-Of-Python', 'course',
  ['Алдын ала білім қажет емес; репозиторийде орысша аударма бар', 'Предварительные знания не нужны; в репозитории есть перевод на русский'],
  ['Day 28–29 негізінде MongoDB-мен жұмыс істейтін өз API-ің', 'Собственный API с MongoDB по мотивам Day 28–29'],
  [st(12, 1, ['Синтаксис (1–7 күн)', 'Синтаксис (дни 1–7)'], ['Variables', 'Operators', 'Strings', 'Lists', 'Tuples', 'Sets', 'Dictionaries'],
      ['Әр күннің Exercises бөлімінің 1–2 деңгейін орында', 'Выполни уровни 1–2 раздела Exercises каждого дня'],
      ['Тізім мен сөздікті еркін түрлендіресің', 'Свободно преобразуешь списки и словари']),
   st(14, 1, ['Логика және функциялар (8–14 күн)', 'Логика и функции (дни 8–14)'], ['Conditionals', 'Loops', 'Functions', 'Modules', 'List comprehension', 'Higher order functions'],
      ['Функциялардан тұратын шағын модуль жазып, оны импортта', 'Напиши небольшой модуль из функций и импортируй его'],
      ['map/filter/lambda-ны орынды қолданасың', 'Уместно используешь map/filter/lambda']),
   st(14, 2, ['Қателер, файлдар, классы (15–21 күн)', 'Ошибки, файлы, классы (дни 15–21)'], ['Exception handling', 'Regular expressions', 'File handling', 'Classes and objects'],
      ['Файлды оқып, регулярлы өрнекпен талдайтын скрипт жаса', 'Сделай скрипт, читающий файл и разбирающий его регулярками'],
      ['Скрипт қате деректерге құламайды', 'Скрипт не падает на некорректных данных']),
   st(16, 2, ['Деректер және веб (22–30 күн)', 'Данные и веб (дни 22–30)'], ['Web scraping', 'Virtual environment', 'Statistics', 'Pandas', 'Flask', 'MongoDB', 'API'],
      ['Pandas-пен деректерді талдап, Flask API жаса', 'Проанализируй данные в Pandas и сделай API на Flask'],
      ['API CRUD операцияларын орындайды', 'API выполняет CRUD-операции'])]);

rm('Asabeneh/30-Days-Of-JavaScript', 'course',
  ['Алдын ала білім қажет емес; браузер мен Node.js', 'Предварительные знания не нужны; браузер и Node.js'],
  ['Mini project final: DOM, деректер және анимациясы бар өз мини-қосымшаң', 'Mini project final: своё мини-приложение с DOM, данными и анимацией'],
  [st(14, 1, ['Негіздер (1–7 күн)', 'Основы (дни 1–7)'], ['Data types', 'Operators', 'Conditionals', 'Arrays', 'Loops', 'Functions'],
      ['Әр күннің 1–3 деңгейлі жаттығуларын консольде орында', 'Выполни упражнения уровней 1–3 каждого дня в консоли'],
      ['Массив әдістерімен есептерді циклсіз шешесің', 'Решаешь задачи методами массивов без циклов']),
   st(16, 2, ['Объектілер мен функциялар (8–14 күн)', 'Объекты и функции (дни 8–14)'], ['Objects', 'Higher order functions', 'Sets and Maps', 'Destructuring', 'Regex', 'Error handling'],
      ['Елдер деректерін өңдейтін функциялар жиынын жаса', 'Сделай набор функций для обработки данных о странах'],
      ['Деструктуризация мен spread-ті еркін қолданасың', 'Свободно используешь деструктуризацию и spread']),
   st(14, 2, ['Кластар, async, closures (15–20 күн)', 'Классы, async, замыкания (дни 15–20)'], ['Classes', 'JSON', 'Web storage', 'Promises', 'Closures', 'Clean code'],
      ['Promise арқылы API-ден дерек алып, localStorage-та сақта', 'Получи данные из API через Promise и сохрани в localStorage'],
      ['Closure мен event loop-ты түсіндіресің', 'Объясняешь closure и event loop']),
   st(18, 2, ['DOM және жобалар (21–30 күн)', 'DOM и проекты (дни 21–30)'], ['DOM', 'Event listeners', 'Data visualization', 'Animation'],
      ['Solar system, World countries және Leaderboard жобаларын жаса', 'Сделай проекты Solar system, World countries и Leaderboard'],
      ['Жобалар фреймворксыз жұмыс істейді', 'Проекты работают без фреймворков'])]);

rm('Asabeneh/30-Days-Of-HTML', 'course',
  ['Алдын ала білім қажет емес', 'Предварительные знания не нужны'],
  ['Семантикалық белгіленген және HTML валидаторынан өткен көп бетті сайт', 'Многостраничный сайт с семантической разметкой, прошедший HTML-валидатор'],
  [st(4, 1, ['Веб қалай жұмыс істейді', 'Как работает веб'], ['Frontend', 'Backend', 'Full-stack', 'Browser', 'VS Code'],
      ['Ортаны баптап, сайттың бөліктерін нақты сайт мысалында белгіле', 'Настрой окружение и разметь части сайта на реальном примере'],
      ['Клиент пен сервердің рөлін түсіндіресің', 'Объясняешь роли клиента и сервера']),
   st(8, 1, ['HTML негіздері', 'Основы HTML'], ['Elements', 'Attributes', 'Headings', 'Lists', 'Links', 'Images'],
      ['Өзің туралы бір беттік сайт жаса', 'Сделай одностраничный сайт о себе'],
      ['Бет HTML валидаторынан қатесіз өтеді', 'Страница проходит HTML-валидатор без ошибок']),
   st(8, 2, ['Семантика, кестелер, формалар', 'Семантика, таблицы, формы'], ['Semantic HTML', 'Tables', 'Forms', 'Accessibility'],
      ['Кестесі мен тіркелу формасы бар бет жаса', 'Сделай страницу с таблицей и формой регистрации'],
      ['Экран оқу құралы бетті дұрыс оқиды', 'Скринридер корректно читает страницу'])],
  ['Репозиторийдің бір бөлігі ғана дайын: бірнеше күннің материалы жоқ', 'Репозиторий заполнен частично: материалов части дней нет']);

rm('mdn/learning-area/tree/main/css', 'reference',
  ['HTML негіздері', 'Основы HTML'],
  ['Flexbox пен Grid негізіндегі адаптивті бет: қаріптері мен блок стильдері өзіңдікі', 'Адаптивная страница на Flexbox и Grid со своими шрифтами и стилями блоков'],
  [st(10, 1, ['Блоктарды стильдеу', 'Стилизация блоков'], ['Box model', 'Backgrounds', 'Borders', 'Tables'],
      ['styling-boxes мысалдарын ашып, әрқайсысын өзгертіп көр', 'Открой примеры styling-boxes и измени каждый'],
      ['Box model-ді сурет арқылы түсіндіресің', 'Объясняешь box model на схеме']),
   st(6, 1, ['Веб-қаріптер', 'Веб-шрифты'], ['@font-face', 'Web fonts', 'Typography'],
      ['web-fonts мысалымен өз қаріп жиынтығыңды қос', 'По примеру web-fonts подключи свой набор шрифтов'],
      ['Қаріп барлық браузерде дұрыс жүктеледі', 'Шрифт корректно загружается во всех браузерах']),
   st(16, 2, ['CSS layout', 'CSS layout'], ['Flexbox', 'Grid', 'Positioning', 'Floats', 'Responsive design'],
      ['css-layout мысалдарындағы макеттерді нөлден қайта жина', 'Пересобери с нуля макеты из примеров css-layout'],
      ['Бір макетті Flexbox-пен де, Grid-пен де жасайсың', 'Делаешь один макет и на Flexbox, и на Grid'])],
  ['Репозиторийде тек код мысалдары бар; теориясы MDN Learn сайтындағы мақалаларда', 'В репозитории только примеры кода; теория — в статьях MDN Learn']);

rm('Asabeneh/30-Days-Of-React', 'course',
  ['JavaScript ES6 (1-күндегі шолу көмектеседі), HTML, CSS', 'JavaScript ES6 (поможет обзор первого дня), HTML, CSS'],
  ['Hooks, Context және React Router қолданылған жоба (Day 28–30 үлгісімен)', 'Проект с Hooks, Context и React Router по образцу Day 28–30'],
  [st(10, 1, ['React-қа кіріспе (1–5 күн)', 'Введение в React (дни 1–5)'], ['JavaScript refresher', 'JSX', 'Components', 'Props'],
      ['Props арқылы деректер берілетін карточкалар жаса', 'Сделай карточки, получающие данные через props'],
      ['Компонентті функция ретінде түсіндіресің', 'Объясняешь компонент как функцию']),
   st(14, 2, ['Күй және оқиғалар (6–13 күн)', 'Состояние и события (дни 6–13)'], ['Map list keys', 'Class components', 'State', 'Conditional rendering', 'Events', 'Forms'],
      ['Валидациясы бар форма және тізім жаса', 'Сделай форму с валидацией и список'],
      ['Controlled және uncontrolled input айырмасын білесің', 'Знаешь разницу controlled и uncontrolled input']),
   st(12, 2, ['Экожүйе (14–20 күн)', 'Экосистема (дни 14–20)'], ['Lifecycle', 'Third party packages', 'HOC', 'React Router', 'Axios'],
      ['Маршруттары бар және API-ден дерек алатын қосымша жаса', 'Сделай приложение с маршрутами и загрузкой данных из API'],
      ['Жүктеу мен қате күйлері көрсетіледі', 'Показываются состояния загрузки и ошибки']),
   st(14, 3, ['Hooks (21–30 күн)', 'Hooks (дни 21–30)'], ['useState', 'useEffect', 'Custom hooks', 'Context', 'useRef'],
      ['Класс компоненттерін hooks-қа көшіріп, өз hook-ыңды жаз', 'Переведи классовые компоненты на hooks и напиши свой hook'],
      ['Кастом hook бірнеше компонентте қайта қолданылады', 'Кастомный hook переиспользуется в нескольких компонентах'])]);

rm('federico-busato/Modern-CPP-Programming', 'course',
  ['Кез келген тілде бағдарламалау тәжірибесі', 'Опыт программирования на любом языке'],
  ['Заманауи C++ стандартында жазылған, тесттері мен профильдеуі бар шағын кітапхана', 'Небольшая библиотека на современном C++ с тестами и профилированием'],
  [st(30, 1, ['Негізгі ұғымдар', 'Базовые понятия'], ['Types', 'Integral/floating types', 'Pointers', 'References', 'Functions'],
      ['Basic Concepts I–VI слайдтарындағы мысалдарды компиляциялап, өзгерт', 'Скомпилируй и измени примеры из слайдов Basic Concepts I–VI'],
      ['Undefined behavior мысалдарын таба аласың', 'Находишь примеры undefined behavior']),
   st(30, 2, ['ООП және шаблондар', 'ООП и шаблоны'], ['Classes', 'RAII', 'Inheritance', 'Templates', 'Concepts'],
      ['RAII қолданылған контейнер класын шаблонмен жаз', 'Напиши шаблонный класс-контейнер с RAII'],
      ['Rule of five-ты түсіндіресің', 'Объясняешь rule of five']),
   st(20, 2, ['Компиляция және кодтау стилі', 'Компиляция и стиль кода'], ['Translation units', 'Linkage', 'Code conventions', 'Debugging'],
      ['Жобаны бірнеше файлға бөліп, CMake-пен жина', 'Раздели проект на файлы и собери через CMake'],
      ['ODR қателерін түсіндіріп, түзете аласың', 'Объясняешь и исправляешь ошибки ODR']),
   st(25, 2, ['Экожүйе және стандартты кітапхана', 'Экосистема и стандартная библиотека'], ['Ecosystem', 'Utilities', 'Iterators', 'Containers', 'Algorithms'],
      ['Өз кодыңдағы циклдерді STL алгоритмдеріне ауыстыр', 'Замени циклы в своём коде на алгоритмы STL'],
      ['Контейнерді күрделілігіне қарай таңдайсың', 'Выбираешь контейнер по сложности операций']),
   st(30, 3, ['Advanced және оңтайландыру', 'Advanced и оптимизация'], ['Move semantics', 'Advanced topics', 'Optimization', 'Profiling'],
      ['Кітапханаңды профильдеп, екі тар жерді оңтайландыр', 'Профилируй библиотеку и оптимизируй два узких места'],
      ['Оңтайландыру нәтижесі бенчмаркпен дәлелденген', 'Эффект оптимизации подтверждён бенчмарком'])]);

rm('getify/You-Dont-Know-JS', 'book',
  ['JavaScript синтаксисін білу', 'Знание синтаксиса JavaScript'],
  ['Кітаптағы тақырыптар бойынша мысалдары бар өз конспект-репозиторийің', 'Свой репозиторий-конспект с примерами по темам книг'],
  [st(8, 1, ['Get Started', 'Get Started'], ['Values', 'Types', 'Pillars of JS'],
      ['Әр тараудың мысалдарын консольде іске қосып, нәтижесін болжа', 'Запускай примеры каждой главы и заранее предсказывай результат'],
      ['JS-тің үш «тірегін» түсіндіресің', 'Объясняешь три «столпа» JS']),
   st(14, 2, ['Scope & Closures', 'Scope & Closures'], ['Lexical scope', 'Hoisting', 'Closures', 'Modules'],
      ['Closure арқылы модуль үлгісін жаз', 'Напиши паттерн модуля на замыканиях'],
      ['Код үзіндісінің scope-тарын түстермен белгілейсің', 'Размечаешь области видимости фрагмента кода']),
   st(12, 3, ['Objects, Classes, Types', 'Objects, Classes, Types'], ['this', 'Prototypes', 'Classes', 'Coercion'],
      ['this пен прототиптерге 10 тапсырма құрастырып, шеш', 'Составь и реши 10 задач на this и прототипы'],
      ['Типтердің жасырын түрленуінің нәтижесін алдын ала айтасың', 'Заранее называешь результат неявного приведения типов'])],
  ['2-басылымның барлық кітабы әлі аяқталмаған; кейбір тақырыптар 1-басылымда', 'Не все книги второго издания закончены; часть тем есть в первом издании']);

rm('airbnb/javascript', 'reference',
  ['JavaScript ES6 негіздері', 'Основы JavaScript ES6'],
  ['ESLint + airbnb конфигі қосылған, ескертусіз жобаң', 'Свой проект с ESLint и конфигом airbnb без предупреждений'],
  [st(4, 1, ['Типтер мен айнымалылар', 'Типы и переменные'], ['References', 'const/let', 'Objects', 'Arrays', 'Destructuring'],
      ['Ескі кодыңды осы бөлімдер бойынша қайта жаз', 'Перепиши свой старый код по этим разделам'],
      ['var жоқ, деструктуризация орынды қолданылған', 'Нет var, деструктуризация используется уместно']),
   st(5, 2, ['Функциялар, кластар, модульдер', 'Функции, классы, модули'], ['Arrow functions', 'Classes', 'Modules', 'Iterators'],
      ['Жобаңды ES-модульдерге бөл', 'Раздели проект на ES-модули'],
      ['Әр ереженің «Why?» түсіндірмесін айта аласың', 'Можешь пересказать «Why?» каждого правила']),
   st(3, 2, ['Линтер', 'Линтер'], ['ESLint', 'eslint-config-airbnb', 'Prettier'],
      ['linters/ бумасының нұсқауымен ESLint қос', 'Подключи ESLint по инструкции папки linters/'],
      ['npm run lint қатесіз өтеді', 'npm run lint проходит без ошибок'])]);

rm('leonardomso/33-js-concepts', 'reference',
  ['JavaScript синтаксисі', 'Синтаксис JavaScript'],
  ['33 тұжырымдаманың әрқайсысына өз мысалың бар репозиторий', 'Репозиторий с собственным примером на каждую из 33 концепций'],
  [st(10, 1, ['Fundamentals', 'Fundamentals'], ['Call stack', 'Primitive types', 'Value vs reference', 'Type coercion', 'Equality'],
      ['Әр тұжырымдамаға бір кодтық мысал жаз', 'Напиши по одному примеру кода на каждую концепцию'],
      ['== мен === нәтижесін болжайсың', 'Предсказываешь результат == и ===']),
   st(12, 2, ['Функциялар мен орындалу', 'Функции и выполнение'], ['Scope', 'Closures', 'this', 'call/apply/bind', 'IIFE'],
      ['bind-ты өзің жазып көр', 'Попробуй написать свой bind'],
      ['this-тің мәнін кез келген контекстте айтасың', 'Называешь значение this в любом контексте']),
   st(12, 2, ['Async және Web Platform', 'Async и Web Platform'], ['Event loop', 'Promises', 'async/await', 'DOM', 'Web APIs'],
      ['Event loop-ты көрсететін демо жаса', 'Сделай демо, показывающее event loop'],
      ['Микротапсырма мен макротапсырманың ретін түсіндіресің', 'Объясняешь порядок микро- и макрозадач']),
   st(12, 3, ['ООП, ФП және advanced', 'ООП, ФП и advanced'], ['Prototypes', 'Classes', 'Pure functions', 'Currying', 'Design patterns'],
      ['Бір модульді функционалдық стильде қайта жаз', 'Перепиши один модуль в функциональном стиле'],
      ['Таза функция мен жанама әсерді ажыратасың', 'Отличаешь чистую функцию от побочного эффекта'])]);

rm('quii/learn-go-with-tests', 'course',
  ['Кез келген тілде бағдарламалау тәжірибесі; репозиторийде орысша аударма бар', 'Опыт программирования на любом языке; есть перевод на русский'],
  ['«Build an application» бөліміндегідей тесттерімен жазылған HTTP-сервер', 'HTTP-сервер с тестами, как в разделе «Build an application»'],
  [st(12, 1, ['Go негіздері TDD арқылы', 'Основы Go через TDD'], ['Hello World', 'Integers', 'Iteration', 'Arrays and slices', 'Structs', 'Interfaces'],
      ['Әр тарауды «тест → код → рефакторинг» циклімен өт', 'Проходи каждую главу циклом «тест → код → рефакторинг»'],
      ['Тестті кодтан бұрын жазасың', 'Пишешь тест раньше кода']),
   st(14, 2, ['Қателер мен тәуелділіктер', 'Ошибки и зависимости'], ['Pointers', 'Errors', 'Maps', 'Dependency injection', 'Mocking'],
      ['Mock арқылы тексерілетін функция жаз', 'Напиши функцию, проверяемую через mock'],
      ['Тәуелділікті интерфейс арқылы ауыстырасың', 'Подменяешь зависимость через интерфейс']),
   st(14, 3, ['Конкуренттілік', 'Конкурентность'], ['Concurrency', 'Select', 'Sync', 'Context', 'Generics'],
      ['Горутиналармен параллель тексеретін құрал жаса', 'Сделай инструмент с параллельными проверками на горутинах'],
      ['go test -race қатесіз өтеді', 'go test -race проходит без ошибок']),
   st(18, 3, ['Қосымша жасау', 'Создание приложения'], ['HTTP server', 'JSON', 'Routing', 'IO', 'CLI', 'WebSockets'],
      ['Кітаптағы ойыншылар серверін соңына дейін жаса', 'Доведи до конца сервер игроков из книги'],
      ['Acceptance-тесттер жасыл', 'Acceptance-тесты зелёные'])]);

rm('rust-lang/rustlings', 'practice',
  ['Rust орнатылған; «The Rust Programming Language» кітабын қатар оқу', 'Установленный Rust; параллельное чтение книги «The Rust Programming Language»'],
  ['Барлық жаттығу мен квиздерді аяқтап, CLI-утилита жазу', 'Все упражнения и квизы, затем своя CLI-утилита'],
  [st(6, 1, ['Кіріспе және негізгі типтер', 'Введение и базовые типы'], ['variables', 'functions', 'if', 'primitive types', 'vecs'],
      ['00_intro–05_vecs жаттығуларын өт', 'Пройди упражнения 00_intro–05_vecs'],
      ['1-квиз өтті', 'Квиз 1 пройден']),
   st(10, 2, ['Ownership және құрылымдар', 'Владение и структуры'], ['move semantics', 'structs', 'enums', 'strings', 'modules', 'hashmaps'],
      ['06–11 бумаларын компилятор кеңестерін оқып шеш', 'Реши папки 06–11, читая подсказки компилятора'],
      ['Borrow checker қатесін түсіндіресің', 'Объясняешь ошибку borrow checker']),
   st(10, 2, ['Option, қателер, generics', 'Option, ошибки, generics'], ['options', 'error handling', 'generics', 'traits', 'lifetimes', 'tests'],
      ['12–17 жаттығуларын өтіп, 2-квизді тапсыр', 'Пройди 12–17 и сдай квиз 2'],
      ['? операторы мен Result-ты қолданасың', 'Используешь оператор ? и Result']),
   st(10, 3, ['Advanced', 'Advanced'], ['iterators', 'smart pointers', 'threads', 'macros', 'clippy', 'conversions', 'async'],
      ['18–24 бумаларын және 3-квизді аяқта', 'Заверши папки 18–24 и квиз 3'],
      ['cargo clippy ескертусіз өтеді', 'cargo clippy проходит без предупреждений'])]);

rm('satwikkansal/wtfpython', 'reference',
  ['Python негіздері', 'Основы Python'],
  ['Python-ның күтпеген мінез-құлқы туралы 10 мысалдан тұратын өз жинағың', 'Своя подборка из 10 примеров неочевидного поведения Python'],
  [st(5, 2, ['Strain your brain!', 'Strain your brain!'], ['Strings', 'is vs ==', 'Hashing', 'Chained operations'],
      ['Әр мысалдың нәтижесін іске қоспай тұрып болжа', 'Предскажи результат каждого примера до запуска'],
      ['Болжамдардың жартысынан көбі дұрыс', 'Больше половины прогнозов верны']),
   st(4, 2, ['Slippery Slopes', 'Slippery Slopes'], ['Mutable defaults', 'Scope', 'Loops', 'Generators'],
      ['Өз кодыңнан ұқсас қателерді ізде', 'Найди похожие ошибки в своём коде'],
      ['Mutable default аргументінің қаупін түсіндіресің', 'Объясняешь опасность mutable default']),
   st(3, 3, ['Hidden treasures және Miscellaneous', 'Hidden treasures и Miscellaneous'], ['CPython internals', 'Interning', 'Bytecode'],
      ['dis модулімен бір мысалдың байткодын талда', 'Разбери байткод одного примера модулем dis'],
      ['Мысалды CPython ішкі құрылымымен түсіндіресің', 'Объясняешь пример через устройство CPython'])]);

/* ===== Frontend және Backend / Frontend и Backend ===== */
rm('fullstack-hy2020/fullstack-hy2020.github.io', 'course',
  ['JavaScript негіздері, Git', 'Основы JavaScript, Git'],
  ['Курстың тапсырмалары негізіндегі full-stack қосымша: React + Node + тесттер + CI/CD', 'Full-stack приложение по заданиям курса: React + Node + тесты + CI/CD'],
  [st(30, 1, ['Part 0–2: React және сервер', 'Part 0–2: React и сервер'], ['Web app basics', 'React', 'Components', 'State', 'Axios'],
      ['Courseinfo, Unicafe, Anecdotes және Phonebook тапсырмаларын орында', 'Выполни задания Courseinfo, Unicafe, Anecdotes и Phonebook'],
      ['Барлық тапсырмалар жүйеге жіберілді', 'Все упражнения отправлены в систему курса']),
   st(30, 2, ['Part 3–4: Node.js және тестілеу', 'Part 3–4: Node.js и тестирование'], ['Node.js', 'Express', 'MongoDB', 'Testing', 'Token authentication'],
      ['Bloglist backend-ін тесттерімен және токен-авторизациямен жаса', 'Сделай backend Bloglist с тестами и токен-авторизацией'],
      ['supertest тесттері жасыл', 'Тесты supertest зелёные']),
   st(30, 2, ['Part 5–7: Frontend тереңірек', 'Part 5–7: Frontend глубже'], ['Testing React', 'Playwright', 'Redux', 'React Query', 'React Router'],
      ['Bloglist frontend-іне E2E тесттер мен Redux қос', 'Добавь во frontend Bloglist E2E-тесты и Redux'],
      ['E2E тесттер негізгі сценарийді тексереді', 'E2E-тесты проверяют основной сценарий']),
   st(30, 3, ['Part 8–9: GraphQL және TypeScript', 'Part 8–9: GraphQL и TypeScript'], ['GraphQL', 'Apollo', 'TypeScript'],
      ['Library қосымшасын GraphQL-ге көшіріп, Patientor-ды TypeScript-те жаз', 'Переведи Library на GraphQL и напиши Patientor на TypeScript'],
      ['tsc қатесіз компиляциялайды', 'tsc компилирует без ошибок']),
   st(30, 3, ['Part 10–13: таңдау бөлімдері', 'Part 10–13: части по выбору'], ['React Native', 'CI/CD', 'GitHub Actions', 'Docker', 'PostgreSQL'],
      ['Бір бөлімді таңдап (мысалы, CI/CD), оның тапсырмаларын орында', 'Выбери одну часть (например, CI/CD) и выполни её задания'],
      ['Pipeline деплойды автоматты жасайды', 'Pipeline автоматически делает деплой'])]);

rm('kamranahmedse/developer-roadmap', 'reference',
  ['Мақсатты мамандықты таңдап қою', 'Выбранная целевая специализация'],
  ['Таңдалған roadmap бойынша roadmap.sh projects бөліміндегі 3 жоба', '3 проекта из раздела roadmap.sh projects по выбранной карте'],
  [st(2, 1, ['Роль мен картаны таңдау', 'Выбор роли и карты'], ['Frontend', 'Backend', 'DevOps', 'AI Engineer', 'Python'],
      ['roadmaps/ ішінен бір картаны таңдап, оны өз деңгейіңмен салыстыр', 'Выбери карту в roadmaps/ и отметь на ней свой уровень'],
      ['Картадағы білетін және білмейтін түйіндер белгіленді', 'На карте отмечены известные и неизвестные узлы']),
   st(30, 1, ['Міндетті түйіндер', 'Обязательные узлы'], ['Fundamentals', 'Version control', 'Internet'],
      ['Картаның «міндетті» түйіндерін ретімен өт', 'Пройди «обязательные» узлы карты по порядку'],
      ['Әр түйінге бір сөйлемдік түсіндірме жазылды', 'По каждому узлу записано объяснение в одно предложение']),
   st(40, 2, ['Ұсынылатын түйіндер және жобалар', 'Рекомендуемые узлы и проекты'], ['Projects', 'Best Practices', 'Frameworks'],
      ['Картаның жобалар тізімінен деңгейіңе сай 2 жоба жаса', 'Сделай 2 проекта по своему уровню из списка проектов карты'],
      ['Жобалар картадағы тақырыптарды жабады', 'Проекты покрывают темы карты']),
   st(20, 3, ['Тереңдету', 'Углубление'], ['Best Practices', 'System design', 'Guides'],
      ['Best Practices бөлімі бойынша жобаңды аудиттен өткіз', 'Проведи аудит проекта по разделу Best Practices'],
      ['Аудит нәтижесінде кемінде 5 түзету жасалды', 'По итогам аудита сделано не менее 5 исправлений'])]);

rm('alsotang/node-lessons', 'course',
  ['JavaScript негіздері; қытай тіліндегі мәтінді аудармашымен оқу', 'Основы JavaScript; чтение китайского текста через переводчик'],
  ['Курс сабақтарына негізделген, заманауи пакеттерге көшірілген краулер + API', 'Краулер + API по урокам курса, переведённые на современные пакеты'],
  [st(6, 1, ['Express пен модульдер', 'Express и модули'], ['Express', 'npm', 'External modules'],
      ['lesson1–2: Express-те қарапайым сервер жаса', 'lesson1–2: сделай простой сервер на Express'],
      ['Сервер маршрутқа жауап береді', 'Сервер отвечает на маршрут']),
   st(8, 2, ['Краулер және конкуренттілік', 'Краулер и конкурентность'], ['superagent', 'cheerio', 'eventproxy', 'async'],
      ['lesson3–5: сайттан дерек жинап, сұраулар санын шектей', 'lesson3–5: собери данные с сайта и ограничь число параллельных запросов'],
      ['Конкуренттілік шегі сақталады', 'Лимит параллельности соблюдается']),
   st(8, 2, ['Тестілеу', 'Тестирование'], ['mocha', 'should', 'supertest', 'benchmark'],
      ['lesson6–10: сервер мен функцияларға тест жаз', 'lesson6–10: напиши тесты к серверу и функциям'],
      ['Тесттер CI-де өтеді', 'Тесты проходят в CI']),
   st(8, 3, ['Деректер және сессия', 'Данные и сессии'], ['MongoDB', 'Mongoose', 'cookie', 'session', 'Promise'],
      ['lesson14–17: Mongoose пен сессиясы бар API жаса', 'lesson14–17: сделай API с Mongoose и сессиями'],
      ['Callback-тер promise/async-ке ауыстырылды', 'Callback заменены на promise/async'])],
  ['Курс қытай тілінде және ескірген: Heroku тегін тарифі мен Travis CI енді жоқ, оларды заманауи баламалармен ауыстыр', 'Курс на китайском и устарел: бесплатного Heroku и Travis CI больше нет, используй современные аналоги']);

rm('trekhleb/javascript-algorithms', 'reference',
  ['JavaScript негіздері', 'Основы JavaScript'],
  ['Таңдалған 15 алгоритм мен құрылымның өз іске асыруы және тесттері', 'Собственные реализации 15 выбранных алгоритмов и структур с тестами'],
  [st(12, 1, ['Деректер құрылымдары', 'Структуры данных'], ['Linked List', 'Queue', 'Stack', 'Hash Table', 'Heap', 'Trie'],
      ['Әр құрылымның README-ін оқып, өзің жазып, репозиторий тесттерімен тексер', 'Прочитай README структуры, напиши её сам и проверь тестами репозитория'],
      ['Операциялардың күрделілігін кестеден қарамай айтасың', 'Называешь сложность операций без таблицы']),
   st(10, 2, ['Ағаштар мен графтар', 'Деревья и графы'], ['BST', 'AVL Tree', 'Graph', 'Disjoint Set', 'BFS', 'DFS', 'Dijkstra'],
      ['Графтың BFS, DFS және Dijkstra алгоритмдерін жаз', 'Напиши BFS, DFS и Dijkstra для графа'],
      ['Ең қысқа жолды қолмен есептеп, кодпен салыстырасың', 'Считаешь кратчайший путь вручную и сверяешь с кодом']),
   st(10, 2, ['Тақырыптар бойынша алгоритмдер', 'Алгоритмы по темам'], ['Math', 'Strings', 'Sorting', 'Searches', 'Cryptography'],
      ['Әр тақырыптан бір алгоритм таңдап, жаз', 'Выбери и напиши по одному алгоритму из каждой темы'],
      ['Сұрыптауларды күрделілік кестесімен салыстырасың', 'Сравниваешь сортировки по таблице сложности']),
   st(12, 3, ['Парадигмалар', 'Парадигмы'], ['Greedy', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'],
      ['Бір есепті үш парадигмамен шешіп, салыстыр', 'Реши одну задачу тремя парадигмами и сравни'],
      ['Есепке қай парадигма лайық екенін негіздейсің', 'Обосновываешь, какая парадигма подходит задаче'])]);

rm('microsoft/TypeScript', 'tool',
  ['JavaScript ES6', 'JavaScript ES6'],
  ['Бар JS-жобаңды strict режиміндегі TypeScript-ке көшіру', 'Перевод своего JS-проекта на TypeScript в strict-режиме'],
  [st(4, 1, ['Орнату және tsc', 'Установка и tsc'], ['npm install typescript', 'tsc', 'tsconfig.json'],
      ['README-дегі нұсқаумен TypeScript орнатып, бір файлды компиляцияла', 'Установи TypeScript по README и скомпилируй файл'],
      ['tsconfig-тің негізгі опцияларын түсіндіресің', 'Объясняешь основные опции tsconfig']),
   st(10, 1, ['Типтер негізі', 'Основы типов'], ['Basic types', 'Narrowing', 'Functions', 'Object types', 'Unions'],
      ['Ресми Handbook бойынша мысалдар жасап, қателерді түзет', 'Сделай примеры по официальному Handbook и исправь ошибки'],
      ['any қолданбай типтейсің', 'Типизируешь без any']),
   st(10, 2, ['Generics және модульдер', 'Generics и модули'], ['Generics', 'Utility types', 'Modules', 'Declaration files'],
      ['Generics қолданылған утилиталар жаз', 'Напиши утилиты с generics'],
      ['Partial, Pick, Record-ты орынды қолданасың', 'Уместно используешь Partial, Pick и Record']),
   st(12, 3, ['Жобаға енгізу', 'Внедрение в проект'], ['strict mode', 'Migration', 'Type checking'],
      ['JS-жобаңды бірте-бірте TypeScript-ке көшір', 'Постепенно переведи JS-проект на TypeScript'],
      ['strict: true режимінде қате жоқ', 'В режиме strict: true нет ошибок'])],
  ['Бұл компилятордың бастапқы коды; оқу материалдары README сілтейтін ресми құжаттамада', 'Это исходный код компилятора; учебные материалы — в официальной документации по ссылке из README']);

rm('goldbergyoni/nodebestpractices', 'reference',
  ['Node.js-те жазылған жоба', 'Свой проект на Node.js'],
  ['Өз Node.js жобаңның барлық бөлімдер бойынша аудиті және түзетулері', 'Аудит своего Node.js-проекта по всем разделам и исправления'],
  [st(6, 2, ['Архитектура', 'Архитектура'], ['Business components', '3-tier layers', 'Config', 'TypeScript'],
      ['Жобаңды бизнес-компоненттер бойынша қайта құрылымда', 'Перестрой проект по бизнес-компонентам'],
      ['Веб-қабат домен логикасынан бөлінген', 'Веб-слой отделён от доменной логики']),
   st(6, 2, ['Қателерді өңдеу', 'Обработка ошибок'], ['async/await', 'Error object', 'Centralized error handling', 'Logging'],
      ['Орталықтандырылған қате өңдегішін қос', 'Добавь централизованный обработчик ошибок'],
      ['Өңделмеген қателер логталады', 'Необработанные ошибки логируются']),
   st(8, 2, ['Тест және код сапасы', 'Тесты и качество кода'], ['Testing', 'Linting', 'Code patterns'],
      ['2 бөлімнің кеңестері бойынша тесттер мен линтер қос', 'Добавь тесты и линтер по советам двух разделов'],
      ['CI-де тест пен линт өтеді', 'В CI проходят тесты и линт']),
   st(10, 3, ['Production, қауіпсіздік, Docker', 'Production, безопасность, Docker'], ['Production', 'Security', 'Performance', 'Docker'],
      ['Security және Docker бөлімдері бойынша чек-лист жаса', 'Составь чек-лист по разделам Security и Docker'],
      ['npm audit пен Docker-образ ескертусіз', 'npm audit и Docker-образ без предупреждений'])]);

rm('thedaviddias/Front-End-Checklist', 'reference',
  ['HTML, CSS, JavaScript-те жасалған сайт', 'Свой сайт на HTML, CSS и JavaScript'],
  ['Сайтыңның High-приоритетті пункттер бойынша толық тексерілуі', 'Полная проверка своего сайта по пунктам с высоким приоритетом'],
  [st(3, 1, ['HTML және SEO', 'HTML и SEO'], ['Doctype', 'Meta tags', 'Semantic HTML', 'SEO'],
      ['HTML және SEO бөлімдерінің пункттерін сайтыңда тексер', 'Проверь свой сайт по пунктам HTML и SEO'],
      ['High пункттерінің бәрі орындалған', 'Все пункты High выполнены']),
   st(4, 2, ['CSS және JavaScript', 'CSS и JavaScript'], ['Unused CSS', 'Minification', 'Non-blocking JS'],
      ['Пайдаланылмайтын CSS пен JS-ті тауып, алып таста', 'Найди и удали неиспользуемые CSS и JS'],
      ['Бандл көлемі азайды', 'Объём бандла уменьшился']),
   st(4, 2, ['Өнімділік', 'Производительность'], ['Lighthouse', 'Images', 'Caching', 'Core Web Vitals'],
      ['Lighthouse-та өлшеп, суреттерді оңтайландыр', 'Измерь в Lighthouse и оптимизируй изображения'],
      ['Performance бағасы 90-нан жоғары', 'Оценка Performance выше 90']),
   st(3, 2, ['Қолжетімділік', 'Доступность'], ['Accessibility', 'ARIA', 'Contrast', 'Keyboard'],
      ['Сайтты пернетақтамен және экран оқу құралымен тексер', 'Проверь сайт с клавиатуры и скринридером'],
      ['Барлық элементке пернетақтамен жетуге болады', 'Все элементы доступны с клавиатуры'])]);

/* ===== ЖИ және Machine Learning / ИИ и Machine Learning ===== */
rm('microsoft/generative-ai-for-beginners', 'course',
  ['Python немесе TypeScript негіздері; LLM API кілті (Azure OpenAI, GitHub Models т.б.)', 'Основы Python или TypeScript; ключ LLM API (Azure OpenAI, GitHub Models и др.)'],
  ['RAG пен function calling қолданылған, қауіпсіздігі ойластырылған чат-қосымша', 'Чат-приложение с RAG и function calling, продуманное с точки зрения безопасности'],
  [st(6, 1, ['Генеративті ЖИ негіздері', 'Основы генеративного ИИ'], ['LLM', 'Model comparison', 'Responsible AI'],
      ['1–3 сабақты оқып, екі модельді бір тапсырмада салыстыр', 'Пройди уроки 1–3 и сравни две модели на одной задаче'],
      ['LLM-нің шектеулерін түсіндіресің', 'Объясняешь ограничения LLM']),
   st(8, 1, ['Промпт-инжиниринг', 'Промпт-инжиниринг'], ['Prompt engineering', 'Few-shot', 'Chain-of-thought'],
      ['4–5 сабақ: бір тапсырмаға 5 промпт нұсқасын сына', 'Уроки 4–5: испытай 5 вариантов промпта на одной задаче'],
      ['Промпттің нәтижеге әсерін дәлелдейсің', 'Показываешь влияние промпта на результат']),
   st(14, 2, ['Қосымшалар жасау', 'Создание приложений'], ['Text generation', 'Chat apps', 'Image generation', 'Low-code', 'Function calling', 'UX'],
      ['6–12 сабақтардағы мәтін, чат және function calling қосымшаларын жаса', 'Сделай приложения генерации текста, чата и function calling из уроков 6–12'],
      ['Қосымша сыртқы функцияны дұрыс шақырады', 'Приложение корректно вызывает внешнюю функцию']),
   st(12, 3, ['RAG, қауіпсіздік, LLMOps', 'RAG, безопасность, LLMOps'], ['Vector databases', 'RAG', 'Security', 'LLMOps'],
      ['Өз құжаттарыңа RAG жасап, prompt injection-нан қорға', 'Сделай RAG по своим документам и защити от prompt injection'],
      ['Жауаптар дереккөзге сілтеме береді', 'Ответы ссылаются на источник']),
   st(10, 3, ['Агенттер және модельдер', 'Агенты и модели'], ['AI agents', 'Fine-tuning', 'Open source models', 'SLM'],
      ['17–21 сабақтан бір тақырыпты таңдап, тәжірибе жаса', 'Выбери тему из уроков 17–21 и проведи эксперимент'],
      ['Ашық модельді жергілікті іске қосасың', 'Запускаешь открытую модель локально'])]);

rm('microsoft/ML-For-Beginners', 'course',
  ['Python негіздері, мектеп математикасы', 'Основы Python, школьная математика'],
  ['Өз деректеріңе классикалық ML моделі және оны қолданатын веб-қосымша', 'Классическая ML-модель на своих данных и веб-приложение, использующее её'],
  [st(6, 1, ['ML-ге кіріспе', 'Введение в ML'], ['History', 'Fairness', 'Techniques', 'scikit-learn'],
      ['1-модульдің квиздерін өтіп, ортаны бапта', 'Пройди квизы модуля 1 и настрой окружение'],
      ['ML-дің әдіс түрлерін ажыратасың', 'Различаешь типы методов ML']),
   st(10, 1, ['Регрессия және веб-қосымша', 'Регрессия и веб-приложение'], ['Linear regression', 'Polynomial regression', 'Logistic regression', 'Flask', 'Pickle'],
      ['Асқабақ бағасы деректерімен модель құрып, Flask-та жарияла', 'Построй модель на данных о ценах на тыквы и опубликуй через Flask'],
      ['Модель метрикамен бағаланған', 'Модель оценена метрикой']),
   st(10, 2, ['Классификация және кластерлеу', 'Классификация и кластеризация'], ['Classifiers', 'K-Means', 'Clustering'],
      ['Тағамдар деректерімен классификатор мен кластерлеу жаса', 'Сделай классификатор и кластеризацию на данных о кухнях'],
      ['Confusion matrix-ті түсіндіресің', 'Объясняешь confusion matrix']),
   st(10, 2, ['NLP және уақыт қатарлары', 'NLP и временные ряды'], ['NLP', 'Sentiment analysis', 'ARIMA', 'SVR'],
      ['Қонақүй пікірлерінің тональдігін талда және ARIMA болжамын жаса', 'Проанализируй тональность отзывов об отелях и сделай прогноз ARIMA'],
      ['Болжам қатесі өлшенген', 'Ошибка прогноза измерена']),
   st(6, 3, ['Reinforcement learning', 'Reinforcement learning'], ['Q-Learning', 'Gym'],
      ['Q-Learning агентін жаттықтыр', 'Обучи агента Q-Learning'],
      ['Агент сыйақыны тұрақты арттырады', 'Агент стабильно увеличивает награду'])]);

rm('microsoft/AI-For-Beginners', 'course',
  ['Python, NumPy негіздері', 'Основы Python и NumPy'],
  ['Таңдалған бағыт бойынша нейрожелі жобасы: CV немесе NLP', 'Проект нейросети по выбранному направлению: CV или NLP'],
  [st(6, 1, ['ЖИ-ге кіріспе', 'Введение в ИИ'], ['Symbolic AI', 'Knowledge representation', 'Expert systems'],
      ['Қарапайым сараптамалық жүйе жаса', 'Сделай простую экспертную систему'],
      ['Символдық және нейрондық ЖИ айырмасын түсіндіресің', 'Объясняешь разницу символьного и нейросетевого ИИ']),
   st(10, 2, ['Нейрондық желілер', 'Нейронные сети'], ['Perceptron', 'Multi-layer perceptron', 'PyTorch', 'TensorFlow'],
      ['Перцептронды нөлден жазып, кейін фреймворкта қайтала', 'Напиши перцептрон с нуля, затем повтори на фреймворке'],
      ['Backpropagation қадамдарын түсіндіресің', 'Объясняешь шаги backpropagation']),
   st(14, 2, ['Компьютерлік көру', 'Компьютерное зрение'], ['CNN', 'Transfer learning', 'Autoencoders', 'GAN', 'Object detection', 'Segmentation'],
      ['Transfer learning арқылы суреттер классификаторын үйрет', 'Обучи классификатор изображений через transfer learning'],
      ['Тест жиынында дәлдік өлшенді', 'Точность измерена на тестовой выборке']),
   st(14, 3, ['Табиғи тілді өңдеу', 'Обработка языка'], ['Embeddings', 'RNN', 'Transformers', 'NER', 'LLM'],
      ['Мәтін классификаторын embeddings немесе трансформермен жаса', 'Сделай классификатор текста на embeddings или трансформере'],
      ['Модельдің қателерін талдадың', 'Ошибки модели разобраны']),
   st(6, 3, ['Басқа тәсілдер және этика', 'Другие подходы и этика'], ['Genetic algorithms', 'Deep RL', 'Multi-agent', 'AI ethics'],
      ['Генетикалық алгоритммен бір есепті шеш', 'Реши задачу генетическим алгоритмом'],
      ['Жобаңның этикалық тәуекелдері сипатталған', 'Описаны этические риски проекта'])]);

rm('microsoft/ai-agents-for-beginners', 'course',
  ['Python; LLM API (GitHub Models немесе Azure)', 'Python; LLM API (GitHub Models или Azure)'],
  ['Құралдары, жоспарлауы және жады бар мультиагенттік жүйе', 'Мультиагентная система с инструментами, планированием и памятью'],
  [st(6, 1, ['Агенттерге кіріспе', 'Введение в агентов'], ['AI agents', 'Agentic frameworks', 'Design principles'],
      ['1–3 сабақтағы мысалды іске қосып, агентті өзгерт', 'Запусти пример уроков 1–3 и измени агента'],
      ['Агенттің LLM-чаттан айырмасын түсіндіресің', 'Объясняешь отличие агента от LLM-чата']),
   st(10, 2, ['Құралдар және агенттік RAG', 'Инструменты и агентный RAG'], ['Tool use', 'Agentic RAG', 'Trustworthy agents'],
      ['Агентке өз функцияңды құрал ретінде қос', 'Подключи к агенту свою функцию как инструмент'],
      ['Агент құралды қашан шақыратынын логтан көресің', 'По логам видишь, когда агент вызывает инструмент']),
   st(10, 3, ['Жоспарлау және мультиагенттер', 'Планирование и мультиагенты'], ['Planning', 'Multi-agent', 'Metacognition'],
      ['Екі агенттің бір тапсырманы бөлісетін сценарийін жаса', 'Сделай сценарий, где два агента делят задачу'],
      ['Агенттердің рөлдері мен келісімі сипатталған', 'Описаны роли агентов и протокол взаимодействия']),
   st(10, 3, ['Production және протоколдар', 'Production и протоколы'], ['MCP', 'A2A', 'Context engineering', 'Memory', 'Observability'],
      ['Агентке жады мен MCP-сервер қосып, бақылауды баста', 'Добавь агенту память и MCP-сервер, включи наблюдаемость'],
      ['Агенттің әрекеттері трейсте көрінеді', 'Действия агента видны в трейсе'])]);

rm('mlabonne/llm-course', 'course',
  ['Python, сызықтық алгебра мен ықтималдық негіздері', 'Python, основы линейной алгебры и вероятностей'],
  ['Fine-tune жасалған, квантталған және RAG-пен қолданылған өз модельің', 'Своя модель после fine-tune и квантизации, используемая в RAG'],
  [st(30, 1, ['LLM Fundamentals', 'LLM Fundamentals'], ['Mathematics for ML', 'Python for ML', 'Neural networks', 'NLP'],
      ['Ноутбуктармен NumPy мен PyTorch-та кішкене нейрожелі үйрет', 'Обучи небольшую нейросеть на NumPy и PyTorch по ноутбукам'],
      ['Attention формуласын түсіндіресің', 'Объясняешь формулу attention']),
   st(40, 3, ['LLM Scientist: оқыту', 'LLM Scientist: обучение'], ['Architecture', 'Pre-training', 'Datasets', 'SFT', 'Preference alignment'],
      ['Шағын модельге SFT мен DPO жаса', 'Сделай SFT и DPO для небольшой модели'],
      ['Fine-tune-тан кейінгі сапа салыстырылды', 'Качество до и после fine-tune сравнено']),
   st(20, 3, ['Бағалау және кванттау', 'Оценка и квантизация'], ['Evaluation', 'Quantization', 'GGUF', 'GPTQ'],
      ['Модельді кванттап, бенчмаркта бағала', 'Квантизируй модель и оцени на бенчмарке'],
      ['Сапа мен жылдамдық айырмасын кестеде көрсетесің', 'Показываешь в таблице разницу качества и скорости']),
   st(30, 2, ['LLM Engineer', 'LLM Engineer'], ['Running LLMs', 'Vector storage', 'RAG', 'Agents', 'Inference optimization', 'Deployment', 'Security'],
      ['Модельді RAG-пен бірге API ретінде шығар', 'Выведи модель как API вместе с RAG'],
      ['API жүктемеге және injection-ға тексерілген', 'API проверен под нагрузкой и на injection'])]);

rm('GokuMohandas/Made-With-ML', 'course',
  ['Python, ML негіздері', 'Python, основы ML'],
  ['Тест, версиялау және CI/CD-мен production-ға шығарылған ML-жүйе', 'ML-система в production с тестами, версионированием и CI/CD'],
  [st(8, 2, ['Жобалау', 'Проектирование'], ['Product design', 'Systems design', 'Setup'],
      ['Өз ML-өніміңнің мақсаты мен метрикаларын сипатта', 'Опиши цель и метрики своего ML-продукта'],
      ['Бизнес-метрика мен ML-метрика байланысты', 'Бизнес-метрика связана с ML-метрикой']),
   st(10, 2, ['Деректер', 'Данные'], ['Data preparation', 'EDA', 'Preprocessing', 'Ray'],
      ['Деректерді тазалап, EDA жүргіз', 'Очисти данные и проведи EDA'],
      ['Деректердегі ығысу анықталған', 'Выявлены перекосы в данных']),
   st(14, 3, ['Модель', 'Модель'], ['Training', 'Tuning', 'Evaluation', 'Serving', 'MLflow'],
      ['Модельді үйретіп, баптап, сервис ретінде шығар', 'Обучи, настрой и разверни модель как сервис'],
      ['Тәжірибелер MLflow-да тіркелген', 'Эксперименты залогированы в MLflow']),
   st(12, 3, ['Тестілеу және production', 'Тестирование и production'], ['Testing', 'Versioning', 'CI/CD', 'Continual learning'],
      ['Код, дерек және модель тесттерін CI-ге қос', 'Добавь в CI тесты кода, данных и модели'],
      ['Pipeline модельді автоматты қайта үйретеді', 'Pipeline автоматически переобучает модель'])]);

rm('d2l-ai/d2l-en', 'book',
  ['Python, сызықтық алгебра, матанализ негіздері', 'Python, основы линейной алгебры и матанализа'],
  ['Кітаптағы тәсілмен нөлден жазылған және фреймворкта қайталанған модель', 'Модель, написанная с нуля по книге и повторённая на фреймворке'],
  [st(20, 1, ['Негіздер', 'Основы'], ['Preliminaries', 'Linear regression', 'Softmax', 'MLP'],
      ['Әр тарауды кодымен іске қосып, жаттығуларын орында', 'Запускай код каждой главы и выполняй упражнения'],
      ['Градиентті қолмен есептей аласың', 'Умеешь посчитать градиент вручную']),
   st(25, 2, ['CNN және RNN', 'CNN и RNN'], ['CNN', 'ResNet', 'RNN', 'LSTM', 'GRU'],
      ['ResNet пен LSTM-ді кітап кодымен үйрет', 'Обучи ResNet и LSTM по коду книги'],
      ['Архитектуралардың айырмасын түсіндіресің', 'Объясняешь различия архитектур']),
   st(20, 3, ['Attention және трансформерлер', 'Attention и трансформеры'], ['Attention', 'Transformer', 'BERT'],
      ['Трансформер блогын нөлден жаз', 'Напиши блок трансформера с нуля'],
      ['Multi-head attention-ды сызбамен түсіндіресің', 'Объясняешь multi-head attention на схеме']),
   st(20, 3, ['Оңтайландыру және қолданбалар', 'Оптимизация и приложения'], ['Optimization', 'Computational performance', 'Computer vision', 'NLP applications'],
      ['Бір қолданбалы тараудың (CV немесе NLP) жобасын жаса', 'Сделай проект одной прикладной главы (CV или NLP)'],
      ['Оңтайландырғыштардың әсері графикпен көрсетілген', 'Влияние оптимизаторов показано графиком'])]);

rm('rasbt/LLMs-from-scratch', 'book',
  ['Python, PyTorch негіздері (A қосымшасы көмектеседі)', 'Python, основы PyTorch (поможет приложение A)'],
  ['Нөлден жазылған, алдын ала үйретілген және нұсқаулыққа бейімделген шағын GPT', 'Небольшой GPT с нуля: предобученный и дообученный под инструкции'],
  [st(10, 1, ['Мәтінмен жұмыс', 'Работа с текстом'], ['Tokenization', 'BPE', 'Embeddings', 'DataLoader'],
      ['2-тараудағы токенизатор мен деректер жүктегішті жаз', 'Напиши токенизатор и загрузчик данных из главы 2'],
      ['BPE-нің жұмысын мысалмен түсіндіресің', 'Объясняешь работу BPE на примере']),
   st(12, 3, ['Attention механизмі', 'Механизм attention'], ['Self-attention', 'Causal attention', 'Multi-head attention'],
      ['3-тараудағы attention қабаттарын нөлден жаз', 'Напиши с нуля слои attention из главы 3'],
      ['Маскалаудың рөлін түсіндіресің', 'Объясняешь роль маскирования']),
   st(14, 3, ['GPT моделі және pretraining', 'Модель GPT и pretraining'], ['GPT architecture', 'LayerNorm', 'Pretraining', 'Loss'],
      ['4–5 тарау: модельді құрып, шағын корпуста үйрет', 'Главы 4–5: собери модель и обучи на небольшом корпусе'],
      ['Loss азаяды, мәтін генерацияланады', 'Loss падает, модель генерирует текст']),
   st(12, 3, ['Fine-tuning', 'Fine-tuning'], ['Classification fine-tuning', 'Instruction fine-tuning', 'LoRA'],
      ['6–7 тарау: спам классификаторы мен нұсқаулық бойынша fine-tune жаса', 'Главы 6–7: классификатор спама и fine-tune под инструкции'],
      ['Fine-tune нәтижесі бағаланған', 'Результат fine-tune оценён'])]);

rm('microsoft/Data-Science-For-Beginners', 'course',
  ['Python негіздері', 'Основы Python'],
  ['Деректерді жинаудан визуализация мен қорытындыға дейінгі толық талдау жобасы', 'Полный проект анализа: от сбора данных до визуализации и выводов'],
  [st(6, 1, ['Кіріспе', 'Введение'], ['Data Science', 'Ethics', 'Data types', 'Statistics', 'Probability'],
      ['Деректер этикасы бойынша кейс талда', 'Разбери кейс по этике данных'],
      ['Орташа мен медиананы қолдану жағдайын білесің', 'Знаешь, когда использовать среднее, а когда медиану']),
   st(8, 1, ['Деректермен жұмыс', 'Работа с данными'], ['SQL', 'NoSQL', 'Python', 'pandas', 'Data preparation'],
      ['Деректер жиынын тазалап, дайында', 'Очисти и подготовь набор данных'],
      ['Бос мәндер мен қайталанулар өңделген', 'Пропуски и дубликаты обработаны']),
   st(8, 2, ['Визуализация', 'Визуализация'], ['Quantities', 'Distributions', 'Proportions', 'Relationships', 'Matplotlib'],
      ['Бір деректер жиынына 5 түрлі график сал', 'Построй 5 типов графиков по одному набору данных'],
      ['График түрін сұраққа сай таңдайсың', 'Выбираешь тип графика под вопрос']),
   st(8, 2, ['Өмірлік цикл және бұлт', 'Жизненный цикл и облако'], ['Data lifecycle', 'Analyzing', 'Communication', 'Low code', 'Azure ML'],
      ['Талдау нәтижесін қысқа баяндама ретінде дайында', 'Подготовь результат анализа в виде короткого доклада'],
      ['Баяндамада 3 нақты қорытынды бар', 'В докладе 3 конкретных вывода'])]);

rm('karpathy/nn-zero-to-hero', 'course',
  ['Python, мектептік туынды ұғымы', 'Python, школьное понятие производной'],
  ['Видеодағы GPT-ді өз деректеріңде үйретіп, өзгертулер енгізу', 'GPT из видео, обученный на своих данных, с собственными изменениями'],
  [st(8, 1, ['micrograd', 'micrograd'], ['Backpropagation', 'Autograd', 'Neuron'],
      ['Видеомен бірге micrograd-ты нөлден жаз', 'Напиши micrograd с нуля вместе с видео'],
      ['Есептеу графы бойынша градиентті қолмен табасың', 'Находишь градиент по вычислительному графу вручную']),
   st(14, 2, ['makemore 1–3', 'makemore 1–3'], ['Bigram model', 'MLP', 'Activations', 'BatchNorm'],
      ['Атаулар генераторын биграмнан MLP-ге дейін дамыт', 'Развей генератор имён от биграм до MLP'],
      ['Активациялар статистикасын талдай аласың', 'Умеешь анализировать статистики активаций']),
   st(10, 3, ['makemore 4–5', 'makemore 4–5'], ['Manual backprop', 'WaveNet', 'PyTorch modules'],
      ['Backprop ninja жаттығуын қолмен орында', 'Выполни упражнение backprop ninja вручную'],
      ['Қолмен есептелген градиенттер PyTorch-пен сәйкес', 'Ручные градиенты совпадают с PyTorch']),
   st(12, 3, ['GPT және токенизатор', 'GPT и токенизатор'], ['Transformer', 'Self-attention', 'GPT', 'BPE tokenizer'],
      ['Шағын GPT пен BPE токенизаторын жаз', 'Напиши небольшой GPT и BPE-токенизатор'],
      ['Модель Шекспир стиліндегі мәтінді генерациялайды', 'Модель генерирует текст в стиле Шекспира'])]);

rm('fastai/fastbook', 'book',
  ['Python негіздері; GPU бар ортаның болуы (Colab/Kaggle)', 'Основы Python; доступ к GPU (Colab/Kaggle)'],
  ['Өз деректеріңдегі модель және оның веб-демосы', 'Модель на своих данных и её веб-демо'],
  [st(10, 1, ['Кіріспе және production', 'Введение и production'], ['fastai', 'Image classification', 'Deployment', 'Ethics'],
      ['1–3 тарау: суреттер классификаторын жасап, жарияла', 'Главы 1–3: сделай классификатор изображений и опубликуй'],
      ['Модельдің қателерін талдайсың', 'Разбираешь ошибки модели']),
   st(12, 2, ['MNIST және нейрожелі ішкі құрылымы', 'MNIST и устройство нейросети'], ['SGD', 'Loss functions', 'MNIST'],
      ['4-тараудағы модельді нөлден қайталап жаз', 'Повтори модель из главы 4 с нуля'],
      ['SGD қадамдарын түсіндіресің', 'Объясняешь шаги SGD']),
   st(14, 2, ['Қолданбалар', 'Приложения'], ['Multi-label', 'Collaborative filtering', 'Tabular', 'NLP'],
      ['Ұсыныс жүйесі немесе кестелік модель жаса', 'Сделай рекомендательную систему или табличную модель'],
      ['Нәтиже бастапқы деңгеймен салыстырылған', 'Результат сравнён с бейзлайном']),
   st(14, 3, ['Ішкі механизмдер', 'Внутреннее устройство'], ['RNN', 'Convolutions', 'ResNet', 'Optimizers', 'Callbacks'],
      ['Learner-ді нөлден жазатын соңғы тарауды өт', 'Пройди последнюю главу, где Learner пишется с нуля'],
      ['Өз callback-ыңды жаза аласың', 'Умеешь написать свой callback'])]);

rm('fastai/course22', 'course',
  ['Python негіздері; Kaggle немесе Colab', 'Основы Python; Kaggle или Colab'],
  ['Kaggle жарысына жіберілген және HuggingFace Spaces-те жарияланған модель', 'Модель, отправленная на соревнование Kaggle и опубликованная на HuggingFace Spaces'],
  [st(8, 1, ['1–2 сабақ: бастау және деплой', 'Уроки 1–2: старт и деплой'], ['fastai', 'Image classifier', 'Gradio', 'HuggingFace Spaces'],
      ['Классификатор жасап, Gradio демосын жарияла', 'Сделай классификатор и опубликуй демо на Gradio'],
      ['Демо сілтеме арқылы ашылады', 'Демо открывается по ссылке']),
   st(10, 2, ['3–5 сабақ: негіздер мен NLP', 'Уроки 3–5: основы и NLP'], ['Neural net foundations', 'NLP', 'Transformers', 'From-scratch model'],
      ['Kaggle-дағы NLP жарысына ноутбук жаса', 'Сделай ноутбук для NLP-соревнования на Kaggle'],
      ['Ноутбук жарыста баға алды', 'Ноутбук получил оценку в соревновании']),
   st(10, 3, ['6–8 сабақ: кестелер және CNN', 'Уроки 6–8: таблицы и CNN'], ['Random forests', 'Collaborative filtering', 'Convolutions'],
      ['Random forest пен коллаборативті сүзгілеуді салыстыр', 'Сравни random forest и коллаборативную фильтрацию'],
      ['Модель таңдауын негіздейсің', 'Обосновываешь выбор модели'])]);

rm('yandexdataschool/Practical_DL', 'course',
  ['Python, NumPy, сызықтық алгебра, ML негіздері', 'Python, NumPy, линейная алгебра, основы ML'],
  ['Курс апталарының тапсырмаларын біріктіретін өз трансформер-жобаң', 'Свой трансформер-проект, объединяющий задания недель курса'],
  [st(12, 2, ['Backprop және autodiff', 'Backprop и autodiff'], ['Backpropagation', 'Autodiff', 'PyTorch'],
      ['week01–02 тапсырмаларын орында', 'Выполни задания week01–02'],
      ['Autodiff-ті өзің іске асыра аласың', 'Можешь реализовать autodiff сам']),
   st(14, 3, ['CNN және fine-tuning', 'CNN и fine-tuning'], ['Convnets', 'Fine-tuning', 'Interpretability'],
      ['week03–05: желіні fine-tune жасап, түсіндірілуін зертте', 'week03–05: сделай fine-tune сети и исследуй интерпретируемость'],
      ['Saliency картасы модель шешімін көрсетеді', 'Карта saliency показывает решение модели']),
   st(16, 3, ['NLP және трансформерлер', 'NLP и трансформеры'], ['NLP', 'Language models', 'Transformer'],
      ['week06–08: тілдік модель мен трансформер жаса', 'week06–08: сделай языковую модель и трансформер'],
      ['Тапсырманың тесттері өтті', 'Тесты задания пройдены'])]);

rm('Yorko/mlcourse.ai', 'course',
  ['Python, pandas, статистика негіздері', 'Python, pandas, основы статистики'],
  ['Kaggle Inclass жарысындағы шешім және ол туралы мақала', 'Решение в Kaggle Inclass соревновании и статья о нём'],
  [st(12, 1, ['Деректерді талдау', 'Анализ данных'], ['pandas', 'Visualization', 'EDA'],
      ['1–2 тақырып лекциялары мен assignment-терін орында', 'Пройди лекции и assignments тем 1–2'],
      ['Assignment жауаптары тексерілді', 'Ответы assignment проверены']),
   st(16, 2, ['Классикалық модельдер', 'Классические модели'], ['Decision trees', 'kNN', 'Linear models', 'Bagging', 'Random forest'],
      ['Бір деректер жиынында 4 модельді салыстыр', 'Сравни 4 модели на одном наборе данных'],
      ['Кросс-валидацияны дұрыс қолданасың', 'Правильно применяешь кросс-валидацию']),
   st(16, 3, ['Бустинг, уақыт қатарлары, unsupervised', 'Бустинг, временные ряды, unsupervised'], ['Gradient boosting', 'Time series', 'PCA', 'Clustering'],
      ['Kaggle-дағы курс жарысына бустинг моделін жібер', 'Отправь модель бустинга в соревнование курса на Kaggle'],
      ['Бағаң бастапқы деңгейден жоғары', 'Результат выше бейзлайна'])]);

/* ===== LLM және промпт-инжиниринг / LLM и промпт-инжиниринг ===== */
rm('huggingface/course', 'course',
  ['Python; PyTorch немесе TensorFlow негіздері', 'Python; основы PyTorch или TensorFlow'],
  ['Hub-та жарияланған, өз деректеріңе fine-tune жасалған модель және оның демосы', 'Модель после fine-tune на своих данных, опубликованная на Hub, с демо'],
  [st(8, 1, ['Transformers негіздері', 'Основы Transformers'], ['pipeline', 'Tokenizers', 'Models', 'Hub'],
      ['Pipeline арқылы 3 тапсырманы (жіктеу, генерация, NER) орында', 'Выполни 3 задачи через pipeline: классификация, генерация, NER'],
      ['Токенизатордың шығуын түсіндіресің', 'Объясняешь выход токенизатора']),
   st(12, 2, ['Fine-tuning және Datasets', 'Fine-tuning и Datasets'], ['Datasets', 'Trainer', 'Fine-tuning', 'Evaluate'],
      ['Таңдалған деректер жиынында модельді fine-tune жасап, Hub-қа жүкте', 'Сделай fine-tune модели на своём наборе и загрузи на Hub'],
      ['Модель карточкасында метрикалар бар', 'В карточке модели есть метрики']),
   st(12, 3, ['Негізгі NLP тапсырмалары', 'Основные задачи NLP'], ['Token classification', 'Summarization', 'Question answering', 'Translation'],
      ['Бір тапсырма бойынша толық цикл жаса', 'Проведи полный цикл по одной задаче'],
      ['Нәтиже бастапқы модельден жақсы', 'Результат лучше исходной модели']),
   st(8, 2, ['Демо және LLM', 'Демо и LLM'], ['Gradio', 'LLM fine-tuning', 'Reasoning'],
      ['Модельге Gradio демосын жасап, Spaces-те жарияла', 'Сделай Gradio-демо модели и опубликуй в Spaces'],
      ['Демо жұмыс істеп тұр', 'Демо работает'])]);

rm('huggingface/smol-course', 'course',
  ['Python, Transformers негіздері; GPU (Colab жеткілікті)', 'Python, основы Transformers; GPU (хватит Colab)'],
  ['Синтетикалық деректерде баптап, бағаланған өз шағын модельің', 'Своя небольшая модель, дообученная на синтетических данных и оценённая'],
  [st(8, 2, ['Instruction tuning', 'Instruction tuning'], ['SFT', 'Chat templates', 'TRL'],
      ['Шағын модельге SFT жасап, нәтижесін leaderboard-қа жібер', 'Сделай SFT небольшой модели и отправь результат в leaderboard'],
      ['Модель чат-шаблонды дұрыс ұстанады', 'Модель корректно следует чат-шаблону']),
   st(6, 2, ['Бағалау', 'Оценка'], ['Benchmarks', 'Custom evaluation', 'lighteval'],
      ['Өз доменің үшін бағалау жиынын жаса', 'Собери оценочный набор для своего домена'],
      ['Модельдің әлсіз жақтары анықталды', 'Слабые места модели выявлены']),
   st(8, 3, ['Preference alignment және RL', 'Preference alignment и RL'], ['DPO', 'ORPO', 'Reinforcement learning'],
      ['DPO арқылы модельді сәйкестендір', 'Выровняй модель через DPO'],
      ['Alignment-тен кейінгі жауаптар жақсарды', 'Ответы после alignment стали лучше']),
   st(8, 3, ['VLM және синтетикалық деректер', 'VLM и синтетические данные'], ['Vision Language Models', 'Synthetic data'],
      ['Өз тапсырмаң үшін синтетикалық деректер жиынын генерацияла', 'Сгенерируй синтетический набор данных для своей задачи'],
      ['Деректер сапасы қолмен тексерілді', 'Качество данных проверено вручную'])]);

rm('DataTalksClub/llm-zoomcamp', 'course',
  ['Python, Docker, командалық жол', 'Python, Docker, командная строка'],
  ['Курстың capstone жобасы: бағаланатын және мониторингі бар RAG-қосымша', 'Capstone-проект курса: RAG-приложение с оценкой и мониторингом'],
  [st(8, 1, ['Agentic RAG', 'Agentic RAG'], ['LLM', 'RAG', 'Agents', 'Function calling'],
      ['1-модульдің үй тапсырмасын орында', 'Выполни домашнее задание модуля 1'],
      ['RAG қадамдарын сызбамен түсіндіресің', 'Объясняешь шаги RAG на схеме']),
   st(8, 2, ['Vector search және оркестрация', 'Vector search и оркестрация'], ['Vector search', 'Embeddings', 'Orchestration', 'Data ingestion'],
      ['Құжаттарды индекстеп, іздеуді бапта', 'Проиндексируй документы и настрой поиск'],
      ['Іздеу сапасы hit rate-пен өлшенді', 'Качество поиска измерено hit rate']),
   st(8, 2, ['Бағалау және мониторинг', 'Оценка и мониторинг'], ['Evaluation', 'LLM-as-a-judge', 'Monitoring'],
      ['Жауаптарды бағалап, дашборд құр', 'Оцени ответы и построй дашборд'],
      ['Метрикалар дашбордта жаңарады', 'Метрики обновляются на дашборде']),
   st(16, 3, ['Best practices және жоба', 'Best practices и проект'], ['Hybrid search', 'Reranking', 'End-to-end project'],
      ['Capstone жобасын критерийлер бойынша аяқта', 'Заверши capstone-проект по критериям курса'],
      ['Жоба peer review-дан өтті', 'Проект прошёл peer review'])]);

rm('anthropics/courses', 'course',
  ['Python; Anthropic API кілті', 'Python; ключ Anthropic API'],
  ['Құралдарды шақыратын және бағалау жиынымен тексерілген Claude қосымшасы', 'Приложение на Claude, вызывающее инструменты и проверенное набором оценок'],
  [st(6, 1, ['API негіздері', 'Основы API'], ['Anthropic API', 'Messages', 'Parameters', 'Streaming'],
      ['API fundamentals курсының ноутбуктарын орында', 'Выполни ноутбуки курса API fundamentals'],
      ['Параметрлердің жауапқа әсерін түсіндіресің', 'Объясняешь влияние параметров на ответ']),
   st(8, 1, ['Промпт-инжиниринг', 'Промпт-инжиниринг'], ['Prompt engineering', 'Role prompting', 'XML tags', 'Examples'],
      ['Интерактивті туториалдың жаттығуларын өт', 'Пройди упражнения интерактивного туториала'],
      ['Барлық жаттығудың тексерісі өтті', 'Проверки всех упражнений пройдены']),
   st(6, 2, ['Нақты промпттар және бағалау', 'Реальные промпты и оценка'], ['Real world prompting', 'Prompt evaluations'],
      ['Өз тапсырмаң үшін бағалау жиынын жаса', 'Собери набор оценок для своей задачи'],
      ['Промпттың сапасы сандармен өлшенді', 'Качество промпта измерено числами']),
   st(6, 2, ['Tool use', 'Tool use'], ['Tool use', 'JSON schema', 'Agents'],
      ['Claude-қа өз функцияңды құрал ретінде қос', 'Подключи свою функцию к Claude как инструмент'],
      ['Модель құралды дұрыс шақырады', 'Модель корректно вызывает инструмент'])]);

rm('anthropics/prompt-eng-interactive-tutorial', 'course',
  ['Python; Anthropic API кілті немесе Amazon Bedrock', 'Python; ключ Anthropic API или Amazon Bedrock'],
  ['Нақты тапсырмаға арналған, бағалаумен жетілдірілген күрделі промпт', 'Сложный промпт для реальной задачи, улучшенный по результатам оценок'],
  [st(3, 1, ['Beginner', 'Beginner'], ['Prompt structure', 'Being clear and direct', 'Role prompting'],
      ['1–3 тараудың жаттығуларын орында', 'Выполни упражнения глав 1–3'],
      ['Әр жаттығуда автотексеріс өтті', 'Автопроверка пройдена в каждом упражнении']),
   st(4, 2, ['Intermediate', 'Intermediate'], ['Separating data', 'Output formatting', 'Thinking step by step', 'Examples'],
      ['4–7 тарауды өтіп, деректерді XML тегтерімен бөл', 'Пройди главы 4–7 и отделяй данные XML-тегами'],
      ['Жауап форматы тұрақты', 'Формат ответа стабилен']),
   st(4, 3, ['Advanced', 'Advanced'], ['Avoiding hallucinations', 'Complex prompts', 'Prompt chaining', 'Tool use'],
      ['8–9 тарау мен қосымша бөлімдердегі күрделі промпттарды жаса', 'Сделай сложные промпты глав 8–9 и приложений'],
      ['Галлюцинацияны азайту тәсілдерін қолданасың', 'Применяешь приёмы снижения галлюцинаций'])]);

rm('dair-ai/Prompt-Engineering-Guide', 'reference',
  ['LLM-мен жұмыс тәжірибесі', 'Опыт работы с LLM'],
  ['Бір тапсырмаға әр техниканың нәтижесі салыстырылған тәжірибе есебі', 'Отчёт-эксперимент со сравнением техник на одной задаче'],
  [st(3, 1, ['Кіріспе', 'Введение'], ['LLM settings', 'Prompt elements', 'General tips'],
      ['Бір промптты temperature мен top_p өзгертіп сына', 'Испытай один промпт с разными temperature и top_p'],
      ['Параметрлердің әсерін түсіндіресің', 'Объясняешь влияние параметров']),
   st(5, 2, ['Техникалар', 'Техники'], ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'Self-consistency', 'ReAct'],
      ['5 техниканы бір есепте салыстыр', 'Сравни 5 техник на одной задаче'],
      ['Нәтижелер кестеде', 'Результаты сведены в таблицу']),
   st(5, 3, ['Қолданбалар мен тәуекелдер', 'Приложения и риски'], ['RAG', 'Agents', 'Adversarial prompting', 'Factuality', 'Biases'],
      ['Өз промптыңды prompt injection-ға тексер', 'Проверь свой промпт на prompt injection'],
      ['Табылған осалдықтар жабылған', 'Найденные уязвимости закрыты'])]);

rm('openai/openai-cookbook', 'reference',
  ['Python; OpenAI API кілті', 'Python; ключ OpenAI API'],
  ['Cookbook мысалдарынан жиналған өз қосымшаң: embeddings-пен іздеу және structured outputs', 'Своё приложение из примеров Cookbook: поиск по embeddings и structured outputs'],
  [st(4, 1, ['API негіздері', 'Основы API'], ['Chat Completions', 'Responses API', 'Tokens', 'Rate limits'],
      ['Бастапқы мысалдарды іске қосып, токенді санауды үйрен', 'Запусти базовые примеры и научись считать токены'],
      ['Сұраудың құнын алдын ала есептейсің', 'Заранее считаешь стоимость запроса']),
   st(6, 2, ['Embeddings және іздеу', 'Embeddings и поиск'], ['Embeddings', 'Semantic search', 'Vector databases'],
      ['Өз құжаттарыңа семантикалық іздеу жаса', 'Сделай семантический поиск по своим документам'],
      ['Іздеу нәтижелері релевантты', 'Результаты поиска релевантны']),
   st(6, 2, ['Function calling және structured outputs', 'Function calling и structured outputs'], ['Function calling', 'Structured outputs', 'JSON schema'],
      ['Жауапты JSON схемасы бойынша қайтаратын функция жаз', 'Напиши функцию, возвращающую ответ строго по JSON-схеме'],
      ['Жауап схема валидациясынан өтеді', 'Ответ проходит валидацию схемы'])]);

/* ===== AI-агенттер және автоматтандыру / AI-агенты и автоматизация ===== */
rm('microsoft/mcp-for-beginners', 'course',
  ['Бір тіл (Python, TypeScript, C#, Java т.б.); клиент-сервер ұғымы', 'Один язык (Python, TypeScript, C#, Java и др.); понятие клиент-сервер'],
  ['Өз MCP-серверің: құралдары, қауіпсіздігі және тесттері бар, ЖИ-клиентке қосылған', 'Свой MCP-сервер с инструментами, защитой и тестами, подключённый к ИИ-клиенту'],
  [st(6, 1, ['Негізгі ұғымдар (0–1 модуль)', 'Основные понятия (модули 0–1)'], ['MCP', 'Hosts', 'Clients', 'Servers', 'Tools', 'Resources', 'Prompts'],
      ['MCP архитектурасының сызбасын өз сөзіңмен сал', 'Нарисуй схему архитектуры MCP своими словами'],
      ['Tool, resource және prompt айырмасын түсіндіресің', 'Объясняешь разницу tool, resource и prompt']),
   st(6, 2, ['Қауіпсіздік (2-модуль)', 'Безопасность (модуль 2)'], ['Authorization', 'Prompt injection', 'Tool poisoning'],
      ['Сервердің қауіп моделін жаз', 'Составь модель угроз для сервера'],
      ['Әр қауіпке қорғаныс шарасы бар', 'Для каждой угрозы есть мера защиты']),
   st(10, 2, ['Бірінші сервер (3–4 модуль)', 'Первый сервер (модули 3–4)'], ['MCP SDK', 'stdio', 'HTTP streaming', 'Testing'],
      ['Таңдалған тілде құралдары бар сервер жасап, Inspector-мен тексер', 'Сделай сервер с инструментами на своём языке и проверь в Inspector'],
      ['Клиент барлық құралды көреді', 'Клиент видит все инструменты']),
   st(12, 3, ['Advanced және тәжірибе (5–11 модуль)', 'Advanced и практика (модули 5–11)'], ['Multi-modal', 'Scaling', 'Best practices', 'Case studies', 'Hands-on labs'],
      ['Hands-on labs бойынша серверді масштабта және кейс талда', 'По hands-on labs масштабируй сервер и разбери кейс'],
      ['Сервер production тәжірибелерін сақтайды', 'Сервер следует практикам production'])]);

rm('huggingface/agents-course', 'course',
  ['Python; LLM туралы жалпы түсінік', 'Python; общее понимание LLM'],
  ['Курстың финалдық тапсырмасы: бағаланатын агент және сертификат', 'Финальное задание курса: агент, проходящий оценку, и сертификат'],
  [st(6, 1, ['Агенттерге кіріспе', 'Введение в агентов'], ['Agents', 'Thought-Action-Observation', 'Tools'],
      ['1-юниттегі алғашқы агентті іске қос', 'Запусти первого агента из юнита 1'],
      ['Агенттің циклын түсіндіресің', 'Объясняешь цикл агента']),
   st(12, 2, ['Фреймворктар', 'Фреймворки'], ['smolagents', 'LlamaIndex', 'LangGraph'],
      ['Бір тапсырманы үш фреймворкта шешіп, салыстыр', 'Реши одну задачу на трёх фреймворках и сравни'],
      ['Фреймворк таңдауын негіздейсің', 'Обосновываешь выбор фреймворка']),
   st(8, 3, ['Агенттік RAG және бақылау', 'Агентный RAG и наблюдаемость'], ['Agentic RAG', 'Observability', 'Evaluation', 'Function calling'],
      ['Агенттік RAG жасап, трейстерін тексер', 'Сделай агентный RAG и проверь трейсы'],
      ['Агент бағалау жиынынан өтеді', 'Агент проходит набор оценок']),
   st(8, 3, ['Финалдық жоба', 'Финальный проект'], ['GAIA benchmark', 'Final assignment'],
      ['Финалдық бағалау тапсырмасын орында', 'Выполни финальное оценочное задание'],
      ['Сертификат шегінен өттің', 'Порог сертификата пройден'])]);

rm('huggingface/mcp-course', 'course',
  ['Python; LLM мен API туралы түсінік', 'Python; понимание LLM и API'],
  ['Gradio-да жасалған, ЖИ-клиентке қосылған өз MCP-қосымшаң', 'Своё MCP-приложение на Gradio, подключённое к ИИ-клиенту'],
  [st(4, 1, ['MCP негіздері', 'Основы MCP'], ['MCP architecture', 'Hosts', 'Clients', 'Servers'],
      ['units/ ішіндегі кіріспе юниттерін өтіп, квизді тапсыр', 'Пройди вводные юниты в units/ и сдай квиз'],
      ['Квиз өтті', 'Квиз пройден']),
   st(8, 2, ['End-to-end қосымша', 'End-to-end приложение'], ['Gradio', 'MCP server', 'MCP client', 'Python SDK'],
      ['Gradio-да MCP-сервер және оған клиент жаса', 'Сделай MCP-сервер на Gradio и клиент к нему'],
      ['Клиент сервердің құралын шақырады', 'Клиент вызывает инструмент сервера']),
   st(8, 3, ['Advanced және жобалар', 'Advanced и проекты'], ['Advanced MCP', 'Integrations', 'Projects'],
      ['projects/ бумасындағы жобалардың бірін өзгертіп, жарияла', 'Доработай один из проектов из папки projects/ и опубликуй'],
      ['Жоба HuggingFace Spaces-те жұмыс істейді', 'Проект работает на HuggingFace Spaces'])]);

rm('langchain-ai/langchain-academy', 'course',
  ['Python; OpenAI, LangSmith және Tavily кілттері', 'Python; ключи OpenAI, LangSmith и Tavily'],
  ['Ұзақ мерзімді жадысы бар, адам бақылайтын және deploy жасалған LangGraph-ассистент', 'LangGraph-ассистент с долгосрочной памятью, контролем человека и деплоем'],
  [st(6, 1, ['Module 0–1: кіріспе', 'Module 0–1: введение'], ['LangGraph', 'Chains', 'Router', 'Agent', 'Memory'],
      ['Ортаны бапта және router мен агенттің ноутбуктарын өт', 'Настрой окружение и пройди ноутбуки router и agent'],
      ['Граф түйіндері мен шеттерін түсіндіресің', 'Объясняешь узлы и рёбра графа']),
   st(6, 2, ['Module 2: күй мен жады', 'Module 2: состояние и память'], ['State schema', 'Reducers', 'Message trimming', 'Summarization'],
      ['Қорытынды жасайтын чат-ботқа сыртқы жады қос', 'Добавь внешнюю память чат-боту с суммаризацией'],
      ['Ұзақ диалогта контекст сақталады', 'В длинном диалоге контекст сохраняется']),
   st(6, 2, ['Module 3: адам бақылауы', 'Module 3: человек в контуре'], ['Streaming', 'Breakpoints', 'Editing state', 'Time travel'],
      ['Агентке растау breakpoint-ын қос', 'Добавь агенту breakpoint подтверждения'],
      ['Күйді тоқтатып, өзгертіп, жалғастырасың', 'Останавливаешь, меняешь и продолжаешь состояние']),
   st(10, 3, ['Module 4–6: ассистент, жады, deploy', 'Module 4–6: ассистент, память, деплой'], ['Sub-graphs', 'Map-reduce', 'Long-term memory', 'Deployment'],
      ['Research assistant жасап, оны deploy жаса', 'Сделай research assistant и разверни его'],
      ['Ассистент LangSmith-те трейсталады', 'Ассистент трассируется в LangSmith'])]);

rm('NirDiamant/GenAI_Agents', 'collection',
  ['Python, LLM API', 'Python, LLM API'],
  ['Туториалдардың бірі негізінде өз бизнес-тапсырмаңа агент', 'Агент для своей бизнес-задачи на основе одного из туториалов'],
  [st(6, 1, ['Қарапайым агенттер', 'Простые агенты'], ['Conversational agent', 'LangGraph', 'Memory'],
      ['Бастапқы деңгейдегі 2 туториалды өтіп, кодты түсіндір', 'Пройди 2 туториала начального уровня и прокомментируй код'],
      ['Агенттің күйі қалай сақталатынын білесің', 'Знаешь, как хранится состояние агента']),
   st(8, 2, ['Арнайы агенттер', 'Специализированные агенты'], ['Tools', 'Research agent', 'Customer support', 'Data analysis'],
      ['Өз саласыңа жақын 2 агентті іске қосып, бейімде', 'Запусти и адаптируй 2 агента из близкой тебе сферы'],
      ['Агент нақты дереккөзбен жұмыс істейді', 'Агент работает с реальным источником данных']),
   st(10, 3, ['Мультиагенттік жүйелер', 'Мультиагентные системы'], ['Multi-agent', 'Orchestration', 'Evaluation'],
      ['Мультиагенттік туториалды өз тапсырмаңа көшір', 'Перенеси мультиагентный туториал на свою задачу'],
      ['Агенттер арасындағы рөлдер сипатталған', 'Роли между агентами описаны'])]);

rm('NirDiamant/RAG_Techniques', 'collection',
  ['Python, embeddings пен векторлық іздеу туралы түсінік', 'Python, понимание embeddings и векторного поиска'],
  ['Бағалау арқылы таңдалған техникалары бар өз RAG-жүйең', 'Своя RAG-система с техниками, выбранными по результатам оценки'],
  [st(6, 1, ['Негізгі RAG', 'Базовый RAG'], ['Simple RAG', 'Chunking', 'CSV RAG'],
      ['Қарапайым RAG-ты өз құжаттарыңда іске қос', 'Запусти простой RAG на своих документах'],
      ['Chunk өлшемінің әсерін өлшедің', 'Измерено влияние размера chunk']),
   st(8, 2, ['Сұрау мен контекстті жақсарту', 'Улучшение запроса и контекста'], ['Query transformation', 'HyDE', 'Reranking', 'Contextual compression'],
      ['3 техниканы бір сұрақтар жиынында салыстыр', 'Сравни 3 техники на одном наборе вопросов'],
      ['Ең жақсы техника метрикамен таңдалды', 'Лучшая техника выбрана по метрике']),
   st(8, 3, ['Advanced RAG', 'Advanced RAG'], ['Graph RAG', 'Self-RAG', 'Corrective RAG', 'Evaluation'],
      ['Graph RAG немесе Self-RAG-ты жүйеңе қос', 'Добавь в систему Graph RAG или Self-RAG'],
      ['Бағалау жиынында сапа өсті', 'Качество на оценочном наборе выросло'])]);

rm('Shubhamsaboo/awesome-llm-apps', 'collection',
  ['Python; кем дегенде бір LLM API кілті немесе жергілікті модель', 'Python; хотя бы один ключ LLM API или локальная модель'],
  ['Жинақтағы қосымшаның бірін өз тапсырмаңа бейімдеп, жариялау', 'Адаптация одного приложения из коллекции под свою задачу и публикация'],
  [st(4, 1, ['Starter AI agents', 'Starter AI agents'], ['AI agents', 'Streamlit', 'API keys'],
      ['Starter бөлімінен 2 агентті іске қос', 'Запусти 2 агента из раздела Starter'],
      ['Агент жергілікті жұмыс істейді', 'Агент работает локально']),
   st(8, 2, ['RAG және жадысы бар қосымшалар', 'Приложения с RAG и памятью'], ['RAG', 'Memory', 'Chat with X'],
      ['Өз құжаттарыңмен «Chat with» қосымшасын жаса', 'Сделай приложение «Chat with» по своим документам'],
      ['Жауаптар құжатқа сілтейді', 'Ответы ссылаются на документ']),
   st(10, 3, ['Мультиагенттік командалар', 'Мультиагентные команды'], ['Multi-agent teams', 'MCP', 'Voice agents'],
      ['Мультиагенттік командалардың бірін өзгертіп, жарияла', 'Доработай одну из мультиагентных команд и опубликуй'],
      ['Қосымша сілтеме арқылы ашылады', 'Приложение открывается по ссылке'])]);

rm('patchy631/ai-engineering-hub', 'collection',
  ['Python; LLM мен RAG туралы түсінік', 'Python; понимание LLM и RAG'],
  ['Advanced деңгейіндегі жобаны өз деректеріңе бейімдеу', 'Адаптация проекта уровня Advanced под свои данные'],
  [st(6, 1, ['Beginner projects', 'Beginner projects'], ['OCR', 'Local LLM', 'Simple RAG'],
      ['Бастапқы деңгейден 2 жобаны іске қос', 'Запусти 2 проекта начального уровня'],
      ['Жобалар жергілікті іске қосылады', 'Проекты запускаются локально']),
   st(8, 2, ['Intermediate projects', 'Intermediate projects'], ['Agentic RAG', 'MCP', 'Multimodal'],
      ['Агенттік RAG немесе MCP жобасын бейімде', 'Адаптируй проект агентного RAG или MCP'],
      ['Бейімделген нұсқа өз деректеріңде жұмыс істейді', 'Адаптированная версия работает на твоих данных']),
   st(10, 3, ['Advanced projects', 'Advanced projects'], ['Fine-tuning', 'Reasoning models', 'Evaluation'],
      ['Fine-tuning немесе reasoning жобасын қайталап, нәтижесін бағала', 'Повтори проект fine-tuning или reasoning и оцени результат'],
      ['Бағалау нәтижелері README-де', 'Результаты оценки в README'])]);

rm('e2b-dev/awesome-ai-agents', 'reference',
  ['AI-агенттер туралы жалпы түсінік', 'Общее понимание AI-агентов'],
  ['Агент фреймворктарын салыстыратын және біреуінде прототип жасалған шолу', 'Обзор-сравнение агентных фреймворков и прототип на одном из них'],
  [st(3, 1, ['Санаттармен танысу', 'Знакомство с категориями'], ['Open-source agents', 'Closed-source agents', 'Categories'],
      ['Каталогтан 10 агентті санаттары бойынша кестеге жаз', 'Занеси 10 агентов из каталога в таблицу по категориям'],
      ['Агент түрлерінің айырмасын түсіндіресің', 'Объясняешь разницу типов агентов']),
   st(6, 2, ['Ашық агенттерді сынау', 'Испытание open-source агентов'], ['Coding agents', 'Research agents', 'Frameworks'],
      ['Екі ашық агентті іске қосып, бір тапсырмада салыстыр', 'Запусти два open-source агента и сравни на одной задаче'],
      ['Салыстыру критерийлері жазылған', 'Критерии сравнения записаны']),
   st(8, 3, ['Прототип', 'Прототип'], ['Agent framework', 'Sandboxing', 'Evaluation'],
      ['Таңдалған фреймворкта өз агентіңнің прототипін жаса', 'Сделай прототип своего агента на выбранном фреймворке'],
      ['Агент оқшауланған ортада код орындайды', 'Агент выполняет код в изолированной среде'])]);

rm('n8n-io/self-hosted-ai-starter-kit', 'tool',
  ['Docker және Docker Compose', 'Docker и Docker Compose'],
  ['Жергілікті модельмен жұмыс істейтін өз автоматтандыру ағыны (workflow)', 'Собственный workflow автоматизации с локальной моделью'],
  [st(3, 1, ['Орнату', 'Установка'], ['Docker Compose', 'n8n', 'Ollama', 'Qdrant', 'PostgreSQL'],
      ['README бойынша жиынды Docker Compose-пен іске қос', 'Запусти набор через Docker Compose по README'],
      ['n8n интерфейсі мен Ollama жұмыс істейді', 'Работают интерфейс n8n и Ollama']),
   st(4, 2, ['Бірінші AI workflow', 'Первый AI workflow'], ['AI Agent node', 'Local LLM', 'Chat trigger'],
      ['Жиындағы демо-workflow-ды ашып, өз промптыңмен өзгерт', 'Открой демо-workflow из набора и измени его под свой промпт'],
      ['Workflow жергілікті модельмен жауап береді', 'Workflow отвечает через локальную модель']),
   st(6, 3, ['RAG және интеграциялар', 'RAG и интеграции'], ['Qdrant', 'Embeddings', 'Webhooks', 'Integrations'],
      ['Qdrant-қа құжаттар жүктеп, RAG workflow құрастыр', 'Загрузи документы в Qdrant и собери RAG workflow'],
      ['Жауаптар құжаттарға негізделген', 'Ответы основаны на документах'])],
  ['Бұл оқу курсы емес, бастапқы шаблон; README-де production үшін жарамсыз екені айтылған', 'Это не курс, а стартовый шаблон; в README сказано, что он не предназначен для production']);

rm('enescingoz/awesome-n8n-templates', 'collection',
  ['n8n орнатылған (бұлтта немесе өз серверіңде)', 'Установленный n8n (в облаке или на своём сервере)'],
  ['Бірнеше шаблонды біріктіріп, өз жұмыс процесіңді автоматтандыру', 'Автоматизация своего рабочего процесса через объединение нескольких шаблонов'],
  [st(3, 1, ['Шаблонды импорттау', 'Импорт шаблона'], ['n8n', 'JSON templates', 'Credentials'],
      ['Gmail немесе Telegram санатынан бір шаблонды импортта', 'Импортируй один шаблон из категории Gmail или Telegram'],
      ['Шаблон өз аккаунттарыңмен жұмыс істейді', 'Шаблон работает с твоими аккаунтами']),
   st(5, 2, ['Шаблонды бейімдеу', 'Адаптация шаблона'], ['Telegram bots', 'Google Sheets', 'Webhooks'],
      ['Telegram-бот пен Google Sheets шаблондарын өз тапсырмаңа бейімде', 'Адаптируй шаблоны Telegram-бота и Google Sheets под свою задачу'],
      ['Бот деректерді кестеге жазады', 'Бот записывает данные в таблицу']),
   st(6, 3, ['AI workflow', 'AI workflow'], ['AI Research', 'RAG', 'PDF processing'],
      ['AI және PDF санатынан шаблондарды біріктір', 'Объедини шаблоны из категорий AI и PDF'],
      ['Қателер өңделеді және логталады', 'Ошибки обрабатываются и логируются'])]);

/* ===== Киберқауіпсіздік / Кибербезопасность ===== */
rm('swisskyrepo/PayloadsAllTheThings', 'reference',
  ['HTTP, веб-қосымшалардың жұмысы, Linux негіздері; тек өз зертханаңда немесе рұқсатпен сынау', 'HTTP, устройство веб-приложений, основы Linux; тестировать только в своей лаборатории или с разрешением'],
  ['Оқу стендіндегі осалдықтардың табылуы мен түзетілуі туралы есеп', 'Отчёт о найденных и исправленных уязвимостях учебного стенда'],
  [st(4, 1, ['Зертхана мен әдістеме', 'Лаборатория и методика'], ['Methodology', 'Burp Suite', 'Lab setup'],
      ['WebGoat немесе DVWA-ны жергілікті іске қос', 'Запусти локально WebGoat или DVWA'],
      ['Тек оқшауланған ортада сынайсың', 'Тестируешь только в изолированной среде']),
   st(10, 2, ['Инъекциялар', 'Инъекции'], ['SQL Injection', 'Command Injection', 'XSS Injection', 'SSTI'],
      ['Стендте әр инъекция түрін тауып, кодтағы себебін көрсет', 'Найди на стенде каждый тип инъекции и покажи причину в коде'],
      ['Әр осалдыққа түзету ұсынылды', 'Для каждой уязвимости предложено исправление']),
   st(10, 3, ['Логика және сервер жағы', 'Логика и серверная сторона'], ['SSRF', 'File Inclusion', 'Insecure Deserialization', 'JWT', 'Directory Traversal'],
      ['3 тақырыптың бөлімін оқып, стендте қайтала', 'Изучи разделы 3 тем и воспроизведи на стенде'],
      ['Әр шабуылдың алдын алу жолын түсіндіресің', 'Объясняешь, как предотвратить каждую атаку'])]);

rm('OWASP/Top10', 'reference',
  ['Веб-қосымшалардың жұмысы, HTTP', 'Устройство веб-приложений, HTTP'],
  ['Өз жобаңның OWASP Top 10 бойынша аудиті және түзетулер жоспары', 'Аудит своего проекта по OWASP Top 10 и план исправлений'],
  [st(4, 1, ['Тәуекел санаттары', 'Категории рисков'], ['Broken Access Control', 'Cryptographic Failures', 'Injection', 'Insecure Design'],
      ['Ағымдағы басылымның әр санатын оқып, бір мысал жаз', 'Прочитай каждую категорию актуальной редакции и запиши по примеру'],
      ['10 санатты өз сөзіңмен атайсың', 'Называешь 10 категорий своими словами']),
   st(5, 2, ['Конфигурация және тәуелділіктер', 'Конфигурация и зависимости'], ['Security Misconfiguration', 'Vulnerable Components', 'Supply chain'],
      ['Жобаңның тәуелділіктерін npm audit/pip-audit-пен тексер', 'Проверь зависимости проекта через npm audit/pip-audit'],
      ['Critical осалдықтар жабылды', 'Критические уязвимости закрыты']),
   st(5, 2, ['Аутентификация, тұтастық, логтау', 'Аутентификация, целостность, логирование'], ['Authentication Failures', 'Integrity Failures', 'Logging and Monitoring', 'SSRF'],
      ['Жобаңның кіру жүйесін тізім бойынша тексер', 'Проверь систему входа своего проекта по списку'],
      ['Аудит есебі жазылды', 'Отчёт об аудите написан'])],
  ['Бастапқы сілтеме ескі репозиторийге апаратын; ол README-де ресми үйі OWASP/Top10 екені айтылған', 'Исходная ссылка вела на старый репозиторий; в его README официальным домом назван OWASP/Top10']);

rm('WebGoat/WebGoat', 'practice',
  ['Java немесе Docker орнатылған; HTTP негіздері', 'Установленные Java или Docker; основы HTTP'],
  ['Барлық бөлімнің сабақтарын өтіп, әр осалдыққа түзету жазу', 'Пройти уроки всех разделов и описать исправление каждой уязвимости'],
  [st(3, 1, ['Іске қосу және кіріспе', 'Запуск и введение'], ['Docker', 'WebWolf', 'HTTP basics', 'Developer tools'],
      ['WebGoat пен WebWolf-ты Docker-де іске қосып, кіріспе сабақтарды өт', 'Запусти WebGoat и WebWolf в Docker и пройди вводные уроки'],
      ['Сұрауларды прокси арқылы ұстап, өзгертесің', 'Перехватываешь и меняешь запросы через прокси']),
   st(10, 2, ['Инъекциялар мен XSS', 'Инъекции и XSS'], ['SQL Injection', 'XSS', 'Path traversal'],
      ['Injection және XSS сабақтарын түгел өт', 'Пройди все уроки Injection и XSS'],
      ['Әр сабақтың жасыл белгісі бар', 'У каждого урока зелёная отметка']),
   st(10, 3, ['Қатынас пен криптография', 'Доступ и криптография'], ['Broken Access Control', 'JWT', 'Cryptography', 'Insecure deserialization'],
      ['JWT мен қатынасты бақылау сабақтарын орында', 'Выполни уроки по JWT и контролю доступа'],
      ['Әр осалдықтың кодтағы түзетуін жаза аласың', 'Можешь написать исправление каждой уязвимости в коде'])],
  ['Бастапқы OWASP/WebGoat репозиторийі көшірілген; README өзі WebGoat/WebGoat-қа сілтейді', 'Исходный репозиторий OWASP/WebGoat перенесён; его README сам указывает на WebGoat/WebGoat']);

rm('OWASP/NodeGoat', 'practice',
  ['Node.js, Express негіздері; Docker', 'Основы Node.js и Express; Docker'],
  ['NodeGoat-тағы Top 10 осалдықтарының барлығына түзетілген нұсқа', 'Исправленная версия NodeGoat со всеми закрытыми уязвимостями Top 10'],
  [st(2, 1, ['Іске қосу', 'Запуск'], ['Docker Compose', 'MongoDB', 'Express'],
      ['NodeGoat-ты docker-compose арқылы іске қос', 'Запусти NodeGoat через docker-compose'],
      ['Қосымша жергілікті ашылады', 'Приложение открывается локально']),
   st(8, 2, ['«Know it!»: осалдықтарды табу', '«Know it!»: поиск уязвимостей'], ['Injection', 'Broken Auth', 'XSS', 'IDOR', 'CSRF'],
      ['Нұсқаулықтағы әр осалдықты қосымшада қайтала', 'Воспроизведи каждую уязвимость из руководства в приложении'],
      ['Әр шабуылдың қадамдары жазылған', 'Шаги каждой атаки записаны']),
   st(8, 3, ['«Do it!»: түзету', '«Do it!»: исправление'], ['Input validation', 'helmet', 'Session security', 'Dependency audit'],
      ['Кодты түзетіп, шабуылдардың енді өтпейтінін тексер', 'Исправь код и проверь, что атаки больше не проходят'],
      ['Барлық шабуыл бұғатталған', 'Все атаки заблокированы'])]);

rm('enaqx/awesome-pentest', 'reference',
  ['Linux, желілер; тек рұқсаты бар нысандарда сынау', 'Linux, сети; тестировать только с разрешением'],
  ['Оқу зертханасында толық пентест циклі және есеп', 'Полный цикл пентеста в учебной лаборатории и отчёт'],
  [st(6, 1, ['Зертхана және ОЖ', 'Лаборатория и ОС'], ['Kali Linux', 'Virtual machines', 'Vulnerable VMs', 'CTF'],
      ['«Penetration Testing Distributions» бөлімінен ОЖ орнатып, осал VM көтер', 'Поставь ОС из «Penetration Testing Distributions» и подними уязвимую VM'],
      ['Зертхана интернеттен оқшауланған', 'Лаборатория изолирована от интернета']),
   st(10, 2, ['Барлау және сканерлеу', 'Разведка и сканирование'], ['Nmap', 'OSINT', 'Network tools', 'Web scanners'],
      ['Оқу VM-ін сканерлеп, сервистерді тізімде', 'Просканируй учебную VM и перечисли сервисы'],
      ['Әр порттың сервисі мен нұсқасы анықталды', 'Для каждого порта определены сервис и версия']),
   st(12, 3, ['Эксплуатация және есеп', 'Эксплуатация и отчёт'], ['Exploit development', 'Metasploit', 'Privilege escalation', 'Reporting'],
      ['VM-де бір осалдықты эксплуатациялап, артықшылықты көтер', 'Проэксплуатируй уязвимость на VM и повысь привилегии'],
      ['Есепте әсер мен түзету ұсыныстары бар', 'В отчёте есть влияние и рекомендации'])]);

rm('trimstray/the-book-of-secret-knowledge', 'reference',
  ['Linux пен командалық жол негіздері', 'Основы Linux и командной строки'],
  ['Кітаптағы құралдардан жиналған өз сервер-әкімшілік шпаргалкаң', 'Своя шпаргалка администратора сервера из инструментов книги'],
  [st(4, 1, ['CLI құралдары', 'Инструменты CLI'], ['Shells', 'Managers', 'Text editors', 'Network tools'],
      ['CLI Tools бөлімінен 10 құралды сынап көр', 'Опробуй 10 инструментов из раздела CLI Tools'],
      ['Әр құралға бір пайдалы мысал жаздың', 'Для каждого инструмента записан полезный пример']),
   st(5, 2, ['Желі және сервер', 'Сеть и сервер'], ['SSH', 'TLS', 'DNS', 'Web servers', 'One-liners'],
      ['Тестілік серверге SSH пен TLS-ті бапта', 'Настрой SSH и TLS на тестовом сервере'],
      ['TLS тексерісі A бағасын береді', 'Проверка TLS даёт оценку A']),
   st(5, 3, ['Қауіпсіздік және хакинг ресурстары', 'Безопасность и hacking-ресурсы'], ['Hardening', 'Pentesting', 'CTF platforms'],
      ['Серверді чек-лист бойынша қатайт', 'Ужесточи настройки сервера по чек-листу'],
      ['Ашық порттар мен сервистер азайды', 'Открытых портов и сервисов стало меньше'])]);

rm('brootware/awesome-cyber-security-university', 'collection',
  ['Компьютерлік сауаттылық; желі туралы жалпы түсінік', 'Компьютерная грамотность; общее понимание сетей'],
  ['Red Team немесе Blue Team жолының соңғы деңгейін аяқтап, CTF-те өнер көрсету', 'Завершить последний уровень пути Red Team или Blue Team и выступить на CTF'],
  [st(15, 1, ['Pre-Security және Level 1', 'Pre-Security и Level 1'], ['Networking', 'Linux', 'Web fundamentals', 'Windows'],
      ['Introduction and Pre-Security бөлімінің бөлмелерін өт', 'Пройди комнаты раздела Introduction and Pre-Security'],
      ['TCP/IP мен HTTP-ді түсіндіресің', 'Объясняешь TCP/IP и HTTP']),
   st(25, 2, ['Red Team: құралдар, крипто, веб', 'Red Team: инструменты, крипто, веб'], ['Nmap', 'Hashcat', 'CTF', 'Web exploitation'],
      ['Red Team жолының 2–4 деңгейлерін өт', 'Пройди уровни 2–4 пути Red Team'],
      ['Деңгейлердің CTF тапсырмалары шешілді', 'CTF-задания уровней решены']),
   st(25, 3, ['Red Team: reverse, pwn, privesc', 'Red Team: reverse, pwn, privesc'], ['Reverse engineering', 'Binary exploitation', 'Privilege escalation'],
      ['5–6 деңгейлердің бөлмелерін аяқта', 'Заверши комнаты уровней 5–6'],
      ['Linux пен Windows-та артықшылықты көтересің', 'Повышаешь привилегии в Linux и Windows']),
   st(25, 2, ['Blue Team жолы', 'Путь Blue Team'], ['SIEM', 'Incident response', 'Forensics', 'Threat intelligence'],
      ['Blue Team-нің 1–3 деңгейлерін өтіп, инцидентке есеп жаз', 'Пройди уровни 1–3 Blue Team и напиши отчёт об инциденте'],
      ['Логтардан шабуыл хронологиясын қалпына келтіресің', 'Восстанавливаешь хронологию атаки по логам'])]);

rm('microsoft/Security-101', 'course',
  ['Алдын ала білім қажет емес', 'Предварительные знания не нужны'],
  ['Шағын ұйымға арналған қауіпсіздік тұжырымдамасы: zero trust, IAM, желі, деректер', 'Концепция безопасности небольшой организации: zero trust, IAM, сеть, данные'],
  [st(4, 1, ['Негізгі ұғымдар', 'Базовые понятия'], ['CIA triad', 'Threats', 'Risk management', 'Zero trust', 'Shared responsibility'],
      ['1-модуль сабақтары мен квизін өт', 'Пройди уроки и квиз модуля 1'],
      ['Тәуекелді бағалау кестесін құрасың', 'Составляешь таблицу оценки рисков']),
   st(4, 2, ['IAM және желі', 'IAM и сеть'], ['Identity', 'Access management', 'Network security', 'Segmentation'],
      ['2–3 модульдер бойынша қатынас пен желі схемасын жаса', 'По модулям 2–3 сделай схему доступа и сети'],
      ['Ең аз артықшылық қағидасы сақталған', 'Соблюдён принцип наименьших привилегий']),
   st(5, 2, ['SecOps, деректер, бұлт', 'SecOps, данные, облако'], ['Security operations', 'Data security', 'Application security', 'Cloud security'],
      ['4–7 модульдердің квиздерін тапсырып, тұжырымдаманы жаз', 'Сдай квизы модулей 4–7 и опиши концепцию'],
      ['Барлық модуль квизі өтті', 'Квизы всех модулей пройдены'])]);

rm('OWASP/CheatSheetSeries', 'reference',
  ['Веб-әзірлеу тәжірибесі', 'Опыт веб-разработки'],
  ['Өз жобаңа арналған қауіпсіз әзірлеу чек-листі және оны қолдану', 'Чек-лист безопасной разработки для своего проекта и его применение'],
  [st(4, 2, ['Аутентификация және сессиялар', 'Аутентификация и сессии'], ['Authentication', 'Password Storage', 'Session Management', 'JWT'],
      ['Жобаңның кіру жүйесін шпаргалкалармен салыстыр', 'Сравни систему входа своего проекта со шпаргалками'],
      ['Құпиясөздер дұрыс хэштеледі', 'Пароли хешируются правильно']),
   st(4, 2, ['Инъекция мен XSS-тен қорғану', 'Защита от инъекций и XSS'], ['Input Validation', 'XSS Prevention', 'SQL Injection Prevention', 'CSP'],
      ['XSS пен CSP шпаргалкаларымен жобаңды тексер', 'Проверь проект по шпаргалкам XSS и CSP'],
      ['Пайдаланушы деректері қауіпсіз шығарылады', 'Пользовательские данные выводятся безопасно']),
   st(4, 3, ['Инфрақұрылым', 'Инфраструктура'], ['HTTP Headers', 'Docker Security', 'Secrets Management', 'Logging'],
      ['Docker және Secrets шпаргалкалары бойынша конфигті түзет', 'Исправь конфигурацию по шпаргалкам Docker и Secrets'],
      ['Құпиялар кодта сақталмайды', 'Секреты не хранятся в коде'])]);

rm('OWASP/wstg', 'reference',
  ['HTTP, веб-қосымшалардың архитектурасы', 'HTTP, архитектура веб-приложений'],
  ['WSTG әдістемесі бойынша оқу қосымшасын толық тестілеу есебі', 'Отчёт о полном тестировании учебного приложения по методике WSTG'],
  [st(6, 2, ['Барлау және конфигурация', 'Разведка и конфигурация'], ['Information Gathering', 'Configuration Management', 'WSTG-INFO', 'WSTG-CONF'],
      ['Оқу қосымшасында INFO және CONF тесттерін өткіз', 'Проведи тесты INFO и CONF на учебном приложении'],
      ['Әр тест идентификатормен белгіленген', 'Каждый тест отмечен идентификатором']),
   st(8, 3, ['Аутентификация, авторизация, сессия', 'Аутентификация, авторизация, сессии'], ['WSTG-ATHN', 'WSTG-ATHZ', 'WSTG-SESS'],
      ['Кіру мен рөлдерді WSTG бойынша тексер', 'Проверь вход и роли по WSTG'],
      ['Табылған мәселелер дәлелімен жазылған', 'Найденные проблемы описаны с доказательствами']),
   st(8, 3, ['Енгізу және бизнес-логика', 'Ввод и бизнес-логика'], ['WSTG-INPV', 'WSTG-BUSL', 'WSTG-CLNT', 'Reporting'],
      ['Енгізуді тексеріп, қорытынды есепті WSTG үлгісімен жаз', 'Протестируй ввод и напиши итоговый отчёт по шаблону WSTG'],
      ['Есепте тәуекел деңгейлері бар', 'В отчёте указаны уровни риска'])]);

/* ===== DevOps, Linux және бұлт / DevOps, Linux и облака ===== */
rm('missing-semester/missing-semester', 'course',
  ['Бір бағдарламалау тілі', 'Один язык программирования'],
  ['Өз dotfiles репозиторийің: shell, редактор, Git және автоматтандыру скрипттері', 'Свой репозиторий dotfiles: shell, редактор, Git и скрипты автоматизации'],
  [st(6, 1, ['Shell және скрипттер', 'Shell и скрипты'], ['Shell', 'Bash scripting', 'Pipes', 'Data wrangling'],
      ['Лекция жаттығуларын орындап, логтарды sed/awk-пен талда', 'Выполни упражнения лекций и разбери логи через sed/awk'],
      ['Бір жолдық командалармен деректерді сүзесің', 'Фильтруешь данные однострочниками']),
   st(5, 1, ['Редактор және орта', 'Редактор и окружение'], ['Vim', 'Command-line environment', 'tmux', 'dotfiles'],
      ['Vim мен tmux-ты бапта, dotfiles-ты Git-ке сақта', 'Настрой Vim и tmux, сохрани dotfiles в Git'],
      ['Тышқансыз файлды өңдейсің', 'Редактируешь файл без мыши']),
   st(6, 2, ['Git және жөндеу', 'Git и отладка'], ['Version control', 'Debugging', 'Profiling'],
      ['Git-тің ішкі моделін оқып, бір баг-ты отладчикпен тап', 'Разбери внутреннюю модель Git и найди баг отладчиком'],
      ['git log --graph шығуын түсіндіресің', 'Объясняешь вывод git log --graph']),
   st(5, 2, ['Метапрограммалау және қауіпсіздік', 'Метапрограммирование и безопасность'], ['Make', 'CI', 'Security', 'Cryptography'],
      ['Жобаңа Makefile мен CI қос, SSH кілттерін бапта', 'Добавь в проект Makefile и CI, настрой SSH-ключи'],
      ['CI әр коммитте өтеді', 'CI проходит на каждый коммит'])]);

rm('bregman-arie/devops-exercises', 'practice',
  ['Linux пен желі негіздері', 'Основы Linux и сетей'],
  ['DevOps сұхбатына дайындық: әр тақырыптың Self Assessment бөлімдерін тапсыру', 'Подготовка к DevOps-собеседованию: сдать Self Assessment по каждой теме'],
  [st(10, 1, ['ОЖ және желі', 'ОС и сеть'], ['Linux', 'Operating System', 'Network', 'DNS'],
      ['Linux пен Network бөлімдерінің жаттығуларын орында', 'Выполни упражнения разделов Linux и Network'],
      ['Self Assessment сұрақтарына жауап бересің', 'Отвечаешь на вопросы Self Assessment']),
   st(12, 2, ['Контейнерлер және CI/CD', 'Контейнеры и CI/CD'], ['Docker', 'Kubernetes', 'CI/CD', 'Git'],
      ['Docker және Kubernetes жаттығуларын терминалда орында', 'Выполни упражнения по Docker и Kubernetes в терминале'],
      ['Pod-тың жұмыс істемеу себебін табасың', 'Находишь причину неработающего пода']),
   st(12, 3, ['IaC және бұлт', 'IaC и облако'], ['Terraform', 'Ansible', 'AWS', 'Prometheus'],
      ['Terraform мен AWS тапсырмаларын шеш', 'Реши задания по Terraform и AWS'],
      ['Инфрақұрылымды кодпен көтеріп, жоясың', 'Поднимаешь и удаляешь инфраструктуру кодом'])]);

rm('kodekloudhub/certified-kubernetes-administrator-course', 'course',
  ['Linux, Docker, YAML', 'Linux, Docker, YAML'],
  ['kubeadm-мен көтерілген кластер және CKA форматындағы сынақ емтиханы', 'Кластер, поднятый kubeadm, и пробный экзамен в формате CKA'],
  [st(10, 1, ['Негізгі ұғымдар және жоспарлау', 'Основные понятия и планирование'], ['Pods', 'ReplicaSets', 'Deployments', 'Services', 'Scheduling'],
      ['docs/ ішіндегі Core Concepts және Scheduling жазбаларымен ресурстар жаса', 'По заметкам Core Concepts и Scheduling в docs/ создай ресурсы'],
      ['YAML-ды кітапсыз жазасың', 'Пишешь YAML без подсказок']),
   st(12, 2, ['Қосымшалар және кластерді қолдау', 'Приложения и обслуживание кластера'], ['Rolling updates', 'ConfigMaps', 'Secrets', 'Cluster upgrade', 'etcd backup'],
      ['Кластерді жаңартып, etcd-ның бэкабын жаса', 'Обнови кластер и сделай бэкап etcd'],
      ['Бэкаптан қалпына келтіресің', 'Восстанавливаешься из бэкапа']),
   st(12, 3, ['Қауіпсіздік, сақтау, желі', 'Безопасность, хранилище, сеть'], ['RBAC', 'TLS', 'PersistentVolumes', 'NetworkPolicies', 'CoreDNS', 'Ingress'],
      ['RBAC, PV және NetworkPolicy-ді қолмен бапта', 'Настрой вручную RBAC, PV и NetworkPolicy'],
      ['Policy трафикті дұрыс шектейді', 'Policy корректно ограничивает трафик']),
   st(10, 3, ['Орнату және ақаулар', 'Установка и неисправности'], ['kubeadm', 'Troubleshooting', 'Logging', 'Monitoring'],
      ['kubeadm-clusters нұсқауымен кластер көтеріп, ақауларды жөнде', 'Подними кластер по инструкции kubeadm-clusters и исправь неисправности'],
      ['Сынақ емтиханы уақытында тапсырылды', 'Пробный экзамен сдан в срок'])]);

rm('100DaysOfCloud/100DaysOfCloud', 'practice',
  ['Бір бұлт провайдерінде тегін аккаунт', 'Бесплатный аккаунт у одного облачного провайдера'],
  ['100 күндік журнал және бұлтта жасалған кемінде 3 жоба', 'Журнал за 100 дней и минимум 3 проекта в облаке'],
  [st(10, 1, ['Бастау', 'Старт'], ['Journey template', 'Cloud account', 'Billing alerts'],
      ['Templates үлгісімен журнал ашып, бюджет ескертуін қос', 'Заведи журнал по шаблону Templates и включи бюджетные оповещения'],
      ['Журналда алғашқы 7 күн жазылған', 'В журнале записаны первые 7 дней']),
   st(25, 2, ['Негізгі сервистер', 'Основные сервисы'], ['Compute', 'Storage', 'Networking', 'IAM'],
      ['Виртуалды машина, сақтау орны және желі жасап, журналға жаз', 'Создай виртуальную машину, хранилище и сеть, опиши в журнале'],
      ['Ресурстар IaC немесе нұсқаулықпен қайталанады', 'Ресурсы воспроизводятся через IaC или инструкцию']),
   st(30, 3, ['Жобалар', 'Проекты'], ['Serverless', 'Containers', 'CI/CD', 'Monitoring'],
      ['Serverless, контейнер және CI/CD бойынша жоба жаса', 'Сделай проекты по serverless, контейнерам и CI/CD'],
      ['Журналда 100 күн толтырылды', 'Журнал заполнен за 100 дней'])]);

rm('kelseyhightower/kubernetes-the-hard-way', 'practice',
  ['Linux, желілер, TLS туралы түсінік; 4 виртуалды машина', 'Linux, сети, понимание TLS; 4 виртуальные машины'],
  ['Қолмен жиналған және smoke test-тен өткен Kubernetes кластері', 'Собранный вручную кластер Kubernetes, прошедший smoke test'],
  [st(4, 2, ['Дайындық және CA', 'Подготовка и CA'], ['Jumpbox', 'Compute resources', 'Certificate Authority', 'TLS'],
      ['1–4 зертханалар: машиналар мен сертификаттарды дайында', 'Лабы 1–4: подготовь машины и сертификаты'],
      ['Әр сертификаттың мақсатын түсіндіресің', 'Объясняешь назначение каждого сертификата']),
   st(5, 3, ['Конфигтер және etcd', 'Конфиги и etcd'], ['kubeconfig', 'Data encryption', 'etcd'],
      ['kubeconfig-тер жасап, etcd-ны көтер', 'Создай kubeconfig и подними etcd'],
      ['etcd кластері сау', 'Кластер etcd здоров']),
   st(6, 3, ['Control plane және worker-лер', 'Control plane и worker'], ['kube-apiserver', 'kube-controller-manager', 'kube-scheduler', 'kubelet', 'containerd'],
      ['Control plane мен worker түйіндерін іске қос', 'Запусти control plane и worker-узлы'],
      ['kubectl get nodes барлық түйінді Ready көрсетеді', 'kubectl get nodes показывает все узлы в Ready']),
   st(3, 3, ['Желі және тексеру', 'Сеть и проверка'], ['Pod network routes', 'Smoke test', 'Cleanup'],
      ['Маршруттарды баптап, smoke test өткіз', 'Настрой маршруты и проведи smoke test'],
      ['Smoke test-тің барлық қадамы өтті', 'Все шаги smoke test пройдены'])]);

rm('MichaelCade/90DaysOfDevOps', 'course',
  ['Компьютерлік сауаттылық', 'Компьютерная грамотность'],
  ['Контейнер, Kubernetes, IaC және CI/CD біріктірілген DevOps жобасы', 'DevOps-проект, объединяющий контейнеры, Kubernetes, IaC и CI/CD'],
  [st(12, 1, ['DevOps, Go, Linux, желі', 'DevOps, Go, Linux, сети'], ['DevOps culture', 'Go', 'Linux', 'Networking'],
      ['2022 басылымының 1–20 күндерін орында', 'Пройди дни 1–20 издания 2022'],
      ['Linux командаларымен сервер баптайсың', 'Настраиваешь сервер командами Linux']),
   st(12, 2, ['Бұлт, Git, контейнерлер', 'Облако, Git, контейнеры'], ['Cloud', 'Git', 'Docker', 'Docker Compose'],
      ['Қосымшаны контейнерге орап, Compose-пен іске қос', 'Упакуй приложение в контейнер и запусти через Compose'],
      ['Образ кіші әрі қауіпсіз', 'Образ компактный и безопасный']),
   st(14, 3, ['Kubernetes және IaC', 'Kubernetes и IaC'], ['Kubernetes', 'Terraform', 'Ansible'],
      ['Кластерді Terraform-мен көтеріп, Ansible-мен бапта', 'Подними кластер через Terraform и настрой через Ansible'],
      ['Инфрақұрылым кодпен толық қайталанады', 'Инфраструктура полностью воспроизводится кодом']),
   st(12, 3, ['CI/CD, мониторинг, DevSecOps', 'CI/CD, мониторинг, DevSecOps'], ['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'DevSecOps'],
      ['Pipeline мен мониторингті қос; 2023 басылымынан DevSecOps тақырыптарын өт', 'Добавь pipeline и мониторинг; пройди темы DevSecOps из издания 2023'],
      ['Pipeline-да қауіпсіздік сканері бар', 'В pipeline есть сканер безопасности'])]);

rm('techiescamp/kubernetes-learning-path', 'reference',
  ['Linux, контейнерлер, желі негіздері', 'Основы Linux, контейнеров и сетей'],
  ['Өз кластеріңде stateful қосымша, ingress, мониторинг және автоскейлинг', 'В своём кластере: stateful-приложение, ingress, мониторинг и автоскейлинг'],
  [st(6, 1, ['Алғышарттар және архитектура', 'Пререквизиты и архитектура'], ['Kubernetes architecture', 'Control plane', 'Nodes'],
      ['Архитектура сызбасын өзің сал', 'Нарисуй схему архитектуры сам'],
      ['Әр компоненттің рөлін түсіндіресің', 'Объясняешь роль каждого компонента']),
   st(8, 2, ['Кластер және объектілер', 'Кластер и объекты'], ['kubeadm', 'kubeconfig', 'Pods', 'Deployments', 'StatefulSets'],
      ['Кластер көтеріп, Pod-тың барлық мүмкіндігін сынап көр', 'Подними кластер и опробуй все возможности Pod'],
      ['Init-контейнер мен probe-тар жұмыс істейді', 'Работают init-контейнеры и probes']),
   st(10, 3, ['Желі, сақтау, мониторинг', 'Сеть, хранилище, мониторинг'], ['Services', 'Ingress', 'Persistent volumes', 'HPA', 'Prometheus'],
      ['Ingress, PV және HPA қос', 'Добавь Ingress, PV и HPA'],
      ['Жүктеме кезінде Pod саны өседі', 'Под нагрузкой число подов растёт'])]);

rm('jlevy/the-art-of-command-line', 'reference',
  ['Терминалға қатынас', 'Доступ к терминалу'],
  ['Күнделікті жұмысыңды жылдамдататын өз скрипттерің мен алиастарың', 'Свои скрипты и алиасы, ускоряющие ежедневную работу'],
  [st(3, 1, ['Негіздер және күнделікті қолдану', 'Основы и ежедневное использование'], ['Basics', 'Everyday use', 'man', 'Ctrl-R'],
      ['Basics және Everyday use бөлімдерінен 15 трюкті жаттап ал', 'Отработай 15 приёмов из Basics и Everyday use'],
      ['Тарихтан іздеу мен навигацияны еркін қолданасың', 'Свободно используешь поиск по истории и навигацию']),
   st(3, 2, ['Файлдар мен деректер', 'Файлы и данные'], ['Processing files and data', 'grep', 'sort', 'uniq', 'jq'],
      ['Лог файлды бір жолдық командалармен талда', 'Разбери лог-файл однострочниками'],
      ['Нәтижені скриптсіз аласың', 'Получаешь результат без скрипта']),
   st(3, 2, ['Жүйені жөндеу', 'Отладка системы'], ['System debugging', 'One-liners', 'Obscure but useful'],
      ['System debugging бөлімімен процесс пен желіні диагностикала', 'Диагностируй процесс и сеть по разделу System debugging'],
      ['Ресурсты көп жейтін процесті табасың', 'Находишь процесс, съедающий ресурсы'])]);

rm('bobbyiliev/introduction-to-bash-scripting', 'book',
  ['Linux терминалы', 'Терминал Linux'],
  ['Сервердің жағдайын тексеріп, хабарлама жіберетін Bash-скрипт', 'Bash-скрипт, проверяющий состояние сервера и отправляющий уведомление'],
  [st(3, 1, ['Синтаксис', 'Синтаксис'], ['Variables', 'User input', 'Comments', 'Arguments', 'Arrays'],
      ['Кітаптың алғашқы тарауларындағы мысалдарды қайтала', 'Повтори примеры первых глав книги'],
      ['Аргумент қабылдайтын скрипт жазасың', 'Пишешь скрипт, принимающий аргументы']),
   st(4, 2, ['Логика мен функциялар', 'Логика и функции'], ['Conditionals', 'Loops', 'Functions', 'Debugging'],
      ['Файлдарды өңдейтін функциялары бар скрипт жаз', 'Напиши скрипт с функциями для обработки файлов'],
      ['bash -x арқылы қатені табасың', 'Находишь ошибку через bash -x']),
   st(4, 2, ['Тәжірибелік скрипттер', 'Практические скрипты'], ['Creating custom commands', 'Server status script', 'cron', 'curl'],
      ['Server status скриптін cron-ға қосып, хабарлама жібер', 'Поставь скрипт состояния сервера в cron с уведомлением'],
      ['Скрипт кестемен іске қосылады', 'Скрипт запускается по расписанию'])]);

rm('acantril/learn-cantrill-io-labs', 'practice',
  ['AWS аккаунты; бұлт туралы негізгі түсінік', 'Аккаунт AWS; базовое понимание облака'],
  ['Бірнеше AWS сервисі біріктірілген mini project-ті өз бетіңше қайталау', 'Самостоятельное повторение mini project, объединяющего несколько сервисов AWS'],
  [st(4, 1, ['Қарапайым демолар', 'Простые демо'], ['aws-simple-demos', 'IAM', 'S3', 'EC2'],
      ['00-aws-simple-demos бумасынан 3 демоны өт', 'Пройди 3 демо из 00-aws-simple-demos'],
      ['Демодан кейін ресурстар жойылды', 'После демо ресурсы удалены']),
   st(10, 2, ['Видеомен жүретін mini project-тер', 'Mini project с видео'], ['CodePipeline', 'Cognito', 'Lambda', 'RDS'],
      ['VIDEO GUIDED бөлімінен 2 жобаны орында', 'Выполни 2 проекта из раздела VIDEO GUIDED'],
      ['Әр жобаның архитектура сызбасын түсіндіресің', 'Объясняешь архитектурную схему каждого проекта']),
   st(10, 3, ['Гибрид және мәтіндік жобалар', 'Гибридные и текстовые проекты'], ['Hybrid DNS', 'BGP VPN', 'DMS', 'Client VPN'],
      ['TEXT ONLY бөлімінен бір күрделі жобаны видеосыз өт', 'Пройди один сложный проект из TEXT ONLY без видео'],
      ['Жоба сипаттамадағыдай жұмыс істейді', 'Проект работает как в описании'])],
  ['README-де бұзылған немесе әзірленіп жатқан жобалар бөлек белгіленген — оларды аттап өт; AWS ресурстары ақылы болуы мүмкін', 'В README отдельно отмечены сломанные и недоделанные проекты — пропускай их; ресурсы AWS могут быть платными']);

rm('open-guides/og-aws', 'reference',
  ['Бұлт туралы негізгі түсінік', 'Базовое понимание облака'],
  ['Шағын жобаға AWS архитектурасы, бюджет пен қауіпсіздік шешімдерімен', 'AWS-архитектура небольшого проекта с решениями по бюджету и безопасности'],
  [st(4, 1, ['Жалпы ақпарат', 'Общая информация'], ['General Information', 'Billing and Cost Management', 'Accounts'],
      ['Billing бөлімін оқып, бюджет ескертулерін бапта', 'Изучи раздел Billing и настрой бюджетные оповещения'],
      ['Күтпеген шығынның себептерін атайсың', 'Называешь причины неожиданных расходов']),
   st(6, 2, ['Негізгі сервистер', 'Основные сервисы'], ['IAM', 'EC2', 'S3', 'VPC', 'RDS', 'Lambda'],
      ['Әр сервистің «Tips» және «Gotchas» бөлімдерін өз жобаңда тексер', 'Проверь в своём проекте разделы «Tips» и «Gotchas» каждого сервиса'],
      ['Әр сервис үшін бір тұзақ атайсың', 'Называешь по одной ловушке на сервис']),
   st(4, 3, ['Архитектура', 'Архитектура'], ['High availability', 'Security', 'Cost optimization'],
      ['Жобаңның архитектурасын сызып, тұзақтарға тексер', 'Нарисуй архитектуру проекта и проверь её на ловушки'],
      ['Архитектура құжатталған', 'Архитектура задокументирована'])],
  ['Нұсқаулықтың кейбір бөлімдері бірнеше жыл бұрын жазылған; бағалар мен лимиттерді ресми құжаттамадан тексер', 'Часть руководства написана несколько лет назад; цены и лимиты сверяй с официальной документацией']);

/* ===== Data Science және Data Engineering ===== */
rm('DataTalksClub/data-engineering-zoomcamp', 'course',
  ['Python, SQL, Docker негіздері, командалық жол', 'Python, SQL, основы Docker, командная строка'],
  ['Курстың қорытынды жобасы: бұлттағы толық деректер конвейері және дашборд', 'Итоговый проект курса: полный конвейер данных в облаке и дашборд'],
  [st(10, 1, ['Docker және Terraform', 'Docker и Terraform'], ['Docker', 'PostgreSQL', 'Terraform', 'GCP'],
      ['Деректерді Postgres-ке жүктеп, бұлт ресурстарын Terraform-мен көтер', 'Загрузи данные в Postgres и подними облачные ресурсы через Terraform'],
      ['1-модуль үй тапсырмасы тапсырылды', 'Домашнее задание модуля 1 сдано']),
   st(10, 2, ['Оркестрация және қойма', 'Оркестрация и хранилище'], ['Workflow orchestration', 'Kestra', 'BigQuery', 'Partitioning'],
      ['Деректерді кесте бойынша қоймаға жүктейтін ағын жаса', 'Сделай поток, загружающий данные в хранилище по расписанию'],
      ['Partitioning-тің сұрау құнына әсерін өлшедің', 'Измерено влияние partitioning на стоимость запроса']),
   st(10, 2, ['Analytics engineering', 'Analytics engineering'], ['dbt', 'Data modeling', 'Tests', 'Dashboard'],
      ['dbt модельдерін жасап, дашборд құр', 'Сделай модели dbt и построй дашборд'],
      ['dbt тесттері өтеді', 'Тесты dbt проходят']),
   st(14, 3, ['Batch және streaming', 'Batch и streaming'], ['Spark', 'Kafka', 'Streaming'],
      ['Spark-та batch есептеу мен Kafka-да ағын өңдеуді жаса', 'Сделай batch-обработку в Spark и потоковую обработку в Kafka'],
      ['Ағын нақты уақытта жаңарады', 'Поток обновляется в реальном времени']),
   st(20, 3, ['Қорытынды жоба', 'Итоговый проект'], ['End-to-end pipeline', 'Peer review'],
      ['Курс критерийлері бойынша жобаны аяқта', 'Заверши проект по критериям курса'],
      ['Жоба peer review-дан өтті', 'Проект прошёл peer review'])]);

rm('ageron/handson-ml3', 'book',
  ['Python, NumPy, сызықтық алгебра негіздері', 'Python, NumPy, основы линейной алгебры'],
  ['Кітаптың 2-тарауындағыдай end-to-end жоба, бірақ өз деректеріңде', 'End-to-end проект как в главе 2, но на своих данных'],
  [st(12, 1, ['ML ландшафты және end-to-end жоба', 'Ландшафт ML и end-to-end проект'], ['Scikit-Learn', 'Pipelines', 'Cross-validation'],
      ['1–2 тараудың ноутбуктарын іске қосып, жаттығуларын шеш', 'Запусти ноутбуки глав 1–2 и реши упражнения'],
      ['Pipeline-ды нөлден жинайсың', 'Собираешь pipeline с нуля']),
   st(16, 2, ['Классикалық ML', 'Классический ML'], ['Classification', 'Linear models', 'SVM', 'Decision trees', 'Ensembles', 'Dimensionality reduction', 'Clustering'],
      ['3–9 тараулардың әрқайсысынан бір жаттығуды толық шеш', 'Реши полностью по одному упражнению из глав 3–9'],
      ['Модельді деректерге қарай таңдайсың', 'Выбираешь модель под данные']),
   st(20, 3, ['Нейрожелілер', 'Нейросети'], ['Keras', 'TensorFlow', 'CNN', 'RNN', 'Attention'],
      ['10–16 тарау: CNN және RNN модельдерін үйрет', 'Главы 10–16: обучи модели CNN и RNN'],
      ['Overfitting-ке қарсы әдістерді қолданасың', 'Применяешь методы против переобучения']),
   st(12, 3, ['Генеративті модельдер және RL', 'Генеративные модели и RL'], ['Autoencoders', 'GANs', 'Diffusion', 'Reinforcement learning'],
      ['17–18 тараулардан бір модельді іске қос', 'Запусти одну модель из глав 17–18'],
      ['Нәтижені визуализацияладың', 'Результат визуализирован'])]);

rm('guipsamora/pandas_exercises', 'practice',
  ['Python негіздері', 'Основы Python'],
  ['Таңдалған ашық деректер жиынын pandas-пен толық талдау', 'Полный анализ выбранного открытого набора данных в pandas'],
  [st(4, 1, ['Деректермен танысу', 'Знакомство с данными'], ['Getting and knowing', 'Filtering and sorting'],
      ['Алғашқы екі бөлімнің жаттығуларын шешімге қарамай орында', 'Выполни упражнения первых двух разделов, не подглядывая в решения'],
      ['loc пен iloc айырмасын білесің', 'Знаешь разницу loc и iloc']),
   st(6, 2, ['Топтау және біріктіру', 'Группировка и объединение'], ['Grouping', 'Apply', 'Merge', 'Stats'],
      ['Grouping, Apply және Merge жаттығуларын шеш', 'Реши упражнения Grouping, Apply и Merge'],
      ['groupby нәтижесін алдын ала болжайсың', 'Заранее предсказываешь результат groupby']),
   st(5, 2, ['Визуализация және уақыт қатарлары', 'Визуализация и временные ряды'], ['Visualization', 'Time series', 'Creating DataFrames'],
      ['Уақыт қатарына resample жасап, график сал', 'Сделай resample временного ряда и построй график'],
      ['Графиктен қорытынды жасайсың', 'Делаешь выводы по графику'])]);

rm('jakevdp/PythonDataScienceHandbook', 'book',
  ['Python негіздері', 'Основы Python'],
  ['Кітаптағы құралдармен жасалған талдау және модель ноутбугы', 'Ноутбук с анализом и моделью на инструментах книги'],
  [st(4, 1, ['IPython және NumPy', 'IPython и NumPy'], ['IPython', 'NumPy', 'Broadcasting', 'Vectorization'],
      ['1–2 тараулардың мысалдарын қайталап, циклдерді векторлаумен ауыстыр', 'Повтори примеры глав 1–2 и замени циклы векторизацией'],
      ['Broadcasting ережелерін түсіндіресің', 'Объясняешь правила broadcasting']),
   st(8, 2, ['Pandas', 'Pandas'], ['Series', 'DataFrame', 'Missing data', 'Merge', 'GroupBy', 'Pivot tables'],
      ['3-тарау бойынша деректер жиынын тазалап, жиынтықта', 'По главе 3 очисти и агрегируй набор данных'],
      ['Pivot table-ды еркін құрасың', 'Свободно строишь pivot table']),
   st(5, 2, ['Matplotlib', 'Matplotlib'], ['Line plots', 'Histograms', 'Subplots', 'Customization'],
      ['4-тараумен жариялауға жарайтын график жаса', 'По главе 4 сделай график, пригодный для публикации'],
      ['График өз бетінше түсінікті', 'График понятен без пояснений']),
   st(8, 3, ['Scikit-Learn', 'Scikit-Learn'], ['Estimator API', 'Feature engineering', 'Model validation', 'In-depth algorithms'],
      ['5-тараудағы бір алгоритмді терең талдап, өз деректеріңе қолдан', 'Разбери один алгоритм из главы 5 и примени к своим данным'],
      ['Валидация қисықтарын түсіндіресің', 'Объясняешь кривые валидации'])]);

rm('donnemartin/data-science-ipython-notebooks', 'reference',
  ['Python негіздері', 'Основы Python'],
  ['Жинақтағы ноутбуктарды заманауи кітапхана нұсқаларына жаңартып, біріктіру', 'Обновление ноутбуков подборки под современные версии библиотек и их объединение'],
  [st(6, 1, ['Python және деректер құралдары', 'Python и инструменты данных'], ['python-data', 'NumPy', 'pandas', 'matplotlib'],
      ['python-data, numpy және pandas ноутбуктарын іске қос', 'Запусти ноутбуки python-data, numpy и pandas'],
      ['Ноутбуктар қатесіз орындалады', 'Ноутбуки выполняются без ошибок']),
   st(6, 2, ['scikit-learn және статистика', 'scikit-learn и статистика'], ['scikit-learn', 'SciPy', 'Statistical inference'],
      ['scikit-learn ноутбуктарын өз деректеріңе бейімде', 'Адаптируй ноутбуки scikit-learn под свои данные'],
      ['Модельдің метрикасы есептелген', 'Метрика модели посчитана']),
   st(8, 3, ['Big data және deep learning', 'Big data и deep learning'], ['Spark', 'MapReduce', 'TensorFlow', 'Keras'],
      ['Spark немесе deep learning ноутбугын қазіргі нұсқаға көшір', 'Перенеси ноутбук Spark или deep learning на актуальную версию'],
      ['Ескірген API-лер ауыстырылды', 'Устаревшие API заменены'])],
  ['Жинақ бірнеше жыл бұрын жаңартылған: Theano, Caffe сияқты кітапханалар ескірген', 'Подборка обновлялась несколько лет назад: Theano, Caffe и подобные библиотеки устарели']);

rm('DataTalksClub/machine-learning-zoomcamp', 'course',
  ['Python, NumPy, pandas негіздері', 'Python, основы NumPy и pandas'],
  ['Курстың capstone жобасы: Docker пен Kubernetes-ке шығарылған модель', 'Capstone-проект курса: модель, развёрнутая в Docker и Kubernetes'],
  [st(10, 1, ['Кіріспе және регрессия', 'Введение и регрессия'], ['NumPy', 'Linear regression', 'Feature engineering'],
      ['1–2 модульдің үй тапсырмаларын орында', 'Выполни домашние задания модулей 1–2'],
      ['Регрессияны кітапханасыз жазасың', 'Пишешь регрессию без библиотеки']),
   st(10, 2, ['Классификация және бағалау', 'Классификация и оценка'], ['Logistic regression', 'ROC AUC', 'Cross-validation'],
      ['Churn болжау моделін құрып, бағала', 'Построй и оцени модель прогноза оттока'],
      ['ROC AUC-ты түсіндіресің', 'Объясняешь ROC AUC']),
   st(10, 2, ['Деплой және ағаштар', 'Деплой и деревья'], ['Flask', 'Docker', 'Decision trees', 'XGBoost'],
      ['Модельді Flask-қа орап, Docker-де іске қос', 'Оберни модель во Flask и запусти в Docker'],
      ['Сервис сұрауға болжаммен жауап береді', 'Сервис отвечает прогнозом на запрос']),
   st(12, 3, ['Deep learning және serverless', 'Deep learning и serverless'], ['Neural networks', 'Serverless', 'Kubernetes'],
      ['Суреттер моделін serverless немесе Kubernetes-ке шығар', 'Выведи модель изображений в serverless или Kubernetes'],
      ['Модель бұлтта жұмыс істейді', 'Модель работает в облаке'])]);

rm('DataTalksClub/mlops-zoomcamp', 'course',
  ['Python, ML негіздері, Docker', 'Python, основы ML, Docker'],
  ['Курстың қорытынды жобасы: эксперименттер, оркестрация, деплой және мониторинг', 'Итоговый проект курса: эксперименты, оркестрация, деплой и мониторинг'],
  [st(8, 1, ['Кіріспе және тәжірибелерді бақылау', 'Введение и трекинг экспериментов'], ['MLOps maturity', 'MLflow', 'Model registry'],
      ['Тәжірибелерді MLflow-да тіркеп, модельді registry-ге сақта', 'Логируй эксперименты в MLflow и сохрани модель в registry'],
      ['Модель нұсқалары салыстырылған', 'Версии модели сравнены']),
   st(8, 2, ['Оркестрация және деплой', 'Оркестрация и деплой'], ['Orchestration', 'Batch deployment', 'Web service', 'Streaming'],
      ['Модельді web-сервис және batch ретінде шығар', 'Разверни модель как веб-сервис и batch'],
      ['Pipeline кесте бойынша іске қосылады', 'Pipeline запускается по расписанию']),
   st(8, 3, ['Мониторинг және best practices', 'Мониторинг и best practices'], ['Evidently', 'Monitoring', 'Testing', 'IaC', 'CI/CD'],
      ['Дрейф мониторингін және тесттерді қос', 'Добавь мониторинг дрейфа и тесты'],
      ['Дрейф кезінде ескерту шығады', 'При дрейфе срабатывает оповещение'])]);

rm('academic/awesome-datascience', 'collection',
  ['Python немесе R негіздері', 'Основы Python или R'],
  ['Тізімдегі деректер жиынымен жасалған портфолио-жоба', 'Портфолио-проект на наборе данных из списка'],
  [st(3, 1, ['Data Science деген не', 'Что такое Data Science'], ['What is Data Science', 'Where to start'],
      ['«Where do I start» бөлімінен оқу жоспарын құр', 'Составь учебный план по разделу «Where do I start»'],
      ['Жоспарда 3 курс пен 2 кітап бар', 'В плане 3 курса и 2 книги']),
   st(25, 2, ['Курстар мен құралдар', 'Курсы и инструменты'], ['MOOCs', 'Toolboxes', 'Cheat sheets'],
      ['Таңдалған MOOC-ты өтіп, құралдар тізімінен 3 кітапхананы меңгер', 'Пройди выбранный MOOC и освой 3 библиотеки из списка инструментов'],
      ['MOOC-тың барлық тапсырмасы орындалды', 'Все задания MOOC выполнены']),
   st(15, 3, ['Деректер жиыны және жоба', 'Датасет и проект'], ['Datasets', 'EDA', 'Modeling', 'Storytelling'],
      ['Datasets бөлімінен жиын таңдап, толық жоба жаса', 'Выбери датасет из раздела Datasets и сделай полный проект'],
      ['Жоба нәтижесі қысқа мақалада баяндалды', 'Результат проекта описан в короткой статье'])]);

/* ===== SQL, дерекқорлар, архитектура / SQL, базы данных, архитектура ===== */
rm('donnemartin/system-design-primer', 'reference',
  ['Бэкенд әзірлеу тәжірибесі', 'Опыт backend-разработки'],
  ['Primer-дегі сұхбат сұрақтарының бірі бойынша өз архитектура жобаң', 'Собственный проект архитектуры по одному из интервью-вопросов Primer'],
  [st(8, 1, ['Масштабталу негіздері', 'Основы масштабирования'], ['Performance vs scalability', 'Latency vs throughput', 'CAP theorem', 'Consistency patterns'],
      ['Study guide бойынша негізгі тақырыптарды конспектіле', 'Законспектируй базовые темы по study guide'],
      ['CAP теоремасын мысалмен түсіндіресің', 'Объясняешь CAP-теорему на примере']),
   st(10, 2, ['Құрамдас бөліктер', 'Компоненты'], ['DNS', 'CDN', 'Load balancer', 'Reverse proxy', 'Cache', 'Asynchronism'],
      ['Әр компоненттің артықшылығы мен кемшілігін кестеге жаз', 'Занеси в таблицу плюсы и минусы каждого компонента'],
      ['Кэшті қай деңгейде қою керегін таңдайсың', 'Выбираешь, на каком уровне ставить кэш']),
   st(8, 2, ['Дерекқорлар', 'Базы данных'], ['RDBMS', 'Replication', 'Sharding', 'NoSQL', 'Federation'],
      ['Бір жүйеге SQL мен NoSQL таңдауын негізде', 'Обоснуй выбор SQL или NoSQL для одной системы'],
      ['Шардинг кілтін дұрыс таңдайсың', 'Правильно выбираешь ключ шардинга']),
   st(12, 3, ['Сұхбат жаттығулары', 'Интервью-упражнения'], ['Pastebin', 'Twitter timeline', 'Web crawler', 'Anki flashcards'],
      ['Шешімге қарамай 3 жүйені жобалап, кейін салыстыр', 'Спроектируй 3 системы без подсказок, затем сравни с решением'],
      ['Жобаңда тар жерлер мен масштабталу көрсетілген', 'В проекте показаны узкие места и масштабирование'])]);

rm('ByteByteGoHq/system-design-101', 'reference',
  ['Бэкенд немесе DevOps туралы жалпы түсінік', 'Общее понимание backend или DevOps'],
  ['Өз жобаңның архитектурасын ByteByteGo стиліндегі сызбалармен сипаттау', 'Описание архитектуры своего проекта схемами в стиле ByteByteGo'],
  [st(4, 1, ['Байланыс протоколдары', 'Протоколы взаимодействия'], ['REST', 'GraphQL', 'gRPC', 'WebSocket', 'HTTP/2'],
      ['Протоколдарды бір қосымша мысалында салыстыр', 'Сравни протоколы на примере одного приложения'],
      ['Протокол таңдауын негіздейсің', 'Обосновываешь выбор протокола']),
   st(5, 2, ['Архитектура және дерекқорлар', 'Архитектура и базы данных'], ['Microservices', 'Architecture patterns', 'Database', 'Cache'],
      ['Монолитті микросервистерге бөлу сызбасын сал', 'Нарисуй схему разделения монолита на микросервисы'],
      ['Сервистер арасындағы шекаралар негізделген', 'Границы между сервисами обоснованы']),
   st(5, 2, ['CI/CD, бұлт, қауіпсіздік', 'CI/CD, облако, безопасность'], ['CI/CD', 'Cloud services', 'Security', 'Git'],
      ['Жобаңның CI/CD мен қауіпсіздік сызбасын жаса', 'Сделай схему CI/CD и безопасности своего проекта'],
      ['Сызба команда үшін түсінікті', 'Схема понятна команде'])]);

rm('AlisdairO/pgexercises', 'practice',
  ['Реляциялық дерекқор ұғымы', 'Понятие реляционной базы данных'],
  ['Өз дерекқорыңа есептер мен аналитикалық сұраулар жиыны', 'Набор отчётов и аналитических запросов к своей базе данных'],
  [st(4, 1, ['Қарапайым сұраулар', 'Простые запросы'], ['SELECT', 'WHERE', 'ORDER BY', 'LIMIT'],
      ['Simple SQL Queries бөлімін толық шеш', 'Реши полностью раздел Simple SQL Queries'],
      ['Барлық тапсырма қатесіз', 'Все задачи без ошибок']),
   st(6, 2, ['JOIN, ішкі сұраулар, өзгерту', 'JOIN, подзапросы, изменение данных'], ['JOIN', 'Subqueries', 'INSERT', 'UPDATE', 'DELETE'],
      ['Joins and Subqueries және Modifying Data бөлімдерін шеш', 'Реши разделы Joins and Subqueries и Modifying Data'],
      ['JOIN түрлерін сызбамен түсіндіресің', 'Объясняешь типы JOIN на схеме']),
   st(8, 3, ['Агрегаттар, уақыт, рекурсия', 'Агрегаты, время, рекурсия'], ['GROUP BY', 'Window functions', 'Timestamps', 'Recursive CTE'],
      ['Aggregates, Dates және Recursive бөлімдерін шеш', 'Реши разделы Aggregates, Dates и Recursive'],
      ['Терезе функцияларын еркін қолданасың', 'Свободно используешь оконные функции'])],
  ['Бастапқы pgexercises/pgexercises сілтемесі жұмыс істемейді; сайттың нақты репозиторийі — AlisdairO/pgexercises', 'Исходная ссылка pgexercises/pgexercises не работает; настоящий репозиторий сайта — AlisdairO/pgexercises']);

rm('codecrafters-io/build-your-own-x', 'collection',
  ['Бір тілді сенімді білу', 'Уверенное знание одного языка'],
  ['Таңдалған технологияның өз іске асыруы және ол туралы мақала', 'Собственная реализация выбранной технологии и статья о ней'],
  [st(10, 2, ['Шағын құрал', 'Небольшой инструмент'], ['Command-Line Tool', 'Shell', 'Template Engine', 'Regex Engine'],
      ['Shell немесе regex engine туториалын соңына дейін өт', 'Пройди до конца туториал shell или regex engine'],
      ['Құрал негізгі мүмкіндіктерді қолдайды', 'Инструмент поддерживает основные возможности']),
   st(20, 3, ['Жүйелік компонент', 'Системный компонент'], ['Git', 'Database', 'Docker', 'Web Server', 'Network Stack'],
      ['Git, дерекқор немесе Docker-дің өз нұсқасын жаса', 'Сделай свою версию Git, базы данных или Docker'],
      ['Нұсқаң түпнұсқамен үйлесімді операцияларды орындайды', 'Твоя версия выполняет совместимые с оригиналом операции']),
   st(25, 3, ['Күрделі жүйе', 'Сложная система'], ['Programming Language', 'Operating System', 'Emulator', 'Neural Network'],
      ['Тіл, эмулятор немесе нейрожелі туториалын өз кеңейтуіңмен аяқта', 'Заверши туториал языка, эмулятора или нейросети со своим расширением'],
      ['Жобаға тесттер мен архитектура сипаттамасы бар', 'У проекта есть тесты и описание архитектуры'])]);

rm('karanpratapsingh/system-design', 'course',
  ['Бэкенд әзірлеу тәжірибесі', 'Опыт backend-разработки'],
  ['V тараудағы сұхбат жүйелерінің бірін өз бетіңше жобалау', 'Самостоятельное проектирование одной из систем-интервью из главы V'],
  [st(8, 1, ['I тарау: желі және негіздер', 'Глава I: сети и основы'], ['IP', 'OSI', 'TCP/UDP', 'DNS', 'Load balancing', 'Caching', 'CDN'],
      ['I тараудың тақырыптарына сызбалы конспект жаса', 'Сделай конспект со схемами по темам главы I'],
      ['Сұраудың браузерден серверге жолын сипаттайсың', 'Описываешь путь запроса от браузера до сервера']),
   st(10, 2, ['II тарау: дерекқорлар', 'Глава II: базы данных'], ['Replication', 'Indexes', 'ACID/BASE', 'CAP', 'PACELC', 'Sharding', 'Consistent hashing'],
      ['Бір қосымшаға репликация мен шардинг схемасын жаса', 'Сделай схему репликации и шардинга для одного приложения'],
      ['PACELC-ті мысалмен түсіндіресің', 'Объясняешь PACELC на примере']),
   st(10, 3, ['III–IV тарау: архитектура мен сенімділік', 'Главы III–IV: архитектура и надёжность'], ['Message queues', 'Microservices', 'CQRS', 'API Gateway', 'Rate limiting', 'Circuit breaker', 'OAuth'],
      ['Микросервистерге хабар кезегі мен rate limiting қос', 'Добавь в микросервисы очередь сообщений и rate limiting'],
      ['Ақау кезінде жүйе құламайды', 'Система не падает при отказе компонента']),
   st(10, 3, ['V тарау: сұхбаттар', 'Глава V: интервью'], ['URL shortener', 'WhatsApp', 'Twitter', 'Netflix', 'Uber'],
      ['Шешімді оқымай тұрып бір жүйені жобала, кейін салыстыр', 'Спроектируй систему до чтения решения, затем сравни'],
      ['Жобада сыйымдылық бағалауы бар', 'В проекте есть оценка ёмкости'])]);

/* ===== QA және тестілеуді автоматтандыру / QA и автоматизация тестирования ===== */
rm('atinfo/awesome-test-automation', 'collection',
  ['Бір бағдарламалау тілі, тестілеу ұғымы', 'Один язык программирования, понятие тестирования'],
  ['Таңдалған стектегі unit, API және UI тесттері бар автоматтандыру жобасы', 'Проект автоматизации с unit-, API- и UI-тестами на выбранном стеке'],
  [st(4, 1, ['Стек таңдау', 'Выбор стека'], ['Python', 'Java', 'JavaScript', 'Test frameworks'],
      ['Тіліңнің бөлімінен unit, API және UI фреймворктерін таңда', 'Выбери в разделе своего языка фреймворки для unit, API и UI'],
      ['Таңдау 3 критериймен негізделген', 'Выбор обоснован 3 критериями']),
   st(10, 2, ['Unit және API тесттері', 'Unit- и API-тесты'], ['Unit testing', 'API testing', 'Mocking', 'Fixtures'],
      ['Ашық API-ге 15 тест жаз', 'Напиши 15 тестов для открытого API'],
      ['Тесттер тәуелсіз және қайталанады', 'Тесты независимы и воспроизводимы']),
   st(12, 3, ['UI, BDD және CI', 'UI, BDD и CI'], ['Web UI testing', 'BDD', 'Performance testing', 'CI'],
      ['UI тесттерін жазып, CI-ге қос', 'Напиши UI-тесты и добавь их в CI'],
      ['Тесттер әр push-та іске қосылады', 'Тесты запускаются на каждый push'])]);

rm('microsoft/playwright', 'tool',
  ['JavaScript немесе TypeScript; HTML/CSS селекторлары', 'JavaScript или TypeScript; селекторы HTML/CSS'],
  ['Нақты сайтқа E2E тесттер жиыны: Page Object, trace және CI', 'Набор E2E-тестов для реального сайта: Page Object, trace и CI'],
  [st(3, 1, ['Орнату және бірінші тест', 'Установка и первый тест'], ['npm init playwright', 'test()', 'expect', 'codegen'],
      ['Codegen арқылы тест жазып, оны қолмен жақсарт', 'Запиши тест через codegen и доработай вручную'],
      ['Тест үш браузерде өтеді', 'Тест проходит в трёх браузерах']),
   st(6, 2, ['Локаторлар және тұрақтылық', 'Локаторы и стабильность'], ['Locators', 'Auto-waiting', 'Fixtures', 'Page Object Model'],
      ['Тесттерді Page Object үлгісімен қайта құрылымда', 'Перестрой тесты по паттерну Page Object'],
      ['sleep пен тұрақсыз тесттер жоқ', 'Нет sleep и нестабильных тестов']),
   st(6, 3, ['Жөндеу және CI', 'Отладка и CI'], ['Trace viewer', 'API testing', 'Parallelism', 'GitHub Actions'],
      ['Trace қосып, тесттерді GitHub Actions-та параллель іске қос', 'Включи trace и запусти тесты параллельно в GitHub Actions'],
      ['Құлаған тесттің себебін trace-тен табасың', 'Находишь причину падения теста по trace'])]);

rm('SeleniumHQ/selenium', 'tool',
  ['Java, Python, C# немесе JavaScript-тің бірі', 'Один из языков: Java, Python, C# или JavaScript'],
  ['Selenium Grid-те параллель іске қосылатын UI тесттер жиыны', 'Набор UI-тестов с параллельным запуском в Selenium Grid'],
  [st(4, 1, ['WebDriver негіздері', 'Основы WebDriver'], ['WebDriver', 'Locators', 'Browser drivers'],
      ['Тіліңнің байланысымен форманы толтыратын тест жаз', 'Напиши тест заполнения формы на биндингах своего языка'],
      ['Тест Chrome мен Firefox-та өтеді', 'Тест проходит в Chrome и Firefox']),
   st(6, 2, ['Күтулер және құрылым', 'Ожидания и структура'], ['Explicit waits', 'Page Object', 'Test framework'],
      ['Explicit wait пен Page Object қолдан', 'Используй explicit wait и Page Object'],
      ['Тесттер кездейсоқ құламайды', 'Тесты не падают случайно']),
   st(6, 3, ['Grid және CI', 'Grid и CI'], ['Selenium Grid', 'Docker', 'Parallel execution'],
      ['Grid-ті Docker-де көтеріп, тесттерді параллель іске қос', 'Подними Grid в Docker и запусти тесты параллельно'],
      ['Жалпы орындалу уақыты қысқарды', 'Общее время прогона сократилось'])]);

rm('karatelabs/karate', 'tool',
  ['HTTP және JSON; Java орнатылған', 'HTTP и JSON; установленная Java'],
  ['Ашық API-ге арналған Karate тесттер жиыны: деректермен басқарылатын және CI-де іске қосылатын', 'Набор тестов Karate для открытого API: data-driven и с запуском в CI'],
  [st(3, 1, ['Бірінші feature', 'Первый feature'], ['Gherkin', 'Given/When/Then', 'match'],
      ['GET және POST сұрауларына feature-файл жаз', 'Напиши feature-файл для запросов GET и POST'],
      ['match арқылы жауап схемасы тексеріледі', 'Схема ответа проверяется через match']),
   st(5, 2, ['Деректер және қайта қолдану', 'Данные и переиспользование'], ['Data-driven tests', 'Scenario Outline', 'call', 'karate-config.js'],
      ['Scenario Outline-мен 10 жағдайды тексер', 'Проверь 10 случаев через Scenario Outline'],
      ['Ортаның конфигі бөлек сақталған', 'Конфиг окружений вынесен отдельно']),
   st(5, 3, ['Mock және өнімділік', 'Mock и производительность'], ['Mocks', 'Gatling', 'Parallel runner', 'Reports'],
      ['Mock-сервер жасап, тесттерді параллель іске қос', 'Сделай mock-сервер и запусти тесты параллельно'],
      ['HTML есебі CI-де сақталады', 'HTML-отчёт сохраняется в CI'])]);

rm('cypress-io/cypress', 'tool',
  ['JavaScript; frontend жобасы', 'JavaScript; frontend-проект'],
  ['Жобаңа арналған E2E және компоненттік тесттер, CI-ге қосылған', 'E2E- и компонентные тесты для своего проекта, подключённые к CI'],
  [st(3, 1, ['Орнату және E2E', 'Установка и E2E'], ['cypress open', 'cy.visit', 'cy.get', 'Assertions'],
      ['Жобаңның негізгі сценарийіне E2E тест жаз', 'Напиши E2E-тест основного сценария проекта'],
      ['Тест Cypress App-те жасыл', 'Тест зелёный в Cypress App']),
   st(5, 2, ['Желі және деректер', 'Сеть и данные'], ['cy.intercept', 'Fixtures', 'Custom commands'],
      ['API жауаптарын intercept-пен ауыстыр', 'Подмени ответы API через intercept'],
      ['Тесттер backend-ке тәуелсіз', 'Тесты не зависят от backend']),
   st(5, 3, ['Компоненттік тесттер және CI', 'Компонентные тесты и CI'], ['Component testing', 'CI', 'Screenshots', 'Videos'],
      ['Компоненттік тест қосып, CI-де видео жазуды бапта', 'Добавь компонентный тест и настрой запись видео в CI'],
      ['CI-дегі құлаған тесттің видеосы бар', 'Для упавшего теста в CI есть видео'])]);

rm('appium/appium', 'tool',
  ['Бір тіл (Java, Python, JS); Android эмуляторы', 'Один язык (Java, Python, JS); эмулятор Android'],
  ['Мобильді қосымшаның негізгі сценарийлеріне тесттер, CI-де эмулятормен', 'Тесты основных сценариев мобильного приложения с эмулятором в CI'],
  [st(4, 1, ['Орнату және драйверлер', 'Установка и драйверы'], ['Appium 2', 'UiAutomator2', 'XCUITest', 'Capabilities'],
      ['Appium мен UiAutomator2 драйверін орнатып, сессия аш', 'Установи Appium и драйвер UiAutomator2, открой сессию'],
      ['Сессия эмуляторда ашылады', 'Сессия открывается на эмуляторе']),
   st(6, 2, ['Элементтер және жестер', 'Элементы и жесты'], ['Locators', 'Appium Inspector', 'Gestures', 'Waits'],
      ['Inspector-мен локаторлар тауып, кіру сценарийін автоматтандыр', 'Найди локаторы через Inspector и автоматизируй вход'],
      ['Тест тұрақты өтеді', 'Тест стабильно проходит']),
   st(6, 3, ['Құрылым және CI', 'Структура и CI'], ['Page Object', 'Parallel devices', 'CI emulator'],
      ['Тесттерді Page Object-пен ұйымдастырып, CI-ге қос', 'Организуй тесты через Page Object и добавь в CI'],
      ['CI-де эмулятор тесттері өтеді', 'В CI проходят тесты на эмуляторе'])]);

rm('goldbergyoni/javascript-testing-best-practices', 'reference',
  ['JavaScript, тестілеу фреймворгі (Jest, Vitest, Mocha)', 'JavaScript, тестовый фреймворк (Jest, Vitest, Mocha)'],
  ['Жобаңның тесттерін «Golden Rule» бойынша қайта жазу және сапасын өлшеу', 'Переписать тесты своего проекта по «Golden Rule» и измерить их качество'],
  [st(4, 1, ['Golden Rule және тест анатомиясы', 'Golden Rule и анатомия теста'], ['AAA pattern', 'Test naming', 'Black-box testing'],
      ['Бар 10 тестіңді AAA үлгісімен қайта жаз', 'Перепиши 10 своих тестов по шаблону AAA'],
      ['Тест атауынан не тексерілетіні түсінікті', 'Из имени теста понятно, что проверяется']),
   st(5, 2, ['Backend және frontend', 'Backend и frontend'], ['Component tests', 'Contract tests', 'UI testing', 'Mocks'],
      ['Компоненттік және контракттық тест қос', 'Добавь компонентный и контрактный тест'],
      ['Mock-тар тек сыртқы шекарада', 'Моки только на внешней границе']),
   st(4, 3, ['Тиімділікті өлшеу және CI', 'Измерение эффективности и CI'], ['Coverage', 'Mutation testing', 'Stryker', 'CI'],
      ['Stryker-мен мутациялық тестілеу жүргіз', 'Проведи мутационное тестирование через Stryker'],
      ['Mutation score жақсарды', 'Mutation score вырос'])]);

/* ===== Мобильді әзірлеу / Мобильная разработка ===== */
rm('flutter/flutter', 'tool',
  ['Бағдарламалау негіздері; Dart тілімен танысу', 'Основы программирования; знакомство с языком Dart'],
  ['Android мен iOS-та жұмыс істейтін, API-мен байланысқан Flutter-қосымша', 'Flutter-приложение для Android и iOS, работающее с API'],
  [st(6, 1, ['Орнату және Dart', 'Установка и Dart'], ['Flutter SDK', 'Dart', 'flutter doctor', 'Hot reload'],
      ['flutter doctor-ды толық жасыл ет және counter қосымшасын өзгерт', 'Добейся зелёного flutter doctor и измени приложение-счётчик'],
      ['Hot reload пен hot restart айырмасын білесің', 'Знаешь разницу hot reload и hot restart']),
   st(12, 2, ['Виджеттер және макет', 'Виджеты и вёрстка'], ['Widgets', 'Stateless/Stateful', 'Layout', 'Navigation'],
      ['Бірнеше экраны бар қосымша жаса', 'Сделай приложение из нескольких экранов'],
      ['Виджеттер ағашын түсіндіресің', 'Объясняешь дерево виджетов']),
   st(14, 3, ['Күй, желі, жариялау', 'Состояние, сеть, публикация'], ['State management', 'http', 'Testing', 'Release build'],
      ['API-ден дерек алып, күйді басқар, release build жина', 'Получи данные из API, управляй состоянием, собери release build'],
      ['Қосымша екі платформада жұмыс істейді', 'Приложение работает на двух платформах'])],
  ['Бұл SDK-ның бастапқы коды; оқу материалдары README сілтейтін flutter.dev құжаттамасында', 'Это исходный код SDK; учебные материалы — в документации flutter.dev по ссылке из README']);

rm('facebook/react-native', 'tool',
  ['JavaScript және React', 'JavaScript и React'],
  ['Expo немесе React Native CLI-мен жасалған, API-мен жұмыс істейтін мобильді қосымша', 'Мобильное приложение на Expo или React Native CLI, работающее с API'],
  [st(5, 1, ['Орта және негізгі компоненттер', 'Окружение и базовые компоненты'], ['Expo', 'View', 'Text', 'StyleSheet', 'Flexbox'],
      ['Expo-да бірінші экранды жина', 'Собери первый экран в Expo'],
      ['Макет екі платформада бірдей', 'Вёрстка одинакова на двух платформах']),
   st(10, 2, ['Навигация және тізімдер', 'Навигация и списки'], ['React Navigation', 'FlatList', 'Forms', 'Hooks'],
      ['Тізімі мен толық ақпарат экраны бар қосымша жаса', 'Сделай приложение со списком и экраном деталей'],
      ['FlatList ұзақ тізімде баяуламайды', 'FlatList не тормозит на длинном списке']),
   st(12, 3, ['Желі, нативті модульдер, жариялау', 'Сеть, нативные модули, публикация'], ['fetch', 'AsyncStorage', 'Native modules', 'EAS Build'],
      ['API мен офлайн-сақтауды қосып, build жина', 'Добавь API и офлайн-хранение, собери build'],
      ['Қосымша құрылғыда іске қосылады', 'Приложение запускается на устройстве'])],
  ['Бұл фреймворктің бастапқы коды; оқу материалдары reactnative.dev сайтында', 'Это исходный код фреймворка; учебные материалы — на сайте reactnative.dev']);

rm('android/compose-samples', 'reference',
  ['Kotlin; Android Studio', 'Kotlin; Android Studio'],
  ['Мысалдардағы үлгілермен жасалған өз Compose экраның: тақырып, анимация, күй', 'Свой экран на Compose по паттернам из примеров: тема, анимации, состояние'],
  [st(6, 1, ['Негіздер: JetNews', 'Основы: JetNews'], ['Composable', 'Material 3', 'Theming', 'Preview'],
      ['JetNews-ты ашып, бір экранды өзгерт', 'Открой JetNews и измени один экран'],
      ['Recomposition қашан болатынын түсіндіресің', 'Объясняешь, когда происходит recomposition']),
   st(8, 2, ['Күй және тізімдер: Jetchat, Reply', 'Состояние и списки: Jetchat, Reply'], ['State hoisting', 'LazyColumn', 'Adaptive layouts'],
      ['Reply-дегі адаптивті макетті өз экраныңда қайтала', 'Повтори адаптивный макет Reply на своём экране'],
      ['Экран планшетте де дұрыс', 'Экран корректен и на планшете']),
   st(8, 3, ['Анимация және кастом UI: Jetsnack, JetLagged', 'Анимации и кастомный UI: Jetsnack, JetLagged'], ['Animations', 'Custom layouts', 'Canvas'],
      ['Jetsnack-тағыдай анимация мен кастом макет жаса', 'Сделай анимацию и кастомный layout как в Jetsnack'],
      ['Анимация 60 fps-те тегіс', 'Анимация плавная при 60 fps'])]);

rm('android/nowinandroid', 'reference',
  ['Kotlin, Jetpack Compose негіздері', 'Kotlin, основы Jetpack Compose'],
  ['Now in Android архитектурасымен жасалған өз модульдік қосымшаң', 'Своё модульное приложение по архитектуре Now in Android'],
  [st(6, 2, ['Архитектура', 'Архитектура'], ['UI layer', 'Data layer', 'Unidirectional data flow', 'ViewModel'],
      ['Архитектура құжатын оқып, деректер ағынының сызбасын сал', 'Изучи документ архитектуры и нарисуй схему потока данных'],
      ['Қабаттардың жауапкершілігін түсіндіресің', 'Объясняешь ответственность слоёв']),
   st(8, 3, ['Модульдер және офлайн', 'Модули и офлайн'], ['Modularization', 'Offline-first', 'Room', 'WorkManager', 'Hilt'],
      ['Модульдік құрылыммен офлайн режимі бар фича жаса', 'Сделай фичу с офлайн-режимом в модульной структуре'],
      ['Желісіз дерек көрсетіледі', 'Данные показываются без сети']),
   st(6, 3, ['Тестілеу және сапа', 'Тестирование и качество'], ['Test doubles', 'Screenshot tests', 'Baseline profiles'],
      ['Фичаңа test doubles-пен тест жаз', 'Напиши тесты фичи с test doubles'],
      ['Тесттер CI-де өтеді', 'Тесты проходят в CI'])]);

rm('Kotlin/kotlin-koans', 'practice',
  ['Java немесе басқа тілде бағдарламалау тәжірибесі', 'Опыт программирования на Java или другом языке'],
  ['Барлық koans-ты аяқтап, Kotlin-де шағын CLI-утилита жазу', 'Пройти все koans и написать небольшую CLI-утилиту на Kotlin'],
  [st(3, 1, ['Introduction', 'Introduction'], ['Functions', 'Named arguments', 'String templates', 'Nullable types', 'Lambdas'],
      ['Introduction бөлімінің тапсырмаларын шеш', 'Реши задания раздела Introduction'],
      ['Null-safety-ді түсіндіресің', 'Объясняешь null-safety']),
   st(3, 2, ['Conventions және Collections', 'Conventions и Collections'], ['Operator overloading', 'Destructuring', 'Collections API', 'Sequences'],
      ['Conventions пен Collections бөлімдерін өт', 'Пройди разделы Conventions и Collections'],
      ['Коллекция операцияларын циклсіз жазасың', 'Пишешь операции с коллекциями без циклов']),
   st(3, 3, ['Properties, Builders, Generics', 'Properties, Builders, Generics'], ['Delegated properties', 'Type-safe builders', 'Generics'],
      ['Соңғы бөлімдерді өтіп, өз DSL-іңді жаз', 'Пройди последние разделы и напиши свой DSL'],
      ['DSL типтік тексерістен өтеді', 'DSL проходит проверку типов'])],
  ['README-ге сәйкес репозиторий ескірген: koans-тың жаңа нұсқасы play.kotlinlang.org/koans және EduTools плагинінде', 'По README репозиторий устарел: актуальная версия koans — на play.kotlinlang.org/koans и в плагине EduTools']);

rm('flutter/samples', 'reference',
  ['Flutter негіздері', 'Основы Flutter'],
  ['Мысалдардан алынған үлгілермен жасалған, тесттері бар өз Flutter-қосымшаң', 'Своё Flutter-приложение с тестами на паттернах из примеров'],
  [st(5, 1, ['Бастапқы мысалдар', 'Начальные примеры'], ['Widgets', 'Navigation', 'Forms', 'Animations'],
      ['3 мысалды іске қосып, кодындағы үлгілерді жаз', 'Запусти 3 примера и выпиши паттерны из их кода'],
      ['Әр мысалдың архитектурасын түсіндіресің', 'Объясняешь архитектуру каждого примера']),
   st(8, 2, ['Архитектура және күй', 'Архитектура и состояние'], ['Provider', 'State management', 'Compass app', 'Testing'],
      ['Архитектуралық мысалдың үлгісін өз қосымшаңа көшір', 'Перенеси паттерн архитектурного примера в своё приложение'],
      ['Қосымшаның тесттері өтеді', 'Тесты приложения проходят']),
   st(6, 3, ['Платформалық интеграция', 'Платформенная интеграция'], ['Platform channels', 'Add-to-app', 'Web', 'Desktop'],
      ['Platform channel немесе add-to-app мысалын қайтала', 'Повтори пример platform channel или add-to-app'],
      ['Нативті код Flutter-мен деректер алмасады', 'Нативный код обменивается данными с Flutter'])]);

rm('android/architecture-samples', 'reference',
  ['Kotlin, Compose негіздері', 'Kotlin, основы Compose'],
  ['TODO-қосымшаның архитектурасына негізделген өз CRUD-қосымшаң', 'Своё CRUD-приложение на архитектуре TODO-примера'],
  [st(4, 2, ['Қабаттар', 'Слои'], ['ViewModel', 'Repository', 'Room', 'StateFlow'],
      ['TODO-қосымшаның кодын қабаттар бойынша талда', 'Разбери код TODO-приложения по слоям'],
      ['Деректер ағынын түсіндіресің', 'Объясняешь поток данных']),
   st(6, 2, ['DI және навигация', 'DI и навигация'], ['Hilt', 'Navigation Compose', 'Coroutines'],
      ['Өз қосымшаңа Hilt пен навигацияны дәл осылай қос', 'Добавь Hilt и навигацию в своё приложение так же'],
      ['Тәуелділіктер Hilt арқылы беріледі', 'Зависимости передаются через Hilt']),
   st(6, 3, ['Тестілеу', 'Тестирование'], ['Unit tests', 'Instrumented tests', 'Fakes'],
      ['Репозиторий мен ViewModel-ге тест жаз', 'Напиши тесты к репозиторию и ViewModel'],
      ['Тесттер fake-тармен тұрақты өтеді', 'Тесты стабильно проходят с fake'])]);

rm('Solido/awesome-flutter', 'collection',
  ['Flutter негіздері', 'Основы Flutter'],
  ['Каталогтан таңдалған 5 пакет қолданылған және сыналған қосымша', 'Приложение с 5 выбранными из каталога и протестированными пакетами'],
  [st(4, 1, ['Оқу ресурстары', 'Учебные ресурсы'], ['Introduction', 'Tutorials', 'Videos'],
      ['Каталогтан 2 туториалды таңдап, өт', 'Выбери и пройди 2 туториала из каталога'],
      ['Туториалдардың нәтижесі репозиторийде', 'Результаты туториалов в репозитории']),
   st(6, 2, ['Пакеттер', 'Пакеты'], ['State management', 'Networking', 'Storage', 'UI components'],
      ['Әр санаттан бір пакетті таңдап, қосымшаға қос', 'Выбери по пакету из каждой категории и подключи к приложению'],
      ['Пакеттің қолдау белсенділігін тексердің', 'Проверена активность поддержки пакета']),
   st(6, 3, ['Ашық қосымшалар', 'Open-source приложения'], ['Open source apps', 'Architecture', 'Testing'],
      ['Бір ашық Flutter-қосымшаның кодын талдап, бір фичаны қайтала', 'Разбери код open-source Flutter-приложения и повтори одну фичу'],
      ['Фича сенің қосымшаңда жұмыс істейді', 'Фича работает в твоём приложении'])]);

/* ===== Алгоритмдер / Алгоритмы ===== */
rm('TheAlgorithms/Python', 'reference',
  ['Python негіздері', 'Основы Python'],
  ['Таңдалған 20 алгоритмнің өз іске асыруы, doctest-тері бар', 'Собственная реализация 20 выбранных алгоритмов с doctest'],
  [st(8, 1, ['Сұрыптау және іздеу', 'Сортировки и поиск'], ['sorts', 'searches', 'doctest'],
      ['5 сұрыптау мен 3 іздеуді өзің жазып, репозиторий нұсқасымен салыстыр', 'Напиши 5 сортировок и 3 поиска сам и сравни с версией репозитория'],
      ['doctest-тер өтеді', 'doctest проходят']),
   st(10, 2, ['Құрылымдар және графтар', 'Структуры и графы'], ['data_structures', 'graphs', 'linked_list', 'heap'],
      ['data_structures пен graphs бумаларынан 6 алгоритмді талда', 'Разбери 6 алгоритмов из папок data_structures и graphs'],
      ['Графтағы ең қысқа жолды түсіндіресің', 'Объясняешь кратчайший путь в графе']),
   st(10, 3, ['DP және математика', 'DP и математика'], ['dynamic_programming', 'maths', 'backtracking', 'ciphers'],
      ['DP мен backtracking-тен 6 есептің шешімін түсіндіріп жаз', 'Разбери и напиши 6 решений из DP и backtracking'],
      ['Әр шешімнің күрделілігі көрсетілген', 'Для каждого решения указана сложность'])]);

rm('TheAlgorithms/Java', 'reference',
  ['Java негіздері', 'Основы Java'],
  ['JUnit тесттері бар өз алгоритмдер кітапханаң', 'Своя библиотека алгоритмов с тестами JUnit'],
  [st(8, 1, ['Сұрыптау және іздеу', 'Сортировки и поиск'], ['sorts', 'searches', 'JUnit'],
      ['Сұрыптау алгоритмдерін жазып, JUnit тесттерімен тексер', 'Напиши сортировки и проверь тестами JUnit'],
      ['Тесттер өтеді', 'Тесты проходят']),
   st(10, 2, ['Деректер құрылымдары', 'Структуры данных'], ['datastructures', 'Generics', 'Collections'],
      ['Generics-пен стек, кезек және ағаш жаз', 'Напиши стек, очередь и дерево на generics'],
      ['Құрылымдар Java Collections-пен салыстырылды', 'Структуры сравнены с Java Collections']),
   st(10, 3, ['Графтар мен DP', 'Графы и DP'], ['graphs', 'dynamicprogramming', 'greedyalgorithms'],
      ['Графтар мен DP бумаларынан 6 алгоритмді талда', 'Разбери 6 алгоритмов из папок graphs и dynamicprogramming'],
      ['Алгоритм таңдауын негіздейсің', 'Обосновываешь выбор алгоритма'])]);

rm('algorithm-visualizer/algorithm-visualizer', 'tool',
  ['Алгоритмдер туралы бастапқы түсінік', 'Начальное представление об алгоритмах'],
  ['Өз алгоритміңнің визуализациясы және оны түсіндіретін қысқа видео', 'Визуализация своего алгоритма и короткое видео с объяснением'],
  [st(3, 1, ['Сұрыптауды бақылау', 'Наблюдение за сортировками'], ['Bubble sort', 'Merge sort', 'Quick sort', 'Visualization'],
      ['Сайттағы сұрыптауларды қадамдап көріп, айырмасын жаз', 'Пройди сортировки на сайте по шагам и запиши разницу'],
      ['Әр сұрыптаудың қадамдарын ауызша түсіндіресің', 'Устно объясняешь шаги каждой сортировки']),
   st(4, 2, ['Графтар мен DP', 'Графы и DP'], ['BFS', 'DFS', 'Dijkstra', 'Dynamic Programming'],
      ['Граф пен DP визуализацияларын өз мысалыңмен іске қос', 'Запусти визуализации графов и DP на своём примере'],
      ['Визуализация бойынша нәтижені болжайсың', 'Предсказываешь результат по визуализации']),
   st(4, 3, ['Өз визуализацияң', 'Своя визуализация'], ['Tracer API', 'Contributing', 'JavaScript'],
      ['Tracer API-мен өз алгоритміңнің визуализациясын жаса', 'Сделай визуализацию своего алгоритма через Tracer API'],
      ['Визуализация браузерде жұмыс істейді', 'Визуализация работает в браузере'])]);

rm('ryanmcdermott/clean-code-javascript', 'reference',
  ['JavaScript жобасы', 'Свой JavaScript-проект'],
  ['Clean Code қағидаларымен рефакторинг жасалған және тесттері сақталған жоба', 'Проект после рефакторинга по Clean Code с сохранёнными тестами'],
  [st(3, 1, ['Айнымалылар мен функциялар', 'Переменные и функции'], ['Naming', 'Functions', 'Default arguments', 'Side effects'],
      ['Жобаңдағы 10 функцияның атауы мен көлемін түзет', 'Исправь имена и размер 10 функций своего проекта'],
      ['Әр функция бір ғана іс атқарады', 'Каждая функция делает одно дело']),
   st(4, 2, ['Объектілер, кластар, SOLID', 'Объекты, классы, SOLID'], ['Classes', 'SOLID', 'Composition'],
      ['Бір модульді SOLID бойынша қайта құрылымда', 'Перестрой один модуль по SOLID'],
      ['Әр SOLID қағидасына мысал келтіресің', 'Приводишь пример на каждый принцип SOLID']),
   st(3, 2, ['Тест, қателер, пішімдеу', 'Тесты, ошибки, форматирование'], ['Testing', 'Error handling', 'Formatting', 'Comments'],
      ['Рефакторинг жасалған кодқа тест пен қате өңдеуді қос', 'Добавь тесты и обработку ошибок к отрефакторенному коду'],
      ['Тесттер рефакторингтен кейін де өтеді', 'Тесты проходят после рефакторинга'])]);

rm('ossu/math', 'course',
  ['Мектеп математикасы', 'Школьная математика'],
  ['Таңдалған advanced тақырып бойынша дәлелдемелер жазылған жоба', 'Проект с доказательствами по выбранной продвинутой теме'],
  [st(40, 1, ['Математикалық ойлау', 'Математическое мышление'], ['Mathematical thinking', 'Proofs', 'Logic'],
      ['Introduction to Mathematical Thinking курсының тапсырмаларын орында', 'Выполни задания курса Introduction to Mathematical Thinking'],
      ['Қарапайым тұжырымды дәлелдейсің', 'Доказываешь простое утверждение']),
   st(120, 2, ['Calculus және дифференциалдық теңдеулер', 'Матанализ и дифференциальные уравнения'], ['Calculus', 'Differential equations'],
      ['Calculus курстарының problem set-терін шығар', 'Реши problem set курсов Calculus'],
      ['Туынды мен интегралды қолданбалы есепте қолданасың', 'Применяешь производную и интеграл в прикладной задаче']),
   st(120, 2, ['Дискретті математика, сызықтық алгебра, ықтималдық', 'Дискретная математика, линейная алгебра, вероятность'], ['Discrete mathematics', 'Linear algebra', 'Probability', 'Statistics'],
      ['Әр курстың тапсырмаларын код арқылы тексер', 'Проверяй задания каждого курса кодом'],
      ['Матрицалық түрлендіруді геометриялық түсіндіресің', 'Геометрически объясняешь матричное преобразование']),
   st(140, 3, ['Анализ, алгебра және advanced', 'Анализ, алгебра и advanced'], ['Real analysis', 'Abstract algebra', 'Topology', 'Mathematical logic'],
      ['Core бөлімінің соңғы курстары мен бір advanced тақырыпты өт', 'Пройди последние курсы Core и одну продвинутую тему'],
      ['Курстың емтихан есептерін шығарасың', 'Решаешь экзаменационные задачи курса'])]);

rm('afshinea/stanford-cs-229-machine-learning', 'reference',
  ['Сызықтық алгебра, ықтималдық, Python', 'Линейная алгебра, вероятность, Python'],
  ['Шпаргалкадағы әр тақырыпқа өз кодыңдағы мысал жазылған конспект', 'Конспект с примером в своём коде на каждую тему шпаргалок'],
  [st(4, 1, ['Refresher', 'Refresher'], ['Probabilities and Statistics', 'Linear Algebra and Calculus'],
      ['Refresher шпаргалкаларын оқып, формулаларды NumPy-да тексер', 'Изучи шпаргалки Refresher и проверь формулы в NumPy'],
      ['Формулаларды есте жаңғыртасың', 'Воспроизводишь формулы по памяти']),
   st(6, 2, ['Supervised және unsupervised', 'Supervised и unsupervised'], ['Supervised Learning', 'Unsupervised Learning', 'k-means', 'PCA'],
      ['Әр шпаргалкадан бір алгоритмді нөлден жаз', 'Напиши с нуля по одному алгоритму из каждой шпаргалки'],
      ['Нәтиже scikit-learn-мен сәйкес', 'Результат совпадает со scikit-learn']),
   st(5, 3, ['Deep learning және ML кеңестері', 'Deep learning и советы по ML'], ['Deep Learning', 'Machine Learning Tips and Tricks', 'Bias-variance'],
      ['Бір модельге bias-variance талдауын жаса', 'Проведи анализ bias-variance для одной модели'],
      ['Регуляризацияның әсерін түсіндіресің', 'Объясняешь влияние регуляризации'])]);

rm('yangshun/tech-interview-handbook', 'reference',
  ['Алгоритмдер мен деректер құрылымдарының негіздері', 'Основы алгоритмов и структур данных'],
  ['Жаттықтырылған сұхбат циклі: түйіндеме, есептер, behavioral, келіссөз', 'Отработанный цикл собеседования: резюме, задачи, behavioral, переговоры'],
  [st(4, 1, ['Түйіндеме', 'Резюме'], ['Resume', 'Portfolio', 'Applying'],
      ['Resume бөлімі бойынша түйіндемеңді қайта жаз', 'Перепиши резюме по разделу Resume'],
      ['Әр тәжірибе нәтижемен сипатталған', 'Каждый опыт описан через результат']),
   st(30, 2, ['Кодтау сұхбаты', 'Кодинг-интервью'], ['Grind 75', 'Algorithms cheatsheets', 'Study plan'],
      ['Grind 75 жоспары бойынша есептер шығар', 'Решай задачи по плану Grind 75'],
      ['Есепті 30 минутта шешіп, күрделілігін айтасың', 'Решаешь задачу за 30 минут и называешь сложность']),
   st(6, 2, ['Behavioral және келіссөз', 'Behavioral и переговоры'], ['STAR method', 'Behavioral questions', 'Negotiation'],
      ['STAR әдісімен 8 оқиға дайында', 'Подготовь 8 историй по методу STAR'],
      ['Сынақ сұхбатта сенімді жауап бересің', 'Уверенно отвечаешь на пробном интервью'])]);

rm('neetcode-gh/leetcode', 'practice',
  ['Бір тіл, деректер құрылымдарының негіздері', 'Один язык, основы структур данных'],
  ['NeetCode 150 тізімінің бәрін өз бетіңше шешу', 'Самостоятельно решить весь список NeetCode 150'],
  [st(15, 1, ['Массивтер, екі көрсеткіш, терезе', 'Массивы, два указателя, окно'], ['Arrays & Hashing', 'Two Pointers', 'Sliding Window', 'Stack'],
      ['Әр санаттың есептерін алдымен өзің шеш, кейін шешіммен салыстыр', 'Сначала решай задачи категории сам, затем сравнивай с решением'],
      ['Easy есептерді 15 минутта шешесің', 'Решаешь easy за 15 минут']),
   st(20, 2, ['Іздеу, тізімдер, ағаштар', 'Поиск, списки, деревья'], ['Binary Search', 'Linked List', 'Trees', 'Tries', 'Heap'],
      ['Бұл санаттардың барлық есебін шеш', 'Реши все задачи этих категорий'],
      ['Ағашты рекурсиясыз да айналасың', 'Обходишь дерево и без рекурсии']),
   st(25, 3, ['Графтар, DP, greedy', 'Графы, DP, greedy'], ['Backtracking', 'Graphs', 'Advanced Graphs', '1-D DP', '2-D DP', 'Greedy', 'Intervals'],
      ['Күрделі санаттардың есептерін шығарып, үлгілерін жаз', 'Реши задачи сложных категорий и выпиши паттерны'],
      ['Есептің үлгісін 5 минутта танисың', 'Распознаёшь паттерн задачи за 5 минут'])]);

/* ===== Орыс тіліндегі материалдар / Русскоязычные материалы ===== */
rm('javascript-tutorial/ru.javascript.info', 'course',
  ['Алдын ала білім қажет емес; орыс тілін оқу', 'Предварительные знания не нужны; чтение на русском'],
  ['Оқулық тапсырмаларына негізделген, DOM мен fetch қолданылған қосымша', 'Приложение с DOM и fetch по мотивам задач учебника'],
  [st(20, 1, ['1-бөлім: тіл негіздері', 'Часть 1: основы языка'], ['Variables', 'Types', 'Functions', 'Objects', 'Arrays'],
      ['Әр тараудың тапсырмаларын шешімге қарамай шеш', 'Решай задачи каждой главы без подглядывания в решения'],
      ['Тапсырмалардың 80%-ы өз бетіңше шешілді', '80% задач решены самостоятельно']),
   st(25, 2, ['1-бөлім: тереңірек', 'Часть 1: продвинутые темы'], ['Closures', 'Prototypes', 'Classes', 'Promises', 'async/await', 'Modules'],
      ['Promise мен async тарауларының тапсырмаларын орында', 'Выполни задачи глав про Promise и async'],
      ['Асинхронды кодтың орындалу ретін болжайсың', 'Предсказываешь порядок выполнения асинхронного кода']),
   st(20, 2, ['2-бөлім: браузер', 'Часть 2: браузер'], ['DOM', 'Events', 'Forms', 'Network requests'],
      ['DOM мен оқиғалар тапсырмаларын шешіп, fetch-пен қосымша жаса', 'Реши задачи по DOM и событиям, сделай приложение с fetch'],
      ['Оқиғаларды делегирлеуді қолданасың', 'Используешь делегирование событий']),
   st(10, 3, ['3-бөлім: қосымша мақалалар', 'Часть 3: дополнительные статьи'], ['Regular expressions', 'Web components', 'Animation'],
      ['Регулярлы өрнектер мен веб-компоненттер тарауларын өт', 'Пройди главы о регулярных выражениях и веб-компонентах'],
      ['Өз веб-компонентіңді жазасың', 'Пишешь свой веб-компонент'])]);

rm('rodion-m/self_taught_programming', 'collection',
  ['Орыс тілін оқу', 'Чтение на русском'],
  ['Базадағы материалдармен құрастырылған жеке оқу жоспары және оның бірінші айы', 'Личный учебный план из материалов базы и первый месяц по нему'],
  [st(3, 1, ['Бастаушыларға арналған бөлім', 'Раздел для начинающих'], ['Начинающим', 'Learning plan'],
      ['«Начинающим» бөлімін оқып, жоспар құр', 'Изучи раздел «Начинающим» и составь план'],
      ['Жоспарда апталық мақсаттар бар', 'В плане есть цели на неделю']),
   st(25, 2, ['Курстар мен кітаптар', 'Курсы и книги'], ['Бесплатные курсы', 'Алгоритмы и структуры данных', 'Книги и статьи'],
      ['Тегін курстар мен алгоритмдер бөлімінен бір курсты өт', 'Пройди один курс из разделов бесплатных курсов и алгоритмов'],
      ['Курс тапсырмалары орындалды', 'Задания курса выполнены']),
   st(15, 3, ['Терең тақырыптар', 'Глубокие темы'], ['Многопоточность', 'Сборка мусора', 'Доклады'],
      ['Көп ағындылық немесе GC бойынша баяндамаларды көріп, тәжірибе жаса', 'Посмотри доклады по многопоточности или GC и проведи эксперимент'],
      ['Тәжірибе нәтижесін түсіндіресің', 'Объясняешь результат эксперимента'])]);

rm('ru-python-beginners/faq', 'collection',
  ['Орыс тілін оқу', 'Чтение на русском'],
  ['FAQ ресурстарымен меңгерілген Python және тапсырмалар платформасында шығарылған есептер', 'Python по ресурсам FAQ и решённые задачи на платформе задач'],
  [st(4, 1, ['Бастау және орта', 'Старт и окружение'], ['С чего начать', 'Редакторы и IDE'],
      ['«С чего начать» бөлімін оқып, IDE орнат', 'Изучи раздел «С чего начать» и установи IDE'],
      ['Бірінші скрипт іске қосылды', 'Первый скрипт запущен']),
   st(25, 1, ['Кітап немесе туториал', 'Книга или туториал'], ['Книги', 'Туториалы', 'Курсы'],
      ['Ұсынылған бір кітапты немесе курсты соңына дейін өт', 'Пройди до конца одну рекомендованную книгу или курс'],
      ['Әр тараудың жаттығулары орындалды', 'Упражнения каждой главы выполнены']),
   st(15, 2, ['Тапсырмалар', 'Задачи'], ['Задачи', 'Practice'],
      ['«Задачи» бөліміндегі платформада 30 есеп шығар', 'Реши 30 задач на платформе из раздела «Задачи»'],
      ['Есептер бірінші әрекеттен өтеді', 'Задачи проходят с первой попытки'])]);

rm('EbookFoundation/free-programming-books/blob/main/courses/free-courses-ru.md', 'collection',
  ['Орыс тілін оқу; бағытты таңдап қою', 'Чтение на русском; выбранное направление'],
  ['Тізімнен таңдалған екі курстың сертификаты немесе қорытынды жобасы', 'Сертификаты или итоговые проекты двух курсов из списка'],
  [st(2, 1, ['Курс таңдау', 'Выбор курса'], ['Уровни', 'Языки', 'Дизайн и архитектура'],
      ['Деңгейлер бөлімін ескеріп, өз тіліңе 2 курс таңда', 'С учётом раздела «Уровни» выбери 2 курса по своему языку'],
      ['Курстардың тегін екені тексерілді', 'Проверено, что курсы бесплатны']),
   st(30, 1, ['Бірінші курс', 'Первый курс'], ['JavaScript', 'Python', 'Java', 'Go'],
      ['Бірінші курсты барлық тапсырмасымен өт', 'Пройди первый курс со всеми заданиями'],
      ['Курс аяқталды', 'Курс завершён']),
   st(30, 2, ['Екінші курс', 'Второй курс'], ['Algorithms', 'Databases', 'Web'],
      ['Бірінші курсты толықтыратын екінші курсты өт', 'Пройди второй курс, дополняющий первый'],
      ['Екі курстың білімі бір жобада қолданылды', 'Знания двух курсов применены в одном проекте'])]);

rm('rosharp/Programming-Books', 'collection',
  ['Ағылшын тілін оқу (кітаптардың көбі ағылшынша)', 'Чтение на английском (большинство книг на английском)'],
  ['Бір бағыт бойынша 2 кітап және олардың идеяларын қолданған жоба', 'Две книги по одному направлению и проект с применением их идей'],
  [st(2, 1, ['Бөлім таңдау', 'Выбор раздела'], ['Languages', 'Algorithms', 'Linux', 'SQL', 'WebDev', 'DevOps', 'Testing'],
      ['README.org-дағы бөлімнен 2 кітап таңда', 'Выбери 2 книги в разделе README.org'],
      ['Таңдау мақсатқа сай негізделген', 'Выбор обоснован целью']),
   st(30, 2, ['Бірінші кітап', 'Первая книга'], ['Reading plan', 'Exercises'],
      ['Кітапты жоспармен оқып, жаттығуларын орында', 'Читай книгу по плану и выполняй упражнения'],
      ['Әр тарауға қысқа конспект бар', 'К каждой главе есть короткий конспект']),
   st(25, 3, ['Екінші кітап және жоба', 'Вторая книга и проект'], ['Practice', 'Project'],
      ['Екінші кітаптың идеяларын жобада қолдан', 'Примени идеи второй книги в проекте'],
      ['Жоба README-де кітапқа сілтеме бар', 'В README проекта есть ссылки на книгу'])]);

rm('fivol/lectorea', 'tool',
  ['Бағытты таңдап қою', 'Выбранное направление'],
  ['Каталогтан құрастырылған видеолекциялар курсы және оның конспектісі', 'Курс из видеолекций каталога и конспект к нему'],
  [st(2, 1, ['Каталогпен танысу', 'Знакомство с каталогом'], ['Catalogue', 'Universities', 'Search'],
      ['Lectorea-да өз пәніңнің лекцияларын тауып, тізім жаса', 'Найди в Lectorea лекции по своему предмету и составь список'],
      ['Тізімде 1 толық курс бар', 'В списке есть 1 полный курс']),
   st(20, 2, ['Лекцияларды көру', 'Просмотр лекций'], ['Video lectures', 'Notes'],
      ['Курстың лекцияларын конспектімен қара', 'Смотри лекции курса с конспектом'],
      ['Әр лекцияға 3 негізгі ой жазылған', 'По каждой лекции записаны 3 главные мысли']),
   st(15, 3, ['Тапсырмалар', 'Задания'], ['Problem sets', 'Practice'],
      ['Курстың семинар тапсырмаларын немесе ұқсас есептерді шеш', 'Реши семинарские задания курса или похожие задачи'],
      ['Тапсырмалардың көбі шешілді', 'Большинство заданий решено'])]);

rm('esokolov/ml-course-hse', 'course',
  ['Python, сызықтық алгебра, ықтималдық теориясы', 'Python, линейная алгебра, теория вероятностей'],
  ['Курстың үй тапсырмалары мен соңғы жылдағы жарысқа қатысу', 'Домашние задания курса и участие в соревновании последнего года'],
  [st(20, 1, ['Сызықтық модельдер', 'Линейные модели'], ['Linear regression', 'Gradient descent', 'Regularization', 'Metrics'],
      ['Соңғы жылдың алғашқы семинарларын шешіп, градиенттік түсуді жаз', 'Реши первые семинары последнего года и напиши градиентный спуск'],
      ['Регуляризацияның әсерін түсіндіресің', 'Объясняешь влияние регуляризации']),
   st(25, 2, ['Классификация және ағаштар', 'Классификация и деревья'], ['Logistic regression', 'SVM', 'Decision trees', 'Bagging', 'Random forest'],
      ['Ағаш пен ансамбль бойынша үй тапсырмасын орында', 'Выполни домашнее задание по деревьям и ансамблям'],
      ['Ансамбльдің неге жақсы жұмыс істейтінін түсіндіресің', 'Объясняешь, почему ансамбль работает лучше']),
   st(25, 3, ['Бустинг және advanced', 'Бустинг и advanced'], ['Gradient boosting', 'Clustering', 'Neural networks'],
      ['Бустинг бойынша тапсырма мен жарысқа модель жібер', 'Сделай задание по бустингу и отправь модель в соревнование'],
      ['Нәтиже бастапқы деңгейден жоғары', 'Результат выше бейзлайна'])],
  ['Репозиторийде әр жылдың материалы бөлек бумада; ең соңғы жылдың бумасын таңда', 'Материалы каждого года в отдельной папке; выбирай папку последнего года']);

rm('girafe-ai/ml-course', 'course',
  ['prerequisites.md файлындағы талаптар: Python, сызықтық алгебра, ықтималдық', 'Требования из prerequisites.md: Python, линейная алгебра, вероятность'],
  ['Курстың үй тапсырмалары және емтихан бағдарламасы бойынша дайындық', 'Домашние задания курса и подготовка по программе экзамена'],
  [st(15, 1, ['Week 0: негіздер', 'Week 0: основы'], ['Linear algebra recap', 'Naive Bayes', 'Linear regression', 'Linear classification'],
      ['week0 бумаларының ноутбуктарын орында', 'Выполни ноутбуки папок week0'],
      ['Naive Bayes-ті нөлден жазасың', 'Пишешь Naive Bayes с нуля']),
   st(25, 2, ['Классикалық ML', 'Классический ML'], ['Trees', 'Ensembles', 'Boosting', 'Unsupervised learning'],
      ['homeworks/ ішіндегі тапсырмаларды кезекпен тапсыр', 'Сдавай по порядку задания из homeworks/'],
      ['Тапсырмалардың тесттері өтеді', 'Тесты заданий проходят']),
   st(25, 3, ['Нейрожелілер', 'Нейросети'], ['Neural networks', 'PyTorch', 'NLP basics'],
      ['Нейрожелі апталарының ноутбуктарын өтіп, емтихан бағдарламасымен қайтала', 'Пройди ноутбуки недель по нейросетям и повтори по программе экзамена'],
      ['Емтихан сұрақтарына жауап бересің', 'Отвечаешь на вопросы экзамена'])]);

rm('jlevy/the-art-of-command-line/blob/master/README-ru.md', 'reference',
  ['Терминалға қатынас; орыс тілін оқу', 'Доступ к терминалу; чтение на русском'],
  ['Шпаргалкадағы трюктермен жиналған өз алиастар мен скрипттер жиыны', 'Свой набор алиасов и скриптов из приёмов шпаргалки'],
  [st(3, 1, ['Негіздер және күнделікті қолдану', 'Основы и повседневное использование'], ['bash', 'man', 'history', 'Ctrl-R'],
      ['Әр бөлімнен 10 трюкті сынап, жиі қолданатындарын белгіле', 'Опробуй по 10 приёмов из каждого раздела и отметь полезные'],
      ['Тарих пен навигацияны тышқансыз қолданасың', 'Пользуешься историей и навигацией без мыши']),
   st(3, 2, ['Файлдар мен деректерді өңдеу', 'Обработка файлов и данных'], ['grep', 'sort', 'uniq', 'xargs', 'awk'],
      ['Лог файлды бір жолдық командалармен талда', 'Разбери лог-файл однострочниками'],
      ['Есептер скриптсіз шешіледі', 'Задачи решаются без скриптов']),
   st(3, 2, ['Жүйені жөндеу', 'Системная отладка'], ['top', 'strace', 'netstat', 'df/du'],
      ['Жүйенің баяулау себебін табуды жаттықтыр', 'Потренируйся находить причину замедления системы'],
      ['Ресурсты көп жейтін процесті табасың', 'Находишь процесс, съедающий ресурсы'])],
  ['Аударма ағылшынша түпнұсқадан кешігуі мүмкін; күмән болса, түпнұсқаны қара', 'Перевод может отставать от английского оригинала; при сомнениях сверяйся с ним']);

/* ===== Университет бағдарламалары / Университетские программы ===== */
rm('PKUFlyingPig/cs-self-learning', 'collection',
  ['Бағдарламалау негіздері; қытай немесе ағылшын тіліндегі мәтінді оқу', 'Основы программирования; чтение текста на китайском или английском'],
  ['Нұсқаулықтағы бір курстың барлық зертханасы аяқталған және жарияланған', 'Полностью выполненные и опубликованные лабораторные одного курса из путеводителя'],
  [st(3, 1, ['Нұсқаулықпен танысу', 'Знакомство с путеводителем'], ['Learning path', 'Tools', 'Mathematics'],
      ['Ұсынылған оқу жолынан өз бағытыңды таңда', 'Выбери своё направление в рекомендуемом учебном пути'],
      ['Жоспарда 3 курс бар', 'В плане 3 курса']),
   st(60, 2, ['Негізгі курс', 'Базовый курс'], ['Programming introduction', 'Data structures', 'Systems'],
      ['Таңдалған курстың лекциялары мен зертханаларын өт (мысалы, CS61A)', 'Пройди лекции и лабораторные выбранного курса (например, CS61A)'],
      ['Зертханалардың автотексерістері өтті', 'Автопроверки лабораторных пройдены']),
   st(80, 3, ['Жүйелік немесе ЖИ курсы', 'Системный курс или курс ИИ'], ['Operating systems', 'Networks', 'Machine learning'],
      ['Бір жүйелік немесе ЖИ курсының зертханаларын толық аяқта', 'Полностью заверши лабораторные одного системного курса или курса ИИ'],
      ['Зертханалар GitHub-та жарияланды', 'Лабораторные опубликованы на GitHub'])],
  ['Нұсқаулық қытай тілінде (ағылшынша аудармасы бар); курстардың өзі көбіне ағылшынша', 'Путеводитель на китайском (есть английский перевод); сами курсы в основном на английском']);

rm('PKUanonym/REKCARC-TSC-UHT', 'collection',
  ['Қытай тіліндегі мәтінді аудармашымен оқу; университет бағдарламасы туралы түсінік', 'Чтение китайского через переводчик; понимание университетской программы'],
  ['Цинхуа курсының материалдарымен өтілген бір пәннің есептері мен конспектісі', 'Задачи и конспект одного предмета по материалам курса Цинхуа'],
  [st(3, 1, ['Курстар картасы', 'Карта курсов'], ['Curriculum', 'Course guides'],
      ['Курс тізімінен бір пәнді таңдап, материалдарын жина', 'Выбери предмет в списке курсов и собери его материалы'],
      ['Пәннің бағдарламасы түсінікті', 'Программа предмета понятна']),
   st(40, 2, ['Пәнді оқу', 'Изучение предмета'], ['Lecture notes', 'Homework', 'Exams'],
      ['Конспектілер мен үй тапсырмаларын қолданып пәнді өт', 'Пройди предмет по конспектам и домашним заданиям'],
      ['Өткен жылдардың емтихан есептерін шығарасың', 'Решаешь экзаменационные задачи прошлых лет'])],
  ['Материалдар қытай тілінде; репозиторийдің README-сі тек құрылымды береді, мазмұны бумалар ішінде', 'Материалы на китайском; README даёт только структуру, содержание — внутри папок']);

rm('stanford-cs221/lectures', 'course',
  ['Python, ықтималдық, сызықтық алгебра негіздері', 'Python, основы вероятности и линейной алгебры'],
  ['Лекция кодына негізделген агент: іздеу, MDP немесе байес желісі', 'Агент на основе кода лекций: поиск, MDP или байесовская сеть'],
  [st(12, 2, ['Оқыту', 'Обучение'], ['Learning', 'Gradient descent', 'Backpropagation', 'Deep learning'],
      ['Learning I–III лекцияларының .py файлдарын іске қосып, өзгерт', 'Запусти и измени .py-файлы лекций Learning I–III'],
      ['Градиенттік түсуді нөлден жазасың', 'Пишешь градиентный спуск с нуля']),
   st(12, 3, ['Іздеу және RL', 'Поиск и RL'], ['Search', 'MDP', 'Reinforcement learning', 'Policy gradient'],
      ['Search және RL лекцияларының кодымен ойыншы агент жаса', 'Сделай игрового агента по коду лекций Search и RL'],
      ['Агент стратегияны жақсартады', 'Агент улучшает стратегию']),
   st(10, 3, ['Ойындар, байес желілері, логика', 'Игры, байесовские сети, логика'], ['Games', 'Bayesian networks', 'Gibbs sampling', 'First-order logic'],
      ['Байес желісінде қорытынды шығаратын мысал жаса', 'Сделай пример вывода в байесовской сети'],
      ['Ықтималдықты қолмен және кодпен есептейсің', 'Считаешь вероятность вручную и кодом'])]);

rm('google/comprehensive-rust', 'course',
  ['Бір бағдарламалау тілін сенімді білу', 'Уверенное знание одного языка программирования'],
  ['Курс жаттығуларын аяқтап, конкуренттілігі бар шағын Rust-қызмет жазу', 'Выполнить упражнения курса и написать небольшой Rust-сервис с конкурентностью'],
  [st(8, 1, ['Rust Fundamentals: 1–2 күн', 'Rust Fundamentals: дни 1–2'], ['Types', 'Control flow', 'Pattern matching', 'Methods', 'Traits'],
      ['Әр сессияның жаттығуларын орында', 'Выполняй упражнения каждой сессии'],
      ['Pattern matching-ті еркін қолданасың', 'Свободно используешь pattern matching']),
   st(8, 2, ['Rust Fundamentals: 3–4 күн', 'Rust Fundamentals: дни 3–4'], ['Ownership', 'Borrowing', 'Lifetimes', 'Iterators', 'Error handling', 'Unsafe'],
      ['Ownership пен lifetimes жаттығуларын шеш', 'Реши упражнения по ownership и lifetimes'],
      ['Borrow checker қатесін өзің түзетесің', 'Сам исправляешь ошибки borrow checker']),
   st(8, 3, ['Конкуренттілік', 'Конкурентность'], ['Threads', 'Channels', 'Send/Sync', 'async'],
      ['Конкуренттілік күнінің жаттығуларын орында', 'Выполни упражнения дня по конкурентности'],
      ['Data race жоқ екенін түсіндіресің', 'Объясняешь, почему нет data race']),
   st(6, 3, ['Арнайы тақырыптар', 'Специальные темы'], ['Android', 'Chromium', 'Bare-metal', 'Idiomatic Rust'],
      ['Бір арнайы бөлімді (Android, Chromium немесе bare-metal) өт', 'Пройди одну специальную часть (Android, Chromium или bare-metal)'],
      ['Бөлімнің мысалы құрастырылып, іске қосылды', 'Пример части собран и запущен'])]);

rm('cs231n/cs231n.github.io', 'course',
  ['Python, NumPy, сызықтық алгебра, матанализ', 'Python, NumPy, линейная алгебра, матанализ'],
  ['Курс assignment-тері және өз CV-жобаң (classification немесе detection)', 'Assignments курса и собственный CV-проект (classification или detection)'],
  [st(15, 1, ['Сызықтық классификация', 'Линейная классификация'], ['kNN', 'Linear classifiers', 'SVM', 'Softmax', 'Optimization'],
      ['Assignment 1: kNN, SVM және softmax-ты NumPy-да жаз', 'Assignment 1: напиши kNN, SVM и softmax на NumPy'],
      ['Градиенттер сандық тексерістен өтеді', 'Градиенты проходят численную проверку']),
   st(20, 2, ['Нейрожелілер және CNN', 'Нейросети и CNN'], ['Backpropagation', 'Neural networks', 'Convolutional networks', 'BatchNorm'],
      ['Assignment 2: модульдік нейрожелі мен CNN жаса', 'Assignment 2: сделай модульную нейросеть и CNN'],
      ['CNN CIFAR-10-да мақсатты дәлдікке жетеді', 'CNN достигает целевой точности на CIFAR-10']),
   st(20, 3, ['Advanced тақырыптар', 'Продвинутые темы'], ['Attention', 'Transformers', 'Generative models', 'Self-supervised learning'],
      ['Assignment 3 немесе соңғы жылдың сәйкес тапсырмасын орында', 'Выполни assignment 3 или соответствующее задание последнего года'],
      ['Генеративті модель нәтижесі визуализацияланған', 'Результат генеративной модели визуализирован'])]);

rm('Developer-Y/cs-video-courses', 'collection',
  ['Ағылшын тіліндегі лекцияларды түсіну', 'Понимание лекций на английском'],
  ['Тізімнен таңдалған бір видеокурсты тапсырмаларымен толық өту', 'Полное прохождение одного видеокурса из списка вместе с заданиями'],
  [st(2, 1, ['Курс таңдау', 'Выбор курса'], ['Introduction to CS', 'Data Structures and Algorithms', 'Systems Programming'],
      ['Бөлімдерден тапсырмалары қолжетімді бір курсты таңда', 'Выбери в разделах курс с доступными заданиями'],
      ['Курстың сайты мен тапсырмалары табылды', 'Найдены сайт и задания курса']),
   st(40, 2, ['Лекциялар', 'Лекции'], ['Video lectures', 'Notes'],
      ['Лекцияларды аптасына 3 рет конспектімен қара', 'Смотри лекции 3 раза в неделю с конспектом'],
      ['Әр лекцияға конспект бар', 'К каждой лекции есть конспект']),
   st(30, 3, ['Тапсырмалар мен жоба', 'Задания и проект'], ['Problem sets', 'Course project'],
      ['Курстың үй тапсырмалары мен жобасын орында', 'Выполни домашние задания и проект курса'],
      ['Жоба курс талаптарына сай', 'Проект соответствует требованиям курса'])]);

/* Sketchbook renderer: draws one roadmap as a hand-drawn SVG notebook page.
   Built with the DOM API only (createElementNS + textContent), no HTML strings.
   Layout follows the resource: course/book = winding river, collection/reference = tree from a hub,
   practice/tool = ladder, narrow screens = vertical spine. Shapes are jittered with a PRNG seeded by
   the repository name, so every course gets its own stable drawing. */
var Sketch = (function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var FONT = "Caveat, 'Segoe Print', 'Comic Sans MS', cursive";
  var C = {
    paper: '#FBF7EE', grid: '#E2EBEC', margin: '#F2B8AE', ink: '#1E3640', soft: '#56707A',
    teal: '#0E8FA6', tealL: '#D3F1F6', gold: '#B07B00', goldL: '#FFE6A0', coral: '#C9563A', coralL: '#FAD6C9',
    green: '#1F8F5A', greenL: '#D5F2E2', sticky: '#FFF1B8', stickyEdge: '#D9B54A', stickyInk: '#4B3A0E', hub: '#E9F5F7'
  };
  var LVL_FILL = [null, C.tealL, C.goldL, C.coralL];
  var LVL_INK = [null, C.teal, C.gold, C.coral];

  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function prng(seed) {
    var a = seed >>> 0;
    return function () { a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function f(n) { return Math.round(n * 10) / 10; }

  var ctx = null;
  function textW(s, size, weight) {
    if (ctx === null) { try { ctx = document.createElement('canvas').getContext('2d') || false; } catch (e) { ctx = false; } }
    if (ctx) { ctx.font = (weight || 500) + ' ' + size + 'px ' + FONT; return ctx.measureText(s).width; }
    return String(s).length * size * 0.43;
  }
  function wrap(s, size, weight, maxW, maxLines) {
    var words = [], lines = [], cur = '';
    String(s).split(/\s+/).filter(Boolean).forEach(function (w) {
      if (textW(w, size, weight) <= maxW) { words.push(w); return; }
      var part = '';
      for (var i = 0; i < w.length; i++) {
        if (part && textW(part + w[i], size, weight) > maxW) { words.push(part); part = ''; }
        part += w[i];
      }
      if (part) words.push(part);
    });
    words.forEach(function (w) {
      var t = cur ? cur + ' ' + w : w;
      if (!cur || textW(t, size, weight) <= maxW) cur = t; else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    if (maxLines && lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      var last = lines[maxLines - 1];
      while (last.length > 1 && textW(last + '…', size, weight) > maxW) last = last.slice(0, -1);
      lines[maxLines - 1] = last.replace(/[\s,.;:]+$/, '') + '…';
    }
    return lines;
  }

  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k) && attrs[k] != null) n.setAttribute(k, String(attrs[k]));
    if (parent) parent.appendChild(n);
    return n;
  }
  function text(g, x, y, str, size, o) {
    o = o || {};
    var t = el('text', { x: f(x), y: f(y), 'font-size': size, 'font-weight': o.w || 500, fill: o.fill || C.ink, 'text-anchor': o.anchor || null, 'font-family': FONT }, g);
    t.textContent = str;
    return t;
  }
  function lines(g, x, y, arr, size, lh, o) { arr.forEach(function (s, i) { text(g, x, y + i * lh, s, size, o); }); }

  /* ---------- hand-drawn primitives ---------- */
  function roughRect(g, R, x, y, w, h, o) {
    var j = o.j == null ? 2 : o.j;
    function p() { return (R() - 0.5) * 2 * j; }
    function d() {
      return 'M' + f(x + p()) + ' ' + f(y + p()) + ' L' + f(x + w + p()) + ' ' + f(y + p()) +
        ' L' + f(x + w + p()) + ' ' + f(y + h + p()) + ' L' + f(x + p()) + ' ' + f(y + h + p()) + ' Z';
    }
    if (o.fill) el('path', { d: d(), fill: o.fill, stroke: 'none' }, g);
    el('path', { d: d(), fill: 'none', stroke: o.stroke || C.ink, 'stroke-width': o.sw || 1.7, 'stroke-linejoin': 'round', 'stroke-dasharray': o.dash || null }, g);
    if (o.double) el('path', { d: d(), fill: 'none', stroke: o.stroke || C.ink, 'stroke-width': (o.sw || 1.7) * 0.6, opacity: 0.5, 'stroke-linejoin': 'round' }, g);
  }
  function roughCircle(g, R, cx, cy, r, o) {
    if (o.fill) el('circle', { cx: f(cx), cy: f(cy), r: r, fill: o.fill }, g);
    var n = 26, start = R() * Math.PI * 2, pts = [];
    for (var i = 0; i <= n + 3; i++) {
      var a = start + (i / n) * Math.PI * 2, rr = r * (1 + (R() - 0.5) * 0.07) + (i > n ? 1.5 : 0);
      pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
    }
    var dd = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
    for (i = 1; i < pts.length - 1; i++) {
      var mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
      dd += ' Q' + f(pts[i][0]) + ' ' + f(pts[i][1]) + ' ' + f(mx) + ' ' + f(my);
    }
    el('path', { d: dd, fill: 'none', stroke: o.stroke || C.ink, 'stroke-width': o.sw || 2, 'stroke-linecap': 'round' }, g);
  }
  function curve(g, R, x1, y1, x2, y2, o) {
    o = o || {};
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = (o.bend == null ? 0.12 : o.bend) * len * (R() < 0.5 ? -1 : 1);
    var cx = mx - (dy / len) * bend, cy = my + (dx / len) * bend;
    el('path', { d: 'M' + f(x1) + ' ' + f(y1) + ' Q' + f(cx) + ' ' + f(cy) + ' ' + f(x2) + ' ' + f(y2), fill: 'none', stroke: o.stroke || C.soft, 'stroke-width': o.sw || 2, 'stroke-linecap': 'round', 'stroke-dasharray': o.dash || null }, g);
    if (o.arrow) arrowHead(g, x2, y2, Math.atan2(y2 - cy, x2 - cx), o.stroke || C.soft);
  }
  function pathLine(g, d, o) {
    el('path', { d: d, fill: 'none', stroke: o.stroke || C.soft, 'stroke-width': o.sw || 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-dasharray': o.dash || null }, g);
  }
  function arrowHead(g, x, y, ang, col) {
    var a1 = ang + Math.PI - 0.5, a2 = ang + Math.PI + 0.5, L = 11;
    el('path', { d: 'M' + f(x + Math.cos(a1) * L) + ' ' + f(y + Math.sin(a1) * L) + ' L' + f(x) + ' ' + f(y) + ' L' + f(x + Math.cos(a2) * L) + ' ' + f(y + Math.sin(a2) * L), fill: 'none', stroke: col, 'stroke-width': 2.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
  }
  function tick(g, x, y, s, col) {
    el('path', { d: 'M' + f(x) + ' ' + f(y + s * 0.5) + ' L' + f(x + s * 0.38) + ' ' + f(y + s * 0.9) + ' L' + f(x + s) + ' ' + f(y - s * 0.05), fill: 'none', stroke: col || C.green, 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
  }
  function diamond(g, x, y, s, fill, stroke) {
    el('path', { d: 'M' + f(x) + ' ' + f(y - s) + ' L' + f(x + s * 0.8) + ' ' + f(y) + ' L' + f(x) + ' ' + f(y + s) + ' L' + f(x - s * 0.8) + ' ' + f(y) + ' Z', fill: fill, stroke: stroke, 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, g);
  }
  function clock(g, x, y) {
    el('circle', { cx: x, cy: y, r: 8, fill: 'none', stroke: C.soft, 'stroke-width': 1.6 }, g);
    el('path', { d: 'M' + x + ' ' + (y - 5) + ' L' + x + ' ' + y + ' L' + (x + 4) + ' ' + (y + 2), fill: 'none', stroke: C.soft, 'stroke-width': 1.6, 'stroke-linecap': 'round' }, g);
  }
  function pencil(g, x, y) {
    var p = el('g', { transform: 'translate(' + x + ' ' + y + ') rotate(-40)' }, g);
    el('rect', { x: -2, y: -11, width: 6, height: 16, fill: '#F6C453', stroke: C.stickyInk, 'stroke-width': 1.2 }, p);
    el('path', { d: 'M-2 5 L1 11 L4 5 Z', fill: '#F3D9A9', stroke: C.stickyInk, 'stroke-width': 1.2, 'stroke-linejoin': 'round' }, p);
  }
  function book(g, x, y) {
    el('path', { d: 'M' + x + ' ' + (y + 2) + ' q9 -5 16 0 v16 q-7 -5 -16 0 Z M' + (x + 16) + ' ' + (y + 2) + ' q9 -5 16 0 v16 q-9 -5 -16 0', fill: '#fff', stroke: C.teal, 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, g);
  }
  function flag(g, x, y) {
    el('path', { d: 'M' + x + ' ' + (y + 26) + ' V' + (y - 2), stroke: C.ink, 'stroke-width': 2.4, 'stroke-linecap': 'round', fill: 'none' }, g);
    el('path', { d: 'M' + x + ' ' + y + ' L' + (x + 22) + ' ' + (y + 6) + ' L' + x + ' ' + (y + 13) + ' Z', fill: '#F5C542', stroke: C.ink, 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, g);
  }

  /* ---------- blocks ---------- */
  function card(g, R, s, i, w, x, y, o) {
    var L = o.L, li = o.li, est = o.est[i], done = !!o.done[i];
    var cy = y, tl = wrap(s.t[li], 27, 700, w - 6, 3);
    if (g) lines(g, x, cy + 24, tl, 27, 28, { w: 700 });
    cy += tl.length * 28 + 4;
    var meta = L.hrsRange(est.lo, est.hi);
    if (g) {
      clock(g, x + 9, cy + 13);
      text(g, x + 24, cy + 20, meta, 21, { w: 600, fill: C.ink });
      var lx = x + 24 + textW(meta, 21, 600) + 18;
      for (var k = 1; k <= 3; k++) diamond(g, lx + (k - 1) * 17, cy + 13, 6.5, k <= s.l ? LVL_INK[s.l] : 'none', LVL_INK[s.l]);
    }
    cy += 32;
    var tags = s.k.slice(0, 4), tx = x, rows = tags.length ? 1 : 0;
    tags.forEach(function (k) {
      var tw = Math.min(textW(k, 17, 500) + 18, w);
      if (tx > x && tx + tw > x + w) { tx = x; rows++; }
      if (g) {
        var ty = cy + (rows - 1) * 31, rot = f((R() - 0.5) * 3);
        var tg = el('g', { transform: 'rotate(' + rot + ' ' + f(tx + tw / 2) + ' ' + f(ty + 12) + ')' }, g);
        el('rect', { x: f(tx), y: f(ty), width: f(tw), height: 25, rx: 12.5, fill: '#FFFFFF', stroke: LVL_INK[s.l], 'stroke-width': 1.4 }, tg);
        text(tg, tx + 9, ty + 18, k, 17, { fill: C.ink });
      }
      tx += tw + 7;
    });
    cy += rows * 31 + (rows ? 6 : 0);
    var pl = wrap(s.p[li], 19, 500, w - 52, 4), ph = pl.length * 21 + 22;
    if (g) {
      var sg = el('g', { transform: 'rotate(' + f((R() - 0.5) * 2.4) + ' ' + f(x + w / 2) + ' ' + f(cy + ph / 2) + ')' }, g);
      roughRect(sg, R, x, cy, w, ph, { fill: C.sticky, stroke: C.stickyEdge, sw: 1.5, j: 1.4 });
      el('path', { d: 'M' + f(x + w - 16) + ' ' + f(cy + ph) + ' L' + f(x + w) + ' ' + f(cy + ph - 16) + ' L' + f(x + w) + ' ' + f(cy + ph) + ' Z', fill: C.stickyEdge, opacity: 0.55 }, sg);
      pencil(sg, x + 17, cy + 17);
      lines(sg, x + 36, cy + 25, pl, 19, 21, { fill: C.stickyInk });
    }
    cy += ph + 12;
    var cl = wrap(s.c[li], 18, 500, w - 34, 3);
    if (g) {
      roughRect(g, R, x + 2, cy + 3, 18, 18, { fill: done ? C.greenL : '#FFFFFF', stroke: done ? C.green : C.soft, sw: 1.6, j: 1 });
      if (done) tick(g, x + 4, cy + 6, 14);
      lines(g, x + 30, cy + 18, cl, 18, 20, { fill: C.soft });
    }
    cy += cl.length * 20 + 6;
    return cy - y;
  }
  function node(g, R, cx, cy, i, s, done) {
    roughCircle(g, R, cx, cy, 30, { fill: done ? C.greenL : LVL_FILL[s.l], stroke: done ? C.green : C.ink, sw: 2.2 });
    text(g, cx, cy + 11, String(i + 1), 32, { w: 700, anchor: 'middle', fill: done ? C.green : C.ink });
    if (done) tick(g, cx + 16, cy - 30, 18);
  }
  function infoBlock(g, R, x, y, w, kind, title, body, o) {
    var bl = wrap(body, 21, 500, w - 64, 6), h = 46 + bl.length * 23 + 10;
    if (g) {
      roughRect(g, R, x, y, w, h, { fill: kind === 'fin' ? '#FFF6D6' : C.hub, stroke: kind === 'fin' ? C.gold : C.teal, sw: 2, double: true, j: 2.2 });
      if (kind === 'fin') flag(g, x + 22, y + 12); else book(g, x + 14, y + 12);
      text(g, x + 56, y + 32, title, 24, { w: 700, fill: kind === 'fin' ? C.gold : C.teal });
      lines(g, x + 22, y + 64, bl, 21, 23, { fill: C.ink });
    }
    return h;
  }

  /* ---------- page ---------- */
  function render(o) {
    var W = o.narrow ? 560 : 1200, R = prng(hash(o.repo + (o.narrow ? '#n' : ''))), rm = o.rm, L = o.L, li = o.li;
    var kind = rm.kind, layout = o.narrow ? 'spine' : (kind === 'course' || kind === 'book') ? 'river' : (kind === 'collection' || kind === 'reference') ? 'tree' : 'ladder';
    var svg = el('svg', { xmlns: NS, 'font-family': FONT, role: 'img' });
    var pid = 'grid' + hash(o.repo).toString(36);
    var defs = el('defs', {}, svg), pat = el('pattern', { id: pid, width: 28, height: 28, patternUnits: 'userSpaceOnUse' }, defs);
    el('path', { d: 'M28 0 H0 V28', fill: 'none', stroke: C.grid, 'stroke-width': 1 }, pat);
    var bg = el('rect', { x: 0, y: 0, width: W, fill: C.paper }, svg), grid = el('rect', { x: 0, y: 0, width: W, fill: 'url(#' + pid + ')' }, svg);
    var marginLine = el('path', { fill: 'none', stroke: C.margin, 'stroke-width': 1.5 }, svg);
    var gLines = el('g', {}, svg), g = el('g', {}, svg);

    /* header */
    var y = 30, tl = wrap(o.name, o.narrow ? 44 : 52, 700, W - (o.narrow ? 150 : 230), 2);
    var th = o.narrow ? 46 : 54;
    lines(g, 48, y + th - 6, tl, o.narrow ? 44 : 52, th, { w: 700 });
    el('path', { d: 'M46 ' + f(y + th + 4) + ' q' + f(Math.min(textW(tl[0], o.narrow ? 44 : 52, 700), W - 240) / 2) + ' ' + f((R() - 0.5) * 6) + ' ' + f(Math.min(textW(tl[0], o.narrow ? 44 : 52, 700), W - 240)) + ' 2', fill: 'none', stroke: C.teal, 'stroke-width': 9, opacity: 0.28, 'stroke-linecap': 'round' }, g);
    y += tl.length * th + 16;
    var sub = wrap(L.kind[kind] + ' · ' + L.sketchMethod(o.methodName, o.total.lo, o.total.hi), 23, 500, W - 96, 2);
    lines(g, 48, y + 18, sub, 23, 26, { fill: C.soft });
    y += sub.length * 26 + 8;
    var doneN = 0; rm.s.forEach(function (_, i) { if (o.done[i]) doneN++; });
    roughRect(g, R, 48, y + 6, 240, 14, { fill: '#FFFFFF', stroke: C.soft, sw: 1.4, j: 1 });
    if (doneN) roughRect(g, R, 48, y + 6, Math.max(8, 240 * doneN / rm.s.length), 14, { fill: C.green, stroke: C.green, sw: 1, j: 0.8 });
    text(g, 302, y + 20, L.progress(doneN, rm.s.length), 21, { w: 600, fill: doneN === rm.s.length ? C.green : C.soft });
    y += 40;
    /* stamp */
    var sx = W - 78, sy = 76, st = el('g', { transform: 'rotate(-9 ' + sx + ' ' + sy + ')' }, g);
    roughCircle(st, R, sx, sy, 46, { stroke: C.teal, sw: 2.4 });
    roughCircle(st, R, sx, sy, 39, { stroke: C.teal, sw: 1.2 });
    text(st, sx, sy + 4, 'TEGIN', 25, { w: 700, anchor: 'middle', fill: C.teal });
    text(st, sx, sy + 23, 'IT Courses', 14, { w: 600, anchor: 'middle', fill: C.teal });

    /* start + layout */
    var cw = layout === 'ladder' ? 470 : layout === 'spine' ? W - 140 : 320;
    var heights = rm.s.map(function (s, i) { return card(null, R, s, i, cw, 0, 0, o); });
    var preTitle = L.sketchStart + ' · ' + L.pre;
    var startW = layout === 'spine' ? W - 72 : Math.min(620, W - 96);
    var startX = layout === 'tree' || layout === 'ladder' ? (W - startW) / 2 : layout === 'spine' ? 36 : 48;
    var startH = infoBlock(g, R, startX, y, startW, 'pre', preTitle, rm.pre[li]);
    var startBottom = { x: startX + startW / 2, y: y + startH };
    y += startH + 34;
    var pos = [];

    if (layout === 'river' || layout === 'tree') {
      var colW = (W - 60) / 3, rowTop = y, rowsN = Math.ceil(rm.s.length / 3);
      for (var r = 0; r < rowsN; r++) {
        var idx = [], maxH = 0;
        for (var c = 0; c < 3; c++) { var ii = r * 3 + c; if (ii < rm.s.length) { idx.push(ii); maxH = Math.max(maxH, heights[ii]); } }
        idx.forEach(function (ii, k) {
          var col = layout === 'river' && r % 2 === 1 ? 2 - k : k;
          var n = idx.length, cx = layout === 'tree' && n < 3 ? W / 2 + (k - (n - 1) / 2) * colW : 30 + colW * (col + 0.5);
          pos[ii] = { x: cx, y: rowTop + 34, cardX: cx - cw / 2, cardY: rowTop + 80, col: col };
        });
        rowTop += 80 + maxH + 46;
      }
      y = rowTop;
      if (layout === 'river') {
        curve(gLines, R, startX + 60, startBottom.y, pos[0].x - 22, pos[0].y - 22, { arrow: true, stroke: C.teal, sw: 2.4, bend: 0.2 });
        for (var i = 0; i < rm.s.length - 1; i++) {
          var a = pos[i], b = pos[i + 1];
          if (Math.abs(a.y - b.y) < 2) curve(gLines, R, a.x + (b.x > a.x ? 34 : -34), a.y, b.x + (b.x > a.x ? -36 : 36), b.y, { arrow: true, stroke: C.teal, sw: 2.4, bend: 0.08 });
          else {
            var side = a.col === 2 ? W - 16 : 16, sgn = a.col === 2 ? 1 : -1;
            pathLine(gLines, 'M' + f(a.x + sgn * 34) + ' ' + f(a.y) + ' C' + f(side) + ' ' + f(a.y) + ' ' + f(side) + ' ' + f(a.y + 40) + ' ' + f(side) + ' ' + f((a.y + b.y) / 2) + ' S' + f(side) + ' ' + f(b.y) + ' ' + f(b.x + sgn * 36) + ' ' + f(b.y), { stroke: C.teal, sw: 2.4 });
            arrowHead(gLines, b.x + sgn * 36, b.y, sgn > 0 ? Math.PI : 0, C.teal);
          }
        }
      } else {
        rm.s.forEach(function (_, i) { curve(gLines, R, startBottom.x, startBottom.y, pos[i].x, pos[i].y - 32, { stroke: C.teal, sw: 2.2, bend: 0.1, arrow: true }); });
      }
    } else {
      var spineX = layout === 'spine' ? 56 : W / 2, top = y;
      rm.s.forEach(function (_, i) {
        var right = layout === 'spine' || i % 2 === 0;
        var cx2 = layout === 'spine' ? spineX + 50 : right ? spineX + 52 : spineX - 52 - cw;
        pos[i] = { x: spineX, y: y + 30, cardX: cx2, cardY: y };
        y += Math.max(heights[i], 70) + 40;
      });
      var dash = (kind === 'collection' || kind === 'reference') ? '3 9' : null;
      pathLine(gLines, 'M' + f(spineX) + ' ' + f(startBottom.y) + ' L' + f(spineX + (R() - 0.5) * 3) + ' ' + f((top + y) / 2) + ' L' + f(spineX) + ' ' + f(y + 4), { stroke: C.teal, sw: 2.6, dash: dash });
      rm.s.forEach(function (_, i) {
        var p = pos[i], toX = p.cardX > p.x ? p.cardX - 6 : p.cardX + cw + 6;
        curve(gLines, R, p.x + (toX > p.x ? 30 : -30), p.y, toX, p.y - 6, { stroke: C.soft, sw: 1.6, bend: 0.15, dash: '2 6' });
      });
    }

    rm.s.forEach(function (s, i) { card(g, R, s, i, cw, pos[i].cardX, pos[i].cardY, o); node(g, R, pos[i].x, pos[i].y, i, s, !!o.done[i]); });

    /* finish */
    var finW = layout === 'spine' ? W - 72 : Math.min(720, W - 96), finX = layout === 'spine' ? 36 : (W - finW) / 2;
    var last = pos[rm.s.length - 1];
    if (layout === 'river') curve(gLines, R, last.x, last.cardY + heights[rm.s.length - 1] + 8, finX + finW / 2, y + 6, { arrow: true, stroke: C.gold, sw: 2.4, bend: 0.15 });
    else if (layout === 'tree') {
      var lastRow = Math.floor((rm.s.length - 1) / 3) * 3;
      for (var q = lastRow; q < rm.s.length; q++) curve(gLines, R, pos[q].x, pos[q].cardY + heights[q] + 6, finX + finW / 2 + (q - lastRow - 1) * 40, y + 4, { stroke: C.gold, sw: 2, dash: '3 7', bend: 0.1 });
    }
    var finH = infoBlock(g, R, finX, y + 8, finW, 'fin', L.sketchFinish + ' · ' + L.fin, rm.fin[li]);
    y += finH + 40;

    /* note */
    if (rm.note) {
      var nl = wrap(L.rmNote + ': ' + rm.note[li], 20, 500, W - 140, 4), nh = nl.length * 22 + 22;
      roughRect(g, R, 48, y, W - 96, nh, { fill: '#FFF0EB', stroke: C.coral, sw: 1.8 });
      text(g, 66, y + 30, '!', 30, { w: 700, fill: C.coral });
      lines(g, 90, y + 28, nl, 20, 22, { fill: C.ink });
      y += nh + 22;
    }

    /* legend + footer */
    var lx = 48, ly = y + 6, items = L.sketchLegend;
    for (var k = 1; k <= 3; k++) diamond(g, lx + (k - 1) * 15, ly, 6, LVL_INK[k], LVL_INK[k]);
    text(g, lx + 52, ly + 6, items[0], 19, { fill: C.soft });
    lx += 52 + textW(items[0], 19, 500) + 26;
    roughRect(g, R, lx, ly - 9, 24, 18, { fill: C.sticky, stroke: C.stickyEdge, sw: 1.2, j: 0.8 });
    text(g, lx + 32, ly + 6, items[1], 19, { fill: C.soft });
    lx += 32 + textW(items[1], 19, 500) + 26;
    if (o.narrow && lx > W - 200) { lx = 48; ly += 30; }
    roughRect(g, R, lx, ly - 8, 16, 16, { fill: '#FFFFFF', stroke: C.soft, sw: 1.3, j: 0.6 });
    text(g, lx + 26, ly + 6, items[2], 19, { fill: C.soft });
    lx += 26 + textW(items[2], 19, 500) + 26;
    tick(g, lx, ly - 8, 15);
    text(g, lx + 24, ly + 6, items[3], 19, { fill: C.soft });
    y = ly + 34;
    var foot = wrap((rm.kind === 'collection' || rm.kind === 'reference' ? L.authorRoute + ' ' : '') + L.source(o.checked), 17, 500, W - 96, 4);
    lines(g, 48, y, foot, 17, 19, { fill: C.soft });
    y += foot.length * 19 + 6;
    var brandL = wrap(L.sketchFooter + ' · github.com/' + o.repo, 17, 600, W - 96, 3);
    lines(g, 48, y + 4, brandL, 17, 19, { w: 600, fill: C.teal });
    var H = Math.ceil(y + 34 + (brandL.length - 1) * 19);

    bg.setAttribute('height', H); grid.setAttribute('height', H);
    marginLine.setAttribute('d', 'M30 0 V' + H);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('width', W); svg.setAttribute('height', H);
    return svg;
  }

  /* ---------- export ---------- */
  function b64(buf) {
    var bytes = new Uint8Array(buf), s = '', CH = 0x8000;
    for (var i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
    return btoa(s);
  }
  var fontCss = null;
  function embeddedFonts() {
    if (fontCss) return Promise.resolve(fontCss);
    var list = (typeof SKETCH_FONTS !== 'undefined' && Array.isArray(SKETCH_FONTS)) ? SKETCH_FONTS : [];
    return Promise.all(list.map(function (ft) {
      if (!/^assets\/fonts\/[a-z0-9-]+\.woff2$/.test(ft.url)) return '';
      return fetch(ft.url).then(function (r) { if (!r.ok) throw new Error('font'); return r.arrayBuffer(); }).then(function (buf) {
        return "@font-face{font-family:'Caveat';font-weight:" + (+ft.weight) + ';src:url(data:font/woff2;base64,' + b64(buf) + ") format('woff2');unicode-range:" + String(ft.range).replace(/[^U+0-9A-Fa-f,\- ]/g, '') + '}';
      }).catch(function () { return ''; });
    })).then(function (parts) { fontCss = parts.join('\n'); return fontCss; });
  }
  function toSvgString(svg) {
    return embeddedFonts().then(function (css) {
      var clone = svg.cloneNode(true);
      clone.removeAttribute('class');
      if (css) { var style = document.createElementNS(NS, 'style'); style.textContent = css; clone.insertBefore(style, clone.firstChild); }
      return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
    });
  }
  function toPngBlob(svg, scale) {
    return toSvgString(svg).then(function (str) {
      return new Promise(function (resolve, reject) {
        var url = URL.createObjectURL(new Blob([str], { type: 'image/svg+xml' })), img = new Image();
        img.onload = function () {
          var w = +svg.getAttribute('width'), h = +svg.getAttribute('height'), c = document.createElement('canvas');
          c.width = Math.round(w * scale); c.height = Math.round(h * scale);
          var cx = c.getContext('2d'); cx.scale(scale, scale); cx.drawImage(img, 0, 0, w, h);
          URL.revokeObjectURL(url);
          c.toBlob(function (b) { if (b) resolve(b); else reject(new Error('png')); }, 'image/png');
        };
        img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('svg')); };
        img.src = url;
      });
    });
  }

  return { render: render, toSvgString: toSvgString, toPngBlob: toPngBlob, wrap: wrap };
})();

(function () {
  'use strict';

  /* ================= Safe HTML ================= */
  /* All markup is built with html`…`, which escapes every interpolated value. It reaches the DOM only
     through setHTML(). With Trusted Types enforced by the CSP, the 'tegin' policy is the only way to
     write HTML or register a script URL. */
  var TT = null;
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    TT = window.trustedTypes.createPolicy('tegin', {
      createHTML: function (s) { return s; },
      createScriptURL: function (u) { if (u === 'sw.js') return u; throw new TypeError('Blocked script URL'); }
    });
  }
  function SafeHTML(s) { this.s = s; }
  function esc(s) { return String(s).replace(/[&<>"'`]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' }[c]; }); }
  function part(v) {
    if (v instanceof SafeHTML) return v.s;
    if (Array.isArray(v)) return v.map(part).join('');
    if (v == null || v === false) return '';
    return esc(v);
  }
  function html(strings) {
    var out = strings[0];
    for (var i = 1; i < arguments.length; i++) out += part(arguments[i]) + strings[i];
    return new SafeHTML(out);
  }
  function setHTML(el, h) {
    if (!(h instanceof SafeHTML)) throw new TypeError('setHTML expects html``');
    el.innerHTML = TT ? TT.createHTML(h.s) : h.s; // eslint-disable-line no-unsanitized/property
  }

  /* ================= Helpers ================= */
  var d = document, root = d.documentElement;
  function $(s, el) { return (el || d).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || d).querySelectorAll(s)); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(dt) { return dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate()); }
  function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }
  function isInt(n, a, b) { return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && n >= a && n <= b; }
  function isNum(n, a, b) { return typeof n === 'number' && isFinite(n) && n >= a && n <= b; }
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var narrow = window.matchMedia('(max-width: 1023.98px)');
  var mobileSheet = window.matchMedia('(max-width: 767.98px)');

  var storageOk = true, mem = {};
  var store = {
    get: function (k) { try { var v = localStorage.getItem(k); return v == null ? undefined : JSON.parse(v); } catch (e) { if (!(e instanceof SyntaxError)) storageOk = false; return k in mem ? mem[k] : undefined; } },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { storageOk = false; } },
    raw: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { storageOk = false; } }
  };

  /* ================= Icons (trusted constants) ================= */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    ext: '<path d="M8 16 16.5 7.5M9.5 7.5h7v7"/>',
    moon: '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.1"/>',
    timer: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M9.5 2.5h5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    book: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v14H6.5A1.5 1.5 0 0 0 5 18.5v-14Z"/><path d="M5 18.5A1.5 1.5 0 0 0 6.5 20H19v-3"/>',
    map: '<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/>',
    play: '<path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor"/>',
    pause: '<rect x="7" y="5" width="3.6" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2" fill="currentColor" stroke="none"/>',
    reset: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4.2h4.2"/>',
    skip: '<path d="M6 6.5v11l8-5.5-8-5.5Z"/><path d="M18 6v12"/>',
    flag: '<path d="M6 21V4M6 4h11l-2.2 4L17 12H6"/>',
    volume: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4v-5Z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    bell: '<path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 1.5h-15L6 16.5Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    screen: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    pencil: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    left: '<path d="m15 5-7 7 7 7"/>',
    right: '<path d="m9 5 7 7-7 7"/>',
    send: '<path d="M21 4 3 11.2l6.6 2.4L12 20.5l3.3-4.6L21 4Z"/><path d="m9.6 13.6 5.7-4.2"/>',
    chat: '<path d="M4 5.5h16v10.5H9l-5 4V5.5Z"/><path d="M8 9.5h8M8 12.5h5"/>',
    share: '<path d="M12 3v12M8 7l4-4 4 4"/><path d="M7 11H5.5v10h13V11H17"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M11 8v6M8 11h6"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m20.5 16-5-5-8 8.5"/>',
    doc: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'
  };
  function trusted(s) { return new SafeHTML(s); }
  function ic(name, cls) { return html`<svg class="${'ic' + (cls ? ' ' + cls : '')}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${trusted(ICONS[name] || '')}</svg>`; }
  function hydrateIcons(scope) {
    $$('[data-icon]', scope).forEach(function (s) {
      var tmp = d.createElement('span');
      setHTML(tmp, ic(s.getAttribute('data-icon'), s.getAttribute('data-icon-class') || ''));
      s.replaceWith(tmp.firstChild);
    });
  }

  /* ================= Data ================= */
  var INDEX = {};
  SECTIONS.forEach(function (s) { s.items.forEach(function (it) { if (!INDEX[it.r]) INDEX[it.r] = it; }); });
  TOP.forEach(function (it) { if (!INDEX[it.r]) INDEX[it.r] = it; });
  var STATS = { res: Object.keys(INDEX).length, sec: SECTIONS.length };
  var METHOD = {}; METHODS.forEach(function (m) { METHOD[m.id] = m; });
  var TIMER_METHODS = METHODS.filter(function (m) { return m.timer; });
  var METHOD_IDS = TIMER_METHODS.map(function (m) { return m.id; }).concat(['custom']);
  var REPO_RE = /^(?:[A-Za-z0-9-]+\/[A-Za-z0-9._-]+(?:\/(?:tree|blob)\/[A-Za-z0-9._-]+(?:\/[A-Za-z0-9._-]+)*)?|topics\/[a-z0-9-]+)$/;
  var TG = /^https:\/\/t\.me\/[A-Za-z0-9_]{5,32}$/.test(String(CONFIG.telegram)) ? CONFIG.telegram : null;

  var lang = root.lang === 'ru' ? 'ru' : 'kk';
  function T() { return UI[lang]; }
  function li() { return lang === 'kk' ? 0 : 1; }
  function url(r) { return REPO_RE.test(r) ? 'https://github.com/' + r : '#'; }
  function pathLabel(r) { return r.replace(/\/(?:blob|tree)\/[^/]+\//, ' / '); }
  function nameOf(it) { return (lang === 'kk' && it.nk) ? it.nk : it.n; }
  function courseName(r) { var it = INDEX[r]; return it ? nameOf(it) : r.split('/').pop(); }
  function haystack(it) { return [it.n, it.nk || '', it.r, it.kk, it.ru].join(' ').toLowerCase(); }
  function mname(id) { return id === 'custom' ? T().custom : (METHOD[id] ? METHOD[id][lang].name : id); }
  function fmtNum(n) { var r = Math.round(n * 10) / 10; return (r % 1 === 0 ? String(r) : r.toFixed(1)).replace('.', ','); }
  var MONTHS = {
    kk: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
    ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  };
  function fmtDate(dt) { return dt.getDate() + ' ' + MONTHS[lang][dt.getMonth()] + ', ' + T().wdFull[(dt.getDay() + 6) % 7]; }
  function fmtCompact(min) { var t = T(); return min < 60 ? Math.round(min) + ' ' + t.min : fmtNum(min / 60) + ' ' + t.hr; }
  function fmtCheck(s) { var p = String(s).split('-'); return p.length === 3 ? p[2] + '.' + p[1] + '.' + p[0] : s; }

  /* ================= State (validated on read) ================= */
  function readCourses() {
    var v = store.get('itk-courses'), out = [], seen = {};
    if (!Array.isArray(v)) return out;
    v.slice(0, 200).forEach(function (c) {
      if (!c || typeof c !== 'object' || typeof c.r !== 'string' || !INDEX[c.r] || seen[c.r]) return;
      var days = Array.isArray(c.days) ? c.days.filter(function (x) { return isInt(x, 0, 6); }) : [];
      days = days.filter(function (x, i) { return days.indexOf(x) === i; }).sort();
      if (!days.length) return;
      seen[c.r] = 1;
      out.push({
        r: c.r, days: days,
        time: typeof c.time === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(c.time) ? c.time : '19:00',
        dur: isInt(c.dur, 5, 240) ? c.dur : 45,
        method: METHOD_IDS.indexOf(c.method) !== -1 ? c.method : 'pomodoro',
        goal: isInt(c.goal, 1, 1000) ? c.goal : 20,
        added: isNum(c.added, 0, 1e14) ? c.added : Date.now()
      });
    });
    return out;
  }
  function readSessions() {
    var v = store.get('itk-sessions');
    if (!Array.isArray(v)) return [];
    return v.slice(-2000).filter(function (s) {
      return s && typeof s.d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s.d) && isNum(s.m, 1, 600) &&
        (s.c === null || s.c === undefined || (typeof s.c === 'string' && INDEX[s.c])) && (s.s === undefined || METHOD_IDS.indexOf(s.s) !== -1);
    }).map(function (s) { return { d: s.d, m: Math.round(s.m), c: s.c || null, s: s.s || null }; });
  }
  function readSettings() {
    var v = store.get('itk-settings'), o = { sound: true, notify: false, wake: false };
    if (v && typeof v === 'object') ['sound', 'notify', 'wake'].forEach(function (k) { if (typeof v[k] === 'boolean') o[k] = v[k]; });
    return o;
  }
  function readProgress() {
    var v = store.get('itk-rm'), out = {};
    if (!v || typeof v !== 'object' || Array.isArray(v)) return out;
    Object.keys(v).slice(0, 400).forEach(function (r) {
      var x = v[r], rm = RM[r];
      if (!rm || !x || typeof x !== 'object') return;
      var done = Array.isArray(x.d) ? x.d.filter(function (i) { return isInt(i, 0, rm.s.length - 1); }) : [];
      out[r] = { d: done.filter(function (i, k) { return done.indexOf(i) === k; }), m: METHOD_IDS.indexOf(x.m) !== -1 ? x.m : null };
    });
    return out;
  }
  var courses = readCourses(), sessions = readSessions(), settings = readSettings(), progress = readProgress();
  function saveCourses() { store.set('itk-courses', courses); }
  function saveSettings() { store.set('itk-settings', settings); }
  function saveProgress() { store.set('itk-rm', progress); }
  function findCourse(r) { for (var i = 0; i < courses.length; i++) if (courses[i].r === r) return courses[i]; return null; }

  /* ================= Study-time estimate ================= */
  function methodDaily(id) { return id === 'custom' ? Math.max(20, tm.custom.work * 3) : (CONFIG.pace.methods[id] || CONFIG.pace.methods.pomodoro).daily; }
  function niceH(h) { return h < 10 ? Math.max(1, Math.round(h)) : h < 100 ? Math.round(h) : Math.round(h / 5) * 5; }
  function estimate(r, id) {
    var x = RM[r], pace = CONFIG.pace, P = pace.methods[id] || pace.methods.pomodoro;
    var hrs = x.s.map(function (s) { return s.h * P.mult[s.l - 1] * (1 + pace.practiceShare * P.practice); });
    var stages = hrs.map(function (h) { var lo = niceH(h * pace.low), hi = Math.max(lo + 1, niceH(h * pace.high)); return { lo: lo, hi: hi }; });
    var total = hrs.reduce(function (a, b) { return a + b; }, 0), lo = niceH(total * pace.low), hi = Math.max(lo + 1, niceH(total * pace.high));
    var c = findCourse(r), perDay = c ? c.dur : methodDaily(id), perWeek = c ? c.days.length : pace.studyDays;
    var d1 = Math.max(1, Math.ceil(total * pace.low * 60 / perDay)), d2 = Math.max(d1 + 1, Math.ceil(total * pace.high * 60 / perDay));
    var w1 = Math.max(1, Math.round(d1 / perWeek)), w2 = Math.max(w1 + 1, Math.ceil(d2 / perWeek));
    return { stages: stages, lo: lo, hi: hi, d1: d1, d2: d2, w1: w1, w2: w2, perDay: perDay, perWeek: perWeek, fromCourse: !!c, mid: (w1 + w2) / 2 };
  }

  /* ================= Static text ================= */
  function renderStatic() {
    var t = T();
    root.lang = lang;
    d.title = t.title;
    $$('[data-i18n]').forEach(function (el) { var v = t[el.getAttribute('data-i18n')]; el.textContent = typeof v === 'function' ? v(STATS) : (v == null ? '' : v); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t[el.getAttribute('data-i18n-aria')]); });
    $$('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', t[el.getAttribute('data-i18n-alt')]); });
    setHTML($('#h1'), lang === 'kk' ? html`GitHub-тағы тегін <span class="nw">IT-курстар</span> мен оқу ресурстары` : html`Бесплатные <span class="nw">IT-курсы</span> и учебные ресурсы на GitHub`);
    $('#q').placeholder = t.searchPh;
    $$('#langSeg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    $$('[data-tg]').forEach(function (a) { if (TG) a.setAttribute('href', TG); else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); } });
    updateThemeLabel();
  }

  /* ================= Catalog ================= */
  var sectionsEl = $('#sections'), navEl = $('#navList');
  function addBtn(r) {
    var on = !!findCourse(r), t = T(), label = on ? t.inMy : t.addToMy;
    return html`<button type="button" class="add-btn" data-add="${r}" aria-pressed="${String(on)}" aria-label="${label}" title="${label}">${ic('plus', 'i-plus')}${ic('check', 'i-check')}</button>`;
  }
  function rmBtn(r, name) {
    var t = T(), dn = progress[r] ? progress[r].d.length : 0, total = RM[r].s.length;
    return html`<button type="button" class="${'rm-btn' + (dn ? ' has-progress' : '')}" data-rm="${r}" aria-label="${t.roadmapOf(name)}">${ic('map')}<span>${t.roadmap}</span>${dn ? html`<span class="rm-count">${dn + '/' + total}</span>` : ''}</button>`;
  }
  function renderCatalog() {
    var t = T(), nt = html`<span class="sr"> (${t.newTab})</span>`;
    setHTML($('#topList'), html`${TOP.map(function (it, i) {
      return html`<li class="top-item panel">
        <span class="top-num" aria-hidden="true">${i + 1}</span>
        <div class="top-body">
          <div class="name-row"><a class="t-name" href="${url(it.r)}" target="_blank" rel="noopener noreferrer">${it.n}${ic('ext', 'ext')}${nt}</a>${rmBtn(it.r, it.n)}</div>
          <span class="t-desc">${it[lang]}</span><span class="path">${pathLabel(it.r)}</span>
        </div>${addBtn(it.r)}</li>`;
    })}`);
    setHTML(navEl, html`${SECTIONS.map(function (s) {
      return html`<li><button type="button" data-target="${'s-' + s.id}" data-nav="${s.id}"><span>${lang === 'kk' ? s.sk : s.sr}</span><span class="nav-count">${s.items.length}</span></button></li>`;
    })}`);
    setHTML(sectionsEl, html`${SECTIONS.map(function (s) {
      return html`<section class="cat panel" id="${'s-' + s.id}" data-sec="${s.id}" aria-labelledby="${'h-' + s.id}">
        <div class="cat-head"><h3 id="${'h-' + s.id}">${s[lang]}</h3><span class="cat-count">${t.count(s.items.length)}</span></div>
        <ul class="rows">${s.items.map(function (it) {
          var nm = nameOf(it);
          return html`<li data-hay="${haystack(it)}"><div class="row-body">
            <div class="name-row"><a class="r-name" href="${url(it.r)}" target="_blank" rel="noopener noreferrer">${nm}${ic('ext', 'ext')}${nt}</a>${rmBtn(it.r, nm)}</div>
            <span class="r-desc">${it[lang]}</span><span class="path">${pathLabel(it.r)}</span></div>${addBtn(it.r)}</li>`;
        })}</ul></section>`;
    })}`);
    setHTML($('#topicList'), html`${TOPICS.map(function (it) {
      return html`<li class="topic"><a class="panel" href="${url(it.r)}" target="_blank" rel="noopener noreferrer"><b>${it.n}</b><span>${it[lang]}</span>${nt}</a></li>`;
    })}`);
    applyFilter();
    observeSections();
  }
  function updateCourseButtons() {
    var t = T();
    $$('[data-add]').forEach(function (b) {
      var on = !!findCourse(b.getAttribute('data-add')), label = on ? t.inMy : t.addToMy;
      b.setAttribute('aria-pressed', String(on)); b.setAttribute('aria-label', label); b.title = label;
    });
    $$('[data-rm]').forEach(function (b) {
      var r = b.getAttribute('data-rm'), dn = progress[r] ? progress[r].d.length : 0, c = $('.rm-count', b);
      b.classList.toggle('has-progress', dn > 0);
      if (dn && !c) { c = d.createElement('span'); c.className = 'rm-count'; b.appendChild(c); }
      if (c) { if (dn) c.textContent = dn + '/' + RM[r].s.length; else c.remove(); }
    });
  }

  var q = $('#q'), box = $('#searchBox'), clearBtn = $('#clearBtn');
  function applyFilter() {
    var raw = q.value.trim().slice(0, 100), term = raw.toLowerCase(), t = T(), total = 0;
    box.classList.toggle('has-value', raw.length > 0);
    clearBtn.hidden = raw.length === 0;
    ['#note', '#start', '#topics', '#heroLinks', '#contact'].forEach(function (s) { $(s).hidden = term.length > 0; });
    d.body.classList.toggle('searching', term.length > 0);
    $$('.cat', sectionsEl).forEach(function (sec) {
      var shown = 0, all = $$('li[data-hay]', sec);
      all.forEach(function (row) { var ok = !term || row.getAttribute('data-hay').indexOf(term) !== -1; row.hidden = !ok; if (ok) shown++; });
      sec.hidden = shown === 0; total += shown;
      $('.cat-count', sec).textContent = t.count(term ? shown : all.length);
      var b = $('[data-nav="' + sec.getAttribute('data-sec') + '"]', navEl);
      if (b) { b.classList.toggle('is-empty', shown === 0); $('.nav-count', b).textContent = term ? shown : all.length; }
    });
    var empty = $('#empty');
    empty.hidden = !(term && total === 0);
    if (!empty.hidden) $('#emptyText').textContent = t.empty(raw);
    $('#status').textContent = term ? t.results(total) : '';
    updateInstallUI();
  }
  var searchTimer;
  q.addEventListener('input', function () { clearTimeout(searchTimer); searchTimer = setTimeout(applyFilter, 60); });
  function clearSearch() { q.value = ''; applyFilter(); q.focus(); }
  clearBtn.addEventListener('click', clearSearch);
  $('#emptyClear').addEventListener('click', clearSearch);
  q.addEventListener('keydown', function (e) { if (e.key === 'Escape' && q.value) { e.preventDefault(); q.value = ''; applyFilter(); } });

  navEl.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-target]');
    if (!b) return;
    var el = d.getElementById(b.getAttribute('data-target'));
    if (el) el.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
  });
  var spy;
  function setActive(id) {
    var active = null;
    $$('button', navEl).forEach(function (b) {
      var on = b.getAttribute('data-nav') === id;
      b.classList.toggle('is-active', on);
      if (on) { b.setAttribute('aria-current', 'true'); active = b; } else b.removeAttribute('aria-current');
    });
    if (active && narrow.matches) {
      var nav = $('#catNav'), left = active.offsetLeft - 16, right = left + active.offsetWidth + 32;
      if (left < nav.scrollLeft || right > nav.scrollLeft + nav.clientWidth) nav.scrollTo({ left: Math.max(0, left), behavior: reduced.matches ? 'auto' : 'smooth' });
    }
  }
  function observeSections() {
    if (spy) spy.disconnect();
    if (!('IntersectionObserver' in window)) return;
    spy = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.getAttribute('data-sec')); }); }, { rootMargin: '-35% 0px -60% 0px' });
    $$('.cat', sectionsEl).forEach(function (s) { spy.observe(s); });
  }

  /* ================= Toasts ================= */
  var toastsEl = $('#toasts');
  function toast(msg, action, ms) {
    var el = d.createElement('div');
    el.className = 'toast glass-strong';
    setHTML(el, html`<span>${msg}</span>${action ? html`<button type="button">${action.label}</button>` : ''}`);
    if (action) $('button', el).addEventListener('click', function () { action.run(); dismiss(); });
    toastsEl.appendChild(el);
    while (toastsEl.children.length > 3) toastsEl.removeChild(toastsEl.firstChild);
    var timer = setTimeout(dismiss, ms || (action ? 6000 : 2800));
    function dismiss() {
      clearTimeout(timer);
      if (!el.parentNode) return;
      el.classList.add('out');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 240);
    }
    return dismiss;
  }

  /* ================= Sheet ================= */
  var sheetRoot = $('#sheetRoot'), sheetEl = $('#sheet'), sheetBody = $('#sheetBody'), sheetTitle = $('#sheetTitle');
  var lastFocus = null, sheetOpts = null, closeTimer = null;
  function openSheet(opts) {
    clearTimeout(closeTimer);
    if (!sheetOpts) lastFocus = d.activeElement;
    sheetOpts = opts;
    setHTML(sheetTitle, html`${opts.title}${opts.sub ? html`<span class="sub">${opts.sub}</span>` : ''}`);
    setHTML(sheetBody, opts.body);
    sheetBody.scrollTop = 0;
    sheetEl.classList.toggle('wide', !!opts.wide);
    $('#sheetClose .sr').textContent = T().close;
    sheetRoot.hidden = false;
    sheetEl.style.transform = '';
    void sheetEl.offsetWidth;
    sheetRoot.classList.add('open');
    root.classList.add('sheet-lock');
    d.body.classList.add('sheet-open');
    if (opts.mount) opts.mount(sheetBody);
    setTimeout(function () { var f = $('[data-autofocus]', sheetBody) || $('#sheetClose'); if (f) f.focus({ preventScroll: true }); }, 80);
  }
  function closeSheet() {
    if (sheetRoot.hidden || !sheetOpts) return;
    sheetEl.classList.remove('dragging');
    sheetEl.style.transform = '';
    sheetRoot.classList.remove('open');
    root.classList.remove('sheet-lock');
    d.body.classList.remove('sheet-open');
    var o = sheetOpts; sheetOpts = null;
    closeTimer = setTimeout(function () { sheetRoot.hidden = true; setHTML(sheetBody, html``); }, 460);
    if (lastFocus && lastFocus.focus && d.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    if (o && o.onClose) o.onClose();
  }
  sheetRoot.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeSheet(); });
  d.addEventListener('keydown', function (e) {
    if (sheetRoot.hidden || !sheetOpts) return;
    if (e.key === 'Escape') { e.preventDefault(); closeSheet(); return; }
    if (e.key === 'Tab') {
      var fs = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', sheetEl).filter(function (x) { return x.offsetParent !== null; });
      if (!fs.length) return;
      var first = fs[0], last = fs[fs.length - 1];
      if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  (function dragToClose() {
    var grab = $('#sheetGrab'), startY = 0, dy = 0, t0 = 0, active = false;
    grab.addEventListener('pointerdown', function (e) {
      if (!mobileSheet.matches || e.target.closest('button')) return;
      active = true; startY = e.clientY; dy = 0; t0 = Date.now();
      sheetEl.classList.add('dragging');
      grab.setPointerCapture(e.pointerId);
    });
    grab.addEventListener('pointermove', function (e) { if (!active) return; dy = Math.max(0, e.clientY - startY); sheetEl.style.transform = 'translateY(' + dy + 'px)'; });
    function end() {
      if (!active) return;
      active = false;
      var v = dy / Math.max(1, Date.now() - t0);
      sheetEl.classList.remove('dragging');
      if (dy > 110 || v > 0.6) closeSheet(); else sheetEl.style.transform = '';
    }
    grab.addEventListener('pointerup', end);
    grab.addEventListener('pointercancel', end);
  })();

  /* ================= Files ================= */
  function downloadBlob(name, blob) {
    var a = d.createElement('a'), u = URL.createObjectURL(blob);
    a.href = u; a.download = name; a.rel = 'noopener';
    d.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(u); }, 4000);
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9а-яёәғқңөұүһі]+/gi, '-').replace(/^-|-$/g, '').slice(0, 48) || 'roadmap'; }
  var BYDAY = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  function icsText(s) { return String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;'); }
  function icsLocal(dt) { return dt.getFullYear() + pad(dt.getMonth() + 1) + pad(dt.getDate()) + 'T' + pad(dt.getHours()) + pad(dt.getMinutes()) + '00'; }
  function icsUTC(dt) { return dt.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }
  function fold(line) {
    var enc = new TextEncoder(), out = '', cur = '', bytes = 0;
    for (var i = 0; i < line.length; i++) { var ch = line[i], b = enc.encode(ch).length; if (bytes + b > 73) { out += cur + '\r\n '; cur = ''; bytes = 1; } cur += ch; bytes += b; }
    return out + cur;
  }
  function icsWrap(events) {
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//TEGIN IT Courses//KZ', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
    events.forEach(function (ev) {
      lines.push('BEGIN:VEVENT', 'UID:' + ev.uid, 'DTSTAMP:' + icsUTC(new Date()), 'DTSTART:' + icsLocal(ev.start), 'DURATION:PT' + ev.dur + 'M');
      if (ev.rrule) lines.push('RRULE:' + ev.rrule);
      lines.push('SUMMARY:' + icsText(ev.summary));
      if (ev.desc) lines.push('DESCRIPTION:' + icsText(ev.desc));
      lines.push('BEGIN:VALARM', 'TRIGGER:-PT10M', 'ACTION:DISPLAY', 'DESCRIPTION:' + icsText(ev.summary), 'END:VALARM', 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.map(fold).join('\r\n') + '\r\n';
  }

  /* ================= My courses ================= */
  function parseTime(s) { var p = (s || '19:00').split(':'); return { h: +p[0] || 0, m: +p[1] || 0 }; }
  function nextOccurrence(c, from) {
    var t = parseTime(c.time), now = from || new Date();
    for (var i = 0; i < 8; i++) {
      var dt = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, t.h, t.m), wd = (dt.getDay() + 6) % 7;
      if (c.days.indexOf(wd) !== -1 && dt.getTime() + c.dur * 60000 > now.getTime()) return { date: dt, offset: i, wd: wd };
    }
    return null;
  }
  function courseMinutes(r) { return sessions.reduce(function (a, s) { return a + (s.c === r ? s.m : 0); }, 0); }
  function scheduleText(c) { var t = T(); return c.days.map(function (i) { return t.wd[i]; }).join(', ') + ' — ' + c.time + ', ' + c.dur + ' ' + t.min; }
  function nextText(c) {
    var t = T(), n = nextOccurrence(c);
    if (!n) return '';
    return t.next + ': ' + (n.offset === 0 ? t.today : n.offset === 1 ? t.tomorrow : t.wdFull[n.wd]) + ', ' + c.time;
  }
  function exportCourse(c) {
    var t = T(), n = nextOccurrence(c), start = n ? n.date : new Date();
    var ics = icsWrap([{ uid: 'course-' + slug(c.r) + '@tegin-it', start: start, dur: c.dur, rrule: 'FREQ=WEEKLY;BYDAY=' + c.days.map(function (i) { return BYDAY[i]; }).join(','), summary: t.calSummary(courseName(c.r)), desc: url(c.r) + '\n' + mname(c.method) }]);
    downloadBlob(slug(courseName(c.r)) + '.ics', new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    toast(t.calSaved);
  }
  function chipRow(name, options, value, multi) {
    return html`<div class="${name === 'days' ? 'day-row' : 'chip-row'}" data-group="${name}" data-multi="${multi ? '1' : '0'}" role="group">${options.map(function (o) {
      var on = multi ? value.indexOf(o.v) !== -1 : o.v === value;
      return html`<button type="button" class="chip" data-v="${o.v}" aria-pressed="${String(on)}">${o.l}${o.s ? html` <small>${o.s}</small>` : ''}</button>`;
    })}</div>`;
  }
  function bindChips(scope, onChange) {
    scope.addEventListener('click', function (e) {
      var b = e.target.closest('.chip[data-v]'), g = b && b.parentNode;
      if (!b || !g.hasAttribute('data-group')) return;
      if (g.getAttribute('data-multi') === '1') b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
      else $$('.chip', g).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      if (onChange) onChange(g.getAttribute('data-group'), b.getAttribute('data-v'));
    });
  }
  function readChips(scope, name, multi) {
    var on = $$('[data-group="' + name + '"] .chip[aria-pressed="true"]', scope).map(function (b) { return b.getAttribute('data-v'); });
    return multi ? on : on[0];
  }
  function openPlan(r) {
    var t = T(), existing = findCourse(r);
    var c = existing || { r: r, days: [0, 2, 4], time: '19:00', dur: 45, method: tm.method, goal: Math.max(5, Math.round(estimate(r, tm.method).hi / 5) * 5) };
    var goals = [10, 20, 40].concat([c.goal]).filter(function (g, i, a) { return a.indexOf(g) === i; }).sort(function (a, b) { return a - b; });
    openSheet({
      title: t.planTitle, sub: courseName(r),
      body: html`<div class="field"><span class="lbl">${t.planDays}</span>${chipRow('days', t.wd.map(function (w, i) { return { v: String(i), l: w }; }), c.days.map(String), true)}</div>
        <div class="field"><label class="lbl" for="planTime">${t.planTime}</label><input class="input" type="time" id="planTime" value="${c.time}"></div>
        <div class="field"><span class="lbl">${t.planDur}</span>${chipRow('dur', [25, 45, 60, 90].map(function (m) { return { v: String(m), l: m + ' ' + t.min }; }), String(c.dur))}</div>
        <div class="field"><span class="lbl">${t.planMethod}</span>${chipRow('method', METHOD_IDS.map(function (id) { return { v: id, l: mname(id) }; }), c.method)}</div>
        <div class="field"><span class="lbl">${t.planGoal}</span>${chipRow('goal', goals.map(function (h) { return { v: String(h), l: h + ' ' + t.hr }; }), String(c.goal))}</div>
        <p class="hint">${t.calHint}</p>
        <div class="sheet-actions">${existing ? html`<button type="button" class="btn btn-danger" id="planRemove">${ic('trash')}${t.remove}</button>` : ''}<button type="button" class="btn btn-primary" id="planSave">${t.save}</button></div>`,
      mount: function (body) {
        bindChips(body);
        $('#planSave', body).addEventListener('click', function () {
          var days = readChips(body, 'days', true).map(Number).filter(function (x) { return isInt(x, 0, 6); }).sort();
          if (!days.length) { toast(t.needDay); return; }
          var tv = $('#planTime', body).value;
          var next = { r: r, days: days, time: /^([01]\d|2[0-3]):[0-5]\d$/.test(tv) ? tv : '19:00', dur: +readChips(body, 'dur'), method: readChips(body, 'method'), goal: +readChips(body, 'goal'), added: existing ? existing.added : Date.now() };
          if (existing) courses[courses.indexOf(existing)] = next; else courses.push(next);
          saveCourses(); afterCoursesChange(); closeSheet();
          toast(existing ? t.saved : t.addedToast, existing ? null : { label: t.tabFocus, run: function () { location.hash = '#/focus'; } });
        });
        var rmv = $('#planRemove', body);
        if (rmv) rmv.addEventListener('click', function () {
          var idx = courses.indexOf(existing), removed = courses.splice(idx, 1)[0];
          saveCourses(); afterCoursesChange(); closeSheet();
          toast(t.removed, { label: t.undo, run: function () { courses.splice(idx, 0, removed); saveCourses(); afterCoursesChange(); } });
        });
      }
    });
  }
  function afterCoursesChange() { updateCourseButtons(); renderMy(); renderCourseSelect(); }
  function renderMy() {
    var t = T();
    $('#myEmpty').hidden = courses.length > 0;
    setHTML($('#myList'), html`${courses.map(function (c) {
      var mins = courseMinutes(c.r), pct = Math.min(100, (mins / 60) / c.goal * 100), nm = courseName(c.r);
      return html`<li class="course-card panel">
        <div class="cc-top"><a href="${url(c.r)}" target="_blank" rel="noopener noreferrer">${nm}${ic('ext', 'ext')}</a>
          <button type="button" class="icon-btn" data-edit="${c.r}" aria-label="${t.edit}" title="${t.edit}">${ic('pencil')}</button></div>
        <p class="cc-sched">${scheduleText(c) + ', ' + mname(c.method)}</p>
        <p class="cc-next">${nextText(c)}</p>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${c.goal}" aria-valuenow="${fmtNum(mins / 60)}"><i data-w="${pct.toFixed(1)}"></i></div>
        <div class="cc-goal"><span>${t.planGoal}</span><span>${t.goalOf(fmtNum(mins / 60), c.goal)}</span></div>
        <div class="cc-actions"><button type="button" class="btn btn-primary btn-sm" data-startc="${c.r}">${ic('play')}${t.startCourse}</button>
          ${rmBtn(c.r, nm)}
          <button type="button" class="btn btn-ghost btn-sm" data-cal="${c.r}">${ic('calendar')}${t.toCal}</button></div></li>`;
    })}`);
    applyWidths($('#myList'));
  }
  function applyWidths(scope) { $$('[data-w]', scope).forEach(function (i) { i.style.width = clamp(parseFloat(i.getAttribute('data-w')) || 0, 0, 100) + '%'; }); }
  $('#myList').addEventListener('click', function (e) {
    var b;
    if ((b = e.target.closest('[data-edit]'))) openPlan(b.getAttribute('data-edit'));
    else if ((b = e.target.closest('[data-cal]'))) { var c0 = findCourse(b.getAttribute('data-cal')); if (c0) exportCourse(c0); }
    else if ((b = e.target.closest('[data-startc]'))) {
      var c = findCourse(b.getAttribute('data-startc'));
      if (!c) return;
      setMethod(c.method);
      tm.course = c.r; saveTimer(); renderCourseSelect();
      play();
      $('#timerCard').scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
    }
  });

  /* ================= Sessions & stats ================= */
  function logSession(min, method, course) {
    min = Math.round(min);
    if (min < 1) return;
    sessions.push({ d: dayKey(new Date()), m: Math.min(600, min), c: course || null, s: method });
    if (sessions.length > 2000) sessions = sessions.slice(-2000);
    store.set('itk-sessions', sessions);
    renderStats(); renderMy();
  }
  function renderStats() {
    var t = T(), now = new Date(), today = dayKey(now);
    var monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - ((now.getDay() + 6) % 7)), mk = dayKey(monday);
    var todayMin = 0, weekMin = 0, days = {};
    sessions.forEach(function (s) { days[s.d] = 1; if (s.d === today) todayMin += s.m; if (s.d >= mk) weekMin += s.m; });
    var streak = 0, cur = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!days[today]) cur.setDate(cur.getDate() - 1);
    while (days[dayKey(cur)]) { streak++; cur.setDate(cur.getDate() - 1); }
    $('#sToday').textContent = fmtCompact(todayMin);
    $('#sWeek').textContent = fmtCompact(weekMin);
    $('#sStreak').textContent = t.days(streak);
  }

  /* ================= Timer ================= */
  function readTimer() {
    var v = store.get('itk-timer'), o = { method: 'pomodoro', phase: 'work', running: false, endAt: 0, remain: 25 * 60000, flowStart: 0, flowAcc: 0, flowBreakMs: 5 * 60000, cycle: 0, course: '', custom: { work: 30, brk: 5 } };
    if (!v || typeof v !== 'object') return o;
    if (METHOD_IDS.indexOf(v.method) !== -1) o.method = v.method;
    if (['work', 'break', 'long', 'flow', 'flowbreak'].indexOf(v.phase) !== -1) o.phase = v.phase;
    if (typeof v.running === 'boolean') o.running = v.running;
    ['endAt', 'flowStart'].forEach(function (k) { if (isNum(v[k], 0, 1e14)) o[k] = v[k]; });
    ['remain', 'flowAcc', 'flowBreakMs'].forEach(function (k) { if (isNum(v[k], 0, 1e9)) o[k] = v[k]; });
    if (isInt(v.cycle, 0, 10000)) o.cycle = v.cycle;
    if (typeof v.course === 'string' && (v.course === '' || INDEX[v.course])) o.course = v.course;
    if (v.custom && isInt(v.custom.work, 5, 180) && isInt(v.custom.brk, 1, 60)) o.custom = { work: v.custom.work, brk: v.custom.brk };
    var isFlowMethod = o.method !== 'custom' && !!METHOD[o.method].timer.flow;
    if (isFlowMethod !== (o.phase === 'flow' || o.phase === 'flowbreak')) { o.phase = isFlowMethod ? 'flow' : 'work'; o.running = false; o.remain = 25 * 60000; }
    return o;
  }
  var tm = readTimer();
  function saveTimer() { store.set('itk-timer', tm); }
  function cfg() { return tm.method === 'custom' ? { work: tm.custom.work, brk: tm.custom.brk } : METHOD[tm.method].timer; }
  function isFlow() { return !!cfg().flow; }
  function isBreak(p) { return p === 'break' || p === 'long' || p === 'flowbreak'; }
  function phaseDur(p) {
    var c = cfg();
    if (p === 'work') return c.work * 60000;
    if (p === 'long') return (c.long || c.brk) * 60000;
    if (p === 'break') return c.brk * 60000;
    if (p === 'flowbreak') return tm.flowBreakMs;
    return 0;
  }
  function remaining(now) { return tm.running ? Math.max(0, tm.endAt - now) : tm.remain; }
  function flowElapsed(now) { return tm.flowAcc + (tm.running ? now - tm.flowStart : 0); }
  function resetTimer() {
    tm.running = false; tm.cycle = 0; tm.flowAcc = 0;
    tm.phase = isFlow() ? 'flow' : 'work';
    tm.remain = phaseDur('work');
    saveTimer(); releaseWake(); renderTimer(true);
  }
  function logPartial() {
    if (tm.phase === 'work' && tm.running) { var done = phaseDur('work') - remaining(Date.now()); if (done >= 60000) logSession(done / 60000, tm.method, tm.course); }
    else if (tm.phase === 'flow') { var el = flowElapsed(Date.now()); if (el >= 60000) logSession(el / 60000, tm.method, tm.course); }
  }
  function setMethod(id) {
    if (METHOD_IDS.indexOf(id) === -1) return;
    var changed = id !== tm.method;
    if (changed) logPartial();
    tm.method = id;
    if (changed || !tm.running) resetTimer();
    renderModeCards(true);
  }
  function play() {
    unlockAudio();
    var now = Date.now();
    if (tm.phase === 'flow') {
      if (tm.running) { tm.flowAcc += now - tm.flowStart; tm.running = false; } else { tm.flowStart = now; tm.running = true; }
    } else if (tm.running) { tm.remain = Math.max(0, tm.endAt - now); tm.running = false; }
    else { tm.endAt = now + tm.remain; tm.running = true; }
    saveTimer(); afterRunChange();
  }
  function startBreak(phase, at) { tm.phase = phase; tm.remain = phaseDur(phase); tm.endAt = at + tm.remain; tm.running = true; }
  function completePhase(at, quiet) {
    var t = T();
    if (tm.phase === 'work') {
      logSession(phaseDur('work') / 60000, tm.method, tm.course);
      tm.cycle++;
      var c = cfg();
      startBreak((c.every && tm.cycle % c.every === 0) ? 'long' : 'break', at);
      if (!quiet) alertUser('work', t.workDone(Math.round(phaseDur('work') / 60000)), t.notifWork, t.notifWorkBody(Math.round(tm.remain / 60000)));
    } else if (tm.phase === 'flowbreak') {
      tm.phase = 'flow'; tm.flowAcc = 0; tm.running = false;
      if (!quiet) alertUser('break', t.breakDone, t.notifBreak, t.notifBreakBody);
    } else {
      tm.phase = 'work'; tm.remain = phaseDur('work'); tm.running = false;
      if (!quiet) alertUser('break', t.breakDone, t.notifBreak, t.notifBreakBody);
    }
    saveTimer();
  }
  function skip() {
    var now = Date.now(), t = T();
    if (tm.phase === 'flow') {
      var el = flowElapsed(now);
      if (el < 60000) { resetTimer(); return; }
      logSession(el / 60000, tm.method, tm.course);
      tm.flowBreakMs = Math.max(5, Math.round(el / 60000 / 5)) * 60000;
      tm.flowAcc = 0;
      startBreak('flowbreak', now);
      toast(t.workDone(Math.round(el / 60000)));
    } else if (tm.phase === 'work') {
      var done = phaseDur('work') - remaining(now);
      if (done >= 60000) logSession(done / 60000, tm.method, tm.course);
      tm.cycle++;
      var c = cfg();
      startBreak((c.every && tm.cycle % c.every === 0) ? 'long' : 'break', now);
    } else if (tm.phase === 'flowbreak') { tm.phase = 'flow'; tm.flowAcc = 0; tm.running = false; }
    else { tm.phase = 'work'; tm.remain = phaseDur('work'); tm.running = false; }
    saveTimer(); afterRunChange();
  }
  function catchUp() {
    var now = Date.now(), guard = 0;
    while (tm.running && tm.phase !== 'flow' && now >= tm.endAt && guard++ < 50) completePhase(tm.endAt, now - tm.endAt > 90000);
  }
  var tickTimer = null, dueTimer = null;
  function afterRunChange() {
    clearInterval(tickTimer); clearTimeout(dueTimer);
    if (tm.running) {
      tickTimer = setInterval(tick, 250);
      if (tm.phase !== 'flow') dueTimer = setTimeout(tick, Math.max(0, tm.endAt - Date.now()) + 30);
      acquireWake();
    } else releaseWake();
    renderTimer();
  }
  function tick() {
    if (tm.running && tm.phase !== 'flow' && Date.now() >= tm.endAt) { completePhase(tm.endAt, false); afterRunChange(); return; }
    renderTimer();
  }
  d.addEventListener('visibilitychange', function () { if (d.visibilityState === 'visible') { catchUp(); afterRunChange(); renderStats(); } });
  function fmtClock(ms) {
    var s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return h ? h + ':' + pad(m) + ':' + pad(sec) : pad(m) + ':' + pad(sec);
  }
  var dial = $('#dial'), ring = $('#ring');
  function renderTimer(noAnim) {
    var t = T(), now = Date.now(), flow = tm.phase === 'flow', text, progressV, label;
    if (flow) { var el = flowElapsed(now); text = fmtClock(Math.floor(el / 1000) * 1000); progressV = (el % 3600000) / 3600000; label = (tm.running || el > 0) ? t.phaseFlow : t.phaseIdleFlow; }
    else { var rem = remaining(now), dur = phaseDur(tm.phase) || 1; text = fmtClock(rem); progressV = rem / dur; label = tm.phase === 'work' ? t.phaseWork : tm.phase === 'long' ? t.phaseLong : t.phaseBreak; }
    if (noAnim) { dial.classList.add('no-anim'); requestAnimationFrame(function () { requestAnimationFrame(function () { dial.classList.remove('no-anim'); }); }); }
    ring.style.strokeDashoffset = String(1 - progressV);
    $('#time').textContent = text;
    $('#phase').textContent = label;
    $('#dialCourse').textContent = tm.course ? courseName(tm.course) : '';
    dial.classList.toggle('is-break', isBreak(tm.phase));
    dial.classList.toggle('is-running', tm.running);
    var partial = flow ? tm.flowAcc > 0 : tm.remain < phaseDur(tm.phase);
    setHTML($('#playIc'), ic(tm.running ? 'pause' : 'play'));
    $('#playLbl').textContent = tm.running ? t.pause : (partial ? t.resume : t.start);
    var skipBtn = $('#skipBtn');
    setHTML($('#skipIc'), ic(flow ? 'flag' : 'skip'));
    $('#skipLbl').textContent = flow ? t.finish : t.skip;
    skipBtn.title = flow ? t.finish : t.skip;
    $('#resetBtn').title = t.reset;
    var c = cfg(), cy = $('#cycles');
    if (c.every) {
      var filled = tm.phase === 'long' ? c.every : tm.cycle % c.every, dots = [];
      for (var i = 0; i < c.every; i++) dots.push(html`<i class="${i < filled ? 'on' : ''}"></i>`);
      setHTML(cy, html`${dots}`);
    } else setHTML(cy, html``);
    $('#customRow').hidden = tm.method !== 'custom';
    $('#cwork').textContent = t.customFocus + ' ' + tm.custom.work + ' ' + t.min;
    $('#cbrk').textContent = t.customBreak + ' ' + tm.custom.brk + ' ' + t.min;
    d.title = tm.running ? text + ' — ' + label : t.title;
  }

  /* Method carousel (Focus) */
  var mcar = $('#mcar'), mprev = $('#mPrev'), mnext = $('#mNext');
  function methodTiming(id) {
    if (id === 'custom') return tm.custom.work + '/' + tm.custom.brk;
    var tmr = METHOD[id].timer;
    return tmr.flow ? '∞' : tmr.work + '/' + tmr.brk;
  }
  function renderModeCards(scrollTo) {
    var t = T();
    mcar.setAttribute('aria-label', t.planMethod);
    setHTML(mcar, html`${METHOD_IDS.map(function (id) {
      var on = id === tm.method, m = METHOD[id];
      return html`<button type="button" class="mcard" role="radio" aria-checked="${String(on)}" tabindex="${on ? '0' : '-1'}" data-mode="${id}">
        <span class="mc-glyph" aria-hidden="true">${id === 'custom' ? '⚙' : (m.glyph === '20h' ? (lang === 'kk' ? '20 сағ' : '20 ч') : m.glyph)}</span>
        <span class="mc-name">${mname(id)}</span><span class="mc-time">${id !== 'custom' && m.timer.flow ? t.phaseIdleFlow : methodTiming(id) + ' ' + t.min}</span>
        <span class="mc-check" aria-hidden="true">${ic('check')}</span></button>`;
    })}`);
    var m = METHOD[tm.method];
    setHTML($('#methodInfo'), html`<b>${mname(tm.method)}</b>${m ? html`<span>${m[lang].tag}</span><button type="button" class="method-link" id="aboutMethod">${t.methodsLink}</button>` : ''}`);
    var about = $('#aboutMethod');
    if (about) about.addEventListener('click', function () { openGuide(tm.method); });
    if (scrollTo) requestAnimationFrame(function () { var sel = $('.mcard[aria-checked="true"]', mcar); if (sel) scrollCardIntoView(sel); });
    updateArrows();
  }
  function scrollCardIntoView(card) {
    var left = card.offsetLeft - (mcar.clientWidth - card.offsetWidth) / 2;
    mcar.scrollTo({ left: Math.max(0, left), behavior: reduced.matches ? 'auto' : 'smooth' });
  }
  /* Arrows switch to the previous / next method; swipe only scrolls, tap selects. */
  function updateArrows() {
    var i = METHOD_IDS.indexOf(tm.method);
    mprev.disabled = i <= 0;
    mnext.disabled = i >= METHOD_IDS.length - 1;
  }
  function stepMethod(dir) {
    var i = METHOD_IDS.indexOf(tm.method), n = clamp(i + dir, 0, METHOD_IDS.length - 1);
    if (n !== i) setMethod(METHOD_IDS[n]);
  }
  mprev.addEventListener('click', function () { stepMethod(-1); });
  mnext.addEventListener('click', function () { stepMethod(1); });
  window.addEventListener('resize', function () { var sel = $('.mcard[aria-checked="true"]', mcar); if (sel) scrollCardIntoView(sel); });
  mcar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-mode]');
    if (!b) return;
    var id = b.getAttribute('data-mode');
    if (id !== tm.method) { setMethod(id); toast(T().methodPicked(mname(id))); }
    var sel = $('.mcard[aria-checked="true"]', mcar); if (sel) sel.focus({ preventScroll: true });
  });
  mcar.addEventListener('keydown', function (e) {
    var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1, Home: -99, End: 99 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    var cards = $$('.mcard', mcar), i = cards.indexOf(d.activeElement);
    var n = keys[e.key] === 99 ? cards.length - 1 : keys[e.key] === -99 ? 0 : clamp((i < 0 ? 0 : i) + keys[e.key], 0, cards.length - 1);
    setMethod(cards[n].getAttribute('data-mode'));
    var sel = $('.mcard[aria-checked="true"]', mcar); if (sel) sel.focus({ preventScroll: true });
  });

  function renderCourseSelect() {
    var t = T(), sel = $('#courseSel');
    if (tm.course && !findCourse(tm.course)) tm.course = '';
    setHTML(sel, html`<option value="">${t.noCourse}</option>${courses.map(function (c) { return html`<option value="${c.r}">${courseName(c.r)}</option>`; })}`);
    sel.value = tm.course || '';
    $('#dialCourse').textContent = tm.course ? courseName(tm.course) : '';
  }
  $('#courseSel').addEventListener('change', function () { tm.course = findCourse(this.value) ? this.value : ''; saveTimer(); renderTimer(); });
  $('#playBtn').addEventListener('click', play);
  $('#skipBtn').addEventListener('click', skip);
  $('#resetBtn').addEventListener('click', function () { logPartial(); resetTimer(); });
  $('#customRow').addEventListener('click', function (e) {
    var b = e.target.closest('[data-step]');
    if (!b) return;
    var p = b.getAttribute('data-step').split(':'), key = p[0], delta = +p[1], lim = key === 'work' ? [5, 180] : [1, 60];
    tm.custom[key] = clamp(tm.custom[key] + delta, lim[0], lim[1]);
    resetTimer(); renderModeCards(false);
  });

  function renderToggles() {
    $('#tSound').setAttribute('aria-pressed', String(settings.sound));
    $('#tNotify').setAttribute('aria-pressed', String(settings.notify && 'Notification' in window && Notification.permission === 'granted'));
    $('#tWake').setAttribute('aria-pressed', String(settings.wake));
  }
  $('#tSound').addEventListener('click', function () { settings.sound = !settings.sound; saveSettings(); renderToggles(); if (settings.sound) { unlockAudio(); chime('work'); } });
  $('#tNotify').addEventListener('click', function () {
    var t = T();
    if (!('Notification' in window)) { toast(t.notifDenied); return; }
    if (settings.notify && Notification.permission === 'granted') { settings.notify = false; saveSettings(); renderToggles(); return; }
    Notification.requestPermission().then(function (p) { settings.notify = p === 'granted'; saveSettings(); renderToggles(); if (p !== 'granted') toast(t.notifDenied); });
  });
  $('#tWake').addEventListener('click', function () {
    if (!('wakeLock' in navigator)) { toast(T().wakeNA); return; }
    settings.wake = !settings.wake; saveSettings(); renderToggles();
    if (settings.wake && tm.running) acquireWake(); else releaseWake();
  });
  var wakeLock = null;
  function acquireWake() {
    if (!settings.wake || !('wakeLock' in navigator) || wakeLock || d.visibilityState !== 'visible') return;
    navigator.wakeLock.request('screen').then(function (l) { wakeLock = l; l.addEventListener('release', function () { wakeLock = null; }); }).catch(function () {});
  }
  function releaseWake() { if (wakeLock) { wakeLock.release().catch(function () {}); wakeLock = null; } }
  var actx = null;
  function unlockAudio() {
    if (actx) { if (actx.state === 'suspended') actx.resume(); return; }
    var AC = window.AudioContext || window.webkitAudioContext;
    if (AC) try { actx = new AC(); } catch (e) { actx = null; }
  }
  function chime(kind) {
    if (!settings.sound || !actx) return;
    var notes = kind === 'work' ? [659.25, 987.77, 1318.5] : [987.77, 783.99, 659.25], t0 = actx.currentTime;
    notes.forEach(function (fq, i) {
      var o = actx.createOscillator(), g = actx.createGain(), st = t0 + i * 0.16;
      o.type = 'sine'; o.frequency.value = fq;
      g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.18, st + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, st + 1.1);
      o.connect(g).connect(actx.destination); o.start(st); o.stop(st + 1.2);
    });
  }
  function alertUser(kind, toastMsg, title, body) {
    chime(kind);
    if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) try { navigator.vibrate([180, 90, 180]); } catch (e) { /* not supported */ }
    toast(toastMsg);
    if (!settings.notify || !('Notification' in window) || Notification.permission !== 'granted' || d.visibilityState === 'visible') return;
    var opts = { body: body, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'focus-timer', renotify: true, data: { url: './#/focus' } };
    if (navigator.serviceWorker && navigator.serviceWorker.controller) navigator.serviceWorker.ready.then(function (reg) { reg.showNotification(title, opts); }).catch(function () {});
    else try { new Notification(title, opts); } catch (e) { /* not supported */ }
  }

  /* ================= Methods (guides) ================= */
  function renderMethods() {
    var t = T();
    setHTML($('#methodGrid'), html`${METHODS.map(function (m) {
      var x = m[lang];
      return html`<li><button type="button" class="method-card panel" data-guide="${m.id}"><span class="m-glyph" aria-hidden="true">${m.glyph === '20h' ? (lang === 'kk' ? '20 сағ' : '20 ч') : m.glyph}</span>
        <span class="m-name">${x.name}</span><span class="m-tag">${x.tag}</span><span class="m-more">${t.more}${ic('arrow')}</span></button></li>`;
    })}`);
  }
  $('#methodGrid').addEventListener('click', function (e) { var b = e.target.closest('[data-guide]'); if (b) openGuide(b.getAttribute('data-guide')); });
  function openGuide(id) {
    var m = METHOD[id];
    if (!m) return;
    var t = T(), x = m[lang], spaced = m.tool === 'spaced';
    openSheet({
      title: x.name, sub: x.tag,
      body: html`<div class="guide"><h3>${t.fits}</h3><p>${x.fits}</p><h3>${t.howTo}</h3><ol>${x.steps.map(function (s) { return html`<li><span>${s}</span></li>`; })}</ol>
        <div class="tip"><b>${t.tip}.</b> ${x.tip}</div>
        ${m.links ? html`<h3>${t.ideas}</h3><div class="links-list">${m.links.map(function (r) { return html`<a href="${url(r)}" target="_blank" rel="noopener noreferrer"><span>${courseName(r)}</span>${ic('ext', 'ext')}</a>`; })}</div>` : ''}
        ${spaced ? html`<div class="field"><label class="lbl" for="spTopic">${t.spTopic}</label><input class="input" id="spTopic" type="text" maxlength="80" placeholder="${t.spTopicPh}"></div>
          <div class="field"><label class="lbl" for="spDate">${t.spDate}</label><input class="input" id="spDate" type="date" value="${dayKey(new Date())}"></div>
          <div class="field"><span class="lbl">${t.spDates}</span><ul class="sp-list" id="spList"></ul></div>
          <div class="row-actions"><button type="button" class="btn btn-ghost" id="spCal">${ic('calendar')}${t.spCal}</button></div>` : ''}
        ${m.timer ? html`<div class="sheet-actions"><button type="button" class="btn btn-primary" id="guideStart">${ic('play')}${t.startMethod}</button></div>` : ''}</div>`,
      mount: function (body) {
        var gs = $('#guideStart', body);
        if (gs) gs.addEventListener('click', function () { closeSheet(); setMethod(id); if (route() !== 'focus') location.hash = '#/focus'; setTimeout(play, 60); });
        if (!spaced) return;
        var OFF = [1, 3, 7, 14, 30];
        var dates = function () {
          var v = $('#spDate', body).value, base = /^\d{4}-\d{2}-\d{2}$/.test(v) ? new Date(v + 'T00:00:00') : new Date();
          if (isNaN(base)) base = new Date();
          return OFF.map(function (n) { return { n: n, dt: new Date(base.getFullYear(), base.getMonth(), base.getDate() + n, 19, 0) }; });
        };
        var draw = function () { setHTML($('#spList', body), html`${dates().map(function (z) { return html`<li><span>${t.spAfter(z.n)}</span><b>${fmtDate(z.dt)}</b></li>`; })}`); };
        $('#spDate', body).addEventListener('input', draw);
        draw();
        $('#spCal', body).addEventListener('click', function () {
          var topic = $('#spTopic', body).value.trim().slice(0, 80) || t.spDefault;
          var ics = icsWrap(dates().map(function (z, i) { return { uid: 'rep-' + Date.now() + '-' + i + '@tegin-it', start: z.dt, dur: 20, summary: t.spSummary(topic) + ' (' + (i + 1) + '/5)' }; }));
          downloadBlob(slug(topic) + '-repeat.ics', new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
          toast(t.calSaved);
        });
      }
    });
  }

  /* ================= Roadmap ================= */
  function rmMethod(r) { var p = progress[r]; return (p && p.m) || (findCourse(r) || {}).method || tm.method; }
  function rmDone(r) { var o = {}; (progress[r] ? progress[r].d : []).forEach(function (i) { o[i] = true; }); return o; }
  function setProgress(r, fn) {
    var p = progress[r] || { d: [], m: null };
    fn(p);
    if (!p.d.length && !p.m) delete progress[r]; else progress[r] = p;
    saveProgress();
  }
  function roadmapMd(r, id) {
    var t = T(), x = RM[r], it = INDEX[r], e = estimate(r, id), k = li(), out = [];
    out.push('# ' + nameOf(it) + ' — Roadmap', '', url(r), '', '- ' + t.kind[x.kind]);
    if (x.kind === 'collection' || x.kind === 'reference') out.push('- ' + t.authorRoute);
    out.push('- ' + t.method + ': ' + mname(id), '- ' + t.estimate + ': ' + t.hrsRange(e.lo, e.hi) + '; ' + t.calLine(e.d1, e.d2, e.w1, e.w2, e.fromCourse ? t.rhythmCourse(e.perWeek, e.perDay) : t.rhythmMethod(e.perDay, e.perWeek)),
      '- ' + t.pre + ': ' + x.pre[k], '');
    var done = rmDone(r);
    x.s.forEach(function (s, i) {
      out.push('## ' + (done[i] ? '[x] ' : '[ ] ') + (i + 1) + '. ' + s.t[k], '', '- ' + t.hrsRange(e.stages[i].lo, e.stages[i].hi) + ', ' + t.level[s.l - 1].toLowerCase() + ' ' + t.levelWord,
        '- ' + t.topics + ': ' + s.k.join(', '), '- ' + t.practice + ': ' + s.p[k], '- ' + t.checkpoint + ': ' + s.c[k], '');
    });
    out.push('## ' + t.fin, '', x.fin[k], '');
    if (x.note) out.push('> ' + t.rmNote + ': ' + x.note[k], '');
    out.push(t.source(fmtCheck(RM_CHECKED)), '', t.sketchFooter);
    return out.join('\n');
  }
  function openRoadmap(r) {
    if (!RM[r] || !INDEX[r]) return;
    var t = T(), x = RM[r], it = INDEX[r], nm = nameOf(it), collection = x.kind === 'collection' || x.kind === 'reference';
    openSheet({
      wide: true, title: nm, sub: t.kind[x.kind],
      body: html`<div class="rm">
        <div class="rm-actions">
          <a class="btn btn-ghost btn-sm" href="${url(r)}" target="_blank" rel="noopener noreferrer">${ic('ext')}${t.openRepo}</a>
          <span class="rm-plan">${addBtn(r)}<span>${findCourse(r) ? t.inMy : t.addToMy}</span></span>
        </div>
        ${collection ? html`<p class="rm-route">${ic('info')}<span>${t.authorRoute}</span></p>` : ''}
        <section class="rm-block" aria-labelledby="rmMethodLbl">
          <h3 class="rm-h" id="rmMethodLbl">${t.method}</h3>
          <div class="chip-row rm-methods" id="rmMethods" role="group" aria-labelledby="rmMethodLbl"></div>
          <div class="rm-estimate" id="rmEstimate" aria-live="polite"></div>
        </section>
        <section class="rm-block">
          <div class="rm-sketch-head"><h3 class="rm-h">${t.sketchTitle}</h3>
            <div class="rm-dl"><button type="button" class="btn btn-ghost btn-sm" id="dlSvg">${ic('download')}SVG</button><button type="button" class="btn btn-ghost btn-sm" id="dlPng">${ic('image')}PNG</button><button type="button" class="btn btn-ghost btn-sm" id="dlMd">${ic('doc')}.md</button><button type="button" class="icon-btn" id="rmZoom" aria-pressed="false" aria-label="${t.zoom}" title="${t.zoom}">${ic('zoom')}</button></div></div>
          <figure class="sketch-wrap" id="sketchWrap"></figure>
        </section>
        <section class="rm-block">
          <div class="rm-progress"><div class="progress"><i id="rmBar"></i></div><span id="rmProgressText"></span></div>
          <div class="rm-pre"><h3 class="rm-h">${t.pre}</h3><p>${x.pre[li()]}</p></div>
          <h3 class="rm-h">${t.stages}</h3>
          <ol class="rm-stages" id="rmStages"></ol>
          <div class="rm-final"><h3 class="rm-h">${ic('flag')}${t.fin}</h3><p>${x.fin[li()]}</p></div>
          ${x.note ? html`<p class="rm-note">${ic('info')}<span><b>${t.rmNote}.</b> ${x.note[li()]}</span></p>` : ''}
          <p class="hint">${t.source(fmtCheck(RM_CHECKED))}</p>
          <div class="row-actions"><button type="button" class="btn btn-danger" id="rmReset">${ic('reset')}${t.resetProgress}</button></div>
        </section></div>`,
      onClose: function () { updateCourseButtons(); },
      mount: function (body) {
        var method = rmMethod(r), svg = null;
        function drawMethods() {
          setHTML($('#rmMethods', body), html`${METHOD_IDS.map(function (id) {
            var e = estimate(r, id);
            return html`<button type="button" class="chip" data-m="${id}" aria-pressed="${String(id === method)}">${mname(id)} <small>${e.lo + '–' + e.hi}</small></button>`;
          })}`);
        }
        function drawEstimate() {
          var e = estimate(r, method), all = METHOD_IDS.map(function (id) { return { id: id, e: estimate(r, id) }; });
          var maxW = Math.max.apply(null, all.map(function (z) { return z.e.w2; }));
          setHTML($('#rmEstimate', body), html`<div class="est-main"><span class="est-label">${t.estimate}</span><b class="est-hours">${t.hrsRange(e.lo, e.hi)}</b>
              <span class="est-cal">${t.calLine(e.d1, e.d2, e.w1, e.w2, e.fromCourse ? t.rhythmCourse(e.perWeek, e.perDay) : t.rhythmMethod(e.perDay, e.perWeek))}</span></div>
            <div class="est-compare"><span class="est-label">${t.compare}</span><ul>${all.map(function (z) {
              return html`<li class="${z.id === method ? 'on' : ''}"><span class="ec-name">${mname(z.id)}</span><span class="ec-bar"><i data-w="${(z.e.w2 / maxW * 100).toFixed(1)}"></i></span><span class="ec-val">${z.e.w1 + '–' + z.e.w2}</span></li>`;
            })}</ul></div>
            <p class="hint">${t.estimateNote}</p>`);
          applyWidths($('#rmEstimate', body));
        }
        function drawStages() {
          var e = estimate(r, method), done = rmDone(r), k = li();
          setHTML($('#rmStages', body), html`${x.s.map(function (s, i) {
            var id = 'st' + i;
            return html`<li class="${'rm-stage' + (done[i] ? ' done' : '')}">
              <label class="st-check" for="${id}"><input type="checkbox" id="${id}" data-st="${i}" ${done[i] ? trusted('checked') : ''}><span class="box" aria-hidden="true">${ic('check')}</span><span class="sr">${t.markStage(i + 1)}</span></label>
              <div class="st-body"><div class="st-head"><span class="st-num">${i + 1}</span><b class="st-title">${s.t[k]}</b></div>
                <div class="st-meta"><span class="st-time">${ic('timer')}${t.hrsRange(e.stages[i].lo, e.stages[i].hi)}</span><span class="${'lvl lvl-' + s.l}">${t.level[s.l - 1]}</span></div>
                <div class="st-tags">${s.k.map(function (kw) { return html`<span>${kw}</span>`; })}</div>
                <p class="st-p"><b>${t.practice}:</b> ${s.p[k]}</p><p class="st-c"><b>${t.checkpoint}:</b> ${s.c[k]}</p></div></li>`;
          })}`);
          var n = Object.keys(done).length;
          $('#rmBar', body).style.width = (n / x.s.length * 100) + '%';
          $('#rmProgressText', body).textContent = t.progress(n, x.s.length);
        }
        function drawSketch() {
          var wrapEl = $('#sketchWrap', body), e = estimate(r, method);
          var narrowSketch = wrapEl.clientWidth < 720;
          svg = Sketch.render({ repo: r, name: nm, rm: x, L: t, li: li(), est: e.stages, total: e, methodName: mname(method), done: rmDone(r), narrow: narrowSketch, checked: fmtCheck(RM_CHECKED) });
          svg.setAttribute('class', 'sketch');
          if (wrapEl.classList.contains('zoomed')) svg.style.width = svg.getAttribute('width') + 'px';
          svg.setAttribute('aria-label', t.sketchTitle + ': ' + nm);
          wrapEl.replaceChildren(svg);
        }
        function redraw() { drawMethods(); drawEstimate(); drawStages(); drawSketch(); }
        var fontsReady = d.fonts && d.fonts.load ? Promise.all([d.fonts.load("700 20px Caveat"), d.fonts.load("500 20px Caveat")]).catch(function () {}) : Promise.resolve();
        drawMethods(); drawEstimate(); drawStages();
        fontsReady.then(function () { if (sheetOpts && d.contains(body)) drawSketch(); });
        $('#rmMethods', body).addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-m]');
          if (!b) return;
          method = b.getAttribute('data-m');
          setProgress(r, function (p) { p.m = method; });
          redraw();
        });
        $('#rmStages', body).addEventListener('change', function (ev) {
          var cb = ev.target.closest('[data-st]');
          if (!cb) return;
          var i = +cb.getAttribute('data-st');
          setProgress(r, function (p) { var at = p.d.indexOf(i); if (cb.checked && at === -1) p.d.push(i); if (!cb.checked && at !== -1) p.d.splice(at, 1); p.d.sort(function (a, b) { return a - b; }); });
          drawStages(); drawSketch();
          var again = $('[data-st="' + i + '"]', body); if (again) again.focus({ preventScroll: true });
        });
        $('#rmReset', body).addEventListener('click', function () { setProgress(r, function (p) { p.d = []; }); drawStages(); drawSketch(); toast(t.progressReset); });
        $('#rmZoom', body).addEventListener('click', function () {
          var w = $('#sketchWrap', body), on = !w.classList.contains('zoomed');
          w.classList.toggle('zoomed', on); this.setAttribute('aria-pressed', String(on)); drawSketch();
        });
        $('.rm-plan', body).addEventListener('click', function (ev) { if (!ev.target.closest('[data-add]')) $('[data-add]', this).click(); });
        var base = slug(nm) + '-roadmap-' + lang;
        $('#dlSvg', body).addEventListener('click', function () {
          var full = Sketch.render({ repo: r, name: nm, rm: x, L: t, li: li(), est: estimate(r, method).stages, total: estimate(r, method), methodName: mname(method), done: rmDone(r), narrow: false, checked: fmtCheck(RM_CHECKED) });
          Sketch.toSvgString(full).then(function (s) { downloadBlob(base + '.svg', new Blob([s], { type: 'image/svg+xml' })); });
        });
        $('#dlPng', body).addEventListener('click', function () {
          var full = Sketch.render({ repo: r, name: nm, rm: x, L: t, li: li(), est: estimate(r, method).stages, total: estimate(r, method), methodName: mname(method), done: rmDone(r), narrow: false, checked: fmtCheck(RM_CHECKED) });
          Sketch.toPngBlob(full, 2).then(function (b) { downloadBlob(base + '.png', b); }).catch(function () { toast('PNG: error'); });
        });
        $('#dlMd', body).addEventListener('click', function () { downloadBlob(base + '.md', new Blob([roadmapMd(r, method)], { type: 'text/markdown;charset=utf-8' })); });
        var rz; window.addEventListener('resize', function onRz() { if (!sheetOpts || !d.contains(body)) { window.removeEventListener('resize', onRz); return; } clearTimeout(rz); rz = setTimeout(drawSketch, 200); });
      }
    });
  }

  d.addEventListener('click', function (e) {
    var b = e.target.closest('[data-add]');
    if (b) { e.preventDefault(); openPlan(b.getAttribute('data-add')); return; }
    b = e.target.closest('[data-rm]');
    if (b) { e.preventDefault(); openRoadmap(b.getAttribute('data-rm')); }
  });

  /* ================= Contact ================= */
  function openContact() {
    var t = T();
    if (!TG) { toast(t.linkBroken); return; }
    openSheet({
      title: t.contactBtn, sub: t.contactText,
      body: html`<div class="field"><span class="lbl">${t.contactTopic}</span>${chipRow('topic', t.contactTopics.map(function (x, i) { return { v: String(i), l: x }; }), '0')}</div>
        <div class="field"><label class="lbl" for="ctCourse">${t.contactCourse}</label><select class="select" id="ctCourse"><option value="">—</option>${Object.keys(INDEX).sort(function (a, b) { return courseName(a).localeCompare(courseName(b)); }).map(function (r) { return html`<option value="${r}">${courseName(r)}</option>`; })}</select></div>
        <div class="field"><label class="lbl" for="ctMsg">${t.contactMsg}</label><textarea class="input textarea" id="ctMsg" maxlength="1000" rows="5" placeholder="${t.contactPh}" data-autofocus></textarea><span class="counter" id="ctCount">0 / 1000</span></div>
        <p class="hint">${t.contactHint}</p>
        <div class="sheet-actions"><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener noreferrer">${ic('send')}${t.tgBtn}</a><button type="button" class="btn btn-primary" id="ctSend">${ic('copy')}${t.contactSend}</button></div>`,
      mount: function (body) {
        bindChips(body);
        var msg = $('#ctMsg', body);
        msg.addEventListener('input', function () { $('#ctCount', body).textContent = msg.value.length + ' / 1000'; });
        $('#ctSend', body).addEventListener('click', function () {
          var text = msg.value.trim().slice(0, 1000);
          if (!text) { toast(t.contactEmpty); msg.focus(); return; }
          var r = $('#ctCourse', body).value, topic = t.contactTopics[+readChips(body, 'topic')] || t.contactTopics[0];
          var full = t.contactGreeting(topic, INDEX[r] ? courseName(r) : '', text);
          var openTg = function () { var a = d.createElement('a'); a.href = TG; a.target = '_blank'; a.rel = 'noopener noreferrer'; d.body.appendChild(a); a.click(); a.remove(); };
          (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(full) : Promise.reject(new Error('clipboard')))
            .then(function () { toast(t.contactCopied); openTg(); }, function () { toast(t.contactNoCopy, null, 6000); msg.select(); });
        });
      }
    });
  }
  $$('[data-contact]').forEach(function (b) { b.addEventListener('click', openContact); });

  /* ================= Router ================= */
  var views = {}; $$('.view').forEach(function (v) { views[v.getAttribute('data-view')] = v; });
  var currentView = null, scrollMemo = {};
  function route() { var h = location.hash.replace(/^#/, ''); return h === '/focus' ? 'focus' : h === '/methods' ? 'methods' : 'catalog'; }
  function showView(name) {
    if (name === currentView) return;
    if (currentView) scrollMemo[currentView] = window.scrollY;
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== name; });
    var v = views[name];
    v.classList.remove('view-in'); void v.offsetWidth; v.classList.add('view-in');
    var prev = currentView;
    currentView = name;
    $$('[data-route]').forEach(function (a) { if (a.getAttribute('data-route') === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    moveThumbs();
    if (prev) window.scrollTo({ top: scrollMemo[name] || 0, behavior: 'instant' });
    if (name === 'catalog') observeSections(); else if (spy) spy.disconnect();
    if (name === 'focus') { catchUp(); renderStats(); renderMy(); renderTimer(true); requestAnimationFrame(function () { renderModeCards(true); }); }
    updateInstallUI();
  }
  window.addEventListener('hashchange', function () { if (!sheetRoot.hidden) closeSheet(); showView(route()); });
  $('#brandLink').addEventListener('click', function (e) { if (route() === 'catalog') { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduced.matches ? 'auto' : 'smooth' }); } });
  $('.skip').addEventListener('click', function (e) { e.preventDefault(); var m = $('#main'); m.setAttribute('tabindex', '-1'); m.focus(); });
  d.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || !sheetRoot.hidden || route() !== 'catalog') return;
    var a = d.activeElement, tag = (a && a.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (a && a.isContentEditable)) return;
    e.preventDefault(); q.focus({ preventScroll: true });
    q.scrollIntoView({ block: 'center', behavior: reduced.matches ? 'auto' : 'smooth' });
  });
  function moveSegThumb(seg, active) {
    var th = $('.seg-thumb', seg);
    if (!th || !active || !active.offsetWidth) return;
    th.style.width = active.offsetWidth + 'px';
    th.style.transform = 'translateX(' + active.offsetLeft + 'px)';
  }
  function moveThumbs(instant) {
    [[$('#langSeg'), $('#langSeg [data-lang="' + lang + '"]')], [$('#tabsTop'), $('#tabsTop [aria-current="page"]')]].forEach(function (p) {
      var th = $('.seg-thumb', p[0]);
      if (instant) th.classList.add('no-trans');
      moveSegThumb(p[0], p[1]);
      if (instant) requestAnimationFrame(function () { th.classList.remove('no-trans'); });
    });
    var idx = ['catalog', 'focus', 'methods'].indexOf(currentView), tb = $('.tabbar-thumb');
    if (instant) tb.classList.add('no-trans');
    tb.style.transform = 'translateX(' + (Math.max(0, idx) * 100) + '%)';
    if (instant) requestAnimationFrame(function () { tb.classList.remove('no-trans'); });
  }
  window.addEventListener('resize', function () { moveThumbs(true); });

  /* ================= Language & theme ================= */
  function renderAll() { renderStatic(); renderCatalog(); renderMethods(); renderMy(); renderModeCards(false); renderCourseSelect(); renderStats(); renderToggles(); renderTimer(true); }
  function setLang(next) {
    if (next === lang || (next !== 'kk' && next !== 'ru')) return;
    lang = next;
    store.raw('itk-lang', lang);
    try { var u = new URL(location.href); if (lang === 'ru') u.searchParams.set('lang', 'ru'); else u.searchParams.delete('lang'); history.replaceState(null, '', u); } catch (e) { /* file:// */ }
    moveSegThumb($('#langSeg'), $('#langSeg [data-lang="' + lang + '"]'));
    if (sheetOpts) closeSheet();
    if (reduced.matches) { renderAll(); moveThumbs(true); return; }
    d.body.classList.add('swapping');
    setTimeout(function () { renderAll(); moveThumbs(true); requestAnimationFrame(function () { d.body.classList.remove('swapping'); }); }, 120);
  }
  $('#langSeg').addEventListener('click', function (e) { var b = e.target.closest('button[data-lang]'); if (b) setLang(b.getAttribute('data-lang')); });
  var themeBtn = $('#themeBtn'), sysDark = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() { var t = root.getAttribute('data-theme'); return (t === 'dark' || t === 'light') ? t : (sysDark.matches ? 'dark' : 'light'); }
  function updateThemeLabel() {
    var cur = currentTheme();
    themeBtn.setAttribute('data-mode', cur);
    themeBtn.setAttribute('aria-label', cur === 'dark' ? T().toLight : T().toDark);
    if (root.getAttribute('data-theme')) $$('meta[name="theme-color"]').forEach(function (m) { m.setAttribute('content', cur === 'dark' ? '#05141B' : '#EAF1F4'); });
  }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.classList.add('no-trans');
    root.setAttribute('data-theme', next);
    store.raw('itk-theme', next);
    updateThemeLabel();
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove('no-trans'); }); });
  });
  if (sysDark.addEventListener) sysDark.addEventListener('change', updateThemeLabel);

  /* ================= Logo tilt (responds to the pointer) ================= */
  (function logoTilt() {
    var stage = $('#logoStage'), fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!stage) return;
    stage.addEventListener('pointermove', function (e) {
      if (!fine.matches || reduced.matches) return;
      var r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg');
      stage.style.setProperty('--ry', (x * 12).toFixed(2) + 'deg');
      stage.style.setProperty('--gx', ((x + 0.5) * 100).toFixed(1) + '%');
      stage.style.setProperty('--gy', ((y + 0.5) * 100).toFixed(1) + '%');
    });
    stage.addEventListener('pointerleave', function () { ['--rx', '--ry', '--gx', '--gy'].forEach(function (p) { stage.style.removeProperty(p); }); });
  })();

  /* ================= Install & updates (PWA) ================= */
  var ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(ua);
  var isInApp = /Instagram|FBAN|FBAV|FB_IAB|Line\/|Telegram|TikTok|musical_ly|Bytedance|; wv\)/i.test(ua);
  var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; updateInstallUI(); });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; standalone = true; updateInstallUI(); toast(T().installed); });
  function canInstall() { return !standalone && (!!deferredPrompt || isIOS || isInApp || isAndroid); }
  function updateInstallUI() {
    var later = store.get('itk-install-later'), dismissed = isNum(later, 0, 1e14) && later > Date.now() - 14 * 864e5;
    $('#installBtn').hidden = !canInstall();
    $('#installCard').hidden = !canInstall() || dismissed || currentView !== 'catalog' || d.body.classList.contains('searching');
  }
  function doInstall() {
    var t = T();
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(function () { deferredPrompt = null; updateInstallUI(); }); return; }
    if (isInApp) {
      openSheet({ title: t.inappTitle, body: html`<p class="lead-sm">${t.inappText}</p><div class="sheet-actions"><button type="button" class="btn btn-primary" id="copyLink">${ic('copy')}${t.copyLink}</button></div>`, mount: function (b) {
        $('#copyLink', b).addEventListener('click', function () {
          var u = location.href.split('#')[0];
          (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject(new Error('clipboard'))).then(function () { toast(t.copied); }, function () { toast(u, null, 8000); });
        });
      } });
      return;
    }
    var steps = isIOS ? t.iosSteps : t.androidSteps;
    openSheet({ title: t.installTitle, body: html`<p class="lead-sm">${t.installText}</p><ol class="steps">${steps.map(function (s, i) { return html`<li><span>${s}${isIOS && i === 0 ? html` ${ic('share')}` : ''}</span></li>`; })}</ol>` });
  }
  $('#installBtn').addEventListener('click', doInstall);
  $('#installGo').addEventListener('click', doInstall);
  $('#installLater').addEventListener('click', function () { store.set('itk-install-later', Date.now()); updateInstallUI(); });

  var reloading = false, updateRequested = false;
  function offerUpdate(worker) {
    var t = T();
    toast(t.updateReady, { label: t.updateNow, run: function () { updateRequested = true; worker.postMessage({ type: 'SKIP_WAITING' }); } }, 30000);
  }
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.addEventListener('controllerchange', function () { if (reloading || !updateRequested) return; reloading = true; location.reload(); });
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(TT ? TT.createScriptURL('sw.js') : 'sw.js').then(function (reg) {
        if (reg.waiting && navigator.serviceWorker.controller) offerUpdate(reg.waiting);
        reg.addEventListener('updatefound', function () {
          var w = reg.installing;
          if (w) w.addEventListener('statechange', function () { if (w.state === 'installed' && navigator.serviceWorker.controller) offerUpdate(w); });
        });
      }).catch(function () { /* offline mode unavailable */ });
    });
  }

  /* ================= Init ================= */
  hydrateIcons(d);
  catchUp();
  renderAll();
  showView(route());
  if (tm.running) afterRunChange();
  moveThumbs(true);
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { moveThumbs(true); updateArrows(); });
  setTimeout(function () { d.body.classList.remove('first-load'); }, 2600);
  if (!navigator.onLine) setTimeout(function () { toast(T().offline); }, 600);
  if (!storageOk) setTimeout(function () { toast(T().storageOff, null, 6000); }, 900);
  window.addEventListener('load', function () { d.body.classList.add('loaded'); });
})();
