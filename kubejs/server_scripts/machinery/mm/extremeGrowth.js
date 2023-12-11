MMEvents.recipes(r => {
  r.build('mm:extreme_growth', {
    name: { text: 'Extreme Growth Chamber' },
    controllerId: 'mm:alloy_blaster',
    layout: [
      ['I  I', '    ', '    ', 'I  I'],
      ['ABBA', 'BBBB', 'BBBB', 'ABBA'],
      ['GHHG', 'H  H', 'H  H', 'GHHG'],
      ['GHHG', 'H  H', 'H  H', 'GHHG'],
      ['ACBA', 'DEEF', 'DEEF', 'ABBA']
    ],
    key: {
      A: { type: 'mm:block', block: 'ae2:quartz_growth_accelerator' },
      B: { type: 'mm:block', block: 'mekanism:boiler_casing' },
      D: { type: 'mm:port', port: 'mm:item', id: 'input_bus', input: true },
      E: { type: 'mm:block', block: 'ae2:fluix_block' },
      F: { type: 'mm:port', port: 'mm:item', id: 'output_bus', input: false },
      G: {
        type: 'mm:block',
        block: 'immersiveengineering:sheetmetal_electrum'
      },
      H: { type: 'mm:block', block: 'kubejs:sheetmetal_lumium' },
      I: { type: 'mm:block', block: 'mekanismgenerators:solar_generator' }
    }
  })
})
