<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 与全链游戏',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'starknet / cairo',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Starknet 上的热门游戏',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQkPFiwt6xmLNBuDfenloJgh7hMCfMf3cXI6dOTYnMUza8XUSosXA6CcBI91Z1CzepDjCLeY5520fi7/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: 'Cartridge', details: 'Starknet 上的 Steam' },
    { id: 2, title: 'Realms', details: '以Loot 为 IP的生态系统' },
    { id: 3, title: 'Roll Your Own', details: '犯罪类游戏' },
    { id: 4, title: 'Influence', details: '策略 MMO 游戏' },
    { id: 5, title: 'Starkland', details: '全链SLG 游戏' },

  ],
  objectivesHeading: 'Realms的两款游戏',
  objectivesDetails: 'Loot Survivor 和 Realms:Eternum',
  technologies: [
    {
      title: '为什么看好 Starknet 全链游戏',
      techs: ['符合 L2 特性 ', '创意和有趣', 'Dojo，和 MUD 一样强大'],
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
