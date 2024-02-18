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
		id: 4,
		title: '如何成为 Blast 的开发者',
		category: 'ERC20实现例子',
		img: require('@/assets/blast/blasteth.png'),
		link:'/starknet/erc20',
	},
	{
		id: 5,
		title: ' Blast 与全链引擎',
		category: 'gamefi的探讨',
		img: require('@/assets/blast/muddojo.png'),
		link:'/starknet/dojo',
	},
	{
		id: 7,
		title: ' Blast 开发教程 ',
		category: '教程',
		img: require('@/assets/blast/blastdev.png'),
		link:'/starknet/ecoProjects',
	},
	{
		id: 8,
		title: ' Blast DEFI ',
		category: 'Defi in Blast',
		img: require('@/assets/blast/blastdefi.png'),
		link: '/starknet/aa',
	},
	{
		id: 9,
		title: ' Blast  NFT ',
		category: 'prove/sharp',
		img: require('@/assets/blast/blastwithnfts.png'),
		link:'/starknet/sharp',
	},
	{
		id: 10,
		title: ' Blast GameFi ',
		category: 'Starknet sequencer',
		img: require('@/assets/starknet/madara.png'),
		link:'/starknet/madara',
	},
	{
		id: 12,
		title: ' Blast 与其他 L2 ',
		category: 'L2',
		img: require('@/assets/blast/ethL2.png'),
		link:'/starknet/zkml',
	},
	{
		id: 12,
		title: ' Blast 与 Blur ',
		category: '关于 Blur 质押',
		img: require('@/assets/blast/blastblur.png'),
		link:'/starknet/giza',
	},
	{
		id: 14,
		title: ' 如何在 Blast 上发 NFT ',
		category: 'Blast with NFT',
		img: require('@/assets/blast/blastblurnft.png'),
		link:'/starknet/devTools',
	},
	{
		id: 15,
		title: ' 如何在 Blast 上发 Token ',
		category: 'Token',
		img: require('@/assets/blast/blastL2Token.png'),
		link:'/starknet/herotus',
	},
	{
		id: 17,
		title: ' Blast 的路线图',
		category: '生态介绍',
		img: require('@/assets/blast/blasteco.png'),
		link: '/starknet/eco',
	},

];

export default projects;
