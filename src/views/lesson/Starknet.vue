<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectGallery from '../../components/projects/ProjectGallery.vue';
import ProjectInfo from '../../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet  介绍与入门',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'Starknet / L2',
};
const projectImages = [
  {
    id: 1,
    title: 'What is Starknet',
    img: require('@/assets/images/stkeco.png'),
  },
  {
    id: 2,
    title: 'Why is Starknet',
    img: require('@/assets/images/starkzks.png'),
  },
  {
    id: 3,
    title: 'How is Starknet',
    img: require('@/assets/images/cairo.png'),
  },
];

const projectInfo = {
  clientHeading: '关键字',
  companyInfos: [
    { id: 1, title: 'StarkWare', details: 'Starknet 母公司' },
    { id: 2, title: 'Cairo', details: 'Starknet 的合约开发语言' },
    { id: 3, title: 'ETH L2', details: 'Straknet 是 ETH rollup L2中的一种' },
    { id: 4, title: 'ZK Starks', details: '更好的ZK' },
  ],
  objectivesHeading: 'Starknet vs Zksync',
  objectivesDetails: '抗量子攻击、不需要信用设置',
  technologies: [
    {
      title: '为什么选择 Cairo',
      techs: ['更好的性能', '机器配置要求低', '更好的生成证明'],
    },
  ],
  projectDetailsHeading: 'Starknet 是什么',
  projectDetails: [
    {
      id: 1,
      details: 'StarkNet 是一个无需许可的去中心化Validity-Rollup（也被称为「ZK-Rollup」）。 它作为Ethereum 上的Layer2 能够使任何Dapp 在计算方面实现无限的扩展并且无需牺牲Ethereum 的可组合性和安全性。.',
    },
    {
      id: 2,
      details: 'StarekNet 的母公司 StarkWare 成立于 2018 年，总部位于以色列，旗下所研发的主要产品有 Starknet 以及 StarkEx。其公司估值已经达到 80 亿美金。截至目前为止，StarkNet 已经经历五轮融资，共融资 2.73 亿美金。.',
    },
    {
      id: 3,
      details: 'Starknet 生态项目繁多，目前包含 100 多种 dapps 和服务。其中钱包类别有 Braavos 以及 Argent 两类钱包，但是这两者之间的助记词不互通。Defi 类协议现已部署了 60 多个，包括 10kswap，Jediswap，Myswap 等 DEX 以及 Zklend 等借贷协议；截至目前位置，由 Defilama 数据显示，StarkNet 总 TVL 仅有(17.36M, 虽然整体 TVL 呈现上升状态，但对比同类型的 zkSync Era 的)189.21M，仍存在近十倍的差距，由此可见，StarkNet 生态仍处于早期。',
    },
    // ... (Continue with the other details)
  ],
  socialSharingsHeading: 'Share This',
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
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in projectImages"
          :key="projectImage.id"
      >
        <img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            alt="{{ projectImage.title }}"
        />
      </div>
    </div>
    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped>
/* 例如，设置最大宽度为300px，最大高度为200px */
.grid img {
  //max-width: 300px;
  //max-height: 200px;
  width: 500px;
  height: 250px;
  display: block;
  margin: 0 auto; /* 如果您希望图片在其容器中居中显示 */
}



</style>
