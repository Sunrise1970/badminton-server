var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * 比赛列表信息schema
 * @param {Number} competiton_type              比赛类型 default:1（1：大型赛； 2：个人赛；3：8人转）
 * @param {String} hall_name                    羽毛球馆名称
 * @param {String} competiton_name              比赛名称
 * @param {String} competiton_date              比赛时间
 * @param {Number} competiton_img               宣传图片
 * @param {String} company                      举办公司
 * @param {String} company_logo                 公司logo
 * @param {Number} attend_num                   已报名人数
 * @param {Number} allow_attend_num             允许报名人数（0：无限制）
 * @param {Number} state                        比赛状态（1：未开始；2：进行中 3：已结束）
 * @param {Date}   create_at                    创建时间
 * @param {Date}   update_at                    修改时间
 */
var competitonSchema = new Schema({
  competiton_type: { type: Number },
  hall_name: { type: String },
  competiton_name: { type: String },
  competiton_img: { type: String },
  competiton_date: { type: String },
  company: { type: String },
  company_logo: { type: String },
  attend_num: { type: Number },
  allow_attend_num: { type: Number },
  state: { type: Number , default: 1 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

competitonSchema.pre('save', function(next) {
  var now = new Date();
  this.update_at = now;
  next();
});

mongoose.model('competiton', competitonSchema);
