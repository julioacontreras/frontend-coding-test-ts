<template>
  <div class="justify-center w-full mt-10 px-3">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">Pokemons</h1>
    <div class="mt-4">
      <section class="w-full">
        <PokemonList
          v-bind:pokemons="pokemons"
          v-on:on-change="onChange($event as unknown as Pokemon)"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Pokemon } from '../types/pokemon'
import PokemonList from '../components/pokemon-list/index.vue'
import getPokemons from '../api/getPokemons'
import { execEvent } from '../eventBus'

const router = useRouter()
const pokemons = ref<Pokemon[]>([])

const onChange = (pokemon: Pokemon) => {
  router.push({ name: 'Details', query: { urlFetch: pokemon.url } })
}

onMounted(async () => {
  try {
    pokemons.value = await getPokemons()
    execEvent('on-success', 'Pokemons loaded!')
  } catch (err) {
    execEvent('on-error', 'Ops, something happens! Try more later.')
  }
})
</script>
