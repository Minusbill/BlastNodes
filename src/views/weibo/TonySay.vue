<template>

    <div class="pdf-container">
      <embed type="application/pdf" :src="pdfUrl" class="pdf-embed" style="width: 80%; height: 1000px;">
    </div>
</template>
<script setup>
import {ref} from 'vue';
import ProjectHeader from "@/components/projects/WeiboHeader.vue";


const singleProjectHeader = {
  singleProjectTitle: 'Tony 语录',
  singleProjectDate: 'Nov 1, 2023',
  singleProjectTag: 'ETH / Plasma',
};
// Define reactive data using ref
const pdfUrl = ref();
</script>

<style>
.pdf-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.pdf-embed {
  width: 80%;
  height: 1100px; /* 或者你需要的高度 */
}
</style>
