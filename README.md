# nodejs.universal-windows-app.connect-to-azure
Query Azure MS SQL Database from Raspberry Pi - Windows 10 IoT Core - Chakra Core Node.js

1. Create Azure MS SQL DB
2. Modify server.js config variable

var config = {
    user: '*',
    password: '*!',
    server: '*', // You can use 'localhost\\instance' to connect to named instance 
    database: '*',

    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

3. run in project folder "node server.js"
