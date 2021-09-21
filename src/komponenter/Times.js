const Times = ({ theMovie, setSeats, setShowSeats, setTime }) => {
    return (
        <section className="shows">
            <h2>{theMovie.title}</h2>
              {theMovie.shows.map((s) => { // JAg hade föredragit ett längre variabelnamn t.ex show
                return <section>
                  <div onClick={() => {
                    setSeats(s.seats);
                    setShowSeats(true);
                    setTime(s.time);
                  }
                    }>{s.time}</div>
            </section> 
        })}
            
  </section>
    )
    }
    
    export default Times;