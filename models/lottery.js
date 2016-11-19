var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

/**
 * 用户信息schema
 * @param {String} tel       手机号码
 * @param {String} name      用户姓名
 * @param {String} lotteryId 中奖id
 * @param {Date}   create_at 创建时间
 * @param {Date}   update_at 修改时间
 */
var lotterySchema = new Schema({
  tel: { type: String },
  lotteryId: { type: Number, default: 0 },
  name: { type: String },
  competitionId: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

lotterySchema.pre('save', function(next){
  var now = new Date();
  this.update_at = now;
  next();
});
mongoose.model('lottery', lotterySchema);
