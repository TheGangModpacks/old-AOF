ServerEvents.recipes(r =>{
    //Tin Furnace Gen
    r.shaped('kubejs:tin_furnace_generator', ['aba', 'bcb', 'aba'], {a: 'kubejs:tin_ingot', b: 'kubejs:wooden_gear', c: 'minecraft:blast_furnace'})
    r.recipes.custommachinery.custom_machine('kubejs:generator/tin_furnace', 100)
    .produceEnergyPerTick(10)
    .requireFuel(333)
})