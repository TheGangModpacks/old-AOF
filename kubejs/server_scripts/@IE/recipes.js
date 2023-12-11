ServerEvents.recipes(r =>{
    r.smithing('immersiveengineering:hammer', 'kubejs:leather_bound_stick', 'iron_ingot')
    .id('immersiveengineering:crafting/hammer')

    r.shaped(Item.of('immersiveengineering:cokebrick', 3), ['aba', 'bcb', 'aba'], {a: 'kubejs:porcelain_clay', b: 'kubejs:slag_brick', c: 'kubejs:apatite_block'})
    .id('immersiveengineering:crafting/cokebrick')

    new lavaCauldron(r, 'minecraft:nether_brick', 'kubejs:magma_brick')
})