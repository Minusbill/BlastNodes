<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Taproot Assets协议 详解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: '  Lighting Network / Taproot',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: ' Taproot Assets协议要点',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vRBj3XSUdXZiAoOW85v5QlEzzxRu50hF432ipqA6ClVTK5bPaMxG5sRtkDRkjCkeLhErCc0sq1Zjr7x/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: 'Taproot协议', details: 'Taproot Assets是一个基于 Taproot 的新协议，它允许在比特币链上发行资产。' },
    { id: 2, title: '闪电网络', details: ' Taproot Assets 通过现有的闪电网络进行转移。 ' },
    { id: 3, title: '两次升级', details: '2017年的隔离见证（SegWit）升级和2021 年的Taproot升级' },
    { id: 4, title: 'Taproot 出现', details: '解决了这些安全问题，允许删除旧的 SegWit 限制，这为大块的NFT数据在链上存储铺平道路。' },
  ],
  objectivesHeading: '闪电网络 是什么',
  objectivesDetails: ' 闪电网络是建立在比特币之上的可扩展性解决方案，它允许用户快速发送和接收比特币，且几乎不收取任何费用。',
  technologies: [
    {
      title: 'Taproot Assets的核心功能点',
      techs: [' 资产发行和赎回','异步接收功能','多重Universe模式','发行稳定币'],
    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem...',
    },
    // ... (Continue with the other details)
  ],
  socialSharingsHeading: '分享学习课程',
  socialSharings: [
    { id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/billjian24' },
    { id: 2, name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/billjian24' },
    { id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
    { id: 4, name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
    { id: 5, name: 'Youtube', icon: 'youtube', url: 'https://www.youtube.com/c/billjian24' },
  ],
};

const relatedProject = {
  relatedProjectsHeading: '最近的项目',
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
