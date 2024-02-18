<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <!-- 这里放置你的弹窗内容 -->
      <slot></slot>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  },
  methods: {
    closeModal() {
      this.visible = false;
    }
  }
};
</script>

<style>
/* 根据你的需求自定义样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
}
</style>
