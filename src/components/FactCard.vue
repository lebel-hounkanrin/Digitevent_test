<script setup lang="ts">
  interface FactCardProps {
    title: string,
    fact: string
  }
  defineProps<FactCardProps>();
  const emit = defineEmits(['fetchFact']);
</script>

<template>
  <div class="card shadow-sm mb-3" style="width: 100%;">
    <div class="card-body">
      <p class="text-muted mb-2">
        A cool <strong>{{ title }}</strong> Fact
      </p>
      <p class="card-text fw-bold">
        {{ fact }}
      </p>
      <div class="">
        <button class="btn btn-link text-danger fs-4 p-0" @click="emit('fetchFact', title)">&#x2B07;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
