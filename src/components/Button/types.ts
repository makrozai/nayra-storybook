/**
 * @property {string} [label] - Texto visible dentro del botón (opcional si se usa icono o slot).
 * @property {'decrement' | 'reset' | 'increment'} [variant='reset'] - Variante visual y funcional que define los colores de foco y hover.
 * @property {boolean} [disabled=false] - Indica si el botón se encuentra inactivo y no responde a interacciones.
 * @property {string} [ariaLabel] - Etiqueta descriptiva para lectores de pantalla.
 */
export interface ButtonProps {
  label?: string
  variant?: 'decrement' | 'reset' | 'increment'
  disabled?: boolean
  ariaLabel?: string
}

export interface ButtonEmits {
  (e: 'click'): void
}
