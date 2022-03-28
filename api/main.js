const { app } = require('./modules/app/app.module');
const UserRouter = require('./modules/router/user/user.router');

async function main() {
  app.listen(process.env.PORT || 8080);
  UserRouter('/api/user', app)
}

module.exports = { main, app };
