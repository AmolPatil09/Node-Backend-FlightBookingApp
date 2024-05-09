const fs = require('fs');
const path = require('path');

const errorLogger = (err, req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${err.stack}\n`;
    fs.appendFile(path.join(__dirname, 'error_logs.txt'), logMessage, (err) => {
      if (err) {
        console.error('Error writing to error log file:', err);
      };
      if(err.status)
        {
          res.status(err.status)
        }
        else{
          res.status(500)
        }
        res.json({
          "message":err.message,
          "errorCode":err.status,
        })
    });
    next(err);
  };

  module.exports=errorLogger;