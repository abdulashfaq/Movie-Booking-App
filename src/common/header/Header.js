import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';
import {Button,gr} from '@material-ui/core';

class Header extends Component {
    state = {}
    render() {
        return (
            <div className='header'>
                <img src={logo} className="app-logo" alt="logo" />
                <div className='button'>
                <Button color="primary"  variant="contained">Book Now</Button>
                </div>
            </div>
        );
    }
}

export default Header;