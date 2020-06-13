const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		[
			'/users',
			'/users/login',
			'/users/logout',
			'/users/logoutAll',
			'/users/me',
		],
		createProxyMiddleware({
			target: 'http://localhost:5000',
		}),
	);
};
