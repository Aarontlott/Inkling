import { ArrowBackIos, ArrowForwardIos, CheckBox as RightAnswerIcon, DisabledByDefault as WrongAnswerIcon, CheckBoxOutlineBlankOutlined as UnansweredIcon, CheckCircle, Cancel, HelpOutline, Close } from '@mui/icons-material';
import { Box, Button, Container, Divider, IconButton, Typography, Chip, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { AUTHORS, ERAS, GENRES, WORKS, markovChains } from './data/data';
import { useGenerator } from './utilities/UtilityFunctions';

type Question = 'era' | 'genre' | 'author' | 'work'
type Guess = {
  question: Question
  answer: string
  correct: boolean
}
type QuizOptions = {
  era: string[]
  genre: string[]
  author: string[]
  work: string[]
}
type GeneratedThing = {
  era: string
  genre: string
  author: string
  work: string
  selectedLines: string[]
}

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [gameComplete, setGameComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [showHowToPlay, setShowHowToPlay] = useState(false)
  const [quizOptions, setQuizOptions] = useState<QuizOptions>({ era: [], genre: [], author: [], work: [] })
  const questions: Question[] = ['era', 'genre', 'author', 'work']
  const questionText = ["Which era does this sound like?", "What's the literary style?", "Which author's style does this most resemble?", "Which work is the closest source?"]
  const [generatedThing, setGeneratedThing] = useState<GeneratedThing>({} as GeneratedThing)

  const formatDateString = (dateStr: string) => {
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const { generateThing, generateMultipleChoice } = useGenerator(formatDateString(selectedDate))
  const generativeMadeSomething = Object.keys(generatedThing).length > 0

  useEffect(() => {
    handleGenerateClick()
    setCurrentLineIndex(0)
    setCurrentQuestion(0)
    setGuesses([])
    setGameComplete(false)
  }, [selectedDate])

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

  const handleAnswer = (answer: string) => {
    const correct = answer === generatedThing[questions[currentQuestion]]
    const newGuess = { question: questions[currentQuestion], answer, correct }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)

    if (currentQuestion === questions.length - 1) {
      setGameComplete(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setGuesses([])
    setGameComplete(false)
    setCurrentLineIndex(0)
  }

  const startGame = () => {
    setGameStarted(true)
  }

  const previousLine = () => {
    const maxLines = generatedThing?.selectedLines?.length || 0
    setCurrentLineIndex((currentLineIndex - 1 + maxLines) % maxLines)
  }

  const nextLine = () => {
    const maxLines = generatedThing?.selectedLines?.length || 0
    setCurrentLineIndex((currentLineIndex + 1) % maxLines)
  }

  const buttonStyle = { color: '#fff', backgroundColor: "black", borderRadius: '20px' }

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
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" size="large" onClick={startGame} sx={buttonStyle}>
              Play
            </Button>
            <Button variant="outlined" size="large" onClick={() => setShowHowToPlay(true)} sx={{ color: '#000', border: '#000 2px solid', borderRadius: '20px' }}>
              <HelpOutline sx={{ mr: 1 }} /> How to Play
            </Button>
          </Box>
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
                    {generatedThing?.selectedLines?.[currentLineIndex]}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <IconButton size="small" onClick={previousLine}>
                    <ArrowBackIos />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    {currentLineIndex + 1} / {generatedThing?.selectedLines?.length || 0}
                  </Typography>
                  <IconButton size="small" onClick={nextLine}>
                    <ArrowForwardIos />
                  </IconButton>
                </Box>
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
                    {(() => {
                      const correctCount = guesses.filter(g => g.correct).length
                      const gotFinalRight = guesses[3]?.correct
                      
                      if (correctCount === 4) return '🎉 Perfect!'
                      if (correctCount >= 2 && gotFinalRight) return 'Great job!'
                      if (correctCount >= 2 && !gotFinalRight) return 'So close!'
                      if (correctCount === 1 && gotFinalRight) return 'Lucky guess!'
                      return 'Better luck next time!'
                    })()} 
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

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button variant="contained" onClick={resetGame} sx={buttonStyle}>
                      Play Again
                    </Button>
                    <select 
                      value={selectedDate} 
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: '1px solid #ccc',
                        backgroundColor: 'white'
                      }}
                    >
                      {markovChains.map((book) => {
                        const [day, month, year] = book.date.split('-')
                        const displayDate = `${year}-${month}-${day}`
                        return (
                          <option key={book.date} value={displayDate}>
                            {displayDate}
                          </option>
                        )
                      })}
                    </select>
                  </Box>
                </Box>
              )}

            </Box>
          )}
        </>
      )}
      
      <Modal open={showHowToPlay} onClose={() => setShowHowToPlay(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxHeight: '80vh',
          overflow: 'auto'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" fontFamily="Merriweather, serif" fontWeight="bold">How to Play Inkling</Typography>
            <IconButton onClick={() => setShowHowToPlay(false)}>
              <Close />
            </IconButton>
          </Box>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Game Rules</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            1. Read the scrambled text generated from a classic literary work.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            2. Answer 4 questions in sequence: Era → Genre → Author → Work.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            3. Use the arrow buttons to browse through different text snippets for clues.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            4. Try to get all 4 questions right for a perfect score!
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h6" sx={{ mb: 2 }}>What's a Markov Chain?</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A Markov chain is a mathematical model that generates new text by analyzing patterns in existing text. 
            It looks at which words commonly follow other words and uses this to create new, often nonsensical sentences.
          </Typography>
          <Typography variant="body1">
            We've fed classic literature into Markov chains to create scrambled versions that maintain the 
            author's style and vocabulary while being completely new (and usually amusing) text.
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}

export default App
