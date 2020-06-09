import React from 'react'
import '../App.css'

export default function FeaturedMovie(props) {

    function handleReload(e) {
        e.preventDefault()
        window.location.reload()
    }

    return (
        <div className="Movie-card">
            <h2>{props.movie.original_title}</h2>
            <img src={props.movie.poster} alt="movie poster" />
            <div className="Movie-infobar">
                <p>{props.movie.release_date}</p>
                <p>Rating: {props.movie.vote_average}/5 </p>
                <p>Number of Ratings: {props.movie.vote_count}</p>
            </div>
            <p className="Overview">{props.movie.overview}</p>
            <div className="Buttons">
                <button onClick={handleReload}>Next Movie</button>
                <button>🖤 Favorite</button>
            </div>
        </div>
    )
}