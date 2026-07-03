import CareerPathImg from "../assets/career-path-img.png";
import ConnecTableImg from "../assets/connectable-img.png";

export const PROFILE_DATA = {
	name: "Rushikesh Subhash Bhalerao",
	handle: "@rushikesh_bhalerao1213",
	bio: "Full-Stack Software Engineer with production experience designing and shipping scalable web applications across the full stack React.js, Next.js, Node.js, WebSocket APIs, and MongoDB. Proven ability to independently architect features, optimize system performance, and collaborate cross-functionally in fast-paced environments. Targeting SDE / Full-Stack roles at high-growth engineering organizations.",
	location: "Chh. Sambhajinagar, MH, India",
	link: "github.com/bhaleraorushi1213",
	linkUrl: "https://github.com/bhaleraorushi1213",
	linkedin: "linkedin.com/in/rushikesh-bhalerao1213",
	linkedinUrl: "https://linkedin.com/in/rushikesh-bhalerao1213",
	gmail: "bhaleraorushi1213@gmail.com",
};

export const PROJECTS_DATA = [
	{
		id: 1,
		title: "ConnecTable",
		description:
			"A real-time chat application with sub-100ms message delivery...",
		fullDescription:
			"A full-stack real-time messaging system built with React.js, Node.js, and Socket.IO, achieving sub-100ms message delivery latency under local load tests. Features typing indicators, unread badge counts, message reactions, reply/forward/delete/pin, infinite-scroll pagination, read receipts, online/last-seen status, voice messages, and offline message queuing. Socket subscriptions are split into a global layer (badge counts, presence) and a local layer (active-chat events) to reduce unnecessary event fan-out and improve client-side render efficiency.",
		image: ConnecTableImg,
		tags: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JWT"],
		githubUrl: "https://github.com/bhaleraorushi1213/ConnecTable",
		liveUrl: "https://connectable-3bz9.onrender.com",
		date: "May 2026",
	},
	{
		id: 2,
		title: "CareerPath",
		description:
			"A Kanban-style job application tracker with drag-and-drop...",
		fullDescription:
			"A full-stack Kanban-style job application tracker built with Next.js, TypeScript, and MongoDB, enabling users to create, update, and delete job applications across pipeline stages (Wishlist, Applied, Interviewing, Offer, Rejected). Features drag-and-drop (dnd-kit) with optimistic UI updates using React 19's useOptimistic and useTransition, secure session-based authentication with Better-Auth enforcing user-scoped data access across all API routes, and a multi-step slide-over sheet panel built with Framer Motion. Resolved complex z-index stacking context conflicts introduced by Framer Motion's layout prop to enable correct drag-layer rendering across dynamic columns.",
		image: CareerPathImg,
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better-Auth", "dnd-kit"],
		githubUrl: "https://github.com/bhaleraorushi1213/career-path",
		liveUrl: "https://job-application-tracker-rushikesh-b-projects.vercel.app",
		date: "June 2026",
	},
];

export const SKILLS_DATA = [
	{
		category: "Languages",
		skills: ["JavaScript (ES6+)", "TypeScript", "Java", "HTML5", "CSS3", "SQL"],
	},
	{
		category: "Frontend",
		skills: ["React.js", "Next.js", "Redux Toolkit", "Zustand", "Tailwind CSS", "Bootstrap"],
	},
	{
		category: "Backend & APIs",
		skills: ["Node.js", "Express.js", "REST API Design", "WebSocket/Socket.IO", "JWT Auth"],
	},
	{
		category: "Databases & Infra",
		skills: ["MongoDB (Mongoose)", "MySQL", "Cloudinary", "GitHub Actions"],
	},
	{
		category: "Tools",
		skills: ["Git", "GitHub", "Postman", "VS Code", "dnd-kit"],
	},
];

export const EXPERIENCE_DATA = [
	{
		title: "Associate Software Developer (React.js)",
		subtitle: "DeccanLogic Pvt. Ltd.",
		date: "Nov 2024 - Mar 2025",
		description:
			"Architected and shipped a production-grade CRM platform for financial advisory services using React.js and Redux, serving real client workloads with zero critical post-launch defects. Designed a rule-based client assignment engine that automated advisor routing logic, reducing manual advisor workload by ~40% and improving client response SLA. Integrated RESTful APIs with backend engineers, ensuring data-contract alignment, error-boundary handling, and optimistic UI updates. Refactored a legacy component tree to Redux Toolkit, eliminating prop-drilling across 5+ levels and reducing redundant re-renders.",
	},
	{
		title: "Frontend Developer Intern",
		subtitle: "EagleByte Solutions Pvt. Ltd.",
		date: "Aug 2024 - Nov 2024",
		description:
			"Built 5+ responsive web projects, including a portfolio, Spotify clone, and e-commerce UI, using HTML5, CSS3, and vanilla JavaScript. Reinforced cross-browser compatibility, semantic accessibility, and async JavaScript patterns used in production React codebases.",
	},
];

export const EDUCATION_DATA = [
	{
		title: "Bachelor of Engineering in Computer Engineering",
		subtitle: "Savitribai Phule Pune University (SPPU)",
		date: "Graduated June 2024",
		description:
			"CGPA: 7.63 / 10.0. Pune, Maharashtra.",
	},
	{
		title: "Class XII (CBSE)",
		subtitle: "Jawahar Navodaya Vidyalaya",
		date: "Graduated July 2020",
		description:
			"71.4%. Chh. Sambhajinagar, Maharashtra.",
	},
];

type TabId = 'projects' | 'experience' | 'skills' | 'education';

export const TABS: { id: TabId; label: string }[] = [
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
];
