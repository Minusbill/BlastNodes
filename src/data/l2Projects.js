// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'OP',
		category: 'OP',
		img: require('@/assets/l2/op.png'),
		link:'/btc/btcEco',
	},
	{
		id: 2,
		title: 'ARB',
		category: 'ARB',
		img: require('@/assets/l2/arb.png'),
		link:'/btc/lndAndTap',
	},
	{
		id: 3,
		title: '  Zksync ',
		category: 'Zksync',
		img: require('@/assets/l2/zks.png'),
		link:'/btc/stx',
	},
	{
		id: 4,
		title: '  Starknet ',
		category: 'Starknet',
		img: require('@/assets/l2/starknet.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: ' BASE',
		category: 'BASE',
		img: require('@/assets/l2/base.png'),
		link:'/btc/ordiAndRunes',
	},
	{
		id: 6,
		title: ' Linea',
		category: ' Linea',
		img: require('@/assets/l2/Linea.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: ' Scroll ',
		category: 'Scroll',
		img: require('@/assets/l2/scorll.png'),
		link:'/btc/bitVM',
	},
	{
		id: 8,
		title: ' Polygon zkEVM',
		category: 'Polygon zkEVM',
		img: require('@/assets/l2/polyzk.png'),
		link:'/btc/tools',
	},
	{
		id: 9,
		title: ' Fuel',
		category: 'Fuel',
		img: require('@/assets/l2/Fuel.png'),
		link:'/btc/node',
	},
	{
		id: 10,
		title: ' Taiko',
		category: 'Taiko',
		img: require('@/assets/l2/taiko.png'),
		link:'/btc/mac_lnd',
	},
	{
		id: 11,
		title: ' Mantle',
		category: 'Mantle',
		img: require('@/assets/l2/mantle.png'),
		link:'/btc/mac_lnd',
	},
	{
		id: 11,
		title: ' OP BNB',
		category: 'OP BNB',
		img: require('@/assets/l2/opbnb.png'),
		link:'/btc/mac_lnd',
	},
];

export default projects;
