// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Blast Big Bang',
		category: '活动',
		img: require('@/assets/blast/bigbang.png'),
		link:'/starknet/roadmap',
	},
	{
		id: 2,
		title: ' Blast 与 Blur ',
		category: '关于 Blur 质押',
		img: require('@/assets/blast/blastblur.png'),
		link:'/starknet/giza',
	},
	{
		id: 8,
		title: ' Blast DEFI ',
		category: 'Defi in Blast',
		img: require('@/assets/blast/blastdefi.png'),
		link: '/starknet/aa',
	},

];

export default projects;
