var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

/**
 * 用户信息schema
 * @param {String} name 用户名
 * @param {String} avatar 头像
 * @param {String} card 身份证
 * @param {String} tel 手机号码
 * @param {String} competiton_id 比赛id
 * @param {Number} sex 性别(default: 1)
 * @param {Number} competiton_type 参赛类型(default: 1)
 * @param {Date}   create_at 创建时间
 * @param {Date}   update_at 修改时间
 */
var competitonUserSchema = new Schema({
  name: { type: String },
  avatar: { type: String },
  card: { type: String },
  tel: { type: String },
  sex: { type: Number, default: 1 },
  competiton_id: { type: String },
  competiton_type: { type: Number, default: 1 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

competitonUserSchema.pre('save', function(next){
  var now = new Date();
  this.update_at = now;
  next();
});
mongoose.model('competitonUser', competitonUserSchema);
