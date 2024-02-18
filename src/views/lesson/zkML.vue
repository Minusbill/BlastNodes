<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '零知识证明机器学习 - zkML',
  singleProjectDate: 'Nov 1,  2023',
  singleProjectTag: 'Starknet \ zkML',
};

const projectInfo = {
  clientHeading: 'Sharp 要点',
  companyInfos: [
    { id: 1, title: '原本', details: 'https://foresightnews.pro/article/detail/35284' },
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
      header: "零知识机器学习（zkML） : 在人工智能时代，隐私与科技并存\n",
      details: '在这个科技发达的时代，ChatGPT 和 Midjourney 等生成式人工智能的问世，为设计与艺术、软件开发、出版甚至金融等领域开启了全新的可能性。生成式人工智能犹如一场奇迹，它向我们承诺突破人类创造力的边界，极大地提升了我们的生产力，引领我们踏上更高层次的创新之路。\n' +
          '\n',
    },
    {
      id: 2,
      details: '为了将 ChatGPT 和 Midjourney 等软件发展到今天的水平，需要经过多年的研究和大量数据的训练，才能培养出这些软件背后的人工智能模型。以 ChatGPT 为例，它需要用来自网页、图书和其他来源的约 570GB 数据集进行训练。其中的一部分数据可能来自于用户，而这些用户可能完全不知道他们的个人数据被用于训练人工智能软件。尽管大部分收集和使用的数据对用户本身可能是无害的，但一些敏感或私人数据不可避免地可能混入其中，并被馈送给模型，而用户并没有给予同意。'
      // img:
    },
    {
      id: 2,
      details: '鉴于这样的系统引发了隐私问题，人们对数据隐私和安全问题的意识和重视不断增长。有人呼吁在利用人工智能的优势和保护个人隐私权之间寻找一种和谐的平衡点。幸运的是，有一项有希望的技术可以帮助弥合这一鸿沟——零知识证明（ZKP）。'
    },
    {
      id: 3,
      header: "什么是 zkML？\n",
      details: '零知识协议是一种方法，通过这种方法，一方（证明者）可以向另一方（验证者）证明某个命题为真，而除了这个特定命题为真的事实外，不会透露任何其他信息。自 2022 年以来，零知识（ZK）技术稳步发展，并在区块链领域取得了显著增长。ZK 领域内的项目一直在不断努力并在可扩展性和隐私保护领域取得了重大进展。\n' +
          '\n'
    },
    {
      id: 4,
      details: '机器学习是人工智能的一个分支，专注于开发能够从过去的数据中学习、识别模式并做出逻辑决策的系统，减少对人类的重要参与。它是一种数据分析技术，通过利用各种类型的数字信息，如数值数据、文本内容、用户交互和视觉数据，自动创建分析模型。'
    },
    {
      id: 5,
      details: '在监督式机器学习中，我们向预先训练并具备预设参数的模型提供输入，而模型则产生可供其他系统使用的输出。然而，我们必须强调维护输入数据和模型参数的机密性和隐私的重要性。输入数据可能包含着敏感的个人财务或生物特征信息，而模型参数中可能涉及机密的生物特征认证参数等敏感元素。\n' +
          '\n' +
          '将零知识技术与人工智能相融合，便催生了零知识机器学习（zkML），一项伦理性强且威力巨大的新技术，有望彻底颠覆我们的工作方式。'
    },
    {
      id: 6,
      details: 'Modulus Labs 团队最近发表的名为 《 The Cost of Intelligence 》 的论文中，他们通过使用各种规模不同的模型集合，对各种现有的零知识证明系统进行了全面的基准测试。目前，在链上机器学习领域，ZK 的主要应用是验证准确的计算。然而，随着时间和发展的进一步，尤其是简洁非交互式知识论证（SNARKs），ZKP 有望发展到一种程度，能够通过阻止输入的披露，确保用户的隐私免受过于好奇的验证者的侵犯。\n' +
          '\n' +
          'zkML 本质上是将 ZK 技术融入 AI 软件中，以克服其在隐私保护、数据真实性验证等方面的局限性。\n' +
          '\n'
    },
    {
      id: 7,
      header: "zkML 的用例\n",
      details: '尽管 zkML 仍然是一项新兴技术，但已经引起了广泛关注，同时也具备许多令人瞩目的应用场景。其中一些显著的 zkML 应用包括：\n' +
          '\n'
    },
    {
      id: 7,
      details: '计算完整性（有效性 ML）\n' +
          '有效性证明如 SNARKs 和 STARKs 具有验证计算正确性的能力，通过验证模型推断或确认特定输入导致特定模型输出的能力，可以将这种能力扩展到机器学习任务中。证明输出是特定模型和输入组合的结果的便捷性有助于在专用硬件上进行离链部署机器学习模型，同时便利地在链上验证 ZKPs。例如，Giza 正在协助 Yearn，这是一个去中心化金融（DeFi）收益聚合器协议，在链上展示利用机器学习执行复杂收益策略的准确性。'
    },
    {
      id: 7,
      details: '欺诈检测\n' +
          '通过利用智能合约数据，可以训练异常检测模型，并随后由 DAO（去中心化自治组织）认可为自动化安全程序的有价值指标。这种主动和预防性的方法使得可以自动执行操作，例如在识别潜在的恶意活动时暂停合约，从而增强其效果。'
    },
    {
      id: 7,
      details: 'ML 作为服务（MLaaS）中的透明度\n' +
          '在多个公司通过其 API 提供机器学习模型的情况下，由于 API 的不透明性，用户很难确定服务提供商是否确实提供所声称的模型。在机器学习模型 API 旁提供有效性证明将为用户提供透明度，使他们能够验证他们正在使用的具体模型。'
    },
    {
      id: 7,
      details: 'Web3 社交媒体中的过滤\n' +
          'Web3 社交应用的去中心化特性预计会导致垃圾邮件和恶意内容的增加。社交媒体平台的理想方法是利用一个开源的机器学习模型，该模型是社区共同商定的。此外，该平台可以在选择过滤帖子时提供模型推断的证明。Daniel Kang 对推特算法使用 zkML 进行的分析进一步深入探讨了这个话题。'
    },
    {
      id: 7,
      details: '保护隐私\n' +
          '医疗行业优先考虑患者数据的隐私和机密性。通过利用 zkML，医学研究人员和机构能够利用加密的患者数据开发模型，确保个人记录的保护。这样可以进行协作分析，无需共享敏感信息，从而促进疾病诊断、治疗效果和公共卫生研究的进展。'
    },
    {
      id: 8,
      header: "探索 zkML 的项目概览",
      details: 'zkML 的许多应用正在实验阶段，经常在创新的新项目的黑客松中出现。zkML 为设计智能合约开辟了新的途径，目前有几个正在积极探索其应用的项目。\n' +
          '\n',
      img: require('@/assets/starknet/zkml.png'),
    },
    {
      id: 9,
      details: 'Modulus Labs：通过使用 zkML 进行实际应用和相关研究。他们通过项目如 RockyBot（链上交易机器人）和 Leela vs. the World（一个国际象棋游戏，整个人类群体与经过验证的链上版本的 Leela 国际象棋引擎竞争）的示范，展示了 zkML 的应用。'
    },
    {
      id: 10,
      details: 'Giza：由 Starkware 支持的协议，以完全无需信任的方式实现了在链上部署人工智能模型的能力。\n'
    },
    {
      id: 11,
      details: 'Worldcoin：一种利用 zkML 的人格证明协议。Worldcoin 利用定制硬件处理详细的虹膜扫描，并将其纳入其 Semaphore 实施中。这些虹膜扫描实现了重要的功能，如会员证明和投票。\n'
    },
    {
      id: 12,
      header: "结论\n",
      details: '就像 ChatGPT 和 Midjourney 经历了无数次迭代才达到今天的状态一样，zkML 仍在不断改进和优化中，经历了一次又一次的迭代来克服从技术到实际方面的各种挑战：\n' +
          '\n' +
          '最小化精度损失的量化处理、\n' +
          '管理电路大小，特别是在多层网络中、\n' +
          '高效的矩阵乘法证明、\n' +
          '应对对抗性攻击。\n' +
          '在 zkML 领域，进展正在以加快的速度进行，有望在不久的将来达到与更广泛的机器学习领域相媲美的水平，特别是随着硬件加速技术的不断发展。',
    },
    {
      id: 13,
      details: '将 ZKPs 纳入人工智能系统可以为用户和利用这些系统的组织提供更高级别的安全和隐私保护。因此，我们热切期待在 zkML 领域的进一步产品创新，其中 ZKPs 和区块链技术的结合为 Web3 无权限世界中的人工智能 / 机器学习操作创造了安全可靠的环境。\n' +
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
