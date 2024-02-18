<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/web5Component/Web5Header.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfo.vue';
import ProjectInfo2 from '../../components/web5Component/Web5ProjectInfo2.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '铭文网站 和 工具',
  singleProjectDate: 'Nov 3, 2023',
  singleProjectTag: 'insc / tools',
};
const projectImages = [

];

const projectInfo = {
  clientHeading: 'About Client',
  companyInfos: [

  ],
  objectivesHeading: '',
  objectivesDetails: '',
  technologies: [
    {

    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      header: "BRC 主要网站 / 工具",
      details: 'BRC20(BRC20/NFT) : https://unisat.io/brc20',
    },
    {
      id: 2,
      details: 'mempool(内存、交易查看)：https://mempool.space/zh/',
    },
    {
      id: 3,
      details: '价格排名查看：https://ordspace.org/brc20',
    },
    {
      id: 4,
      details: '其他的铸造网站：https://idclub.io/brc20  、 https://looksordinal.com/',
    },
    {
      id: 5,
      header: "BTC 生态钱包",
      details: 'UniSat Wallet -UNI 钱包，通用插件钱包',
    },
    {
      id: 6,
      details: 'OK 钱包 - 功能全面钱包，越来越多人用',
    },
    {
      id: 7,
      details: 'Sparrow Wallet - 麻雀钱包，功能强大，可免密',
    },
    {
      id: 8,
      details: '其他钱包：Ordinals Wallet、Hiro Wallet、Xverse（APP） 等 ',
    },
    {
      id: 9,
      header: "BTC 监控",
      details: '推荐使用 MCT BTC 监控（免费）：https://mct.xyz/inscribe/monitor',
    },
    {
      id: 10,
      header: "——————",
      details:'',
    },
    {
      id: 11,
      header: "ATOM 网站/工具/可看进度",
      details: '主要网站：https://www.satsx.io/ 、https://atomicalmarket.com/',
    },
    {
      id: 12,
      header: "ATOM 钱包",
      details: 'Atomicals Wallet（当前有 BUG 慎重）：https://atomicalswallet.com/ ',
    },
    {
      id: 13,
      header: "——————",
      details: '',
    },
    {
      id: 14,
      header: "PIPE",
      details: '网站 ：https://ppline.app 、https://inspip.com 、satsx.io ',
    },
    {
      id: 15,
      header: "PIPE 钱包",
      details: 'Xverse : https://www.xverse.app/',
    },
    {
      id: 16,
      header: "——————",
      details: '',
    },
    {
      id: 17,
      header: "ETHS",
      details: '网站：https://etch.market/ 、https://ethscriptions.com/',
    },
    {
      id: 18,
      details: '批量打 工具：https://www.nftsniper.club/',
    },
    {
      id: 19,
      header: "——————",
      details: '',
    },

    {
      id: 20,
      header: "Nostr Assets",
      details: '网站：https://mainnet.nostrassets.com/',
    },
    {
      id: 21,
      header: "Nostr 钱包",
      details: 'Alby - Bitcoin Lightning Wallet ：https://getalby.com/ ',
    },
  ],
  socialSharingsHeading: '',
  socialSharings: [

  ],
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
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
<!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

<!--    <ProjectInfo2 :projectInfo="projectInfo2" />-->

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
