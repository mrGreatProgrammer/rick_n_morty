import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const loading = ref(false)
  const characters = ref([])
  const info = ref(null)


  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }



  async function fetchCharacters() {
    try {
        loading.value = true;

        const response = await axios.get<{results:CardItemType[]}>(`https://rickandmortyapi.com/api/character`);

        characters.value = await response.data.results;
        info.value = await response.data.info;
        loading.value = false;
        console.log('Success [fetchCharacters]', characters.value);
    } catch (error: any) {
        console.error(`Error [fetchCharacters]: ${error}`);
        loading.value = false;
    }
}


  return { count, doubleCount, increment, fetchCharacters, characters, info }
})
