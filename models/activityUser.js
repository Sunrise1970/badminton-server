var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

/**
 * 用户信息schema
 * @param {String} users 用户信息
 * @param {Date}   create_at 创建时间
 * @param {Date}   update_at 修改时间
 */
var activityUserSchema = new Schema({
  users: { type: Object },
  activity_id: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

activityUserSchema.pre('save', function(next){
  var now = new Date();
  this.update_at = now;
  next();
});
mongoose.model('activityUser', activityUserSchema);
