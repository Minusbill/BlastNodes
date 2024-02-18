<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'Starknet的原生帐户抽象：为用户开启智能帐户\n',
  singleProjectDate: 'Nov 1,  2023',
  singleProjectTag: 'Starknet \\ Account Abstraction',
};

const projectInfo = {
  clientHeading: 'Starknet的原生帐户抽象：为用户开启智能帐户\n',
  companyInfos: [
    { id: 1, title: '原文', details: 'Native Account Abstraction: Opening Blockchain to New Possibilities\n' },
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
      header: "TL;DR\n ",
      details: '区块链通往主流市场的旅程有一大障碍：安全性和用户体验的局限性阻碍了更广泛的 Web 2 用户加入区块链。',
    },
    {
      id: 2,
      details: '有什么解决方案吗？那就是帐户抽象（Account Abstraction）。这是颠覆区块链格局的软件层，使帐户拥有灵活的设计和可调整的确定性行为。\n' +
          '\n'
    },
    {
      id: 3,
      details: '帐户抽象在以太坊和 Starknet 上均可用，但实现方式有所不同。Starknet 拥有原生帐户抽象，即所有的帐户都是智能帐户。而以太坊则是在不忽略 EOA 传统功能的情况下，通过 ERC-4337 添加帐户抽象。然而，EOA 持续繁荣的环境将大大削弱帐户抽象的优势，因为应用程序将不得不继续迎合 EOA。\n' +
          '\n'
    },
    {
      id: 5,
      header: "EOA 的壁垒\n",
      details: '外部帐户（EOA）是以太坊为创建链上用户代表而设立的简单解决方案。该方案让用户可以通过将 EOA 与帐户资产链接，从而与区块链进行交互并拥有资产。\n'
    },
    {
      id: 6,
      details: '尽管这是一种更简单的方式，但 EOA 的行为是由其部署的协议预先决定的，因此它们缺乏灵活性，无法根据用户的不同需求进行调整。这通常会导致用户体验不佳，并阻碍了大规模应用。协议已经预先定位了最大的问题，即 EOA 由一对私钥和公钥控制。必须使用一对密钥来启动交易会导致以下三个主要问题：'
    },
    {
      id: 7,
      details: '糟糕的用户体验 — 要求用户将私钥存放在一个安全、隐蔽的地方，这对于那些习惯使用更智能、更现代的方法（如六位数字密码或面容 ID）的人来说并不直观，从而使得发起交易变得更具挑战性。'
    },
    {
      id: 8,
      details: '只认准私钥 — 了解私钥的详细信息不仅是发起交易的唯一方法，而且也是协议识别帐户所有者的唯一方式。这样就会产生安全隐患 — —如果你的私钥被盗，帐户就无法区分你本人和盗取你私钥的人了。\n' +
          '\n'
    },
    {
      id: 9,
      details: '协议主宰一切 — 从上述例子可以清楚地看出，在 EOA 领域，决定交易有效性的是以太坊协议而非开发者。\n'
    },
    {
      id: 9,
      details: '将帐户行为确定为链协议的一部分所带来的复杂问题，在大多数链中都存在。\n' +
          '\n'
    },
    {
      id: 9,
      header: "打破壁垒：引入帐户抽象",
      details: '大多数链都存在这样的问题，即由协议决定帐户行为，而非用户。早在 2015 年，以太坊联合创始人 Vitalik Buterin 就讨论过这些挑战。他将帐户抽象描述为一种更简单的处理帐户的方法，即减少，甚至终结对私钥的依赖。更重要的是，帐户抽象创造了一系列其他的好处，使 Web3 的用户体验可以与 Web2 一样流畅，从而便于 Web3 的大规模应用。'
    },
    {
      id: 9,
      details: '多年来，出现了两种重要的帐户抽象方式，它们都有着相同的目标，那就是使开发者能够设计他们的应用程序，并创建一种更简单的帐户处理方式。'
    },
    {
      id: 10,
      header: "ERC-4337",
      details: '如前所述，EOA 是以太坊不可或缺的一部分，它们的行为由以太坊协议定义。除了 EOA 之外，以太坊还拥有合约，其中包含用户定义的代码。2023 年，以太坊推出了一项协议升级 — ERC-4337，目的是在不引入重大协议变更的情况下，弥合 EOA 和合约之间的结构差距。ERC-4337 的主要理念是引入一个新角色：Bundler。Bundler 的作用是收集用户操作（将它们视为在专门的内存池中收集的元交易），并通过他们自己的 EOA（由 Bundler 控制）将这些用户操作发送到以太坊。通过这种方式，Bundler 允许开发者和用户部署并交互帐户合约，从而获取帐户抽象的优势。'
    },
    {
      id: 11,
      details: '通过 ERC-4337 将帐户抽象引入以太坊，使开发者能够为合约创建更灵活的行为。然而，以太坊仍然会继续维护 EOA。对于开发者来说，这样做的后果是必须同时服务 EOA 和 ERC-4337。在 EOA 成本更低的生态系统中，可以预见 EOA 将继续占据主导地位，应用程序将无法在整个用户群体中收获帐户抽象的实际价值。'
    },
    {
      id: 12,
      details: '模拟或追随以太坊的 EVM 链（包括 zkEVM）也将经历类似的演变：EOA 将持续作为主导的帐户类型，这将削弱这些 EVM 链的本可享受的帐户抽象优势，并且使它们失去原本无需解决 EOA 遗留问题的优势。'
    },
    {
      id: 13,
      header: "Starknet 的原生帐户抽象",
      details: '相比之下，Starknet 将帐户抽象作为其核心，即所有的帐户都是智能帐户。Starknet 没有 EOA，而是直接跃入每个帐户都是智能帐户的世界。所有的基础设施，包括钱包和区块浏览器，都是为帐户抽象而设计并构建的。这在所有 L1 和 L2 链中都是独一无二的，这使 Starknet 成为第一个智能生态系统：建设者们可以在知道帐户抽象适用于所有帐户的情况下构建自己的应用程序和工具，而无需为非帐户抽象的帐户工作并提供服务。建设者们可以设计他们的应用程序，从帐户抽象所提供的各种机会中受益，因为他们知道智能帐户是用户与应用程序交互的唯一方式。'
    },
    {
      id: 14,
      details: 'Starknet 上的原生帐户抽象消除了因引入 Bundler（如 ERC-4337 所做的那样）所带来的额外复杂性。无需调整基础设施和工具来与 Bundler 进行交互，而是通过指定排序器来履行 Bundler 的角色，从而简化这个流程。\n' +
          '\n'
    },
    {
      id: 15,
      header: "帐户抽象的三大支柱\n",
      details: '帐户抽象主要包括三个组成部分，分别是签名抽象、费用抽象和 Nonce 抽象。每个部分都有其独特的作用，来提升整体用户体验。'
    },
    {
      id: 15,
      header: "签名抽象\n",
      details: '签名抽象设计交易流程，让定义有效交易的权力掌握在架构师，即帐户设计者手中，无论这个人是开发者还是用户。这样做的主要好处在于可以自定义帐户权限，并使得使用智能手机控制帐户成为可能。\n' +
          '\n'
    },
    {
      id: 15,
      header: "费用抽象\n",
      details: '费用抽象允许使用不同的代币来支付交易费用，而不局限于网络原生代币。例如，用户可以直接使用 USDC 支付交易费，而无需先将 USDC 兑换成本地代币，从而节省了兑换费用和时间。\n' +
          '\n'
    },
    {
      id: 15,
      header: "Nonce 抽象\n",
      details: 'Nonce 抽象确保了用户的舒适性和便利性。传统的顺序 nonce 解决方案存在一些用户体验缺陷。例如，由于需要强制执行完整排序，就会限制用户同时发送多个独立交易。Nonce 抽象通过允许自定义帐户的重放保护机制来提供所需的灵活性。\n' +
          '\n'
    },
    {
      id: 15,
      details: '诸如 Starknet 这样的 Rollup，可以被视为区块链操作系统。当设计一个新的操作系统时，如果无需接手之前操作系统遗留的问题挑战，事情通常会进行得非常顺利。这就好比，建造一栋新房子往往比翻新一栋旧房子更简单。在设计新房子时，应该在蓝图阶段就考虑将重要的基础设施，如电线、管道和供暖系统等融入其中。在建造新房时，仅仅对已知的未来所需的标准进行调整和变通是没有意义的。同样的原则也适用于帐户抽象。Starknet 的设计是着眼于未来，我们相信它将成为构建应用程序的标准方式。Starknet 以帐户抽象作为默认选项，事实上也是唯一的选项，从而提供了我们期望在未来拥有的流畅的、高效的且用户友好的体验。'
    },
    {
      id: 15,
      details: '从实施帐户抽象带来的功能来看，有两个显而易见的好处：一是用户可以享受更好的用户体验，二是开发者不需要被 EOA 的遗留问题所困扰。'
    },
    {
      id: 15,
      header: "Starknet 建设中的帐户抽象",
      details: '正如软件的发明彻底改变了现金经济，Starknet 的智能生态系统同样已经为未来发展提供了肥沃的土壤。最初，软件实现了数字化记录并简化了流程，现在它已经发展成为成了一套更广泛的系统，用于管理交易、跟踪财务以及自动化财务流程。同样，Starknet 的智能生态系统赋予了开发者与各种应用以及提供商进行流畅交互的能力。这不仅增强了用户体验，使其更丰富、更有活力，还促进了协作和创新环境，为开发提供了持续增长的沃土。'
    },
    {
      id: 15,
      details: '以下几个应用取得的进步充分证明了在 Starknet 原生智能帐户上使用签名抽象的优势：\n' +
          '\n'
    },
    {
      id: 15,
      header: "Braavos",
      details: 'Braavos 团队使用 Starknet 原生智能帐户创建了一款智能钱包，这种钱包能够提供类似 Web 2 的体验，让您可以使用手机的生物识别功能来访问你的钱包。这是一件令人兴奋的事情！大多数区块链所使用的加密技术与移动设备使用的加密技术存在差异，这通常会导致极高的签名验证成本。而未来，在保持高级别的安全性前提下，使用手机签署交易也许会成为可能。\n' +
          '\n',
      img: require('@/assets/starknet/braavos.png'),
    },
    {
      id: 15,
      header: "Argent",
      details: '通过使用签名抽象，ArgentX 的监护服务 Argent-Shield 带来了另一项创新。这项服务通过让 Argent 充当监护人，让用户为自己的帐户增加了一层保护。只有通过邮件确认的交易才会被 Argent 批准。这是我们熟悉的另一种双因素身份验证机制，通常应用于许多非区块链应用程序中。\n' +
          '\n',
      img: require('@/assets/starknet/argent.png'),
    },
    {
      id: 15,
      header: "Visa",
      details: 'STARK 证明的发明是为了解决以太坊的可扩展性挑战，旨在达到与 Visa 相同的每秒交易量（ TPS）处理能力。因此，Visa 决定在 Starknet 上探索其备受关注的「自托管钱包的自动支付」项目，这是一个重要的里程碑。这证明了 Visa 对我们先进技术和创新智能生态系统的认可。\n' +
          '\n',
      img: require('@/assets/starknet/visa.png'),
    },
    {
      id: 15,
      header: "结论\n",
      details: 'Starknet 的生态系统正日益壮大，越来越多的开发者利用 Starknet 的原生帐户抽象以最灵活的方式设计他们的应用程序。与其他供应商进行集成的可能性、为用户提供更加精细化和个性化体验的能力，这些都展现了数字经济的无尽潜力。\n' +
          '\n',
    },
    {
      id: 16,
      details: '开发者无需再应付陈旧的技术，相反，可以在面向未来需求而设计的环境中，从头开始构建应用程序。\n' +
          '\n',
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
