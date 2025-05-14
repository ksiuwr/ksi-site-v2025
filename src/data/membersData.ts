import BoardMember from "../pages/Members/components/BoardMember";

export interface BoardMember {
  role: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  }
  imageSrc: string;
  reverse?: boolean;
  containerClass?: string;
}

export const boardMembers: BoardMember[] = [
  {
    role: {
      pl: "Przewodniczący",
      en: "President"
    },
    description: {
      pl: "Michał Hajahmadov",
      en: "Michał Hajahmadov"
    },
    imageSrc: "/members/michał_hajahmadov.jpg",
    reverse: false
  },
  {
    role: {
      pl: "Wiceprzewodniczący",
      en: "Vice-President"
    },
    description: {
      pl: "Wojciech Kieloch",
      en: "Wojciech Kieloch"
    },
    imageSrc: "/members/wojciech_kieloch.jpg",
    reverse: true,
    containerClass: "lg:mb-[-3vw]"
  },
  {
    role: {
      pl: "Sekretarz",
      en: "Secretary"
    },
    description: {
      pl: "Emilia Wiśniewska",
      en: "Emilia Wiśniewska"
    },
    imageSrc: "/members/emilia_wiśniewska.jpg",
    reverse: false
  },
  {
    role: {
      pl: "Sekretarz",
      en: "Secretary"
    },
    description: {
      pl: "Kyrylo Goroshenko",
      en: "Kyrylo Goroshenko"
    },
    imageSrc: "/members/kiri_goroshenko.jpg",
    reverse: true,
    containerClass: "lg:mb-[-3vw]"
  }
]