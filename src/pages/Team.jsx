import React from "react";

/*const events = [
  { title: "React Summit 2025", date: "April 10, 2025" },
  { title: "Next.js Global Meetup", date: "June 22, 2025" },
  { title: "AI & DevOps Conference", date: "August 15, 2025" },
];
*/
const Events = () => {
  return (
    <section id="team" className="text-white h-screen flex items-center justify-center ">
      <h2 className="text-3xl md:text-4xl text-center font-bold ">Our Team</h2>
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>*/}
    </section>
  );
};

export default Events;
