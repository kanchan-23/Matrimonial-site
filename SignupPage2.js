import React, { useState } from "react";
import Loginpage from "./Loginpage";


const SignupPage2 =() => {
  const [active, setActive] = useState(false);
  
  const handleClick = (event) =>{
    setActive(true)
  }
  


    return (
      <div>
        <div className="center">
          <form action="">
            <div className="txt_field">
              <input type="email" name="" id="" required={true}/>
              <span></span>
              <label>Email Id</label>
            </div>
            <div className="txt_field">
              <input type="text" name="" id="" required={true}/>
              <span></span>
              <label>Mobile No</label>
            </div>
            <div className="txt_field">
              <input type="date" name="" id="" required={true}/>
              <span></span>
            </div>
            <input type="submit" value="Sign Up" />
            <div className="signup_link">
            Already a member? <button className="login_handle" onClick={handleClick}>Login</button>
          </div>
        </form>
        {active && <Loginpage/>}
        
        </div>
      </div>
    );
  }

  export default SignupPage2
