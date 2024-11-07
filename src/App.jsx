import React from 'react'
// import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventPage from './pages/Event'
// import ResearchPage from './pages/Research'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='/events' element={<EventPage />}  />
        {/* <Route path='/research' element={<ResearchPage />}  /> */}
      </Routes>
    <Footer />
    </Router>
  )
}

export default App