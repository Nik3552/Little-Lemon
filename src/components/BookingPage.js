import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, setAvailableTimes }) {
    return (
        <>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </>
    )
}

export default BookingPage;