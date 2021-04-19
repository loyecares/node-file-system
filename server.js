

const fetch = require('node-fetch');
const fs = require('fs')
let content =  fetch('https://jsonplaceholder.typicode.com/posts')
                    // patch the response as a json file
                    .then(res => res.json())
                    //store the response
                    .then(data => console.log("done"))
                    
                    .then(function(content) {
                        return new Promise(function(resolve, reject) {
                                fs.writeFile('result/post.json', JSON.stringify(content), function(err) {
                                   if (err) reject(err);
                                   else resolve(content);
                                });
                        });
                      }).then(function(content) {
                           console.log("results here: " + content)
                      }).catch(function(err) {
                           console.log("error here: " + err);
                      });

//try {
//    const datan = fs.writeFileSync('result/post.json', container)
//    console.log('data written in post.json');
    //file written successfully
//} catch (err) {
 //   console.error(err)
//}


// fetch data from placeholder api

const http = require('http');
// create a server with the http or variable
const server = http.createServer(function(req, res){
    //header
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //send some text back
    //res.end("i will be a great software Engineer")

    //header but json
    res.writeHead(200, {'Content-Type': 'text/html'});
    //send some html file back
    res.end(`
        <!DOCTYPE html>
        <html>
            <body>
                <h1> hey there, meet joshua </h1>
                <p> he loves writing code </p>
            </body>
        </html>

    `);
})

// create a port
server.listen(4000, '127.0.0.1');

console.log('yes,you have created a server');