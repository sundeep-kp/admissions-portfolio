export interface LeadershipLink {
	label: string;
	href: string;
}

export interface LeadershipItem {
	title: string;
	description: string;
	links: LeadershipLink[];
}

export const leadershipItems: LeadershipItem[] = [
	{
		title: 'HalfwiredTV',
		description: 'a community where robotics enthusiasts learn, build, and collaborate on projects together. Provide members a platform to present their voice in livestreams regardless of skill level to build proof of work and showcase their interests. Recent streams include a member’s 3d scanning workflow using retroreflective trackers, live study sessions, CAD speedruns including my ornithopter Ongoing projects include a RL based pick and place robotic arm with collaboration of 6 members (2 of them pursuing masters, one of them is a PHD candidate) Future streams include research paper discussions and CAD mechanism tournaments Currently sitting at 140+ members across 15+ countries as of july',
		links: [
			{ label: 'https://discord.gg/FcTucKSjC', href: 'https://discord.gg/FcTucKSjC' },
			{ label: '[youtube]', href: '#' },
		],
	},
	{
		title: 'ATL Lab Lead',
		description: 'taught junior classes, eventually my fingerprint became my teacher’s phone password, made lots of mini projects like a posture detection chair, robotic hand [9th and 10th grade]',
		links: [{ label: '[link missing]', href: '#' }],
	},
	{
		title: 'Rotary Club President',
		description: 'in 10th grade',
		links: [{ label: '[link missing]', href: '#' }],
	},
	{
		title: 'Class leader in 5 + non consecutive years.',
		description: '[description missing, add about 50 words here]',
		links: [{ label: '[link missing]', href: '#' }],
	},
];
