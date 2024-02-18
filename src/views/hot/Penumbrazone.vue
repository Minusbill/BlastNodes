<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: ' Penumbrazone 授信仪式 极简版',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'Penumbrazone ',
};

const projectInfo = {
  clientHeading: ' 作者',
  companyInfos: [
    { id: 1, title: '原文出自', details: 'https://twitter.com/zerah_eth/status/1722561236733444104' },
    { id: 2, title: '作者', details: 'https://twitter.com/zerah_eth' },
    { id: 3, title: '官方原文', details: 'https://penumbra.zone/blog/summoning-ceremony-launch/' },

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
      header: "什么是 Penumbra 召唤仪式",
      details: 'Penumbra 是一个隐私跨链网络，允许任何人安全地进行交易、质押、交易或做市，而无需向世界广播他们的个人信息。',
    },
    {
      id: 2,
      header: "仪式是什么 （ 其实不需要知道，现在的人 是为了埋伏 空投）",
      details: '为 Groth16 证明系统生成证明密钥需要随机抽样。这种随机性应该被删除，因为用于生成证明密钥的随机性的知识可能允许伪造证明。' +
          '在开发过程中，Penumbra 测试网使用了由一个人执行的可信设置。在准备主网时，希望执行去中心化设置，允许社区中的每个人都为参数生成做出贡献。通过参加召唤仪式，Penumbra 用户可以确保证明密钥是安全生成的。',
    },
    {
      id: 3,
      header: "极简版的特点",
      details: '通用版本需要安装 一堆东西； 极简版本，只需下载一个脚本'
    },
    {
      id: 4,
      header: "开始了 - 下载脚本",
      details: 'wget https://gist.githubusercontent.com/qzz0518/0aba5749ff3c96450f872cd52b006e71/raw/d88ff44aa79e928ea5f3e8c52035d5a4f579cf19/penumbra.sh'
    },
    {
      id: 5,
      header: "给于脚本执行的权限",
      details: ' chmod +x penumbra.sh'
    },
    {
      id: 6,
      header: "管理员模式 运行脚本",
      details: 'sudo ./penumbra.sh'
    },
    {
      id: 7,
      details: '启动脚本后按照提示执行即可'
    },
    {
      id: 7,
      img: require('@/assets/hot/penu.png'),
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
