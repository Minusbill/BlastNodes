// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [

	{
		id: 5,
		title: ' Blast 与全链引擎',
		category: 'gamefi的探讨',
		img: require('@/assets/blast/muddojo.png'),
		link:'/starknet/dojo',
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
		id: 17,
		title: ' Blast 的路线图',
		category: '生态介绍',
		img: require('@/assets/blast/blasteco.png'),
		link: '/starknet/eco',
	},

];

export default projects;
