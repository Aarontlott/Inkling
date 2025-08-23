import Rand from "rand-seed";
import { markovChains } from "../data/data";

export function useGenerator(seed: string, customText?: string, selectedBook?: string) {
  let rand = new Rand(seed)

  function generateThing() {
    rand = new Rand(seed)
    
    const chainKeys = Object.keys(markovChains)
    const selectedChain = selectedBook || chooseArr(chainKeys)
    const selectedLines = customText ? choose5Lines(customText) : chooseArr5(markovChains[selectedChain])

    let thingGenerating = {
      selectedBook: selectedChain,
      selectedLines: selectedLines,
      range: randRange(1,100),
      roll: rollD(20),
      choose: chooseArr([1,2,3,4]),
      chooseStr: chooseStr("a|b|c"),
      nearest10: nearest10(23),
      nearest5: nearest5(23),
      randAround: randAround(50, 0.5, 2),
    }

    return thingGenerating
  }

  // -- Utilities that use the seeded random function --
  // Important so that given a seed, all the rolls are 
  // repeatable
  function randAround(median: number, lowerPerc: number, higherPerc: number) {
    return randRange(median * lowerPerc, median * higherPerc)
  }

  function randRange(min: number, max: number) {
    return Math.floor(rand.next() * (max - min + 1) + min)
  }

  function chooseStr(wordList: string) {
    const words = wordList.split("|")
    const roll = rollD(words.length)
    return words[roll - 1]
  }

  function chooseArr(choices: any[]) {
    const roll = rollD(choices.length)
    return choices[roll - 1]
  }

  function nearest10(num: number) {
    return Math.ceil(num / 10) * 10
  }

  function nearest5(num: number) {
    return Math.ceil(num / 5) * 5
  }

  function rollD(dice: number) {
    const roll = randRange(1, dice)
    return roll
  }

  function choose5Lines(text: string) {
    const lines = text.split('\n').filter(line => line.trim())
    const selected = []
    const usedIndices = new Set()
    for (let i = 0; i < 5 && i < lines.length; i++) {
      let index
      do {
        index = randRange(0, lines.length - 1)
      } while (usedIndices.has(index))
      usedIndices.add(index)
      selected.push(lines[index])
    }
    return selected
  }

  function chooseArr5(choices: string[]) {
    const selected = []
    const usedIndices = new Set()
    for (let i = 0; i < 5 && i < choices.length; i++) {
      let index
      do {
        index = randRange(0, choices.length - 1)
      } while (usedIndices.has(index))
      usedIndices.add(index)
      selected.push(choices[index])
    }
    return selected
  }

  return {
    generateThing,
  }
}
