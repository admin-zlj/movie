const dbconfig = require("../util/db.config");

const getCinemaById = async (req, res, next) => {
	console.log('/getCinemaById')
	const sql = "select cinema_id, name, address, lowPrice from cinema where city_id=?";
	let { city_id } = req.query;
	const sqlArr = [city_id];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	res.send({
		code: 200,
		msg: "ok",
		data: {
			cinemas: data,
		},
	});
};

module.exports = {
	getCinemaById,
};
