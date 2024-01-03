<template>
  <div class="flex gap-2 justify-start text-center p-3">
    <div class="w-64">
      <h2 class="text-xl border border-1 rounded-md bg-gray-800 text-white">
        Picture
      </h2>
      <img
        v-bind:src="pokemonDetails?.sprites.back_default"
        class="w-64 object-cover"
      />
    </div>
    <div class="w-64">
      <h2 class="text-xl border border-1 rounded-md bg-gray-800 text-white">
        Abilities
      </h2>
      <div class="flex flex-col text-start text-lg capitalize pt-12">
        <div
          v-for="(ability, idx) in pokemonDetails?.abilities"
          v-bind:key="idx"
        >
          {{ ability.ability.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { PokemonDetails } from '../types/pokemon-details'
import getPokemonDetails from '../api/getPokemonDetails'
import { execEvent } from '../eventBus'

const route = useRoute()
const pokemonDetails = ref<PokemonDetails>()

onMounted(async () => {
  try {
    const url = route.query.urlFetch ? route.query.urlFetch : ''
    pokemonDetails.value = await getPokemonDetails(url as string)
    execEvent('on-success', 'Details loaded!')
  } catch (err) {
    execEvent('on-error', 'Ops, something happens! Try more later.')
  }
})
</script>
