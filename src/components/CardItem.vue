<script setup lang="ts">
import { CardItemType } from '../types/appTypes';


const data = defineProps({
  card: {
    type: Object as () => CardItemType,
    required: true
  }
})

// export default {
//   props: {
//     card: {
//       type: Object,
//       required: true
//     }
//   }
// }
console.log(data.card)

</script>

<template>
  <article class="characterCard__Wrapper">
    <div class="characterCard__ImgWrapper"><img :src="data.card.image" alt="Ghost in a Jar" /></div>
    <div class="characterCard__ContentWrapper">
      <div class="section"><a href="https://rickandmortyapi.com/api/character/141" rel="noopener noreferrer"
          target="_blank" class="externalLink__ExternalLink">
          <h2>{{ data.card.name }} fa</h2>
        </a><span class="status"><span class="status__icon"></span> Dead - Alien</span></div>
      <div class="section"><span class="text-gray">Last known location:</span><a
          href="https://rickandmortyapi.com/api/location/20" rel="noopener noreferrer" target="_blank"
          class="externalLink__ExternalLink">Earth (Replacement Dimension)</a></div>
      <div class="section"><span class="text-gray">First seen in:</span><a
          href="https://rickandmortyapi.com/api/episode/15" rel="noopener noreferrer" target="_blank"
          class="externalLink__ExternalLink">Total Rickall</a></div>
    </div>
  </article>
</template>

<style scoped>
.characterCard__Wrapper {
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.characterCard__ImgWrapper {
  flex: 2 1 0%;
  width: 100%;
}

.characterCard__ImgWrapper img {
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.characterCard__ContentWrapper {
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: #fff;
  ;
  display: flex;
  flex-direction: column;
}

.characterCard__ContentWrapper .section:first-child {
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.characterCard__ContentWrapper .section {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.characterCard__ContentWrapper .section:last-child {
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.characterCard__ContentWrapper a {
  color: #fff;
}

.characterCard__ContentWrapper h2 {
  font-size: 1.5rem;
}

.characterCard__ContentWrapper .status {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
}

.characterCard__ContentWrapper span {
  font-size: 16px;
  font-weight: 500;
}

.characterCard__ContentWrapper .status__icon {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
</style>
