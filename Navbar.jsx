import React from 'react'
import evantoLogo from './assets/evanto.svg'
import logo from './assets/logo.png'
import './App.css'


const Navbar = () => {
    return (
        <nav className=" navbar navbar-custom  justify-content-between">
            <a className="logo navbar-brand" href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891' ><img src={logo} alt='logo' /> <span className="logo-text">
                <span className="evanto">envato</span>
                <span className="market">market</span>
            </span></a>


            <button className="buyNow btn btn-outline-success my-2 my-sm-0" type="submit">Buy now</button>

        </nav>



    )
}

export default Navbar
