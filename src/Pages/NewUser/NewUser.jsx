import React from 'react'
import './newuser.css'

function NewUser() {
  return (
    <div className='newUser'>
      <h2 className="nweUSerTitle">New User</h2>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder='Joe' />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder='Joe Badmin' />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder='admino@email.com' />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder='Password' />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder='+2348099899490' />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder='Lagos | Nigeria' />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" placeholder='Lagos | Nigeria' />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" placeholder='Lagos | Nigeria' />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" placeholder='Lagos | Nigeria' />
            <label for="others">Others</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className='newUserSelect'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
