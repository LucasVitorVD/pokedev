export const state = () => ({
  pokemons: []
})

export const mutations = {
  getPokemons(state, payload) {
    state.pokemons = payload
  }
}

export const actions = {
  getPokemons(context, payload) {
    context.commit("getPokemons", payload)
  }
}
