import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    {
        path: '/aboutUs',
        component: () =>
            import('../views/AbotUs.vue'),
        meta: {
            title: 'Web5 ｜ 关于我们',
        }
    },
    {
        path: '/projects',
        component: () =>
            import( '../views/Projects.vue'),
        meta: {
            title: 'Web5 ｜ 课程',
        }
    },
    {
        path: '/projects/single-project',
        component: () =>
            import(
                '../views/SingleProject.vue'
                ),
    },
    {
        path: '/projects/starknet',
        component: () =>
            import(
                '../views/project/StarknetProjects.vue'
                ),
        meta: {
            title: 'Web5 ｜ Starknet 生态学习',
        }
    },
    {
        path: '/projects/blast',
        component: () =>
            import(
                '../views/project/BlastProjects.vue'
                ),
        meta: {
            title: 'Web5 ｜ Blast 生态学习',
        }
    },
    {
        path: '/projects/raas',
        component: () =>
            import(
                '../views/project/RollupAsAService.vue'
                ),
        meta: {
            title: 'Web5 ｜ Raas 生态学习',
        }
    },
    {
        path: '/raas/altlayer',
        component: () =>
            import(
                '../views/raas/altlayer.vue'
                ),
        meta: {
            title: 'Web5 ｜ altlayer',
        }
    },
    {
        path: '/raas/avail',
        component: () =>
            import(
                '../views/raas/Avail.vue'
                ),
        meta: {
            title: 'Web5 ｜ Avail',
        }
    },
    {
        path: '/starknet/stkIntroduce',
        component: () =>
            import(
                '../views/lesson/Starknet.vue'
                ),
    },
    {
        path: '/starknet/starknetJS',
        component: () =>
            import(
                '../views/starknet/StraknetJS.vue'
                ),
        meta: {
            title: 'Web5 ｜ Starknet JS 教程',
        }
    },
    {
        path: '/starknet/dec',
        component: () =>
            import(
                '../views/starknet/StarknetDec.vue'
                ),
        meta: {
            title: 'Web5 ｜ Starknet 去中心化',
        }
    },
    {
        path: '/starknet/roadmap',
        component: () =>
            import(
                '../views/starknet/Roadmap.vue'
                ),
        meta: {
            title: 'Web5 ｜ Starknet 路线图和代币模型',
        }
    },
    {
        path: '/starknet/giza',
        component: () =>
            import(
                '../views/starknet/Giza.vue'
                ),
        meta: {
            title: 'Web5 ｜ Giza',
        }
    },
    {
        path: '/projects/ton/tonIntroduce',
        component: () =>
            import(
                '../views/lesson/TonIntroduce.vue'
                ),
        meta: {
            title: 'Web5 ｜ Ton 介绍与入门',
        }
    },
    {
        path: '/projects/ton',
        component: () =>
            import(
                '../views/project/TonProjects.vue'
                ),
        meta: {
            title: 'Web5 ｜ Ton 生态学习',
        }
    },
    {
        path: '/projects/sol',
        component: () =>
            import(
                '../views/lesson/Solidity.vue'
                ),
    },
    {
        path: '/eth/plasma',
        component: () =>
            import(
                '../views/eth/Plasma.vue'
                ),
        meta: {
            title: 'Web5 ｜ Plasma',
        }
    },
    {
        path: '/eth/lido',
        component: () =>
            import(
                '../views/eth/Lido.vue'
                ),
        meta: {
            title: 'Web5 ｜ Lido',
        }
    },
    {
        path: '/eth/lidoGuide',
        component: () =>
            import(
                '../views/eth/LidoGuide.vue'
                ),
        meta: {
            title: 'Web5 ｜ Lido 为什么这么重要',
        }
    },
    {
        path: '/eth/blast',
        component: () =>
            import(
                '../views/eth/Blast.vue'
                ),
        meta: {
            title: 'Web5 ｜ Blast',
        }
    },
    {
        path: '/hk/yogapetz',
        component: () =>
            import(
                '../views/hk/YogaPetz.vue'
                ),
        meta: {
            title: 'Web5 ｜ YogaPetz',
        }
    },
    {
        path: '/starknet/cairo',
        component: () =>
            import(
                '../views/lesson/Cairo.vue'
                ),
    },
    {
        path: '/starknet/erc20',
        component: () =>
            import(
                '../views/starknet/ERC20Example.vue'
                ),
    },
    {
        path: '/starknet/ecoProjects',
        component: () =>
            import(
                '../views/starknet/EcoProjects.vue'
                ),
    },
    {
        path: '/newComer',
        component: () =>
            import( '../views/NewComer.vue'),
        meta: {
            title: 'Web5 ｜ 新人学院',
        }
    },
    {
        path: '/mintBlastNFT',
        component: () =>
            import( '../views/MintBlastNFT.vue'),
        meta: {
            title: 'Web5 ｜ mint blast nft',
        }
    },
    {
        path: '/newComer/mining',
        component: () =>
            import( '../views/newComer/Mining.vue'),
        meta: {
            title: 'Web5 ｜ 什么是挖矿',
        }
    },
    {
        path: '/newComer/depin',
        component: () =>
            import( '../views/newComer/DePin.vue'),
        meta: {
            title: 'Web5 ｜ DePin',
        }
    },
    {
        path: '/dawanqu',
        component: () =>
            import( '../views/DaWanQu.vue'),
        meta: {
            title: 'Web5 ｜ 大湾区专区',
        }
    },
    {
        path: '/insc',
        component: () =>
            import( '../views/Inscription.vue'),
        meta: {
            title: 'Web5 ｜ 项目调研',
        }
    },
    {
        path: '/sui',
        component: () =>
            import( '../views/project/Sui.vue'),
        meta: {
            title: 'Web5 ｜ Sui 生态',
        }
    },
    {
        path: '/sui/suiIntro',
        component: () =>
            import( '../views/sui/Sui.vue'),
        meta: {
            title: 'Web5 ｜ Sui 介绍',
        }
    },
    {
        path: '/monad',
        component: () =>
            import( '../views/project/Monad.vue'),
        meta: {
            title: 'Web5 ｜ Monad 生态',
        }
    },
    {
        path: '/monad/monadIntro',
        component: () =>
            import( '../views/lesson/Monad.vue'),
        meta: {
            title: 'Web5 ｜ Monad 介绍',
        }
    },
    {
        path: '/mev',
        component: () =>
            import( '../views/project/Mev.vue'),
        meta: {
            title: 'Web5 ｜ Mev ',
        }
    },
    {
        path: '/hotPoint',
        component: () =>
            import( '../views/project/Hot.vue'),
        meta: {
            title: 'Web5 ｜ 热点 ',
        }
    },
    {
        path: '/dev/products',
        component: () =>
            import( '../views/project/Product.vue'),
        meta: {
            title: 'Web5 ｜ Web3 周边产品 ',
        }
    },
    {
        path: '/dev/platforms',
        component: () =>
            import( '../views/project/DevPlatform.vue'),
        meta: {
            title: 'Web5 ｜ DevPlatform ',
        }
    },
    {
        path: '/weibo',
        component: () =>
            import( '../views/project/Weibo.vue'),
        meta: {
            title: 'Web5 ｜ Weibo ',
        }
    },
    {
        path: '/weibo/tonySay',
        component: () =>
            import( '../views/weibo/TonySay.vue'),
        meta: {
            title: 'Web5 ｜ Tony ',
        }
    },
    {
        path: '/weibo/feiZhai',
        component: () =>
            import( '../views/weibo/Feizhai.vue'),
        meta: {
            title: 'Web5 ｜ Feizhai ',
        }
    },
    {
        path: '/weibo/kingbo',
        component: () =>
            import( '../views/weibo/Kingbo.vue'),
        meta: {
            title: 'Web5 ｜ kingbo ',
        }
    },
    {
        path: '/weibo/bitKing',
        component: () =>
            import( '../views/weibo/BitKing.vue'),
        meta: {
            title: 'Web5 ｜ 比特皇 ',
        }
    },
    {
        path: '/namada',
        component: () =>
            import( '../views/project/Namada.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/namadaIntro',
        component: () =>
            import( '../views/namada/NamadaIntro.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/whatIsNamada',
        component: () =>
            import( '../views/namada/WahtIsNamada.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/ethBridge',
        component: () =>
            import( '../views/namada/ETHBridge.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/multiChainPrivacy',
        component: () =>
            import( '../views/namada/Multichain.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/3proof',
        component: () =>
            import( '../views/namada/3Proof.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/gov',
        component: () =>
            import( '../views/namada/NamadaGov.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/modules',
        component: () =>
            import( '../views/namada/Modules.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/shieldedSwaps',
        component: () =>
            import( '../views/namada/ShieldedSwaps.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/namadaIBC',
        component: () =>
            import( '../views/namada/NamadaIBC.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/namada/RPGF',
        component: () =>
            import( '../views/namada/RPGF.vue'),
        meta: {
            title: 'Web5 ｜ Namada ',
        }
    },
    {
        path: '/hotPoint/facetCards',
        component: () =>
            import( '../views/hot/FaectCard.vue'),
        meta: {
            title: 'Web5 ｜ FaectCard ',
        }
    },
    {
        path: '/hotPoint/protalCoin',
        component: () =>
            import( '../views/hot/PortalCoin.vue'),
        meta: {
            title: 'Web5 ｜ protalCoin ',
        }
    },
    {
        path: '/hotPoint/macosElectrum',
        component: () =>
            import( '../views/hot/MacosElectrum.vue'),
        meta: {
            title: 'Web5 ｜ MacosElectrum ',
        }
    },
    {
        path: '/hotPoint/windowsElectrum',
        component: () =>
            import( '../views/hot/WindowsElectrum.vue'),
        meta: {
            title: 'Web5 ｜ WindowsElectrum ',
        }
    },
    {
        path: '/hotPoint/whatIsEvmInsc',
        component: () =>
            import( '../views/hot/WhatIsEvmInsc.vue'),
        meta: {
            title: 'Web5 ｜ WhatIsEvmInsc ',
        }
    },
    {
        path: '/hotPoint/pols',
        component: () =>
            import( '../views/hot/Pols.vue'),
        meta: {
            title: 'Web5 ｜ Pols ',
        }
    },
    {
        path: '/hotPoint/backpack',
        component: () =>
            import( '../views/hot/Backpack.vue'),
        meta: {
            title: 'Web5 ｜ Backpack ',
        }
    },
    {
        path: '/hotPoint/blueBox',
        component: () =>
            import( '../views/hot/BlueBox.vue'),
        meta: {
            title: 'Web5 ｜ 蓝盒子 ',
        }
    },
    {
        path: '/dev/products/btcCat',
        component: () =>
            import( '../views/products/BtcCats.vue'),
        meta: {
            title: 'Web5 ｜ BTC 抽奖机 ',
        }
    },
    {
        path: '/hot/penumbra',
        component: () =>
            import( '../views/hot/Penumbrazone.vue'),
        meta: {
            title: 'Web5 ｜ penumbra 仪式 ',
        }
    },
    {
        path: '/hot/dmint',
        component: () =>
            import( '../views/hot/Dmint.vue'),
        meta: {
            title: 'Web5 ｜ Dmint ',
        }
    },
    {
        path: '/zkp',
        component: () =>
            import( '../views/project/ZKP.vue'),
        meta: {
            title: 'Web5 ｜ 零知识证明 ',
        }
    },
    {
        path: '/insc/whatisinsc',
        component: () =>
            import( '../views/insc/WhatIsInsc.vue'),
        meta: {
            title: 'Web5 ｜ 项目调研',
        }
    },
    {
        path: '/insc/atomInstall',
        component: () =>
            import( '../views/insc/ATOM.vue'),
        meta: {
            title: 'Web5 ｜ ATOM 教程',
        }
    },
    {
        path: '/insc/atomNode',
        component: () =>
            import( '../views/insc/ATOMNode.vue'),
        meta: {
            title: 'Web5 ｜ ATOM 节点教程',
        }
    },
    {
        path: '/projects/ton/developTgBot',
        component: () =>
            import( '../views/lesson/DevelopTgBot.vue'),
        meta: {
            title: 'Web5 ｜ 开发一个 TG 机器人',
        }
    },
    {
        path: '/projects/ton/tact',
        component: () =>
            import( '../views/lesson/Tact.vue'),
        meta: {
            title: 'Web5 ｜ Tact 入门教程',
        }
    },
    {
        path: '/starknet/dojo',
        component: () =>
            import( '../views/lesson/DojoIntro.vue'),
        meta: {
            title: 'Web5 ｜ Dojo 教程',
        }
    },
    {
        path: '/starknet/eco',
        component: () =>
            import( '../views/lesson/StarknetECO.vue'),
        meta: {
            title: 'Web5 ｜ Starknet 生态',
        }
    },
    {
        path: '/starknet/principle',
        component: () =>
            import( '../views/lesson/StarknetPrinciple.vue'),
        meta: {
            title: 'Web5 ｜ Dojo 教程',
        }
    },
    {
        path: '/insc/tools',
        component: () =>
            import( '../views/lesson/InscTools.vue'),
        meta: {
            title: 'Web5 ｜ 铭文 网站和工具',
        }
    },
    {
        path: '/node/bera',
        component: () =>
            import( '../views/blast/Bera.vue'),
        meta: {
            title: 'Nodes ｜ Bera',
        }
    },
    {
        path: '/btc/utxo',
        component: () =>
            import( '../views/lesson/utxo.vue'),
        meta: {
            title: 'Web5 ｜ UTXO',
        }
    },
    {
        path: '/btc/BTByte',
        component: () =>
            import( '../views/btc/DaoHang.vue'),
        meta: {
            title: 'Web5 ｜ BTByte',
        }
    },
    {
        path: '/btc/brc20new',
        component: () =>
            import( '../views/lesson/Brc20New.vue'),
        meta: {
            title: 'Web5 ｜ BRC 20原理',
        }
    },
    {
        path: '/btc/brc420',
        component: () =>
            import( '../views/lesson/Brc420.vue'),
        meta: {
            title: 'Web5 ｜ BRC 420原理',
        }
    },
    {
        path: '/btc/brc100',
        component: () =>
            import( '../views/lesson/Brc100.vue'),
        meta: {
            title: 'Web5 ｜ BRC 100原理',
        }
    },
    {
        path: '/btc/rgb',
        component: () =>
            import( '../views/lesson/RGB.vue'),
        meta: {
            title: 'Web5 ｜ RGB 协议',
        }
    },
    {
        path: '/btc/nft',
        component: () =>
            import( '../views/project/BTCNFT.vue'),
        meta: {
            title: 'Web5 ｜ BTC NFT',
        }
    },
    {
        path: '/btc/rgbSetup',
        component: () =>
            import( '../views/lesson/RGBSetup.vue'),
        meta: {
            title: 'Web5 ｜ RGB 安装配置',
        }
    },
    {
        path: '/starknet/sharp',
        component: () =>
            import( '../views/lesson/Sharp.vue'),
        meta: {
            title: 'Web5 ｜ Dojo 教程',
        }
    },
    {
        path: '/starknet/zkml',
        component: () =>
            import( '../views/lesson/zkML.vue'),
        meta: {
            title: 'Web5 ｜ zkML',
        }
    },
    {
        path: '/starknet/zig',
        component: () =>
            import( '../views/lesson/zig.vue'),
        meta: {
            title: 'Web5 ｜ zig',
        }
    },
    {
        path: '/starknet/aa',
        component: () =>
            import( '../views/starknet/AA.vue'),
        meta: {
            title: 'Web5 ｜ Starknet 账户抽象',
        }
    },
    {
        path: '/projects/starknet/fullChainOnGame',
        component: () =>
            import( '../views/lesson/StarknetFullChainOnGame.vue'),
        meta: {
            title: 'Web5 ｜ starknet 全链游戏',
        }
    },
    {
        path: '/starknet/madara',
        component: () =>
            import( '../views/lesson/Madara.vue'),
        meta: {
            title: 'Web5 ｜ Madara 排序器',
        }
    },
    {
        path: '/starknet/devTools',
        component: () =>
            import( '../views/lesson/DevTools.vue'),
        meta: {
            title: 'Web5 ｜ Starknet 开发工具',
        }
    },
    {
        path: '/starknet/stone',
        component: () =>
            import( '../views/lesson/Stone.vue'),
        meta: {
            title: 'Web5 ｜ Stone 证明器',
        }
    },
    {
        path: '/starknet/herotus',
        component: () =>
            import( '../views/lesson/Herotus.vue'),
        meta: {
            title: 'Web5 ｜ Herotus 存储证明',
        }
    },
    {
        path: '/starknet/kakarot',
        component: () =>
            import( '../views/lesson/Kakarot.vue'),
        meta: {
            title: 'Web5 ｜ Kakarot EVN',
        }
    },
    {
        path: '/insc/brc20',
        component: () =>
            import( '../views/lesson/Brc20.vue'),
        meta: {
            title: 'Web5 ｜ Brc20 铭文',
        }
    },
    {
        path: '/insc/btc',
        component: () =>
            import( '../views/project/BTC.vue'),
        meta: {
            title: 'Web5 ｜ BTC 生态',
        }
    },
    {
        path: '/eth',
        component: () =>
            import( '../views/project/ETH.vue'),
        meta: {
            title: 'Web5 ｜ ETH 生态',
        }
    },
    {
        path: '/btc/btc',
        component: () =>
            import( '../views/blast/BTC.vue'),
        meta: {
            title: 'Web5 ｜ BTC 生态',
        }
    },
    {
        path: '/myNodes',
        component: () =>
            import( '../views/blast/MyNodes.vue'),
        meta: {
            title: 'Nodes ｜ 我的节点',
        }
    },
    {
        path: '/myNodes',
        component: () =>
            import( '../views/blast/MyNodes.vue'),
        meta: {
            title: 'Nodes ｜ 我的节点',
        }
    },
    {
        path: '/btc/lndAndTap',
        component: () =>
            import( '../views/lesson/TaprootAssets.vue'),
        meta: {
            title: 'Web5 ｜ Taproot Assets协议',
        }
    },
    {
        path: '/btc/stx',
        component: () =>
            import( '../views/lesson/Stacks.vue'),
        meta: {
            title: 'Web5 ｜ Stacks',
        }
    },
    {
        path: '/btc/rsk',
        component: () =>
            import( '../views/lesson/RSK.vue'),
        meta: {
            title: 'Web5 ｜ RSK',
        }
    },
    {
        path: '/l2',
        component: () =>
            import( '../views/project/L2.vue'),
        meta: {
            title: 'Web5 ｜ L2 全景',
        }
    },
    {
        path: '/insc/nostr',
        component: () =>
            import( '../views/lesson/Nostr.vue'),
        meta: {
            title: 'Web5 ｜ nostr 闪电',
        }
    },
    {
        path: '/insc/eths',
        component: () =>
            import( '../views/lesson/Eths.vue'),
        meta: {
            title: 'Web5 ｜ eths 铭文',
        }
    },
    {
        path: '/insc/pipe',
        component: () =>
            import( '../views/lesson/Pipe.vue'),
        meta: {
            title: 'Web5 ｜ pipe 铭文',
        }
    },
    {
        path: '/insc/mac_lnd',
        component: () =>
            import( '../views/lesson/LndLightSetupMac.vue'),
        meta: {
            title: 'Web5 ｜ LND 安装',
        }
    }
    ,
    {
        path: '/insc/win_lnd',
        component: () =>
            import( '../views/lesson/LndLightSetupWindows.vue'),
        meta: {
            title: 'Web5 ｜ LND 安装',
        }
    }
    ,
    {
        path: '/btc/fastNode',
        component: () =>
            import( '../views/lesson/FastSynNode.vue'),
        meta: {
            title: 'Web5 ｜ 快速同步节点',
        }
    }
    ,
    {
        path: '/btc/nostrFairmint',
        component: () =>
            import( '../views/lesson/NostrFairmint.vue'),
        meta: {
            title: 'Web5 ｜ Nostr Fairmint',
        }
    }
    ,
    {
        path: '/insc/atom',
        component: () =>
            import( '../views/lesson/AtomMap.vue'),
        meta: {
            title: 'Web5 ｜ ATOM 教程',
        }
    }
    ,
    {
        path: '/nft/mint',
        component: () =>
            import( '../views/lesson/NFTMint.vue'),
        meta: {
            title: 'Web5 ｜ NFT Mint 教程',
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(
        document.querySelectorAll('[data-vue-router-controlled]')
    ).map((el) => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));

    next();
});
