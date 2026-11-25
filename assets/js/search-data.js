// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Research-backed analysis on Applied AI, Large Language Models, Generative AI, responsible adoption and real-world implementation across Latin America.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected research by Jorge Valverde-Rebaza on Large Language Models, Generative AI, Natural Language Processing, responsible AI, data analytics and complex networks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Applied AI case studies in Large Language Models, healthcare, education, enterprise systems and government, connecting rigorous research with real-world implementation in Latin America.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A collection of my open-source projects and research code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses and teaching activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-advisory",
          title: "Advisory",
          description: "AI strategy and Generative AI advisory for organizations moving from experimentation to responsible, measurable and scalable implementation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/advisory/";
          },
        },{id: "nav-media",
          title: "Media",
          description: "Talks and interviews in newspapers and on television about Artificial Intelligence, technology and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "post-llms-para-análisis-de-sentimiento-político-en-redes-sociales",
        
          title: "LLMs para análisis de sentimiento político en redes sociales",
        
        description: "Cómo los LLMs superan a los modelos tradicionales para interpretar el lenguaje político en español en múltiples plataformas.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llms-sentiment-analysis-politics/";
          
        },
      },{id: "post-ai-is-already-reshaping-education-reflections-from-edunine-2026",
        
          title: "AI is Already Reshaping Education — Reflections from EDUNINE 2026",
        
        description: "Key takeaways from EDUNINE 2026 at Tecnológico de Monterrey, where AI, ethics, and education converged.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/edunine-2026-ai-education/";
          
        },
      },{id: "post-data-mining-data-science-y-data-analytics-del-pipeline-kdd-a-la-era-llmops",
        
          title: "Data Mining, Data Science y Data Analytics — Del pipeline KDD a la...",
        
        description: "Por qué confundir estos tres conceptos genera fricción en proyectos reales, y cómo el marco KDD ayuda a ordenar roles, pipelines y expectativas.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/data-mining-science-analytics-kdd-llmops/";
          
        },
      },{id: "post-generative-ai-for-evidence-based-entrepreneurship-reflections-from-viii-eiie",
        
          title: "Generative AI for Evidence-Based Entrepreneurship — Reflections from VIII EIIE",
        
        description: "Why early-stage ventures fail even when founders follow established frameworks, and how LLMs can help strengthen problem quantification and validation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/genai-evidence-based-entrepreneurship-eiie/";
          
        },
      },{id: "post-a-cubic-millimeter-of-the-human-brain-what-it-tells-us-about-ai",
        
          title: "A Cubic Millimeter of the Human Brain — What It Tells Us About...",
        
        description: "A fragment of human cortex has been mapped in extraordinary detail. What does it mean for how we build AI systems?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cubic-millimeter-brain-ai/";
          
        },
      },{id: "post-why-ml-design-patterns-matter-more-than-models",
        
          title: "Why ML Design Patterns Matter More Than Models",
        
        description: "Production success in ML depends not on the latest architecture, but on reusable patterns that make systems endure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ml-design-patterns/";
          
        },
      },{id: "post-llm-governance-from-data-to-models-to-decision-infrastructure",
        
          title: "LLM Governance — From Data to Models to Decision Infrastructure",
        
        description: "Why governing LLMs requires more than classic AI frameworks, and how LLM4Gov shows a responsible path forward for the public sector.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/llm-governance-llm4gov/";
          
        },
      },{id: "post-genai-for-evidence-based-entrepreneurship-viii-eiie-at-innovation-fest-2025",
        
          title: "GenAI for Evidence-Based Entrepreneurship — VIII EIIE at Innovation Fest 2025",
        
        description: "Reflections from the VIII International Research Meeting in Entrepreneurship, where AI, innovation, and responsible entrepreneurship converged in Guadalajara.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/eiie-innovation-fest-genai-entrepreneurship/";
          
        },
      },{id: "post-méxico-ia-latam-is-no-longer-watching-the-ai-revolution-we-are-building-it",
        
          title: "México IA+ — LATAM Is No Longer Watching the AI Revolution, We Are...",
        
        description: "Reflections from México IA+ at Expo Santa Fe, where AI stopped being futurism and became national strategy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mexico-ia-plus-latam-ai-revolution/";
          
        },
      },{id: "post-nlp-with-python-the-book-that-made-today-39-s-llms-possible",
        
          title: "NLP with Python — The Book That Made Today&#39;s LLMs Possible",
        
        description: "A timeless resource for understanding the NLP foundations behind modern language models, still essential for anyone starting in AI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nlp-python-bird-klein-loper/";
          
        },
      },{id: "post-the-real-value-of-ai-is-not-the-model-it-39-s-the-ecosystem-around-it",
        
          title: "The Real Value of AI Is Not the Model — It&#39;s the Ecosystem...",
        
        description: "Why ROI in AI depends not on the algorithm, but on the full cycle of data, deployment, monitoring, and feedback.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-value-ecosystem-not-model/";
          
        },
      },{id: "post-public-trust-in-ai-is-not-binary-it-depends-on-context",
        
          title: "Public Trust in AI Is Not Binary — It Depends on Context",
        
        description: "What a UK study on AI perception reveals about trust, regulation, and what it means for LATAM&#39;s own AI adoption journey.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/public-trust-ai-context-latam/";
          
        },
      },{id: "post-introduction-to-ml-systems-a-blueprint-for-the-next-generation-of-ai-engineers",
        
          title: "Introduction to ML Systems — A Blueprint for the Next Generation of AI...",
        
        description: "A rare textbook that turns fragmented ML concepts into a coherent vision of what AI systems really are — not just models, but end-to-end architectures.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/intro-ml-systems-reddi/";
          
        },
      },{id: "post-ai-roi-in-2025-agents-in-action-not-in-theory",
        
          title: "AI ROI in 2025 — Agents in Action, Not in Theory",
        
        description: "A Google study with 3,500+ executives shows AI agents are no longer prototypes — they are real ROI engines. What does this mean for LATAM?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-roi-2025-agents-latam/";
          
        },
      },{id: "post-razonamiento-en-llms-de-cot-a-maps-y-gpt-5",
        
          title: "Razonamiento en LLMs: de CoT a MAPS y GPT-5",
        
        description: "Evolución del razonamiento en IA — desde Chain-of-Thought hasta MAPS — y qué implica hablar de razonamiento en GPT-5.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/razonamiento-llms-cot-maps-gpt5/";
          
        },
      },{id: "post-visualización-de-datos-y-sesgo-precisión-e-integridad-analítica",
        
          title: "Visualización de datos y sesgo: precisión e integridad analítica",
        
        description: "Cómo un dashboard impecable puede llevar a conclusiones erróneas, qué papel juegan las herramientas y la IA generativa, y por qué el análisis empieza al cuestionar el gráfico.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/visualizacion-datos-sesgo-integridad/";
          
        },
      },{id: "post-llms-era-thoughts-on-nlp-research",
        
          title: "LLMs Era: Thoughts on NLP Research",
        
        description: "Reflections on how large language models reshape priorities, methods, and open questions in NLP research.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/llms-era-thoughts-nlp-research/";
          
        },
      },{id: "post-innovate-or-die-bienvenida-a-la-newsletter-sobre-ia-ml-y-llms",
        
          title: "Innovate or Die: bienvenida a la newsletter sobre IA, ML y LLMs",
        
        description: "Bienvenida a la newsletter Innovate or Die; pilares de IA, ML y LLMs, qué promete a quien se suscribe y el cierre con innovar o perecer.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ia-ml-llms-pilares-era-transformadora/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ai-assurance-for-aviation-and-safety-critical-systems",
          title: 'AI Assurance for Aviation and Safety-Critical Systems',
          description: "Research on trustworthy and reliable AI for aviation and safety-critical systems, with a focus on decision assurance, human oversight and the operational validation of Generative AI outputs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-assurance-aviation-safety-critical-systems/";
            },},{id: "projects-ai-for-cyberlearning-and-data-analytics-education",
          title: 'AI for Cyberlearning and Data Analytics Education',
          description: "Research on Cyberlearning, Learning Analytics and AI-assisted education, focusing on student success, educational innovation, data-driven learning environments and the responsible integration of Artificial Intelligence into higher education.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-cyberlearning-data-analytics-education/";
            },},{id: "projects-proactive-ai-for-information-integrity-and-counter-disinformation",
          title: 'Proactive AI for Information Integrity and Counter-Disinformation',
          description: "Research project developed by Tecnológico de Monterrey and the Cybersecurity Agency of El Salvador, focused on applied research in cyber defense and on countering disinformation operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-information-integrity-counter-disinformation/";
            },},{id: "projects-ai-for-urban-analytics-and-geospatial-decision-support",
          title: 'AI for Urban Analytics and Geospatial Decision Support',
          description: "Research on Artificial Intelligence and urban representation learning for geospatial data, including the identification of potential disparities in crime reporting in Mexico City.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-urban-analytics-geospatial-decision-support/";
            },},{id: "projects-beenet-ai-for-employment-matching-and-workforce-intelligence",
          title: 'BeeNet: AI for Employment Matching and Workforce Intelligence',
          description: "Research, development and innovation program aimed at building an intelligent platform for analyzing professional skills, matching people with job opportunities, and supporting recruitment and internal mobility processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beenet-ai-employment-matching-workforce-intelligence/";
            },},{id: "projects-corelytics-generative-ai-agents-for-data-analytics",
          title: 'Corelytics: Generative AI Agents for Data Analytics',
          description: "Research and development project on the use of Generative AI and intelligent agents to support Data Analytics and Data Science projects, with a focus on AI-assisted learning, analytical workflows and agent-based support systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/corelytics/";
            },},{id: "projects-digital-media-observatory-media-literacy-and-prevention-of-disinformation-operations",
          title: 'Digital Media Observatory: Media Literacy and Prevention of Disinformation Operations',
          description: "Interdisciplinary project developed with the Digital Media Observatory of Tecnológico de Monterrey to study digital media, public opinion and disinformation phenomena through Data Analytics, Natural Language Processing (NLP), Machine Learning and Large Language Models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/digital-media-observatory-disinformation/";
            },},{id: "projects-challenges-in-exploratory-visualization-of-multidimensional-data-paradigms-scalability-and-applications",
          title: 'Challenges in Exploratory Visualization of Multidimensional Data: Paradigms, Scalability and Applications',
          description: "Thematic research project on the methodological and computational challenges of exploratory visualization of multidimensional data, including new paradigms, scalability and applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exploratory-visualization-multidimensional-data/";
            },},{id: "projects-fadcil-ai-for-medical-imaging-and-clinical-decision-support",
          title: 'FADCIL: AI for Medical Imaging and Clinical Decision Support',
          description: "Deep Learning system developed for the automated detection of COVID-19 and the quantification of lung lesions in computed tomography (CT) scans.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fadcil-ai-medical-imaging-clinical-decision-support/";
            },},{id: "projects-link-prediction-in-complex-networks-using-community-structure-information",
          title: 'Link Prediction in Complex Networks Using Community Structure Information',
          description: "Master&#39;s research aimed at developing link prediction methods for complex networks based on structural and community information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/link-prediction-complex-networks-community-structure/";
            },},{id: "projects-llm-security-robustness-and-adversarial-defense",
          title: 'LLM Security, Robustness and Adversarial Defense',
          description: "Research on security, robustness and adversarial threats in Large Language Model systems, with a focus on prompt injection, guardrails and reliable deployment of LLM-based applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-security-robustness-adversarial-defense/";
            },},{id: "projects-llms-for-the-legal-domain-instruction-fine-tuning-and-model-adaptation",
          title: 'LLMs for the Legal Domain: Instruction Fine-Tuning and Model Adaptation',
          description: "Applied research project on the adaptation and evaluation of Large Language Models for government and legal contexts involving sensitive data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llms-legal-domain-instruction-fine-tuning/";
            },},{id: "projects-mining-user-behavior-in-location-based-social-networks",
          title: 'Mining User Behavior in Location-Based Social Networks',
          description: "Doctoral project focused on the study of social, structural and mobility information in location-based social networks, with an emphasis on modeling user behavior and predicting relationships.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/location-based-social-networks-user-behavior/";
            },},{id: "projects-siion-intelligent-business-opportunity-discovery-from-geospatial-data",
          title: 'SIION: Intelligent Business Opportunity Discovery from Geospatial Data',
          description: "Research and development project on the use of Artificial Intelligence, recommender systems and geospatial data to identify and recommend business opportunities in urban areas.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/siion-business-opportunity-discovery-geospatial-data/";
            },},{id: "projects-social-network-analysis-and-mining",
          title: 'Social Network Analysis and Mining',
          description: "Research project on the analysis and mining of complex networks, including relational learning, graph construction, classification and link prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/social-network-analysis-mining/";
            },},{id: "projects-test-ai-generative-ai-for-software-test-automation",
          title: 'Test-AI: Generative AI for Software Test Automation',
          description: "Research project on the application of Generative AI to software test automation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/test-ai-generative-ai-software-test-automation/";
            },},{id: "teachings-web-analytics-data-analytics-amp-big-data",
          title: 'Web Analytics, Data Analytics &amp;amp; Big Data',
          description: "Courses in **web analytics**, **data analytics**, and **big data** for business and analytics programs. Guided students in applied analytics projects for industry clients.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/esan-2018-2019/";
            },},{id: "teachings-web-analytics-databases-amp-algorithms",
          title: 'Web Analytics, Databases &amp;amp; Algorithms',
          description: "Undergraduate and professional courses covering web analytics, relational databases, and core algorithms.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/impacta-2020/";
            },},{id: "teachings-ai-data-analytics-amp-intelligent-systems",
          title: 'AI, Data Analytics &amp;amp; Intelligent Systems',
          description: "Design and delivery of advanced curricula in artificial intelligence, data analytics, and intelligent systems for professionals and graduate audiences, connecting research with practice across sectors (health, business, education, public sector).",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/tec-monterrey-ai-data/";
            },},{id: "teachings-machine-learning-algorithms-amp-data-structures",
          title: 'Machine Learning, Algorithms &amp;amp; Data Structures',
          description: "Coordinated and taught **machine learning** courses; taught **algorithms**, **data structures**, and **databases**. Supervised final-year projects applying AI to business, health, and social impact.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/upc-2018-2019/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jvalverr", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jvalverr", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-13ZsyQAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8664-9692", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/119/6669", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/cv/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
