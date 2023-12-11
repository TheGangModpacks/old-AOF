//Alloy Induction Upgrade
CustomMachineryEvents.upgrades((up) => {
  up.create("kubejs:alloy_induction_upgrade", 4)
    .machine(["kubejs:alloy/smelter", "kubejs:alloy/enhanced"])
    .tooltip(Text.of("§aIncreases §6Alloy Smelter §bSpeed §fby §b10%, §4Increases §cFE Usage §fby §c100%"))
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.9))
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:energy", 2.0));
});

//Expanded Coils
CustomMachineryEvents.upgrades((up) => {
  up.create("thermal:rf_coil_augment", 1)
    .machine("kubejs:alloy/smelter")
    .tooltip(Text.of("Decreases §6Alloy Smelter §cFE Usage §fby §c40%"))
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:energy", 0.6));
});
