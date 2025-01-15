import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, setAvailableTimes }) {
    availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
    return (
        <div className="booking-page">
            <a href="/">Back</a>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
    )
}

export default BookingPage;