<script setup lang="ts">

import FactCard from '@/components/FactCard.vue'
import LogCard from '@/components/LogCard.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex flex-column align-items-start gap-3">
        <FactCard title="Math" fact="some math fun fact" />
        <FactCard title="Date" fact="some date fun fact" />
      </div>
      <div class="col-md-6">
        <LogCard :logs="[]" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
