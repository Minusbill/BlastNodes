// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const dwqProjects = [
	{
		id: 1,
		title: 'Namada ',
		category: 'Namada 介绍',
		img: require('@/assets/namada/namada.png'),
		link:'/namada/namadaIntro',
	},
	{
		id: 2,
		title: 'what is Namada ',
		category: 'Namada 是什么',
		img: require('@/assets/namada/whatisnama.png'),
		link:'/namada/whatIsNamada',
	},
	{
		id: 3,
		title: '了解 MASP/CC ',
		category: '了解 MASP/CC',
		img: require('@/assets/namada/maspcc.png'),
		link:'/namada/monadIntro',
	},
	{
		id: 4,
		title: 'Namada 以太坊桥 ',
		category: 'Namada 以太坊桥',
		img: require('@/assets/namada/ethbridge.png'),
		link:'/namada/ethBridge',
	},
	{
		id: 5,
		title: '塑造多链隐私 ',
		category: '塑造多链隐私',
		img: require('@/assets/namada/mulPrivacy.png'),
		link:'/namada/multiChainPrivacy',
	},
	{
		id: 6,
		title: 'Namada 三次权益证明 ',
		category: 'Namada 三次权益证明',
		img: require('@/assets/namada/3proof.png'),
		link:'/namada/3proof',
	},
	{
		id: 7,
		title: 'Namada 节点教程',
		category: 'Namada 节点教程',
		img: require('@/assets/namada/node.png'),
		link:'/namada/monadIntro',
	},
	{
		id: 8,
		title: '了解 Namada 治理',
		category: '了解 Namada 治理',
		img: require('@/assets/namada/namadaGov.png'),
		link:'/namada/gov',
	},
	{
		id: 9,
		title: '介绍 Shielded Swaps',
		category: '介绍 Shielded Swaps',
		img: require('@/assets/namada/shielded.png'),
		link:'/namada/shieldedSwaps',
	},
	{
		id: 10,
		title: 'Namada 与 IBC 通讯',
		category: 'Namada 与 IBC 通讯',
		img: require('@/assets/namada/speakIbc.png'),
		link:'/namada/namadaIBC',
	},
	{
		id: 11,
		title: 'Namada 模块化探索',
		category: 'Namada 模块化探索',
		img: require('@/assets/namada/Modular.png'),
		link:'/namada/modules',
	},
	{
		id: 12,
		title: '建设者和RPGF 计划',
		category: '建设者和RPGF 计划',
		img: require('@/assets/namada/Builders.png'),
		link:'/namada/RPGF',
	},
];

export default dwqProjects;
