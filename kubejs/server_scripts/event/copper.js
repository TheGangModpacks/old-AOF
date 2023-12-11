let blockCounter = 0

BlockEvents.broken(block => {
  let player = block.player
  if (player.mainHandItem.id == 'kubejs:copper_pickaxe') {
    blockCounter++
    if (blockCounter === 3) {
      player.server.runCommandSilent(`xp add ${player.username} 1`)
      blockCounter = 0
    }
  }
})
