import { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Select, MenuItem, FormControl, Button, Paper, Divider } from '@mui/material';
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

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 300 }}>
          Daily Markov
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Can you guess which book these lines are from?
        </Typography>
      </Box>

      {generativeMadeSomething && (
        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Box sx={{ mb: 3 }}>
            {generatedThing?.selectedLines?.map((line: string, index: number) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ 
                  fontStyle: 'italic', 
                  mb: 2, 
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  '& ::before': { content: '"' },
                  '& ::after': { content: '"' }
                }}
              >
                {line}
              </Typography>
            ))}
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Showing: {bookChosen ? `Book ${bookOptions.indexOf(bookChosen) + 1}` : 'Random book for this day'}
            </Typography>
            
            <Button 
              variant="contained" 
              onClick={() => setShowAnswer(!showAnswer)}
              sx={{ mb: 2 }}
            >
              {showAnswer ? 'Hide' : 'Reveal'} Book Name
            </Button>
            
            {showAnswer && (
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {generatedThing.selectedBook?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Typography>
            )}
          </Box>
        </Paper>
      )}

      <Paper elevation={1} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <TextField
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            size="small"
            sx={{ width: 200 }}
          />
          
          {bookChosen && (
            <Typography variant="h5" sx={{ fontWeight: 300 }}>
              Book {bookOptions.indexOf(bookChosen) + 1}
            </Typography>
          )}
          
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <Select
              value={bookChosen}
              onChange={(e) => {setGuess(e.target.value); setShowAnswer(false)}}
              displayEmpty
            >
              <MenuItem value="">Random book for this day</MenuItem>
              {bookOptions.map((book, index) => (
                <MenuItem key={book} value={book}>Book {index + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button variant="outlined" onClick={handleNextBook}>
            Next Book
          </Button>
        </Box>
      </Paper>

    </Container>
  )
}

export default App
