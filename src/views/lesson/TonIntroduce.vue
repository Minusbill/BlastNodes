<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectGallery from '../../components/projects/ProjectGallery.vue';
import ProjectInfo from '../../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Ton  介绍与入门',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'Ton / telegram',
};
const projectImages = [
  {
    id: 1,
    title: 'What is Starknet',
    img: require('@/assets/ton/telegram.png'),
  },
  {
    id: 2,
    title: 'Why is Starknet',
    img: require('@/assets/ton/tgbot.png'),
  },
  {
    id: 3,
    title: 'How is Starknet',
    img: require('@/assets/ton/miniapp.png'),
  },
];

const projectInfo = {
  clientHeading: '关键字',
  companyInfos: [
    { id: 1, title: 'TON', details: '全名 The Open Network' },
    { id: 2, title: ' TG 用户数', details: ' 8 亿' },
    { id: 3, title: 'Ton 目标用户数', details: '2028年 5 亿' },
    { id: 4, title: '特色程序', details: ' TG Bot 、小程序' },
  ],
  objectivesHeading: '开发语言',
  objectivesDetails: ' fift、 Func、 Tact',
  technologies: [
    {
      title: 'Ton 优势',
      techs: ['无限分片', '高 TPS', 'AA 钱包'],
    },
  ],
  projectDetailsHeading: 'Ton 是什么',
  projectDetails: [
    {
      id: 1,
      details: 'TON是 Telegram messenger 团队于 2018 年开发的 layer 1 区块链解决方案，TON token 是该链的原生 token，主要用于支付交易费用，并作为验证器的保证金确保网络安全。TON 是独一无二的，因为它是为数不多的混合使用 PoW 和 PoS 共识机制的加密 token 之一， 2020 年 5 月，该团队同意与 SEC 监管机构达成和解，并支付 1850 万美元的罚款，该项目停止开发，险些覆灭。',
    },
    {
      id: 2,
      details: '为了让该项目在 Telegram 上存活下去，Telegram 团队将该网络中所有可用的 token 放入智能合约中，任何人都可以在同等条件下挖矿，TON 的 IDO 是机缘巧合之下促成的，现被标记为 IPoW-Initial Proof of Work，目前该链已经完全转变为 PoS，且非常活跃，是 2022 年熊市期间表现最好的 token 之一。',
    },
    {
      id: 3,
      details: 'TON 的进步几经波折，在2023年，TON 推出了 DeFi 流动性勉励计划，举办了Hack-a-TON 黑客松，旨在吸引全球顶尖开发者为 TON 生态注入新鲜血液，一同探索 DeFi、NFT 等前沿技术范围。而今，其正在成为一个迅速进步、充满活力的生态系统。',
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
