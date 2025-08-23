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
  const [bookChosen, setGuess] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)
  const [generatedThing, setGeneratedThing] = useState({})
  const { generateThing } = useGenerator(seed, bookChosen)
  const generativeMadeSomething = Object.keys(generatedThing).length > 0
  const bookOptions = Object.keys(markovChains)

  useEffect(() => {
    const newSeed = getDailySeed(new Date(selectedDate))
    setSeed(newSeed)
  }, [selectedDate])

  useEffect(() => {
    handleGenerateClick()
  }, [seed, bookChosen])

  const handleGenerateClick = () => {
    setGeneratedThing(generateThing())
  }

  const handleNextBook = () => {
    const currentIndex = bookChosen ? bookOptions.indexOf(bookChosen) : -1
    const nextIndex = (currentIndex + 1) % bookOptions.length
    setGuess(bookOptions[nextIndex])
    setShowAnswer(false)
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
      
      {bookChosen && <h4>Book {bookOptions.indexOf(bookChosen) + 1}</h4>}
      
      <select value={bookChosen} onChange={(e) => {setGuess(e.target.value); setShowAnswer(false)}} style={{marginBottom: '10px'}}>
        <option value="">Random book for this day</option>
        {bookOptions.map((book, index) => (
          <option key={book} value={book}>Book {index + 1}</option>
        ))}
      </select>
      
      <button onClick={handleNextBook} style={{display: 'block', marginBottom: '10px'}}>
        Next Book
      </button>
      
    </div>
    <hr />
    {generativeMadeSomething && (
      <div>
        <div style={{marginBottom: '20px'}}>
          {generatedThing?.selectedLines?.map((line: string, index: number) => (
            <p key={index} style={{fontStyle: 'italic', margin: '10px 0'}}>"{line}"</p>
          ))}
        </div>
        <p>Showing: {bookChosen ? `Book ${bookOptions.indexOf(bookChosen) + 1}` : 'Random book for this day'}</p>
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
