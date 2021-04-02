
import { AuthenticationError } from 'apollo-server-micro';
import { getLoginSession } from 'lib/api/auth';

export default async (_parent, _args, context) => {
  try {
    const session = await getLoginSession(context.req);

    if(!session) {
      throw new AuthenticationError(
        'Authentication token is invalid, please log in'
      );
    }

    return session;
  } catch (error) {
    throw new AuthenticationError(
      'Authentication token is invalid, please log in'
    );
  }
};
