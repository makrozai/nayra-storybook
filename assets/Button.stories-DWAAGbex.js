import{B as k}from"./Button-CvDeZRqO.js";import"./vue.esm-bundler-5YZkSDXG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={title:"Atoms/Button",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"Botón reutilizable de la aplicación que soporta tres variantes visuales: incremento, decremento y reinicio. Se utiliza como elemento fundamental en los controles del contador interactivo. Acepta un slot `#icon` para personalizar el contenido visual y emite un evento `click` al ser pulsado."}}},argTypes:{label:{description:"Texto visible dentro del botón. Si no se proporciona, el botón mostrará solo el slot de icono.",control:{type:"text"},table:{category:"Propiedades"}},variant:{description:"Variante visual del botón que determina su estilo y color. `decrement` usa tonos rojos, `reset` tonos neutros e `increment` tonos verdes.",control:{type:"select"},options:["decrement","reset","increment"],table:{category:"Propiedades"}},disabled:{description:"Desactiva el botón, impidiendo la interacción del usuario y aplicando estilos de estado deshabilitado.",control:{type:"boolean"},table:{category:"Propiedades"}},ariaLabel:{description:"Etiqueta accesible para lectores de pantalla. Importante cuando el botón solo contiene un icono sin texto visible.",control:{type:"text"},table:{category:"Propiedades"}},onClick:{description:"Evento emitido cuando el usuario hace clic en el botón.",table:{category:"Eventos"},action:"click"},icon:{description:"Slot para insertar un icono SVG o componente personalizado dentro del botón.",control:!1,table:{category:"Slots"}}}},e={args:{label:"Incrementar",variant:"increment",disabled:!1,ariaLabel:"Incrementar contador"}},a={args:{label:"Decrementar",variant:"decrement",disabled:!1,ariaLabel:"Decrementar contador"}},r={args:{label:"Reiniciar",variant:"reset",disabled:!1,ariaLabel:"Reiniciar contador"}},t={args:{label:"Deshabilitado",variant:"increment",disabled:!0,ariaLabel:"Botón deshabilitado"}},n={args:{variant:"increment",ariaLabel:"Incrementar con icono"},render:w=>({setup(){return{args:w}},template:`
      <NaButton v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </template>
      </NaButton>
    `})},o={render:()=>({template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <NaButton label="Decrementar" variant="decrement" aria-label="Decrementar contador" />
        <NaButton label="Reiniciar" variant="reset" aria-label="Reiniciar contador" />
        <NaButton label="Incrementar" variant="increment" aria-label="Incrementar contador" />
      </div>
    `})};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Incrementar',
    variant: 'increment',
    disabled: false,
    ariaLabel: 'Incrementar contador'
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Decrementar',
    variant: 'decrement',
    disabled: false,
    ariaLabel: 'Decrementar contador'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Reiniciar',
    variant: 'reset',
    disabled: false,
    ariaLabel: 'Reiniciar contador'
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var v,g,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Deshabilitado',
    variant: 'increment',
    disabled: true,
    ariaLabel: 'Botón deshabilitado'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,h,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'increment',
    ariaLabel: 'Incrementar con icono'
  },
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <NaButton v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </template>
      </NaButton>
    \`
  })
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var D,I,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <NaButton label="Decrementar" variant="decrement" aria-label="Decrementar contador" />
        <NaButton label="Reiniciar" variant="reset" aria-label="Reiniciar contador" />
        <NaButton label="Incrementar" variant="increment" aria-label="Incrementar contador" />
      </div>
    \`
  })
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const z=["Increment","Decrement","Reset","Disabled","WithIcon","AllVariants"];export{o as AllVariants,a as Decrement,t as Disabled,e as Increment,r as Reset,n as WithIcon,z as __namedExportsOrder,R as default};
