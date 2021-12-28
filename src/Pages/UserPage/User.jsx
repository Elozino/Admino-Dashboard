import React from 'react'
import './user.css'
import Img from "../../components/Topbar/download.jpg"
import { CalendarToday, LocationCityRounded, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h2 className="userTile">Edit User</h2>
        <Link to="/new-user">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={Img} alt="" className='userShowImg' />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Elozino Ovedhe</span>
              <span className="userShowUserTitle">FrontEnd Developer</span>
            </div>
          </div>

          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">Elzino</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">19-07-199?</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+234 8099899490</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">admino@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCityRounded className='userShowIcon' />
              <span className="userShowInfoTitle">Lagos | Nigeria</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" name="" id="" placeholder="Elzino" className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" name="" id="" placeholder="Elozino Ovedhe" className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" name="" id="" placeholder="admino@gmail.com" className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" name="" id="" placeholder="+2348099899490" className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" name="" id="" placeholder="Lagos | Nigeria" className='userUpdateInput' />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={Img} alt="" />
                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                <input type="file" name="" id="file" style={{ display: "none" }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default User
