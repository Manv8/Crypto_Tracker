import React, { useContext } from 'react'
import "./Navbar.css"
import logo_1 from "../../assets/logo_1.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { CoinContext } from '../../Context/CoinContext'


const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)
  const currencyHandler = (event) =>{
    switch(event.target.value){
      case " usd":{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
      case " eur":{
        setCurrency({name:"eur",symbol:"€"});
        break;
      }
      case " inr":{
        setCurrency({name:"inr",symbol:"₹"});
        break;
      }
      default:{
        setCurrency({name:"usd",symbol:"$"});
     
      }
    }
  }

  return (
    <div className='navbar'>
      <img className='logo' src={logo_1} alt="" />
      <ul>
        <li>Home</li>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Cloud</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>\
        <button>Sign Up <img src={arrow_icon} /> </button>
      </div>
    </div>
  )
}

export default Navbar
