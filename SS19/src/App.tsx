import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomQuote from './component/Ss19ex5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomQuote></RandomQuote>
    </>
  )
}

export default App
