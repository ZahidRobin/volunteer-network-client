import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/images/babySit.png'
import './SingleEvent.css';
const SingleEvent = (props) => {
    return (
        <div className="col-md-3">
            <div className="single-event">
                <Link to={`/register/${props.details._id}`}><Card className="text-center">
                    <Card.Body>
                        <Card.Img variant="top" src={props.details.photo || img} />
                    </Card.Body>
                    <Card.Footer>{props.details.title}</Card.Footer>
                </Card></Link>
            </div>
        </div>
    );
};

export default SingleEvent;