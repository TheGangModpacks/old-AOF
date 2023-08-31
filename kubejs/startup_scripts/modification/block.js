const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')


function modifySound (event, block, SOUND) {
    event.modify(block, event =>{
        event.soundType = SOUND
    })
}

BlockEvents.modification(b =>{
    modifySound(b, 'cauldron', $SoundType.CALCITE)
    modifySound(b, 'water_cauldron', $SoundType.CALCITE)
    modifySound(b, 'lava_cauldron', $SoundType.CALCITE)
    modifySound(b, 'powder_snow_cauldron', $SoundType.CALCITE)
})