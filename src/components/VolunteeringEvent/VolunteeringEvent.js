import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleEvent from '../SingleEvent/SingleEvent';
import './VolunteeringEvent.css';
const VolunteeringEvent = () => {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        fetch('https://immense-gorge-54834.herokuapp.com/allevent')
        .then(res => res.json())
        .then(data => setAllEvents(data))
    } ,[])
    return (
        <Container>
            <div className="row event-section">
                {
                    allEvents.map(event => <SingleEvent key={event._id} details={event}></SingleEvent>)
                }
            </div>
        </Container>
    );
};

export default VolunteeringEvent;