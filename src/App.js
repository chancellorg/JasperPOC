import React from 'react';
import Report from "./poc/Report";

class App extends React.Component{


  render () {

      return (<div>
                <Report></Report>
          </div>
            );
    }

    hideDetails() {
        let x = document.getElementById("details2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

}
export default App;
