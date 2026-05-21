import{i as e}from"./preload-helper-CYnhYu8d.js";import{N as t,P as n}from"./iframe-CrbqLvEx.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),r={title:`Molecules/FeatureCard`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:"Tarjeta de características que muestra una tecnología o funcionalidad con un título, descripción y un icono de color semántico. El prop `color` acepta valores predefinidos que se mapean internamente a clases CSS."}}},argTypes:{title:{description:`Título principal de la tarjeta.`,control:{type:`text`},table:{category:`Propiedades`}},description:{description:`Texto descriptivo de la característica.`,control:{type:`text`},table:{category:`Propiedades`}},color:{description:`Color semántico del icono.`,control:{type:`select`},options:[`indigo`,`purple`,`pink`,`teal`,`amber`,`emerald`,`rose`,`sky`],table:{category:`Propiedades`}}}},i={args:{title:`Característica`,description:`Descripción general de una característica del proyecto.`,color:`indigo`}},a={args:{title:`Vue 3`,description:`Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.`,color:`indigo`}},o={args:{title:`Vitest`,description:`Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.`,color:`purple`}},s={args:{title:`Tailwind CSS`,description:`Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.`,color:`pink`}},c={args:{title:`TypeScript`,description:`Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.`,color:`teal`}},l={render:()=>({template:`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Indigo" description="Color indigo" color="indigo" />
        <NaFeatureCard title="Purple" description="Color purple" color="purple" />
        <NaFeatureCard title="Pink" description="Color pink" color="pink" />
        <NaFeatureCard title="Teal" description="Color teal" color="teal" />
        <NaFeatureCard title="Amber" description="Color amber" color="amber" />
        <NaFeatureCard title="Emerald" description="Color emerald" color="emerald" />
        <NaFeatureCard title="Rose" description="Color rose" color="rose" />
        <NaFeatureCard title="Sky" description="Color sky" color="sky" />
      </div>
    `}),parameters:{docs:{description:{story:`Todas las variantes de color disponibles sin icono explícito (solo el bullet decorativo).`}}}},u={args:{title:`Icono FontAwesome`,description:`FeatureCard utilizando un icono de fuente (FontAwesome) pasando el prop icon.`,color:`emerald`,icon:`star`,iconSource:`font`}},d={args:{title:`Icono SVG Local`,description:`FeatureCard utilizando un icono SVG cargado desde los assets locales (src/assets/icons).`,color:`amber`,icon:`bolt`,iconSource:`svg`,iconType:`solid`}},f={render:()=>({template:`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Vue 3" description="Framework progresivo" color="indigo" icon="tech-vue" iconSource="svg" iconType="colorful" />
        <NaFeatureCard title="Rápido" description="Rendimiento óptimo" color="purple" icon="bolt" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Favoritos" description="Guarda tus preferencias" color="pink" icon="star" iconSource="font" />
        <NaFeatureCard title="Suma" description="Añade elementos" color="teal" icon="plus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Resta" description="Quita elementos" color="amber" icon="minus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Actualizar" description="Sincroniza datos" color="emerald" icon="arrow-path" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Personalizado" description="Icono SVG Outline" color="rose" icon="bolt" iconSource="svg" iconType="regular" />
        <NaFeatureCard title="Estrella" description="Icono SVG" color="sky" icon="custom-star" iconSource="svg" iconType="regular" />
      </div>
    `}),parameters:{docs:{description:{story:`Todas las variantes de color con diferentes tipos de iconos (font y svg).`}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Característica',
    description: 'Descripción general de una característica del proyecto.',
    color: 'indigo'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Vue 3',
    description: 'Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.',
    color: 'indigo'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Vitest',
    description: 'Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.',
    color: 'purple'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tailwind CSS',
    description: 'Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.',
    color: 'pink'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'TypeScript',
    description: 'Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.',
    color: 'teal'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Indigo" description="Color indigo" color="indigo" />
        <NaFeatureCard title="Purple" description="Color purple" color="purple" />
        <NaFeatureCard title="Pink" description="Color pink" color="pink" />
        <NaFeatureCard title="Teal" description="Color teal" color="teal" />
        <NaFeatureCard title="Amber" description="Color amber" color="amber" />
        <NaFeatureCard title="Emerald" description="Color emerald" color="emerald" />
        <NaFeatureCard title="Rose" description="Color rose" color="rose" />
        <NaFeatureCard title="Sky" description="Color sky" color="sky" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de color disponibles sin icono explícito (solo el bullet decorativo).'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Icono FontAwesome',
    description: 'FeatureCard utilizando un icono de fuente (FontAwesome) pasando el prop icon.',
    color: 'emerald',
    icon: 'star',
    iconSource: 'font'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Icono SVG Local',
    description: 'FeatureCard utilizando un icono SVG cargado desde los assets locales (src/assets/icons).',
    color: 'amber',
    icon: 'bolt',
    iconSource: 'svg',
    iconType: 'solid'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <NaFeatureCard title="Vue 3" description="Framework progresivo" color="indigo" icon="tech-vue" iconSource="svg" iconType="colorful" />
        <NaFeatureCard title="Rápido" description="Rendimiento óptimo" color="purple" icon="bolt" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Favoritos" description="Guarda tus preferencias" color="pink" icon="star" iconSource="font" />
        <NaFeatureCard title="Suma" description="Añade elementos" color="teal" icon="plus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Resta" description="Quita elementos" color="amber" icon="minus" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Actualizar" description="Sincroniza datos" color="emerald" icon="arrow-path" iconSource="svg" iconType="solid" />
        <NaFeatureCard title="Personalizado" description="Icono SVG Outline" color="rose" icon="bolt" iconSource="svg" iconType="regular" />
        <NaFeatureCard title="Estrella" description="Icono SVG" color="sky" icon="custom-star" iconSource="svg" iconType="regular" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes de color con diferentes tipos de iconos (font y svg).'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Vue3Feature`,`VitestFeature`,`TailwindFeature`,`TypeScriptFeature`,`AllColors`,`WithFontIcon`,`WithSvgIcon`,`AllColorsWithIcons`]}))();export{l as AllColors,f as AllColorsWithIcons,i as Default,s as TailwindFeature,c as TypeScriptFeature,o as VitestFeature,a as Vue3Feature,u as WithFontIcon,d as WithSvgIcon,p as __namedExportsOrder,r as default};