//priority: 1
function alloySmeltingTriple(
  event,
  duration,
  input1,
  input2,
  input3,
  output,
  energy
) {
  const recipe = event.recipes.custommachinery
    .custom_machine('kubejs:alloy/smelter', duration)
    .requireItem(input1)
    .requireItem(input2)
    .produceItem(output)
    .requireItem(input3)
    .requireEnergy(energy)

  event.recipes.custommachinery
    .custom_machine('kubejs:alloy/enhanced', duration - 0.1 * 10)
    .requireItem(input1)
    .requireItem(input2)
    .produceItem(output)
    .requireItem(input3)
    .requireEnergy(energy)
}

function alloySmeltingDouble(event, duration, input1, input2, output, energy) {
  const recipe = event.recipes.custommachinery
    .custom_machine('kubejs:alloy/smelter', duration)
    .requireItem(input1)
    .requireItem(input2)
    .requireEnergy(energy)
    .produceItem(output)

  event.recipes.custommachinery
    .custom_machine('kubejs:alloy/enhanced', duration - 0.1 * 10)
    .requireItem(input1)
    .requireItem(input2)
    .requireEnergy(energy)
    .produceItem(output)
}


