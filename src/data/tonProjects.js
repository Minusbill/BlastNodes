// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Ton 与 Telgram',
		category: '介绍 Ton 生态',
		img: require('@/assets/ton/telegram.png'),
		link:'/projects/ton/tonIntroduce',
	},
	{
		id: 2,
		title: ' TG bot',
		category: '开发 TG Bot教程',
		img: require('@/assets/ton/tgbot.png'),
		link:'/projects/ton/developTgBot',
	},
	{
		id: 3,
		title: 'TG 小程序',
		category: '  Mini apps',
		img: require('@/assets/ton/miniapp.png'),
		link:'/projects/single-project',
	},
	{
		id: 4,
		title: ' Tact ',
		category: 'Tact教程',
		img: require('@/assets/ton/tact.png'),
		link:'/projects/ton/tact',
	},
];

export default projects;
