export interface IconProps {
  /** Origen del icono: 'font' para librería de fuentes, 'svg' para recursos locales */
  source?: 'font' | 'svg'
  /** Nombre del icono (ej. 'house' en FontAwesome, o nombre exacto del archivo SVG) */
  icon: string
  /** Variante del icono */
  type?: 'solid' | 'regular' | 'brands' | 'colorful'
  /** Tamaño en píxeles. Si se omite, hereda el tamaño de fuente del padre (1em) */
  size?: number
  /** Etiqueta accesible para lectores de pantalla */
  ariaLabel?: string
  /** Grados de rotación (ej. 90, 180) */
  rotate?: number
}
