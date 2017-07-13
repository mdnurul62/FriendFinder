var path = require('path');

exports.sendFile = function sendFile(res, fileName) {
	res.sendFile(path.join(__dirname, fileName));
}

exports.isValid = function isValid(friendsArr) {
	return !!friendsArr;
}