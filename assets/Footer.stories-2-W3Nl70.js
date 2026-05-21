import{i as e}from"./preload-helper-CYnhYu8d.js";import{L as t,R as n}from"./iframe-CrbqLvEx.js";var r,i,a,o,s;e((()=>{n(),r={title:`Organisms/Footer`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Pie de página de la aplicación que muestra información de copyright y una lista configurable de enlaces de navegación. Admite una cantidad flexible de enlaces y se adapta a diferentes necesidades de contenido, desde un solo enlace hasta múltiples recursos externos.`}}},argTypes:{copyright:{description:`Texto de copyright que se muestra en el pie de página. Incluye típicamente el año y el nombre del autor o la organización.`,control:{type:`text`},table:{category:`Propiedades`}},links:{description:"Lista de enlaces de navegación del pie de página. Cada enlace es un objeto con las propiedades `text` (texto visible) y `url` (dirección de destino).",control:{type:`object`},table:{category:`Propiedades`}}}},i={args:{copyright:`© 2026 Create Antigravity. Todos los derechos reservados.`,links:[{text:`GitHub`,url:`https://github.com`},{text:`Documentación`,url:`https://vuejs.org`}]}},a={args:{copyright:`© 2026 Mi Proyecto.`,links:[{text:`Repositorio`,url:`https://github.com`}]}},o={args:{copyright:`© 2026 Create Antigravity. Todos los derechos reservados.`,links:[{text:`GitHub`,url:`https://github.com`},{text:`Documentación`,url:`https://vuejs.org`},{text:`Comunidad`,url:`https://discord.gg/vue`},{text:`Blog`,url:`https://blog.vuejs.org`}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    copyright: '© 2026 Create Antigravity. Todos los derechos reservados.',
    links: [{
      text: 'GitHub',
      url: 'https://github.com'
    }, {
      text: 'Documentación',
      url: 'https://vuejs.org'
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    copyright: '© 2026 Mi Proyecto.',
    links: [{
      text: 'Repositorio',
      url: 'https://github.com'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    copyright: '© 2026 Create Antigravity. Todos los derechos reservados.',
    links: [{
      text: 'GitHub',
      url: 'https://github.com'
    }, {
      text: 'Documentación',
      url: 'https://vuejs.org'
    }, {
      text: 'Comunidad',
      url: 'https://discord.gg/vue'
    }, {
      text: 'Blog',
      url: 'https://blog.vuejs.org'
    }]
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`SingleLink`,`ManyLinks`]}))();export{i as Default,o as ManyLinks,a as SingleLink,s as __namedExportsOrder,r as default};