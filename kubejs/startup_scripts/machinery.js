//priority: 1

StartupEvents.registry('block', b => {
  b.create('stirling_generator', 'custommachinery').machine('kubejs:generator/stirling_basic')
  b.create('mechanical_generator', 'custommachinery').machine('kubejs:generator/mechanical')
  b.create('assembly_machine', 'custommachinery').machine('kubejs:assembly/assembly_basic')
  b.create('stone_grinder', 'custommachinery').machine('kubejs:grinder/stone')
  b.create('simulation_chamber', 'custommachinery').machine('kubejs:simulation/chamber')
  b.create('loot_fabricator', 'custommachinery').machine('kubejs:simulation/fabricator')
  b.create('alloy_smelter', 'custommachinery').machine('kubejs:alloy/smelter')
  b.create('enhanced_alloy_smelter', 'custommachinery').machine('kubejs:alloy/enhanced')
  b.create('kiln', 'custommachinery').machine('kubejs:smelting/kiln')
  b.create('zenith_furnace', 'custommachinery').machine('kubejs:smelting/zenith_furnace')
  b.create('engineer_assembler', 'custommachinery').machine('kubejs:assembly/engineer_assembler')
  b.create('copper_solar_panel', 'custommachinery').machine('kubejs:solar/copper')
  b.create('tin_furnace_generator', 'custommachinery').machine('kubejs:generator/tin_furnace')
})
