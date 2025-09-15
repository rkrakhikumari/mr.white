import React from 'react';
import eventImage from '../assets/event.png'; 
import eventimg from '../assets/events.png'; 
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';

const events = [
  {
    title: "Royal Frenchel Day",
    date: "August 31st 2019",
    description: [
      `Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland “Windy” the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing “Royal Family” and share with the local community about this great French Bulldog hybrid.`,
      `It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background!`,
      `Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy.`
    ]
  },
  {
    title: "Royal Frenchel Day",
    date: "August 31st 2019",
    description: [
      `Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland “Windy” the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing “Royal Family” and share with the local community about this great French Bulldog hybrid.`,
      `It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background!`,
      `Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy.`
    ]
  },
  {
    title: "Royal Frenchel Day",
    date: "August 31st 2019",
    description: [
      `Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland “Windy” the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing “Royal Family” and share with the local community about this great French Bulldog hybrid.`,
      `It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background!`,
      `Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy.`
    ]
  },
  
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <img src={eventimg} alt="" className="w-full" />
      <div className="bg-gradient-to-b from-[#000000] to-[#0c0c0c] text-white  py-20 px-6 md:px-12 font-sans min-h-screen">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Mr White upcoming events
        </h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#212121] p-10 rounded-md flex flex-col md:flex-row gap-6 shadow-md"
            >
              <img
                src={eventImage}
                alt={event.title}
                className="w-full md:w-64 h-auto rounded-md object-cover"
              />

              <div>
                <h3 className="text-3xl font-bold mb-1">{event.title}</h3>
                <p className="text-md text-white mb-3">{event.date}</p>

                {event.description.map((para, i) => (
                  <p key={i} className="text-md text-white mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
