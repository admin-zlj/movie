const dbconfig = require("../util/db.config");
const { actorsMock, imgMock } = require("./demoData");

const getFilms = async (req, res, next) => {
	let { isHot } = req.query;

	if (isHot === "true") {
		const sql = "select * from movie where isHot=?";
		const sqlArr = ["1"];
		let data = await dbconfig.sySqlConnect(sql, sqlArr);
		res.send({
			code: 200,
			msg: "ok",
			data: {
				films: data,
			},
		});
		return;
	}
	res.send({
		code: 10086,
		msg: "参数错误",
	});
};

const getNowPlayingFilms = async (req, res, next) => {
	let { limt = 10,offset = 0 } = req.query;
	const nowdate = Date.now() / 1000;
	const sqlArr = [nowdate];
	const totalSql = `select count(*) as total from movie where release_date < ?`;
	let total = await dbconfig.sySqlConnect(totalSql, sqlArr);
	const sql = `select * from movie where release_date < ? limit ${limt} offset ${offset}`;
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	const handData = await handleFilms(data);
	res.send({
		code: 200,
		msg: "ok",
		data: {
			films: handData,
			total:total[0].total
		},
	});
};

const getUpComingFilms = async (req, res, next) => {
	let { limt = 10,offset = 0 } = req.query;
	const nowdate = Date.now() / 1000;
	const sqlArr = [nowdate];
	const totalSql = `select count(*) as total from movie where release_date > ?`;
	let total = await dbconfig.sySqlConnect(totalSql, sqlArr);
	const sql = `select * from movie where release_date > ? limit ${limt} offset ${offset}`;
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	const handData = await handleFilms(data);
	res.send({
		code: 200,
		msg: "ok",
		data: {
			films: handData,
			total:total[0].total
		},
	});
};
const handleFilms = async (films) => {
	if(films.length === 0) return []
	let data = films;
	let ids = [];
	data.map((item) => {
		ids.push(item.movie_id);
	});
	const sql2 = `select * from actorandmovie where movie_id in (${JSON.stringify(
		ids
	).slice(1, -1)})`;
	const sqlArr2 = [];
	let data2 = await dbconfig.sySqlConnect(sql2, sqlArr2);
	const pres = data2.reduce((pre, cur) => {
		if (!!pre[cur.movie_id]) {
			pre[cur.movie_id].push(cur);
		} else {
			pre[cur.movie_id] = [cur];
		}
		return pre;
	}, {});

	data.map((item) => {
		item.actors = pres[item.movie_id] || actorsMock;
	});

	return data;
};

const getDailFilm = async (req, res, next) => {
	let { id } = req.query;
	const sql = "select * from movie where movie_id=?";
	const sqlArr = [id];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	const handData = await handleFilms(data);
	const imgs = await getImgById(id);
	let result = {
		...handData[0],
		photos: imgs,
	};
	res.send({
		code: 200,
		msg: "ok",
		data: result,
	});
};

const getImgById = async (id) => {
	const sql = "select still_url from movieimage where movie_id=?";
	const sqlArr = [id];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	if (data.length === 0) {
		return imgMock;
	}
	return data.reduce((pre, cur) => {
		pre.push(cur.still_url);
		return pre;
	}, []);
};
module.exports = {
	getFilms,
	getNowPlayingFilms,
	getUpComingFilms,
	getDailFilm,
};
