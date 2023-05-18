const dbconfig = require("../util/db.config");

const jwt = require("jsonwebtoken");
const { SecretKey } = require("../util/auth");

const accUser = async (req, res, next) => {
	let { phone, password } = req.query;
	const ishas = await getUserByPhone(phone);
	if (!ishas) {
		res.send({
			code: 1001,
			msg: "用户未注册",
		});
		return;
	}
	const sql = "select * from user where phone=? and password=?";
	const sqlArr = [phone, password];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	if (data.length === 1) {
		const token = jwt.sign({...data[0]}, SecretKey, { expiresIn: 60 * 60 * 24 });

		res.send({
			code: 200,
			msg: "登录成功",
			userInfo: { ...data[0], token },
		});
		return;
	}
	res.send({
		code: 1001,
		msg: "密码错误",
	});
};

const getUserByPhone = async (phone) => {
	const sql = "select * from user where phone=?";
	const sqlArr = [phone];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	if (data.length === 1) {
		return true;
	}
	return false;
};

const userFeedBack = async (req, res, next) => {
	let { user_id, content } = req.query;
	let now = Date.now();
	const randomId =
		Math.floor(Math.random() * 10000)
			.toString()
			.padStart(4, "0") + now;
	const sql =
		"INSERT INTO feedBack SET id=?, user_id=?, content=?,create_time=? ";
	const sqlArr = [randomId, user_id, decodeURIComponent(content), now];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	res.send({
		code: 200,
		msg: "ok",
	});
};

const regUser = async (req, res, next) => {
	let { phone, password } = req.query;
	let isreg = await getUserByPhone(phone);
	if (isreg) {
		res.send({
			code: 200,
			msg: "用户已注册",
		});
		return;
	}
	const sql =
		"INSERT INTO user SET user_id=?, user_name=?, phone=?, password=?";
	const sqlArr = [phone, phone, phone, password];
	let data = await dbconfig.sySqlConnect(sql, sqlArr);
	res.send({
		code: 200,
		msg: "注册成功",
	});
};

module.exports = {
	accUser,
	regUser,
	userFeedBack,
};
