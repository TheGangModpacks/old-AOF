const mob_properties = {
  //Monster
  blaze: { color: 0xd79c01 },
  creeper: { color: 0x0c9a0a },
  drowned: { color: 0x79cdb6 },
  enderman: { color: 0x7a51be },
  elemental: { color: 0x7a51be },
  ghast: { color: 0xb2b2b2 },
  guardian: { color: 0x466559 },
  magma_slime: { color: 0xc4c400 },
  piglin: { color: 0x825136 },
  shulker: { color: 0x735073 },
  skeleton: { color: 0x969696 },
  slime: { color: 0x458835 },
  spider: { color: 0x6a0909 },
  vindicator: { color: 0x1f4a4c },
  witch: { color: 0x303414 },
  wither_skeleton: { color: 0x272929 },
  zombie: { color: 0x617d51 }
}

global.mobs = [
  'blaze',
  'creeper',
  'drowned',
  'enderman',
  'elemental',
  'ghast',
  'guardian',
  'magma_slime',
  'piglin',
  'shulker',
  'skeleton',
  'slime',
  'spider',
  'vindicator',
  'witch',
  'wither_skeleton',
  'zombie'
]

StartupEvents.registry('item', event => {
  for (const mob of global.mobs) {
    event
      .create(`${mob}_pearl`)
      .texture('layer0', 'kubejs:item/mob_pearl_shell')
      .texture('layer1', 'kubejs:item/mob_pearl_center')
      .color(1, mob_properties[mob].color)
    event
      .create(`${mob}_data_model`)
      .texture('layer0', 'kubejs:item/mob_data_model_shell')
      .texture('layer1', 'kubejs:item/mob_data_model_center')
      .color(1, mob_properties[mob].color)
      .tag('kubejs:data_models')
      .tag(`kubejs:data_models/${mob}`)
  }
})
