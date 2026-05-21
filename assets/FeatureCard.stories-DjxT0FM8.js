import{F as q}from"./FeatureCard-BS5gsrMi.js";import"./vue.esm-bundler-XVrXqM2o.js";import"./Icon-D4Vn4y43.js";import"./iframe-SOz-uKV8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Molecules/FeatureCard",component:q,tags:["autodocs"],parameters:{docs:{description:{component:"Tarjeta de características que muestra una tecnología o funcionalidad con un título, descripción y un icono de color semántico. El prop `color` acepta valores predefinidos que se mapean internamente a clases CSS."}}},argTypes:{title:{description:"Título principal de la tarjeta.",control:{type:"text"},table:{category:"Propiedades"}},description:{description:"Texto descriptivo de la característica.",control:{type:"text"},table:{category:"Propiedades"}},color:{description:"Color semántico del icono.",control:{type:"select"},options:["indigo","purple","pink","teal","amber","emerald","rose","sky"],table:{category:"Propiedades"}}}},e={args:{title:"Característica",description:"Descripción general de una característica del proyecto.",color:"indigo"}},o={args:{title:"Vue 3",description:"Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.",color:"indigo"}},r={args:{title:"Vitest",description:"Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.",color:"purple"}},t={args:{title:"Tailwind CSS",description:"Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.",color:"pink"}},i={args:{title:"TypeScript",description:"Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.",color:"teal"}},a={render:()=>({template:`
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
    `}),parameters:{docs:{description:{story:"Todas las variantes de color disponibles sin icono explícito (solo el bullet decorativo)."}}}},n={args:{title:"Icono FontAwesome",description:"FeatureCard utilizando un icono de fuente (FontAwesome) pasando el prop icon.",color:"emerald",icon:"star",iconSource:"font"}},s={args:{title:"Icono SVG Local",description:"FeatureCard utilizando un icono SVG cargado desde los assets locales (src/assets/icons).",color:"amber",icon:"bolt",iconSource:"svg",iconType:"solid"}},c={render:()=>({template:`
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
    `}),parameters:{docs:{description:{story:"Todas las variantes de color con diferentes tipos de iconos (font y svg)."}}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Característica',
    description: 'Descripción general de una característica del proyecto.',
    color: 'indigo'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Vue 3',
    description: 'Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.',
    color: 'indigo'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,S,F;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Vitest',
    description: 'Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.',
    color: 'purple'
  }
}`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var y,v,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Tailwind CSS',
    description: 'Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.',
    color: 'pink'
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var N,f,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'TypeScript',
    description: 'Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.',
    color: 'teal'
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,V,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(V=a.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var I,A,z;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Icono FontAwesome',
    description: 'FeatureCard utilizando un icono de fuente (FontAwesome) pasando el prop icon.',
    color: 'emerald',
    icon: 'star',
    iconSource: 'font'
  }
}`,...(z=(A=n.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var P,h,G;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Icono SVG Local',
    description: 'FeatureCard utilizando un icono SVG cargado desde los assets locales (src/assets/icons).',
    color: 'amber',
    icon: 'bolt',
    iconSource: 'svg',
    iconType: 'solid'
  }
}`,...(G=(h=s.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var E,R,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const H=["Default","Vue3Feature","VitestFeature","TailwindFeature","TypeScriptFeature","AllColors","WithFontIcon","WithSvgIcon","AllColorsWithIcons"];export{a as AllColors,c as AllColorsWithIcons,e as Default,t as TailwindFeature,i as TypeScriptFeature,r as VitestFeature,o as Vue3Feature,n as WithFontIcon,s as WithSvgIcon,H as __namedExportsOrder,O as default};
