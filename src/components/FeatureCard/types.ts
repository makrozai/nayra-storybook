export type FeatureCardColor = 'indigo' | 'purple' | 'pink' | 'teal' | 'amber' | 'emerald' | 'rose' | 'sky'

export interface FeatureCardProps {
  title: string
  description: string
  color: FeatureCardColor
  icon?: string
  iconSource?: 'font' | 'svg'
  iconType?: 'solid' | 'regular' | 'brands' | 'colorful'
}
