<template>
  <section class="pokemons-section container-fluid">
    <b-card
      v-for="(pokemon, index) in pokemonFound"
      :key="index"
      :title="pokemon.name.toUpperCase()"
      :img-src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_id(
        pokemon
      )}.png`"
      :img-alt="pokemon.name"
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
        Mais informações
      </b-button>
    </b-card>
    <b-modal id="modal-center" centered>
      <div class="pokemonInfoCard">
        <b-img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`"
          alt="Image"
          fluid
        ></b-img>
        <h2>{{ pokemons[pokemonIndex - 1].name.toUpperCase() }}</h2>
        <b-badge variant="dark">Dark</b-badge>
        <p>Descrição</p>
      </div>
    </b-modal>
  </section>
</template>
  
<script>
import mapState from "vuex";

export default {
  name: "Pokemons",
  props: ["search"],
  computed: {
    pokemons() {
      return this.$store.state.pokedev.pokemons;
    },
    pokemonFound() {
      return this.pokemons.filter((el) => {
        return el.name.includes(this.search);
      });
    },
  },
  data() {
    return {
      pokemonIndex: 0,
    };
  },
  methods: {
    showPokemonInfos(index) {
      this.pokemonIndex = index + 1;
    },
    get_id(pokemon) {
      return Number(pokemon.url.split("/")[6]);
    },
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