import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import FeatureCard from '../FeatureCard.vue'
import type { FeatureCardColor } from '../types'

const NaIconStub = defineComponent({
  name: 'NaIcon',
  props: ['source', 'icon', 'type', 'size', 'ariaLabel'],
  template: '<div class="na-icon-stub" :data-icon="icon" :data-source="source" :data-type="type"></div>'
})

const mountCard = (props: { title: string; description: string; color: FeatureCardColor; icon?: string; iconSource?: any; iconType?: any }) =>
  mount(FeatureCard, {
    props,
    global: { stubs: { NaIcon: NaIconStub } }
  })

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

  describe('Soporte de NaIcon', () => {
    it('no renderiza NaIcon cuando el prop icon no está presente', () => {
      const wrapper = mountCard({ title: 'T', description: 'D', color: 'indigo' })
      expect(wrapper.find('.na-icon-stub').exists()).toBe(false)
    })

    it('renderiza NaIcon cuando el prop icon está presente', () => {
      const wrapper = mountCard({ title: 'T', description: 'D', color: 'indigo', icon: 'star' })
      const icon = wrapper.find('.na-icon-stub')
      expect(icon.exists()).toBe(true)
      expect(icon.attributes('data-icon')).toBe('star')
    })

    it('pasa los props iconSource e iconType correctamente al NaIcon', () => {
      const wrapper = mountCard({
        title: 'T', description: 'D', color: 'indigo',
        icon: 'bolt', iconSource: 'svg', iconType: 'regular'
      })
      const icon = wrapper.find('.na-icon-stub')
      expect(icon.attributes('data-source')).toBe('svg')
      expect(icon.attributes('data-type')).toBe('regular')
    })

    it('usa iconSource="font" y iconType="solid" como defaults', () => {
      const wrapper = mountCard({ title: 'T', description: 'D', color: 'indigo', icon: 'user' })
      const icon = wrapper.find('.na-icon-stub')
      expect(icon.attributes('data-source')).toBe('font')
      expect(icon.attributes('data-type')).toBe('solid')
    })
  })
})
