<template>
  <section class="pokemons-section container-fluid">
    <b-card
      v-for="(pokemon, index) of pokemonFound"
      :key="index"
      :title="pokemon.name.toUpperCase()"
      :img-src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2 card-pokemon text-center"
    >
      <b-card-text class="text-center">
        <p>#0{{ index + 1 }}</p>
      </b-card-text>

      <b-button
        v-b-modal.modal-center
        @click.prevent.stop="showPokemonInfos(index)"
        class="btn btn-primary"
      >
        More informations
      </b-button>
    </b-card>
    <b-modal id="modal-center" centered>
      <PokemonInfos :pokemonData="pokemonData" :pokemonIndex="pokemonIndex" />
    </b-modal>
  </section>
</template>
  
<script>
import mapState from "vuex"
import PokemonInfos from "./PokemonInfos"
import axios from "axios"

export default {
  name: "Pokemons",
  props: ["search"],
  components: { PokemonInfos },
  computed: {
    pokemons() {
      return this.$store.state.pokedev.pokemons;
    },
    pokemonFound() {
      return this.pokemons.filter((el) => {
        return el.name.includes(this.search)
      })
    },
  },
  data() {
    return {
      pokemonIndex: 0,
      pokemonData: []
    }
  },
  methods: {
    showPokemonInfos(index) {
      this.pokemonIndex = index
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        .then((response) => {
          if (response) {
            this.pokemonData = response.data
          }
        })
    }
  },
};
</script>
  
<style scoped>
.pokemons-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.card-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.51);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #1c3040;
}
</style>