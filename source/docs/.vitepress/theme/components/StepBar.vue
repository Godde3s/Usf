<template>
  <div class="step-bar">
    <el-steps
      :active="active"
      align-center
    >
      <el-step
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
      />
    </el-steps>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: () => [
      { title: '困境与机会', description: '普通人的编程新可能' },
      { title: '能力初探', description: '60秒极速开发体验' },
      { title: '原生实战', description: '打造AI原生贪吃蛇' },
      { title: '拓展创造', description: '举一反三做游戏' }
    ]
  }
})
</script>

<style scoped>
.step-bar {
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

.step-bar :deep(.el-steps),
.step-bar :deep(.el-step),
.step-bar :deep(.el-step__main) {
  min-width: 0;
}

.step-bar :deep(.el-step__main) {
  padding-right: 4px;
  padding-left: 4px;
}

.step-bar :deep(.el-step__title),
.step-bar :deep(.el-step__description) {
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 720px) {
  .step-bar :deep(.el-step__title) {
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .step-bar :deep(.el-step__description) {
    padding-right: 2px;
    padding-left: 2px;
    font-size: 0.72rem;
    line-height: 1.35;
  }
}
</style>
