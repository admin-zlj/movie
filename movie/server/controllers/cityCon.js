const dbconfig = require("../util/db.config");

const getCitys = async (req, res, next) => {
	console.log('/citys')
	const sql = "select * from city";
	const sqlArr = [];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	res.send({
		code: 200,
		msg: "ok",
		data: {
			citys: data,
		},
	});
};

module.exports = {
	getCitys,
};
