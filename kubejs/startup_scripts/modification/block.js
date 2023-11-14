//priority: 1
const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')


function modifySound (event, block, SOUND) {
    event.modify(block, event =>{
        event.soundType = SOUND
    })
}
BlockEvents.modification(b =>{
    let COPPER = $SoundType.COPPER
    modifySound(b, 'cauldron', COPPER)
    modifySound(b, 'water_cauldron', COPPER)
    modifySound(b, 'lava_cauldron', COPPER)
    modifySound(b, 'powder_snow_cauldron', COPPER)
})