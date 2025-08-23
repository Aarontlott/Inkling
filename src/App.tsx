import { useState } from 'react';
import './App.css';
import { useGenerator } from './utilities/UtilityFunctions';

function App() {
  const [seed, setSeed] = useState("Aberdeen")
  const [timeTook, setTimeTook] = useState(0)
  const [generatedThing, setGeneratedThing] = useState({})
  const { generateThing } = useGenerator(seed)
  const generativeMadeSomething = Object.keys(generatedThing).length > 0

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
      <h3>Welcome to Core Generative Tech</h3>
      <p>let's have fun today :&#41;</p>
      <div className="row">
        <input className="shipName_input" type="text" onKeyDown={handleKeyDown} onChange={(e) => setSeed(e.target.value)} defaultValue={seed} />
        <button onClick={handleGenerateClick}>random seed</button>
      </div>
      <button onClick={handleGenerateClick}>generate</button>
    </div>
    <hr />
    {generativeMadeSomething && <p>Generated content, took {timeTook} ms:</p>}
    <pre>{generativeMadeSomething && JSON.stringify(generatedThing, null, 2)}</pre>
  </>
}

export default App
