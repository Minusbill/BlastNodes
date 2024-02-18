<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BTC 铭文详解',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: ' Ordi / BRC20',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'BRC 20 的特点',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vRKR2nOllMY0TEuH6-Rk6ajF3B8qtkpJPcRcp2d10LGAFIx2SNxWG74j4mgQd3Y-dBOFQgFzXlnAm5u/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '主要功能', details: 'brc-20 促进比特币区块链上可替代代币的创建、铸造和交易。' },
    { id: 2, title: '技术规格', details: '请参阅 Unisat 和 BestInSlot1' },
    { id: 3, title: '互操作性', details: 'brc-20 标准自然地与序数和铭文系统集成。' },
    { id: 4, title: '安全措施', details: '确认合适的gas（决定排序，关键）' },
    { id: 5, title: '付款', details: 'brc-20 代币继承了1 层经过验证的安全机制。' },

  ],
  objectivesHeading: 'brc-20 标准简介',
  objectivesDetails: ' brc-20 是一个实验性标准，它演示了您可以利用序数理论和铭文在比特币第 1 层上创建可替代代币。',
  technologies: [
    {
      title: 'BRC 20 的函数',
      techs: [' 部署、 Mint 、传输'],
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
