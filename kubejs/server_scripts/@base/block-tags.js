const needs_stone = ['kubejs:fusion_engineering']
const needs_tin = ['kubejs:tin_pickaxe']

ServerEvents.tags('block', tag => {
  tag.add('forge:needs_stone_tool', needs_stone)
  tag.add('hltweaker:needs_tin_tool', ['#forge:ores/lapis', '#forge:ores/iron'])
})
