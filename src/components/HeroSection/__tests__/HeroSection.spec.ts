import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

const defaultProps = {
  title: 'Sistema de Diseño',
  highlight: 'Escalable',
  description: 'Componentes listos para producción.',
  versionBadge: 'v1.0.0',
}

const mountHero = (props = {}) => mount(HeroSection, {
  props: { ...defaultProps, ...props }
})

describe('HeroSection', () => {
  it('renderiza el elemento <section>', () => {
    const wrapper = mountHero()
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('la sección tiene aria-labelledby apuntando al título', () => {
    const wrapper = mountHero()
    const section = wrapper.find('section')
    const titleId = wrapper.find('h2').attributes('id')
    expect(section.attributes('aria-labelledby')).toBe(titleId)
  })

  it('muestra el título', () => {
    const wrapper = mountHero({ title: 'Descubre' })
    expect(wrapper.find('h2').text()).toContain('Descubre')
  })

  it('muestra el highlight', () => {
    const wrapper = mountHero({ highlight: 'Arquitectura BEM' })
    expect(wrapper.find('.c-hero__highlight').text()).toContain('Arquitectura BEM')
  })

  it('muestra la descripción', () => {
    const wrapper = mountHero({ description: 'Mi descripción especial' })
    expect(wrapper.find('.c-hero__description').text()).toContain('Mi descripción especial')
  })

  it('muestra el versionBadge', () => {
    const wrapper = mountHero({ versionBadge: 'Beta 2.0' })
    expect(wrapper.find('.c-hero__badge').text()).toContain('Beta 2.0')
  })

  it('renderiza el slot por defecto', () => {
    const wrapper = mount(HeroSection, {
      props: defaultProps,
      slots: { default: '<ul data-testid="features"><li>Feature 1</li></ul>' }
    })
    expect(wrapper.find('[data-testid="features"]').exists()).toBe(true)
  })
})
