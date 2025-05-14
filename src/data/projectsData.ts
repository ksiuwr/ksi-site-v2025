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
      pl: "Zimowy Obóz Studentów Informatyki A, to konferencja organizowana przez Koło Studentów Informatyki od ponad 20 lat. W ostatnich latach uczestniczy w niej niemal 300 osób rocznie: studentów róznych uczelni, przedstawicieli świata nauki i firm z branży IT. Podczas trzydniowego wyjazdu odbywają się wykłady, prezentacje firm ale także wycieczki i imprezy integracyjne.",
      en: "The Winter Camp for Computer Science Students A is a conference organized by the Computer Science Student Association for over 20 years. In recent years, it has attracted nearly 300 participants annually, including students from various universities, representatives from academia, and professionals from the IT industry. During the three-day trip, there are lectures, company presentations, as well as excursions and social events.",
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
      pl: "Hour of Code to międzynarodowa akcja, której celem jest promowanie nauki programowania oraz technologii informatycznych. W jej ramach Koło zaprasza uczniów szkół podstawowych na warsztaty, podczas których mogą oni poznać podstawy programowania w języku Python.",
      en: "Hour of Code is an international initiative aimed at promoting programming and computer science education. As part of this event, our Association invites primary school students to participate in workshops where they can learn the basics of programming in Python."
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
      pl: "Nasi członkowie rozwijają bota automatyzującego serwer Koła na Discord, który służy nam jako główna przestrzeń komunikacji.",
      en: "Our members are developing a bot that automates our Association's Discord server, which serves as our main communication platform."
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
      pl: "W sali 6 Instututu Informatyki mieści się ogólnodostępny dla studentów pokój utrzymywany przez Koło. Wewnątrz znaleźć można mikrofalówkę, lodówkę, czajnik, pufy idealne na chwilę odpoczynku. O klucz do pokoju studenckiego należy prosić w portierni.",
      en: "Room 6 of the Institute of Computer Science houses a student lounge maintained by our Association and open to all students. Inside, you'll find a microwave, fridge, electric kettle, and bean bags perfect for a quick break. To access the room, please request the key at the reception desk."
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
      pl: "O widoczność Koła i jego komunikatów dba zespół social media. Zapraszamy do obserwowania profilów KSI na Facebooku i Instagramie, by być na bieżąco z ciekawymi wydarzeniami w Instytucie.",
      en: "The visibility of our Association and its announcements is managed by our social media team. Follow KSI on Facebook and Instagram to stay up to date with exciting events happening at the Institute."
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
