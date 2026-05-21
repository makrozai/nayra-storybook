import{I as U}from"./Icon-D4Vn4y43.js";import{I as _}from"./IconGallery-Bj2quGxd.js";import"./vue.esm-bundler-XVrXqM2o.js";import"./iframe-SOz-uKV8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={title:"Atoms/Icon",component:U,tags:["autodocs"],argTypes:{source:{control:"radio",options:["font","svg"],description:"Origen del icono (fuente externa FontAwesome o SVG local)",table:{category:"Configuración"}},icon:{control:"text",description:"Nombre del icono (ej. 'house' o nombre del archivo SVG)",table:{category:"Configuración"}},type:{control:"select",options:["solid","regular","brands","colorful"],description:"Variante de la colección de iconos",table:{category:"Configuración"}},size:{control:"number",description:"Tamaño en píxeles. Si se omite, hereda del elemento padre.",table:{category:"Apariencia"}},rotate:{control:"number",description:"Rotación en grados",table:{category:"Apariencia"}},ariaLabel:{control:"text",description:"Etiqueta accesible para lectores de pantalla",table:{category:"Accesibilidad"}}},args:{source:"font",icon:"house",type:"solid"}},r={args:{source:"font",icon:"heart",type:"solid",size:48}},o={args:{source:"font",icon:"heart",type:"regular",size:48}},a={args:{source:"font",icon:"github",type:"brands",size:48}},s={args:{source:"svg",icon:"custom-star",type:"solid",size:64}},t={args:{source:"svg",icon:"custom-star",type:"regular",size:64}},n={render:e=>({setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; border: 1px dashed var(--theme-border-base); padding: 16px; border-radius: 8px;">
        <div style="font-size: 24px; color: var(--theme-error); display: flex; align-items: center; gap: 8px;">
          <NaIcon v-bind="args" />
          <span style="font-size: 16px; color: var(--theme-content-muted);">
            Preserva sus colores nativos (verde y azul) sin heredar el color rojo del padre
          </span>
        </div>
      </div>
    `}),args:{source:"svg",icon:"tech-vue",type:"colorful",size:64}},i={render:e=>({setup(){return{args:e}},template:`
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
    `}),args:{source:"svg",icon:"custom-star",type:"brands",size:48}},c={render:e=>({setup(){return{args:e}},template:`
      <div style="font-size: 24px; color: var(--theme-primary, #6366f1); display: flex; align-items: center; gap: 8px;">
        <NaIcon v-bind="args" />
        <span style="font-weight: bold;">Heredando color y tamaño de fuente (24px)</span>
      </div>
    `}),args:{source:"font",icon:"bell"}},l={args:{source:"font",icon:"arrow-right",rotate:90,size:32}},d={name:"Galería de Iconos Locales",render:()=>({components:{IconGallery:_},template:"<IconGallery />"}),parameters:{layout:"fullscreen",docs:{description:{story:'Lista interactiva de todos los iconos SVG locales disponibles en la librería. Usa el buscador para filtrar por nombre. Cada icono muestra su nombre (para usarlo en `icon="..."`) y las variantes disponibles.'}}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'heart',
    type: 'solid',
    size: 48
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'heart',
    type: 'regular',
    size: 48
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,f,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'github',
    type: 'brands',
    size: 48
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,z,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'solid',
    size: 64
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,w,A;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    source: 'svg',
    icon: 'custom-star',
    type: 'regular',
    size: 64
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,G,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var F,N,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,O,T;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,k,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    source: 'font',
    icon: 'arrow-right',
    rotate: 90,
    size: 32
  }
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var E,H,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const W=["FontAwesomeSolid","FontAwesomeRegular","FontAwesomeBrands","SvgLocalSolid","SvgLocalRegular","SvgLocalColorful","VariantFallback","SizeInheritanceAndColor","Transformations","Gallery"];export{a as FontAwesomeBrands,o as FontAwesomeRegular,r as FontAwesomeSolid,d as Gallery,c as SizeInheritanceAndColor,n as SvgLocalColorful,t as SvgLocalRegular,s as SvgLocalSolid,l as Transformations,i as VariantFallback,W as __namedExportsOrder,Q as default};
