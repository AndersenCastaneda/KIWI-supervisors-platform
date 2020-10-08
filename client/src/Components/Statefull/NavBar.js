import React, { Component } from 'react'
import './NavBar.css'
import Logo from './Logo';
import NavItem from '../Stateless/NavItem'
import DashboardIcon from '../../images/dashboard.svg';
import BookingIcon from '../../images/queue.svg'
import SettingsIcon from '../../images/settings.svg'


export default class Navbar extends Component {
    state = {
        isOpen: false,
        cName: 'compressed',
    };

    changeDimension() {
        if (this.state.isOpen) {
            this.setState({isOpen: false, cName: 'compressed'});
        } else {
            this.setState({isOpen: true, cName: 'extended'});
        }
    }

    render() {
        return (
            <div className='navbar'>
                <div onMouseEnter={() => this.changeDimension()} onMouseLeave={() => this.changeDimension()} className={this.state.cName}>
                    <Logo cName={this.state.cName}/>
                    <NavItem className={this.state.cName} icon={DashboardIcon} text='Dashboard'/>
                    <NavItem className={this.state.cName} icon={BookingIcon} text='Booking'/>
                    <NavItem className={this.state.cName} icon={SettingsIcon} text='Settings'/>
                </div>
            </div>
        )
    }
}