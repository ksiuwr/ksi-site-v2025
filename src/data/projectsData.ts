export interface Project {
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
}

const projects: Project[] = [
  {
    title: {
      pl: "ZOSIA",
      en: "ZOSIA"
    },
    description: {
      pl: "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      en: "Our association brings together computer science students and graduates alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    image: "/images/placeholder.webp",
    readMore: "/zosia",
    readMoreText:  {
      pl: "Więcej o ZOSI",
      en: "More about ZOSIA"
    },
    contentPosition: "right",
  },
  {
    title: {
      pl: "Hour of Code",
      en: "Hour of Code"
    },
    description: {
      pl: "Inicjatywa edukacyjna...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      en: "Educational initiative...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    image: "/images/placeholder.webp",
    readMore: "/hoc",
    readMoreText: {
      pl: "Więcej o Hour of Code",
      en: "More about Hour of Code"
    },
    contentPosition: "left",
  },
  {
    title: {
      pl: "Bot Discord",
      en: "Discord Bot"
    },
    description: {
      pl: "Automatyzacja serwerów...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      en: "Server automatization...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    image: "/images/placeholder.webp",
    readMore: "",
    readMoreText: {
      pl: "",
      en: ""
    },
    contentPosition: "right",
  },
  {
    title: {
      pl: "Pokój Studencki",
      en: "Students' Room"
    },
    description: {
      pl: "Innowacyjna przestrzeń...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      en: "Innovative space...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    image: "/images/placeholder.webp",
    readMore: "",
    readMoreText: {
      pl: "",
      en: ""
    },
    contentPosition: "left",
  },
  {
    title: {
      pl: "Sociale",
      en: "Socials"
    },
    description: {
      pl: "Platforma społecznościowa...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      en: "Social platform...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    image: "/images/placeholder.webp",
    readMore: "",
    readMoreText: {
      pl: "",
      en: ""
    },
    contentPosition: "right",
  },
];

export default projects;
