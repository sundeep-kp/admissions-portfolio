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
		title: '[Title Missing]',
		description: '[Description Missing]',
		links: [{ label: '[Link Missing]', href: '#' }],
	},
	{
		title: '[Title Missing]',
		description: '[Description Missing]',
		links: [{ label: '[Link Missing]', href: '#' }],
	},
	{
		title: '[Title Missing]',
		description: '[Description Missing]',
		links: [{ label: '[Link Missing]', href: '#' }],
	},
	{
		title: '[Title Missing]',
		description: '[Description Missing]',
		links: [{ label: '[Link Missing]', href: '#' }],
	},
];
