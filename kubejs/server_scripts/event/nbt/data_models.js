/*EntityEvents.death(e => {
  let player = e.source.player
  let offHandItem = player.getHeldItem('OFF_HAND')
  player.tell('here, have some random data:')
  player.tell(`you're holding ${offHandItem.id} in your off hand`)
  player.tell(`it has this nbt: ${offHandItem.nbtString} for some odd reason`)
  player.tell(
    `you killed the mob with the id ${e.entity.name} or ${
      e.entity.username
    }, or maybe even ${e.entity.toString()} - I don't know`
  )
  player.tell('conditions:')
  player.tell(!player)
  player.tell(!/kubejs:.*_data_model/.test(offHandItem.id))
  player.tell(!global.mobs.contains(e.entity.id))
  player.tell("that's it")
  if (
    !player ||
    !/kubejs:.*_data_model/.test(offHandItem.id) ||
    !global.mobs.contains(e.entity.id)
  )
    return
  player.tell(
    'it appears that you have killed a mod and are trying to level up this thing in your off hand...'
  )
  let nbt = offHandItem.nbt
  if (!nbt || !nbt.Data) return
  player.tell('your thing has this specific nbt data')
  nbt.Data++
  player.setHeldItem('OFF_HAND', Item.of(offHandItem.id, nbt))
  player.tell('set the item in your off hand :)')
})*/

ServerEvents.recipes(r => {
  r.shaped(
    Item.of('kubejs:zombie_data_model', '{Data:0}'),
    [' a ', 'aba', ' a '],
    {
      a: 'minecraft:zombie_head',
      b: 'thermal_extra:soul_infused_glass',
    }
  )
  for (const mob of global.mobs) {
    r.recipes.custommachinery
      .custom_machine('kubejs:simulation/chamber', 200)
      .produceItem(Item.of(`kubejs:${mob}_pearl`, 'soul'))
      .chance(0.05)
      .requireItem(Item.of(`kubejs:${mob}_data_model`), 'model')
      .chance(0)
      .requireItem(Item.of('quark:soul_bead'))
      .requireEnergyPerTick(100)
      .requireFunctionToStart(start => {
        let machine = start.machine
        let item = machine.getItemStored('model')
        let nbt = item.nbt
        if (nbt == null) return Result.error('Error 1')
        let data = nbt.getDouble('Data')
        if (data == undefined) return Result.error('Error 2')

        if (data >= 5.0 && data <= 50.0) {
          return Result.success()
        }
        return Result.error('Error 3')
      })
  }
})
