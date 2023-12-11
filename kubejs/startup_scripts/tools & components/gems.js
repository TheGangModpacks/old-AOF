const gem_props = {
  apatite: { color: apatite },
  fluorite: { color: fluorite },
  cinnabar: { color: cinnabar }
}

global.gems = ['apatite', 'fluorite', 'cinnabar']

StartupEvents.registry('item', event => {
  function gem(name, path) {
    event.create(`${name}_gem`).texture(path).tag('forge:gems').tag(`forge:gems/${name}`)
  }
  for (const mat of global.gems) {
    event
      .create(`${mat}`)
      .texture('layer0', 'kubejs:item/crystal_gem')
      .color(0, gem_props[mat].color)
      .tag('forge:gems')
      .tag(`forge:gems/${mat}`)
  }

  gem('apatite')
})
