ServerEvents.recipes(r =>{
    let grinder = `kubejs:grinder/stone`

    let e = (id) => `emendatusenigmatica:${id}`;
    const raw_ores_grind = {
        emendatusenigmatica: ['tin'],
        minecraft: ['iron', 'copper']
    };

    for (const mod in raw_ores_grind) {
        for (const ingot of raw_ores_grind[mod]) {
            r.remove({output: `emendatusenigmatica${ingot}_ingot`, type: 'smelting'})

            r.recipes.custommachinery.custom_machine(grinder, 100)
            .requireFuel(1)
            .requireItem(`${mod}:raw_${ingot}`)
            .produceItem(e(`${ingot}_dirty_dust`))

            waterCauldron(r, e(`${ingot}_dirty_dust`), e(`${ingot}_dust`))
        }
    }

    r.shaped(Item.of('cauldron'), ['a a', 'a a', 'aaa'], {a: 'kubejs:porcelain_clay'}).id('minecraft:cauldron')

    r.shapeless(Item.of('kubejs:porcelain_clay'), ['bone_meal', 'clay_ball']).id('minecraft:cauldron')
})