<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BRC 420 详解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: ' BTC / BRC420',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'BRC 420 的特点',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vR1RCy46qufohkFFwnpAkqfCWuuFWH9KyuzLAnml6XGY4T1wBIzgy8XDsphN-iY_9B5LTSdV5XLqrgD/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '主要功能', details: '在元宇宙中启用复杂的、递归的数字资产格式，将使用权与版税联系起来，使创作者受益。' },
    { id: 2, title: '技术规格', details: '支持各种递归资产格式（2D、3D），与区块链集成以实现自动版税转移。' },
    { id: 3, title: '互操作性', details: '促进游戏平台和引擎的广泛采用，增强不同数字生态系统的实用性。' },
    { id: 4, title: '安全措施', details: '确认合适的gas（决定排序，关键）' },
    { id: 5, title: '付款', details: '实现不可变的资产部署和透明的、区块链记录的交易，以保护创建者和用户的权利。' },

  ],
  objectivesHeading: 'brc-420 简介',
  objectivesDetails: ' BRC-4​​20 协议引入了一种元宇宙中的数字资产管理方法',
  technologies: [
    {
      title: 'BRC 420 的角色',
      techs: [' 所有者、 部署者/版税接收者 、铸币者'],
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
