<script lang="ts" setup>
import {ref} from "vue";
import {ChecklistItem} from "../models/ChecklistItem";
import ChecklistItemsRepository from "../repositories/ChecklistItemsRepository";

const props = defineProps({
  itemData: {
    type: ChecklistItem,
    required: false,
  },

  checklistIdt: {
    type: Number,
    required: true,
  }
});

const form = ref(props.itemData ?? new ChecklistItem(props.checklistIdt));
const repo = new ChecklistItemsRepository();

</script>

<template>
    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item
        style="max-width: 350px"
        expand-separator
        caption="test">
        <template v-slot:header >
          <q-checkbox @click="repo.update(form as ChecklistItem, form.id)" v-model="form.completed"/>
          <q-tooltip anchor="top middle" >{{form.description}}</q-tooltip>
          <q-item-section>
            {{ form.title }}
          </q-item-section>

          <q-item-section side>
            Дата создания <br>
              {{ form.created_at }}
          </q-item-section>
        </template>

        <q-card>
          <q-tooltip>{{ `${form.description}\n ${form.updated_at}` }}</q-tooltip>
        </q-card>
      </q-expansion-item>
    </q-list>
</template>

<style scoped>
.checklist-form {
  width: 90%;
}
</style>
