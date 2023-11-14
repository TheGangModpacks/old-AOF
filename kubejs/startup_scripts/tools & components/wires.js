const wire_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },
  aluminum: { color: aluminum },
  lead: { color: lead },
  electrum: { color: electrum },
  steel: { color: steel },
  uranium: { color: uranium },
}

global.wire_materials = [
  'copper',
  'iron',
  'gold',
  'aluminum',
  'lead',
  'electrum',
  'steel',
  'uranium'
]

StartupEvents.registry('item', event => {
  for (const mat of global.wire_materials) {
    event
      .create(`${mat}_wire`)
      .texture('layer0', 'kubejs:item/wire')
      .color(0, wire_properties[mat].color)
      .tag('forge:wires')
      .tag(`forge:wires/${mat}`)
  }
})
