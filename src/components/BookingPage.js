import { BookingForm } from './BookingForm'
import { Header } from './Header'
import { Nav } from './Nav'

export function BookingPage({ availableTimes, setAvailableTimes }) {
    availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
    return (
        <>
            <div className="header-section">
                <Header />
                <Nav />
            </div>
            <div className="booking-page">
                <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            </div>
        </>
    )
}