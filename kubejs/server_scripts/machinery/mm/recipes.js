MMEvents.recipes(r => {
  r.build('kubejs:invar_ingot', {
    duration: 100,
    structureId: 'mm:alloy_blaster',
    name: {
      text: 'Invar'
    },
    inputs: [
      {
        type: 'mm:simple',
        ingredient: {
          type: 'mm:item',
          count: 3,
          item: 'kubejs:nickel_ingot'
        }
      },
      {
        type: 'mm:simple',
        ingredient: {
          type: 'mm:item',
          count: 3,
          item: 'minecraft:iron_ingot'
        }
      },
      {
        type: 'mm:simple',
        ingredient: {
          type: 'mm:mekanism_heat',
          amount: 5000
        }
      }
    ],
    outputs: [
      {
        type: 'mm:simple',
        ingredient: {
          type: 'mm:item',
          count: 3,
          item: 'kubejs:invar_ingot'
        }
      }
    ]
  })
})
