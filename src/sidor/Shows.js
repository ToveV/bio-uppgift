import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useState } from "react";

import BookingInfo from "../komponenter/BookingInfo"
import Times from "../komponenter/Times"

const Shows = ({movies}) => {

    const { movie } = useParams();
    let theMovie = movies.find((m) => m.title == movie);

    
    const [seats, setSeats] = useState([])
    const [showSeats, setShowSeats] = useState(false);
    const [time, setTime] = useState(null);
    const [bookingDetails, setBookingDetails] = useState([]);

    if (bookingDetails.length != 0) {
      document.querySelector(".seats").style.display = "none";
      document.querySelector(".shows").style.display = "none";
    }

    

    function bookSeat(i) {
      let correctSeats = [...seats];
      console.log(correctSeats);
      if (correctSeats[i] !== "booked") {
        if (correctSeats[i] === "free") {
          correctSeats[i] = "ABOUT2BEBOOKED";
          setSeats(correctSeats);
        } else {
          correctSeats[i] = "free";
          setSeats(correctSeats);
        } 
      } else {
      alert("UPPTAGEN")
      }
    }

    return (
      <section>

        <Times theMovie={theMovie} setSeats={setSeats} setShowSeats={setShowSeats} setTime={setTime} />

{showSeats ? <section className="seats">
        <h1>{time}</h1>
        {seats.map((s, i) => {
          return (
            <span onClick={() => bookSeat(i)} className={s}>{i + 1}</span>
          )
        }
        )}

        {seats.includes("ABOUT2BEBOOKED") ? <div><button onClick={() => setBookingDetails([movie, time])}>BOOK</button></div> : null}

</section> : null}

{bookingDetails.length != 0 ?
  <BookingInfo bookingDetails={bookingDetails} seats={seats} />
: null}

</section>
    )
}

export default Shows;