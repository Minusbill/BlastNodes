// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'BTC',
		category: 'BTC Nodes',
		img: require('@/assets/btc/btcnode.png'),
		link:'/btc/btc',
	},
	{
		id: 2,
		title: 'ETH',
		category: 'ETH Nodes',
		img: require('@/assets/eth/ethnode.png'),
		link:'/btc/lndAndTap',
	},
	{
		id: 3,
		title: 'Bevm',
		category: 'Bevm Node',
		img: require('@/assets/btc/bevm.png'),
		link:'/btc/stx',
	},
	{
		id: 4,
		title: '  Starknet ',
		category: 'Starknet',
		img: require('@/assets/eth/stk.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: 'babylon',
		category: 'babylon',
		img: require('@/assets/btc/babylon.png'),
		link:'/btc/ordiAndRunes',
	},
	{
		id: 6,
		title: 'Avail',
		category: ' Avail',
		img: require('@/assets/eth/avail.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: 'Berachain ',
		category: 'Berachain',
		img: require('@/assets/eth/berachain.png'),
		link:'/node/bera',
	},
	{
		id: 8,
		title: ' Opi network',
		category: 'Brc Index',
		img: require('@/assets/btc/opi.png'),
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

];

export default projects;
