// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const dwqProjects = [
	{
		id: 1,
		title: 'Sui',
		category: '关于 Sui 生态',
		img: require('@/assets/sui/sui.png'),
		link:'/sui/suiIntro',
	},
	{
		id: 2,
		title: 'Move',
		category: ' Move 语言学习',
		img: require('@/assets/sui/move.png'),
		link:'/sui/move',
	},
];

export default dwqProjects;
