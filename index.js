const { data } = require("./data");
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const secret = "123456"
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');
// const decryptedPassword = crypto.createDecipher('sha256', secret).update('Prograd').final('ascii');
var getos = os.userInfo();
// console.log(getos);

// const name = "Vishnu";
// const year = 2022;
// const qualification = "Under-Graduate";
var userdata = data("Prograd",2020,"BE")

// let result = data(name,year,qualification);
let jsonData = JSON.stringify(userdata)
fs.writeFileSync('./message.txt', 
    `Prograd Details:-\n
    Name: ${userdata.name}
    Year: ${userdata.Year}
    Qualification: ${userdata.Qualification}
    Username: ${getos.username}
    Password: ${password}
    // DecryptedPassword: "Not Found"`
    
);

// console.log(userdata);

