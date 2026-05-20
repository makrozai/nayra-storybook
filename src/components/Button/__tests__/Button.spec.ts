import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

const mountButton = (props = {}) => mount(Button, { props })

describe('Button', () => {
  it('renderiza sin errores', () => {
    const wrapper = mountButton({ label: 'Test' })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renderiza el texto del label', () => {
    const wrapper = mountButton({ label: 'Incrementar' })
    expect(wrapper.find('.c-btn__text').text()).toBe('Incrementar')
  })

  it('no renderiza .c-btn__text cuando label está vacío', () => {
    const wrapper = mountButton()
    expect(wrapper.find('.c-btn__text').exists()).toBe(false)
  })

  it('aplica la clase c-btn--increment con variant="increment"', () => {
    const wrapper = mountButton({ variant: 'increment' })
    expect(wrapper.find('button').classes()).toContain('c-btn--increment')
  })

  it('aplica la clase c-btn--decrement con variant="decrement"', () => {
    const wrapper = mountButton({ variant: 'decrement' })
    expect(wrapper.find('button').classes()).toContain('c-btn--decrement')
  })

  it('aplica la clase c-btn--reset por defecto', () => {
    const wrapper = mountButton()
    expect(wrapper.find('button').classes()).toContain('c-btn--reset')
  })

  it('emite el evento "click" al hacer click', async () => {
    const wrapper = mountButton({ label: 'Click' })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('NO emite "click" cuando está deshabilitado', async () => {
    const wrapper = mountButton({ disabled: true, label: 'Click' })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('el botón tiene atributo disabled cuando disabled=true', () => {
    const wrapper = mountButton({ disabled: true })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('usa ariaLabel como aria-label cuando se provee', () => {
    const wrapper = mountButton({ ariaLabel: 'Mi etiqueta', label: 'Label' })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Mi etiqueta')
  })

  it('usa label como aria-label cuando no hay ariaLabel', () => {
    const wrapper = mountButton({ label: 'Reiniciar' })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Reiniciar')
  })

  it('NO tiene aria-label cuando ni ariaLabel ni label son provistos', () => {
    const wrapper = mountButton()
    const ariaLabel = wrapper.find('button').attributes('aria-label')
    expect(!ariaLabel || ariaLabel === '').toBe(true)
  })

  it('tiene type="button" para evitar submit accidental', () => {
    const wrapper = mountButton()
    expect(wrapper.find('button').attributes('type')).toBe('button')
  })

  it('renderiza el slot #icon', () => {
    const wrapper = mount(Button, {
      slots: { icon: '<svg data-testid="icon" />' }
    })
    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
  })

  it('NO emite doble click con teclado (comportamiento nativo del browser)', async () => {
    const wrapper = mountButton({ label: 'Test' })
    // El button nativo ya maneja Enter/Space — no debe haber @keydown redundante
    await wrapper.find('button').trigger('keydown', { key: 'Enter' })
    // No debe emitir 'click' desde keydown (solo desde el evento click nativo)
    const emitted = wrapper.emitted('click')
    expect(emitted).toBeUndefined()
  })
})
