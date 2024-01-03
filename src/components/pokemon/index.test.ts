// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, describe, it } from 'vitest'
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils'
import PokemonComponent from './index.vue'
import { Pokemon } from '../../types/pokemon'

describe('Pokemon component', () => {
  const build = () => {
    const pokemon: Pokemon = {
      name: 'my-pokemon',
      url: 'my-url',
    }
    return shallowMount(PokemonComponent, {
      props: {
        pokemon,
      },
    })
  }

  it('should mount', () => {
    const wrapper = build()
    expect(wrapper).toBeTruthy()
  })

  it('should check have name in button', () => {
    const wrapper = build()
    expect(wrapper.find('button')).toBeDefined()
    expect(wrapper.find('button').text()).toEqual('my-pokemon')
  })

  it('should be works emit when click the button', async () => {
    const wrapper = build()
    await wrapper.find('button').trigger('click')
    const response = wrapper.emitted()['on-change'][0] as unknown as Pokemon[]
    const pokemon: Pokemon = response[0] as unknown as Pokemon
    expect(pokemon.name).toEqual('my-pokemon')
    expect(pokemon.url).toEqual('my-url')
  })
})
