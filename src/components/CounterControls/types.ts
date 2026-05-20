export interface CounterControlsProps {
  disabled?: boolean
}

export interface CounterControlsEmits {
  (e: 'decrement' | 'reset' | 'increment'): void
}
