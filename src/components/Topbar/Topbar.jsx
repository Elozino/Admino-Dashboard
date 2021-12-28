import React from 'react'
import './Topbar.css'
import Img from './download.jpg'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

function Topbar() {
  return (
    <header className='topbar_container'>
      <h3 className="logo">Admino</h3>
      <nav>
        <span className='icon'><Settings /></span>
        <span className='icon'><NotificationsNone /> <small className="icon_badge">2</small></span>
        <span className='icon'><Language /></span>
        <span className='icon'>
          <img src={Img} alt='profile'/>
        </span>
      </nav>
    </header>
  )
}

export default Topbar
