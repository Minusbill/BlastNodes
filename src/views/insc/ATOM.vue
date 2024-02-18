<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: ' ATOM 终端安装教程( 使用 挖矿和 Dmint )',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'Atom / CLI  ',
};

const projectInfo = {
  clientHeading: '  Dmint ',
  companyInfos: [
    { id: 1, title: '原文出自', details: 'https://mirror.xyz/etherdog.eth/' },
    { id: 2, title: 'ATOM Github', details: 'https://github.com/atomicals/atomicals-js' },
],
  objectivesHeading: 'ATOM 安装步骤',
  objectivesDetails: '安装 Node 、 Git 、克隆项目、安装、生成钱包、充钱',
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
      header: "1、安装 nodejs点击下载后 安装 nodejs",
      details: 'https://nodejs.org/en 打开网页后下载 18.18 版本，按照提示进行安装即可',
    },
    {
      id: 2,
      img: require('@/assets/btc/node.png'),
    },
    {
      id: 3,
      header: "2、安装 git",
      details: '选择适合自己的版本下载安装 https://git-scm.com/downloads'
    },
    {
      id: 4,
      header: "3、克隆项目",
      details: 'mkdir atomicals && cd atomicals  // 创建工作目录 '
    },
    {
      id: 4,
      details: 'git clone git@github.com:atomicals/atomicals-js.git  // 克隆项目， 如果已有，使用git pull 拉最新版'
    },
    {
      id: 4,
      details: 'cd atomicals-js && npm install // 安装依赖'
    },
    {
      id: 4,
      details: 'npm run build // 构建'
    },
    {
      id: 4,
      details: 'npm install -g yarn // 安装 yarn'
    },
    {
      id: 5,
      header: "命令行输入 yarn cli wallet-init 创建钱包",
      details: '注意保存钱包信息，在当前目录下会生成 wallet.json 钱包信息，注意保存好 wallet.json 钱包文件',
      img: require('@/assets/btc/atomWallet.png'),
    },
    {
      id: 5,
      header: "输入命令运行挖矿 ",
      details: ' yarn cli mint-dft atom // atom 为要挖的币，假如dimt 替换 '

    },
    {
      id: 6,
      header: "向钱包地址发送适量的BTC开始挖矿 // Dmint 同理 也需要进行充值",
      img: require('@/assets/btc/atommint.png'),
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
