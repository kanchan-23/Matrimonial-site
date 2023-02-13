import React,{useState} from "react";

const SignupPage = ({setShow}) => {
  const [active, setActive] = useState(false);
  const handleSignUpBtn = (event)=>{
    let fname = document.getElementById('fname').value;
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;
    let mob = document.getElementById('mob').value;
    let dob = document.getElementById('dob').value;

    if(fname && pass && email && mob && dob){
      localStorage.setItem("FirstName",fname)
      localStorage.setItem("password",pass)
      localStorage.setItem("email",email)
      localStorage.setItem("Mob",mob)
      localStorage.setItem("dob",dob)
      alert("Account has been created Successfully. Please check your inbox. A link has been sent to the registered email id for confirmation of email.")
    }
  }

  return (
    <div>
      <div className="center">
        {!active && <h4 id="top-heading">
          Let's set up your account, while we find Matches for you!
        </h4>}
        <form action="">
          <div className="txt_field">
            <input
              type="text"
              className="st_data"
              placeholder=""
              id="fname"
              required={true}
            />
            <span></span>
            <label>Full Name</label>
          </div>
          
          <div className="txt_field">
              <input type="email" required={true} id="email"/>
              <span></span>
              <label>Email Id</label>
            </div>
            <div className="txt_field">
              <input type="text" required={true} id="mob" />
              <span></span>
              <label>Mobile No</label>
            </div>
            <div className="txt_field">
              <input type="date" required={true}  id="dob"  />
              <span></span>
            </div>
            <div className="txt_field">
            <input
              type="password"
              className="st_data"
              placeholder=""
              id="pass"
              required={true}
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Sign Up" onClick={handleSignUpBtn} />
          <div className="signup_link">
            Already a member?<button className="login_handle" onClick={()=>setShow(false)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
