import React from 'react';
import Iframe from "react-iframe"

class Report extends React.Component {

    render () {
        return ( <div ref={this.props.reportRef}>

                <Iframe src={"http://jasperpoc-wacky-panda-vv.cfapps.io/report.html"}
                        height={"1000px"} width={"2000px"}></Iframe>

                </div>
        );
    }
}

export default Report;