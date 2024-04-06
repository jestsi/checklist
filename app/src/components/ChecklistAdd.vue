<script setup>
import {reactive, ref} from "vue";
  import {api} from "boot/axios";
  import ChecklistItem from "components/ChecklistItem.vue";

  const propmt1 = ref(false);
</script>

<template>
  <div class="fit column wrap justify-center items-center content-center">
    <q-input
      placeholder="Введите название чек-листа"
      class="chk-add-input" standout @keydown.enter="propmt1 = true">
      <template v-slot:append class="content-end">
        <i class="fa-solid fa-pen"></i>
      </template>
    </q-input>
  </div>
  <q-dialog v-model="propmt1">
    <q-layout >
      <checklist-item checklist-idt="1"/>
    </q-layout>
  </q-dialog>
</template>

<style scoped>
  .chk-add-input {
    margin: 1%;
    width: 60%;
  }

</style>
