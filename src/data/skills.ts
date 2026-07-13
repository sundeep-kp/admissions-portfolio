export interface SkillGroup {
	title: string;
	chips: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		title: 'Programming',
		chips: ['Python', 'C, C++, Colcon(CMake)', 'Xml', 'Html, css, js'],
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
		chips: ['Git', 'Docker', 'Web basics (worked with cloudflare agents, telegram bots, React)', 'Tauri', 'FastAPI', 'SQLite', 'Supabase', 'VirtualBox'],
	},
];