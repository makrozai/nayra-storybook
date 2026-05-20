import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

const defaultLinks = [
  { text: 'Documentación', url: 'https://docs.example.com' },
  { text: 'GitHub', url: 'https://github.com/example' },
]

const mountFooter = (props = {}) => mount(Footer, {
  props: { copyright: '© 2025 Nayra UI', links: defaultLinks, ...props }
})

describe('Footer', () => {
  it('renderiza el elemento <footer>', () => {
    const wrapper = mountFooter()
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('muestra el texto de copyright', () => {
    const wrapper = mountFooter({ copyright: '© 2025 Test Corp' })
    expect(wrapper.text()).toContain('© 2025 Test Corp')
  })

  it('renderiza el número correcto de enlaces', () => {
    const wrapper = mountFooter()
    expect(wrapper.findAll('a')).toHaveLength(defaultLinks.length)
  })

  it('cada enlace tiene el href correcto', () => {
    const wrapper = mountFooter()
    const links = wrapper.findAll('a')
    links.forEach((link, i) => {
      expect(link.attributes('href')).toBe(defaultLinks[i].url)
    })
  })

  it('cada enlace muestra el texto correcto', () => {
    const wrapper = mountFooter()
    const links = wrapper.findAll('a')
    links.forEach((link, i) => {
      expect(link.text()).toBe(defaultLinks[i].text)
    })
  })

  it('los enlaces abren en nueva pestaña (target="_blank")', () => {
    const wrapper = mountFooter()
    wrapper.findAll('a').forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
    })
  })

  it('los enlaces tienen rel="noopener noreferrer"', () => {
    const wrapper = mountFooter()
    wrapper.findAll('a').forEach(link => {
      expect(link.attributes('rel')).toContain('noopener')
      expect(link.attributes('rel')).toContain('noreferrer')
    })
  })

  it('los enlaces tienen aria-label accesible', () => {
    const wrapper = mountFooter()
    wrapper.findAll('a').forEach(link => {
      expect(link.attributes('aria-label')).toBeTruthy()
    })
  })

  it('usa link.url como key (no produce duplicados de DOM)', () => {
    const wrapper = mountFooter()
    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    const unique = new Set(hrefs)
    expect(hrefs.length).toBe(unique.size)
  })

  it('renderiza sin enlaces', () => {
    const wrapper = mountFooter({ links: [] })
    expect(wrapper.findAll('a')).toHaveLength(0)
  })
})
