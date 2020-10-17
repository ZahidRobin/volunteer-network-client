import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';

const Header = () => {
    return (
        <Container>
            <Menu></Menu>
            <Search></Search>
        </Container>
    );
};

export default Header;