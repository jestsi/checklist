<script setup>
import {ref} from "vue";
import {useErrorStore} from "stores/errorStore";
const errorStore = useErrorStore();
const defaultError = ref(errorStore.errorMessage !== '');
</script>

<template>
  <q-dialog persistent v-model="defaultError">
    <q-card>
      <q-card-section>
        <div class="text-h6 bg-negative">Error</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="negative" @click="errorStore.clearError()" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
