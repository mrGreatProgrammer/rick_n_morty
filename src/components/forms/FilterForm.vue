<script lang="ts">
import { updateURL, urlSearchParamsToObj } from '@/utils/urlUtils.js';
import { useCounterStore } from '../../stores/counter.ts';
import { onMounted } from 'vue';



export default {
  setup() {
    const createCounterStore = useCounterStore();
    const url = urlSearchParamsToObj()
    const onChangeName = (value: string) => {
      createCounterStore.setName(value);
      updateURL({ ...url, name: value })
    }

    const onChangeStatus = (value: string) => {
      createCounterStore.setStatus(value);
      updateURL({ ...url, status: value })
    }

    onMounted(() => {
      // @ts-ignore
      createCounterStore.setStatus(url.status)
      // @ts-ignore
      createCounterStore.setName(url.name)
    })

    return {
      createCounterStore,
      onChangeName,
      onChangeStatus
    }
  }
}


</script>

<template>
  <div class="filter-form">
    <input class="inp" @change="onChangeName($event.target.value)" :value="createCounterStore.name" />
    <select class="selector" @change="onChangeStatus($event.target.value)" :value="createCounterStore.status">
      <option value="Unknown">Unknown</option>
      <option value="Dead">Dead</option>
      <option value="Alive">Alive</option>
    </select>
  </div>
</template>

<style scoped>
.filter-form {
  margin: 50px 20px 50px 25px;
}

.inp {
  font-size: 18px;
  padding: 8px;
  margin-right: 15px;
  background: white;
  color: rgb(51, 51, 51);
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
}

.inp:focus {
  border: 1px solid rgb(255, 152, 0);
  outline: 1px solid rgb(255, 152, 0);
}

.selector {
  font-size: 18px;
  padding: 8px;
  margin-right: 15px;
  background: white;
  color: rgb(51, 51, 51);
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
}

.selector:focus {
  border: 1px solid rgb(255, 152, 0);
  outline: 1px solid rgb(255, 152, 0);
}
</style>
