const BookingInfo = ({ bookingDetails, seats }) => {
return (
    <div>
  <h5>DONE! INFO:</h5>
  <div>Movie: {bookingDetails[0]}</div>
  <div>Time: {bookingDetails[1]}</div>
  <div>Seats: {seats.map((s, i) => {
    if (s == "ABOUT2BEBOOKED") { // Här hade du kunnat använda === för att bli av med varningen i consolen
      return (
        <span>{i + 1} </span>
      )
    }
  })}</div>
 
</div>
)
}

export default BookingInfo;