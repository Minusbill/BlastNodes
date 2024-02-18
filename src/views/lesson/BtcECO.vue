<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'BTC 生态详细',
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
  clientHeading: ' BTC 生态简述',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTu7JYaCuf_dr2jbMbSaAH4V3Zx9nQYlUQkUI2DpLXyVvU-97h_PGDJ87Ur9N0QLdkH3o3WTYFmk5AE/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1', details: 'Ordinals & BRC20' },
    { id: 2, title: '2', details: ' Atomical & ARC20' },
    { id: 3, title: '3', details: 'Rune & Pipe' },
    { id: 4, title: '4', details: 'Lightning 闪电网络' },
    { id: 5, title: '5', details: 'Taproot Assets (Taro)' },
    { id: 5, title: '6', details: 'RGB' },
    { id: 5, title: '7', details: 'RSK & RIF' },
    { id: 5, title: '8', details: 'Stacks & SBTC & STX' },
    { id: 5, title: '9', details: 'Rollkit by Celestia\n' },
    { id: 5, title: '10', details: 'BitVM' },


  ],
  objectivesHeading: 'BTC 生态爆发的背景',
  objectivesDetails: '  BTC ETF 将通过、 BTC 减半将至',
  technologies: [
    {
      title: '',
      techs: [' '],
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
