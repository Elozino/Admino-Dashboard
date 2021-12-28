import React from 'react'
import './Sidebar.css'
import { BarChart, BusinessCenter, ChatBubbleOutline, Home, LocalAtm, MailOutline, Person, Report, Storefront, Timeline, TrendingUp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar_container'>
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className='sidebar_title'>Dashboard</h3>
          <div className='sidebar_list'>
            <Link to="/" className='sidebarListItem active'><Home className='sidebarIcon' /> <span>Home</span></Link>
            <p className='sidebarListItem'><Timeline className='sidebarIcon' /> <span>Analytics</span></p>
            <p className='sidebarListItem'><TrendingUp className='sidebarIcon' /> <span>Sales</span></p>
          </div>
        </div>

        <div className="sidebar_menu">
          <h3 className='sidebar_title'>Quick Menu</h3>
          <div className='sidebar_list'>
            <Link to="/users" className='sidebarListItem'><Person className='sidebarIcon' /> <span>User</span></Link>
            <p className='sidebarListItem'><Storefront className='sidebarIcon' /> <span>Products</span></p>
            <p className='sidebarListItem'><LocalAtm className='sidebarIcon' /> <span>Transactions</span></p>
            <p className='sidebarListItem'><BarChart className='sidebarIcon' /> <span>Report</span></p>
          </div>
        </div>

        <div className="sidebar_menu">
          <h3 className='sidebar_title'>Notification</h3>
          <div className='sideNotificationar_list'>
            <p className='sidebarListItem'><MailOutline className='sidebarIcon' /> <span>Mail</span></p>
            <p className='sidebarListItem'><Timeline className='sidebarIcon' /> <span>Feedback</span></p>
            <p className='sidebarListItem'><ChatBubbleOutline className='sidebarIcon' /> <span>Messages</span></p>
          </div>
        </div>

        <div className="sidebar_menu">
          <h3 className='sidebar_title'>Staff</h3>
          <div className='sidebar_list'>
            <p className='sidebarListItem'><BusinessCenter className='sidebarIcon' /> <span>Manage</span></p>
            <p className='sidebarListItem'><Timeline className='sidebarIcon' /> <span>Analytics</span></p>
            <p className='sidebarListItem'><Report className='sidebarIcon' /> <span>Report</span></p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Sidebar
