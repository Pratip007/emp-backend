const fs = require("fs")

function logReqRes(filename ){
    return (req, res, next) => {
       // console.log(`Request received: ${req.method} ${req.url}`);
       // console.log(`Request body: ${JSON.stringify(req.body)}`);
        fs.appendFile(filename, `Request received: ${req.method} ${req.url}\n`, (err) => {
          if (err) {
            console.error(err);
          }
        });
        fs.appendFile(filename, `Request body: ${JSON.stringify(req.body)}\n`, (err) => {
          if (err) {
            console.error(err);
          }
        });
        next();
      };

}

async function reqfilter(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();   
}

module.exports = {
    logReqRes,
    reqfilter
}