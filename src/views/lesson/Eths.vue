<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'ETHS 铭文详解/批量打',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'eths / abot',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'ETHS ABOT 批量打',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQCSruxPx0KabygLjuZozOwC3eizaGXBoX40B4B2FvjTGdMST3c4NaPBEjLqeM9KNSAzlMVmYq1OHnx/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '进入 ABOT ', details: 'https://www.nftsniper.club/' },
    { id: 2, title: '选中铭文', details: '点击 in-progress' },
    { id: 3, title: '输入', details: '输入 目标区间 数量 模式' },
    { id: 4, title: '发射', details: '发射发射发射发射发射发射发射' },
    { id: 5, title: '成功', details: '赚钱赚钱赚钱赚钱赚钱赚钱赚钱' },

  ],
  objectivesHeading: '如何使用 ABOT',
  objectivesDetails: '  联系阿历克斯',
  technologies: [
    {
      title: '关于交易',
      techs: [' 主要是用 ETCH 等市场'],
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
