import Rand from "rand-seed";
import { getBookForDate, AUTHORS, GENRES, ERAS, WORKS } from "../data/data";

export function useGenerator(dateString: string) {
  let rand = new Rand(dateString)

  function generateThing() {
    rand = new Rand(dateString)

    const bookData = getBookForDate(dateString)
    const allLines = bookData.lines

    let thingGenerating = {
      selectedLines: allLines,
      author: bookData.author,
      work: bookData.work,
      genre: bookData.genre,
      era: bookData.era
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

  function generateMultipleChoice(correct: string, options: string[]) {
    const choices = [correct]
    const availableOptions = options.filter(opt => opt !== correct)

    while (choices.length < 4 && availableOptions.length > 0) {
      const randomOption = chooseArr(availableOptions)
      if (!choices.includes(randomOption)) {
        choices.push(randomOption)
        availableOptions.splice(availableOptions.indexOf(randomOption), 1)
      }
    }

    // Shuffle the choices
    for (let i = choices.length - 1; i > 0; i--) {
      const j = randRange(0, i)
        ;[choices[i], choices[j]] = [choices[j], choices[i]]
    }

    return choices
  }

  return {
    generateThing,
    generateMultipleChoice,
  }
}
