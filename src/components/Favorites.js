import React from 'react'

export default function Favorites(props) {
    const showFavorites = () => {
        return <h4> Movie Name</h4>
    }

    return (
        <ul className="Favorites"> Favorites:
            <li>Movie name</li>
            {showFavorites}
        </ul>
    )
}

    // const showFavorites = () => favorites.map(movie) => (
    //     <li>
    //         <h4>Movie Name</h4>
    //     </li>
    // )