import React, { useState } from 'react';
import Modal from 'react-modal';
import Arcade from '../assets/images/arcade.jpg'
import Console from '../assets/images/console.jpg'
import Desktop from '../assets/images/desktop.jpg'

const RoomDetails = {
  arcade: {
    name: 'Arcade Room',
    image: Arcade,
    inclusions: [
      'Diverse Game Selection',
      'Comfortable Seating Arrangements',
      'High-Qualityy Audio-Visual Systems',
      'Well-Maintained Arcade Machines',
      'Food Allowed in the Gaming Area',
    ],
  },
  console: {
    name: 'Console Room',
    image: Console,
    inclusions: [
      'Variety of Gaming Consoles (e.g., PlayStation, Xbox, Nintendo)',
      'Comfortable Seating with Gaming Chairs',
      'High-Resolution Display Screens for Each Console',
      'Access to a Wide Range of Popular Games',
      'Food Allowed in the Gaming Area',
    ],
  },
  desktop: {
    name: 'Desktop Gaming Room',
    image: Desktop,
    inclusions: [
      'High-Performance Gaming PCs with Latest Specifications',
      'Ergonomic Gaming Chairs and Adjustable Desks',
      'Dual or Multiple Monitors for Enhanced Gaming Experience',
      'High-Speed Internet Connection for Online Gaming',
      'Food Allowed in the Gaming Area',
    ],
  },
};

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  // State for the date validation modal
  const [isDateValidationModalOpen, setDateValidationModalOpen] = useState(false);

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const generateConfirmationCode = () => {
    // Generate a random confirmation code (this is just a placeholder)
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setConfirmationCode(code);
  };

  const handleConfirmReservation = () => {
    if (selectedRoom) {
      // Check if the selected date is not earlier than the current date
      const currentDate = new Date().toISOString().split('T')[0];
      if (selectedDate < currentDate) {
        setDateValidationModalOpen(true);
        return;
      }

      generateConfirmationCode();
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setDateValidationModalOpen(false);
  };

  return (
    <>
      <main id="booking" className='flex justify-center items-center h-96 my-20'>
        <div className='container flex justify-evenly p-10 border-l-8 border-l-green border-2 border-gray rounded-lg drop-shadow-md'>
          <div className='w-1/4 p-8'>
            {/* Room Selection */}
            <div className='mb-4 flex justify-around'>
              <label className='text-xl font-Titilium'>Select Room:</label>
              <select className='w-1/2' onChange={(e) => handleRoomChange(e.target.value)} value={selectedRoom}>
                <option value="" disabled>Select Room</option>
                {Object.keys(RoomDetails).map((room) => (
                  <option key={room} value={room}>
                    {RoomDetails[room].name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className='mb-4 flex justify-around'>
              <label className='text-xl font-Titilium' >Select Date:</label>
              <input className='w-1/2' type="date" onChange={(e) => handleDateChange(e.target.value)} value={selectedDate} />
            </div>

            {/* Time Selection */}
            <div className='mb-20 flex justify-around'>
              <label className='text-xl font-Titilium' >Select Time:</label>
              <input className='w-1/2' type="time" onChange={(e) => handleTimeChange(e.target.value)} value={selectedTime} />
            </div>

            {/* Confirm Reservation Button */}
          <div className='flex justify-center'>
            <button className='w-full py-2 bg-green rounded-lg drop-shadow-md hover:text-white hover:animate-pulse' onClick={handleConfirmReservation}>Confirm Reservation</button>
          </div>
          </div>
          <div className='w-1/4 p-8'>
            {/* Room Details */}
            {selectedRoom && RoomDetails[selectedRoom] && (
              <div className='mb-4'>
                <h3 className='text-xl text-green font-Bruno mb-4'>{RoomDetails[selectedRoom].name}</h3>
                <p>Inclusions:</p>
                <ul className='pl-4'>
                  {RoomDetails[selectedRoom].inclusions.map((item, index) => (
                    <li key={index} className='list-disc'>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className='w-auto p-8'>
            {/* Room Preview */}
            {selectedRoom && RoomDetails[selectedRoom] && (
              <div className='mb-4'>
                <img className='rounded-md' src={RoomDetails[selectedRoom].image} alt={RoomDetails[selectedRoom].name} style={{ maxWidth: '600px', maxHeight: '300px' }} />
              </div>
            )}
          </div>

          {/* Date Validation Modal */}
          <Modal
            isOpen={isDateValidationModalOpen}
            onRequestClose={() => setDateValidationModalOpen(false)}
            className="w-1/4 h-20 mx-auto mt-80 p-4 text-center"
          >
            <div className='p-10 bg-green rounded-md w-auto'>
              <h2 className="text-lg text-red font-Bruno mb-6">Invalid Date Selection</h2>
              <p className="text-white font-Titilium">Please select the current date or a later date for the reservation.</p>
              <div className='flex justify-center mt-6'>
                <button className="bg-blue-500 bg-white text-green px-8 py-2 rounded font-Titilium" onClick={() => setDateValidationModalOpen(false)}>
                Close
                </button>
              </div>
            </div>
          </Modal>






          {/* Reservation Confirmation Modal */}
          <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="w-1/4 h-20 mx-auto mt-80 p-4">
            <div className='p-10 bg-green rounded-md w-auto'>
              <h2 className="text-lg text-red drop-shadow-lg font-Bruno mb-6 text-center">Reservation Confirmed!</h2>
              <p className='text-white font-Titilium'>Room: {RoomDetails[selectedRoom]?.name}</p>
              <p className='text-white font-Titilium'>Date: {selectedDate}</p>
              <p className='text-white font-Titilium'>Time: {selectedTime}</p>
              <p className='text-white font-Titilium'>Confirmation Code: {confirmationCode}</p>
              <p className='text-red italic text-sm text-center mt-6'>KINDLY SAVE THE RESERVATION CODE.</p>
              <div className='flex justify-center mt-6'>
                <button className="bg-blue-500 bg-white text-green px-8 py-2 rounded font-Titilium" onClick={closeModal}>Close</button>
              </div>
            </div>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default Booking;
