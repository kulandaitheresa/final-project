import React from 'react';
//import ReactDOM from 'react-dom';



function Button() {
  return (
    <div>
      <div class="split left">
        <div class="centered">


          <label>Phone no</label>
          <input type="text" name="Phone number" /><br></br><br></br>

          <textarea rows="20" cols="50">Enter Your MESSAGE HERE</textarea>
          <input type="submit" name="submit" value="SEND"></input>

        </div>
      </div>
      <div class="split right">
        <div class="centered">
        <h3>Profile Window</h3>
          <button>Chat Box</button><br></br><br></br>
           <div className="frame">
           <input type="text" nmae="text" value="company name" style={{ marginTop: "10em" }}></input><br></br><br></br>
            <input type="submit" name="submit" value="details of profile" /><br></br><br></br>
            <label>Click me<input type="text"></input></label>
          </div>



        </div>
      </div>
     
    </div>

  );
}


export default Button;