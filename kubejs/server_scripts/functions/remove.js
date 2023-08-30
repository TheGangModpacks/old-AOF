//priority: 1
function removeSmelting (event, input) {
    const recipe =
    event.remove({input: input, type: "smelting"})
    event.remove({input: input, type: "blasting"})
    event.remove({input: input, type: "thermal:smelter"})
    event.remove({input: input, type: "immersiveengineering:arc_furnace"})
}