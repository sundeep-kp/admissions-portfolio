export interface AwardItem {
	title: string;
	category: string;
	description: string;
}

export const awardItems: AwardItem[] = [
	{
		title: 'Competitions and Exhibitions',
		category: 'Competitions and Exhibitions',
		description: [
			'2nd prize at Robotics Hackathon, IIIT Bhubaneswar D3 Fest (Save the Survivor)',
			'National qualifier — MathsExpress (3rd grade)',
			'Silver — Hydrogen fuel from seawater & solar panels live demo (6th grade)',
			'Gold — Science behind Ram Setu, mythological landmass connecting India & Sri Lanka (7th grade)',
			'Gold — Robotic prosthetic arm for amputees (10th grade)',
		].join('\n'),
	},
	{
		title: 'Academic Achievements',
		category: 'Academic Achievements',
		description: [
			'2nd highest score in 10th standard (92.6%)',
			'Top scorers display — 12th standard (95.3%)',
			'JEE Mains 97.9 percentile',
			'CGPA: Sem 1: 9.47, Sem 2: 9.03',
		].join('\n'),
	},
	{
		title: 'Scholarships',
		category: 'Scholarships',
		description: 'Reliance Foundation Undergraduate Scholar 2025, FIITJEE 2023',
	},
	{
		title: 'Certificates',
		category: 'Certificates',
		description: 'Matlab, Python, EFSET C1 Advanced, IEEE English',
	},
];