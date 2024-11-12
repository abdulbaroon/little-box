import { socialMediaLinks } from '@/constant/header.constant';
import Link from 'next/link';
import React from 'react';

export const SocialMediaIcons = ({size=17}) => {
  return (
    <section>
    <div className={`w-full flex gap-3 text-xs py-3`}>
      {socialMediaLinks.map(({ name, icon: Icon, url }) => (
        <Link
          key={name}
          href={url}
          target="_blank"
        >
          <Icon size={size} className={`${name==='Quora'?'text-rose-700':'text-white'} `}/>
        </Link>
      ))}
    </div>
    </section>
  );
};
