var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * 对阵信息schema
 * @param {String} competiton_id                参赛id
 * @param {Number} competiton_type              参赛类型(default: 1)
 * @param {Number} competiton_process_type      进程类型(default: 1)
 * @param {Number} competiton_area              比赛场地(default: 1)
 * @param {Number} competiton_order             场次(default: 1)
 * @param {String} judgment                     裁判
 * @param {Object} part_a                       a用户id组
 * -- @param {Number} user_a1_id                a1用户id
 * -- @param {Number} user_a2_id                a2用户id（双打时）
 * @param {Object} part_b                       b用户id组
 * -- @param {Number} user_b1_id                b1用户id
 * -- @param {Number} user_b2_id                b2用户id(双打时)
 * @param {Number} part_a_score                 a用户得分(default: 0)
 * @param {Number} part_b_score                 b用户得分(default: 0)
 * @param {Object} score_detail                 单局分数
 * -- @param {Number} competition_innings       比赛局数(default: 1)
 * -- @param {Number} competition_innings_score 每局得分（default: 0 获胜的分数在前）
 * @param {Number} state                        比赛状态（1：未开始；2：进行中 3：已结束）
 * @param {Date}   create_at                    创建时间
 * @param {Date}   update_at                    修改时间
 */
var competitonAgainstSchema = new Schema({
  competiton_id: { type: String },
  competiton_type: { type: Number, default: 1 },
  competiton_process_type: { type: Number, default: 1 },
  competiton_area: { type: Number, default: 1 },
  competiton_order: { type: Number, default: 1 },
  judgment: { type: String },
  part_a: { type: String },
  part_b: { type: String },
  part_a_score: { type: Number, default: 0 },
  part_b_score: { type: Number, default: 0 },
  score_detail: { type: Object },
  state: { type: Number , default: 1 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

competitonAgainstSchema.pre('save', function(next){
  var now = new Date();
  this.update_at = now;
  next();
});
mongoose.model('competitonAgainst', competitonAgainstSchema);
