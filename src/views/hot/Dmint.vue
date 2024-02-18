<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: ' ATOM 的 Dmint 是什么',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'Atom / Dmint ',
};

const projectInfo = {
  clientHeading: '  Dmint ',
  companyInfos: [
    { id: 1, title: '原文出自', details: 'https://github.com/atomicals/atomicals-js/',
    link:'https://github.com/atomicals/atomicals-js/blob/master/container-dmint-guide.md#step-0-claim-container'},
    { id: 2, title: 'ATOM Github', details: 'https://github.com/atomicals/atomicals-js',link:'https://github.com/atomicals/atomicals-js'},
    { id: 3, title: ' 什么是dmint', details: 'atom 发行 NFT 的方式' },

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
      header: "什么是 Dmint",
      details: 'Dmint (Decentralized Mint ) 即去中心化铸币，是一种允许用户将图像放在链上以在集合中认领 NFT 的方式。 NFT 集合的创建者定义了铸币高度、规则和必须匹配的特定图像文件哈希，以便声明容器集合中的项目之一。',
    },
    {
      id: 2,
      details: '你可以理解为，是 ATOM 提供的一种给项目方部署 NFT，用户 使用工程cli 进行 Mint 的交互方式。',
    },
    {
      id: 3,
      header: "普通用户角度，只需要关心：什么时候、要打的内容",
      details: '什么时候 Mint 、 Mint 的信息（项目名称、要打的内容 + 文件） 即可'
    },
    {
      id: 4,
      header: "用户命令 - 使用就能打 - （ 官方 Github 尚未更新可用版）",
      details: 'yarn cli mint-dmitem #mycoolcontainername "0000" "file1.png"'
    },
    {
      id: 4,
      details: '#mycoolcontainername - 容器名字 （ 理解为项目名字）'
    }, {
      id: 4,
      details: '"0000" - 要打的NFT 名字'
    }, {
      id: 4,
      details: '"file1.png" - 打的时候的文件 - Hash 值和项目方设置时候一样'
    },
    {
      id: 5,
      header: "———————————— ",
    },
    {
      id: 5,
      header: "项目方视角：如何部署 /  0 -认领 容器 -用 mycoolcontainername 代表容器名 ",
      details: ' yarn cli mint-container mycoolcontainername --satsbyte=10'
    },
    {
      id: 6,
      header: "1 - 准备 NFT 图像文件 - 生成 哈希 等",
      details: 'yarn cli prepare-dmint-manifest ./nftimages chunks'
    },
    {
      id: 7,
      header: "2 -  将每个项目块（item chunk) 上传到容器",
      details: 'yarn cli prepare-dmint-items mycoolcontainername ./chunks0.json --satsbyte=10'
    },
    {
      id: 8,
      header: "3 -  启动dmint 并设置 mint 高度",
      details: 'yarn cli prepare-dmint-config mycoolcontainername 812000'
    },
    {
      id: 9,
      header: "4 -   验证容器是否已 dmint 就绪 - 问题都解决且状态为 ready",
      details: 'yarn cli state #mycoolcontainername'
    },
    {
      id: 10,
      header: "5 -   密封容器",
      details: 'yarn cli seal #mycoolcontainername'
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
