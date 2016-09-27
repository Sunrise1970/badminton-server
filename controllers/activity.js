var validator      = require('validator');
var eventProxy    = require('eventproxy');
var tools          = require('../common/tools');
var Activity      = require('../proxy/').Activity;
var result;

/* 添加比赛 */
exports.activityAdd = function(req, res, next) {
  var hall_name = req.body.hall_name,
      hall_avatar = req.body.hall_avatar,
      captain = req.body.captain,
      captain_avatar = req.body.captain_avatar,
      time = req.body.time,
      info = req.body.info,
      allow_attend_num = req.body.allow_attend_num;
  Activity.newAndSaveActivity(hall_name, hall_avatar, captain, captain_avatar, time, info, allow_attend_num, function(err) {
    if (err) {
      result = tools.returnMeg(0, err);
      return next(err);
    } else {
      let data = {
        hall_name: hall_name,
        hall_avatar: hall_avatar,
        captain: captain,
        captain_avatar: captain_avatar,
        time: time,
        info: info,
        allow_attend_num: allow_attend_num
      }
      result = tools.returnMeg(1, data);
    }
    res.send(result);
  });
}

/* 用户报名 */
exports.attend = function(req, res, next) {
  var name = validator.trim(req.body.name),
      tel = validator.trim(req.body.tel),
      activity_id = req.body.activity_id;
  if ([name, tel].some(function(item) { return item === ''; })) {
    result = tools.returnMeg(0, '请输入完整的信息');
    return res.send(result);
  }
  if (!validator.isMobilePhone(tel, 'zh-CN')) {
    result = tools.returnMeg(0, '手机号码有误');
    return res.send(result);
  }
  Activity.newAndSaveUser(name, tel, activity_id, function(err) {
    if (err) {
      result = tools.returnMeg(0, err);
      return next(err);
    } else {
      let data = {
        name: name,
        tel: tel,
        activity_id: activity_id
      }
      result = tools.returnMeg(1, data);
    }
    res.send(result);
  });
}

/* 参加人员列表 */
exports.attendUserList = function(req, res, next) {
  var ep = new eventProxy();
  var id = req.body.activity_id,
      data = {};

  ep.all('list', 'all', function (list, all) {
    data.list =  list;
    data.all =  all;
    result = tools.returnMeg(1, data);
    res.send(result);
  });
  // 参赛人员列表
  Activity.userList(id, function(err, list) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('list', list);
    }
  });
  // 参赛总人数
  Activity.userNumAll(id, function(err, all) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('all', all);
    }
  });
}

/* 活动列表 */
exports.activityList = function(req, res, next) {
  Activity.activityList(function(err, list) {
    if (err) {
      result = tools.returnMeg(0, err);
      return next(err);
    } else {
      let data = {
        list: list
      }
      result = tools.returnMeg(1, data);
    }
    res.send(result);
  });
}

/* 活动详情 */
exports.activityInfo = function(req, res, next) {
  var id = req.body.activityId;
  Activity.getActivityInfoById(id, function(err, info) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      result = tools.returnMeg(1, info);
    }
    res.send(result);
  });
}
