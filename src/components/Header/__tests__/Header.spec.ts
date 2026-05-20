import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

const defaultProps = {
  title: 'Nayra UI',
  subtitle: 'Design System',
  badgeText: 'v1.0.0',
}

const mountHeader = (props = {}) => mount(Header, {
  props: { ...defaultProps, ...props }
})

describe('Header', () => {
  it('renderiza el elemento <header>', () => {
    const wrapper = mountHeader()
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('muestra el título', () => {
    const wrapper = mountHeader({ title: 'Mi Librería' })
    expect(wrapper.find('h1').text()).toBe('Mi Librería')
  })

  it('muestra el subtítulo', () => {
    const wrapper = mountHeader({ subtitle: 'Componentes Vue 3' })
    expect(wrapper.find('.c-header__subtitle').text()).toBe('Componentes Vue 3')
  })

  it('muestra el badgeText', () => {
    const wrapper = mountHeader({ badgeText: 'Beta' })
    expect(wrapper.find('.c-header__badge-text').text()).toBe('Beta')
  })

  it('el badge tiene role="status"', () => {
    const wrapper = mountHeader()
    expect(wrapper.find('[role="status"]').exists()).toBe(true)
  })

  it('el badge tiene aria-label con el badgeText', () => {
    const wrapper = mountHeader({ badgeText: 'Stable' })
    expect(wrapper.find('[role="status"]').attributes('aria-label')).toBe('Stable')
  })

  it('renderiza el slot #actions', () => {
    const wrapper = mount(Header, {
      props: defaultProps,
      slots: { actions: '<button data-testid="action-btn">Acción</button>' }
    })
    expect(wrapper.find('[data-testid="action-btn"]').exists()).toBe(true)
  })

  it('el SVG del logo tiene aria-hidden="true"', () => {
    const wrapper = mountHeader()
    expect(wrapper.find('svg').attributes('aria-hidden')).toBe('true')
  })
})
