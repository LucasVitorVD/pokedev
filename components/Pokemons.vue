<template>
  <section class="pokemons-section container-fluid">
    <b-card
      v-for="(pokemon, index) in filteredPokemon"
      :key="index"
      :title="pokemon.name.toUpperCase()"
      :img-src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(
        pokemon
      )}.png`"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2 card-pokemon text-center"
    >
      <b-card-text class="text-center">
        <p>#0{{ getId(pokemon) }}</p>
      </b-card-text>

      <b-button
        v-b-modal.modal-center
        @click.prevent.stop="getPokemonFullInfo(getId(pokemon))"
        variant="outline-primary"
      >
        More informations
      </b-button>
    </b-card>
    <div class="item error" v-if="search&&!filteredPokemon.length">
     <p>Pokemon not found!</p>
    </div>
    <b-modal id="modal-center" centered>
      <PokemonInfos :pokemonFullInfo="pokemonFullInfo" />
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
      return this.$store.state.pokedev.pokemons
    },
    filteredPokemon() {
      return this.pokemons.filter((pokemon) => {
        return pokemon.name.includes(this.search.toLowerCase())
      });
    },
  },
  data() {
    return {
      pokemonFullInfo: []
    }
  },
  methods: {
    getPokemonFullInfo(id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          if (response) {
            this.pokemonFullInfo = response.data
          }
        })
    },
    getId(pokemon) {
      return Number(pokemon.url.split("/")[6])
    }
  },
}
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
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1.875rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.3125rem);
  -webkit-backdrop-filter: blur(0.3125rem);
  border: 0.0625rem solid rgba(255, 255, 255, 0.18);
  color: #1c3040;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.625rem;
  margin: 1rem auto auto;
  padding: 0.625rem;
  color: white;
  font-size: 1.1rem;
  border-radius: 0.3125rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.625rem 0.1875rem 0,
    rgba(0, 0, 0, 0.06) 0 0.625rem 0.125rem 0;
}

.error {
  background-color: tomato;
}
</style>