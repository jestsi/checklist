import {defineStore} from "pinia";

export const useErrorStore = defineStore('errorState', {
    state: () => ({
      errorMessage: '',
    }),
    actions: {
      setError(message) {
        this.errorMessage = message;
      },
      clearError() {
        this.errorMessage = '';
      }
    }
  },
);
