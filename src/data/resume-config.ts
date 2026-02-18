import type { ResumeConfig } from "./types";

export const resumeConfig: ResumeConfig = {
  personal: {
    name: "Jordan Wakelam-Surena",
    photoBackEmoji: "👨‍💻",
    title: {
      fr: "Professionnel informatique polyvalent",
      en: "Versatile IT Professional",
    },
    subtitle: {
      fr: "Développement et intégration",
      en: "Development & Integration",
    },
    location: "Essonne, France",
  },
  seo: {
    title: "Jordan Wakelam-Surena — Professionnel informatique polyvalent",
    description:
      "CV interactif bilingue de Jordan Wakelam-Surena, professionnel informatique polyvalent spécialisé en développement et intégration.",
  },
  languages: {
    default: "fr",
    available: ["fr", "en"],
    labels: { fr: "FR", en: "EN" },
  },
  contact: [
    {
      type: "linkedin",
      label: "Jordan Wakelam",
      href: "https://linkedin.com/in/jordan-wakelam",
    },
    { type: "email", label: "contact@jordan-wakelam.fr" },
    { type: "phone", label: "+33 6 41 16 23 13" },
    { type: "location", label: "Essonne, France" },
    {
      type: "website",
      label: "jordan-wakelam.fr",
      href: "https://jordan-wakelam.fr",
    },
  ],
  skills: [
    {
      title: { fr: "Environnements informatiques", en: "IT Environments" },
      type: "badges",
      items: [{ name: "JavaScript" }, { name: "React" }, { name: "SCSS" }],
    },
    {
      title: { fr: "Compétences techniques", en: "Technical Skills" },
      type: "badges",
      items: [
        { name: "Configuration et maîtrise des outils techniques" },
        { name: "Développement web" },
        { name: "Domotique & capteurs" },
        { name: "Découpe laser / préparation de fichiers" },
      ],
    },
    {
      title: { fr: "Méthodologies", en: "Methodologies" },
      type: "text",
      items: [
        {
          name: {
            fr: "Rigueur analytique, approche structurée et logique",
            en: "Analytical rigor, structured and logical approach",
          },
        },
        {
          name: {
            fr: "Résolution d'incidents et diagnostic rapide",
            en: "Incident resolution and rapid diagnosis",
          },
        },
        {
          name: {
            fr: "Apprentissage rapide des nouvelles technologies",
            en: "Quick learning of new technologies",
          },
        },
      ],
    },
    {
      title: { fr: "Qualités", en: "Soft Skills" },
      type: "text",
      items: [
        {
          name: {
            fr: "Autonomie, Adaptabilité, Capacité pédagogique",
            en: "Autonomy, Adaptability, Teaching skills",
          },
        },
      ],
    },
    {
      title: { fr: "Langues", en: "Languages" },
      type: "languages",
      items: [
        {
          name: { fr: "Français", en: "French" },
          level: { fr: "Natif", en: "Native" },
        },
        {
          name: { fr: "Anglais", en: "English" },
          level: { fr: "Professionnel", en: "Professional" },
        },
      ],
    },
  ],
  experiences: [
    {
      id: "feu-de-paille",
      company: { fr: "Feu de Paille", en: "Feu de Paille" },
      role: {
        fr: "Développeur Web polyvalent / Coordinateur technique",
        en: "Versatile Web Developer / Technical Coordinator",
      },
      type: { fr: "CDD", en: "Fixed-term" },
      period: { fr: "Juin 2025 - Mars 2026", en: "June 2025 - March 2026" },
      description: {
        fr: "Développement et maintenance d'outils internes, mise en place de solutions domotiques, préparation de fichiers pour découpe laser, coordination de projets techniques et documentation.",
        en: "Development and maintenance of internal tools, implementation of home automation solutions, preparation of files for laser cutting, coordination of technical projects and documentation.",
      },
      techs: ["JavaScript", "React", "Domotique", "Découpe laser"],
      details: {
        context: {
          fr: "Équipe technique, adaptation rapide à de nouveaux outils.",
          en: "Technical team, rapid adaptation to new tools.",
        },
        tasks: {
          fr: [],
          en: [],
        },
        training: {
          fr: [],
          en: [],
        },
        env: {
          fr: "JavaScript / React / Domotique / Découpe laser",
          en: "JavaScript / React / Home Automation / Laser Cutting",
        },
      },
    },
    {
      id: "livinweb-intersel",
      company: { fr: "LivinWeb Intersel", en: "LivinWeb Intersel" },
      role: {
        fr: "Développeur Web intégrateur",
        en: "Web Integrator Developer",
      },
      type: { fr: "CDD", en: "Fixed-term" },
      period: { fr: "Mars 2024 - Mai 2024", en: "March 2024 - May 2024" },
      description: {
        fr: "Réalisation d'un portail web avec conception et templating, module de génération IA et SEO via API REST, adaptation d'un blog existant, module de détection de langue.",
        en: "Development of a web portal with design and templating, AI and SEO module via REST API, adaptation of an existing blog, language detection module.",
      },
      techs: ["JavaScript", "React", "API REST", "Templating"],
      details: {
        context: { fr: "", en: "" },
        tasks: { fr: [], en: [] },
        training: { fr: [], en: [] },
        env: {
          fr: "JavaScript / React / API REST",
          en: "JavaScript / React / REST API",
        },
      },
    },
    {
      id: "ministere-armees",
      company: { fr: "Ministère des Armées", en: "Ministry of Armed Forces" },
      role: {
        fr: "Chef de patrouille appui mouvement",
        en: "Movement Support Patrol Leader",
      },
      type: { fr: "CDI", en: "Permanent" },
      period: { fr: "2012 - 2023", en: "2012 - 2023" },
      description: {
        fr: "Encadrement et coordination d'une équipe, développement des compétences en leadership et gestion de groupe, planification et maintenance de matériel sensible.",
        en: "Team supervision and coordination, development of leadership and group management skills, planning and maintenance of sensitive equipment.",
      },
      techs: [],
      details: {
        context: { fr: "", en: "" },
        tasks: { fr: [], en: [] },
        training: { fr: [], en: [] },
        env: { fr: "", en: "" },
      },
    },
  ],
  education: [
    {
      school: { fr: "Le Cnam, Paris", en: "Le Cnam, Paris" },
      degree: {
        fr: "Licence professionnelle en informatique - Web, Mobile et Business Intelligence",
        en: "Professional Bachelor in IT - Web, Mobile & Business Intelligence",
      },
      period: "2024 - 2025",
    },
    {
      school: { fr: "CMFP, Fontenay-le-Comte", en: "CMFP, Fontenay-le-Comte" },
      degree: {
        fr: "Titre professionnel niveau 5 - Développeur Web et Web Mobile",
        en: "Professional Title Level 5 - Web & Mobile Developer",
      },
      period: "2023 - 2024",
    },
  ],
  projects: [],
  hobbies: [
    {
      title: { fr: "Bricolage", en: "DIY" },
      details: [
        {
          fr: "Réparation et restauration d'objets",
          en: "Repair and restoration of objects",
        },
      ],
    },
    {
      title: { fr: "Dessin", en: "Drawing" },
      details: [
        {
          fr: "Supports traditionnels et numériques",
          en: "Traditional and digital media",
        },
      ],
    },
    {
      title: { fr: "Animation japonaise", en: "Japanese animation" },
      details: [
        { fr: "Culture et styles variés", en: "Culture and various styles" },
      ],
    },
  ],
  theme: { preset: "minimal" },
  labels: {
    sections: {
      contact: { fr: "CONTACT", en: "CONTACT" },
      skills: { fr: "COMPÉTENCES", en: "SKILLS" },
      experience: { fr: "EXPÉRIENCES PROFESSIONNELLES", en: "WORK EXPERIENCE" },
      education: { fr: "FORMATION", en: "EDUCATION" },
      projects: { fr: "PROJETS", en: "PROJECTS" },
      hobbies: { fr: "LOISIRS", en: "HOBBIES" },
    },
    experience: {
      mainTasks: { fr: "Missions principales :", en: "Main tasks:" },
      moreTasks: { fr: "autres missions...", en: "other tasks..." },
      training: { fr: "Formations :", en: "Trainings:" },
      techEnv: { fr: "Env. technique :", en: "Tech environment:" },
      technologies: { fr: "Technologies", en: "Technologies" },
    },
    actions: {
      clickHint: {
        fr: "Cliquez sur les expériences pour voir plus de détails",
        en: "Click on experiences to see more details",
      },
      switchTheme: { fr: "Changer le thème", en: "Switch theme" },
      downloadPdf: { fr: "Télécharger le PDF", en: "Download PDF" },
    },
  },
};
