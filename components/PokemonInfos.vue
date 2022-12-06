<template>
  <div class="pokemonInfoCard">
    <div class="sectionInfos">
      <b-img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonFullInfo.id}.png`"
        fluid
        :alt="pokemonFullInfo.name"
        class="pokemonImg"
      ></b-img>
      <div class="infos">
        <h2 class="text-capitalize">{{ pokemonFullInfo.name }}</h2>
        <b-badge
          variant="dark"
          class="mr-1 d-inline text-capitalize"
          v-for="(type, index) in pokemonFullInfo.types"
          :key="index"
        >
          {{ type.type.name }}
        </b-badge>
      </div>
    </div>
    <div class="movesList mt-1">
      <p class="h3 text-center">Moves</p>
      <b-list-group>
        <b-list-group-item
          v-for="(move, index) in pokemonFullInfo.moves"
          :key="index"
        >
          {{ move.move.name }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonInfos",
  props: ["pokemonFullInfo"],
}
</script>

<style scoped>
.pokemonImg {
  width: 9.375rem;
  height: 9.375rem;
}

.pokemonInfoCard .sectionInfos {
  display: flex;
  align-items: center;
}
</style>