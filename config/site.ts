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
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
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
