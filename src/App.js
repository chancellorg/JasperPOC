import React from 'react';
import logo from './logo.svg';
import './App.css';
import Report from "./poc/Report";

class App extends React.Component{
  render () {
      return ( <div>
          <Report/>
          <button onClick={()=>this.hideDetails()}>Details</button>
            </div> );
  }

    hideDetails() {
        // document.getElementById("details").style.visibility = "hidden";
        // document.getElementById("details").style.visibility = "hidden";

        // alert(document.getElementById("details").hidden);

        let x = document.getElementById("details2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    hideShowElements( id ) {
        const elementsWithId= document.querySelectorAll('[id="kliendi_kaart_olemas_p"]');

        for(let i=0;i<elementsWithId.length;i++)
            elementsWithId[i].style.display = ( elementsWithId[i].style.display === "none") ? "block" : "none";
    }
}

// eslint-disable-next-line
function Chance() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}
export default App;
