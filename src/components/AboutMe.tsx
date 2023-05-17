import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import Image from 'next/image';
import Link from 'next/link';

import SkillsCard from './Cards/SkillsCard';
import CertificatesCarousel from './CertificatesCarousel';
import Divider from './Divider';
import profileImage from '/public/assets/images/pages/about-me/profile1.jpg';
//import Workhistory from './workhistory';

import { v4 as uuidv4 } from 'uuid';

const user = {
  name: 'Jason Zapata',
  role: 'Senior Full Stack Developer',
  imgSrc: profileImage.src,
  bio: `Hello! I'm Jason Zapata, a full stack web developer with over 10 years of experience in developing robust, user-centric applications. 
  I'm passionate about leveraging technology to create innovative solutions that solve real-world problems. 
  Being an AWS certified expert, I also handle server building and DevOps.
  `,
  bio1: `- Worked on multiple projects, honing skills in both front-end and back-end development.
         - Developed HomeAndHarvest using Angular 7+, Node.js/Express, MongoDB, Golang, and QuickBlocks.
         - Assisted in improving Guestbook's application architecture and development team.
         - Played a key role in building Autoseekr.com from scratch using Node.js, Express, React, jQuery, and Bootstrap.
  `,
  bio2: `- Developed a fully animated, interactive FAQ page using React and ReactStrap.
         - Built a user-relevant product dashboard with a carousel display.
         - Added User Role-based functionality that extended features offered to admin users.
         - Improved SQL stored procedures for data relevancy and currency.
  `,
  bio3: `- Developed a booking management software with Laravel and Vue.js.
         - Refactored large front-end application code for modularity and reusability.
         - Integrated Vue.js, Vuex, and Vuetify with a Laravel back-end.
  `,
  bio4: `- Developed Single Page Applications (SPA) using Node.JS, Express, ReactJS, Redux, and other technologies for Travel and Education-focused applications.
         - Built a multi-drive ISOMORPHIC responsive website for desktop and mobile using React JS.         
  `,
};

const AboutMe = () => {
  const displayBio = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
      /* if (['github', 'projects'].includes(word.toLocaleLowerCase())) {
        if (word.toLocaleLowerCase() === 'github')
          return (
            <Link
              key={uuidv4()}
              href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              {wordWithSpace}
            </Link>
          );
        else {
          return (
            <Link
              key={uuidv4()}
              href={`/projects`}
              className={`${linkStyles}  h-[1.51em] pb-[0.1em]`}
            >
              {wordWithSpace}
            </Link>
          );
        }
      } */

      return wordWithSpace;
    });
  };
  const displayBio1 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio1.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio2 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio2.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio3 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio3.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio4 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio4.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };

  return (
    <div className="custom-scrollbar to-add-blur mb-auto h-full overflow-auto bg-primary_90 dark:bg-primary_10">
      <div className="my-6 px-5 sm:pb-0">
        <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-center">
          <div className="sm:flex sm:flex-col sm:items-center ">
            <div className="rounded-xl shadow-sm shadow-gray-600 dark:shadow-black sm:h-[75%] sm:w-[75%]">
              <Image
                className="text-centers max-w-[100%] rounded-xl object-cover"
                src={user.imgSrc}
                alt="profile"
                width={100}
                height={100}
                sizes="100vw"
                style={{
                  maxWidth: 'inherit',
                  maxHeight: 'inherit',
                }}
              />
            </div>
            <div className="text-lg leading-6 sm:h-[75%] sm:w-[75%]">
              <h2 className="mt-2 font-semibold">{user.name}</h2>
              <h3 className="mb-2 font-bold text-blue-800 dark:text-accent_primary">
                {user.role}
              </h3>
            </div>
          </div>

          <div className="sm:w-[70%]">
            <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
              <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
                About me
              </h1>
              <p className="max-w-[1280px] whitespace-pre-line leading-snug">
                {displayBio()}
              </p>
            </div>
            <SkillsCard />
          </div>
        </div>
        <div className="mt-10">
          <Divider name="Work History" />
        </div>
        <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
          <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
            Full Stack Developer
          </h1>
          <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
            Upwork, Oct 2020 – Jan 2023
          </h2>
          <p className="max-w-[1280px] whitespace-pre-line leading-snug">
            {displayBio1()}
          </p>
        </div>
        <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
          <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
            Sr. Full Stack Developer
          </h1>
          <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
            Marvin R. Clement, C.P.A. (Rockdale, Texas), Aug 2017 - Apr 2021
          </h2>
          <p className="max-w-[1280px] whitespace-pre-line leading-snug">
            {displayBio3()}
          </p>
        </div>
        <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
          <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
            Full Stack Developer
          </h1>
          <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
            Sparkfish (Addison, Texas), June 2013 - Aug 2017
          </h2>
          <p className="max-w-[1280px] whitespace-pre-line leading-snug">
            {displayBio4()}
          </p>
        </div>
        <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
          <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
            Web Developer
          </h1>
          <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
            Austin Software® (Austin, Texas), Mar 2011 - Jun 2013
          </h2>
          <p className="max-w-[1280px] whitespace-pre-line leading-snug">
            {displayBio2()}
          </p>
        </div>
        <div className="mt-10">
          <Divider name="Certificates" />
        </div>
        <div className=" mt-2 flex justify-center">
          <div className="w-[90%] sm:w-[40%] ">
            <CertificatesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
