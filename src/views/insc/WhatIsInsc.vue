<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '什么是铭文',
  singleProjectDate: 'Nov 3, 2023',
  singleProjectTag: 'Ordinals / BRC20',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: '当前热门的铭文',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTexbchS4d4VlAQ5chzdpEgrfEx8km0SzpdKIhZNAdV0qHULNIJffMxDLvPNTYvK9E1BWepOjYJcz6Z/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: ' BRC 20', details: ' 比特币、基于首个 Ordinals 协议' },
    { id: 2, title: 'Atom ', details: '原子协议' },
    { id: 3, title: 'Pipe', details: 'Trac 创始人、基于 Runes' },
    { id: 4, title: 'ETHS', details: '以太坊铭文' },
    { id: 5, title: 'Nostr', details: '（前推特创始人）发行闪电网络资产' },

  ],
  objectivesHeading: '比特币铭文 与 Ordinals协议的关系',
  objectivesDetails: 'BRC20 是基于 Ordinals 协议的第一个铭文协议',
  technologies: [
    {
      title: '风险与收益',
      techs: ['低成本铸造有几率获高倍收益', '但是也会一文不值'],
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
