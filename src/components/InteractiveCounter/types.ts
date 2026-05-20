export interface InteractiveCounterProps {
  initialValue?: number
  title?: string
  description?: string
}

export interface InteractiveCounterEmits {
  (e: 'change', value: number): void
}
