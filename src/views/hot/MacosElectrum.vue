<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: 'MacOS安装 atommicals electrum X server 不完全指南',
  singleProjectDate: 'Nov 19,  2023',
  singleProjectTag: ' electrum / Atom ',
};

const projectInfo = {
  clientHeading: '   教程原文 ',
  companyInfos: [
    {id: 1, title: '原贴', details: 'https://twitter.com/wusimpl/',link:'https://twitter.com/wusimpl/status/1726134325287281036'},
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
      id: 3,
      header: "《MacOS安装 atommicals electrum X server 不完全指南》",
      details: '拒绝使用docker安装atom节点，速度立省100%',
    },
    {
      id: 2,
      header: "前置条件：",
      details: '1. 确保你已经安装了比特币全节点，且建立了区块索引（txindex=1）\n' +
          '2. 确保你有足够的存储空间（>80GB），且最好使用SSD而非HDD，HDD会拖累索引速度。\n' +
          '3. 耐心。安装途中可能会出现会很多错误，不过很大坑我已经帮你们踩了。',
    },
    {
      id: 1,
      header: "几个自问自答问题：",
      details: '几个自问自答问题：\n' +
          '1. 我已经使用docker索引了一部分区块了，这些索引好的部分可以用吗？\n' +
          '答案是可以，只需在.env中将db directory改为你已存在索引的文件夹就可以了。\n' +
          '\n' +
          '2. 为什么不使用linux系统安装（比如ubuntu）\n' +
          '对于我的情况来说很简单，我没有安装ubuntu系统，也不想弄云服务器。',
    },
    {
      id: 4,
      header: "1️⃣ 安装 cmake 和 python3.8\n",
      details: '这两个安装很简单，大家自己网上搜就好了。确保安装完成后可以在命令行使用且版本是对的。\n' +
          '\n' +
          'python3.8可以独立安装，也可以使用conda或者virtualenv等环境管理器\n' +
          '\n' +
          '请确保python命令和pip命令是一致的。',
      img: require('@/assets/hot/make.png'),

    },
    {
      id: 4,
      header: "2️⃣ 安装 leveldb 数据库\n",
      details: '1. 下载 leveldb 1.21版本的源码\n',
      link:"https://github.com/google/leveldb/archive/refs/tags/1.21.zip"
    },
    {
      id: 4,
      details: '解压\n' +
          '打开命令行，然后cd 到leveldb-1.21这个目录'
    }, {
      id: 4,
      details: '2. 按图修改CMakeLists.txt\n' +
          '加上一行命令\n' +
          'set(BUILD_SHARED_LIBS ON)',
      img: require('@/assets/hot/CMakeLists.png'),
    },
    {
      id: 5,
      img: require('@/assets/hot/cmlistSet.png'),
    },
    {
      id: 5,
      header: "2. 编译 leveldb\n",
      details: '分别依次执行下面的两行命令\n' +
          'mkdir -p build && cd build\n',
    },
    {
      id: 5,
      details:
          'cmake -DCMAKE_BUILD_TYPE=Release .. && cmake --build .\n' +
          '请确保这两行命令执行是成功\n',
      img: require('@/assets/hot/leveldb.png'),
    },
    {
      id: 6,
      header: " 3. 安装leveldb",
      details: '执行下面的命令（注意空格）\n'
    },
    {
      id: 6,
      details:
          ' sudo  cp  -r  ../include/leveldb/ /usr/local/include/leveldb\n'
    },
    {
      id: 6,
      details:
          'sudo cp ./libleveldb.dylib /usr/local/lib'
    },
    {
      id: 6,
      header: "3️⃣ 下载atommical electrum X server 代码并配置\n",
      link: "https://github.com/atomicals/atomicals-electrumx"
    },
    {
      id: 6,
      details: '下载解压后里面有个.env文件，要修改的是\n'
    },
    {
      id: 6,
      details:
          'DAEMON_URL：改成你的全节点rpc url，这里应该需要配置比特币全节点的rpcuser和rpcpass\n'

    },
    {
      id: 6,
      details:
          'DB_DIRECTORY：改成你要存放数据的目录，如果已经有了部分索引，那就改到那个索引所在目录',
      img: require('@/assets/hot/DB_DIRECTORY.png'),
    },
    {
      id: 6,
      header: "4️⃣ 安装 python 依赖",
      details: '请确保命令行在atomicals-electrumx目录，然后执行\n'
    },
    {
      id: 6,
      details:    'pip install -r requirements.txt\n'
    },
    {
      id: 6,
      details:
          '然后保险起见，我们将plyvel替换成旧版本\n'
    },
    {
      id: 6,
      details:
          'pip install plyvel==1.3.0\n' +
          '\n' +
          '请确保所有包都安装成功！！！'
    },
    {
      id: 6,
      header: " 5️⃣ 启动 server 请开始索引\n",
      details: '确保命令行在atomicals-electrumx目录，执行\n'
    },
    {
      id: 6,
      details:
          'python electrumx_server\n'
    },
    {
      id: 6,
      details:
          '即开始索引，但有可能会报错，例如在某个目录找不到 libleveldb.dylib 这个文件，这时候就需要把 leveldb-1.21/build目录下我们编译好的libleveldb.dylib移动到这个目录。\n'
    },
    {
      id: 6,
      details:
          '然后再次执行上面的命令。',
      img: require('@/assets/hot/libleveldb.png'),
    },
    {
      id: 6,
      details: '不出意外你的 server 将会开始进行索引。如果你遇到了问题，请在下方留言。',
    },
    {
      id: 6,
      img: require('@/assets/hot/serverserver.png'),
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
