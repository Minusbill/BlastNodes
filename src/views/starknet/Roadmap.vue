<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoNormal.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 路线图已经代币模型',
  singleProjectDate: 'Nov 10, 2023',
  singleProjectTag: 'Starknet / Roadmap',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'Starknet 路线图大更新确定五大主要事项',
  pptUrl:"https://docs.google.com/presentation/d/e/2PACX-1vRtTS7bXdedVRqhvIpRKh0dBkc_YVi1g5WhoGxzjHbzQFfR2NSdj-ei3NLoVK_AU4gJCsQ9VlJDIbO7/embed?start=false&loop=false&delayms=3000",
  companyInfos: [
    { id: 1, title: '1 ', details: '网络稳定性改进' },
    { id: 2, title: '2', details: 'V3 交易' },
    { id: 3, title: '3', details: '交易费用市场' },
    { id: 4, title: '4', details: '使用 EIP-4844 降低 L1 费用\n' },
    { id: 5, title: '5', details: '通过 Volition 模式降低交易成本' },

  ],
  objectivesHeading: '有关 STRK 费用代币的 SNIP 10 提案',
  objectivesDetails: 'STRK 的主要目的之一是作为 Starknet 上的费用支付代币。不过，原有交易版本将继续保持 ETH 作为费用代币。',
  technologies: [
    {
      title: '',
      techs: [' '],
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
