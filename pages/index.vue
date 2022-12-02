<template>
  <div class="container-app" v-cloak>
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
        <b-nav-form>
          <b-button size="sm" class="my-2 button-search" type="submit"
            ><b-icon-search></b-icon-search
          ></b-button>
          <b-form-input
            size="sm"
            class="input-search"
            placeholder="Search..."
          ></b-form-input>
        </b-nav-form>
      </b-navbar>
    </header>
    <main class="mt-5">
      <Pokemons />
    </main>
  </div>
</template>

<script>
import axios from "axios"
import { BIconSearch } from "bootsrap-vue"

export default {
  name: 'index',
  components: { BIconSearch },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150").then(response => {
      this.$store.dispatch('getPokemons', response.data.results)
    })
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap");

:root {
  --font: "Nunito", sans-serif;
}

.v-cloack {
  display: none;
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
  width: 50px;
  height: 50px;
}

.navbar .navbar-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.input-search {
  border-radius: 0px 5px 5px 0px;
}

.button-search {
  border-radius: 5px 0px 0px 5px;
}

#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
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