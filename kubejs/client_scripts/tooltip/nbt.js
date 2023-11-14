ItemEvents.tooltip(e => {
    e.addAdvanced(Ingredient.all, (item, advanced, text) => {
      if (!advanced) return
      if (!item.nbt) return
  
      if (e.alt) text.add(Component.of('NBT: ').append(Component.prettyPrintNbt(item.nbt)))
    })
  })