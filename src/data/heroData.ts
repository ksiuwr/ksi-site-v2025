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
    pl: "KSI ξ",
    en: "KSI ξ"
  }
};

export const membersHero: Hero = {
  header: { 
    pl: "Członkowie koła", 
    en: "Association members" 
  },
  subheader: { 
    pl: "Poznaj nasz zespół", 
    en: "Get to know our team" 
  }
};

export const projectsHero: Hero = {
  header: {
    pl: "Projekty",
    en: "Projects"
  },
  subheader: {
    pl: "Naukowe, społeczne, edukacyjne",
    en: "Scientific, social, educational"
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