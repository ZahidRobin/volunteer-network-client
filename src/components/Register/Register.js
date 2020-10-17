import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo/logo.png';
import './Register.css';
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const Register = () => {
    const history = useHistory();
    const {id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventDetails, setEventDetails] = useState({});
    
    useEffect(() => {
        fetch(`https://immense-gorge-54834.herokuapp.com/singleevent/${id}`)
        .then(res => res.json())
        .then(data => setEventDetails(data))
    }, [id])


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const {date, details} = data;
        const {title, eventDate, description, photo} = eventDetails;
        const newRegistration = {title,eventDate,description, photo, date, details, ...loggedInUser}
        fetch('https://immense-gorge-54834.herokuapp.com/volunteerRegistration',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            if(loggedInUser.email){
                history.push('/memberEvent');
            }
        })
        // console.log(newRegistration);
    };

    
    return (
        <Container>
            <div className="register-section">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Link to="/"><img src={logo} alt=""/></Link>
                            <div className="register-area">
                                <h2>Register as a Volunteer</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input disabled value={loggedInUser.name} className="form-control" name="name" type="text" ref={register({ required: true })} placeholder="Full Name"/>
                                    {errors.name && <span>Name is required</span>}
                                    <input disabled value={loggedInUser.email} name="email" className="form-control" type="email" placeholder="Username or Email" ref={register({ required: true })} />
                                    {errors.email && <span>Username or Email is required</span>}
                                    <input name="date" id="date" placeholder="Date" className="form-control" type="date"  ref={register({ required: true })} />
                                    {errors.date && <span>Date is required</span>}
                                    <input name="details" className="form-control" placeholder="Description" type="text" ref={register({ required: true })} />
                                    {errors.details && <span>Description is required</span>}
                                    <input name="organizeBook" disabled value={eventDetails.title} className="form-control" placeholder="Organize books at the library" type="text" ref={register({ required: true })} />
                                    {errors.organizeBook && <span>Organization Booking is required</span>}
                                    <input className="form-control" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
        </Container>
    );
};

export default Register;