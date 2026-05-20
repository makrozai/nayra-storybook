import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import IconGallery from '../IconGallery.vue'

// Stub de NaIcon — evita la carga async de SVGs en unit tests
const NaIconStub = defineComponent({
  name: 'NaIcon',
  props: ['source', 'icon', 'type', 'size', 'ariaLabel'],
  render() {
    return h('span', {
      class: 'icon-stub',
      'data-icon': this.icon,
      'data-type': this.type,
    })
  },
})

const mountGallery = () =>
  mount(IconGallery, {
    global: { components: { NaIcon: NaIconStub } },
  })

describe('IconGallery', () => {
  it('renderiza sin errores', () => {
    const wrapper = mountGallery()
    expect(wrapper.find('.c-icon-gallery').exists()).toBe(true)
  })

  it('muestra al menos un icono', () => {
    const wrapper = mountGallery()
    expect(wrapper.findAll('.c-icon-gallery__item').length).toBeGreaterThan(0)
  })

  it('muestra el input de búsqueda con placeholder', () => {
    const wrapper = mountGallery()
    const input = wrapper.find('input[type="search"]')
    expect(input.exists()).toBe(true)
    expect(input.attributes('placeholder')).toBeTruthy()
  })

  it('el input tiene aria-label accesible', () => {
    const wrapper = mountGallery()
    const input = wrapper.find('input[type="search"]')
    expect(input.attributes('aria-label')).toBeTruthy()
  })

  it('muestra el contador total/filtrado', () => {
    const wrapper = mountGallery()
    expect(wrapper.find('.c-icon-gallery__count').exists()).toBe(true)
    expect(wrapper.find('[aria-live="polite"]').exists()).toBe(true)
  })

  it('el contador muestra formato "N / M"', () => {
    const wrapper = mountGallery()
    const count = wrapper.find('.c-icon-gallery__count').text().trim()
    expect(count).toMatch(/\d+ \/ \d+/)
  })

  it('filtra los iconos al escribir en el buscador', async () => {
    const wrapper = mountGallery()
    const totalBefore = wrapper.findAll('.c-icon-gallery__item').length
    await wrapper.find('input[type="search"]').setValue('star')
    const totalAfter = wrapper.findAll('.c-icon-gallery__item').length
    expect(totalAfter).toBeLessThanOrEqual(totalBefore)
    expect(totalAfter).toBeGreaterThan(0)
  })

  it('el contador se actualiza al filtrar', async () => {
    const wrapper = mountGallery()
    const before = wrapper.find('.c-icon-gallery__count').text().trim()
    await wrapper.find('input[type="search"]').setValue('star')
    const after = wrapper.find('.c-icon-gallery__count').text().trim()
    expect(after).not.toBe(before)
  })

  it('muestra mensaje empty cuando no hay resultados', async () => {
    const wrapper = mountGallery()
    await wrapper.find('input[type="search"]').setValue('xzxzxz_inexistente')
    expect(wrapper.find('.c-icon-gallery__empty').exists()).toBe(true)
    expect(wrapper.find('.c-icon-gallery__grid').exists()).toBe(false)
  })

  it('el mensaje empty incluye el término buscado', async () => {
    const wrapper = mountGallery()
    await wrapper.find('input[type="search"]').setValue('termino_raro')
    expect(wrapper.find('.c-icon-gallery__empty').text()).toContain('termino_raro')
  })

  it('muestra el nombre de cada icono', () => {
    const wrapper = mountGallery()
    const names = wrapper.findAll('.c-icon-gallery__name')
    expect(names.length).toBeGreaterThan(0)
    names.forEach(n => expect(n.text().trim()).toBeTruthy())
  })

  it('muestra al menos un badge de variante por icono', () => {
    const wrapper = mountGallery()
    const items = wrapper.findAll('.c-icon-gallery__item')
    items.forEach(item => {
      expect(item.findAll('.c-icon-gallery__badge').length).toBeGreaterThan(0)
    })
  })

  it('restaura los resultados al borrar la búsqueda', async () => {
    const wrapper = mountGallery()
    const input = wrapper.find('input[type="search"]')
    await input.setValue('star')
    const filtered = wrapper.findAll('.c-icon-gallery__item').length
    await input.setValue('')
    const restored = wrapper.findAll('.c-icon-gallery__item').length
    expect(restored).toBeGreaterThan(filtered)
  })

  it('el grid tiene role="list"', () => {
    const wrapper = mountGallery()
    expect(wrapper.find('.c-icon-gallery__grid').attributes('role')).toBe('list')
  })
})
