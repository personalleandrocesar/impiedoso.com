<script setup lang="ts">
useHead({
  titleTemplate: '%s | Personal Leandro Cesar',  
})
</script>

<template>
  <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#34d399 0%,#095d62 50%,#34d399 100%)'/> <!-- here -->
  <NuxtLayout>
    <div class="anima">
      <NuxtPage/>
    </div>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}


</style>