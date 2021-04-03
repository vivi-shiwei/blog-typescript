import passport from 'passport'
import { NextApiRequest, NextApiResponse } from 'next'
import initPassport from 'lib/api/initPassport'
import { gitHubInitAuthentication } from 'lib/api/initAuthentication'
import middleware from 'lib/api/middleware'
import runMiddleware from 'lib/api/runMiddleware'

initPassport()
gitHubInitAuthentication()

const main = (req: NextApiRequest, res, next) => {
  passport.authenticate('github', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }

    (req as passport).logIn(user, function (err) {
      if (err) { return next(err); }
      return res.redirect('/personal-info?code=4001');
    });
  })(req, res, next);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await middleware(req, res)
  await runMiddleware(req, res, main)
}