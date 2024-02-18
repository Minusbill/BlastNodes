<script>
import feather from 'feather-icons';
import Clipboard from 'clipboard';

export default {
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
  }
};

</script>

<template>
  <div class="parent-container">

    <iframe :src="projectInfo.pptUrl" width="777px" height="777px" style="border: 1px solid black;" ></iframe>

  </div>


</template>


<style scoped>

.parent-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 1999px;
}

</style>

