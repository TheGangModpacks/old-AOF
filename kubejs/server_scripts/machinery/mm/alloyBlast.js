MMEvents.recipes(r => {
  r.build('cdc:alloy_blaster', {
    name: { text: 'Alloy Blast Smelter' },
    controllerId: 'mm:alloy_blaster',
    layout: [
      ['HHH', 'HHH', 'HHH'],
      ['GGG', 'G G', 'GGG'],
      ['GGG', 'G G', 'GGG'],
      ['ABD', 'EAC', 'EFD']
    ],
    key: {
      A: {
        type: 'mm:block',
        block: 'immersiveengineering:sheetmetal_steel'
      },
      B: { type: 'mm:port', port: 'mm:item', id: 'input_bus', input: true },
      D: {
        type: 'mm:block',
        block: 'immersiveengineering:heavy_engineering'
      },
      E: {
        type: 'mm:port',
        port: 'mm:mekanism_heat',
        id: 'heat_adapter_port',
        input: true
      },
      F: { type: 'mm:port', port: 'mm:item', id: 'output_bus', input: false },
      G: {
        type: 'mm:block',
        block: 'immersiveengineering:sheetmetal_electrum'
      },
      H: { type: 'mm:block', block: 'immersiveengineering:concrete_tile' }
    }
  })
})
