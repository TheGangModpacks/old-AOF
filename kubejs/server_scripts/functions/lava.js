//priority: 1
function lavaCauldron(event, input, output) {
    const recipe = event.custom({
      type: 'lychee:block_interacting',
      item_in: { item: input },
      block_in: {
        blocks: ['lava_cauldron']
      },
      post: [
        { type: 'drop_item', item: output },
        {
          type: 'place',
          block: { blocks: ['cauldron']}
        }
      ]
    })
  }
  