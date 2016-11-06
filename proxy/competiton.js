var models              = require('../models');
var mongoose            = require('mongoose');
var eventproxy          = require('eventproxy');
var competiton          = models.competiton;
var competitonUser      = models.competitonUser;
var competitonAgainst   = models.competitonAgainst;
var lottery             = models.lottery;


/**
 * 添加比赛
 * Callback:
 * - err                                        数据库异常
 * - newAndSaveCompetiton                       比赛列表信息
 * @param {Number} competiton_type              比赛类型 default:1（1：大型赛； 2：个人赛；3：8人转）
 * @param {Number} hall_name                    羽毛球馆名称
 * @param {Number} competiton_name              比赛名称
 * @param {String} competiton_date              比赛时间
 * @param {Number} competiton_img               宣传图片
 * @param {String} company                      举办公司
 * @param {String} company_logo                 公司logo
 * @param {Object} attend_num                   已报名人数（0：无限制）
 * @param {Object} allow_attend_num             允许报名人数
 * @param {Number} state                        比赛状态（1：未开始；2：进行中 3：已结束）
 * @param {Function} callback                   回调函数
 */
exports.newAndSaveCompetiton = function(competiton_type, hall_name, competiton_name, competiton_date, competiton_img, company, company_logo, attend_num, allow_attend_num, state, callback) {
  var competitons = new competiton();
  competitons.competiton_type = competiton_type;
  competitons.hall_name = hall_name;
  competitons.competiton_name = competiton_name;
  competitons.competiton_date = competiton_date;
  competitons.competiton_img = competiton_img;
  competitons.attend_num = attend_num;
  competitons.company_logo = company_logo;
  competitons.company = company;
  competitons.allow_attend_num = allow_attend_num;
  competitons.state = state;

  competitons.save(callback);
}

/**
 * 比赛列表
 * Callback:
 * - err                                       数据库异常
 * - list                                      比赛列表信息
 * @param {Function} callback                  回调函数
 */
exports.list = function(callback){
  competiton.find(function(err, list) {
    if (err) {
      return callback(err);
    } else {
      return callback(null, list);
    }
  })
}

/**
 * 比赛详情
 * - getCompetitonInfoById                     用户信息
 * - err                                       数据库异常
 * @param {Number} competitonId                比赛id
 * @param {Function} callback                  回调函数
 */
exports.getCompetitonInfoById = function(competitonId, callback) {
  competiton.findOne({ _id: competitonId }, function(err, info){
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
 * - competitonUser                            用户报名信息
 * @param {String} users                       用户
 * @param {Number} competiton_type             参赛类型
 * @param {Function} callback                  回调函数
 */
exports.newAndSaveUser = function(users, competiton_type, competiton_id, callback) {
  var user = new competitonUser();
  user.users = users;
  user.competiton_id = competiton_id;
  user.competiton_type = competiton_type;

  user.save(callback);
}

/**
 * 比赛用户列表
 * - memberList                                用户报名信息
 * - err                                       数据库异常
 * @param {Number} competiton_type             参赛类型
 * @param {Function} callback                  回调函数
 */
exports.memberList = function(id, competiton_type, callback) {
  competitonUser.find({ competiton_type: competiton_type, competiton_id: id  }, function(err, competitonMembers){
    if (err) {
      return callback(err);
    } else if(competitonMembers.length === 0) {
      return callback(null, []);
    } else {
      return callback(null, competitonMembers);
    }
  });
}

/**
 * 根据用户id获取用户信息
 * - getUserByUserId                           用户信息
 * - err                                       数据库异常
 * @param {Number} userId                      参赛类型
 * @param {Function} callback                  回调函数
 */
exports.getUserByUserId = function(userId, callback) {
  competitonUser.findOne({ _id: userId }, function(err, user){
    if (err) {
      return callback(err);
    } else if(user === null) {
      return callback(null, []);
    } else {
      return callback(null, user);
    }
  });
}

/**
 * 比赛用户列表 -- 统计
 * - memberStatistics                          参加比赛人员统计
 * - err                                       数据库异常
 * @param {Number} id                          比赛id
 * @param {Number} sex                         性别
 * @param {Function} callback                  回调函数
 */
exports.memberStatistics = function(id, sex, callback) {
  competitonUser.find({ competiton_id: id }, function(err, competitonMembers){
    if (err) {
      return callback(err);
    } else if(competitonMembers.length === 0) {
      return callback(null, 0);
    } else {
      let statisticResult = 0
      switch(sex) {
        case 0 :
          for (item of competitonMembers) {
            statisticResult += item.users.length
          }
        break;
        case 1 :
          for (item of competitonMembers) {
            for (user of item.users) {
              if(user.sex == 1) {
                statisticResult ++
              }
            }
          }
        break;
        case 2 :
          for (item of competitonMembers) {
            for (user of item.users) {
              if(user.sex == 2) {
                statisticResult ++
              }
            }
          }
        break;
      }
      return callback(null, statisticResult);
    }
  });
}

/**
 * 比赛用户列表 -- 统计
 * - userAgainstStatistics                     用户参加比赛信息统计
 * - err                                       数据库异常
 * @param {Number}  tel                        用户手机
 * @param {Number}  id                         比赛id
 * @param {Number}  win                        胜负
 * @param {Function} callback                  回调函数
 */
exports.userAgainstStatistics = function(tel, id, win, callback) {
  if (tel && id) {
    // 1、先根据手机号查出用户id
    competitonUser.find(function(err, info) {
      if (err) {
        return callback(err);
      } else if (info === null) {
        return callback(null, []);
      } else {
        let userId
        for (item of info) {
          for (key of item.users) {
            if (key.tel == tel) {
              userId = item._id
            }
          }
        }
        // 2、根据用户id查出参与的比赛
        if (userId) {
          var re =new RegExp(userId, "gim");
          competitonAgainst
          .find()
          .or([{ 'part_a': re }, { 'part_b': re }])
          .exec(function(err, userAgainst){
            if (err) {
              return callback(err);
            } else if(userAgainst.length === 0) {
              return callback(null, 0);
            } else {
              let statisticResult = 0
              switch(win) {
                // 参与总场数
                case 0 :
                  statisticResult = userAgainst.length
                break;
                // 胜
                case 1 :
                  for (item of userAgainst) {
                    if (re.test(item.part_a)) {
                      if (item.part_a_score > item.part_b_score) {
                        statisticResult ++
                      }
                    } else {
                      if (item.part_a_score < item.part_b_score) {
                        statisticResult ++
                      }
                    }
                  }
                break;
                // 负
                case 2 :
                  for (item of userAgainst) {
                    if (re.test(item.part_a)) {
                      if (item.part_a_score < item.part_b_score) {
                        statisticResult ++
                      }
                    } else {
                      if (item.part_a_score > item.part_b_score) {
                        statisticResult ++
                      }
                    }
                  }
                break;
              }
              return callback(null, statisticResult);
            }
          });
        } else {
          return callback(null, 0);
        }
      }
    });
  }
}

/**
 * 添加对阵
 * Callback:
 * - err                                       数据库异常
 * - newAndSaveAgainst                         添加对阵信息
 * @param {Number} id                          比赛id
 * @param {Number} competiton_type             参赛类型(default: 1)
 * @param {Number} competiton_process_type     进程类型(default: 1)
 * @param {Number} competiton_area             比赛场地(default: 1)
 * @param {Number} competiton_order            场次(default: 1)
 * @param {String} judgment                    裁判
 * @param {Object} part_a                      a用户id组
 * @param {Object} part_b                      b用户id组
 * @param {Number} part_a_score                a用户得分(default: 0)
 * @param {Number} part_b_score                b用户得分(default: 0)
 * @param {Object} score_detail                单局分数
 * @param {Number} state                       比赛状态（1：未开始；2：进行中 3：已结束）
 * @param {Function} callback 回调函数
 */
exports.newAndSaveAgainst = function(id, competiton_type, competiton_process_type, competiton_area, competiton_order, judgment, part_a, part_b, part_a_score, part_b_score, score_detail, state, callback) {
  var against = new competitonAgainst();
  against.competiton_id = id;
  against.competiton_type = competiton_type;
  against.competiton_process_type = competiton_process_type;
  against.competiton_area = competiton_area;
  against.competiton_order = competiton_order;
  against.judgment = judgment;
  against.part_a = part_a;
  against.part_b = part_b;
  against.part_a_score = part_a_score;
  against.part_b_score = part_b_score;
  against.score_detail = score_detail;
  against.state = state;

  against.save(callback);
}

/**
 * 对阵列表
 * - againstList                               对阵列表信息
 * - err                                       数据库异常
 * @param {Number} id                          比赛id
 * @param {Number} competiton_type             参赛类型
 * @param {Number} competiton_process_type     进程类型
 * @param {Function} callback                  回调函数
 */
exports.againstList = function(id, competiton_type, competiton_process_type, callback) {
  var that = this;
  competitonAgainst.find({ competiton_id: id, competiton_type: competiton_type, competiton_process_type: competiton_process_type }).lean().exec(function(err, againstList){
    if (err) {
      return callback(err);
    }
    if(againstList.length === 0) {
      return callback(null, []);
    }
    // return callback(null, againstList);
    var proxy = new eventproxy();
    proxy.after('user_find', againstList.length, function () {
      return callback(null, againstList);
    });
    for (var j = 0; j < againstList.length; j++) {
      (function(i) {
        var part_a_arr = againstList[i].part_a.split("_"),
            part_b_arr = againstList[i].part_b.split("_"),
            part_a_obj = {},
            part_b_obj = {};
        // 队员a信息
        that.getUserByUserIdArr(part_a_arr, function(err, user) {
          if (err) {
            return callback(err);
          }
          againstList[i].part_a_user = user;
        });
        // 队员b信息
        that.getUserByUserIdArr(part_b_arr, function(err, user) {
          if (err) {
            return callback(err);
          }
          againstList[i].part_b_user = user;
          proxy.emit('user_find');
        });
      })(j);
    }
  });
}

/**
 * 对阵详情
 * - againstDetail                             对阵详情信息
 * - err                                       数据库异常
 * @param {Number} id                          比赛对阵id
 * @param {Function} callback                  回调函数
 */
exports.againstDetail = function(id, callback) {
  var that = this;
  competitonAgainst.findOne({ _id: id }).lean().exec(function(err, againstDetail){
    if (err) {
      return callback(err);
    }
    if(againstDetail.length === 0) {
      return callback(null, []);
    }
    that.getUserByUserIdArr(againstDetail.part_a.split("_"), function(err, user_find_a) {
      if (err) {
        return callback(err);
      }
      that.getUserByUserIdArr(againstDetail.part_b.split("_"), function(err, user_find_b) {
        if (err) {
          return callback(err);
        }
        againstDetail.part_a_user = user_find_a;
        againstDetail.part_b_user = user_find_b;
        return callback(null, againstDetail);
      });
    });
  });
}

/**
 * 我的比赛
 * - getAgainstInfo,                           用户对阵列表信息
 * - err                                       数据库异常
 * @param {String} id                          比赛id
 * @param {String} tel                         手机号码
 * @param {Function} callback                  回调函数
 */
exports.getAgainstInfo = function(tel, id, callback) {
  var that = this;
  if (tel && id) {
    // 1、先根据手机号查出用户id
    competitonUser.find(function(err, info) {
      if (err) {
        return callback(err);
      } else if (info === null) {
        return callback(null, []);
      } else {
        let userId
        let userIdArr = []
        for (item of info) {
          for (key of item.users) {
            if (key.tel == tel) {
              userIdArr.push(item._id)
            }
          }
        }
        // 2、根据用户id查出参与的比赛
        if (userIdArr.length != 0) {
          let reArr = []
          for (userId of userIdArr) {
            reArr.push(new RegExp(userId, "gim"))
          }
          let findArr = []
          let findObj = {}
          let findStrItemA = []
          let findStrItemB = []
          for(i = 0; i < reArr.length; i++){
              findStrItemA[i] = `{part_a: ${reArr[i]}}`;
              findStrItemB[i] = `{part_b: ${reArr[i]}}`;
              let findObjItemA = eval('(' + findStrItemA[i] + ')');
              let findObjItemB = eval('(' + findStrItemB[i] + ')');
              findArr.push(findObjItemA);
              findArr.push(findObjItemB);
          };
          let findArra = []
          let findStrItem = {}
          let findObjItem = {}
          for (find of findArr) {
            for (key in find) {
              let findStrItem = `{${key}: ${find[key]}}`
              let findObjItem = eval('(' + findStrItem + ')')
              findArra.push(findObjItem)
            }
          }
          competitonAgainst
          .find({ $or: findArr })
          .lean()
          .exec(function(err, againstList){
            if (err) {
              return callback(err);
            }
            if(againstList.length === 0) {
              return callback(null, []);
            }
            var proxy = new eventproxy();
            proxy.after('user_find', againstList.length, function () {
              callback(null, againstList);
            });
            for (var j = 0; j < againstList.length; j++) {
              (function(i) {
                var part_a_arr = againstList[i].part_a.split("_"),
                    part_b_arr = againstList[i].part_b.split("_"),
                    part_a_obj = {},
                    part_b_obj = {};
                // 队员a信息
                that.getUserByUserIdArr(part_a_arr, function(err, user) {
                  if (err) {
                    return callback(err);
                  }
                  againstList[i].part_a_user = user;
                });
                // 队员b信息
                that.getUserByUserIdArr(part_b_arr, function(err, user) {
                  if (err) {
                    return callback(err);
                  }
                  againstList[i].part_b_user = user;
                  proxy.emit('user_find');
                });
              })(j);
            }
          });
        } else {
          return callback(null, []);
        }
      }
    })
  } else {
    return callback(null, []);
  }
}

/**
 * 通过用户id获取用户信息
 * - getUserByUserId                           对阵列表信息
 * - err                                       数据库异常
 * @param {String} userId                      用户id
 * @param {Function} callback                  回调函数
 */
exports.getUserByUserIdArr = function(userArr, callback) {
  // competitonUser.find({ "_id": { "$in": userArr } }, { 'name':1, 'tel':1 } , function(err, user){
  //   if (err) {
  //     return callback(err);
  //   } else {
  //     return callback(null, user);
  //   }
  // });
  competitonUser
  .find('', { 'users':1 })
  .where('_id').in(userArr)
  .exec(function(err, user){
    if (err) {
      return callback(err);
    } else {
      return callback(null, user);
    }
  });
}


/**
 * 通过用户tel获取和设置抽奖信息
 * - lotteryId                                 抽奖信息
 * - err                                       数据库异常
 * @param {String} tel                         用户手机
 * @param {Function} callback                  回调函数
 */
exports.lotteryId = function(tel, callback) {
  lottery.findOne({ tel: tel } , function(err, lotteryUser){
    if (err) {
      return callback(err);
    } else if (lotteryUser === null) {
        return callback(null, '');
    } else {
      if (lotteryUser.lotteryId > 0) {
        return callback(null, 'haslottery');
      } else {
        let loterry = Math.floor(Math.random() * 8);
        lottery.update({tel: tel},{$set:{lotteryId: loterry}}, function () {});
        return callback(null, loterry);
      }
    }
  });
}

/**
 * 用户报名
 * Callback:
 * - err                                       数据库异常
 * - saveUserTel                               用户报名信息--手机
 * @param {String} tel                         用户手机
 * @param {Number} competiton_id               比赛id
 * @param {Function} callback                  回调函数
 */
exports.saveUserTel = function(tel, competiton_id, callback) {
  var lotteryUser = new lottery();
  lotteryUser.tel = tel;
  lotteryUser.competitionId = competiton_id;
  lotteryUser.save(callback);
}

/**
 * 通过用户手机获取报名参赛信息
 * - getUserCompetitionByTel                   报名参赛信息
 * - err                                       数据库异常
 * @param {String} tel                         用户tel
 * @param {Function} callback                  回调函数
 */
exports.getUserCompetitionByTel = function(tel, sex, callback) {
  var telArr = tel.split("_");
  var sexArr = sex.split("_");
  // 先根据手机号查出用户信息
  competitonUser.find(function(err, info) {
    if (err) {
      return callback(err);
    } else if (info === null) {
      return callback(null, []);
    } else {
      let userId;
      let data = { idLen: 0, competitonType: [], sex: [] };
      let userIdArr = [];
      let userSexArr = [];
      for (item of info) {
        for (key of item.users) {
          for (var i = 0;i < telArr.length; i++) {
            // 当前报名用户
            if (key.tel == telArr[i]) {
              // 用来判断用户是否参与了两场比赛
              userIdArr.push(item._id);
              // 用来判断用户是否参与了当前项目比赛
              data.competitonType.push(item.competiton_type);
              // 用来判断当前用户的性别和参与的项目是否匹配
              if (key.sex != sexArr[i]) {
                userSexArr.push(item.competiton_type);
              }
            }
          }
        }
      }
      data.idLen = userIdArr.length;
      data.sex = userSexArr;
      return callback(null, data);
    }
  })
}
