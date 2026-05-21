import{F as f}from"./FeatureCard-weKwSuj0.js";import"./vue.esm-bundler-XVrXqM2o.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"Molecules/FeatureCard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"Tarjeta de características que muestra una tecnología o funcionalidad con un título, descripción y un icono de color semántico. El prop `color` acepta valores predefinidos que se mapean internamente a clases CSS."}}},argTypes:{title:{description:"Título principal de la tarjeta.",control:{type:"text"},table:{category:"Propiedades"}},description:{description:"Texto descriptivo de la característica.",control:{type:"text"},table:{category:"Propiedades"}},color:{description:"Color semántico del icono.",control:{type:"select"},options:["indigo","purple","pink","teal","amber","emerald","rose","sky"],table:{category:"Propiedades"}}}},e={args:{title:"Característica",description:"Descripción general de una característica del proyecto.",color:"indigo"}},r={args:{title:"Vue 3",description:"Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.",color:"indigo"}},o={args:{title:"Vitest",description:"Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.",color:"purple"}},a={args:{title:"Tailwind CSS",description:"Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.",color:"pink"}},t={args:{title:"TypeScript",description:"Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.",color:"teal"}},i={render:()=>({template:`
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
    `}),parameters:{docs:{description:{story:"Todas las variantes de color disponibles."}}}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Característica',
    description: 'Descripción general de una característica del proyecto.',
    color: 'indigo'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Vue 3',
    description: 'Framework progresivo para construir interfaces de usuario modernas con Composition API y reactividad optimizada.',
    color: 'indigo'
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,C;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Vitest',
    description: 'Framework de testing ultrarrápido impulsado por Vite con soporte nativo para TypeScript y ESM.',
    color: 'purple'
  }
}`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var g,y,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Tailwind CSS',
    description: 'Framework de utilidades CSS que permite diseñar interfaces rápidamente sin salir del HTML.',
    color: 'pink'
  }
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var S,k,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'TypeScript',
    description: 'Superset tipado de JavaScript que mejora la productividad y previene errores en tiempo de compilación.',
    color: 'teal'
  }
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,N,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        story: 'Todas las variantes de color disponibles.'
      }
    }
  }
}`,...(b=(N=i.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const A=["Default","Vue3Feature","VitestFeature","TailwindFeature","TypeScriptFeature","AllColors"];export{i as AllColors,e as Default,a as TailwindFeature,t as TypeScriptFeature,o as VitestFeature,r as Vue3Feature,A as __namedExportsOrder,q as default};
