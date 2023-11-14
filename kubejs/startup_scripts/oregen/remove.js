WorldgenEvents.remove(w => {
    w.removeOres(props => {
      //props.biomes = [
      //  {id: 'biome_name'}
      //]
      props.blocks = Ingredient.of("forge:ores").itemIds
    })
})

WorldgenEvents.add(w =>{
    w.addOre(ore =>{
        ore.id = 'kubejs:iron_ore'
        ore.biomes = "#forge:is_overworld"

        ore.addTarget('#minecraft:stone_ore_replaceables', 'iron_ore')
    })
})