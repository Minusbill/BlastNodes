<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Atommap 简易教程 网页挖矿',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: '  atom / atommap',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Atommap 简易教程 ',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vRezvN_1YKxtiAEnSipxcuwz6zn5TpQ08-t-eRSw5BgShw7Rucd-eJ87iEXRLWLHAqv4akyJm4E2IOz/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '钱包', details: '下载钱包' },
    { id: 2, title: '安装', details: ' chrome 插件安装' },
    { id: 3, title: '创建钱包', details: '密码、助记词' },
    { id: 4, title: 'Atommap文件', details: ' github 下载' },
    { id: 5, title: '索引检查', details: '检查是否被打完' },
    { id: 6, title: '代打配置', details: '网页代打信息输入' },
    { id: 6, title: '预览、支付', details: '预览确认 支付 gas' },
  ],
  objectivesHeading: '网页 和 cli 的区别大吗',
  objectivesDetails: ' 有区别 ，但是网页简单，自己体会',
  technologies: [
    {
      title: '是否值得打',
      techs: [' 当前还在炒作期 还有炒作的空间'],
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
