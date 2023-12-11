//priority: 100
let ie = id => `immersiveengineering:${id}`
let m = id => `mm:${id}`
function mmStruct(event, id, name, layout, key, controllerId) {
  const recipe = event.build(id, {
    name: { text: name },
    controllerId: controllerId || id,
    layout: layout,
    key: key
  })
}
