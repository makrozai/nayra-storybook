import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureCard from '../FeatureCard.vue'
import type { FeatureCardColor } from '../types'

const mountCard = (props: { title: string; description: string; color: FeatureCardColor }) =>
  mount(FeatureCard, { props })

describe('FeatureCard', () => {
  it('renderiza sin errores', () => {
    const wrapper = mountCard({ title: 'Test', description: 'Desc', color: 'indigo' })
    expect(wrapper.find('.c-feature-card').exists()).toBe(true)
  })

  it('muestra el título', () => {
    const wrapper = mountCard({ title: 'Vue 3', description: 'Desc', color: 'indigo' })
    expect(wrapper.find('.c-feature-card__title').text()).toBe('Vue 3')
  })

  it('muestra la descripción', () => {
    const wrapper = mountCard({ title: 'T', description: 'Mi descripción', color: 'teal' })
    expect(wrapper.find('.c-feature-card__description').text()).toContain('Mi descripción')
  })

  it('el icono tiene aria-hidden="true"', () => {
    const wrapper = mountCard({ title: 'T', description: 'D', color: 'indigo' })
    expect(wrapper.find('.c-feature-card__icon').attributes('aria-hidden')).toBe('true')
  })

  const colorMap: Array<[FeatureCardColor, string]> = [
    ['indigo', 'bg-indigo-400'],
    ['purple', 'bg-purple-400'],
    ['pink', 'bg-pink-400'],
    ['teal', 'bg-teal-400'],
    ['amber', 'bg-amber-400'],
    ['emerald', 'bg-emerald-400'],
    ['rose', 'bg-rose-400'],
    ['sky', 'bg-sky-400'],
  ]

  colorMap.forEach(([color, expectedClass]) => {
    it(`aplica la clase "${expectedClass}" cuando color="${color}"`, () => {
      const wrapper = mountCard({ title: 'T', description: 'D', color })
      expect(wrapper.find('.c-feature-card__icon').classes()).toContain(expectedClass)
    })
  })
})
