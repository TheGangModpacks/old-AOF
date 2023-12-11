StartupEvents.registry('block', event => {
  for (const mat of global.raw_ores) {
    event
      .create(`${mat}_ore`)
      .color(1, ore_props[mat].color)
      .soundType('gilded_blackstone')
      .tagBoth('forge:ores')
      .tagBoth(`forge:ores/${mat}`)
      .requiresTool(true)
      .defaultCutout()
      .item(i => {
        i.color(ore_props[mat].color)
      }).modelJson = {
      parent: 'kubejs:block/ore',
      textures: {
        all: `kubejs:block/ore_stone`,
        particle: `kubejs:block/ore_overlay`,
        overlay: `kubejs:block/ore_overlay`
      }
    }
  }
})
