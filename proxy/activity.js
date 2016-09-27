var models              = require('../models');
var mongoose            = require('mongoose');
var eventProxy          = require('eventproxy');
var activity            = models.activity;
var activityUser            = models.activityUser;

/**
 * 添加活动
 * Callback:
 * - err                                        数据库异常
 * - newAndSaveActivity                         比赛列表信息
 * @param {String} hall_name                    羽毛球馆名称
 * @param {String} hall_avatar                  比赛名称
 * @param {String} captain                      比赛时间
 * @param {String} captain_avatar               宣传图片
 * @param {String} time                         举办公司
 * @param {String} info                         公司logo
 * @param {Number} allow_attend_num             允许报名人数（0：无限制）
 * @param {Function} callback                   回调函数
 */
exports.newAndSaveActivity = function(hall_name, hall_avatar, captain, captain_avatar, time, info, allow_attend_num, callback) {
  var activitys = new activity();
  activitys.hall_name = hall_name;
  activitys.hall_avatar = hall_avatar;
  activitys.captain = captain;
  activitys.captain_avatar = captain_avatar;
  activitys.time = time;
  activitys.info = info;
  activitys.allow_attend_num = allow_attend_num;

  activitys.save(callback);
}

/**
 * 活动列表
 * Callback:
 * - err                                       数据库异常
 * - list                                      活动列表信息
 * @param {Function} callback                  回调函数
 */
exports.activityList = function(callback){
  activity.find(function(err, list) {
    if (err) {
      return callback(err);
    } else {
      return callback(null, list);
    }
  })
}

/**
 * 活动详情
 * - getActivityInfoById                       用户信息
 * - err                                       数据库异常
 * @param {Number} activityId                  活动id
 * @param {Function} callback                  回调函数
 */
exports.getActivityInfoById = function(activityId, callback) {
  activity.findOne({ _id: activityId }, function(err, info){
    if (err) {
      return callback(err);
    } else if(info === null) {
      return callback(null, []);
    } else {
      return callback(null, info);
    }
  });
}

/**
 * 用户报名
 * Callback:
 * - err                                       数据库异常
 * - activityUser                              用户报名信息
 * @param {String} name                        用户名
 * @param {String} tel                         手机号码
 * @param {Function} callback                  回调函数
 */
exports.newAndSaveUser = function(name, tel, activity_id, callback) {
  var user = new activityUser();
  user.name = name;
  user.tel = tel;
  user.activity_id = activity_id;
  user.save(callback);
}

/**
 * 参加活动用户列表
 * - userList                                  参加活动用户信息
 * - err                                       数据库异常
 * @param {Number} activity_id                 参赛类型
 * @param {Function} callback                  回调函数
 */
exports.userList = function(activity_id, callback) {
  activityUser.find({ activity_id: activity_id }, function(err, list){
    if (err) {
      return callback(err);
    } else if(list.length === 0) {
      return callback(null, []);
    } else {
      return callback(null, list);
    }
  });
}

/**
 * 参加活动用户列表 -- 统计
 * - activityStatistics                        总参赛人数
 * - err                                       数据库异常
 * @param {Number} avtivityAll                 参赛总人数
 * @param {Function} callback                  回调函数
 */
exports.userNumAll = function(activity_id, callback) {
  activityUser.find({ activity_id: activity_id }, function(err, avtivityAttendUser){
    if (err) {
      return callback(err);
    } else if(avtivityAttendUser.length === 0) {
      return callback(null, 0);
    } else {
      return callback(null, avtivityAttendUser.length);
    }
  });
}
