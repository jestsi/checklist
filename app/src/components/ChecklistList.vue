<script setup>
import {onMounted, ref} from "vue";
import ChecklistRepository from "src/repositories/ChecklistRepository";
import Checklist from "components/Checklist.vue";

const checklistRepository = new ChecklistRepository();
const checklists = ref([]);

onMounted(async () => {
  checklists.value = await (checklistRepository.getAll());
});
</script>

<template>
  <div>
    <Checklist v-for="checklist in checklists" :key="checklist.id" :checklist="checklist" />
  </div>
</template>

<style scoped>

</style>
