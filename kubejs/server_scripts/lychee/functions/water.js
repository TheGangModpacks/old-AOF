//priority: 1
    function waterCauldron (event, input, output) {
        const recipe =
        event.custom({
            type: 'lychee:block_interacting',
            item_in: {item: input},
            block_in: {
                blocks: ["water_cauldron"],
                state: {level: 3}
            },
            post: [
                {type: 'drop_item', item: output},
                {type: 'place', block: {blocks: ['water_cauldron'], state: {level: 2}}},
                {type: 'execute', command: 'playsound minecraft:item.bottle.empty block @p', hide: true}
            ]
        })
        event.custom({
          type: 'lychee:block_interacting',
          hide_in_viewer: true,
          item_in: {item: input},
          block_in: {
              blocks: ["water_cauldron"],
              state: {level: 2}
          },
          post: [
              {type: 'drop_item', item: output},
              {type: 'place', block: {blocks: ['water_cauldron'], state: {level: 1}}},
              {type: 'execute', command: 'playsound minecraft:item.bottle.empty block @p', hide: true}
          ]
        })
        event.custom({
          type: 'lychee:block_interacting',
          hide_in_viewer: true,
          item_in: {item: input},
          block_in: {
              blocks: ["water_cauldron"],
              state: {level: 1}
          },
          post: [
              {type: 'drop_item', item: output},
              {type: 'place', block: 'cauldron'},
              {type: 'execute', command: 'playsound minecraft:item.bottle.empty block @p', hide: true}
          ]
        })
    }
ServerEvents.recipes(event =>{
    waterCauldron(event, 'emendatusenigmatica:copper_dirty_dust', 'emendatusenigmatica:copper_dust')
})