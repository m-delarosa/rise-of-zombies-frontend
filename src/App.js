import React from 'react'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'
import Favorites from './components/Favorites'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rise of Zombies</h1>
        <h4>Find a new zombie movie today.</h4>
      </div>
      <div className="Main-container">
        <Favorites className="Favorites" />
        <FeaturedMovie className="Movie-card" />
      </div>
    </div>
  )
}

export default App
