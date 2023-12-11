ServerEvents.recipes(r => {
  const i = 'pearl'
  function fabricate (mob, item, count) {
    r.recipes.custommachinery
    .custom_machine('kubejs:simulation/fabricator', 100)
    .requireItem(`kubejs:${mob}_pearl`, 'i')
    .requireItem(Item.of(item), i).chance(0)
    .produceItem(Item.of(item, count))
    .requireEnergyPerTick(360)
  }

  /*     Blaze     */
  fabricate('blaze', 'blaze_rod', 8)
  fabricate('blaze', 'emendatusenigmatica:sulfur_dust', 4)
  fabricate('blaze', 'create:cinder_flour', 3)

  /*     Creeper     */
  fabricate('creeper', 'gunpowder', 6)
  fabricate('creeper', 'coal', 12)
  fabricate('creeper', 'creeper_head', 1)

  /*     Drowned     */
  fabricate('drowned', 'copper_ingot', 12)
  fabricate('drowned', 'mekanism:salt', 3)

  /*     Enderman     */
  fabricate('enderman', 'ender_pearl', 6)

  /*     Ghast     */
  fabricate('ghast', 'ghast_tear', 2)
  fabricate('ghast', 'kubejs:silver_ingot', 12)

  /*     Guardian     */
  fabricate('guardian', 'prismarine_shard', 8)
  fabricate('guardian', 'prismarine_crystals', 4)
  fabricate('guardian', 'cod', 16)

  /*     Magma Slime     */
  fabricate('magma_slime', 'magma_cream', 6)
  fabricate('magma_slime', 'byg:magmatic_stone', 8)

  /*     Piglin     */
  fabricate('piglin', 'gold_ingot', 8)

  /*     Shulker     */
  fabricate('shulker', 'diamond', 6)
  fabricate('shulker', 'shulker_shell', 2)

  /*     Skeleton     */
  fabricate('skeleton', 'kubejs:tin_ingot', 12)
  fabricate('skeleton', 'bone', 16)
  fabricate('skeleton', 'arrow', 8)

  /*     Slime     */
  fabricate('slime', 'slime_ball', 12)
  fabricate('slime', 'kubejs:nickel_ingot', 4)

  /*     Spider     */
  fabricate('spider', 'copper_ingot', 16)
  fabricate('spider', 'spider_eye', 3)
  fabricate('spider', 'string', 24)

  /*     Vindicator     */
  fabricate('vindicator', 'emerald', 2)

  /*     Witch     */
  fabricate('witch', 'redstone', 16)
  fabricate('witch', 'glowstone_dust', 16)
  fabricate('witch', 'sugar', 6)

  /*     Wither Skeleton     */
  fabricate('wither_skeleton', 'wither_skeleton_skull', 1)

  /*     Zombie     */
  fabricate('zombie', 'iron_ingot', 12)
  fabricate('zombie', 'rotten_flesh', 6)
  fabricate('zombie', 'zombie_head', 1)

})