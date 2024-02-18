<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BRC-420 蓝盒子到底是什么',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: ' Box / BRC420 ',
};

const projectInfo = {
  clientHeading: '  BRC-420 和 bitmap 相关 ',
  companyInfos: [
    {id: 1, title: 'BRC420 市场', details: 'https://brc420.io/',link:'https://brc420.io/'},
    {id: 2, title: 'bitmap 购买', details: 'https://magiceden.io/ordinals/marketplace/bitmap',link:'https://magiceden.io/ordinals/marketplace/bitmap'},
    {id: 3, title: 'Bitmap Explorer 浏览器', details: 'https://bitmap.rcsv.io/',link:'https://bitmap.rcsv.io/'},
    {id: 4, title: ' 什么是 420 协议', details: 'https://web5.ink/btc/brc420',link:'https://web5.ink/btc/brc420'},
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
      id: 3,
      header: "蓝盒子是什么",
      details: '蓝盒子是 BRC-420 项目方 RCSV 发行的首个 BRC-420 资产。',
      img: require('@/assets/hot/boxmind.png'),
    },
    {
      id: 2,
      header: "BRC-420 是什么",
      details: 'BRC-420 是BTC 上的一种资产管理协议，基于  ordinals 和 bitmap。',
    },
    {
      id: 1,
      header: "BRC-420 是 基于 Bitmap 的资产协议, 什么是 Bitmap",
      details: 'bitmap 是比特币生态首个元宇宙项目，基于 Oridnals 序数理论和 Bitmap 位图理论。与区块号对应。被定义为 BTC 的土地。',
      img: require('@/assets/hot/bbm.png'),
    },
    {
      id: 4,
      header: "RCSV 是什么",
      details: 'BRC-420 的项目方，当前基于 Bitmap 进行 BTC 元宇宙开发的团队。现在关系清晰了，蓝盒子是 BRC-420 项目方 RCSV 发行的 BRC-420 资产。',
      img: require('@/assets/hot/rcsvio.png'),

    },
    {
      id: 4,
      header: "怎么玩RCSV 的元宇宙游戏",
      details: '持有bitmap 即可。不一定要蓝盒子，目前只是说有蓝盒子 未来有更多的可能性。（或许是RCSV的估值映射）'
    },
    {
      id: 4,
      header: "BRC-420 与 BRC-20 的关系",
      details: ' BRC-420 会把有关的 Ordinal资产进行递归映射（铭文和 NFT）。'
    }, {
      id: 4,
      header: "为什么 蓝盒子现在这么值钱",
      details: '首先是 BRC-420 团队发行的首个协议资产。基于其概念，当前是协议的代表，未来有更多可能性（合作）。'
    }, {
      id: 4,
      header: "怎么更好的理解bitmap",
      details: '那就把他理解为 BTC 上的 Sandbox的土地（项目）吧。但同时，Bitmap也是是个协议，这个协议诞生了Bitmap资产，而BRC-420协议为了这个资产在RCSV设计的Bitmap浏览器中创建了一种共创世界的体验方式。 但Bitmap非仅如此，比如人们在https://bitlords.land 连上钱包，可读取的是Bitmap资产的歷史数据以及平面、3D地貌呈现。',
      img: require('@/assets/hot/bitmap.png'),
    },
    {
      id: 5,
      header: "BTC 的全链",
      details: '因为 bitmap 为基础，420 的出现，出现了更多的可能性和玩法。 RCSV 团队在积极推进。'
    },
    {
      id: 5,
      header: "基于 Bitmap，构建 BTC 的扩容方案",
      details: ' RCSV 实现的比特币网络扩容方案。',
      img: require('@/assets/hot/rcsv.png'),
    },
    {
      id: 6,
      header: " 我的看法（仅代表个人看法）",
      details: '当前这个概念不错，BTC 上的全链元宇宙项目。 Bitmap 也是不错的概念，但是数量比较大（现在八十多万）。总得来说，BRC-420 、 Bitmap、 BTC 元宇宙等等概念，都是新东西。但是现在涨幅不少。有兴趣的同学可以继续了解。'
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
