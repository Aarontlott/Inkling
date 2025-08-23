import Rand from "rand-seed";
import { exampleArray } from "../data/example";

export function useGenerator(seed: string) {
  let rand = new Rand(seed)

  function generateThing() {
    rand = new Rand(seed)

    let thingGenerating = {
      range: randRange(1,100),
      roll: rollD(20),
      choose: chooseArr(exampleArray),
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

  return {
    generateThing,
  }
}
