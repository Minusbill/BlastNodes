<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/projects/TactProjectInfo.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Ton 开发语言 Tact 讲解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'ton / tact',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
  // {
  //   id: 2,
  //   title: 'Kabul Project Management UI',
  //   img: require('@/assets/images/web-project-2.jpg'),
  // },
  // {
  //   id: 3,
  //   title: 'Kabul Project Management UI',
  //   img: require('@/assets/images/mobile-project-2.jpg'),
  // },
];

const projectInfo = {
  clientHeading: 'Ton 开发语言 Tact 介绍',
  companyInfos: [
    { id: 1, title: '安装', details: 'Scarb' },
    { id: 2, title: '初体验', details: ' Hello World ' },
    { id: 3, title: '基础概念', details: '变量、数据' },
    { id: 4, title: '函数', details: '函数的定义、注释' },
    { id: 5, title: '数组', details: '数组与字典' },

  ],
  objectivesHeading: '控制流',
  objectivesDetails: '了解控制流、循环 更好的编写逻辑.',
  technologies: [
    {
      title: 'Starknet 智能合约 & 深入理解',
      techs: ['存储变量', '合约函数', '事件', '减少冗余', '优化存储'],
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
