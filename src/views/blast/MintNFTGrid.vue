<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Image gallery -->
      <div class="flex justify-center">
        <div class="w-2/5 overflow-hidden rounded-lg lg:block">
          <img src="@/assets/blast/blastnft.png" alt=""
               class="h-full w-full object-cover object-center"/>
        </div>
      </div>

      <!-- Product info -->
      <div
          class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>

          <!-- Reviews -->
          <div class="mt-1">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                          :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                          aria-hidden="true"/>
              </div>
              <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
              <a :href="reviews.href"
                 class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ reviews.totalCount }}
                reviews</a>
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
            </div>

            <!-- Sizes -->
            <div class="mt-1">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">数量</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">数量选择</a>
              </div>

              <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>

                <!-- 添加数字选择的控件 -->
                <input type="number" v-model="selectedNumber" min="1" max="10">

                <!-- 其他的 Radio Group 内容 -->
              </RadioGroup>
            </div>

            <button type="submit"
                    class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Mint
            </button>
          </form>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-1">
            <h3 class="text-sm font-medium text-gray-900">关于 NFT 的赋能</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {StarIcon} from '@heroicons/vue/20/solid'
import {RadioGroup, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'

const selectedNumber = ref(1);

const product = {
  name: 'Web5 x Blast 龙年🐲年纪念版 NFT',
  price: '价格：Free',
  href: '#',
  breadcrumbs: [
    {id: 1, name: 'Men', href: '#'},
    {id: 2, name: 'Clothing', href: '#'},
  ],
  images: [
    {
      src: "@assets/blast/bigbang.png",
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  colors: [
    {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
    {name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400'},
    {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
  ],
  sizes: [
    {name: 'XXS', inStock: false},
    {name: 'XS', inStock: true},
    {name: 'S', inStock: true},
  ],
  description:
      '欢迎来到 Web5 平台，现在进行的是 Web5 x BLAST 活动。在这里你可以学习非常多的 区块链知识、技巧和 工具.以及多方位的学习 BLAST 的 质押/开发 等。',
  highlights: [
    'Web5 x BLAST 活动凭证',
    '未来的空投证明',
    'BLAST 代币分享凭证',
    'Web5 平台的学习记录',
  ],
  details:
      '在Web5 ，学习web3 web2 技巧，参加 blast，不仅可以获得退还gas 也可以有机会获得blast未来空投分成。',
}
const reviews = {href: '#', average: 4, totalCount: 117}

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>