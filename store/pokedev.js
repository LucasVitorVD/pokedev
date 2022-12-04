export const state = () => ({
  pokemons: []
})

export const mutations = {
  getPokemons(state, pokemon) {
    state.pokemons = pokemon
  }
}

export const actions = {
  getPokemons(context, payload) {
    context.commit("getPokemons", payload)
  }
}
