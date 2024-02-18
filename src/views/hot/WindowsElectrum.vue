<script setup>
import {onMounted, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfoLeft.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '如何用windows 编译原生的 atomicals 索引程序',
  singleProjectDate: 'Nov 19,  2023',
  singleProjectTag: ' electrum / Atom ',
};

const projectInfo = {
  clientHeading: '   教程原文 ',
  companyInfos: [
    {id: 1, title: '原贴', details: 'https://twitter.com/zhangch30063843',link:'https://twitter.com/zhangch30063843/status/1725851723930227095'},
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
      header: "如何用windows 编译原生的 atomicals 索引程序",
      details: '为什么要编译原生的，因为docker 性能太差，速度太慢了\n'
    },
    {
      id: 2,
      details: '难点：windows 安装项目的时候，由于，python缺少leveldb 对应的windows包，所以需要自己现编译。\n',
    },
    {
      id: 1,
      details: "该项目基于python 3.10.x ，需要用到的链接：\n",
      link:"https://github.com/atomicals/atomicals-electrumx"
    },
    {
      id: 4,
      header: "一、windows 编译需要的准备工具：\n",
      details: 'vc 编译工具，提前安装visual studio 2022，安装vc+\n',

    },
    {
      id: 4,
      header: "二、安装vcpkg\n",
      details: '由于项目要用到leveldb，而作者没有发布 leveldb 的windows 包，所以需要现编译，打开CMD输入以下命令：\n'
    },
    {
      id: 4,
      details: ' d:\n'
    },
    {
      id: 4,
      details:
          'git clone https://github.com/Microsoft/vcpkg.git\n'
    },
    {
      id: 4,
      details:
          '.\\vcpkg\\bootstrap-vcpkg.bat'
    },
    {
      id: 4,
      details:
          '我这里 安装的路径在D盘，是：D:\\vcpkg\n'
    },
    {
      id: 4,
      header: "三、安装leveldb\n",
      details: '.\\vcpkg\\vcpkg install leveldb --triplet x64-windows\n'
    },
    {
      id: 4,
      details: '安装之后的头文件和库文件的目录分别是：\n'
    },
    {
      id: 4,
      details: ' D:\\vcpkg\\installed\x64-windows\\include\n'
    },
    {
      id: 4,
      details: 'D:\\vcpkg\\installed\x64-windows\\lib\n'
    },
    {
      header: "四、python 安装项目\n",
      details: 'git clone https://github.com/atomicals/atomicals-electrumx',
    },
    {
      id: 5,
      details: 'cd atomicals-electrumx\n'
    },
    {
      id: 5,
      details: ' pip install --user --global-option=build_ext --global-option="-ID:\\vcpkg\\installed\x64-windows\\include" --global-option="-LD:\\vcpkg\\installed\x64-windows\\lib" --global-option="-lleveldb" -r requirements.txt',
    },
    {
      id: 6,
      details: 'pip install python-dotenv\n'
    },
    {
      id: 7,
      header: "五、修改源代码\n",
      details: '支持项目读取 .env文件，将下面的代码加入 lib\\env_base.py 中\n'
    },
    {
      id: 7,
      details:
          'from dotenv import load_dotenv\n'
    },
    {
      id: 7,
      details:
          'load_dotenv()'
    },
    {
      id: 8,
      header: "六、修改配置文件\n",
      details: '修改bitcoin core rpc 的url 和本地索引存储路径\n'
    },
    {
      id: 9,
      header: "七、启动索引程序\n",
      details: 'python electrumx_server\n'
    },
    {
      id: 10,
      details: '系统预计5个小时跑完索引\n'
    },
    {
      id: 10,
      img: require('@/assets/hot/windows1.png'),
    },
    {
      id: 10,
      img: require('@/assets/hot/windows2.png'),
    },
    {
      id: 10,
      img: require('@/assets/hot/windows3.png'),
    },
    {
      id: 10,
      img: require('@/assets/hot/windows4.png'),
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
