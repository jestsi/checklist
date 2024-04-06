<template>

    <q-page-sticky position="bottom-right" class="q-mr-lg q-mb-lg">
      <q-btn size="lg" round icon="palette" @click="toggleTheme" :class="{ 'active': isActive, 'deActive': !isActive }" >
      </q-btn>
    </q-page-sticky>

</template>

<script lang="ts" setup>

import {ref} from "vue";
import {LocalStorage} from "quasar";
import ThemeService from "../services/ThemeService";

const themeService = new ThemeService(LocalStorage.getItem('theme') ?? false);
const isActive = ref(themeService.getTheme());

const toggleTheme = () => {
  isActive.value = !(isActive.value as boolean);
  themeService.setTheme(isActive.value);
  LocalStorage.set('theme', isActive.value);
};

</script>
<style>
.active {
  animation: changeThemeColor 2s ;
}
.deActive {
  animation: changeThemeColor 2s ;
}

@keyframes themeChangeActive {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes changeThemeColor {
  0% { background-color: var(--dark); }
  100% { background-color: var(--primary); }
}

@keyframes themeChangeDeActive {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
