<script lang="ts">
// import {paginationType} from '../../types/appTypes'
import { onMounted } from 'vue';
import { useCounterStore } from '../../stores/counter';
import { updateURL, urlSearchParamsToObj } from '../../utils/urlUtils'


export default {
    setup() {
        const createCounterStore = useCounterStore();
        const url = urlSearchParamsToObj()

        const onChangePagination = (p: string) => {
            createCounterStore.setCurrentPage(p)
            updateURL({ ...url, currentPage: p })
        }


        onMounted(() => {
            // @ts-ignore
            createCounterStore.setCurrentPage(url.currentPage)
        })

        return {
            createCounterStore,
            onChangePagination
        }
    }

}

</script>

<template>
    <div class="pagination-container">
        <button v-for="(item) in createCounterStore?.info?.pages" :key="item" class="pagination-btn"
            :class="{ active: createCounterStore.currentPage == item }" @click="onChangePagination(item)">{{ item
            }}</button>
    </div>
</template>

<style scoped>
.pagination-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 25px;
}

.pagination-btn {
    border-radius: 6px;
    width: 45px;
    height: 45px;
    background: white;
    color: rgb(51, 51, 51);
    border: 1px solid rgb(51, 51, 51);
    transition: 0.1s;
    font-weight: 600;
}

.pagination-btn:hover,
.pagination-btn:focus {
    border: 1px solid rgb(255, 152, 0);
    color: rgb(255, 152, 0);
    cursor: pointer;

}

.active,
.active:hover,
.active:focus {
    border: 1px solid rgb(255, 152, 0);
    background: rgb(255, 152, 0);
    color: #fff;
}
</style>
