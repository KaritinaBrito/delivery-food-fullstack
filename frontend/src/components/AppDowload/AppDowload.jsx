import React from 'react';
import './AppDowload.css';
import { assets } from '../../assets/assets';

const AppDowload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-down-load-platforms">
            <img src={assets.play_store} alt='play store'/>
            <img src={assets.app_store} alt='apple store'/>
        </div>
    </div>
  )
}

export default AppDowload