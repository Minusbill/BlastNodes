<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BRC 100 详解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: ' BTC / BRC100',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'BRC 100 的特点',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQON1v35ye3tYIyoRDQAY-NjWZSqFFNQfq_2zQfyZJCJDOvyHs1z_f1l6_O0KHekKyCAOWebL0xnnCy/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '主要功能', details: '除了在比特币区块链上继承自brc-20的创建、铸造和交易之外，BRC-100还引入了可替代代币的去中心化计算。' },
    { id: 2, title: '技术规格', details: '阅读文档规范' },
    { id: 3, title: '互操作性', details: 'BRC-100 标准中有两种互操作性。第一个是BRC-100协议栈，第二个是使用桥接、存储或包装与 BTC、其他比特币标准' },
    { id: 4, title: '安全措施', details: 'BRC-100支持UTXO模型和状态机模型。' },
  ],
  objectivesHeading: 'brc-100 简介',
  objectivesDetails: ' BRC-100是一种基于序数理论的可扩展的去中心化计算协议，专为直接在比特币Layer 1上的去中心化应用程序设计，例如DeFi、SocialFi、GameFi等。',
  technologies: [
    {
      title: 'BRC 100 与 20',
      techs: [' BRC-100协议由于是对brc-20的扩展，因此具有brc-20的所有优点'],
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
