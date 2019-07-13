
window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    themeManager.init();
    
    const http = require("http");
    const server = http.createServer(
        (request,response)=>{
            response.writeHead(200,{"Content-Type":"text/plain"});
            response.write("from Photoshop");
            response.end();
        }
    );
    
    server.listen(3000);
    
}
    
