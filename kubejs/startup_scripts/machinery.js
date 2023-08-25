//priority: 1

StartupEvents.registry('block', b =>{
    b.create('stirling_generator', 'custommachinery').machine('kubejs:generator/stirling_basic')
    b.create('assembly_machine', "custommachinery").machine('kubejs:assembly/assembly_basic')
    b.create('stone_grinder', "custommachinery").machine('kubejs:grinder/stone')
//    b.create('wooden_water_barrel', "custommachinery").machine('kubejs:washing/wood')
})