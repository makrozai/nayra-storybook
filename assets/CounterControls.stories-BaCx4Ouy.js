import{i as e}from"./preload-helper-CYnhYu8d.js";import{M as t,j as n}from"./iframe-CrbqLvEx.js";var r,i,a,o;e((()=>{t(),r={title:`Molecules/CounterControls`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Grupo de controles del contador que agrupa los botones de decrementar, reiniciar e incrementar. Esta molécula coordina la interacción del usuario con el contador emitiendo eventos específicos para cada acción. Se puede deshabilitar completamente para bloquear toda interacción.`}}},argTypes:{disabled:{description:`Desactiva todos los botones del grupo de controles, impidiendo cualquier interacción del usuario.`,control:{type:`boolean`},table:{category:`Propiedades`}},onDecrement:{description:`Evento emitido cuando el usuario pulsa el botón de decrementar.`,table:{category:`Eventos`},action:`decrement`},onReset:{description:`Evento emitido cuando el usuario pulsa el botón de reiniciar.`,table:{category:`Eventos`},action:`reset`},onIncrement:{description:`Evento emitido cuando el usuario pulsa el botón de incrementar.`,table:{category:`Eventos`},action:`increment`}}},i={args:{disabled:!1}},a={args:{disabled:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}},o=[`Default`,`Disabled`]}))();export{i as Default,a as Disabled,o as __namedExportsOrder,r as default};