import logo from './logo.svg'; //Den här bör du ta bort
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useEffect, useState } from "react"

import Movies from "./sidor/Movies"
import Shows from "./sidor/Shows"

import movies from "./movies"

function App() {

  const [muvies, setMuvies] = useState(null);

  useEffect(() => {
    setMuvies(movies)
  }, [])

  console.log(muvies);
  return (
    <div className="App">
      <Router>

        <Link to="/movies">movies</Link>

         <Switch>
           <Route path="/movies" exact>
             <Movies />
            </Route>
            <Route path="/movies/:movie" exact>
             <Shows movies={muvies} />
            </Route> 
            {
             // Här bör du ha en felhantering. http://localhost:3000/movies/title8 leder till ett fult felmeddelande
            }
          </Switch>
       </Router>
    </div>
  );
}

export default App;


