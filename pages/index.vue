<template>
  <div class="container-app">
    <header>
      <b-navbar type="dark" variant="dark" fixed="top" class="navbar">
        <b-navbar-brand>
          <div>
            <img
              src="../static/pokeball-icon.svg"
              alt="icone"
              class="header-icon"
            />
            <span class="navbar-brand">Pokedev</span>
          </div>
        </b-navbar-brand>
        <b-form-input
            size="sm"
            class="input-search"
            placeholder="Search..."
            v-model="search"
          ></b-form-input>
      </b-navbar>
    </header>
    <main class="mt-5">
      <Pokemons v-if="loading" :search="search" />
    </main>
  </div>
</template>

<script>
import axios from "axios"
import Pokemons from "../components/Pokemons"
import mapState from "vuex"

export default {
  name: 'index',
  components: { Pokemons },
  data() {
    return {
      loading: false,
      search: '',
    }
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150").then(response => {
      if (response) {
        this.$store.dispatch('pokedev/getPokemons', response.data.results)
        this.loading = true
      }
    })
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap");

:root {
  --font: "Nunito", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font);
}

.container-app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
}

.navbar {
  display: flex;
  justify-content: space-between;
}

.navbar div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar .header-icon {
  width: 3.125rem;
  height: 3.125rem;
}

.navbar .navbar-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.input-search {
  border-radius: 0.3125rem;
  width: 15.625rem;
}

.button-search {
  border-radius: 0.3125rem 0 0 0.3125rem;
}

#btn-back-to-top {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  display: none;
}

main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>