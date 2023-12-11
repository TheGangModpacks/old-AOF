//priority: 1
const pane_properties = {
    copper: { color: copper }
}

global.panes = [
    'copper'
]




StartupEvents.registry('item', i =>{
    for(const panes of global.panes){
        i.create(`${panes}_photoelectric_pane`)
    }
})