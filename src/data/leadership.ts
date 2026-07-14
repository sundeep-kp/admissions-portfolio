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
		description: 'I founded and maintain HalfwiredTV, a community of 140+ robotics enthusiasts (as of july) across 15+ countries including US, canda, Italy, Greece and more, who learn, build, and collaborate on projects together live.\n- It provides members a platform to present their voice in livestreams regardless of their skill level to build proof of work and showcase their interests.\n- Recent streams include a member\'s 3d scanning workflow using retroreflective trackers, live study sessions, CAD speedruns including my ornithopter project.\n- Ongoing projects include a RL based pick and place robotic arm with collaboration of 6 members (2 of them pursuing masters, one of them is a PHD candidate)\n- Future streams include research paper discussions and CAD mechanism tournaments',
		links: [
			{ label: 'https://discord.gg/FcTucKSjC', href: 'https://discord.gg/FcTucKSjC' },
			{ label: '[youtube]', href: '#' },
		],
	},
	{
		title: 'reddit moderator of r/iiitnayaraipur',
		description: '[description missing, add about 50 words here]',
		links: [{ label: '[link missing]', href: '#' }],
	},
	{
		title: 'ATL Lab Lead',
		description: [
			'Served as ATL Lab Lead in 10th grade',
			'Mentored 30+ 9th-grade juniors in electronics & prototyping',
			'Built mini projects: posture-detection chair, robotic hand, sensor-based circuits',
			'Earned teacher\'s trust — "my fingerprint became the teacher\'s phone password"',
		].join('\n'),
		links: [{ label: '[link missing]', href: '#' }],
	},
	{
		title: 'Class leader in 5 + non consecutive years.',
		description: '[description missing, add about 50 words here]',
		links: [{ label: '[link missing]', href: '#' }],
	},
];
