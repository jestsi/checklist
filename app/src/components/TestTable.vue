<template>
  <div class="testTable">
    <q-btn @click="fetchData">Загрузить данные</q-btn>
    <div v-if="loading">Загрузка...</div>
    <ul>
      <div v-for="item in data" :key="item.id">
        <details>
          <summary>{{item.name}}</summary>
          <a>Созданно: {{item.created_at}}</a><br>
          <a>Измененно: {{item.updated_at}}</a>
          <i class="fa-solid fa-poo"/>
        </details><br>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const loading = ref(false);
const data = ref();

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://checklist/checklists');
    data.value = response.data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  } finally {
    loading.value = false;
  }
}


</script>
<style scoped>
</style>
