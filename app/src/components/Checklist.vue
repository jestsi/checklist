<script lang="ts" setup>
import {Checklist} from "../models/Checklist";
import {onMounted, ref} from "vue";
import ChecklistItemsRepository from "../repositories/ChecklistItemsRepository";
import ChecklistItem from "./ChecklistItem.vue";
import ChecklistItemService from "../services/ChecklistItemService";
import {useErrorStore} from '../stores/errorStore'

const props = defineProps({
  checklist: {
    type: Object as () => Checklist,
    required: true
  }
});

const checklistService = new ChecklistItemService();
const items = ref([]);
const canShowErrorModal = ref(false);
const errorStore = useErrorStore();

onMounted(async () => {
  canShowErrorModal.value = (errorStore.errorMessage != '');
  items.value = await (checklistService.getAllByChecklistId(props.checklist.id));
});

</script>

<template>
  <div class="fit column wrap justify-center items-center content-center checklist">
    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item
        style="max-width: 350px"
        expand-separator
        caption="test">
        <template v-slot:header >
          <q-tooltip anchor="top middle" >{{checklist.description}}</q-tooltip>
          <q-item-section>
            <p>{{ checklist.name }}</p>
          </q-item-section>

          <q-item-section side>
            <p>Дата создания <br>
              {{ checklist.created_at }}</p>
          </q-item-section>
        </template>

        <q-card>
          <q-tooltip>{{ `${checklist.description}\n ${checklist.updated_at}` }}</q-tooltip>
          <q-card-section v-for="checklist in items" :key="checklist.id">
            <ChecklistItem :itemData="checklist" :checklistIdt="checklist.id" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<style scoped>
.checklist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-item-section {
  margin-right: 10px; /* Add some margin between sections */
}

.q-expansion-item-caption {
  font-weight: bold; /* Make the caption bold */
}

.q-card {
  margin-top: 10px; /* Add some margin between expansion items */
}

.q-card-section {
  padding: 10px; /* Add padding to the card section */
}
</style>
