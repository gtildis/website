import {
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	threejs,
	td,
	divebook,
	rootseeker,
	theater,
	graphic,
	scuba,
	ironhack,
	backendDev,
	reactDev,
	webDev,
	scubaDev,
	leaflet,
	canvas,
	express,
	website,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: webDev,
	},
	{
		title: "React Developer",
		icon: reactDev,
	},
	{
		title: "Backend Developer",
		icon: backendDev,
	},
	{
		title: "Scuba Diving Assistant Instructor",
		icon: scubaDev,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "Canvas",
		icon: canvas,
	},
	{
		name: "Leaflet",
		icon: leaflet,
	},
	{
		name: "Express",
		icon: express,
	},
];

const experiences = [
	{
		title: `Career Change - Full Stack Developer`,
		company_name: "Ironhack's Bootcamp on Web Development",
		icon: ironhack,
		iconBg: "#383E56",
		date: "May 2023 - July 2023",
		points: [
			"After diligently acquiring an array of technical skills and immersing myself in extensive hands-on experience, I aspire to embrace the path of a Software Developer.",
			"Developed web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: `Divemaster`,
		company_name: "Het Duikhuis",
		icon: scuba,
		iconBg: "#E6DEDD",
		date: "March 2021 - Present",
		points: [
			"Embarking on a thrilling journey to become a certified scuba diving professional and explore the wonders of the underwater world.",
			"Learning about marine life, ecosystems, and underwater conservation to promote environmental awareness.",
			"Organizing, conducting and supervising recreational diving activities, both shore and boat based.",
			"Assisting instructors in conducting training programs and activities for certified divers.",
		],
	},
	{
		title: "Graphic Designer",
		company_name: "Freelancer",
		icon: graphic,
		iconBg: "#383E56",
		date: "April 2010 - Dec 2020",
		points: [
			"Illustrating concepts by designing examples of art arrangement, size, type size and style and submitting them for approval.",
			"Preparing finished art by operating necessary equipment and software.",
			"Creating a wide range of graphics and layouts for product illustrations, company logos with software such as Adobe Photoshop.",
			"Reviewing final layouts and suggesting improvements when necessary.",
		],
	},
	{
		title: "Actor / Assistant Director",
		company_name: "National Theater of Northern Greece / Schema Without Axis",
		icon: theater,
		iconBg: "#E6DEDD",
		date: "Aug 2013 - May 2018",
		points: [
			"Performing leading roles.",
			"Use manual and computer-controlled lighting systems during the show.",
			"Responsible for the stage design and the costumes.",
			"Teaching acting methods, stage combat and movement",
		],
	},
];

const projects = [
	{
		name: "Website",
		description:
			"My personal portfolio website: A sleek, tech-infused showcase of my work, skills, and creativity. Connect with me and explore my digital universe.",
		tags: [
			{
				name: "threeJs",
				color: "blue-text-gradient",
				icon: threejs,
			},
			{
				name: "react",
				color: "blue-text-gradient",
				icon: reactjs,
			},
			{
				name: "tailwind",
				icon: tailwind,
			},
		],
		image: website,
		source_code_link: "https://github.com/gtildis/website",
		live_link: "https://greg-tildis.netlify.app/",
	},
	{
		name: "RootSeeker",
		description:
			"A website platform for hosting outdoor activities. A MERN Full stack web application for tracking outdoor activities worldwide. The app allows users to draw paths on interactitve maps. It is responsive and supports CRUD operations, enablingusers to manage their activities effieciently.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
				icon: reactjs,
			},
			{
				name: "Leaflet map",
				icon: leaflet,
			},
			{
				name: "MongoDB",
				icon: mongodb,
			},
			{
				name: "tailwind",
				icon: tailwind,
			},
			{
				name: "Express",
				icon: express,
			},
		],
		image: rootseeker,
		source_code_link: "https://github.com/RootSeeker-fullstack-app",
		live_link: "https://rootseeker.netlify.app/",
	},
	{
		name: "Divebook",
		description:
			"A habit tracker for divers. Cooperating with Fernando Ramos, a team member of the Bootcamp, we created a Full stack web application using modern techniques with CRUD operations. ",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
				icon: javascript,
			},
			{
				name: "css",
				icon: css,
			},
			{
				name: "MongoDB",
				color: "pink-text-gradient",
				icon: mongodb,
			},
			{
				name: "Leaflet map",
				icon: leaflet,
			},
			{
				name: "Express",
				icon: express,
			},
		],
		image: divebook,
		source_code_link: "https://github.com/project-2-diving-book/diving-book",
		live_link: "https://divebook.adaptable.app/",
	},
	{
		name: "Tower Defense game",
		description:
			"Personal project tasked from the	Bootcamp in order to sharpen DOM manipulation with the use of Canvas and exercing OOP classes.",
		tags: [
			{
				name: "HTML",
				color: "orange-text-gradient",
				icon: html,
			},
			{
				name: "CSS",
				color: "green-text-gradient",
				icon: css,
			},
			{
				name: "JavaScript",
				color: "blue-text-gradient",
				icon: javascript,
			},
			{
				name: "Canvas",
				icon: canvas,
			},
		],
		image: td,
		source_code_link: "https://github.com/gtildis/Tower-Defense-Dom",
		live_link: "https://gtildis.github.io/Tower-Defense-Dom/",
	},
];

export { services, technologies, experiences, projects };
