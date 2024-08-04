// src/App.jsx
import './App.css';

const App = () => {
  const attendees = [
    { name: "ali", confirmed: true },
    { name: 'ahmad', confirmed: false },
    { name: 'hamad', confirmed: true },
  ];

  return (
    <>
      <h1>plans List</h1>
      <ul>
        {attendees.map((attendee, index) => (
          <li key={index} className={attendee.confirmed ? 'completed' : 'not-completed'}>
            {attendee.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;