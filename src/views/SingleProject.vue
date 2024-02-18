<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Project Management UI',
  singleProjectDate: 'Jul 26, 2021',
  singleProjectTag: 'UI / Frontend',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
  {
    id: 2,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/web-project-2.jpg'),
  },
  {
    id: 3,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/mobile-project-2.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'About Client',
  companyInfos: [
    { id: 1, title: 'Name', details: 'Company Ltd' },
    { id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
    { id: 3, title: 'Website', details: 'https://company.com' },
    { id: 4, title: 'Phone', details: '555 8888 888' },
  ],
  objectivesHeading: 'Objective',
  objectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  technologies: [
    {
      title: 'Tools & Technologies',
      techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
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
  socialSharingsHeading: '',
  socialSharings: [

  ],
};

const relatedProject = {
  relatedProjectsHeading: 'Related Projects',
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
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
