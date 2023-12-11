ServerEvents.recipes(r => {
    r.remove({output: 'furnace'})
    r.shaped('furnace', ['aaa', 'aba', 'aca'], {a: 'minecraft:cobblestone', b: 'kubejs:wooden_gear', c: 'kubejs:porcelain_clay'})
    .id('minecraft:furnace')
    r.smithing('kubejs:leather_bound_stick', 'stick', 'leather')
})