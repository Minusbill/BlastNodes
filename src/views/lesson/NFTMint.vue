<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'NFT 批量 Mint 赚快钱教程',
  singleProjectDate: 'Nov 6, 2023',
  singleProjectTag: ' NFT / Mint',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'NFT 批量 Mint 赚钱教程',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vSRy7mU56dg4YgTeqwR42gShbfSlzPwpiUCJFVZO2P-JUxY375mfY9N07YrZMM5Kw-TIe5ADlK91kxj/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '盯盘', details: '看链上 Mint 动态' },
    { id: 2, title: ' Alpha消息', details: ' 观察 NFT 群/推特/DC 等' },
    { id: 3, title: '批量 Mint 工具', details: '使用 NFT Sniper' },
    { id: 4, title: ' 价格跟踪', details: '常用 NFTFLIP' },
    { id: 5, title: ' 出货', details: '工具批量挂单 或者 Blur 等' },

  ],
  objectivesHeading: '哪里可以看到好的 NFT 消息',
  objectivesDetails: ' 关注 @DBZ_CLUB',
  technologies: [
    {
      title: '其他地方是否可以出货',
      techs: [' 当然可以，如 opensea','blur','x2y2'],
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
