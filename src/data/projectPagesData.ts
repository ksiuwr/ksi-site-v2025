interface Hero {
	header: {
		pl: string,
		en: string
	},
	subheader: {
		pl: string,
		en: string
	},
	imagePath: string
}

interface About {
	title: {
		pl: string,
		en: string
	},
	description: {
		pl: string,
		en: string
	},
	images: string[]
}

export interface ProjectPage { 
	hero: Hero, 
	about: About
}

export const zosia: ProjectPage = {
	hero: {
		header: { 
			pl: "ZOSIA", 
			en: "ZOSIA" 
		},
		subheader: { 
			pl: "Zimowy Obóz Studentów Informatyki A", 
			en: "Zimowy Obóz Studentów Informatyki A" 
		},
		imagePath: "../images/zosia.svg"
	},
	about: {
		title: { 
			pl: "Czym jest ZOSIA?", 
			en: "What is ZOSIA?" 
		},
		description: { 
			pl: "Zimowy Obóz Studentów Informatyki A, to impreza organizowana przez Koło Studentów Informatyki od ponad 20 lat. Historia obozu rozpoczęła się od nieformalnych wyjazdów grupy zaprzyjaźnionych studentów, dziś zrzesza każdego roku niemal 300 osób: studentów róznych uczelni, przedstawicieli świata nauki i firm z branży IT. Podczas trzydniowego wyjazdu odbywają się wykłady, prezentacje firm ale także wycieczki i imprezy integracyjne. ZOSIA tradycyjnie odbywa się na przełomie lutego i marca. \nCo roku agenda ZOSI wypełniona jest ciekawymi wykładami, wygłaszanymi zarówno przez sponsorów i wykładowców, jak i studentów chcących podzielić się swoimi zainteresowaniami. Choć większość wykładów dotyczy tematów okołoinformatycznych, nie brakuje perełek z innych dziedzin.",
			en: "The Winter Camp for Computer Science Students A (ZOSIA) is an event organized by the Computer Science Student Association for over 20 years. It began as informal trips among a group of friends, and today it brings together nearly 300 participants each year – students from various universities, representatives from academia, and professionals from the IT industry. During the three-day trip, participants can attend lectures, company presentations, as well as excursions and social events. ZOSIA traditionally takes place at the turn of February and March. Each year, ZOSIA’s agenda is filled with engaging lectures delivered by sponsors, faculty members, and students eager to share their interests. While most talks focus on computer science and related topics, there are always some hidden gems from other fields as well."
		},
		images: []
	}
};

export const hoc: ProjectPage = {
	hero: {
		header: { 
			pl: "Hour of Code", 
			en: "Hour of Code" 
		},
		subheader: {
				pl: "Warsztaty programowania dla najmłodszych",
				en: "Programming workshops for the youngest"
		},
		imagePath: "../HourOfCodeLogoBottom.png"
	},
	about: {
		title: { 
			pl: "Czym jest HoC?", 
			en: "What is HoC?" 
		},
		description: {
			pl: "Hour of Code to międzynarodowa akcja, której celem jest promowanie nauki programowania oraz technologii informatycznych. Koło Studentów Informatyki od wielu lat angażuje się w tę inicjatywę. W tym roku do udziału w zajęciach, które odbędą się  w maju i czerwcu chcemy zaprosić uczniów klas 5-8 szkoły podstawowej. ",
			en: "Hour of Code is an international initiative aimed at promoting programming and computer science education. The Computer Science Student Association has been actively involved in this initiative for many years. This year, we would like to invite students from grades 5–8 of primary school to take part in workshops that will be held in May and June."
		},
		images: []
	}
};