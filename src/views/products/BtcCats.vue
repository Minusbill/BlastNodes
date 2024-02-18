<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '  Nerd miner BTC 迷你抽奖机',
  singleProjectDate: 'Nov 12,  2023',
  singleProjectTag: 'BTC \ Miner',
};

const projectInfo = {
  clientHeading: ' 迷你抽奖机',
  companyInfos: [
    { id: 1, title: '联系推特', details: 'https://twitter.com/0xRiskPill',link:'https://twitter.com/0xRiskPill' },
    { id: 2, title: '微信', details: 'riskpill' },
    { id: 3, title: '特点', details: '挖矿 BTC 有几率爆 6.2 BTC' },
    { id: 4, title: '价格', details: '  200 元' },
    { id: 5, title: ' 产品特点', details: ' 可定制界面、价格、收款' },

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
      header: "什么是 BTC 迷你抽奖机",
      details: 'BTC 迷你抽奖机 是低门槛的 BTC 挖矿机，十分钟开一次奖，爆块就有6.25BTC。',
    },
    {
      id: 2,
      header: "产品的特点",
      details: '可定制开机画面、显示 BTC 价格等，是你牛市的必备神器（万一不小心挖到呢）',
      // img:
    },
    {
      id: 3,
      header: "价格",
      details: '仅售 30U （ 含定制界面，可送社区、朋友 , 二维码打赏 ）'
    },
    {
      id: 4,
      img: require('@/assets/products/web5btccat.png'),
    },
    {
      id: 5,
      img: require('@/assets/products/catcat.png'),
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

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
