<script setup lang="ts">
  interface FactCardProps {
    title: string,
    description: string
  }
  defineProps<FactCardProps>();
</script>

<template>
<div class="card">
  <div class="card-body">
    <p>A cool {{title}} Fact</p>
    <p>{{description}}</p>
  </div>
</div>
</template>

<style scoped>

</style>
