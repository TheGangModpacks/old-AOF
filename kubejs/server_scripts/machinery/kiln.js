//priority: 1
function kilnSmelting(event, duration, input, output, tag) {
  if (tag == true) {
    event.recipes.custommachinery
      .custom_machine('kubejs:smelting/kiln', duration)
      .produceItem(Item.of(output))
      .requireFuel(2)
      .requireItemTag(input, 1)
    event.recipes.custommachinery
      .custom_machine('kubejs:smelting/electric_kiln', duration)
      .produceItem(Item.of(output))
      .requireEnergyPerTick(60)
      .requireItemTag(input, 1)
  } else {
    event.recipes.custommachinery
      .custom_machine('kubejs:smelting/electric_kiln', duration)
      .produceItem(Item.of(output))
      .requireEnergyPerTick(60)
      .requireItem(Item.of(input))
    event.recipes.custommachinery
      .custom_machine('kubejs:smelting/kiln', duration)
      .produceItem(Item.of(output))
      .requireFuel(2)
      .requireItem(Item.of(input))
  }
}

ServerEvents.recipes(r => {
  kilnSmelting(r, 100, '#kubejs:glass_sand', 'glass', true)
  kilnSmelting(r, 100, 'byg:black_sand', 'black_stained_glass', true)
  kilnSmelting(r, 100, 'byg:white_sand', 'white_stained_glass', true)
  kilnSmelting(r, 100, 'byg:purple_sand', 'purple_stained_glass', true)
  kilnSmelting(r, 100, 'byg:blue_sand', 'blue_stained_glass', true)
})
