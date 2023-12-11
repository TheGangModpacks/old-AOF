ServerEvents.recipes(r =>{
    r.recipes.custommachinery.custom_machine('kubejs:generator/mechanical', 1)
    .requireSU(256, 2)
    .produceEnergyPerTick(1)
})