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
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    LinkedIn: "https://www.linkedin.com/in/ieoo"
  },
};
