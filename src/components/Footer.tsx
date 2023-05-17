import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import SocialLink from './SocialLink';

const linkedin = 'https://www.linkedin.com/in/nichel-james-a4142a220/';
const git = 'https://github.com/JasonZap';
const twitter = '';

function Footer() {
  const [currentYear, setCurrentYear] = useState<string>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="to-add-blur relative  flex items-center justify-evenly bg-primary_30 p-5 text-gray-300 dark:bg-[#1a202d] ">
      <div className="sm:absolute">
        <p className="text-[0.7rem]">
          &copy; 2012 - {currentYear}
          <span className="ml-2">Jason Zapata</span>
        </p>
      </div>
      <div className="flex sm:ml-auto">
        <SocialLink
          className="hover:lumos ml-4 sm:ml-0"
          // href={`${SOCIAL_LINKS.linkedin.website}/in/${USERNAME}`}
          href={linkedin}
          renderIcon={() => <FaLinkedin />}
        />
        <SocialLink
          className="hover:lumos ml-7 sm:ml-6"
          // href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
          href={git}
          renderIcon={() => <FaGithub />}
        />
        <SocialLink
          className="hover:lumos  ml-7 sm:ml-6"
          // href={`${SOCIAL_LINKS.twitter.website}/${USERNAME}`}
          href={twitter}
          renderIcon={() => <FaTwitter />}
        />
      </div>
    </footer>
  );
}

export default Footer;
