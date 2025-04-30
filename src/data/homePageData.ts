export interface Section {
  title: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  };
  image: string;
  readMore: string;
  readMoreText: {
    pl: string;
    en: string;
  };
  contentPosition: "right" | "left";
  idx: number;
}

export const homeSections: Section[] = [
  {
    title: {
      pl: "Członkowie",
      en: "Members"
    },
    description: {
      pl: "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      en: "Our association brings together computer science students and graduates alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    image: "/images/placeholder.webp",
    readMore: "/members",
    readMoreText: {
      pl: "Nasi członkowie",
      en: "Our members"
    },
    contentPosition: "right",
    idx: 0,
  },
  {
    title: {
      pl: "Projekty",
      en: "Projects"
    },
    description: {
      pl: "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      en: "Our association brings together computer science students and graduates alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    image: "/images/placeholder.webp",
    readMore: "/projects",
    readMoreText: {
      pl: "Nasze projekty",
      en: "Our projects"
    },
    contentPosition: "left",
    idx: 1,
  },
  {
    title: {
      pl: "Skontaktuj się",
      en: "Contact us"
    },
    description: {
      pl: "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      en: "Our association brings together computer science students and graduates alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    image: "/images/placeholder.webp",
    readMore: "/contact",
    readMoreText: {
      pl: "Formularz kontaktowy",
      en: "Contact form"
    },
    contentPosition: "right",
    idx: 2,
  },
];

export const newsCards = [
  {
    title: {
      pl: "Tytuł 1",
      en: "Title 1"
    },
    description: {
      pl: "Przypadkowy opis 1",
      en: "Random Description 1"
    },
    imageUrl: "../HourOfCodeLogoBottom.png"
  },
  {
    title: {
      pl: "Tytuł 2",
      en: "Title 2"
    },
    description: {
      pl: "Przypadkowy opis 2",
      en: "Random Description 2"
    },
    imageUrl: "../HourOfCodeLogoBottom.png"
  },
];

export const heroSection = 
{
  header: {
    pl: "Koło Studentów Informatyki",
    en: "Computer Science Students Association"
  },
  subheader: {
    pl: "KSI",
    en: "KSI"
  }
}
