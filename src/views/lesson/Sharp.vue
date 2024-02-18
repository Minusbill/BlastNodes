<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '证明器 - Sharp',
  singleProjectDate: 'Nov 1,  2023',
  singleProjectTag: 'Starknet \\ full chain on game',
};

const projectInfo = {
  clientHeading: 'Sharp 要点',
  companyInfos: [
    { id: 1, title: 'SHARD', details: '生成聚合 Cairo 程序的 STARK 证明，允许任何 APP 将交易提交到同一证明。' },
    { id: 2, title: 'Cairo 与 Sharp', details: 'Cairo 写的，SHARP 都可证明' },
    { id: 3, title: '递归证明', details: ' SHARP 使用递归证明，并行处理和验证多个 STARK 证明' },
    { id: 4, title: '节省 Gas', details: ' 能减少 30% gas 费用' },
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
      header: "什么是 SHARP",
      details: 'SHARP（SHARed Prover，共享证明器）是个强大的系统，设计用户生成聚合 Cairo 程序的 STARK 证明。Cairo 是种通用计算编程语言，可以在单个证明中容纳各种代码逻辑。SHARP 在链下处理一批交易，并在链上证明它们的计算证明，将所有交易的成本分摊到单个证明中。生成的统一 STARK 证明通过链上 Solidity 验证器合约进行验证，让 SHARP 能够提高吞吐量，降低 gas 费用，并最小化延迟。',
    },
    {
      id: 2,
      header: "SHARP",
      details: '尽管 SHARP 是为了 StarkWare 生态系统而生的，但它能够证明任何具备有效执行的 Cairo 程序。在节省时间和成本方面的效率，让 SHARP 成为任何需要创新证明方法的解决方案。'
      // img:
    },
    {
      id: 2,
      header: "递归 SHARP",
      details: '在递归证明中，SHARP 在每个声明到达时就对其进行证明，而不是先收集一批声明填满一个证明，然后才证明这批声明的处理过程。这是验证计算声明的高时间效率的方式，比计算本身要快得多。'
    },
    {
      id: 3,
      details: '这是通过并行处理传入的声明来实现的，可以绕过之前的可扩展性障碍，这些障碍要求在接收到所有单个声明后，才能证明组合的声明。现在，不仅 SHARP 可以证明数千个交易的正确性，而且还可以使用相应的 STARK 验证器验证多个 STARK 证明。这可以生成一个单一证明，证明多个上游证明的有效性。'
    },
    {
      id: 4,
      details: '递归实施后，SHARP 会立即证明传入的声明。这些证明本身可以被反复证明并合并成递归证明。这个递归证明过程实施到最后，最终的证明被提交给一个链上 Solidity 验证器合约。这就像一个嵌套模式：一个 Cairo 程序验证上游的证明，这反过来又产生了一个新的证明，STARK 验证器确认它们的有效性。'
    },
    {
      id: 5,
      img: require('@/assets/starknet/sharp.png'),
    },
    {
      id: 6,
      header: "下一步计划：动态布局",
      details: 'StarkWare 团队目前正在开发动态布局作为 SHARP 服务的定制。有了动态布局，证明器将计算每个特定逻辑所需的资源，并据此生成一个定制的证明。'
    },
    {
      id: 7,
      details: 'StarkWare 团队希望在下一个 SHARP 版本中引入这种适应性和效率方面的改进。动态布局的目标就是大幅降低 gas 费用。通过利用基于 STARK 的递归证明生成功能，这项技术将大大提高以太坊网络的可扩展性和效率。'
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
