// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: '什么是铭文',
		category: '怎么玩、怎么赚',
		img: require('@/assets/insc/ordiInsc.png'),
		link:'/insc/whatisinsc',
	},
	{
		id: 2,
		title: '铭文工具介绍',
		category: '监控、批量打、交易',
		img: require('@/assets/insc/bot.png'),
		link:'/insc/tools',
	},
	{
		id: 3,
		title: '比特币铭文',
		category: 'brc20快速铸造和赚钱',
		img: require('@/assets/insc/brc20.png'),
		link:'/insc/brc20',
	},
	{
		id: 4,
		title: ' nostr 闪电 ',
		category: '如何获得闪电网络空投',
		img: require('@/assets/insc/Nostr.png'),
		link:'/insc/nostr',
	},
	{
		id: 5,
		title: ' ATOM 原子 ',
		category: 'Atom 与 Atommap',
		img: require('@/assets/insc/atom.png'),
		link:'/insc/atom',
	},
	{
		id: 6,
		title: ' Pipe 生态 ',
		category: 'pipe 铸造教导',
		img: require('@/assets/insc/pipe.png'),
		link:'/insc/pipe',
	},
	{
		id: 7,
		title: ' ETH 铭文 ',
		category: '铭文批量、人人都是科学家',
		img: require('@/assets/insc/eths.png'),
		link:'/insc/eths',
	},
	{
		id: 8,
		title: '  BTC 生态 ',
		category: '比特币生态学习',
		img: require('@/assets/insc/btc.png'),
		link:'/insc/btc',
	},
	{
		id: 8,
		title: 'EVM 铭文， 他到底是什么',
		category: ' EVM 和 非 EVM 铭文',
		img: require('@/assets/hot/EVM.png'),
		link:'/hotPoint/whatIsEvmInsc',
	},
];

export default projects;
