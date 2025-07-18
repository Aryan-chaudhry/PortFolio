import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import HandleRoute from './RouterHandling/HandleRoute'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <HandleRoute />
    </BrowserRouter>
  )
}

export default App
