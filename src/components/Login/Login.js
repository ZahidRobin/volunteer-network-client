import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo/logo.png';
import google from "../../images/logo/google.png";
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleLogin, initializeLoginFramework } from './LoginManager';
const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleLogin()
        .then(res => {
          setLoggedInUser(res);
          history.replace(from);
        })
    }

    return (
        <Container>
            <div className="login-section">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                            <Link to="/"><img src={logo} alt=""/></Link>
                            <div className="login-area">
                                <h2>Login With</h2>
                                <button onClick={googleSignIn} className="socialButton">
                                    <img src={google}/><span>Continue with Google</span></button>
                                <p>Don't have an account? <Link to="/login">Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                </div> 
        </Container>
    );
};

export default Login;