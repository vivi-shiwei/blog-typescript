import passport from 'passport';
import { getUserByEmailQuery, verifyUserQuery } from 'db/sql/users';

/* 获取用户提交的信息（用于账号和密码登录） */
export const localInitAuthentication = (isSignUp: boolean = false): void => {
  const LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, cb) => {

    /* 注册时检测该邮箱是否已存在 */
    if (isSignUp) {

      /* 检测用户是否存在 */
      const user = await getUserByEmailQuery(email);

      /* 用户存在则报错 */
      if (user) {
        return cb({
          code: 4001
          // message: code['4001']
        }, null);
      }

      /* 确认没有该用户 */
      return cb(null, null);
    }

    /* 登录检测该邮箱是否存在 */
    return verifyUserQuery({
      email,
      password
    }).then((user) => {
      cb(null, user);
      return user;
    }).catch((err) => {
      return cb(null, err, { message: '请检查该账号是否存在！' });
    });
  }
  ));
};
