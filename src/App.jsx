import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import BaristaForm from './components/BaristaForm'
import drinkImg from './assets/drink.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className="title-container">
        <img src={drinkImg} alt="Drink icon" className="title-icon"/>
        <div className="title-text">
          <h1 className="title">On My Grind</h1>
          <p className="subtitle">So you think you can barista? Let's put that to the test...</p>
        </div>
      </div>

      <BaristaForm />
    </div>

    </>
  )
}

export default App
