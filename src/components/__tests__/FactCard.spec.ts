import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FactCard from '@/components/FactCard.vue'

describe('FactCard.vue', () => {
  it('renders the title and fact correctly', () => {
    const wrapper = mount(FactCard, {
      props: {
        title: 'Math',
        fact: '2 is the only even prime number.',
      },
    })

    expect(wrapper.text()).toContain('A cool Math Fact')
    expect(wrapper.text()).toContain('2 is the only even prime number.')
  })

  it('emits fetchFact event with the title when button is clicked', async () => {
    const wrapper = mount(FactCard, {
      props: {
        title: 'Date',
        fact: 'On this day',
      },
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    const emitted = wrapper.emitted('fetchFact')
    expect(emitted).toBeTruthy()
    expect(emitted![0]).toEqual(['Date'])
  })
})
