import React from "react";

const FemaleCards = (props) => {
  const handleClick = (event) => {
    // if(event.target.innerHTML === 'Send Request'){
    //   alert('Request Sent')
    //   console.log('yes');
    //   event.currentTarget.innerHTML = "Cancel Request";
    // }else if(event.target.innerHTML === 'Cancel Request'){
    //   let ask = window.confirm('Are you sure you want to cancel the request?');
    //   if(ask){
    //     alert('Request Cancelled.')
    //     event.currentTarget.innerHTML = "Send Request";
    //   }
    // }
    alert("request sent");
    event.target.disabled = true;
  };
  let { Name, age, religion, imageurl } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageurl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Name : {Name}</h5>
          <p className="card-text">Age : {age}</p>
          <p className="card-text">Religion : {religion}</p>
          <button onClick={handleClick} className="btn btn-danger">
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};
export default FemaleCards;
