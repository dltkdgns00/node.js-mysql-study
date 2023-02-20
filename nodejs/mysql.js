var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dltkdgns00',
    password: 'sang0604',
    database: 'opentutorials'
})

connection.connect();

connection.query('select * from topic', function (error, results, fields)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results)
});

connection.end()