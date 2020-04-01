import React, { Component } from 'react';
// import Page from './report.html';

export default class Report extends Component {
    render(){
        const Page = require('./report.html');
        const htmlDoc = {__html: Page};

        // images does not load directly
        return (<div><div dangerouslySetInnerHTML={htmlDoc} />

        </div>);
    }
}