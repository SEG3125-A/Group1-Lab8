import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function OnlineBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
  
  
  <div className='online-booking-container'>
    <div className='book-flow-container' >
    <div className='flow-block'></div>
    </div>

    <DatePicker
      inline
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat={"dd/mm/yyyy"}
    />

  </div>
  
  );
}

export default OnlineBooking;