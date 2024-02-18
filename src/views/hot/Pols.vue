<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Pols',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: ' Matic / Pols ',
};

const projectInfo = {
  clientHeading: ' Pols 工具 ',
  companyInfos: [
    {id: 1, title: '官网', details: 'https://evm.ink',link:'https://evm.ink'},
    {id: 2, title: '批量打神器', details: 'https://github.com/Fooyao/evmink',link:'https://github.com/Fooyao/evmink'},
  ],
  objectivesHeading: '',
  objectivesDetails: '',
  technologies: [
    {
      title: '',
      techs: [],
    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      header: "pols 是什么",
      details: '马蹄 matic 改名 pols',
    },
    {
      id: 2,
      header: "怎么打",
       link: 'https://evm.ink/tokens?chainId=eip155%3A137',
    },
    {
      id: 3,
      header: "索引",
      details: '目前evm.lnk官方索引延迟非常多，可以用这个查询，注意，这个也是延迟的，并不是实时的，你现在打的需要过一会儿才能看到\n' +
          '',
      link: 'https://dune.com/sleeeeep/pols',
    },
    {
      id: 4,
      header: "批量打神器",
      details: '可以使用 Fooyao 的工具',
       link: 'https://github.com/Fooyao/evmink',

    },
  ],
  socialSharingsHeading: '',
  socialSharings: [],
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
    <ProjectHeader :singleProjectHeader="singleProjectHeader"/>

    <!-- Project gallery -->
    <!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo"/>

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject"/>
  </div>
</template>

<style scoped></style>
