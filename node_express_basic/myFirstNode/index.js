/* const course = {
    name: "Databases, Networks and the Web",
    platform: "Coursera",
    category: "Computer Science"
    };
    function printCourseInformation(course) {
    let output = ``;
    for (key in course) {
    output += `${key}: ${course[key]}
    `;
    }
    console.log(output);
    }
    printCourseInformation(course);
    //console.log(course); */

 var http = require("http");
http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });   // code no.
    res.end("Hello World!");                                // browser text
    }).listen(8081, function() {                            // Port
    console.log("Node server is running...");               // console log
}); 


