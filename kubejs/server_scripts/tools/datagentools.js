ServerEvents.recipes(r => {
  let e = id => `kubejs:${id}`

  for (const mat of global.ingots) {
    r.recipes.custommachinery
      .custom_craft(
        'kubejs:assembly/engineer_assembler',
        Item.of(`kubejs:electrum_pickaxe`)
      )
      .requireItem(Item.of(e(`${mat}_ingot`)), 'slot0')
      .requireItem(Item.of(e(`${mat}_ingot`)), 'slot1')
      .requireItem(Item.of(e(`${mat}_ingot`)), 'slot2')
      .requireItem(Item.of('minecraft:stick'), 'slot4')
      .requireItem('stick', 'slot6')
  }
})
