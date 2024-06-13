import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { CardItemType, paginationType } from '@/types/appTypes'
import { urlSearchParamsToObj } from '@/utils/urlUtils'

export const useCounterStore = defineStore('counter', () => {
  const currentPage = ref("1")
  const name = ref<string|null>("")
  const status = ref<string|null>("")
  const loading = ref(false)
  const characters = ref<CardItemType[]>([])
  const info = ref<paginationType|null>(null)


  // const doubleCount = computed(() => currentPage.value * 2)
  function setCurrentPage(v:string) {
    currentPage.value=v
  }
  function setName(v:string|null) {
    name.value=v
  }
  function setStatus(v:string|null) {
    status.value=v
  }



  async function fetchCharacters() {
    try {
        loading.value = true;
        const url = urlSearchParamsToObj()
        const response = await axios.get<{results:CardItemType[]; info:any}>(`https://rickandmortyapi.com/api/character`, {params:url});

        characters.value = await response.data.results;
        info.value = await response.data.info;
        loading.value = false;
        console.log('Success [fetchCharacters]', characters.value);
    } catch (error: any) {
        console.error(`Error [fetchCharacters]: ${error}`);
        loading.value = false;
    }
}


  return { currentPage, setCurrentPage, /*doubleCount,*/ fetchCharacters, characters, info, status, setStatus, name, setName, loading }
})
