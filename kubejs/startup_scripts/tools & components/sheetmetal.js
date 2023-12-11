const metal_properties = {
  tin: { color: tin },
  zinc: { color: zinc },
  osmium: { color: osmium },
  tungsten: { color: tungsten },
  brass: { color: brass },
  bronze: { color: bronze },
  enderium: { color: enderium },
  invar: { color: invar },
  lumium: { color: lumium },
  signalum: { color: signalum },
  signar: { color: signar }
}

global.sheetmetal_mats = [
  'tin',
  'zinc',
  'osmium',
  'tungsten',
  'brass',
  'bronze',
  'enderium',
  'invar',
  'lumium',
  'signalum',
  'signar'
]

StartupEvents.registry('block', event => {
  for (const mat of global.sheetmetal_mats) {
    event
      .create(`sheetmetal_${mat}`)
      .displayName(`${mat.charAt(0).toUpperCase() + mat.slice(1)} Sheetmetal`)
      .textureAll('immersiveengineering:block/metal/sheetmetal_aluminum')
      .color(0, metal_properties[mat].color)
      .tagBoth('forge:sheetmetals')
      .tagBoth(`forge:sheetmetals/${mat}`)
      .requiresTool(true)
      .soundType('copper')
      .item(i => {
        i.color(metal_properties[mat].color)
      })
  }
})
