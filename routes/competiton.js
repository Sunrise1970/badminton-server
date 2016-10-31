var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

var competiton = require('../controllers/competiton');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var personModel = db.model('Competiton');
  var personEntity = new personModel({ name: 'z3' });
  var personMethods = personEntity.speak();
  personEntity.save();
  personModel.find(function(err,persons){
      res.render('index', { title: persons });
    });

});
/* 添加比赛 */
router.get('/competitonAdd', competiton.competitonAdd);

/* 比赛列表 */
router.get('/competitonList', competiton.competitonList);

/* 比赛详情 */
router.get('/competitonInfo', competiton.competitonInfo);

/* 用户报名 */
router.get('/attend', competiton.attend);

/* 比赛人员列表 */
router.get('/memberList', competiton.memberList);

/* 添加对阵 */
router.post('/againstAdd', competiton.against);

/* 对阵列表 */
router.get('/againstList', competiton.againstList);

/* 对阵详情 */
router.get('/againstDetail', competiton.againstDetail);

/* 我的比赛 */
router.get('/userAgainstList', competiton.userAgainstList);

/* 通过用户id获取用户信息 */
router.post('/getUserByUserId', competiton.getUserByUserId);

/* 通过用户手机号获取抽奖id */
router.get('/lotteryId', competiton.lotteryId);

module.exports = router;
