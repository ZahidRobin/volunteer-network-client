import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import MemberSingleEvent from '../MemberSingleEvent/MemberSingleEvent';
import Menu from '../Menu/Menu';

const ParticularMemberEvent = () => {
    // const history =  useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    const [registeredEvent, setRegisteredEvent] = useState([]);
    useEffect(() => {
       dataload();
    }, [email])

    const handleDeleteEvent = (id) => {
        fetch(`https://immense-gorge-54834.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            dataload();
        })
    }

    function dataload(){
        fetch(`https://immense-gorge-54834.herokuapp.com/particularVolunteerEvent/${email}`)
        .then(res => res.json())
        .then(data => setRegisteredEvent(data))
    }
    return (
        <Container>
            <Menu></Menu>
            <div className="row" style={{padding: '60px 0'}}>
                {
                    registeredEvent.map(event => <MemberSingleEvent handleDeleteEvent={handleDeleteEvent} key={event._id} details={event}></MemberSingleEvent>)
                }
            </div>
        </Container>
    );
};

export default ParticularMemberEvent;