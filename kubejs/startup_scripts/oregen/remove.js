WorldgenEvents.remove(w => {
    w.removeOres(props => {
      props.blocks = Ingredient.of("forge:ores").itemIds
    })
})