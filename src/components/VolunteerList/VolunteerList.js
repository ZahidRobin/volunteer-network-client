import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './VolunteerList.css';
const VolunteerList = () => {
    const [allRegistration, setAllRegistration] = useState([]);
    useEffect(() => {
        dataload();
    } ,[])

    const handleDeleteRegistration = (id) => {
        fetch(`https://immense-gorge-54834.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            dataload();
        })
    }

    function dataload(){
        fetch('https://immense-gorge-54834.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then(data => setAllRegistration(data))
    }
    return (
        <div className="admin-event-area">
            <h4>Volunteer register list</h4>
                <div className="event-list-table">
                    <table class="table table-borderless">
                        <thead  class="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Registration date</th>
                                <th scope="col">Volunteer list</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRegistration.map(registration => 
                                    <tr key={registration._id}>
                                        <td>{registration.name}</td>
                                        <td>{registration.email}</td>
                                        <td>{registration.date}</td>
                                        <td>{registration.title}</td>
                                        <td><i class="fa fa-trash" onClick={() => handleDeleteRegistration(registration._id)} aria-hidden="true"></i></td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default VolunteerList;