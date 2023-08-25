ServerEvents.recipes(r =>{
    r.remove({output: /emendatusenigmatica:(\w+)_dust|emendatusenigmatica:(\w+)_ingot/g    , type: 'crafting_shapeless'})
    r.remove({input: 'thermal:earth_charge'})
})