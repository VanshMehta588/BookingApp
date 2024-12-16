import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from '../useContext/DateContext';
import '../styles/BookingInterface.css';

const BookingInterface = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const { availableDate, setAvailableDate } = useContext(DateContext); 
    const [timeSlots, setTimeSlots] = useState([]);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
        generateTimeSlots();
    }, [currentDate]);

    const generateCalendar = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const isDisabled = date < new Date(availableDate.setHours(0, 0, 0, 0));
            const isToday = date === new Date(availableDate.setHours(0, 0, 0, 0));
            const isSelected = selectedDate === dateString;

            days.push(
                <div
                    key={i}
                    className={`calendar-day ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''} ${isToday ? '' : ''}`}
                    onClick={() => !isDisabled && setSelectedDate(dateString) && isToday}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 13; hour < 24; hour++) {
            for (let minute of ['00', '30']) {
                if (hour === 23 && minute === '30') break;
                const time = `${hour % 12 || 12}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
                slots.push(time);
            }
        }
        setTimeSlots(slots);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleAvailableDateChange = (e) => {
        setAvailableDate(new Date(e.target.value));
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row mb-4">
                <div className="col">
                    <p className="fontsize-1">
                        Below you can find list of available time slots for <span className="text-primary fontsize-1">Dr. Steve rogers</span> by <span className="text-primary fontsize-1">clinic name</span>. Click on a time slot to proceed with booking.
                    </p>
                </div>
            </div>
            <div className="mb-4 w-25">
                <input
                    type="date"
                    className="form-control visually-hidden"
                    value={availableDate instanceof Date && !isNaN(availableDate)
                        ? availableDate.toISOString().split('T')[0]
                        : ''
                    }
                    disabled
                    onChange={handleAvailableDateChange}
                />
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="calendar-container">
                        <h2 className="fontsize-1">Select a Date</h2>
                        <div className="calendar-header">
                            <button onClick={handlePrevMonth} className="prevbtn"><i className="bi bi-caret-left-fill"></i></button>
                            <h3 id="monthYear">{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h3>
                            <button onClick={handleNextMonth} className="nextbtn"><i className="bi bi-caret-right-fill"></i></button>
                        </div>
                        <div className="weekdays">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day}>{day}</div>
                            ))}
                        </div>
                        <div className="calendar" id="calendar">
                            {generateCalendar(currentDate.getFullYear(), currentDate.getMonth())}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="time-slot-container">
                        <h2 className="fontsize-1">Select a Time Slot</h2>
                        <div id="timeSlots" className="time-slots">
                            <div className="slots-container">
                                {timeSlots.map((time, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`btn btn-primary time-slot ${selectedTime === time ? 'selected' : ''}`}
                                        onClick={() => handleTimeSelect(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {selectedDate && selectedTime && (
                        <div id="confirmation" className="confirmation text-center">
                            <h3>Appointment Confirmed</h3>
                            <p id="confirmationText">You have booked an appointment on {selectedDate} at {selectedTime}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default BookingInterface;

