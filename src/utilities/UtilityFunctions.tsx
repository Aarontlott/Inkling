import Rand from "rand-seed";
import { getBookForDate } from "../data/data";

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
  
  function randRange(min: number, max: number) {
    return Math.floor(rand.next() * (max - min + 1) + min)
  }

  function chooseArr(choices: any[]) {
    const roll = rollD(choices.length)
    return choices[roll - 1]
  }

  function rollD(dice: number) {
    const roll = randRange(1, dice)
    return roll
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
