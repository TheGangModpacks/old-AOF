ItemEvents.tooltip(t => {
  for (const mob of global.mobs) {
    t.addAdvanced(
      Item.of(`kubejs:${mob}_data_model`),
      (item, advanced, text) => {
        let nbt = item.nbt.getDouble('Data')
        if (nbt == undefined || nbt == null) {
          text.add(Component.red('Data Model is not initialized!'))
        } else if (nbt < 6.0) {
          text.add(Component.darkPurple('Tier: §7Faulty'))
        } else if (nbt >= 6.0 && nbt <= 11.0) {
          text.add(Component.darkPurple('Tier: §aBasic'))
        } else if (nbt >= 12.0 && nbt <= 29.0) {
          text.add(Component.darkPurple('Tier: §bAdvanced'))
        } else if (nbt >= 30.0 && nbt <= 49.0) {
          text.add(Component.darkPurple('Tier: §eSuperior'))
        } else if (nbt == 50.0) {
          text.add(Component.darkPurple('Tier: §6Self-Aware'))
        }
      }
    )
  }
})
