import Screen from './components/Screen.jsx'
import React from 'react'
import { HashRouter as Router, Route, Routes }  from 'react-router-dom'
import BubbleSort from './pages/BubbleSort.jsx'
import MergeSort from './pages/MergeSort.jsx'
import SelectionSort from './pages/SelectionSort.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen/>}>
          <Route index element={<MergeSort/>}/>
          <Route path="BubbleSort" element={<BubbleSort/>}/>
          <Route path='SelectionSort' element={<SelectionSort/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App