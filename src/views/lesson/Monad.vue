<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Monad 介绍',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: ' ETH / Monad',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Monad 与以太坊的区别',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vScLjsaIy7omS8sozXD8FJ4_pGcZQAy5YxlFedqRmropVL-rW9YgnwXfCch5EVoiB7fMW0K2ceUioWb/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: ' TPS ', details: '以太坊 10，Monad 10,000' },
    { id: 2, title: '出块时间', details: '以太坊 12s , Monad 1s' },
    { id: 3, title: '最终性', details: '以太坊 2 epochs (12-18 min) ，Monad Single-slot (1s)。' },
    { id: 4, title: '共识机制', details: '以太坊 Gasper，Monad MonadBFT' },
    { id: 5, title: '允许委派', details: '以太坊 否，Monad 允许 ' },

  ],
  objectivesHeading: 'Monad 简介',
  objectivesDetails: 'Monad是高性能的EVM 兼容的 L1 公链',
  technologies: [
    {
      title: 'Monad 的四个主要领域',
      techs: [' MonadBFT', 'Deferred Execution', 'Parallel Execution', 'MonadDb'],
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
