export interface SkillGroup {
	title: string;
	chips: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		title: 'Programming',
		chips: ['Python', 'C', 'C++', 'Colcon / CMake', 'XML', 'HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'Robotics',
		chips: ['ROS2', 'Gazebo', 'MoveIt', 'Linux'],
	},
	{
		title: 'Embedded',
		chips: ['Arduino', 'OpenCR', 'ESP32'],
	},
	{
		title: 'CAD',
		chips: ['SolidWorks', 'AutoCAD'],
	},
	{
		title: 'Security',
		chips: ['bettercap', 'DeautherX', 'nmap', 'ffuf', 'recon-ng'],
	},
	{
		title: 'Development',
		chips: ['Git', 'Docker', 'React', 'Cloudflare Workers', 'Telegram bots', 'Web basics', 'Tauri', 'FastAPI', 'SQLite', 'Supabase', 'VirtualBox'],
	},
];