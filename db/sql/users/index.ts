import MikrotOrm from 'db/ormConfig/initialize-database';
import { Users } from 'db/ormConfig/entities/user';
import { EntityManager } from '@mikro-orm/postgresql';

export const getUserByIdsQuery = async (ids = []) => {
  const orm = await MikrotOrm();
  const connection = orm.em.getConnection();
  return connection.execute(`
    select * from users 
    where array[seq_id::text, id::text] && array[${ ids.map((id) => `'${id}'`) }] 
      and deleted_at is null;
  `);
};

export const getUserByEmailQuery = async (email: string) => {
  if(!email) {
    return null;
  }

  const orm = await MikrotOrm();
  return orm.em.find(Users, { 
    $and: [ { email } ] 
  })
    .then((rows) => rows.length ? rows[0] : null);
};

interface VerifyUserProps {
  email: string;
  password: string;
}
export const verifyUserQuery = async (args: VerifyUserProps) => {
  const { email, password } = args;
  if(!email && !password) {
    return null;
  }

  const orm = await MikrotOrm();
  return (orm.em as EntityManager).createQueryBuilder(Users)
    .select([ 'id', 'username', 'email', 'profile_photo', 'gender', 'is_admin' ])
    .where({
      email,
      password
    })
    .execute('get');
}; 

/** 
 * 用来保存注册用户的信息
 * @memberof UserModel
*/
interface signUpArgs {
  username?: string;
  email: string;
  password: string;
}
export const addUserBySignUp = async (args: signUpArgs) => {
  const { username, email, password } = args;
  if(!username || !email) {
    return null;
  }

  const orm = await MikrotOrm();
  return (orm.em as EntityManager).createQueryBuilder(Users).insert({
    username,
    email,
    password
  }).execute();
};
