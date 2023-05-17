import Image from "next/image";

import { TECHS } from 'constants/projects/projects';
import { ProjectIcons } from 'interfaces/projects';

const SkillsCard = () => {
  const renderIcon = (tech: ProjectIcons) => {
    const techNameLower = tech.name.toLowerCase();
    const iconStyles: string[] = [];

    const checkItem = (list: string[], target: string) =>
      list.find((item) => item === target);

    switch (techNameLower) {
      case checkItem(['nodejs', 'react', ], techNameLower):
        iconStyles.push('rounded-3xl bg-slate-700 dark:bg-transparent');
        break;

      case checkItem(['python', 'sass', ], techNameLower):
        iconStyles.push('h-[1.5em] w-[1.5em]');
        break;

      case 'javascript':
        iconStyles.push('ml-[0.3em]');
        break;

      case checkItem(['django', 'java', 'flask', 'bash', 'github', 'sqlite', 'mysql',], techNameLower):
        iconStyles.push('rounded-sm bg-transparent dark:bg-gray-200 ml-[0.32em]');
        break;

      case 'redux':
        iconStyles.push('rounded-3xl bg-transparent dark:bg-gray-200');
        break;

      case 'nextjs':
        iconStyles.push('rounded-3xl bg-transparent dark:bg-gray-200');
        break;
      case 'aws':
        iconStyles.push('h-[0.8em] w-[1.5em]');
        break;
      case 'algolia':
        iconStyles.push('h-[0.8em] w-[2.5em]');
        break;
      case 'swift':
        iconStyles.push('h-[1.3em] w-[1.3em]');
        break;
      case 'docker':
        iconStyles.push('h-[2.5em] w-[3.5em]');
        break;
      case 'asana':
        iconStyles.push('h-[1.3em] w-[2.0em]');
        break;

    }
    return (
      <div className="inline-flex items-center dark:text-gray-300">
        {tech.name}
        <span
          className={`relative ml-[0.15rem] mr-3 h-4 w-4 ${iconStyles.join(
            ' ',
          )} ${
            techNameLower === 'mongodb' || techNameLower === 'firebase'
              ? ' -ml-[0.15em] h-[1.24em] w-[1.24em]'
              : ''
          } `}
        >
          <Image src={tech.icon} alt={tech.name} fill sizes="100vw" />
        </span>
      </div>
    );
  };

  return (
    <div className="mt-10 rounded-xl  bg-white_gray p-6 text-lg shadow-sm shadow-gray-600 dark:bg-primary_20  dark:text-white_gray dark:shadow-black sm:m-10 sm:mt-10 sm:mb-0">
      <h1 className="text-2xl font-bold">Skills</h1>
      <dl>
        <dt className="text-md mt-3 font-semibold">Frontend:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.react)}</span>
          <span className="">{renderIcon(TECHS.angular)}</span>
          <span className="">{renderIcon(TECHS.vuejs)}</span>
          <span className="">{renderIcon(TECHS.typeScript)}</span>
          <span className="">{renderIcon(TECHS.nextjs)}</span>
          <span className="">{renderIcon(TECHS.d3js)}</span>
          <span className="">{renderIcon(TECHS.gatsby)}</span>
          <span className="">{renderIcon(TECHS.javaScript)}</span>
          <span className="">{renderIcon(TECHS.tailwind)}</span>
          <span className="">{renderIcon(TECHS.sass)}</span>
          <span className="">{renderIcon(TECHS.css)}</span>
          <span className="">{renderIcon(TECHS.html)}</span>
          <span className="">{renderIcon(TECHS.jquery)}</span>
          <span className="">{renderIcon(TECHS.bootstrap)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Backend:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.nodejs)}</span>
          <span className="">{renderIcon(TECHS.laravel)}</span>
          <span className="">{renderIcon(TECHS.php)}</span>
          <span className="">{renderIcon(TECHS.go)}</span>
          <span className="">{renderIcon(TECHS.codeigniter)}</span>
          <span className="">{renderIcon(TECHS.graphql)}</span>
          <span className="">{renderIcon(TECHS.python)}</span>
          <span className="">{renderIcon(TECHS.django)}</span>
          <span className="">{renderIcon(TECHS.flask)}</span>
          <span className="">{renderIcon(TECHS.aspnet)}</span>
          <span className="">{renderIcon(TECHS.csharp)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Mobile:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.reactnative)}</span>
          <span className="">{renderIcon(TECHS.swift)}</span>
          {/* <span className="">{renderIcon(TECHS.ionic)}</span> */}
          <span className="">{renderIcon(TECHS.ios)}</span>
          <span className="">{renderIcon(TECHS.android)}</span>
          <span className="">{renderIcon(TECHS.flutter)}</span>
          <span className="">{renderIcon(TECHS.dart)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Databases:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.mongodb)}</span>
          <span className="">{renderIcon(TECHS.sqlite)}</span>
          <span className="">{renderIcon(TECHS.firebase)}</span>
          <span className="">{renderIcon(TECHS.mysql)}</span>
          <span className="">{renderIcon(TECHS.postgresql)}</span>
          <span className="">{renderIcon(TECHS.algolia)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Cloud & DevOps:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.aws)}</span>
          <span className="">{renderIcon(TECHS.azure)}</span>
          {/* <span className="">{renderIcon(TECHS.microservice)}</span> */}
        </dd>
        <dt className="text-md mt-3 font-semibold">Version Control:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.git)}</span>
          <span className="">{renderIcon(TECHS.gitlab)}</span>
          <span className="">{renderIcon(TECHS.bitbucket)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Other:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.docker)}</span>
          <span className="">{renderIcon(TECHS.jira)}</span>
          <span className="">{renderIcon(TECHS.trello)}</span>
          <span className="">{renderIcon(TECHS.asana)}</span>
          <span className="">{renderIcon(TECHS.monday)}</span>
        </dd>
      </dl>
    </div>
  );
};

export default SkillsCard;
