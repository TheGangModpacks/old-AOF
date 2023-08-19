//priority: 1

StartupEvents.registry('block', b =>{
    b.create('stirling_generator_starter', 'custommachinery').machine('kubejs:generator/stirling_starter')
})