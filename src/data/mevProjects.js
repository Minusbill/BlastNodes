// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const dwqProjects = [
	{
		id: 1,
		title: 'Flashbots',
		category: 'Flashbots 了解',
		img: require('@/assets/mev/flashbots.png'),
		link:'/mev/flashbots',
	},
	{
		id: 2,
		title: 'Bloxroute',
		category: 'Bloxroute 了解',
		img: require('@/assets/mev/bloxroute.png'),
		link:'/mev/blo',
	},
];

export default dwqProjects;
