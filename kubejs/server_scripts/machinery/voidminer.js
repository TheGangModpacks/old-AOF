ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("kubejs:voidminer/voidminer", 20)
        .lootTableOutput("custommachinery:voidminer_table")
        .requireStructure(
            [["aba", "bab", "ama"],
            ["cdc", "ded", "cdc"],
            ["ccc", "cfc", "ccc"]],
            {
                "a": "kubejs:steel_block",
                "b": "immersiveengineering:heavy_engineering",
                "c": "immersiveengineering:sheetmetal_steel",
                "d": "mekanism:structural_glass",
                "e": "mekanism:teleporter_frame",
                "f": "mekanismgenerators:electromagnetic_coil"
            }
        )

})