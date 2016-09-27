var validator      = require('validator');
var eventproxy     = require('eventproxy');
var tools          = require('../common/tools');

exports.signUp = function(req, res, next) {
  var loginName = validator.trim(req.body.loginName);
  var pass = validator.trim(req.body.pass);
  var rePass = validator.trim(req.body.rePass);

  var ep = new eventproxy();

  if ([loginName, pass, rePass].some(function(item) { return item === ''; })) {
    ep.emit('prop_err', '信息不完整');
  }
  if (loginName.length < 5) {
    ep.emit('prop_err', '用户名至少需要5个字符。');
    return;
  }
  if (!tools.validateId(loginName)) {
    return ep.emit('prop_err', '用户名不合法。');
  }
  if (pass !== rePass) {
    return ep.emit('prop_err', '两次密码输入不一致。');
  }

  tools.bhash(pass, ep.done(function(passHash) {
    User.newAndSave(loginName, pass, function(err) {
      if (err) {
        return next(err);
      }
    })
  }));
}

exports.attendUser = function(req, res, next) {
  var name = validator.trim(req.query.name);
  var card = validator.trim(req.query.card);
  var tel = validator.trim(req.query.tel);
  var competitonType = validator.trim(req.query.competitonType);

  var ep = new eventproxy();

  if ([name, card, tel, competitonType].some(function(item) { return item === ''; })) {
    ep.emit('prop_err', '请输入完整的信息');
  }
}
