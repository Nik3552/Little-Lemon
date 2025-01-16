import { useState } from "react";

export function BookingForm({ availableTimes }) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setDate("");
    //     setGuests("");
    //     setOccasion("");
    //     setTime("");
    //     console.log("Form is submitted")
    // }

    const today = new Date().toISOString().split('T')[0];

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} min={today} onChange={handleDateChange} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Submit Reservation" aria-label=" Submit form" disabled={!date} />
        </form>
    );
}
