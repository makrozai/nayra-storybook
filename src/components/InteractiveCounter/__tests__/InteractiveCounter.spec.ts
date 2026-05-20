import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InteractiveCounter from '../InteractiveCounter.vue'

const mountCounter = (props = {}) => mount(InteractiveCounter, { props })

describe('InteractiveCounter', () => {
  it('renderiza sin errores', () => {
    const wrapper = mountCounter()
    expect(wrapper.find('[role="region"]').exists()).toBe(true)
  })

  it('muestra el valor inicial en 0 por defecto', () => {
    const wrapper = mountCounter()
    expect(wrapper.find('.c-counter-display__value').text()).toBe('0')
  })

  it('muestra el valor inicial personalizado', () => {
    const wrapper = mountCounter({ initialValue: 5 })
    expect(wrapper.find('.c-counter-display__value').text()).toBe('5')
  })

  it('muestra el título por defecto', () => {
    const wrapper = mountCounter()
    expect(wrapper.find('.c-card__title').text()).toBeTruthy()
  })

  it('muestra el título personalizado', () => {
    const wrapper = mountCounter({ title: 'Mi Contador' })
    expect(wrapper.find('.c-card__title').text()).toBe('Mi Contador')
    expect(wrapper.find('[role="region"]').attributes('aria-label')).toBe('Mi Contador')
  })

  it('muestra la descripción personalizada', () => {
    const wrapper = mountCounter({ description: 'Descripción custom' })
    expect(wrapper.find('.c-card__description').text()).toBe('Descripción custom')
  })

  it('incrementa el contador al emitir el evento "increment"', async () => {
    const wrapper = mountCounter()
    await wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.find('.c-counter-display__value').text()).toBe('1')
  })

  it('decrementa el contador al emitir el evento "decrement"', async () => {
    const wrapper = mountCounter({ initialValue: 3 })
    await wrapper.findAll('button')[0].trigger('click')
    expect(wrapper.find('.c-counter-display__value').text()).toBe('2')
  })

  it('resetea el contador al emitir el evento "reset"', async () => {
    const wrapper = mountCounter({ initialValue: 5 })
    await wrapper.findAll('button')[2].trigger('click') // increment
    await wrapper.findAll('button')[2].trigger('click') // increment
    await wrapper.findAll('button')[1].trigger('click') // reset
    expect(wrapper.find('.c-counter-display__value').text()).toBe('5')
  })

  it('emite el evento "change" con el nuevo valor al incrementar', async () => {
    const wrapper = mountCounter()
    await wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change')![0]).toEqual([1])
  })

  it('el display tiene aria-live="polite"', () => {
    const wrapper = mountCounter()
    expect(wrapper.find('.c-counter-display__value').attributes('aria-live')).toBe('polite')
  })

  it('aplica clase "neutral" en valor 0', () => {
    const wrapper = mountCounter()
    expect(wrapper.find('.c-counter-display__value').classes()).toContain('c-counter-display__value--neutral')
  })

  it('aplica clase "positive" cuando count > 0', async () => {
    const wrapper = mountCounter()
    await wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.find('.c-counter-display__value').classes()).toContain('c-counter-display__value--positive')
  })

  it('aplica clase "negative" cuando count < 0', async () => {
    const wrapper = mountCounter()
    await wrapper.findAll('button')[0].trigger('click')
    expect(wrapper.find('.c-counter-display__value').classes()).toContain('c-counter-display__value--negative')
  })
})
