var sql = require('mssql');

var config = {
    user: '*',
    password: '*!',
    server: '*', // You can use 'localhost\\instance' to connect to named instance 
    database: '*',

    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

sql.connect(config).then(function () {

    new sql.Request().query('select * from dbo.BuildVersion').then(function (recordset) {
        console.dir(recordset);
        console.log(recordset);
    }).catch(function (err) {
        console.log(err);
    });

}).catch(function (err) {
    console.log(err);
});