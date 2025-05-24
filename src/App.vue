<script setup lang="ts">

import FactCard from '@/components/FactCard.vue'
import LogCard from '@/components/LogCard.vue'
import { ref } from 'vue'

const currentMathFunFact = ref("");
const currentDateFact = ref("");
const fetcFact = async (title: "Math" | "Date")  => {
  let fact = "";
  try {
    if(title === "Math") {
      const randomIndex = Math.floor(Math.random() * 256)
      const response = await fetch(`http://numbersapi.com/${randomIndex}/math`);
      const text = await response.text();
      currentMathFunFact.value = text;
      fact = currentMathFunFact.value;
    } else {
      const randomMonth = Math.floor(Math.random() * 12) + 1;
      const randomYear = Math.floor(Math.random() * 12) + 1;
      const response = await fetch(`http://numbersapi.com/${randomMonth}/${randomYear}/date`);
      const text = await response.text();
      currentDateFact.value = text;
      fact = currentMathFunFact.value;
    }
    LogList.value.push(
      {category: title, fact: fact, time: new Date().toISOString()}
    );
  }
  catch (error) {
    console.error(error);
  }
}
const LogList = ref<{category: string, fact: string, time: string;}>([])
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex flex-column align-items-start gap-3">
        <FactCard title="Math" :fact="currentMathFunFact" @fetch-fact="fetcFact"/>
        <FactCard title="Date" :fact="currentDateFact" @fetch-fact="fetcFact"/>
      </div>
      <div class="col-md-6">
        <LogCard :logs="LogList" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
