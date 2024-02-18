<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '  Facet Cards 是什么',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'eths \ Facet Cards',
};

const projectInfo = {
  clientHeading: ' 要点',
  companyInfos: [
    { id: 1, title: '原文出自', details: 'https://x.com/dumbnamenumbers/' },
    { id: 2, title: 'fac.et name 地址', details: 'https://fac.et/name' },
    { id: 3, title: '抢购地址', details: ' https://facet.cards' },
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
      header: "什么是 Facet Cards",
      details: 'Facet 卡是您在  Eths Facet 协议上的通行证。这是您的用户名、个人资料和成就记录，全部集于一身。',
    },
    {
      id: 2,
      header: "抢购时间",
      details: '北京时间 - 11 月 10 日 21:00',
      // img:
    },
    {
      id: 3,
      header: "价格",
      details: '1 个字符 (0-9) ： 25,000 美元/年 '
    },
    {
      id: 4,
      details: '1 个字符 (a-z) ： 10,000 美元/年 '
    },
    {
      id: 5,
      details: '2 个字符：1,000 美元/年； 3 个字符：500 美元/年； 4 个字符：100 美元/年 ; 5 个或更多角色： 10 美元/年'
    },
    {
      id: 6,
      header: "长话短说 - 纯属个人看法",
      details: ' 他想做一个对标 ENS 的东西。基于当前市场情绪，会有不少人买单。开放交易的话大概率会有炒作效应。 炒作的话 1 位 数字和 1 -2 位字符会比较值钱，,3 -4 位 成功率高，更高性价比。'
    },
    {
      id: 7,
      img: require('@/assets/hot/faectcard.png'),
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
