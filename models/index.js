var mongoose = require('mongoose');
var config = require('../config');
var logger = require('../common/logger');

mongoose.connect(config.db, {
  server: { poolSize: 20 }
}, function(err) {
  if(err) {
    logger.error('connect to %s error: ', config.db, error.message);
    process.exit(1);
  }
})

require('./competitonUser');
require('./competitonAgainst');
require('./competiton');
require('./activity');
require('./activityUser');

exports.competitonUser = mongoose.model('competitonUser');
exports.competitonAgainst = mongoose.model('competitonAgainst');
exports.competiton = mongoose.model('competiton');
exports.activity = mongoose.model('activity');
exports.activityUser = mongoose.model('activityUser');
