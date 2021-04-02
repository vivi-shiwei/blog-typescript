import { NextApiRequest, NextApiResponse } from 'next';
import initPassport from 'lib/api/initPassport';
import middleware from 'lib/api/middleware';

initPassport();

export default async (req, res: NextApiResponse) => {
  await middleware(req, res);

  req.logout();
  return res.end(JSON.stringify({ state: true }));
};
