var validator      = require('validator');
var eventProxy     = require('eventproxy');
var tools          = require('../common/tools');
var Competiton     = require('../proxy/').Competiton;
var result;


/* 添加比赛 */
exports.competitonAdd = function(req, res, next) {
  var hall_name = req.body.hall_name,
      competiton_name = req.body.competiton_name,
      competiton_img = req.body.competiton_img,
      company = req.body.company,
      company_logo = req.body.company_logo,
      competiton_date = req.body.competiton_date,
      attend_num = req.body.attend_num,
      allow_attend_num = req.body.allow_attend_num,
      state = req.body.state,
      competiton_type = req.body.competiton_type;
  Competiton.newAndSaveCompetiton(competiton_type, hall_name, competiton_name, competiton_date, competiton_img, company, company_logo, attend_num, allow_attend_num, state, function(err) {
    if (err) {
      result = tools.returnMeg(0, err);
      return next(err);
    } else {
      let data = {
        hall_name: hall_name,
        competiton_name: competiton_name,
        competiton_img: competiton_img,
        company: company,
        company_logo: company_logo,
        competiton_date: competiton_date,
        attend_num: attend_num,
        allow_attend_num: allow_attend_num,
        state: state,
        competiton_type: competiton_type
      }
      result = tools.returnMeg(1, data);
    }
    res.send(result);
  });
}

/* 比赛列表 */
exports.competitonList = function(req, res, next) {
  Competiton.list(function(err, list) {
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

/* 比赛报名 */
exports.attend = function(req, res, next) {
  var user = req.query.user,
      tel = req.query.tel,
      sex = req.query.sex,
      competiton_id = req.query.competitonId,
      competiton_type = req.query.competitonType;
  if ([user].some(function(item) { return item === ''; })) {
    result = tools.returnMeg(0, '请输入完整的信息');
    return res.send(result);
  }
  // if (!validator.isMobilePhone(tel, 'zh-CN')) {
  //   result = tools.returnMeg(0, '手机号码有误');
  //   return res.send(result);
  // }
  // 判断改项目是否已报满
  Competiton.getCompetitonInfoByType(competiton_type, function(err, data) {
    if (data) {
        result = tools.returnMeg(1, 'hasOver');
        res.send(result);
    } else {
      Competiton.getUserCompetitionByTel(tel, sex, function(err, data) {
        // 判断是否已参与两次比赛(双打)
        if (data.idLen > 2) {
          result = tools.returnMeg(1, 'hasAttendTwo');
          res.send(result);
        // 判断是否已参与两次比赛(单打)
        } else if (data.len == 2 && (competiton_type == 1 || competiton_type == 2)) {
          result = tools.returnMeg(1, 'hasAttendTwo');
          res.send(result);
        // 判断是否报名相对项目比赛
        } else if (data.competitonType.indexOf(parseInt(competiton_type)) != -1) {
          result = tools.returnMeg(1, 'hasAttendSame');
          res.send(result);
        } else if (data.sex.length != 0) {
          var gay = {}
          gay.text = 'gay';
          gay.type = data.sex[0];
          result = tools.returnMeg(1, gay);
          res.send(result);
        } else {
          Competiton.newAndSaveUser(user, competiton_type, competiton_id, function(err) {
            if (err) {
              result = tools.returnMeg(0, err);
              return next(err);
            } else {
              let returnData = {
                user: user,
                competiton_id: competiton_id,
                competiton_type: competiton_type,
                sexLen: data.sexLen,
              }
              result = tools.returnMeg(1, returnData);
            }
            res.send(result);
          });
        }
      });
    }
  });
}

/* 参加人员列表 */
exports.memberList = function(req, res, next) {
  var ep = new eventProxy();
  var competiton_type = req.query.competiton_type || 1,
      id = req.query.competiton_id,
      data = {};

  ep.all('list', 'all', 'man', 'women', function (list, all, man, women) {
    data.list =  list;
    data.all =  all;
    data.man =  man;
    data.women =  women;
    result = tools.returnMeg(1, data);
    res.send(result);
  });
  // 参赛人员列表
  Competiton.memberList(id, competiton_type, function(err, list) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('list', list);
    }
  });
  // 参赛总人数
  Competiton.memberStatistics(id, 0, function(err, all) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('all', all);
    }
  });
  // 参赛男数
  Competiton.memberStatistics(id, 1, function(err, man) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('man', man);
    }
  });
  // 参赛女数
  Competiton.memberStatistics(id, 2, function(err, women) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('women', women);
    }
  });
}

/* 添加对阵 */
exports.against = function(req, res, next) {
  var id = req.body.competiton_id,
      competiton_type = req.body.competiton_type,
      competiton_process_type = req.body.competiton_process_type,
      competiton_area = req.body.competiton_area,
      competiton_order = req.body.competiton_order,
      judgment = req.body.judgment,
      part_a = req.body.part_a,
      part_b = req.body.part_b,
      part_a_score = req.body.part_a_score,
      part_b_score = req.body.part_b_score,
      score_detail = req.body.score_detail,
      state = req.body.state,
      competiton_date = req.body.competiton_date,
      result;
  Competiton.newAndSaveAgainst(id, competiton_type, competiton_process_type, competiton_area, competiton_order, judgment, part_a, part_b, part_a_score, part_b_score, score_detail, state, competiton_date, function(err) {
    if (err) {
      result = tools.returnMeg(0, err);
      return next(err);
    } else {
      let data = {}
      data.id = id;
      data.competiton_type = competiton_type;
      data.competiton_process_type = competiton_process_type;
      data.competiton_area = competiton_area;
      data.competiton_order = competiton_order;
      data.judgment = judgment;
      data.part_a = part_a;
      data.part_b = part_b;
      data.part_a_score = part_a_score;
      data.part_b_score = part_b_score;
      data.score_detail = score_detail;
      data.state = state;
      data.competiton_date = competiton_date;
      result = tools.returnMeg(1, data);
    }
    res.send(result);
  });
}

/* 对阵列表 */
exports.againstList = function(req, res, next) {
  var ep = new eventProxy();
  var competiton_type = req.query.competiton_type,
      competiton_process_type = req.query.competiton_process_type,
      id = req.query.competiton_id,
      data = {};

  ep.all('list', function (list) {
    data.list =  list;
    result = tools.returnMeg(1, data);
    res.send(result);
  });
  // 参赛人员列表
  Competiton.againstList(id, competiton_type, competiton_process_type, function(err, list) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('list', list);
    }
  });
}

/* 对阵详情 */
exports.againstDetail = function(req, res, next) {
  var ep = new eventProxy();
  var id = req.query.id,
      data = {};

  ep.all('detail', function (detail) {
    data.detail =  detail;
    result = tools.returnMeg(1, data);
    res.send(result);
  });
  // 参赛人员详情
  Competiton.againstDetail(id, function(err, detail) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('detail', detail);
    }
  });
}

/* 我的比赛 */
exports.userAgainstList = function(req, res, next) {
  var ep = new eventProxy();
  var tel = req.query.tel,
      id = req.query.competiton_id,
      data = {};
  if (!tel) {
    result = tools.returnMeg(0, '非法用户');
    res.send(result);
    return;
  }
  ep.all('list', 'all', 'win', 'fail', function (list, all, win, fail) {
    data.list =  list;
    data.all =  all;
    data.win =  win;
    data.fail =  fail;
    result = tools.returnMeg(1, data);
    res.send(result);
  });
  Competiton.getAgainstInfo(tel, id, function(err, list) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('list', list);
    }
  });
  // 参赛总人数
  Competiton.userAgainstStatistics(tel, id, 0, function(err, all) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('all', all);
    }
  });
  // 胜
  Competiton.userAgainstStatistics(tel, id, 1, function(err, win) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('win', win);
    }
  });
  // 负
  Competiton.userAgainstStatistics(tel, id, 2, function(err, fail) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('fail', fail);
    }
  });
}
/* 比赛详情 */
exports.competitonInfo = function(req, res, next) {
  var id = req.query._id;
  var ep = new eventProxy();
  var data = {};
  ep.all('info', function (info) {
    result = tools.returnMeg(1, info);
    res.send(result);
  });
  Competiton.getCompetitonInfoById(id, function(err, info) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      ep.emit('info', info);
    }
  });
}

/* 通过用户id获取用户信息 */
exports.getUserByUserId = function(req, res, next) {
  var id = req.body.userId;
  // 参赛人员列表
  Competiton.getUserByUserId(id, function(err, user) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      result = tools.returnMeg(1, user);
    }
    res.send(result);
  });
}

/* 通过用户手机号获取抽奖id */
exports.lotteryId = function(req, res, next) {
  var tel = req.query.tel;
  // 参赛人员列表
  Competiton.lotteryId(tel, function(err, user) {
    if (err) {
      result = tools.returnMeg(0, err);
    } else {
      result = tools.returnMeg(1, user);
    }
    res.send(result);
  });
}

/* 中奖名单 */
exports.lotteryList = function(req, res, next) {
  Competiton.lotteryList(function(err, list) {
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

/* 比赛报名 -- 用户手机 */
exports.userTel = function(req, res, next) {
  var tel = req.query.tel,
      competiton_id = req.query.competitonId,
      telArr = tel.split("_");
  for (telItem of telArr) {
    Competiton.saveUserTel(telItem, competiton_id, function(err, info) {});
  }
  res.send('result')
}
