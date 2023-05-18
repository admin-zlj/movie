var express = require('express');
const { getCinemaById } = require('../controllers/cinemaCon');
const cityCon = require('../controllers/cityCon');
const movieCon = require('../controllers/movieController');
const { generateOrder, queryOrderByUser, updateOrder } = require('../controllers/orderCon');
const userColl= require('../controllers/userController');
const { jwtAuth } = require('../util/auth');

var router = express.Router();
router.use(jwtAuth)
/* GET home page. */
router.get('/accUser', userColl.accUser);
router.get('/regUser', userColl.regUser);
router.get('/films', movieCon.getFilms);
router.get('/films/nowPlaying', movieCon.getNowPlayingFilms);
router.get('/films/upComing', movieCon.getUpComingFilms);
router.get('/films/detail', movieCon.getDailFilm);
router.get('/citys', cityCon.getCitys);
router.get('/cinema/getCinemaById', getCinemaById);
router.get('/feedback', userColl.userFeedBack);
router.get('/order/generate', generateOrder);
router.get('/order/queryOrder', queryOrderByUser);
router.get('/order/updateOrder', updateOrder);




module.exports = router;
