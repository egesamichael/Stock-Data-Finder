import { useState } from 'react'

import './App.css'
import Stock from './components/Stock.jsx'

function App() {
  
  const [ticker, setTicker] = useState("AAPL")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const styles = {
    background : isDarkMode ? "#000000" : "#FFFFFF",
    color: isDarkMode ? "#FFFFFF" : "#000000",
  }

 
  return (
    <div style={styles}>

      <h1>Stock Data</h1>
      <div className="main">
    
      <div className="form">
      <input type="text" className="ticker" />
        <button >
        Get Data
        </button>
        </div>
      <div className="stockCard">
      
        <Stock company={ticker}/>
        </div>
      </div>
      <p className="read-the-docs">
        Just Learning React
      </p>
    </div>
  )
}

export default App
