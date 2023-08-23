ServerEvents.recipes(r =>{
    const grinder = `kubejs:grinder/stone`
    r.recipes.custommachinery.custom_machine(grinder, 200)
    .requireFuel(4)
    .requireItem(Item.of('emendatusenigmatica:copper_clump', 3))
    .produceItem(Item.of('emendatusenigmatica:copper_dirty_dust', 2))

    let e = (id) => `emendatusenigmatica:${id}`;
    const raw_ores_grind = {
        emendatusenigmatica: ['tin'],
        minecraft: ['iron', 'gold', 'copper']
    };

    for (const mod in raw_ores_grind) {
        for (const ingot of raw_ores_grind[mod]) {
            r.remove({output: `emendatusenigmatica${ingot}_ingot`, type: 'smelting'})
            r.recipes.custommachinery.custom_machine(grinder, 100)
            .requireFuel(1)
            .requireItem(`${mod}:raw_${ingot}`)
            .produceItem(e(`${ingot}_dirty_dust`))
        }
    }
})