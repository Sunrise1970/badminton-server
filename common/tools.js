var bcrypt = require('bcryptjs');
var moment = require('moment');

moment.locale('zh-cn'); // 使用中文

// 格式化时间
exports.formatDate = function (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};

exports.validateId = function (str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
};

exports.bhash = function (str, callback) {
  bcrypt.hash(str, 10, callback);
};

exports.bcompare = function (str, hash, callback) {
  bcrypt.compare(str, hash, callback);
};

/**
 * 操作返回信息 - returnMeg
 * @param {Number} type 信息类型（1：成功，0：失败）
 * @param {Object} data 返回自定义数据
 */
exports.returnMeg = function (type, data) {
  let result = {};
  if (type === 1) {
    result = {
      status: 1, // 数据状态
      code: 200, // 反码状态
      message: 'successful', // 描述信息
      clientTime: '',
      serverTime: '',
      token: '',
      data: data
    }
  } else if(type === 0) {
    result = {
      status: -1, // 数据状态
      code: 500, // 反码状态
      message: data, // 描述信息
      clientTime: '',
      serverTime: ''
    }
  }
  return result;
}
