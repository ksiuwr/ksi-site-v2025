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
      pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    imageSrc: "/images/placeholder.webp",
    reverse: false
  },
  {
    role: {
      pl: "Wiceprzewodniczący",
      en: "Vice-President"
    },
    description: {
      pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    imageSrc: "/images/placeholder.webp",
    reverse: true,
    containerClass: "lg:mb-[-3vw]"
  },
  {
    role: {
      pl: "Sekretarz",
      en: "Secretary"
    },
    description: {
      pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    imageSrc: "/images/placeholder.webp",
    reverse: false
  },
  {
    role: {
      pl: "Sekretarz",
      en: "Secretary"
    },
    description: {
      pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    imageSrc: "/images/placeholder.webp",
    reverse: true,
    containerClass: "lg:mb-[-3vw]"
  }
]