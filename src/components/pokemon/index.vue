<template>
  <button
    class="capitalize hover:text-link w-full"
    v-on:click="$emit('on-change', props.pokemon)"
  >
    {{ pokemon.name }}
  </button>
</template>
<script setup lang="ts">
import { Pokemon } from '../../types/pokemon'

defineEmits<{
  (e: 'on-change', pokemon: Pokemon): void
}>()

const props = defineProps<{
  pokemon: Pokemon
}>()
</script>
