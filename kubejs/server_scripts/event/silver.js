EntityEvents.hurt(e =>{
    let entity = e.entity
    let player = e.source.player
    if (!player) return
    if (entity.type == 'minecraft:skeleton' || entity.type == 'minecraft:wither_skeleton' && player.mainHandItem.id == 'kubejs:silver_sword') {
        entity.attack(10)
    }
})