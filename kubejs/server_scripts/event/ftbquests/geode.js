FTBQuestsEvents.customReward("16AE1D47ED8211A6", (event) => {
    Notification.make(n => {
        n.itemIcon = 'emendatusenigmatica:budding_certus_quartz'
        n.text = "Found a Certus Quartz Geode";
        n.backgroundColor = Color.BLUE
        n.borderColor = Color.AQUA
        n.show()
    })
});