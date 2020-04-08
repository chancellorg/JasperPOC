import React from 'react';

export default class ReportEvent extends React.Component {
    render() {
        return (
            <button onClick={()=>this.hideDetails()}>
                Details
            </button>
        );
    }

    hideDetails() {
        let x = document.getElementById("details");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

}