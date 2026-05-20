import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterControls from '../CounterControls.vue'

const mountControls = (props = {}) => mount(CounterControls, {
  props,
  global: {
    // Button usa <button> nativo — no requiere stub
  }
})

describe('CounterControls', () => {
  it('renderiza sin errores', () => {
    const wrapper = mountControls()
    expect(wrapper.find('[role="group"]').exists()).toBe(true)
  })

  it('renderiza exactamente 3 botones', () => {
    const wrapper = mountControls()
    expect(wrapper.findAll('button')).toHaveLength(3)
  })

  it('el grupo tiene aria-label accesible', () => {
    const wrapper = mountControls()
    expect(wrapper.find('[role="group"]').attributes('aria-label')).toBeTruthy()
  })

  it('emite "decrement" al pulsar el primer botón', async () => {
    const wrapper = mountControls()
    await wrapper.findAll('button')[0].trigger('click')
    expect(wrapper.emitted('decrement')).toHaveLength(1)
  })

  it('emite "reset" al pulsar el segundo botón', async () => {
    const wrapper = mountControls()
    await wrapper.findAll('button')[1].trigger('click')
    expect(wrapper.emitted('reset')).toHaveLength(1)
  })

  it('emite "increment" al pulsar el tercer botón', async () => {
    const wrapper = mountControls()
    await wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.emitted('increment')).toHaveLength(1)
  })

  it('con disabled=true, los botones no emiten eventos', async () => {
    const wrapper = mountControls({ disabled: true })
    for (const btn of wrapper.findAll('button')) {
      await btn.trigger('click')
    }
    expect(wrapper.emitted('decrement')).toBeUndefined()
    expect(wrapper.emitted('reset')).toBeUndefined()
    expect(wrapper.emitted('increment')).toBeUndefined()
  })

  it('con disabled=true, todos los botones tienen atributo disabled', () => {
    const wrapper = mountControls({ disabled: true })
    wrapper.findAll('button').forEach(btn => {
      expect(btn.attributes('disabled')).toBeDefined()
    })
  })

  it('con disabled=false, los botones NO están deshabilitados', () => {
    const wrapper = mountControls({ disabled: false })
    wrapper.findAll('button').forEach(btn => {
      expect(btn.attributes('disabled')).toBeUndefined()
    })
  })
})
