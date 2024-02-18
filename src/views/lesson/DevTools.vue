<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 七款受欢迎的工具',
  singleProjectDate: 'Nov 6, 2023',
  singleProjectTag: ' Starknet / Dev Tools',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: '七款受欢迎的热门工具',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTGeSsFuS2nYX8WXlC7PhPjcb-mFmioa1LY0VaMhpmvMsQa0uf2iUEIjJcVg2BXkXorRHUde1og1QLk/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: 'Starkli', details: '快速命令行界面' },
    { id: 2, title: 'Starknet-devnet', details: ' 本地节点' },
    { id: 3, title: 'Katana', details: '速度极快的开发网络' },
    { id: 4, title: 'Scarb', details: '包管理器' },
    { id: 5, title: 'Starknet Foundry', details: '开发 Starknet 智能合约的工具链' },
    { id: 6, title: 'Hardhat', details: '测试 Cairo 代码的工具' },
    { id: 7, title: 'Starknet Remix Plugin', details: 'Remix 插件' },
  ],
  objectivesHeading: '插件收费吗',
  objectivesDetails: ' 都是免费',
  technologies: [
    {
      title: '是否可在 Remix 上开发 Cairo',
      techs: ['  可以'],
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
