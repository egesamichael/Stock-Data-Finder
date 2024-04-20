import { useState } from 'react'

import './App.css'
import Stock from './components/Stock.jsx'

function App() {
  
  const [ticker, setTicker] = useState("AAPL")

  return (
    <>
      <div className="main">
      <h1>Stock Data</h1>
      <div className="card">
        <input type="text" id="ticker" className="ticker" />
        <button >
        Get Data
        </button>
        <Stock company={ticker}/>
        </div>
      </div>
      <p className="read-the-docs">
        Just Learning React
      </p>
    </>
  )
}

export default App
