LootJS.modifiers((modify) => {
  modify
    .addBlockLootModifier("emendatusenigmatica:certus_quartz_cluster")
    .removeLoot(Ingredient.all)
    .addLoot(Item.of('ae2:certus_quartz_crystal', 2))
});
