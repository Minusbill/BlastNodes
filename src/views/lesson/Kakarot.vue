<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 上的 EMV - Kakarot',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'starknet / sequence',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Starknet 上的 EVM -  Kakarot',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vR5Y1kp7JyPmovRB73U04S55MXD1Yj7toSIfAjsX3Rspm0KaTQJfy4z4X-c4E4Jh05lbJ9mGo1dO3cg/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1', details: 'Kakarot 是一组 Cairo 程序' },
    { id: 2, title: '2', details: 'Kakarot 可以：(a) 执行任意 EVM 字节码，(b) 按原样部署 EVM 智能合约，(c) 调用 Kakarot 部署的 EVM 智能合约的函数（视图和写入方法）。' },
    { id: 3, title: '3', details: 'Kakarot 是一个 EVM 实现。' },
    { id: 4, title: '4', details: 'Kakarot 本身并不是区块链。它仍然需要一条运行要部署的 CairoVM 的链。' },
    { id: 5, title: '5', details: 'Kakarot 不是编译器。' },


  ],
  objectivesHeading: '一句话概括 kakarot',
  objectivesDetails: 'Kakarot 建立在虚拟机 （VM） CairoVM 之上，是 Starknet 的基础架构。',
  technologies: [
    {
      title: ' Kakarot 依赖的多个部件',
      techs: [' Madara', ' DA 解决方案', '以太坊的路线图：The Verge '],
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
