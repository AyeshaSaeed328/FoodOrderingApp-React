import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [loginBtn, setloginBtn] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (


        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link className='link' to="/grocery">Grocery</Link></li>
                    <li>
                        <Link className='link' to="/">Home</Link> </li>
                    <li><Link className='link' to="/about">About Us</Link></li>
                    <li><Link className='link' to="/contact">Contact</Link></li>
                    <button className='btn' onClick={() => {

                        loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login")
                    }}>{loginBtn}</button>
                    <img className="cart" src={cart} />



                </ul>

            </div>

        </div>
    )
}

export default Header;