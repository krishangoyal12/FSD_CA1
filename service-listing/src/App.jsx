import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'

const data = [
  {
    serviceTitle: "Web Development",
    description: "Contact to create a dynamic website"
  },
  {
    serviceTitle: "Stock Analyser",
    description: "Contact to choose the right stock to invest"
  },
  {
    serviceTitle: "Hardware Engineer",
    description: "Contact to solve any hardware related issues"
  },
]

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home data = {data}/>}/>
      </Routes>
    </>
  )
}

export default App
