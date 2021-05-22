import Map from './components/Maps.jsx';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return (
    <div className="App">
      <h1>Natural Events Plot From NASA</h1>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Events : </Form.Label>
          <Form.Control as="select" custom>
            <option>WildFire</option>
            <option>Tropical Cyclone</option>
            <option>Cyclone Andres</option>
            
          </Form.Control>
        </Form.Group>
      </Form>
      {!loading ? <Map eventData={eventData} /> : <h1>...Loading</h1>}
    </div>
  );
}

export default App;
