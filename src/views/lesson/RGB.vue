<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'RGB 协议详解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: '  染色 /  RGB',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: ' RBG 的特点',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQTulax5UNyQNTcJ6zyp7VJjVb1uxp-aXV10S6C1VGEXBJJzaTXAOkZ7XW2kvONRrxoriuq7pjAFbwE/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1', details: '高保密性、安全性、可扩展性' },
    { id: 2, title: '2', details: '没有比特币时间链的拥堵' },
    { id: 3, title: '3', details: '未来可升级而无需硬分叉' },
    { id: 3, title: '4', details: '具有较比特币更高的抗审查性' },
    { id: 3, title: '5', details: '没有区块和链的概念' },


  ],
  objectivesHeading: '什么是 RGB',
  objectivesDetails: 'RGB 是由 LNP/BP 标准协会开发的可扩展且保密的比特币和闪电网络智能合约系统。',
  technologies: [
    {
      title: '什么是 RGB v0.10 ',
      techs: [' RGB v0.10 版本标志着一次重大突破，将 RGB 推进到了即将投入商用的系统阶段。'],
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
