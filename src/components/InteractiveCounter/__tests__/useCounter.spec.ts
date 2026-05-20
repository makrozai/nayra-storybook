import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  const makeEmit = () => vi.fn() as (event: 'change', value: number) => void

  it('inicializa count con el valor del getter', () => {
    const emit = makeEmit()
    const { count } = useCounter(() => 5, emit)
    expect(count.value).toBe(5)
  })

  it('inicializa count en 0 cuando el getter devuelve 0', () => {
    const emit = makeEmit()
    const { count } = useCounter(() => 0, emit)
    expect(count.value).toBe(0)
  })

  it('handleIncrement suma 1 al count', () => {
    const emit = makeEmit()
    const { count, handleIncrement } = useCounter(() => 0, emit)
    handleIncrement()
    expect(count.value).toBe(1)
  })

  it('handleDecrement resta 1 al count', () => {
    const emit = makeEmit()
    const { count, handleDecrement } = useCounter(() => 3, emit)
    handleDecrement()
    expect(count.value).toBe(2)
  })

  it('handleDecrement puede producir valores negativos', () => {
    const emit = makeEmit()
    const { count, handleDecrement } = useCounter(() => 0, emit)
    handleDecrement()
    expect(count.value).toBe(-1)
  })

  it('handleReset vuelve al valor actual del getter', () => {
    const emit = makeEmit()
    const { count, handleIncrement, handleReset } = useCounter(() => 10, emit)
    handleIncrement()
    handleIncrement()
    expect(count.value).toBe(12)
    handleReset()
    expect(count.value).toBe(10)
  })

  it('handleIncrement emite "change" con el nuevo valor', () => {
    const emit = makeEmit()
    const { handleIncrement } = useCounter(() => 0, emit)
    handleIncrement()
    expect(emit).toHaveBeenCalledWith('change', 1)
  })

  it('handleDecrement emite "change" con el nuevo valor', () => {
    const emit = makeEmit()
    const { handleDecrement } = useCounter(() => 5, emit)
    handleDecrement()
    expect(emit).toHaveBeenCalledWith('change', 4)
  })

  it('handleReset emite "change" con el valor inicial', () => {
    const emit = makeEmit()
    const { handleIncrement, handleReset } = useCounter(() => 2, emit)
    handleIncrement()
    handleReset()
    expect(emit).toHaveBeenLastCalledWith('change', 2)
  })

  it('valueClass es "neutral" en 0', () => {
    const emit = makeEmit()
    const { valueClass } = useCounter(() => 0, emit)
    expect(valueClass.value).toBe('c-counter-display__value--neutral')
  })

  it('valueClass es "positive" cuando count > 0', () => {
    const emit = makeEmit()
    const { handleIncrement, valueClass } = useCounter(() => 0, emit)
    handleIncrement()
    expect(valueClass.value).toBe('c-counter-display__value--positive')
  })

  it('valueClass es "negative" cuando count < 0', () => {
    const emit = makeEmit()
    const { handleDecrement, valueClass } = useCounter(() => 0, emit)
    handleDecrement()
    expect(valueClass.value).toBe('c-counter-display__value--negative')
  })

  it('indicatorClass cambia según el valor', () => {
    const emit = makeEmit()
    const { indicatorClass, handleIncrement, handleDecrement, handleReset } = useCounter(() => 0, emit)
    expect(indicatorClass.value).toBe('c-card__indicator--neutral')
    handleIncrement()
    expect(indicatorClass.value).toBe('c-card__indicator--positive')
    handleDecrement()
    handleDecrement()
    expect(indicatorClass.value).toBe('c-card__indicator--negative')
    handleReset()
    expect(indicatorClass.value).toBe('c-card__indicator--neutral')
  })

  it('el getter reactivo actualiza count cuando cambia', async () => {
    const emit = makeEmit()
    const initial = ref(0)
    const { count } = useCounter(() => initial.value, emit)
    expect(count.value).toBe(0)
    initial.value = 42
    // Esperar al siguiente tick del watcher
    await new Promise(r => setTimeout(r, 0))
    expect(count.value).toBe(42)
  })

  it('handleReset usa el valor actualizado del getter', async () => {
    const emit = makeEmit()
    const initial = ref(0)
    const { handleIncrement, handleReset, count } = useCounter(() => initial.value, emit)
    handleIncrement()
    handleIncrement()
    initial.value = 10
    await new Promise(r => setTimeout(r, 0))
    handleReset()
    expect(count.value).toBe(10)
  })
})
