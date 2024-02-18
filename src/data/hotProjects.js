// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const hotProjects = [
	{
		id: 1,
		title: ' NostrAssets Fairmint',
		category: '怎么玩/细节/注意',
		img: require('@/assets/btc/nostr.png'),
		link:'/btc/nostrFairmint',
	},
	{
		id: 2,
		title: 'Blast 详细介绍',
		category: ' Blast:L2、空投、分数',
		img: require('@/assets/eth/blast.png'),
		link:'/eth/blast',
	},
	{
		id: 3,
		title: 'PortalCoin是什么',
		category: '社交挖矿、空投',
		img: require('@/assets/hot/portal.png'),
		link:'/hotPoint/protalCoin',
	},
];

export default hotProjects;
