<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'PortalCoin是什么？如何埋伏新社交挖矿PortalCoin空投？\n',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'PortalCoin \ Airdrop',
};

const projectInfo = {
  clientHeading: ' 要点',
  companyInfos: [
    { id: 1, title: '原文出自', details: 'https://www.211coin.com/article/204719069.html' },
  ],
  objectivesHeading: '拥有超过130万条推文的PortalCoin是什么？\n',
  objectivesDetails: '据了解，Portal是一个支持各种链游的加密货币游戏平台，$PortalCoin透过整合跨链协议Layerzero，目标是成为一个跨链的游戏代币。\n' +
      '\n',
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
      details: '在社交媒体上透过贴文加标签吸引社群大量关注的方式屡见不鲜，例如在今年9月的@tipcoineth，就让用户标注@官方帐号赚取积分、配合空投代币预期，在短时间内病毒式的扩散至X，而近期又有一个项目“@PortalCoin”同样瞄准了这样的行销方式…\n' +
          '\n',
      img: require('@/assets/hot/portalAirdrop.png'),
    },
    {
      id: 2,
      header: "拥有超过130万条推文的PortalCoin是什么？",
      details: '据了解，Portal是一个支持各种链游的加密货币游戏平台，$PortalCoin透过整合跨链协议Layerzero，目标是成为一个跨链的游戏代币。',
    },
    {
      id: 3,
      details: '就团队自身说法，目前该项目已成功募集1.2亿美元资金，且团队成员过往多为3A级游戏公司的成员；当前已有100款游戏签约，预计能够为市场带来200万活跃用户。\n' +
          '\n '
    },
    {
      id: 4,
      details: '虽然目前公开的消息还不多，但值得一提的是，YugaLabs共同创办人GordonGoner.eth也在X上公开提到了Portalcoin，引起社群大量的关注。\n' +
          '\n '
    },
    {
      id: 5,
      details: '“我整天都超想在X上发文说‘我创造了PortalCoin’。现在发这条推文，就是为了不让这种念头继续骚扰我。继续加油，坚持下去，朋友们！”'
    },
    {
      id: 6,
      details: '不过要注意的是，该言论恐怕是GordonGoner.eth开玩笑的、又或者他在某种程度上有参与，但不是主导人，因为他也在底下响应社群，他目前没有想要营运其他项目的打算。\n' +
          '\n'
    },
    {
      id: 6,
      header: "如何参与空投计划？",
      details: 'PortalCoin的空投活动利用X作为主要平台，若想要参与活动的用户，实际上X的帐号需要满足两个特定条件：\n' +
          '\n'
    },
    {
      id: 6,
      details: 'Twitter帐号必须存在超过三个月\n' +
          '\n'
    },
    {
      id: 6,
      details: '拥有至少100名追随者。\n'
    },
    {
      id: 6,
      details: '用户需通过在推文中提及@Portalcoin来获得积分。这一机制激励了用户在Twitter上进行更多的互动，各种不同议题的文章中都会看到@Portal的身影，用户也想尽办法增加文章观看次数，增获得积分的机会。\n' +
          '\n'
    },
    {
      id: 6,
      details: 'PortalCoin官方称这一场活动叫作“水晶冲刺(Crystal Dash)”，将进行每周一次的积分累积比赛。在此活动中，用户的等级决定了他们拥有的水晶数量。每个水晶将转化为随机的空投，类似于开箱盲盒概念。\n' +
          '\n'
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
