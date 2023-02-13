import React from "react";

const Loginpage = ({setShow,setShow1,sethome,setAbout}) => {

  const handleForgotPass=()=>{
    var a = prompt("Please enter your Registered email id.")
    console.log(a); 
    if(!a){
      console.log('cancel button pressed')
      return
    }
    if(a!==""){
      alert('A Link has been sent to your email id. Please check your inbox.')
    }else{
      alert('Please enter email id')
      handleForgotPass();
    }
    
  }
  
  const handleLoginBtn = (event)=>{
    let uname = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;
    if(uname && pass){
        if(localStorage.getItem("email") === uname && localStorage.getItem("password")===pass){
          alert("SuccesFully Login")
          setShow1(false)
          sethome(false)
          setAbout(false)
      } else if(localStorage.getItem("email")!== uname){
        alert("Invalid Username")
      }else if(localStorage.getItem("password")!== pass){
        alert("Invalid Password")
      }
    } 
  }
  return (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form action="">
          <div className="txt_field">
            <input
              type="text"
              id="uname"
              name=""
              className="st_data"
              placeholder=""
              required={true}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name=""
              id="pass"
              className="st_data"
              placeholder=""
              required={true}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass" onClick={handleForgotPass}>Forgot Password?</div>
          <input type="submit" value="Login" onClick={handleLoginBtn} />
          <div className="signup_link">
            Not a member?<button className="login_handle" onClick={()=>setShow(true)}>Sign Up</button>
          </div>
        </form>
        </div>
        
    </div>
  );
};

export default Loginpage;
