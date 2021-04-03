import React from 'react';
import {
  FaGoogle,
  FaGithub
} from 'react-icons/fa';

import NextLink from 'next/link';

const SocialMedis: React.FC = () => {
  return (
    <fieldset className="social-text-field text-base w-full border-none text-center my-3 mx-0">
      <legend className="py-0 px-2">或者社交平台登录</legend>

      <div className='flex justify-center py-3.5 px-0'>
        <NextLink href='/api/oauth/github'>
          <a href='#' className='social-icon h-11 w-11 my-0 mx-2 flex justify-center items-center no-underline text-lg rounded-full'>
            <FaGithub />
          </a>
        </NextLink>
        <NextLink href='/api/oauth/google'>
          <a href='#' className='social-icon h-11 w-11 my-0 mx-2 flex justify-center items-center no-underline text-lg rounded-full'>
            <FaGoogle />
          </a>
        </NextLink>
      </div>
    </fieldset>
  );
};

export default SocialMedis;
