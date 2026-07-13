export interface ProjectLink {
	label: string;
	href: string;
}

export interface ProjectItem {
	image: string;
	title: string;
	category: string;
	description: string;
	links: ProjectLink[];
	status: string;
	tags: string[];
}

export interface ProjectGroup {
	title: string;
	projects: ProjectItem[];
}

const placeholderImage =
	'data:image/svg+xml;charset=UTF-8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-label="Image Missing"><rect width="1200" height="675" fill="#f2f2f2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888888" font-family="Arial, sans-serif" font-size="56">[Image Missing]</text></svg>'
	);

export const projectGroups: ProjectGroup[] = [
	{
		title: 'Robotics',
		projects: [
			{
				image: placeholderImage,
				title: 'Robotic prosthetic hand',
				category: 'Robotics',
				description:
					'10th standard, made using arduino + servos + pvc and springs for fingers, flex sensors and EMG for muscle actuation sensing, worked by using rarely used muscles for actuation to replace amputated limb.',
				links: [{ label: 'Project report', href: '#' }],
				status: 'Completed',
				tags: ['Arduino', 'Servos', 'EMG', 'Flex sensors'],
			},
			{
				image: placeholderImage,
				title: 'Ornithopter based bird flying simulation',
				category: 'Robotics',
				description:
					'Fascinated by flying bird by festo, studied the main mechanism and then added on to it.',
				links: [{ label: 'Project overview', href: '#' }],
				status: 'Completed',
				tags: ['Simulation', 'Ornithopter', 'Bio-inspired'],
			},
			{
				image: placeholderImage,
				title: 'OpenManipulatorX based industrial pick and place robotic arm',
				category: 'Robotics',
				description:
					'Prerequisite to larger future project- spider robots with specialised manipulators for planetary exploration.',
				links: [{ label: 'Project link', href: '#' }],
				status: 'Completed',
				tags: ['OpenManipulatorX', 'Industrial arm', 'Planning'],
			},
			{
				image: placeholderImage,
				title: 'RL based pick and place robotic arm',
				category: 'Robotics',
				description:
					'Ongoing project that serves as a prerequisite platform for future research in legged, spider-type robots, with the front limbs used as end effectors and designed for coordinated swarm deployment in planetary exploration. Planning is complete and CAD work has started. The current task is to detect objects and perform pick-and-place operations into bins with matching colours, starting from a base bin.',
				links: [{ label: 'Project details missing', href: '#' }],
				status: 'Ongoing',
				tags: ['RL', 'Pick and place', 'CAD', 'Planetary exploration'],
			},
			{
				image: placeholderImage,
				title: 'ROS2-roadmap-ultralab',
				category: 'Robotics',
				description:
					'An opensource learning repository which started as a walkthrough for husarion docs with added prerequisite concepts of os fundamentals, advanced c++ and OOP fundamentals, robot kinematics etc, recognised by Rafał Górecki (co-founder of husarion docs). Expanded into project walkthroughs, other robot fundamentals using intro to robotics by saeed b. Niku and modern robotics by lynch and park.',
				links: [{ label: 'Repository', href: '#' }],
				status: 'Ongoing',
				tags: ['ROS2', 'C++', 'Kinematics', 'Open source'],
			},
		],
	},
	{
		title: 'Machine Learning',
		projects: [
			{
				image: placeholderImage,
				title: '3d reconstruction of teeth based on intra-oral images',
				category: 'Machine Learning',
				description:
					'Optimisation of work by ShanghaiTech-IMPACT/TeethDreamer research paper and project to be able to run locally on commercial computers. Motivation: worked with my sister who is a dentist.',
				links: [{ label: 'Project report', href: '#' }],
				status: 'Completed',
				tags: ['3D reconstruction', 'Healthcare', 'Research'],
			},
		],
	},
	{
		title: 'Software',
		projects: [
			{
				image: placeholderImage,
				title: 'Tldraw-search Plugin',
				category: 'Software',
				description:
					'An infinite canvas plugin for obsidian for detectives and researchers. Motivation: Had to organise over 300 videos and articles on a topic. Ability to search across handwritten text in the canvas, interconnect multiple canvas and reference specific sections using wiki links, add webpages and youtube playlists natively inside the canvas as canvas entities, and other standard features like pressure based pencil.',
				links: [{ label: 'GitHub', href: '#' }],
				status: 'Ongoing',
				tags: ['Obsidian', 'Plugin', 'Search', 'Canvas'],
			},
			{
				image: placeholderImage,
				title: 'Security Assessment of College Payment Portal',
				category: 'Software',
				description:
					'Found a vulnerability that let me see others bill payments. Got recognised by dean(academics) and 4 other staff members. Can’t share images here for student privacy reasons.',
				links: [{ label: 'Details missing', href: '#' }],
				status: 'Completed',
				tags: ['Security', 'Web', 'Assessment'],
			},
			{
				image: placeholderImage,
				title: 'Neuro-link',
				category: 'Software',
				description:
					'A web-app for people with dementia, controlled by a central stt-tts chatbot. Calms them down, shares stories, creates tasks and reminders(bubbles) dynamically when relevant(using RAG). Integrated face recognition to identify family members and provide contextual relationship information. Geotracking to prevent wandering.',
				links: [{ label: 'LinkedIn post', href: '#' }],
				status: 'Hackathon project',
				tags: ['STT/TTS', 'RAG', 'Face recognition', 'Geotracking'],
			},
			{
				image: placeholderImage,
				title: 'Invisible-Insight',
				category: 'Software',
				description:
					'A maze game that is equally difficult for the visually impaired and sighted individuals, works on sounds and vibrations.',
				links: [{ label: 'GitHub', href: '#' }, { label: 'APK', href: '#' }],
				status: 'Completed',
				tags: ['Accessibility', 'Game', 'Audio'],
			},
			{
				image: placeholderImage,
				title: 'Autologin-framework',
				category: 'Software',
				description:
					'A client for my college wifi portal that automatically logs in as soon as session times out. Motivation: had to use my old pc remotely for days on vacation when I wasn’t able to afford a laptop, lots of people used it especially seniors.',
				links: [{ label: 'Older repo', href: '#' }],
				status: 'Completed',
				tags: ['Automation', 'Networking', 'Client'],
			},
			{
				image: placeholderImage,
				title: 'Coswatch',
				category: 'Software',
				description:
					'Hackathon, IIT bbsr. A webapp to visualise asteroids in 3d from an API by nasa and rank them by threat. Includes a telegram companion bot that messages me about the highest threat asteroids everyday.',
				links: [{ label: 'LinkedIn post', href: '#' }],
				status: 'Hackathon project',
				tags: ['NASA API', '3D', 'Telegram bot'],
			},
		],
	},
];