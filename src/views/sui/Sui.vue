<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Sui 项目研究',
  singleProjectDate: 'Nov 10, 2023',
  singleProjectTag: 'Sui',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Sui 项目研究',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQq0mPjl2Qhun7flx9stLFJXjQbszgbKHGUE-Ax14q_mzq-YVgprRI3NIzZlzCmRe8x30Cd8qZJ00uw/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1 ', details: '项目简介' },
    { id: 2, title: '2', details: '项目愿景' },
    { id: 3, title: '3', details: '特色和优势' },
    { id: 4, title: '4', details: '发展历史' },
    { id: 5, title: '5', details: '团队背景' },
    { id: 6, title: '6', details: '融资信息' },
    { id: 7, title: '7', details: '发展成果' },
    { id: 8, title: '8', details: '经济模型' },
  ],
  objectivesHeading: 'Sui 是什么',
  objectivesDetails: 'Sui 是一种无需许可、基于 PoS 的第 1 层区块链，旨在提供即时结算和高吞吐量，并为众多下一代延迟敏感的去中心化应用程序提供支持。',
  technologies: [
    {
      title: '',
      techs: [' '],
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
