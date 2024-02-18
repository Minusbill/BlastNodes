<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '深度解析 Stacks',
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
  clientHeading: ' 智能合约的 Stacks 层具有以下创新',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQQQIb-q-V5hLLerkVrsMmlLVJ_H1Ol1-2d5d3LDhuH7kU_e-yOIIKlBsCeX3pR7xUNofEVqF3t8GgP/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: 'S – Secured', details: '由比特币的全部算力保障。' },
    { id: 2, title: 'T – Trustless', details: ' 无信任的比特币挂钩机制；写入比特币。' },
    { id: 3, title: 'A – Atomic', details: '原子 BTC 互换和 BTC 地址拥有的资产。' },
    { id: 4, title: 'C – Clarity', details: '用于安全、可判定合约的清晰语言。' },
    { id: 5, title: 'K – Knowledge', details: '了解完整的比特币状态。' },
    { id: 6, title: 'S – Scalable', details: '可扩展、快速的交易，以比特币结算。' },

  ],
  objectivesHeading: '比特币 和 Stacks 的关系',
  objectivesDetails: 'Stacks 层的数千笔交易会在比特币 L1 上进行结算，Stacks 微块提供流交易的快速确认。比特币被用作结算层，并且中本聪版本（SIP-21）提议在两个比特币区块之间进行快速交易。',
  technologies: [
    {
      title: '比特币的 Stacks 层通过两种方式使 BTC 变得高效',
      techs: [' 实现了一种信任最小化的比特币挂钩机制（sBTC）','通过原子交换'],
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
