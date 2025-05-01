export interface Hero {
  header: {
    pl: string,
    en: string
  },
  subheader: {
    pl: string,
    en: string
  }
};

export const homePageHero: Hero = {
  header: {
    pl: "Koło Studentów Informatyki",
    en: "Computer Science Students Association"
  },
  subheader: {
    pl: "KSI",
    en: "KSI"
  }
};

export const membersHero: Hero = {
  header: { 
    pl: "Członkowie koła", 
    en: "Association members" 
  },
  subheader: { 
    pl: "KSI", 
    en: "KSI" 
  }
};

export const projectsHero: Hero = {
  header: {
    pl: "Projekty",
    en: "Projects"
  },
  subheader: {
    pl: "Strona KSI będzie skończona, trzymamy się terminów",
    en: "KSI site will be completed, we stick to deadlines"
  }
};

export const contactHero: Hero = {
  header: { 
    pl: "Kontakt", 
    en: "Contact" 
  },
  subheader: { 
    pl: "Formularz kontaktowy", 
    en: "Contact form" 
  }
};