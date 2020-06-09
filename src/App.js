import React, { Component } from 'react'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'
import Favorites from './components/Favorites'

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(moviesList => this.setState({ movies: moviesList }))
      .then(console.log("Movies Fetched!"))
  }



  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Rize</h1>
          <h4>Raise the dead with a zombie movie today.</h4>
        </div>
        <div className="Main-container">
          <Favorites className="Favorites" />
          {this.state.movies.length > 0
            ? <FeaturedMovie className="Movie-card" movie={this.state.movies[Math.floor(Math.random() * this.state.movies.length)]} />
            : null
          }
        </div>
      </div>
    )
  }
}

export default App
