import { useState } from 'react'

import './App.css'

function App() {
 // const [usertheme, setUserTheme] = useState(true)

 async function changeTheme(){
 //   setUserTheme(previousTheme => !previousTheme)
  const response = await fetch("https://api.polygon.io/v1/open-close/AAPL/2023-01-09?adjusted=true&apiKey=iFujpirSbQKne_BBVG4vSfCH1KSesSTf")
  const data = await response.json()
  console.log(data)
  }

  return (
    <>
    
      <h1>Stock Data</h1>
      <div className="card">
        <button onClick={changeTheme}>
        Get Data
        </button>
        
      </div>
      <p className="read-the-docs">
        Just Learning React
      </p>
    </>
  )
}

export default App
