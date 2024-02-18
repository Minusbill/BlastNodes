<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 开源的证明器Stone 讲解',
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
  clientHeading: 'Stone 使用步骤',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTs1OdAtLvXHE35J7zEDPZ3XlCam4ahBYtdfQXhH0ssEiUg-cZdVODeM78Rs37CMepAkqf9qMFFoymq/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '编写', details: '编写 Cairo 程序' },
    { id: 2, title: '编译', details: ' 编译成 CASM' },
    { id: 3, title: '运行', details: '使用 cairo_run 运行 CASM' },
    { id: 4, title: '证明', details: '使用 Stone STARK Prover 证明' },
    { id: 5, title: '收到证明 ', details: '收到 STARK 证明' },
    { id: 6, title: '证明', details: '使用 C++ Verifier 确保证明有效' },
  ],
  objectivesHeading: '什么是 Stone',
  objectivesDetails: ' 它负责压缩交易和生成加密证明',
  technologies: [
    {
      title: '开源 Stone 的好处',
      techs: [' 更多的协作、更好的质量、更高的安全性、创新和独立性'],
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
