var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * 活动信息schema
 * @param {Number} hall_name                    羽毛球馆名称
 * @param {String} hall_avatar                  羽毛球馆头像
 * @param {String} captain                      组织者
 * @param {String} captain_avatar               组织者头像
 * @param {Number} time                         活动时间
 * @param {String} info                         活动介绍
 * @param {Number} attend_num                   已报名人数
 * @param {Number} allow_attend_num             允许报名人数（0：无限制）
 * @param {Number} state                        比赛状态（1：未开始；2：进行中 3：已结束）
 * @param {Date}   create_at                    创建时间
 * @param {Date}   update_at                    修改时间
 */
var activitySchema = new Schema({
  hall_name: { type: String },
  hall_avatar: { type: String },
  captain: { type: String },
  captain_avatar: { type: String },
  time: { type: String },
  info: { type: String },
  attend_num: { type: Number },
  allow_attend_num: { type: Number },
  state: { type: Number , default: 1},
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

activitySchema.pre('save', function(next) {
  var now = new Date();
  this.update_at = now;
  next();
});

mongoose.model('activity', activitySchema);
