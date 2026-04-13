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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/cv/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8664-9692", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jvalverr", "_blank");
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
