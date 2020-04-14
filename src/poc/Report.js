import React from 'react';
// import Page from "./report.html"
import fs from "browserify-fs"
class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doc: null,
            html : ""
        };
    }

    process(e,idx) {
        const table = document.getElementById("myTable");
        let to_process = false;
        const begin_tag = "sect_begin_" + idx;
        const end_tag = "sect_end_" + idx;

        for (var i = 0; i <table.rows.length ; i++) {

            const row = table.rows[i];
            if(row.id === begin_tag) to_process = true;

            if(to_process) {
                if (row.style.display === "none") {
                    row.style.display = "block";
                } else {
                    row.style.display = "none";
                }
            }

            if(row.id === end_tag) to_process = false;
        }

        if(e.innerHTML === "[+]") e.innerHTML = "[-]";
        else e.innerHTML="[+]";
    }

    componentDidMount() {
        fetch('./Japer_POC_2020-03-26_10-06-04.html')
            .then((response) => {
                // When the page is loaded convert it to text
                return response.text();
            })
            .then((html) =>{
                // Initialize the DOM parser
                var parser = new DOMParser();

                // Parse the text
                var doc = parser.parseFromString(html, "text/html");

                // You can now even select part of that html as you would in the regular DOM
                // Example:
                // var docArticle = doc.querySelector('article').innerHTML;
                // var payment_options_enclosing_tr = doc.querySelectorAll("[id^='sect_begin']");

                var all_beginning_trs = doc.querySelectorAll("[id^='sect_begin']");

                for(let ctr = 0; ctr < all_beginning_trs.length; ++ctr) {

                    let parent_node = all_beginning_trs[ctr].parentNode;

                    const tr = doc.createElement("TR");
                    // tr.setAttribute("id", "myTr");

                    const td = doc.createElement("TD");
                    //var div = doc.createElement("div")
                    let num = (ctr + 1) + "";
                    td.innerHTML = "<div><a onclick=\"process(this," + num + ")\">[-]</a></div>";

                    tr.appendChild(td);
                    parent_node.insertBefore(tr, parent_node = all_beginning_trs[ctr]);

                    //console.log(parent_node = all_beginning_trs[ctr].innerHTML);
                    //console.log(doc);

                }


                console.log(doc);
                this.setState({html: html});
                this.setState({doc: doc});

                //data="./Japer_POC_2020-03-26_10-06-04.html"


                fs.writeFile('hello-world.html', 'Hello world!\n', function() {
                    fs.readFile('hello-world.html', 'utf-8', function(err, data){
                        //console.log(fs.readFile('./html/hello-world.html').directory);
                        console.log(data);
                    });
                });

                //document.getElementById("containment").setAttribute("data",process.env.HOMEPATH+"./Japer_POC_2020-03-26_10-06-04.html")
                //document.getElementById("containment").setAttribute("src","./hello-world.txt");

            })
            .catch(function(err) {
                console.log('Failed to fetch page: ', err);
            });
    }

    render () {
        // console.log("test");
        // console.log(process.env.PUBLIC_URL);

        return ( <div id={"containment"}>

                <object data="./Japer_POC_2020-03-26_10-06-04.html" height="1000px" width="2000px"></object>


            </div>
        );
    }
}

export default Report;