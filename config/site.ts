export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portafolio de Ivan",
  description: "Practicar lo aprendido",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },

    {
      label: "Sobre mi",
      href: "/sobre",
    },
    

    {
      label: "Proyectos",
      href: "/proyectos",
    },

    {
      label: "URL Proyectos",
      href: "/url_proyectos",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre mí",
      href: "/sobre",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
    {
      label: "URL Proyectos",
      href: "/url_proyectos",
    },
   
  ],
  links: {
    github: "https://github.com/IvanOjedaOjeda",
    twitter: "https://twitter.com/i_ojeda",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://udd.cl/",
    linkedin: "https://linkedin.com/in/ieoo"
  },
};
