import React from 'react';


class Report extends React.Component {


    render () {
        const Page = require("./report.html");
        const htmlDoc = {__html:Page};

        return React.createElement("div",{ dangerouslySetInnerHTML: htmlDoc });


        // return ( <div dangerouslySetInnerHTML={htmlDoc}></div>        );
    }
}

export default Report;