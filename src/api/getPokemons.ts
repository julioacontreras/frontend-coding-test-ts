import { Pokemon } from '../types/pokemon'

const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const result = await response.json()
  return result.results
}

export default getPokemons
