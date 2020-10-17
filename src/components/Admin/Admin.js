import React from 'react';
import { Container } from 'react-bootstrap';
import './Admin.css';
import logo from '../../images/logo/logo.png';
import man from '../../images/logo/man.png';
import plus from '../../images/logo/plus.png';
import { Link } from 'react-router-dom';
import VolunteerList from '../VolunteerList/VolunteerList';
import { useState } from 'react';
import AddEvent from '../AddEvent/AddEvent';
const Admin = () => {
    const [adminListToggle, setAdminListToggle] = useState(true)
    return (
        <Container>
            <div className="row admin-section">
                <div className="col-md-3">
                    <div className="admin-menu-area">
                        <Link to="/"><img src={logo} alt=""/></Link>
                        <ul>
                            <li className={adminListToggle && "selected"} onClick={() => setAdminListToggle(true)}><Link><img src={man} />Volunteer register list</Link></li>
                            <li className={!adminListToggle && "selected"} onClick={() => setAdminListToggle(false)}><Link><img src={plus} />Add event</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    {adminListToggle && <VolunteerList></VolunteerList>}
                    {!adminListToggle && <AddEvent></AddEvent>}
                </div>
            </div>
        </Container>
    );
};

export default Admin;