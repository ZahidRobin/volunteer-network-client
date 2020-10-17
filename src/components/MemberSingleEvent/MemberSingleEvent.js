import React from 'react';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import img from '../../images/images/babySit.png';
import './MemberSingleEvent.css';
const MemberSingleEvent = (props) => {
    const eventDate = new Date(props.details.date);
    const dateFormat = eventDate.toDateString().split(' ');
    const resultantDate = `${dateFormat[2]} ${dateFormat[1]}, ${dateFormat[3]}`;

    return (
        <div className="col-md-6 member-single-event">
            <Card className="text-center">
            <Card.Img variant="top" src={props.details.photo || img} />
                <Card.Body>
                    <Card.Text>
                        <h3>{props.details.title}e</h3>
                        <p>{ resultantDate }
                        </p>
                    </Card.Text>
                    <Button onClick={() => props.handleDeleteEvent( props.details._id)} variant="light">Cancel</Button>
                </Card.Body>
                </Card>
            </div>
    );
};

export default MemberSingleEvent;