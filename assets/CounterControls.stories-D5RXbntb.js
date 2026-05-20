import{C as i}from"./CounterControls-Dbe3q-YH.js";import"./vue.esm-bundler-5YZkSDXG.js";import"./Button-CvDeZRqO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Molecules/CounterControls",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Grupo de controles del contador que agrupa los botones de decrementar, reiniciar e incrementar. Esta molécula coordina la interacción del usuario con el contador emitiendo eventos específicos para cada acción. Se puede deshabilitar completamente para bloquear toda interacción."}}},argTypes:{disabled:{description:"Desactiva todos los botones del grupo de controles, impidiendo cualquier interacción del usuario.",control:{type:"boolean"},table:{category:"Propiedades"}},onDecrement:{description:"Evento emitido cuando el usuario pulsa el botón de decrementar.",table:{category:"Eventos"},action:"decrement"},onReset:{description:"Evento emitido cuando el usuario pulsa el botón de reiniciar.",table:{category:"Eventos"},action:"reset"},onIncrement:{description:"Evento emitido cuando el usuario pulsa el botón de incrementar.",table:{category:"Eventos"},action:"increment"}}},e={args:{disabled:!1}},o={args:{disabled:!0}};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var n,s,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const b=["Default","Disabled"];export{e as Default,o as Disabled,b as __namedExportsOrder,m as default};
