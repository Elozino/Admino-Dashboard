import React from 'react'
import './widgetsm.css'
import { Visibility } from '@material-ui/icons'
import Img from "../Topbar/download.jpg"

function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmMember">
            <img src={Img} alt="" className='widgetSmImg' />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Elozino Ovedhe</span>
              <span className="widgetSmUserTitle">FrontEnd Developer</span>
            </div>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmMember">
            <img src={Img} alt="" className='widgetSmImg' />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Elozino Ovedhe</span>
              <span className="widgetSmUserTitle">React Developer</span>
            </div>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmMember">
            <img src={Img} alt="" className='widgetSmImg' />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Elozino Ovedhe</span>
              <span className="widgetSmUserTitle">Web & Mobile Developer</span>
            </div>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmMember">
            <img src={Img} alt="" className='widgetSmImg' />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Elozino Ovedhe</span>
              <span className="widgetSmUserTitle">Designer</span>
            </div>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>


    </div>
  )
}

export default WidgetSm
