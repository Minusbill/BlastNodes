// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Blast',
		category: '介绍 Blast',
		img: require('@/assets/eth/blast.png'),
		link:'/eth/blast',
	},
	{
		id: 2,
		title: 'Blast 与 Web5',
		category: 'Learn Blast in Web5',
		img: require('@/assets/blast/web5bigbang.png'),
		link:'/starknet/principle',
	},
	{
		id: 2,
		title: 'Blast Big Bang',
		category: '活得',
		img: require('@/assets/blast/bigbang.png'),
		link:'/starknet/roadmap',
	},
	{
		id: 3,
		title: 'Blast 的原理',
		category: 'Blast 怎么工作',
		img: require('@/assets/blast/blasthow.png'),
		link:'/starknet/cairo',
	},
	{
		id: 12,
		title: ' Blast 与其他 L2 ',
		category: 'L2',
		img: require('@/assets/blast/ethL2.png'),
		link:'/starknet/zkml',
	},
];

export default projects;
