import React from "react";
import {useHistory} from "react-router-dom";
// css on bannermain

function CabSearch() {
  let history = useHistory();
  return (
    <div className="cabSearch">
      <div className="cabSearch-top">
        <p>CITY TAXI</p>
        <p>OUT STATION</p>
        <p>RENTALS</p>
      </div>
      <div className="cabSearch-bottom">
        <div className="cabSearch-bottom-heading">
          <h3>Your everyday travel partner</h3>
          <p>AC cabs for point to point travel</p>
        </div>
        <div >
          <form className="cabSearch-bottom-form">
            <label for="pickup">
              PICKUP
              <input
                type="text"
                id="pickup"
                placeholder="Current location"
              ></input>
            </label>
            <label for="drop">
              DROP
              <input
                type="text"
                id="drop"
                placeholder="Enter drop  for ride estimate"
              ></input>
            </label>
            <label for="when">
              WHEN
              <select id="when">
                <option>Now</option>
                <option>Schedule for later</option>
              </select>
            </label>
            <button onClick={()=>history.push("/booknow")} className="cabSearch-button">Search Cabs</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CabSearch;
