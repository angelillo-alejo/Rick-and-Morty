import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CharacterList from '../../pages/CharacterList';
import { useEffect, useState } from "react";



const NavBar = () => {
    return (
        <div>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Rick And Morty</Navbar.Brand>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;