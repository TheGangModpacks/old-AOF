ServerEvents.recipes(r =>{
    r.recipes.custommachinery.custom_machine('kubejs:generator/stirling_starter', 20)
    .produceEnergyPerTick(30)
    .requireFuel()
})