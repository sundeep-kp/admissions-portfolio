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

const ornithopterImage = '/admissions-portfolio/images/ornithopter.png';
const openManipulatorImage = '/admissions-portfolio/images/OpenManipulatorX.png';
const prostheticHandImage = '/admissions-portfolio/images/prosthetic-hand.png';
const ros2RoadmapImage = '/admissions-portfolio/images/ros2-roadmap-ultralab.png';
const neurolinkImage = '/admissions-portfolio/images/neurolink.jpg';
const securityAssessmentImage = '/admissions-portfolio/images/security-assessment.png';
const invisibleInsightImage = '/admissions-portfolio/images/Invisible-insight.jpg';
const tldrawImage = '/admissions-portfolio/images/Tldraw.png';
const autologinImage = '/admissions-portfolio/images/autologin.jpg';
const coswatchImage = '/admissions-portfolio/images/coswatch.png';
const threeDReconstructionImage = '/admissions-portfolio/images/3d-reconstruction.png';

export const projectGroups: ProjectGroup[] = [
	{
		title: 'Robotics',
		projects: [
			{
				image: ornithopterImage,
				title: 'Ornithopter based bird flying simulation',
				category: 'Robotics',
				description: [
'Studied main mechanism, extended with custom additions like double frame, motor, gear power transmission.'
				].join('\n'),
				links: [
					{ label: '[linkedin post]', href: '#' },
					{ label: '[project overview placeholder]', href: '#' },
				],
				status: 'Completed',
				tags: ['Simulation', 'SOLIDWORKS', 'Bio-inspired'],
			},
			{
				image: openManipulatorImage,
				title: 'OpenManipulatorX based industrial pick and place robotic arm',
				category: 'Robotics',
				description: [
					'Prerequisite for future spider robots with specialised manipulators',
					'Target: planetary exploration applications',
				].join('\n'),
				links: [{ label: '[project links missing]', href: '#' }],
				status: 'Completed',
				tags: ['OpenManipulatorX', 'Industrial arm', 'Planning'],
			},
			{
				image: prostheticHandImage,
				title: 'Robotic prosthetic hand',
				category: 'Robotics',
				description: [
'- Uses rarely-used muscles to replace amputated limb function',
			'- 10th standard project — Arduino + servos + PVC, springs for fingers',
			'- Flex sensors & EMG for muscle actuation sensing'
				].join('\n'),
				links: [{ label: '[project report attach]', href: '#' }],
				status: 'Completed',
				tags: ['Arduino', 'Servos', 'EMG', 'Flex sensors'],
			},
			{
				image: placeholderImage,
				title: 'RL based pick and place robotic arm',
				category: 'Robotics',
				description: [
					'Platform for future legged/spider robot research',
					'Front limbs as end effectors, coordinated swarm deployment',
					'Planetary exploration focus',
					'Planning complete, CAD started',
					'Current: object detection + colour-matched bin pick-and-place',
				].join('\n'),
				links: [{ label: '[project links missing]', href: '#' }],
				status: 'Ongoing',
				tags: ['RL', 'Pick and place', 'CAD', 'Planetary exploration'],
			},
			{
				image: ros2RoadmapImage,
				title: 'ROS2-roadmap-ultralab',
				category: 'Robotics',
				description: [
					'Open-source learning repo — started as Husarion docs walkthrough',
					'Added: OS fundamentals, advanced C++, OOP, robot kinematics',
					'Recognised by Rafał Górecki (Husarion co-founder)',
					'Expanded: project walkthroughs, robot fundamentals (Niku, Lynch & Park)',
				].join('\n'),
				links: [{ label: '[project links missing]', href: '#' }],
				status: 'Ongoing',
				tags: ['ROS2', 'C++', 'Kinematics', 'Open source'],
			},
		],
	},
	{
		title: 'Software/Others',
		projects: [
			{
				image: neurolinkImage,
				title: 'Neuro-link (hackathon at IIITNR)',
				category: 'Software',
				description: [
					'Web app for dementia care — central STT/TTS chatbot',
					'Calms users, shares stories, creates dynamic tasks/reminders via RAG',
					'Face recognition for family member identification & context',
					'Geotracking to prevent wandering',
					'[attach LinkedIn post]',
				].join('\n'),
				links: [{ label: '[attach linkedin post]', href: '#' }],
				status: 'Hackathon project',
				tags: ['STT/TTS', 'RAG', 'Face recognition', 'Geotracking'],
			},
			{
				image: securityAssessmentImage,
				title: 'Security Assessment of College Payment Portal',
				category: 'Software',
				description: [
					'Found vulnerability exposing other students\' bill payments',
					'Recognised by Dean (Academics) & 4 staff members',
					'Images withheld for student privacy',
				].join('\n'),
				links: [{ label: '[mention this on site]', href: '#' }],
				status: 'Completed',
				tags: ['Security', 'Web', 'Assessment'],
			},
			{
				image: invisibleInsightImage,
				title: 'Invisible-Insight',
				category: 'Software',
				description: [
					'Maze game equally difficult for visually impaired & sighted',
					'Navigates via sound & vibration only',
					'[attach GitHub + APK]',
				].join('\n'),
				links: [{ label: '[attach github + apk]', href: '#' }],
				status: 'Completed',
				tags: ['Accessibility', 'Game', 'Audio'],
			},
			{
				image: tldrawImage,
				title: 'Tldraw-search Plugin',
				category: 'Software',
				description: [
					'Infinite canvas plugin for Obsidian — for detectives & researchers',
					'Search across handwritten text in canvas',
					'Interconnect multiple canvases, reference sections via wiki links',
					'Embed webpages & YouTube playlists as native canvas entities',
					'Pressure-sensitive pencil, standard canvas features',
					'[attach GitHub link]',
				].join('\n'),
				links: [{ label: '[attach github link]', href: '#' }],
				status: 'Ongoing',
				tags: ['Obsidian', 'Plugin', 'Search', 'Canvas'],
			},
			{
				image: autologinImage,
				title: 'Autologin-framework',
				category: 'Software',
				description: [
					'Client for college WiFi portal — auto-logs in on session timeout',
					'Motivation: remote work on old PC during vacation, widely used by seniors',
					'[link — older version with stars]',
				].join('\n'),
				links: [{ label: '[link– older one with stars]', href: '#' }],
				status: 'Completed',
				tags: ['Automation', 'Networking', 'Client'],
			},
			{
				image: coswatchImage,
				title: 'Coswatch',
				category: 'Software',
				description: [
					'Hackathon (IIT Bhubaneswar) — 3D asteroid visualisation from NASA API',
					'Rank asteroids by threat level',
					'Telegram companion bot: daily highest-threat asteroid alerts',
					'[attach LinkedIn post]',
				].join('\n'),
				links: [{ label: '[linkedin post attach]', href: '#' }],
				status: 'Hackathon project',
				tags: ['NASA API', '3D', 'Telegram bot'],
			},
			{
				image: threeDReconstructionImage,
				title: '3D reconstruction of teeth from intra-oral images',
				category: 'Software',
				description: [
					'Optimised TeethDreamer (ShanghaiTech-IMPACT) for local commercial hardware',
					'Motivation: sister is a dentist — real clinical need',
					'[attach project report, GitHub, reconstruction image]',
				].join('\n'),
				links: [{ label: '[attach project report, github, reconstruction image]', href: '#' }],
				status: 'Completed',
				tags: ['3D reconstruction', 'Healthcare', 'Research'],
			},
		],
	},
];