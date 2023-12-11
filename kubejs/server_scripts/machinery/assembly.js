ServerEvents.recipes(r =>{
    const assembly = `kubejs:assembly/assembly_basic`;
    r.recipes.custommachinery.custom_machine(assembly, 100)
    .requireEnergyPerTick(30)
    .requireItemTag("ae2:glass_cable", 1)
    .requireFluid(Fluid.of('water', 50))
    .produceItem(Item.of('ae2:fluix_glass_cable'))
    
})