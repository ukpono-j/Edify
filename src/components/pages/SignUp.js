import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
import Footer from './Footer'
import img1 from "../images/avatar.jpg"
// import "./Upload"



// declearing html element

function SignIn() {


  return (
    <>

      {/* ================== Navigation bar =================== */}
      {/* <Navbar /> */}

      <div className='main_signin'>
        <form className='SignUp_'>
          <h4>Create your Account</h4>

          {/* =============================== Uploading  a profile pics =============== */}

          {/* 
          <h1 className='profie_title'>Upload profile pic like facebook</h1>
          <div className='profile-pic-div'>
            <img src={img1} className="img1" alt='' id="photo" />
            <input type="file" id='file' />
            <label for="file" id='uploadBtn'>Choose file</label>
          </div> */}

          {/* =============================== Uploading  a profile pics =============== */}

          <p className='plo'>First Name</p>
          <input type="text" placeholder="Email Address" required />

          <p>Last Name</p>
          <input type="text" placeholder="Email Address" required />

          <p>Email Address</p>
          <input type="text" placeholder="Email Address" required />

          <p>Gender</p>
          <select className='gender'>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          
          <p className='second'>Password</p>
          <input type="password" placeholder="Password" required />

          <p className='second'>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" required />

          {/* <input type="file" name='filename' /> */}



          <div className='login_decision'>

            <Link to="/mainHome" className='login_signUp_btn'>Sign Up</Link>
          </div>
          <Link to="/login" className="login_return">Already have an Account? Log In</Link>
        </form>
      </div>
      <Footer />

    </>
  )
}

export default SignIn