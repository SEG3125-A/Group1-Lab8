import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function OnlineBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
  
  
  <div className='online-booking-container'>
    <div className='book-flow-container' >

        <div className='book-flow-horizontal'>
          <div className='flow-block-big'></div>
          <div className='flow-block-middle'></div>
          <div className='flow-block-last'></div>
      </div>
    
    
    </div>


    <DatePicker
      inline
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat={"dd/mm/yyyy"}
    />
  <button>Select Date</button>
  </div>
  
  );
}

export default OnlineBooking;