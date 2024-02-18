<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Namada 三次权益证明',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'proof / Namada',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: '塑造多链隐私',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vSwYitxvN0StBdURxC3ICqBQUhIU-XtZDC3_GCPJwa61mfHfUWMvLIVsCcGGxflDlmIXZpTRrTFXjH0/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1 ', details: '划时代的权益证明' },
    { id: 2, title: '2', details: '立方削减' },
    { id: 3, title: '3', details: '通货膨胀和奖励' },
    { id: 4, title: '4', details: '奖励分配' },
    { id: 5, title: '5', details: '使用奖励产品有几个好处' },
  ],
  objectivesHeading: '立方权益证明',
  objectivesDetails: '本文介绍了 Namada 的立方权益证明及其部署的关键改进，包括划时代的质押、立方削减和自动复利奖励。',
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
