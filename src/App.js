import React from 'react';
import Report from "./poc/Report";
import ReportEvent from "./poc/ReportEvent"
class App extends React.Component{
    constructor(){
        super();
        this.reportRef = React.createRef(); //create ref
    }

    state = {
        domMounted: false //initial state
    }

    componentDidMount() {
        this.setState({domMounted: true})
    }

  render () {

      return (<div>
                <Report reportRef={this.reportRef}></Report>
                <ReportEvent reportRef={this.reportRef}/>
          </div>
            );
    }

    hideDetails() {

        const didMount= this.state.domMounted
        if(didMount) { // this will run on every render and finally get true
            let x = document.getElementById("details2");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

}
export default App;
