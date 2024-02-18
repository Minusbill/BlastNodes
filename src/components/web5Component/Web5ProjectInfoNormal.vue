<script>
import feather from 'feather-icons';
import Clipboard from 'clipboard';
import { ref, computed } from 'vue';

export default {

  setup() {
    // 声明响应式变量
    const price = ref(25);
    const quantity = ref(1);
    const configuration = ref('中');

    // 计算单价
    const unitPrice = computed(() => {
      let priceValue = price.value;
      switch (configuration.value) {
        case '高':
          priceValue *= 1.2;
          break;
        case '低':
          priceValue *= 0.8;
          break;
        default:
          break;
      }
      return priceValue.toFixed(2);
    });

    // 计算总价
    const totalPrice = computed(() => (price.value * quantity.value).toFixed(2));

    // 确认操作
    const confirm = () => {
      // 可以在这里添加确认操作的逻辑
      console.log('确认');
    };

    // 返回需要在模板中使用的变量和方法
    return {
      price,
      quantity,
      configuration,
      unitPrice,
      totalPrice,
      confirm
    };
  },
  props: ['projectInfo'],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  data() {
    return {
      showCopied: false // 控制提示信息显示的变量
    };
  },
  methods: {
    copyText(text) {
      // 创建新的clipboard对象
      const clipboard = new Clipboard(this.$el, {
        text: () => text
      });

      clipboard.on('success', () => {
        // 显示提示信息
        this.showCopied = true;

        // 设置定时器，几秒后隐藏提示信息
        setTimeout(() => {
          this.showCopied = false;
        }, 2000);

        // 释放clipboard实例
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        // 处理复制失败的情况
        console.error('复制失败');
      });

      // 触发复制操作
      clipboard.onClick(event);
    }
  },


};


</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ projectInfo.clientHeading }}
        </p>
        <ul class="leading-loose">
          <li
              v-for="info in projectInfo.companyInfos"
              :key="info"
              class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>{{ info.title }}: </span>
            <a
                href="#"
                :class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
                aria-label="Project Website and Phone"
            >{{ info.details }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.objectivesHeading }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.objectivesDetails }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.technologies[0].title }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.technologies[0].techs.join(', ') }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <div>
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
        </p>
        <div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="item">
        <label>单个价格:</label>
        <input type="text" :value="price" readonly class="no-border" />
      </div>
      <div class="item">
        <label>数量:</label>
        <input type="number" v-model.number="quantity" />
      </div>
      <div class="item">
        <label>配置:</label>
        <select v-model="configuration">
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
      </div>
      <div class="item">
        <label>总价:</label>
        <input type="text" :value="totalPrice" readonly class="no-border" />
      </div>
      <button @click="confirm">确认</button>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.item {
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
}

button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.no-border {
  border: none;
  outline: none; /* 可选，移除焦点时的虚线框 */
}
</style>