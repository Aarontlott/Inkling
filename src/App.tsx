import { Add, Loop, CheckBox as RightAnswerIcon, DisabledByDefault as WrongAnswerIcon, CheckBoxOutlineBlankOutlined as UnansweredIcon, CheckCircle, Cancel } from '@mui/icons-material';
import { Box, Button, Container, Divider, IconButton, Typography, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { AUTHORS, ERAS, GENRES, WORKS } from './data/data';
import { useGenerator } from './utilities/UtilityFunctions';

function App() {
  const getDailySeed = (date?: Date) => {
    const targetDate = date || new Date()
    targetDate.setHours(0, 0, 0, 0)
    return targetDate.getTime().toString()
  }

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [seed, setSeed] = useState(getDailySeed())
  const [unlockedLines, setUnlockedLines] = useState([0])
  const [currentViewIndex, setCurrentViewIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [guesses, setGuesses] = useState([])
  const [gameComplete, setGameComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [quizOptions, setQuizOptions] = useState({ era: [], genre: [], author: [], work: [] })
  const questions = ['era', 'genre', 'author', 'work']
  const questionText = ["Which era does this sound like?", "What's the literary style?", "Which author's style does this most resemble?", "Which work is the closest source?"]
  const [generatedThing, setGeneratedThing] = useState({})
  const { generateThing, generateMultipleChoice } = useGenerator(seed)
  const generativeMadeSomething = Object.keys(generatedThing).length > 0

  useEffect(() => {
    const newSeed = getDailySeed(new Date(selectedDate))
    setSeed(newSeed)
  }, [selectedDate])

  useEffect(() => {
    handleGenerateClick()
    setUnlockedLines([0])
    setCurrentViewIndex(0)
    setCurrentQuestion(0)
    setGuesses([])
    setGameComplete(false)
  }, [seed])

  const handleGenerateClick = () => {
    const thing = generateThing()
    setGeneratedThing(thing)

    // Generate quiz options
    setQuizOptions({
      era: generateMultipleChoice(thing.era, ERAS),
      genre: generateMultipleChoice(thing.genre, GENRES),
      author: generateMultipleChoice(thing.author, AUTHORS),
      work: generateMultipleChoice(thing.work, WORKS)
    })
  }

  const handleAnswer = (answer) => {
    const correct = answer === generatedThing[questions[currentQuestion]]
    const newGuess = { question: questions[currentQuestion], answer, correct }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)

    if (!correct || currentQuestion === questions.length - 1) {
      setGameComplete(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setGuesses([])
    setGameComplete(false)
    setUnlockedLines([0])
    setCurrentViewIndex(0)
    setGameStarted(false)
  }

  const startGame = () => {
    setGameStarted(true)
  }

  const nextLine = () => {
    if (unlockedLines.length > 1) {
      setCurrentViewIndex((currentViewIndex + 1) % unlockedLines.length)
    }
  }

  const addLine = () => {
    const maxLines = generatedThing?.selectedLines?.length || 0
    const nextLineIndex = Math.max(...unlockedLines) + 1
    if (nextLineIndex < maxLines && !unlockedLines.includes(nextLineIndex)) {
      setUnlockedLines([...unlockedLines, nextLineIndex])
      setCurrentViewIndex(unlockedLines.length)
    }
  }

  const buttonStyle = {color: '#fff', backgroundColor: "black", borderRadius: '20px'}

  return (
    <Container maxWidth="md" sx={{ height: '100%', py: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!gameStarted ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" fontFamily="Merriweather, serif" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
            Inkling
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Guess which literary work these nonsensical Markov-chain sentences are from.
          </Typography>
          <Button variant="contained" size="large" onClick={startGame} sx={buttonStyle}>
            Play
          </Button>
        </Box>
      ) : (
        <>
          {generativeMadeSomething && (
            <Box sx={{ p: 2 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Typography
                    variant="body1"
                    fontFamily="Merriweather, serif"
                    sx={{
                      fontSize: '1.2rem',
                      lineHeight: 1.6,
                      flex: 1,
                      '& ::before': { content: '"' },
                      '& ::after': { content: '"' }
                    }}
                  >
                    {generatedThing?.selectedLines?.[unlockedLines[currentViewIndex]]}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {unlockedLines.length > 1 ? (
                    <IconButton size="small" onClick={nextLine}>
                      <Loop />
                    </IconButton>
                  ) : (
                    <Box />
                  )}
                  {Math.max(...unlockedLines) < (generatedThing?.selectedLines?.length || 0) - 1 && (
                    <IconButton size="small" onClick={addLine}>
                      <Add />
                    </IconButton>
                  )}
                </Box>
                {unlockedLines.length > 1 && (
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    ({currentViewIndex + 1}/{unlockedLines.length})
                  </Typography>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Show completed questions */}
              {guesses.map((guess, index) => (
                <Box key={index} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem" }}>
                    {questionText[index]}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    {guess.correct ? 
                    <CheckCircle sx={{ color: 'success.main', fontSize: 30 }} /> :
                    <Cancel sx={{ color: 'error.main', fontSize: 30 }} />}
                    <Chip
                      label={`${guess.answer}`}
                      sx={{
                        ...buttonStyle,
                        width: '100%'
                      }}
                    />
                  </Box>
                </Box>
              ))}

              {/* Show current question if game not complete */}
              {!gameComplete && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 'bold' }}>
                    {questionText[currentQuestion]}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {quizOptions[questions[currentQuestion]]?.map((option, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => handleAnswer(option)}
                        sx={{ ...buttonStyle, textTransform: 'none', textAlign: 'left', justifyContent: 'flex-start' }}
                      >
                        {option}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}

              {gameComplete && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {guesses.every(g => g.correct) ? '🎉 Perfect!' :
                      guesses.filter(g => g.correct).length === 3 ? '👏 Great job!' :
                        guesses.filter(g => g.correct).length >= 1 ? '👍 Good try!' : '😅 Better luck next time!'}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0, mb: 3 }}>
                    {[0, 1, 2, 3].map((index) => {
                      const guess = guesses[index]
                      if (!guess) {
                        return <UnansweredIcon key={index} sx={{ color: 'grey.400', fontSize: 40 }} />
                      }
                      return guess.correct ? 
                        <RightAnswerIcon key={index} sx={{ color: 'success.main', fontSize: 40 }} /> :
                        <WrongAnswerIcon key={index} sx={{ color: 'error.main', fontSize: 40 }} />
                    })}
                  </Box>

                  <Box sx={{ textAlign: 'left', p: 2, bgcolor: 'grey.50', borderRadius: 1, mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                      {generatedThing.work}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      by {generatedThing.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {generatedThing.genre} • {generatedThing.era}
                    </Typography>
                  </Box>

                  <Button variant="contained" onClick={resetGame} sx={buttonStyle}>
                    Play Again
                  </Button>
                </Box>
              )}

            </Box>
          )}
        </>
      )}

      {/* 
      
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
            <Box sx={{ textAlign: 'left', mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                {generatedThing.work}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                by {generatedThing.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {generatedThing.genre} • {generatedThing.era}
              </Typography>
            </Box>
          )}
        </Box>
      
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
      </Paper> */}

    </Container>
  )
}

export default App
