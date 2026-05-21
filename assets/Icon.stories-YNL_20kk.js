import{i as e}from"./preload-helper-CYnhYu8d.js";import{H as t,U as n,V as r,W as i}from"./iframe-CrbqLvEx.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),t(),a={title:`Atoms/Icon`,component:n,tags:[`autodocs`],argTypes:{source:{control:`radio`,options:[`font`,`svg`],description:`Origen del icono (fuente externa FontAwesome o SVG local)`,table:{category:`Configuración`}},icon:{control:`text`,description:`Nombre del icono (ej. 'house' o nombre del archivo SVG)`,table:{category:`Configuración`}},type:{control:`select`,options:[`solid`,`regular`,`brands`,`colorful`],description:`Variante de la colección de iconos`,table:{category:`Configuración`}},size:{control:`number`,description:`Tamaño en píxeles. Si se omite, hereda del elemento padre.`,table:{category:`Apariencia`}},rotate:{control:`number`,description:`Rotación en grados`,table:{category:`Apariencia`}},ariaLabel:{control:`text`,description:`Etiqueta accesible para lectores de pantalla`,table:{category:`Accesibilidad`}}},args:{source:`font`,icon:`house`,type:`solid`}},o={args:{source:`font`,icon:`heart`,type:`solid`,size:48}},s={args:{source:`font`,icon:`heart`,type:`regular`,size:48}},c={args:{source:`font`,icon:`github`,type:`brands`,size:48}},l={args:{source:`svg`,icon:`custom-star`,type:`solid`,size:64}},u={args:{source:`svg`,icon:`custom-star`,type:`regular`,size:64}},d={render:e=>({setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; border: 1px dashed var(--theme-border-base); padding: 16px; border-radius: 8px;">
        <div style="font-size: 24px; color: var(--theme-error); display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-size: 16px; color: var(--theme-content-muted);">
            Preserva sus colores nativos (verde y azul) sin heredar el color rojo del padre
          </span>
        </div>
      </div>
    `}),args:{source:`svg`,icon:`tech-vue`,type:`colorful`,size:64}},f={render:e=>({setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 12px; border: 1px dashed var(--theme-border-base); padding: 16px; border-radius: 8px;">
        <p style="font-size: 14px; margin: 0; color: var(--theme-content-muted);">
          <strong>Caso:</strong> Se solicita variante <code>brands</code> del icono <code>custom-star</code>, la cual NO existe localmente.
        </p>
        <div style="display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-weight: bold;">
            ¡Cargado con éxito! Resolvió automáticamente en la variante disponible (solid)
          </span>
        </div>
      </div>
    `}),args:{source:`svg`,icon:`custom-star`,type:`brands`,size:48}},p={render:e=>({setup(){return{args:e}},template:`
      <div style="font-size: 24px; color: var(--theme-primary, #6366f1); display: flex; align-items: center; gap: 8px;">
        <NaIcon v-bind="args" />
        <span style="font-weight: bold;">Heredando color y tamaño de fuente (24px)</span>
      </div>
    `}),args:{source:`font`,icon:`bell`}},m={args:{source:`font`,icon:`arrow-right`,rotate:90,size:32}},h={name:`Galería de Iconos Locales`,render:()=>({components:{IconGallery:r},template:`<IconGallery />`}),parameters:{layout:`fullscreen`,docs:{description:{story:'Lista interactiva de todos los iconos SVG locales disponibles en la librería. Usa el buscador para filtrar por nombre. Cada icono muestra su nombre (para usarlo en `icon="..."`) y las variantes disponibles.'}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'heart',
    type: 'solid',
    size: 48
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'heart',
    type: 'regular',
    size: 48
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'github',
    type: 'brands',
    size: 48
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'solid',
    size: 64
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'regular',
    size: 64
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; border: 1px dashed var(--theme-border-base); padding: 16px; border-radius: 8px;">
        <div style="font-size: 24px; color: var(--theme-error); display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-size: 16px; color: var(--theme-content-muted);">
            Preserva sus colores nativos (verde y azul) sin heredar el color rojo del padre
          </span>
        </div>
      </div>
    \`
  }),
  args: {
    source: 'svg',
    icon: 'tech-vue',
    type: 'colorful',
    size: 64
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px; border: 1px dashed var(--theme-border-base); padding: 16px; border-radius: 8px;">
        <p style="font-size: 14px; margin: 0; color: var(--theme-content-muted);">
          <strong>Caso:</strong> Se solicita variante <code>brands</code> del icono <code>custom-star</code>, la cual NO existe localmente.
        </p>
        <div style="display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-weight: bold;">
            ¡Cargado con éxito! Resolvió automáticamente en la variante disponible (solid)
          </span>
        </div>
      </div>
    \`
  }),
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'brands',
    size: 48
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="font-size: 24px; color: var(--theme-primary, #6366f1); display: flex; align-items: center; gap: 8px;">
        <NaIcon v-bind="args" />
        <span style="font-weight: bold;">Heredando color y tamaño de fuente (24px)</span>
      </div>
    \`
  }),
  args: {
    source: 'font',
    icon: 'bell'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'arrow-right',
    rotate: 90,
    size: 32
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Galería de Iconos Locales',
  render: () => ({
    components: {
      IconGallery
    },
    template: \`<IconGallery />\`
  }),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Lista interactiva de todos los iconos SVG locales disponibles en la librería. Usa el buscador para filtrar por nombre. Cada icono muestra su nombre (para usarlo en \`icon="..."\`) y las variantes disponibles.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`FontAwesomeSolid`,`FontAwesomeRegular`,`FontAwesomeBrands`,`SvgLocalSolid`,`SvgLocalRegular`,`SvgLocalColorful`,`VariantFallback`,`SizeInheritanceAndColor`,`Transformations`,`Gallery`]}))();export{c as FontAwesomeBrands,s as FontAwesomeRegular,o as FontAwesomeSolid,h as Gallery,p as SizeInheritanceAndColor,d as SvgLocalColorful,u as SvgLocalRegular,l as SvgLocalSolid,m as Transformations,f as VariantFallback,g as __namedExportsOrder,a as default};