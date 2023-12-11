//Originally made by .mo_mo on Discord.
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  // /fr
  event.register(
    Commands.literal('fr')
      .requires(src => src.hasPermission(3))
      .executes(ctx => {
        let server = ctx.source.getServer()
        for (let string of [
          'startup_scripts',
          'server_scripts',
          'client_scripts',
          'lang',
          'textures'
        ]) {
          if (!server.runCommandSilent(`kubejs reload ${string}`)) return 0
        }
      })
  )
})
