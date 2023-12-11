StartupEvents.registry('block', event => {
  function storageBlock(name, path) {
    event
      .create(name)
      .textureAll(path)
      .tag('forge:storage_blocks')
      .tag(`forge:storage_blocks/${name}`)
      .requiresTool(true)
      .soundType('metal')
  }
  for (const mat of global.ingots) {
    event
      .create(`${mat}_block`)
      .color(1, ingot_properties[mat].color)
      .tagBoth('forge:storage_blocks')
      .tagBoth(`forge:storage_blocks/${mat}`)
      .requiresTool(true)
      .soundType('metal')
      .item(i => {
        i.color(ingot_properties[mat].color)
      })
      .model('kubejs:block/storage_block')
  }

  new storageBlock('apatite_block', 'thermal:block/apatite_block')
})
