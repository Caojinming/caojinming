const express=require("express");
const mysql = require("mysql");
var app=express();
app.use(express.static("public"));
app.get('/',  (req, res)=>{
	res.sendfile("/index.html")
});
app.get('/menu/menuname',  (req, res)=>{
	// 连接共享型MySQL
	var connection = mysql.createConnection({
		host     : process.env.MYSQL_HOST,
		port     : process.env.MYSQL_PORT,
		user     : process.env.ACCESSKEY,
		password : process.env.SECRETKEY,
		database : 'app_' + process.env.APPNAME
	});

	connection.query('SELECT * FROM menuname', function(err, rows) {
		if (err) {
			res.send(err)
			return
		}
		res.send(rows)
	})
	connection.end()
});
app.get('/menu/menumore',  (req, res)=>{
	// 连接共享型MySQL
	var connection = mysql.createConnection({
		host     : process.env.MYSQL_HOST,
		port     : process.env.MYSQL_PORT,
		user     : process.env.ACCESSKEY,
		password : process.env.SECRETKEY,
		database : 'app_' + process.env.APPNAME
	});
	var id=req.query.id
	var sql="SELECT lid,name,img_url,full_price,num,commend FROM menumore WHERE id=?";
	connection.query(sql,[id],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:1,msg:result});
		}else{
			res.send({code:-1,msg:"请求错误"})
		}
		res.end()
	})
	connection.end()
});
app.get('/swiperlist/list',  (req, res)=>{
	// 连接共享型MySQL
	var connection = mysql.createConnection({
		host     : process.env.MYSQL_HOST,
		port     : process.env.MYSQL_PORT,
		user     : process.env.ACCESSKEY,
		password : process.env.SECRETKEY,
		database : 'app_' + process.env.APPNAME
	});

	connection.query('SELECT id,img_url FROM swiperimg', function(err, rows) {
		if (err) {
			res.send(err)
			return
		}
		res.send(rows)
	})
	connection.end()
});
app.get('/swiperlist/barlist',  (req, res)=>{
	// 连接共享型MySQL
	var connection = mysql.createConnection({
		host     : process.env.MYSQL_HOST,
		port     : process.env.MYSQL_PORT,
		user     : process.env.ACCESSKEY,
		password : process.env.SECRETKEY,
		database : 'app_' + process.env.APPNAME
	});

	connection.query('SELECT id,img_url,title,more FROM barimg', function(err, rows) {
		if (err) {
			res.send(err)
			return
		}
		res.send(rows)
	})
	connection.end()
});
app.listen(process.env.PORT || 5050)