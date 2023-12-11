StartupEvents.registry('block', block => {
  block
    .create('immersiveengineering:fusion_engineering')
    .hardness(4.0)
    .requiresTool(true)
    .soundType('metal')
    .defaultCutout()
    .displayName('Fusion Engineering Block').modelJson = {
    parent: 'kubejs:block/ore',
    textures: {
      all: `immersiveengineering:block/metal_decoration/heavy_engineering`,
      particle: `kubejs:block/fusion_engineering_cutout`,
      overlay: `kubejs:block/fusion_engineering_cutout`
    }
  }
})
