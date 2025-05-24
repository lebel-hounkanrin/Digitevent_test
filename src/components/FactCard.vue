<script setup lang="ts">
  interface FactCardProps {
    title: string,
    fact: string
  }
  defineProps<FactCardProps>();
  const emit = defineEmits(['fetchFact']);
</script>

<template>
  <div class="card shadow-sm mb-3" style="width: 100%; height: 300px;">
    <div class="card-body">
      <p class="text-muted mb-2">
        A cool <strong>{{ title }}</strong> Fact
      </p>
      <p class="card-text fw-bold">
        {{ fact }}
      </p>
      <div class="">
        <button
          class="btn position-absolute top-0 end-0 m-3 p-0 border-0"
          style="color: red; font-size: 1.5rem;"
          @click="emit('fetchFact', title)"
        >
          <i class="bi bi-arrow-down-circle-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
