const $DiggerItem = Java.loadClass("net.minecraft.world.item.DiggerItem")
StartupEvents.registry('enchantment', enchant =>{
    enchant.create('minecraft:knockback')
    .canEnchant(stack => stack.item instanceof $DiggerItem || stack.id == "minecraft:wooden_shovel")
})