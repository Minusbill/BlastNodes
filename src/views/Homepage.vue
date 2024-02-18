<template>
  <div class="bg-white">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">欢迎来到 Web5 平台</h2>
        <p class="mt-4 text-gray-500">现在是 Blast 学习/建设的季节，你可以在这里学习 如何建设 Blast. Web5 平台会给平台用户返还部分 Blast 代币空投（在获得代币的前提下）</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <router-link
                :to="feature.link"
                aria-label="Projects"
            >
            <dt class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{ feature.name }}</dt>
            <dd 				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
            >{{ feature.description }}</dd>
            </router-link>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="@/assets/eth/blast.png" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
        <img src="@/assets/blast/bigbang.png" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
        <img src="@/assets/blast/blastnftHome.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
        <img src="@/assets/blast/blastblur.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
        <img src="@/assets/blast/blastearn.png" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
        <img src="@/assets/ton/tgbot.png" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { name: '热门课程', description: '热门教程与 Blast 相关的项目',link:"/projects" },
  { name: '新人学院', description: '进入 Blast 前的一些入门知识',link:"/newComer"  },
  { name: 'ETH 与 L2开发', description: '开发Blast前，学习 ETH开发',link:"/insc"  },
  { name: 'Blast', description: '了解和学习 Blast 生态和建设',link:"/hotPoint"  },
  { name: '开发平台', description: '开发者沟通平台，更好的建设 Blast',link:"/dev/products"  },
  { name: '科技宝箱', description: ' 一些有趣的（Blast)工具合集',link:""  },
]
</script>
