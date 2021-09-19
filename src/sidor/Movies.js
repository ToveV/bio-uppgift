import movies from "../movies"

import { Link } from 'react-router-dom';

const Movies = () => {

    return (
        <section className="movies">
            <h2>movies</h2>

<section className="flexIt">
           {movies.map((m) => {
               return (
<Link to={`/movies/${m.title}`}>{m.title} </Link>
               )

           })}
           </section>
            
        </section>
    )
}

export default Movies;