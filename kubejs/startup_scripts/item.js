StartupEvents.registry('item', i =>{
    i.create('all_of_factory')

    i.create('porcelain_clay')
    i.create('leather_bound_stick')
    i.create('smth', '')
})
StartupEvents.registry('item', event =>{
    event.create('cool_paxel', 'paxel')
})