var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'activitar'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    var sql = 'INSERT INTO activities(activity) VALUES("Watch a movie")';
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    })
})