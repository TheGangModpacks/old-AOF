MMEvents.controllerRegistry(ctrl => {
  ctrl.create('alloy_blaster').name('Alloy Blast Smelter').build()
  ctrl.create('extreme_growth').name('Extreme Growth Chamber').build()
})

MMEvents.portRegistry(port => {
  port
    .create('input_bus')
    .name('Input Bus')
    .input(true)
    .port('mm:item')
    .config({
      slotRows: 2,
      slotCols: 2
    })
    .build()
  port
    .create('output_bus')
    .name('Output Bus')
    .input(false)
    .port('mm:item')
    .config({
      slotRows: 2,
      slotCols: 2
    })
    .build()
  port
    .create('energy_hatch')
    .name('Energy Hatch')
    .input(true)
    .port('mm:energy')
    .config({
      capacity: 100000
    })
    .build()
  port
    .create('dynamo_hatch')
    .name('Dynamo Hatch')
    .input(false)
    .port('mm:energy')
    .config({
      capacity: 100000
    })
  port
    .create('heat_adapter')
    .name('Heat Adapter')
    .input(true)
    .port('mm:mekanism_heat')
    .config({
      capacity: 10000
    })
    .build()
})
