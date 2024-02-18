<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/projects/DojoProjectInfo.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Dojo 全链引擎',
  singleProjectDate: 'Nov 1,  2023',
  singleProjectTag: 'Starknet / full chain on game',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
  {
    id: 2,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/web-project-2.jpg'),
  },
  {
    id: 3,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/mobile-project-2.jpg'),
  },
];

const projectInfo = {
  clientHeading: '关于全链游戏',
  companyInfos: [
    { id: 1, title: 'latticexyz', details: 'AW提出者、MUD 开发团队' },
    { id: 2, title: 'autonomous worlds', details: '自主世界——全链游戏的核心概念' },
    { id: 3, title: 'MUD', details: 'Lattice 开发的首个全链游戏引擎' },
    { id: 4, title: 'darkforest_eth', details: '第一个全链游戏' },
  ],
  objectivesHeading: '关于 Dojo',
  objectivesDetails: 'Dojo 是一个可证明游戏引擎。它是一个开源的、可扩展的、可证明的、全链的游戏引擎，它的目标是让开发者能够轻松地构建和部署全链游戏。',
  technologies: [
    {
      title: 'Dojo 的组成',
      techs: ['实体组件系统（ECS）', 'Torii - Starknet索引器', 'Katana - 如闪电般快速的开发网', 'Sozo CLI - CLI 管理工具'],
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
