<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Backpack 交易所以及打新',
  singleProjectDate: 'Nov 15,  2023',
  singleProjectTag: ' Backpack / SOL ',
};

const projectInfo = {
  clientHeading: '  Backpack 交易所 ',
  companyInfos: [
    {id: 1, title: 'backpack 交易所地址', details: 'https://backpack.exchange/',link:'https://backpack.exchange/'},
    {id: 2, title: '打新攻略', details: 'https://mp.weixin.qq.com/s/H0ywFCtopBtITsZ6-fHNdA',link:'https://mp.weixin.qq.com/s/H0ywFCtopBtITsZ6-fHNdA'},
    {id: 3, title: '步骤', details: '1 、 KYC  2 、质押 SOL '},
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
      header: '根据《华尔街日报》报导，FTX 前法律顾问 Can Sun 将与 Web3 加密钱包 Backpack 团队建立新的加密货币交易所 Backpack Exchange，本次预计藉由 10% 股份对外募资，目标将藉由此次募资将估值冲上一亿美元。\n',
    },
    {
      id: 1,
      header: "Can Sun是谁",
      details: 'Can Sun是FTX的前法律顾问，以不起诉协议为条件，于FTX审判中作为关键证人，指证SBF与部分高管的罪刑，并表示自己不知道FTX背后财务状况与资金被挪用的情事，在得知财务漏洞的第二天就辞职了。',
    },
    {
      id: 2,
      header: "Backpack是什么",
      details: 'Backpack是一款Web3加密钱包，是由Solana开发者平台Carol所建构的专案。Backpack也是xNFT的开发平台。得迪拜虚拟资产监管局（VARA）的牌照后，将推出新的加密货币交易所。',
    },
    {
      id: 3,
      header: "Backpack Exchange",
      details: 'Backpack于上个月宣布建立新交易所Backpack Exchange。除了Sun之外，Backpack的创办人Armani Ferrante过去也曾经是Alameda Research的工程师，他表示其职业生涯因FTX的崩溃也受到打击。种种关系也让此交易所与FTX的关系看似更近了。',
    },
    {
      id: 4,
      details: '新交易所计划于2023年11月开始测试，并在2024年第一季度向公众开放。',
    },
    {
      id: 4,
      header: "怎么看 Backpack Exchange",
      details: '外界部分视他为下一个 FTX 。且由前 FTX 高管、工程师组成，且已在迪拜获得拍照。',
      img: require('@/assets/hot/backpacktw.png'),
    },
    {
      id: 4,
      header: "怎么参与？",
      details: ' 可根据策略进行打新。 KYC + 质押 solo 以获得资格。 链接：https://mp.weixin.qq.com/s/H0ywFCtopBtITsZ6-fHNdA ',
      img: require('@/assets/hot/backpl.png'),

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
