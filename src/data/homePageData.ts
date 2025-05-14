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
      pl: "Nasze koło zrzesza studentów, chcących aktywnie uczestniczyć w życiu społeczności akademickiej Instytutu Informatyki UWr.",
      en: "Our student association brings together students who wish to actively participate in the academic community life of the Institute of Computer Science at the University of Wrocław."
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
      pl: "Realizujemy różnorodne projekty - od technicznych, rozwijających twarde umiejętności członków, po społeczne i edukacyjne.",
      en: "We carry out a variety of projects – ranging from technical ones that develop our members' hard skills to social and educational initiatives."
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
      pl: "Masz pomysł na projekt i potrzebujesz wsparcia? Chciałbyś opowiedzieć o czymś ciekawym innym studentom? Reprezentujesz organizację studencką, a może firmę? Napisz do nas!",
      en: "Do you have a project idea and need support? Would you like to share something interesting with other students? Are you representing a student organization or perhaps a company? Get in touch with us!"
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
      pl: "UWAGA! OGŁASZAMY KONKURS NA PLAKAT! 🔥",
      en: "UWAGA! OGŁASZAMY KONKURS NA PLAKAT! 🔥"
    },
    description: {
      pl: "Tak samo jak Wy już nie możemy się doczekać najlepszej studenckiej przygody tego lata! I dlatego już teraz, wszystkich łaknących artystycznego wyzwania informatyków serdecznie zapraszamy do udziału w konkursie na plakat tegorocznego Letniego Obozu Studentów Informatyki A — LEOSI 🌴 🩷 \
          Dla autora zwycięskiej pracy przewidziana jest atrakcyjna nagroda 😎 \
          Plakat powinien nawiązywać kolorystyką i stylem do istniejącego już logo konferencji, zawierać informacje o nazwie, dacie i miejscu wydarzenia, a także przewidywać miejsce na loga sponsorów. \
          Resztę szczegółów i wymagań technicznych znajdziecie w regulaminie konkursu 🎨 \
          Swoje prace w formacie pdf możecie wysyłać na adres ksi@cs.uni.wroc.pl do 5 maja. \
          Link do regulaminu:",
      en:  "Tak samo jak Wy już nie możemy się doczekać najlepszej studenckiej przygody tego lata! I dlatego już teraz, wszystkich łaknących artystycznego wyzwania informatyków serdecznie zapraszamy do udziału w konkursie na plakat tegorocznego Letniego Obozu Studentów Informatyki A — LEOSI 🌴 🩷 \
            Dla autora zwycięskiej pracy przewidziana jest atrakcyjna nagroda 😎 \
            Plakat powinien nawiązywać kolorystyką i stylem do istniejącego już logo konferencji, zawierać informacje o nazwie, dacie i miejscu wydarzenia, a także przewidywać miejsce na loga sponsorów. \
            Resztę szczegółów i wymagań technicznych znajdziecie w regulaminie konkursu 🎨 \
            Swoje prace w formacie pdf możecie wysyłać na adres ksi@cs.uni.wroc.pl do 5 maja. \
            Link do regulaminu:",
    },
    additional_url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F10x3eK23eakgNg6PDN5nyJgcIhl9OhtLqmHceBIf2CQ0%2Fedit%3Fusp%3Dsharing%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwOGJId3d6cVpqY2MzaDJwZAEeEhwAAyJ2Nub8V5OKlmtfzVBVKW3UdgtHhT4dqjnzJvBHZs8OPZ6N9phb2RI_aem_3LmIr9Y13qhLYcOuLMhqVA&h=AT2dT91C3tJ_pvr61a4OQEceLLbk4go-yb9Tyk2D1acJHKO-ryeSsFWOEZeGc6PjRY7lvizdB2_ovArHeK656Zi244JmdkBIb-XiUav4M-mpEKRqtCsTT338Ul2TIZ3ReKHR2by68_lnZYaVLc5YbA&__tn__=-UK-R&c[0]=AT1NsACWQGlPBVIXEMR5Cm4uGORLLMDy2j0CbDsE046KOVg5U60PALCYXjgNrQg8kUnPzVo3eSVmuS8TTqDP2LsGZ6712rsdyD2IHo3o2Hr-wQj0C8STv6AR4_HTM_8hmf_BCm_uILaiNAWDeEaDFS3Yz_b95Vzj87SP0LOGmt6kzzz-25R7pC7g-0HUxnsWHg9Hgde3kfRoJwtzAALXA1e-ZK4A",
    imageUrl: "../Leosia_plakat.jpg"
  },
  {
    title: {
      pl: "UWAGA! OGŁASZAMY KONKURS NA PLAKAT! 🔥",
      en: "UWAGA! OGŁASZAMY KONKURS NA PLAKAT! 🔥"
    },
    description: {
      pl: "Tak samo jak Wy już nie możemy się doczekać najlepszej studenckiej przygody tego lata! I dlatego już teraz, wszystkich łaknących artystycznego wyzwania informatyków serdecznie zapraszamy do udziału w konkursie na plakat tegorocznego Letniego Obozu Studentów Informatyki A — LEOSI 🌴 🩷 \
          Dla autora zwycięskiej pracy przewidziana jest atrakcyjna nagroda 😎 \
          Plakat powinien nawiązywać kolorystyką i stylem do istniejącego już logo konferencji, zawierać informacje o nazwie, dacie i miejscu wydarzenia, a także przewidywać miejsce na loga sponsorów. \
          Resztę szczegółów i wymagań technicznych znajdziecie w regulaminie konkursu 🎨 \
          Swoje prace w formacie pdf możecie wysyłać na adres ksi@cs.uni.wroc.pl do 5 maja. \
          Link do regulaminu:",
      en:  "Tak samo jak Wy już nie możemy się doczekać najlepszej studenckiej przygody tego lata! I dlatego już teraz, wszystkich łaknących artystycznego wyzwania informatyków serdecznie zapraszamy do udziału w konkursie na plakat tegorocznego Letniego Obozu Studentów Informatyki A — LEOSI 🌴 🩷 \
            Dla autora zwycięskiej pracy przewidziana jest atrakcyjna nagroda 😎 \
            Plakat powinien nawiązywać kolorystyką i stylem do istniejącego już logo konferencji, zawierać informacje o nazwie, dacie i miejscu wydarzenia, a także przewidywać miejsce na loga sponsorów. \
            Resztę szczegółów i wymagań technicznych znajdziecie w regulaminie konkursu 🎨 \
            Swoje prace w formacie pdf możecie wysyłać na adres ksi@cs.uni.wroc.pl do 5 maja. \
            Link do regulaminu:",
    },
    additional_link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F10x3eK23eakgNg6PDN5nyJgcIhl9OhtLqmHceBIf2CQ0%2Fedit%3Fusp%3Dsharing%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwOGJId3d6cVpqY2MzaDJwZAEeEhwAAyJ2Nub8V5OKlmtfzVBVKW3UdgtHhT4dqjnzJvBHZs8OPZ6N9phb2RI_aem_3LmIr9Y13qhLYcOuLMhqVA&h=AT2dT91C3tJ_pvr61a4OQEceLLbk4go-yb9Tyk2D1acJHKO-ryeSsFWOEZeGc6PjRY7lvizdB2_ovArHeK656Zi244JmdkBIb-XiUav4M-mpEKRqtCsTT338Ul2TIZ3ReKHR2by68_lnZYaVLc5YbA&__tn__=-UK-R&c[0]=AT1NsACWQGlPBVIXEMR5Cm4uGORLLMDy2j0CbDsE046KOVg5U60PALCYXjgNrQg8kUnPzVo3eSVmuS8TTqDP2LsGZ6712rsdyD2IHo3o2Hr-wQj0C8STv6AR4_HTM_8hmf_BCm_uILaiNAWDeEaDFS3Yz_b95Vzj87SP0LOGmt6kzzz-25R7pC7g-0HUxnsWHg9Hgde3kfRoJwtzAALXA1e-ZK4A",
    imageUrl: "../Leosia_plakat.jpg"
  }
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
