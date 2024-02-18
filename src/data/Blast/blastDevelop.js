// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [

	{
		id: 4,
		title: '如何成为 Blast 的开发者',
		category: 'ERC20实现例子',
		img: require('@/assets/blast/blasteth.png'),
		link:'/starknet/erc20',
	},

	{
		id: 7,
		title: ' Blast 开发教程 ',
		category: '教程',
		img: require('@/assets/blast/blastdev.png'),
		link:'/starknet/ecoProjects',
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

];

export default projects;
