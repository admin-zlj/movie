const expressJwt = require("express-jwt");

const SecretKey = "asdfghjkl";

const jwtAuth = expressJwt
	.expressjwt({ secret: SecretKey, algorithms: ["HS256"] })
	.unless({
		path: [
			"/films",
			"/films/nowPlaying",
			"/films/upComing",
			"/films/detail",
			"/citys",
			"/cinema/getCinemaById",
			"/accUser",
			"/regUser",
		],
	});
module.exports = {
	SecretKey,
	jwtAuth,
};
