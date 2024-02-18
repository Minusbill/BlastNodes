<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BTC 生态导航',
  singleProjectDate: 'Nov 15,  2023',
  singleProjectTag: ' BTC / BTByte ',
};

const projectInfo = {
  clientHeading: '  BTByte 导航 ',
  companyInfos: [
    {id: 1, title: 'BTByte 地址', details: 'https://btbyte.com/',link:'https://btbyte.com/'},
  ],
  objectivesHeading: '',
  objectivesDetails: '',
  technologies: [
    {
      title: '',
      techs: [],
    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      header: "一、Atomicals 生态",
      details: '1. Atomicals Wallet \n' +
          '@atomicalswallet\n' +
          '简介：保护您的 ARC-20 和 NFT 的 Atomicals 钱包（钱包扩展、比特币转账）',
      link:"https://atomicalswallet.com"
    },
    {
      id: 2,
      header: "2. Wizz Cash",
      details: '简介：批量转账 NFT 和 Realm（钱包仪表板、资产转账）\n',
      link:"https://wizz.cash/dashboard"
    },
    {
      id: 3,
      header: "3. Atomical Market",
      details: '简介：ARC-20 的区块浏览器和资产管理器（交易市场、代币管理）',
      link:"https://atomicalmarket.com"
    },
    {
      id: 4,
      header: "4. SatsX\n" +
          "      @SatsXio",
      details: '简介：ATOM、PIPE 交易市场，Realm 铭刻（铭文交易、钱包查询）\n',
      link:"https://satsx.io"
    },
    {
      id: 4,
      header: "二、Ordinals 生态",
    },
    {
      id: 5,
      header: "1. UniSat",
      details: '简介：比特币 Ordinals 和 BRC-20 的开源 Chrome 扩展（浏览器插件、铭文铸造） ',
      link:"https://unisat.io"
    },
    {
      id: 5,
      header: "2. OKX Wallet \n" +
          "@okxchinese\n" +
          " ",
      details: '简介：Web3 入口，一个就够（资产看板、交易聚合）\n ',
      link:"https://okx.com/cn/web3"
    }, {
      id: 5,
      header: "3. iDclub \n" +
          "@idclub_ord\n",
      details: '简介：在比特币上刻写、购买和出售 Ordinals NFT 和铭文（交易市场、批量注册）\n ',
      link:"https://idclub.io/home"
    }, {
      id: 5,
      header: "4. Ordinals Wallet \n" +
          "@ordinalswallet\n" +
          " ",
      details: '简介：非托管比特币钱包和交易市场（NFT 市场、Launchpad）\n ',
      link:"https://ordinalswallet.com/collect"
    }, {
      id: 5,
      header: "5. Magic Eden \n" +
          "@MagicEden\n",
      details: '简介：您在数字 NFT 中发现、表达和拥有的目的地（NFT 市场、Launchpad）',
      link:"https://magiceden.io/ordinals"
    }, {
      id: 5,
      header: "6. Ordinals market \n" +
          "@OrdinalsMarket_\n",
      details: '简介：专业交易者的 Ordinals 交易市场（NFT 市场、仪表板）',
      link:"https://ordinals.market"
    }, {
      id: 5,
      header: "7. OrdinalsBot \n" +
          "@ordinalsbot\n" +
          " ",
      details: '简让在 Bitcoin 上刻上序数变得就像上传文件一样简单（部署创建、哈希检查）',
      link:"https://ordinalsbot.com"
    }, {
      id: 5,
      header: "8. OrdinalHub \n" +
          "@ordinalhub\n" +
          " ",
      details: '简介：发现、跟踪和分析比特币 Ordinals（创建 Ordinals、探索分析）\n ',
      link:"https://ordinalhub.com"
    }, {
      id: 5,
      header: "9. OrdSpace \n" +
          "@ordinalsda\n" +
          " ",
      details: '简介：Ordinals 洞察和分析（行情报价、数据统计）\n ',
      link:"https://ordspace.org/brc20"
    }, {
      id: 5,
      header: "10. http://Gamma.io \n" +
          "@trygamma\n",
      details: '简介：在比特币上创造您的数字资产（NFT 铸造、热门收藏）\n ',
      link:"https://gamma.io"
    },
    {
      id: 5,
      header: "11. Best In Slot \n" +
          "@bestinslotxyz\n",
      details: '简介：在比特币上构建最好的 ordinals 聚合体验（热门NFT、最新铭文）\n',
      link:"https://bestinslot.xyz"
    },
    {
      id: 5,
      header: "12. Xverse \n" +
          "@xverseApp\n",
      details: '简介：适合所有人的比特币钱包（硬件冷存储、数字收藏品）\n',
      link:"https://xverse.app"
    },{
      id: 5,
      header: "13. Liquidium \n" +
          "@LiquidiumFi\n",
      details: '简介：借 Ordinals，赚取比特币利息（DeFi、质押借贷）\n',
      link:"https://liquidium.fi"
    },{
      id: 5,
      header: "14. mempool \n" +
          "@mempool\n" +
          "\n",
      details: '简介：体验完整的比特币生态，链上数据仪表板（出块查询、Gas 统计）\n',
      link:"https://bestinslot.xyz"
    },{
      id: 5,
      header: "15. Ordiscan",
      details: '简介：BRC20 区块浏览器（铭文搜索、NFT收藏）\n',
      link:"https://ordiscan.com"
    },{
      id: 5,
      header: "16. LooksOrdinal \n" +
          "@rarity_garden\n",
      details: '简介：追踪链上实时铸造铭文（取消铸造、代打平台）\n',
      link:"https://looksordinal.com/index.html"
    },{
      id: 5,
      header: "17. GeniiData \n" +
          "@GeniiData\n",
      details: '简介：捕捉热点铭文和 NFT 的实时铸造情况（Ordinals 热图、钱包统计）\n',
      link:"https://geniidata.com/ordinals/home"
    },{
      id: 5,
      header: "18. Luminex \n" +
          "@luminexio\n",
      details: '简介：比特币 Ordinals Launchpad 平台（规模化、非托管铸造）\n',
      link:"https://luminex.io"
    },{
      id: 5,
      header: "19. Hiro \n" +
          "@hirosystems\n",
      details: '简介：按地址、铭文ID、区块进行 Ordinals 搜索（最新铭文、查看稀有聪）\n',
      link:"https://ordinals.hiro.so"
    },{
      id: 5,
      header: "20. Orders Exchange \n" +
          "@orders_exchange\n",
      details: '简介：基于比特币构建的 BRC-20 去中心化交易所（DEX、PSBT技术）\n',
      link:"https://orders.exchange"
    },{
      id: 5,
      header: "21. Ordinex \n" +
          "@ordinexio\n",
      details: '简介：安全、可靠和透明的 NFT 交易环境（ordinals 创建、NFT交易）\n',
      link:"https://ordinex.io"
    },{
      id: 5,
      header: "22. Deezy \n" +
          "@deezy_inc\n",
      details: '简介：Deezy 让比特币变得简单（扫描稀有聪、API 工具）\n',
      link:"https://deezy.io"
    },{
      id: 5,
      header: "23. Scarce City \n" +
          "@scarcedotcity\n",
      details: '简介：使用比特币技术和出售比特币商品的市场（稀缺拍卖、特色销售）\n',
      link:"https://scarce.city"
    },
    {
      id: 5,
      header: "24. Ordmint \n" +
          "@OrdmintAPP\n",
      details: '简介：社区主导的 Ordinals Launchpad （无缝互动、第三方支付）\n',
      link:"https://ordmint.io"
    },
    {
      id: 5,
      header: "25. Ordbit \n" +
          "@ord_bit\n",
      details: '简介：在 5 分钟内启动您的 Ordinals（铭刻 Ordinals、创建收藏）\n',
      link:"https://inscribe.ordbit.io"
    },{
      id: 5,
      header: "26. Bxdx io \n" +
          "@BitX_Brc20\n",
      details: '简介：BRC20 数据统计，钱包检测（托管 DEX、Defi 中心）\n',
      link:"https://brc-20.io"
    },{
      id: 5,
      header: "27. Magisat \n" +
          "@Magisat_io\n",
      details: '简介：在比特币网络上收集数字钻石（稀有资产、所有类别）\n',
      link:"https://magisat.io"
    },{
      id: 5,
      header: "28. Ordinals \n" +
          "@BTByteTeam\n",
      details: '简介：Ordinals 官方网站（理论手册、Ordinals 钱包）\n',
      link:"https://ordinals.com"
    },{
      id: 5,
      header: "29. Ordinals Analysis",
      details: '简介：BRC-20 数据面板分析（铭文总数、费用统计）\n',
      link:"https://dune.com/dgtl_assets/bitcoin-ordinals-analysis"
    },{
      id: 5,
      header: "30. Ordinals Marketplaces",
      details: '简介：Ordinals 数据面板分析（市场交易量、交易笔数）\n',
      link:"https://dune.com/domo/ordinals-marketplaces"
    },{
      id: 5,
      header: "三、PIPE 生态",
    },{
      id: 5,
      header: "1. Trac \n" +
          "@trac_btc\n",
      details: '简介：比特币 Ordinals 的协议跟踪（索引/跟踪器、可组合的）\n',
      link:"https://trac.network/index.html"
    },{
      id: 5,
      header: "2. Inscrib3 \n" +
          "@inscrib3\n",
      details: '简介：在比特币网络上部署、铸造铭文（铭文铸造、链上查询）\n',
      link:"https://pipe.inscrib3.land"
    },{
      id: 5,
      header: "3. PIPELINE \n" +
          "@BTByteTeam\n",
      details: '简介：在 PIPE 协议上 Mint 和部署（行情指示器、部署 TX）\n',
      link:"https://ppline.app"
    },{
      id: 5,
      header: "4. RUNEX\n",
      details: '简介：SWAP 形式交易所，内测中（DEX交易、PIPE）\n',
      link:"https://runex.tech/#"
    },{
      id: 5,
      header: "5. Bison Labs",
      details: '简介：开创了原生比特币的 zk-rollup 来彻底改变 DeFi（Swap 交易、自动做市商）\n',
      link:"https://bisonlabs.io/index.html"
    },
    {
      id: 5,
      header: "四、RGB协议 生态\n",
    },
    {
      id: 5,
      header: "1. RGB smart \n" +
          "@lnp_bp\n",
      details: '简介：RGB 技术官网，学习了解智能合约（可扩展性、隐私保护）\n',
      link:"https://rgb.tech"
    },{
      id: 5,
      header: "2. BitMask \n" +
          "@BitMask_App\n",
      details: '简介：通往比特币 DeepWeb3 的门户（钱包、私有可扩展）\n',
      link:"https://bitmask.app"
    },{
      id: 5,
      header: "3. MyCitadel \n" +
          "@mycitadel_io\n",
      details: '简介：终极数字主权，以隐私为中心的软件（RGB 钱包、身份管理）\n',
      link:"https://mycitadel.io"
    },{
      id: 5,
      header: "4. RGBex",
      details: '简介：在比特币和闪电网络上搜索 RGB 智能合约的世界（区块浏览器、API接口）\n',
      link:"https://rgbex.io"
    },{
      id: 5,
      header: "5. COSMINMART  \n" +
          "@BTByteTeam\n",
      details: '简介：支持智能合约的全新比特币应用生态（链上钱包、交易市场）\n',
      link:"https://cosminmart.com/#/"
    },{
      id: 5,
      header: "6. Pandora Prime",
      details: '简介：使用 RGB 智能合约和闪电网络的结合来开创金融（链上钱包、浏览器）\n',
      link:"https://pandoraprime.ch"
    },{
      id: 5,
      header: "7. Infinitas\n",
      details: '简介：融合 RGB 协议和闪电网络的比特币应用生态网络（隐私保护、低延迟交易）\n',
      link:"https://iftas.tech"
    },
    {
      id: 5,
      header: "8. DIBA \n" +
          "@trydiba\n",
      details: '简介：RGB 协议上的 UDA 交易市场（NFT 市场、闪电网络）\n ',
      link:"https://diba.io"
    },
    {
      id: 5,
      header: "五、闪电网络 生态\n",
    },
    {
      id: 5,
      header: "1. TERMINAL\n",
      details: '简介：通过网络浏览器安全私密地连接您的节点（资产浏览器、闪电节点）\n',
      link:"https://terminal.lightning.engineering"
    },{
      id: 5,
      header: "2. Alby \n" +
          "@getAlby\n",
      details: '简介：您的比特币和 Nostr 网络伴侣（闪电钱包、浏览器扩展）\n',
      link:"https://getalby.com"
    },{
      id: 5,
      header: "3. NostrAssets",
      details: '简介：由 Nostr 协议驱动的资产管理平台（闪电钱包、浏览器扩展）\n ',
      link:"https://mainnet.nostrassets.com/#/marketplace/listing"
    },{
      id: 5,
      header: "4. Sparrow Wallet \n" +
          "@craigraw\n",
      details: '简介：为重视财务自主权的人设计的比特币钱包（多重签名、PSBT 支持）\n ',
      link:"https://sparrowwallet.com"
    },{
      id: 5,
      header: "5. Leather \n" +
          "@LeatherBTC\n",
      details: '简介：自我托管的比特币钱包（浏览器扩展、非托管开源）\n ',
      link:"https://leather.io"
    },
    {
      id: 5,
      header: "整理不易，觉得有用的小伙伴麻烦点赞转发一下，如有遗漏，欢迎补充，谢谢： http://BTByte.com",
    },
  ],
  socialSharingsHeading: '',
  socialSharings: [],
};

const relatedProject = {
  relatedProjectsHeading: 'Related Projects',
  relatedProjects: [
    {
      id: 1,
      title: 'Mobile UI',
      img: require('@/assets/images/starknet.jpg'),
    },
    {
      id: 2,
      title: 'Web Application',
      img: require('@/assets/images/raas.jpg'),
    },
    {
      id: 3,
      title: 'UI Design',
      img: require('@/assets/images/sui.jpg'),
    },
    {
      id: 4,
      title: 'Kabul Mobile App UI',
      img: require('@/assets/images/mev.jpg'),
    },
  ],
};


onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader"/>

    <!-- Project gallery -->
    <!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo"/>

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject"/>
  </div>
</template>

<style scoped></style>
