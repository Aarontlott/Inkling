import { useState, useEffect } from 'react';
import './App.css';
import { useGenerator } from './utilities/UtilityFunctions';
import { markovChains } from './data/data';

function App() {
  const getDailySeed = (date?: Date) => {
    const targetDate = date || new Date()
    targetDate.setHours(0, 0, 0, 0)
    return targetDate.getTime().toString()
  }

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [seed, setSeed] = useState(getDailySeed())
  const [customText, setCustomText] = useState("")
  const [guess, setGuess] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)
  const [timeTook, setTimeTook] = useState(0)
  const [generatedThing, setGeneratedThing] = useState({})
  const { generateThing } = useGenerator(seed, customText, guess)
  const generativeMadeSomething = Object.keys(generatedThing).length > 0
  const bookOptions = Object.keys(markovChains)

  useEffect(() => {
    const newSeed = getDailySeed(new Date(selectedDate))
    setSeed(newSeed)
  }, [selectedDate])

  useEffect(() => {
    handleGenerateClick()
  }, [seed, guess])

  useEffect(() => {
    handleGenerateClick()
  }, [])

  const handleGenerateClick = () => {
    const start = performance.now()
    console.log("generate")

    let thing = generateThing()
    setGeneratedThing(thing)
    console.log(thing)

    const end = performance.now()
    const took = (end - start)
    setTimeTook(took)
    console.log("took", took, "ms")
  }

  const handleKeyDown = (event: any) => {
    if (event?.key === 'Enter') {
      console.log(event?.key)
      generateThing()
    }
  }

  return <>
    <div className="column">
      <h3>Daily Markov</h3>
      <p>Can you guess which book these lines are from?</p>
      
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{marginBottom: '10px', display: 'block'}}
      />
      
      <select value={guess} onChange={(e) => setGuess(e.target.value)} style={{marginBottom: '10px'}}>
        <option value="">Random book for this day</option>
        {bookOptions.map((book, index) => (
          <option key={book} value={book}>Book {index + 1}</option>
        ))}
      </select>
      
    </div>
    <hr />
    {generativeMadeSomething && (
      <div>
        <div style={{marginBottom: '20px'}}>
          {generatedThing?.selectedLines?.map((line: string, index: number) => (
            <p key={index} style={{fontStyle: 'italic', margin: '10px 0'}}>"{line}"</p>
          ))}
        </div>
        <p>Showing: {guess ? `Book ${bookOptions.indexOf(guess) + 1}` : 'Random book for this day'}</p>
        <button onClick={() => setShowAnswer(!showAnswer)} style={{marginTop: '10px'}}>
          {showAnswer ? 'Hide' : 'Reveal'} Book Name
        </button>
        {showAnswer && (
          <p style={{fontWeight: 'bold', marginTop: '10px'}}>
            {generatedThing.selectedBook?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </p>
        )}
      </div>
    )}
  </>
}

export default App
