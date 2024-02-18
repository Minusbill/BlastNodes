<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '一种简单的语言 - zig',
  singleProjectDate: 'Nov 1,  2023',
  singleProjectTag: 'Starknet \ zig',
};

const projectInfo = {
  clientHeading: '有了C++、D和Rust，为什么还需要Zig？\n',
  companyInfos: [
    { id: 1, title: '1', details: '没有隐式控制流' },
    { id: 2, title: '2', details: '没有隐式内存分配' },
    { id: 2, title: '3', details: '无标准库的一流支持' },
    { id: 2, title: '4', details: '为库设计的可移植语言' },
    { id: 2, title: '5', details: '为现有项目的构建系统和包管理器' },
    { id: 2, title: '6', details: '简单性' },
    { id: 2, title: '7', details: '工具性' },


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
      header: "什么是zig ",
      details: 'Zig是一种新兴的系统级编程语言，其设计目标是简单、安全和高效。 它的语法类似于C语言，但在类型安全和错误检测方面更加强大。 Zig适用于开发底层的软件，如操作系统、编译器和嵌入式系统。 ',
    },
    {
      id: 2,
      header: "为什么要学习 zig？\n",
      details: 'Cairo VM 最新使用了 zig 重写了。（https://twitter.com/StarkWareLtd/status/1718922309484925240）我们可以尝试学习了解这个简单的语言。'
    },
    {
      id: 3,
      header: "有了C++、D和Rust，为什么还需要Zig？\n",
      details: '没有隐式控制流、\n' +
          '没有隐式内存分配、\n' +
          '无标准库的一流支持、\n' +
          '为库设计的可移植语言、\n' +
          '为现有项目的构建系统和包管理器、\n' +
          '简单性、\n' +
          '工具性\n'
    },
    {
      id: 5,
      header: "学习 zig 的网址",
      details: 'https://ziglang.org/zh/learn/'
    },
    {
      id: 6,
      header: "zig Cairo VM github",
      details: 'https://github.com/keep-starknet-strange/cairo-zig'
    },

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
    <!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
