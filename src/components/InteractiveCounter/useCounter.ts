import { ref, computed, watch } from 'vue'

export function useCounter(getInitialValue: () => number, emit: (event: 'change', value: number) => void) {
  const count = ref<number>(getInitialValue())

  // Sincronizar valor si el prop cambia externamente
  watch(getInitialValue, (newVal) => {
    count.value = newVal
  })

  const isPositive = computed(() => count.value > 0)
  const isNegative = computed(() => count.value < 0)

  const valueClass = computed(() => {
    if (isPositive.value) return 'c-counter-display__value--positive'
    if (isNegative.value) return 'c-counter-display__value--negative'
    return 'c-counter-display__value--neutral'
  })

  const indicatorClass = computed(() => {
    if (isPositive.value) return 'c-card__indicator--positive'
    if (isNegative.value) return 'c-card__indicator--negative'
    return 'c-card__indicator--neutral'
  })

  // Manejadores de cambios de estado (prefijo "handle" obligatorio)
  const handleIncrement = (): void => {
    count.value++
    emit('change', count.value)
  }

  const handleDecrement = (): void => {
    count.value--
    emit('change', count.value)
  }

  const handleReset = (): void => {
    count.value = getInitialValue()
    emit('change', count.value)
  }

  return {
    count,
    valueClass,
    indicatorClass,
    handleIncrement,
    handleDecrement,
    handleReset
  }
}
