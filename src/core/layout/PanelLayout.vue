<script setup lang="ts"></script>

<template>
  <div class="panel-layout">
    <main class="panel-layout__content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.panel-layout {
  min-height: 100vh;
}

.panel-layout__content {
  padding: 24px;
}
</style>
