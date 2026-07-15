export interface AboutCard {
	title: string;
	items: string[];
}

export const aboutCards: AboutCard[] = [
	{
		title: 'Why engineering?',
		items: [
			'Two types of joy: creation (lasts) vs consumption (fleeting)',
			'Engineering gives me creation joy — building things that persist',
		],
	},
	{
		title: 'Why robotics?',
		items: [
			'Most multidisciplinary field — mechanical, electrical, CS converge here',
			'Lets me create nearly anything I can imagine',
		],
	},
	{
		title: 'Current academic focus',
		items: [
			'At my current institution, I am pursuing ECE as my major and Robotics as minor',
			'Personal study: <em>Design of Machinery</em> (Norton), <em>Intro to Robotics</em> (Niku), <em>Modern Robotics</em> (Lynch & Park)',
		],
	},
	{
		title: "What I'll contribute",
		items: [
			'Undergraduate robotics research & open-source software',
			'Student mentorship, leadership roles, robotics workshops',
			'Cross-disciplinary collaborative engineering projects',
		],
	},
];