<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '当我们说/打 EVM 铭文， 他到底是什么',
  singleProjectDate: 'Nov 19,  2023',
  singleProjectTag: '  EVM / Insc ',
};

const projectInfo = {
  clientHeading: '   铭文工具 ',
  companyInfos: [
    {id: 1, title: 'MCT 批量打、监控', details: 'https://mct.xyz/',link:'https://mct.xyz/'},
    {id: 2, title: 'ABOT 批量打、监控', details: 'https://www.nftsniper.club/',link:'https://www.nftsniper.club/'},
    {id: 3, title: 'ARC 批量打', details: 'https://whop.com/all-in-raffle-club/',link:'https://whop.com/all-in-raffle-club/'},

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
      header: "那些我们说/打的 EVM 铭文 是什么",
      details: ' 简单介绍下现在打的所谓 EVM 铭文 和 非 EVM 铭文',
    },
    {
      id: 2,
      header: "以太坊铭文是什么",
      details: '以太坊铭文协议火和比特币上的Ordinals 协议类似，允许人们在以太坊主网上刻入不同类型的文件，只要大小不超过96KB即可。准确来说，该协议就是在一笔交易上备注信息（16进制字符），然后记录到区块中。',
    },
    {
      id: 3,
      header: "以太坊铭文和比特币铭文的关系",
      details: 'BRC 20 火了后，开发者获得了灵感，在其他公链/L2 上刻录数据，定义为 XX 链铭文。',
    },
    {
      id: 4,
      header: '以太坊铭文格式',
      details: '根据dune用户@sixdegree 创建的 Ethscriptions 查询工具我们可以看到，eths代币的“规则”是在6月17日被一个用户所确定，他在以太坊主网上写入了一串字符串：',
    },
    {
      id: 4,
      details: 'data:，{"p":"erc-20"，"op":"deploy"，"tick":"eths"，"max":"21000 "，"lim":"1000"}',
    },
    {
      id: 4,
      header: 'EVM 铭文的结构',
      details: 'Input Data 记录数据是 Hex 十六进制，在浏览器上需要 转为 UTF-8 格式。',
      link: 'https://etherscan.io/tx/0x6734241aa845c102d062acf85a2e080189264a565468b6afa9bb8823c86414ed',
      img: require('@/assets/hot/ethsinsc.png'),
    },
    {
      id: 4,
      header: "EVM 和铭文的关系 ",
      details: '铭文的物理逻辑是往交易的inputdata 上刻录数据。参考与比特币概念相关，即往可以刻录的地方记录数据。逐渐演变多种样式。',
    },
    {
      id: 4,
      header: "铭文的衍生",
      details: '除铭文外，衍生了 NFT 、域名。不过多数是低价值，即意义不大（炒作）。'
    },
    {
      id: 3,
      header: "什么是 EVM ",
      details: 'EVM：是Ethereum Virtual Machine 以太坊虚拟机的简称，EVM 之于以太坊，就像CPU 之于计算机。 EVM 允许在区块链上验证和执行代码，为代码在每台设备上以相同方式运行提供保障。',
    },
    {
      id: 3,
      header: "什么是 EVM 兼容链 ",
      details: 'EVM 兼容链提供了一个类似 EVM 的代码执行环境，便于以太坊开发者将智能合约迁移至兼容链，而不必为其再从头开始编写智能合约的代码。\n' +
          '\n' +
          '主流的 EVM 兼容链有 BSC、Polygon、HECO 等。',
    },
    {
      id: 4,
      header: "有哪些EVM 和非 EVM 公链",
      details: '较为知名的 EVM 链有 Ethereum、Bsc、Arbitrum、Polygon、Avalanche 等，非 EVM 则有着 Solana、Mixin、DefiChain、Osmosis、EOS 等。同理还有相关的 L2.',
    },
    {
      id: 5,
      img: require('@/assets/hot/L2.png'),
    },
    {
      id: 5,
      header: "怎么更好的理解所谓铭文",
      details: '原则上是今年火热的一个概念，本质就是在交易里记录数据。同时依赖一定的规则和索引。早期是参考比特币的原则，即First is Frist ，在包装数据准确性的前提下。',
    },
    {
      id: 5,
      header: "什么是索引，他们常说的索引是什么么",
      details:
          '就是一套规则，告诉你这是有效的 ，还是无效的。需要简单的后台逻辑 指引。',
    },
    {
      id: 6,
      header: " 索引有标准吗",
      details: '从最初的 First is First ，发展到今天，衍变了各种奇怪的规则（要求），即 From / to ？ 一区块中含有多少个，当然是部署的人定义的。'
    },
    {
      id: 6,
      header: " 怎么看待当前标准、索引千奇八怪的存在",
      details:
          ' 因为区块链是去中心化的，有时候铭文都是无名项目方部署。但是怎么定义为有效，这个争执（吵架）很有意思。最经典就是 Faect 大小写之争。有人说，新铭文的核心是吵架。'
    },
    {
      id: 6,
      header: " 怎么看待铭文的概念",
      details:
    '也算是新的概念和范式。在原来以太坊大力发展 L2 、扩容、 DA 等所谓正规路子之外，衍生了新的野路子。是否基于inpudata 这类记录数据去发展以太坊当前更多是概念，毕竟很多铭文部署开发者是不知名，或者铭文部署没技术难度，即定义格式+规则，即可，接盘需谨慎。'
    },
    {
      id: 6,
      header: "铭文的优点",
      details:'新的范式、新的故事、新的概念，即新的机会，对于机会来说，小成本有机会获得高收益。'
    },
    {
      id: 6,
      header: "铭文的缺点",
      details: '目前是概念，还需要证伪。未来一地鸡毛可能性很大。更多是场外话术的诱导，而非实际落地。不过这也是 Crypto 的特色。 Meme 属性为主。'
    },
    {
      id: 6,
      header: "怎么看待 合约、非自转 和自转",
      details:
          '这个问题，客观上看，最初的铭文范式是，inputdata 有数据即可，First is First。他们没区别，但是很多时候 是否有人定义规则，有待考究。应该客观分析，按规则办事。如果不是官方定义的，更多是用户的抢占话语权之争。'
    },
    {
      id: 6,
      header: "合约打的就是科学家吗",
      details:
          '合约的形式，只是出现了省 gas 的手段，普通用户可以使用。非自转和自转，也是所谓科学家和普通用户的存在，因为工具太多。工具和脚本太多了，想玩铭文有工具是必须，不然小狐狸发起单交易，效率太低。',
    },
    {
      id: 6,
      details:
          '合约打的不一定是科学家，非科学家也可以用 合约、脚本、工具。'
    },
    {
      id: 7,
      header: "玩铭文有好的建议吗",
      details: '监控 + 工具（脚本工具） + 消息（群组消息） + 手速（手打的熟练） 等。'
    },
    {
      id: 7,
      details: '保持清醒，可以亏少很多。不清醒 可以获得 或失去也更多。DYOR。'
    },
  ],
  socialSharingsHeading: '',
  socialSharings: [],
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
    <ProjectHeader :singleProjectHeader="singleProjectHeader"/>

    <!-- Project gallery -->
    <!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo"/>

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject"/>
  </div>
</template>

<style scoped></style>
