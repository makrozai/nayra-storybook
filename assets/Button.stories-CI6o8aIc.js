import{i as e}from"./preload-helper-CYnhYu8d.js";import{G as t,K as n}from"./iframe-CrbqLvEx.js";var r,i,a,o,s,c,l,u;e((()=>{n(),r={title:`Atoms/Button`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:"Botón reutilizable de la aplicación que soporta tres variantes visuales: incremento, decremento y reinicio. Se utiliza como elemento fundamental en los controles del contador interactivo. Acepta un slot `#icon` para personalizar el contenido visual y emite un evento `click` al ser pulsado."}}},argTypes:{label:{description:`Texto visible dentro del botón. Si no se proporciona, el botón mostrará solo el slot de icono.`,control:{type:`text`},table:{category:`Propiedades`}},variant:{description:"Variante visual del botón que determina su estilo y color. `decrement` usa tonos rojos, `reset` tonos neutros e `increment` tonos verdes.",control:{type:`select`},options:[`decrement`,`reset`,`increment`],table:{category:`Propiedades`}},disabled:{description:`Desactiva el botón, impidiendo la interacción del usuario y aplicando estilos de estado deshabilitado.`,control:{type:`boolean`},table:{category:`Propiedades`}},ariaLabel:{description:`Etiqueta accesible para lectores de pantalla. Importante cuando el botón solo contiene un icono sin texto visible.`,control:{type:`text`},table:{category:`Propiedades`}},onClick:{description:`Evento emitido cuando el usuario hace clic en el botón.`,table:{category:`Eventos`},action:`click`},icon:{description:`Slot para insertar un icono SVG o componente personalizado dentro del botón.`,control:!1,table:{category:`Slots`}}}},i={args:{label:`Incrementar`,variant:`increment`,disabled:!1,ariaLabel:`Incrementar contador`}},a={args:{label:`Decrementar`,variant:`decrement`,disabled:!1,ariaLabel:`Decrementar contador`}},o={args:{label:`Reiniciar`,variant:`reset`,disabled:!1,ariaLabel:`Reiniciar contador`}},s={args:{label:`Deshabilitado`,variant:`increment`,disabled:!0,ariaLabel:`Botón deshabilitado`}},c={args:{variant:`increment`,ariaLabel:`Incrementar con icono`},render:e=>({setup(){return{args:e}},template:`
      <NaButton v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </template>
      </NaButton>
    `})},l={render:()=>({template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <NaButton label="Decrementar" variant="decrement" aria-label="Decrementar contador" />
        <NaButton label="Reiniciar" variant="reset" aria-label="Reiniciar contador" />
        <NaButton label="Incrementar" variant="increment" aria-label="Incrementar contador" />
      </div>
    `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Incrementar',
    variant: 'increment',
    disabled: false,
    ariaLabel: 'Incrementar contador'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Decrementar',
    variant: 'decrement',
    disabled: false,
    ariaLabel: 'Decrementar contador'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Reiniciar',
    variant: 'reset',
    disabled: false,
    ariaLabel: 'Reiniciar contador'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Deshabilitado',
    variant: 'increment',
    disabled: true,
    ariaLabel: 'Botón deshabilitado'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <NaButton label="Decrementar" variant="decrement" aria-label="Decrementar contador" />
        <NaButton label="Reiniciar" variant="reset" aria-label="Reiniciar contador" />
        <NaButton label="Incrementar" variant="increment" aria-label="Incrementar contador" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}},u=[`Increment`,`Decrement`,`Reset`,`Disabled`,`WithIcon`,`AllVariants`]}))();export{l as AllVariants,a as Decrement,s as Disabled,i as Increment,o as Reset,c as WithIcon,u as __namedExportsOrder,r as default};