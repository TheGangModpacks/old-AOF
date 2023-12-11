const ore_props = {
  tin: { color: tin, overlay: 'tin' },
  silver: { color: silver, overlay: 'silver' },
  lead: { color: lead, overlay: 'lead' },
  nickel: { color: nickel, overlay: 'nickel' },
  aluminum: { color: aluminum, overlay: 'aluminum' },
  osmium: { color: osmium, overlay: 'osmium' },
  uranium: { color: uranium, overlay: 'uranium' },
  zinc: { color: zinc, overlay: 'zinc' }
}

global.raw_ores = ['tin', 'silver', 'lead', 'nickel', 'aluminum', 'osmium', 'uranium', 'zinc']

StartupEvents.registry('item', event => {
  for (const mat of global.raw_ores) {
    event
      .create(`raw_${mat}`)
      .texture('layer0', 'kubejs:item/raw_ore')
      .color(0, ore_props[mat].color)
      .tag('forge:raw_materials')
      .tag(`forge:raw_materials/${mat}`)
  }
})
StartupEvents.registry('block', event => {
  for (const mat of global.raw_ores) {
    event
      .create(`raw_${mat}_block`)
      .textureAll('immersiveengineering:block/metal/raw_nickel')
      .color(0, ore_props[mat].color)
      .tag('forge:storage_blocks')
      .tag(`forge:storage_blocks/raw_${mat}`)
      .requiresTool(true)
      .soundType('metal')
      .item(i => {
        i.color(ore_props[mat].color)
      })
  }
})
