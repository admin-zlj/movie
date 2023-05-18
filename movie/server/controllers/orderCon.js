const dbconfig = require("../util/db.config");

const generateOrder = async (req, res, next) => {
	let { user_id, movie_id, cinema_id } = req.query;
	const order_id =
		Math.floor(Math.random() * 10000)
			.toString()
			.padStart(4, "0") + Date.now();
	const creat_time = Date.now() / 1000;
	const sql0 = "select * from cinema where cinema_id=1234";
	const sqlArr0 = [];
	let data0 = await dbconfig.sySqlConnect(sql0, sqlArr0);
	data0[0].lowPrice;

	const sql =
		"INSERT INTO ticket_order (order_id,user_id,movie_id,cinema_id,create_time,order_price) VALUES(?, ?, ?, ?, ?, ?)";
	const sqlArr = [
		Number(order_id),
		Number(user_id),
		Number(movie_id),
		Number(cinema_id),
		creat_time,
		data0[0].lowPrice,
	];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	res.send({
		code: 200,
		msg: "ok",
	});
};
const getfilm = async (films) => {
	if (films.length === 0) return [];
	let data = films;
	let ids = [];
	data.map((item) => {
		ids.push(item.movie_id);
	});
	const sql2 = `select * from movie where movie_id in (${JSON.stringify(
		ids
	).slice(1, -1)})`;
	const sqlArr2 = [];
	let data2 = await dbconfig.sySqlConnect(sql2, sqlArr2);
	return data2;
};
const getcinema = async (pd) => {
	if (pd.length === 0) return [];
	let data = pd;
	let ids = [];
	data.map((item) => {
		ids.push(item.cinema_id);
	});
	const sql2 = `select * from cinema where cinema_id in (${JSON.stringify(
		ids
	).slice(1, -1)})`;
	const sqlArr2 = [];
	let data2 = await dbconfig.sySqlConnect(sql2, sqlArr2);
	return data2;
};

const queryOrderByUser = async (req, res, next) => {
	let { user_id } = req.query;

	const sql = "select * from ticket_order where user_id=? order by create_time desc";
	const sqlArr = [Number(user_id)];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	let resOrders = []
	if(data.length>0){
		films = await getfilm(data);
		const orderD = data.map((item) => {
			const { name, poster } = films.find(
				(i) => i.movie_id === item.movie_id
			);
			item.film = {
				name,
				poster,
			};
			return item;
		});
		cinems = await getcinema(data);
		resOrders= data.map((item) => {
			const { name } = cinems.find((i) => i.cinema_id === item.cinema_id);
			item.cinemName = name;
			return item;
		});
	}

	res.send({
		code: 200,
		msg: "ok",
		orders: resOrders,
	});
};

const updateOrder = async (req, res, next) => {
	let { order_id, order_status } = req.query;
	let os = 0;
	if (order_status === "cancel") {
		os = 1;
	}
	if (order_status === "pay") {
		os = 2;
	}

	const sql =
		"UPDATE `movie_server`.`ticket_order` SET `order_status` = ? WHERE `order_id` = ?";
	const sqlArr = [os, Number(order_id)];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);

	res.send({
		code: 0.2,
		msg: "ok",
	});
};

module.exports = {
	generateOrder,
	queryOrderByUser,
	updateOrder,
};
