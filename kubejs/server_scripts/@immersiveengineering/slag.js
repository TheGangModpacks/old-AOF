ServerEvents.recipes(r =>{
    r.remove({input: 'thermal:slag', type: 'smelting'})
    r.remove({input: 'thermal:slag', type: 'blasting'})

    new doubleSmelt(r, 'thermal:slag', 'kubejs:slag_brick')
})