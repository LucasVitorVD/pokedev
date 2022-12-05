<template>
  <div class="pokemonInfoCard">
    <div class="sectionInfos">
      <b-img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemonIndex + 1
        }.png`"
        fluid
        :alt="pokemonData.name"
        class="pokemonImg"
      ></b-img>
      <div class="infos">
          <h2 class="text-capitalize">{{ pokemonData.name }}</h2>
          <b-badge
            variant="dark"
            class="mr-1 d-inline text-capitalize"
            v-for="(type, index) in pokemonData.types"
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
          v-for="(move, index) in pokemonData.moves"
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
  props: ['pokemonData', 'pokemonIndex']
}
</script>

<style scoped>
.pokemonImg {
    width: 150px;
    height: 150px;
}

.pokemonInfoCard .sectionInfos {
  display: flex;
  align-items: center;
}
</style>