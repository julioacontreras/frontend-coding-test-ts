<template>
  <ul
    class="w-full grid grid-cols-4 gap-2 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white"
  >
    <li
      v-for="(pokemon, idx) in pokemons"
      v-bind:key="idx"
      class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg border-gray-600"
    >
      <PokemonComponent
        v-bind:pokemon="pokemon"
        v-on:on-change="$emit('on-change', $event)"
      ></PokemonComponent>
    </li>
  </ul>
</template>

<script setup lang="ts">
import PokemonComponent from '../pokemon/index.vue'
import { Pokemon } from '../../types/pokemon'

defineEmits<{
  (e: 'on-change', pokemon: Pokemon): void
}>()

defineProps<{
  pokemons: Pokemon[]
}>()
</script>
