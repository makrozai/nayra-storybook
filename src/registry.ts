import type { Component } from 'vue'
import Button from './components/Button/Button.vue'
import Icon from './components/Icon/Icon.vue'
import IconGallery from './components/Icon/IconGallery.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import FeatureCard from './components/FeatureCard/FeatureCard.vue'
import InteractiveCounter from './components/InteractiveCounter/InteractiveCounter.vue'
import CounterControls from './components/CounterControls/CounterControls.vue'

export const componentRegistry = {
  Button,
  Icon,
  IconGallery,
  Header,
  Footer,
  HeroSection,
  FeatureCard,
  InteractiveCounter,
  CounterControls,
} as const satisfies Record<string, Component>

export type NayraComponentName = keyof typeof componentRegistry
