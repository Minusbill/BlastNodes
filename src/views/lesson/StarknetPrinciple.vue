<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/web5Component/Web5Header.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfo.vue';
import ProjectInfo2 from '../../components/web5Component/Web5ProjectInfo2.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet 工作原理',
  singleProjectDate: 'Jul 26, 2021',
  singleProjectTag: 'zk / zk-STARKs',
};
const projectImages = [
  {
    id: 1,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/ui-project-1.jpg'),
  },
  {
    id: 2,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/web-project-2.jpg'),
  },
  {
    id: 3,
    title: 'Kabul Project Management UI',
    img: require('@/assets/images/mobile-project-2.jpg'),
  },
];

const projectInfo = {
  clientHeading: 'About Client',
  companyInfos: [
    { id: 1, title: 'Name', details: 'Company Ltd' },
    { id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
    { id: 3, title: 'Website', details: 'https://company.com' },
    { id: 4, title: 'Phone', details: '555 8888 888' },
  ],
  objectivesHeading: 'Objective',
  objectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  technologies: [
    {
      title: 'Tools & Technologies',
      techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      header: "什么是 Zk-Proofs",
      details: 'Zk-proofs 即 Zero-Knowledge Proofs 的缩写，中文称为零知识证明。零知识证明是一种方法，通过这种方法，一方可以向另一方证明给定的陈述是真实的，除了该陈述是真实的事实之外，无需透露任何其他信息。',
    },
    {
      id: 2,
      header: "ZK-STARK 是什么",
      details: 'ZK-STARKs 是一个证明系统——两种算法之间的交互过程中允许区块链更加容易地验证计算的完整性，Verifier 和 Approver 双方可以通过交互来验证大量交易的完整性。',
    },
    {
      id: 3,
      header: "ZK-Rollup VS OP-Rollup",
      details: 'OP-rollup 和 ZK-rollup 相比，ZK-rollup 则是一种比 OP-rollup 更加安全的替代方案，而 OP-rollup 则是具有 EVM 兼容性的 DeFi 项目的更好选择。由此可见，具备 EVM 兼容性的 ZK-rollup 以其天然的安全性的优势将会是 Layer2 的未来的叙事发展方向。安全性的实现这一优势要归功于 StarkNet 对最安全、最可扩展的密码学证明系统 — — STARK 的依赖。',
    },
    {
      id: 4,
      header: "Zk-STARKs VS Zk-SNARKs",
      details: '选择使用 SNARKs 还是 STARKs 取决于具体的应用场景和需求。SNARKs 在证明大小和验证速度上有优势，但需要信任设置。而 STARKs 不需要信任设置，对量子计算机攻击有抵抗力，但证明较大，验证速度较慢。 zk-STARKs 却是一种不需要信任设置的零知识证明系统。与需要信任设置的系统（如 zk-SNARKs）不同，zk-STARKs 的证明生成和验证过程不依赖于任何秘密信息。这提供了更高的透明性和安全性，因为系统的安全性不依赖于任何特定个体或组织的行为。zk-STARKs 是通过使用一种被称为「FRI」（Fast Reed-Solomon Interactive Oracle Proofs）的技术实现的。',
    },
    {
      id: 5,
      header: "FRI 协议",
      details: 'FRI 协议的基本思想是通过一系列的抽样和插值步骤，逐步降低多项式的度。在每一步，证明者都会提供一个新的多项式，并声称它是原始多项式的一个压缩版本。验证者可以通过检查这些多项式在随机点上的值，来验证这个声称是否正确。',
    },
  ],
  socialSharingsHeading: '',
  socialSharings: [

  ],
};


const projectInfo2 = {
  clientHeading: 'About Client',
  companyInfos: [

  ],
  objectivesHeading: 'Objective',
  objectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  technologies: [
    {
      title: 'Tools & Technologies',
      techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
    },
  ],
  projectDetailsHeading: 'Starknet 工作原理',
  projectDetails: [
    {
      id: 1,
      details: '1. 用户发起交易，并将交易发送给 Squencer 进行验证、排序和执行，并打包批次。目前 StarkNet 系统中只有一个 StarkWare 官方掌握的 Sequencer，但 StarkWare 团队计划后续将 Squencer 去中心化；Squencer 通过 Cairo OS 来执行交易，扮演了 EVM 的角色。',
    },
    {
      id: 2,
      details: '2. Squencer 将执行交易的踪迹递交给 Prover，由 Prover 对计算完整性生成一个有效性证明。执行踪迹是生成 zkp 的核心，记录执行踪迹是 Cairo 语言的 zk 友好特性；这里的 Prover 也为 StarkEx 生成有效性证明，且可以聚合来自不同 StarkEx 应用和 StarkNet 的交易，实现共享。',
    },
    {
      id: 3,
      details: '3. Squencer 和 Prover 将有效性证明和全局状态变化发送给全节点进行记录。全节点基于 P2P 网络构建，负责记录整个 Layer2 网络的交易历史和以太坊主网上与 Layer2 相关的交易。',
    },
    {
      id: 4,
      details: '4. Prover 将有效性证明递交给主网上的 Verifier。Verifier 是部署在以太坊主网上的智能合约，负责收取并验证 Prover 提供的有效性证明。',
    },
    {
      id: 5,
      details: '5. Verifier 将验证过的结果发送至主网上的 StarkNet Core 合约进行记录和保存。StarkNet Core 合约部署在以太坊主网上，用于接收 Layer2 全局状态变化信息，包括状态哈希以及数据可用性；经过 Verifier 验证过的结果是一串状态哈希，由 Verifier 写入一笔新的 Layer1 交易，并传递给 Core 合约进行保存。',
    },
    {
      id: 6,
      details: '6. StarkNet Core 合约接收到验证结果（状态哈希）后，从 Layer2 接收「Call data」形式的数据可用性并保存。该数据会同步给 Layer2 的全节点进行解码，以保证全节点能够记录和重建 Layer2 的历史交易；在 Validium 方案中，StarkNet Core 合约不保存数据可用性，仅保存状态哈希。',
    },
  ],
}
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

    <ProjectInfo2 :projectInfo="projectInfo2" />

    <div class="centered-container">
      <img class="centered-image" src="@/assets/images/starketwork.png">
    </div>
    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
