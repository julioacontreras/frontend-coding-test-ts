import { PokemonDetails } from '../types/pokemon-details'

const getPokemonDetails = async (url: string): Promise<PokemonDetails> => {
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export default getPokemonDetails
