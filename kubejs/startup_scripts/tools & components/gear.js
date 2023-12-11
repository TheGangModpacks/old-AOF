StartupEvents.registry('item', event => {
  function createGear(name) {
    event.create(`${name}_gear`)
    .tag(`forge:gears/${name}`)
    .tag(`forge:gears`)
  }
  for (const mat of global.parts) {
    event
      .create(`${mat}_gear`)
      .texture('layer0', 'kubejs:item/gear')
      .color(0, parts_properties[mat].color)
      .tag('forge:gears')
      .tag(`forge:gears/${mat}`)
  }

  createGear('wooden')
  createGear('stone')
})
