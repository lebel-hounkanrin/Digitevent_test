<script setup lang="ts">
interface LogItem {
  category: string;
  fact: string;
  time: string;
}
defineProps({
  logs: Array<LogItem>,
});
</script>

<template>
  <div class="bg-white border rounded p-3" style="min-height: 300px;">
    <h6><u>Logs</u></h6>
    <div v-for="log in logs" :key="log.time" class="mt-3">
      <div class="fw-bold">{{ log.time }}</div>
      <div><strong>{{ log.category }} Fact</strong></div>
      <div>{{ log.fact }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
