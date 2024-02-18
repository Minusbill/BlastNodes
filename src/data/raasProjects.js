// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'AA 虚拟钱包',
		category: ' Waas / 4337',
		img: require('@/assets/raas/aa.png'),
		link:'/projects/ton/tonIntroduce',
	},
	{
		id: 2,
		title: ' 数据应用层',
		category: ' DA',
		img: require('@/assets/raas/tia.png'),
		link:'/projects/ton/developTgBot',
	},
	{
		id: 3,
		title: 'EigenLayer',
		category: '  再质押 巨头',
		img: require('@/assets/raas/eigen.png'),
		link:'/projects/single-project',
	},
	{
		id: 4,
		title: ' Altlayer  ',
		category: 'ETH 扩容/定制',
		img: require('@/assets/raas/altlayer.png'),
		link:'/raas/altlayer',
	},
	{
		id: 5,
		title: ' Avail  ',
		category: 'DA',
		img: require('@/assets/raas/avail.png'),
		link:'/raas/avail',
	},
	{
		id: 6,
		title: ' Rollkit  ',
		category: 'Rollkit',
		img: require('@/assets/raas/rollkit.png'),
		link:'/projects/ton/tact',
	},
	{
		id: 7,
		title: ' Caldera  ',
		category: 'Caldera',
		img: require('@/assets/raas/caldera.png'),
		link:'/projects/ton/tact',
	},
	{
		id: 7,
		title: ' Eclipse  ',
		category: 'Eclipse',
		img: require('@/assets/raas/eclipse.png'),
		link:'/projects/ton/tact',
	},
];

export default projects;
