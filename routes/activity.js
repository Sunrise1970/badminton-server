var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;

var activity = require('../controllers/activity');

/* 添加活动 */
router.post('/activityAdd', activity.activityAdd);

/* 活动列表 */
router.get('/activityList', activity.activityList);

/* 活动详情 */
router.post('/activityInfo', activity.activityInfo);

/* 活动报名 */
router.post('/attend', activity.attend);

/* 参加活动人员列表 */
router.post('/attendUserList', activity.attendUserList);

module.exports = router;
