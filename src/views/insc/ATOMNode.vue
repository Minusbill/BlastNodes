<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: ' ATOM 节点 武装强化',
  singleProjectDate: 'Nov 10,  2023',
  singleProjectTag: 'Atom / CLI  ',
};

const projectInfo = {
  clientHeading: '  Dmint ',
  companyInfos: [
    { id: 1, title: '推特@0xFatDog', details: 'https://twitter.com/0xFatDog/',link:'https://twitter.com/0xFatDog/' },
    { id: 2, title: 'Next Dao 节点教程', details: 'https://github.com/Next-DAO/atomicals-electrumx-docke'
    ,link:'https://github.com/Next-DAO/atomicals-electrumx-docke'},
],
  objectivesHeading: 'ATOM 节点的选择',
  objectivesDetails: ' 1 、默认官方 2 、切换第三方 3 、自建节点',
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
      header: "RPC 节点是什么？",
      details: '当我们需要获取一些链上或者索引数据时，需要通过向某个网络地址发送请求，这个地址就是节点。大部分情况下我们用的是官方节点，但当同时使用的人数过多的时候，可能会造成官方节点瘫痪，大家都没得用了。这个时候就需要一些第三方节点。',
    },
    {
      id: 2,
      header: "目前已知的3个节点分别是：",
      details: '1.由\n' +
          '@atomicalsxyz\n' +
          ' 官方提供的https://ep.atomicals.xyz'
    },
    {
      id: 3,
      details: '2.由\n' +
          '@atomicalsmarket\n' +
          ' 提供的 https://ep.atomicalmarket.com'
    },
    {
      id: 4,
      details: '3.由 \n' +
          '@theNextDAO\n' +
          ' 提供的 https://ep.nextdao.xyz'
    },
    {
      id: 4,
      header: "—————— 自建节点 ——————",
      details: '使用Next Dao 教程 https://github.com/Next-DAO/atomicals-electrumx-docker#atomicals-electrumx-docker'
    }, {
      id: 4,
      header: "1. 更新您的比特币全节点 RPC 设置，如果已设置，请跳过。",
      details: ' 将其添加到您的 bitcoin.conf 中，然后重新启动您的比特币完整节点。需等待节点重新索引。',
      img: require('@/assets/btc/atomrpc.png'),

    }, {
      id: 4,
      details: '或者 手工生成 rpcauth 使用 ：https://github.com/bitcoin/bitcoin/blob/master/share/rpcauth/rpcauth.py '
    },
    {
      id: 5,
      header: "2. 克隆此存储库并运行服务器",
      details: 'git clone https://github.com/lucky2077/atomicals-electrumx-docker.git ',
    },
    {
      id: 5,
      details: '创建一个 .env 文件，内容如下： DAEMON_URL=electrumx:electrumx@192.168.50.2:8332 // 你的局域网 IP'

    },
    {
      id: 6,
      details: '然后运行 ​​ElectrumX 服务器：docker-compose pull && docker-compose up -d '
    },
    {
      id: 7,
      header: "如对教程疑问 或者 详情，请看官方链接",
      details: 'https://github.com/Next-DAO/atomicals-electrumx-docker',
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
