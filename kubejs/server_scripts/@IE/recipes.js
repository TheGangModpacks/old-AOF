ServerEvents.recipes(r =>{
    // Engineers Hammer
    r.smithing('immersiveengineering:hammer', 'kubejs:leather_bound_stick', 'iron_ingot')
    .id('immersiveengineering:crafting/hammer')

    // Cokebrick for coke oven
    r.shaped(Item.of('immersiveengineering:cokebrick', 3), ['aba', 'bcb', 'aba'], {a: 'kubejs:porcelain_clay', b: 'kubejs:slag_brick', c: 'kubejs:apatite_block'})
    .id('immersiveengineering:crafting/cokebrick')

    // Blastbrick for blast oven
    r.shaped(Item.of('immersiveengineering:blastbrick', 3), ['aba', 'bcb', 'aba'], {a: 'minecraft:nether_brick', b: 'kubejs:constantan_ingot', c: 'kubejs:magma_brick'})
    .id('immersiveengineering:crafting/blastbrick')

    // Reinforced blastbrick - Leaving the manual application version
    r.remove({ id: 'immersiveengineering:crafting/blastbrick_reinforced' })
    
    // Redstone engineering block
    r.shaped(Item.of('immersiveengineering:rs_engineering', 4), ['aba', 'bcb', 'aba'], {a: 'kubejs:sheetmetal_tin', b: 'minecraft:redstone', c: 'immersiveengineering:component_electronic'})
    .id('immersiveengineering:crafting/rs_engineering')

    // Iron mechanical component - remove regular recipe and increase blueprint recipe cost 
    r.remove({ id: 'immersiveengineering:crafting/component_iron' })
    r.custom({
      "type": "immersiveengineering:blueprint",
      "category": "components",
      "inputs": [
        {
          "base_ingredient": {
            "tag": "forge:plates/iron"
          },
          "count": 4
        },
        {
          "tag": "forge:ingots/copper"
        }
      ],
      "result": {
        "item": "immersiveengineering:component_iron"
      }
    }).id('immersiveengineering:blueprint/component_iron')

    // Light engineering block
    r.shaped(Item.of('immersiveengineering:light_engineering', 4), ['aba', 'bcb', 'aba'], {a: 'immersiveengineering:sheetmetal_iron', b: 'immersiveengineering:component_iron', c: 'kubejs:bronze_ingot'})
    .id('immersiveengineering:crafting/light_engineering')

    // Steel mechanical component - remove regular recipe and increase blueprint recipe cost
    r.remove({ id: 'immersiveengineering:crafting/component_steel' })
    // r.custom({
    //   "type": "immersiveengineering:blueprint",
    //   "category": "components",
    //   "inputs": [
    //     {
    //       "base_ingredient": {
    //         "tag": "forge:plates/steel"
    //       },
    //       "count": 4
    //     },
    //     {
    //       "tag": "forge:ingots/nickel"
    //     }
    //   ],
    //   "result": {
    //     "item": "immersiveengineering:component_steel"
    //   }
    // }).id('immersiveengineering:blueprint/component_steel')
    // Heavy engineering block stays the same


    r.recipes.immersiveengineering.blueprint(Item.of('immersiveengineering:component_iron', 1), ['kubejs:steel_plate', 'kubejs:nickel_ingot'], 'components').id('immersiveengineering:blueprint/component_steel_2')

})