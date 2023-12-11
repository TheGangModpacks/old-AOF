ItemEvents.tooltip(tip =>{
    tip.addAdvanced(Item.of('kubejs:copper_pickaxe'), (item, advanced, text) => {
        text.add(Component.of('§6Well Established§r: You gain additional §aXP'))
    })
    tip.addAdvanced(Item.of('kubejs:silver_sword'), (item, advanced, text) => {
        text.add(Component.of('§bHoly§r: You deal increased damage to §Skeletons'))
    })
})