const mysql = require("mysql");
module.exports = {
	config: {
		host: "localhost",
		port: "3306",
		user: "root",
		password: "123456",
		database: "movie_server",
	},
	sqlConnect: function (sql, sqlArr, callback) {
		let pool = mysql.createPool(this.config);
		pool.getConnection((err, conn) => {
			if (err) {
				console.log("连接失败");
				return;
			}
			console.log("链接成功");
			conn.query(sql, sqlArr, callback);
			conn.release();
		});
	},
	sySqlConnect: function (sql, sqlArr) {
		return new Promise((resolve,reject)=>{
			let pool = mysql.createPool(this.config);
			pool.getConnection((err, conn) => {
				if (err) {
					console.log("sysql连接失败");
					reject(err)
				}
				conn.query(sql, sqlArr, (err,data)=>{
					if(err){
						reject(err)
					}else{
						resolve(data)
					}
				});
				conn.release();
			});

		})
		
	},
};
