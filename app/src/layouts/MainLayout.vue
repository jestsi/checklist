<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <ChecklistList/>
      <ChangeTheme/>
      <DefaultError/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import  TestTable  from "components/TestTable.vue";
import ChecklistList from "components/ChecklistList.vue";
import ChangeTheme from "components/ChangeTheme.vue";

import vue_cookie from  'vue-cookie'
import {useQuasar} from "quasar";
import DefaultError from "components/dialogs/errors/DefaultError.vue";
</script>
