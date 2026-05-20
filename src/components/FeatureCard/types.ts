export type FeatureCardColor = 'indigo' | 'purple' | 'pink' | 'teal' | 'amber' | 'emerald' | 'rose' | 'sky'

export interface FeatureCardProps {
  title: string
  description: string
  color: FeatureCardColor
}
