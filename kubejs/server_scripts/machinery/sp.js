ServerEvents.recipes(r => {
    //Copper Solar Panel
    r.shaped('kubejs:copper_photoelectric_pane', ['ccc', 'aba'], {a: 'minecraft:lapis_lazuli', b: 'minecraft:copper_ingot', c: 'minecraft:glass'})
    r.shaped('kubejs:copper_solar_panel', ['ccc', 'aba','ada'], {a: 'minecraft:copper_ingot', b: 'kubejs:wooden_gear', c: 'kubejs:copper_photoelectric_pane',
    d: 'minecraft:redstone'})
    r.recipes.custommachinery.custom_machine('kubejs:solar/copper', 100)
    .produceEnergyPerTick(1)
    .mustSeeSky()
    .requireTime("(0, 12000)")
})