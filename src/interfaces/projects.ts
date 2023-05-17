export interface ProjectLinks {
  codeLink?: string;
  demoLink?: string | null;
}

export interface ProjectIcons {
  id?: string;
  name: string;
  icon: string;
}

export interface ProjectType extends ProjectLinks {
  id?: string;
  name: string;
  alternativeName?: string;
  imgSrc: string;
  imgAlt?: string;
  techs: ProjectIcons[];
  projectGithubName?: string;
  description?: string;
}

export interface ProjectProps {
  project: ProjectType;
}

export type ProjectTechs = {
  // python: ProjectIcons;
  // django: ProjectIcons;
  // css: ProjectIcons;
  // javaScript: ProjectIcons;
  // typeScript: ProjectIcons;
  // react: ProjectIcons;
  // flutter: ProjectIcons;
  // dart: ProjectIcons;
  java: ProjectIcons;
  // mongodb: ProjectIcons;
  // sqlite: ProjectIcons;
  // html: ProjectIcons;
  // flask: ProjectIcons;
  materialUi: ProjectIcons;
  redux: ProjectIcons;
  // git: ProjectIcons;
  github: ProjectIcons;
  bash: ProjectIcons;
  // nodejs: ProjectIcons;
  // bootstrap: ProjectIcons;
  // sass: ProjectIcons;
  // nextjs: ProjectIcons;
  // tailwind: ProjectIcons;
  // firebase: ProjectIcons;
  // mysql: ProjectIcons;
  // gitlab: ProjectIcons;



  react: ProjectIcons;
  angular: ProjectIcons;
  vuejs: ProjectIcons;
  typeScript: ProjectIcons;
  nextjs: ProjectIcons;
  d3js: ProjectIcons;
  gatsby: ProjectIcons;
  javaScript: ProjectIcons;
  tailwind: ProjectIcons;
  sass: ProjectIcons;
  css: ProjectIcons;
  html: ProjectIcons;
  jquery: ProjectIcons;
  bootstrap: ProjectIcons;
  nodejs: ProjectIcons;
  laravel: ProjectIcons;
  php: ProjectIcons;
  go: ProjectIcons;
  codeigniter: ProjectIcons;
  graphql: ProjectIcons;
  python: ProjectIcons;
  django: ProjectIcons;
  flask: ProjectIcons;
  aspnet: ProjectIcons;
  csharp: ProjectIcons;
  reactnative: ProjectIcons;
  swift: ProjectIcons;
  ionic: ProjectIcons;
  ios: ProjectIcons;
  android: ProjectIcons;
  flutter: ProjectIcons;
  dart: ProjectIcons;
  mongodb: ProjectIcons;
  sqlite: ProjectIcons;
  firebase: ProjectIcons;
  mysql: ProjectIcons;
  postgresql: ProjectIcons;
  algolia: ProjectIcons;
  aws: ProjectIcons;
  azure: ProjectIcons;
  microservice: ProjectIcons;
  git: ProjectIcons;
  gitlab: ProjectIcons;
  bitbucket: ProjectIcons;
  docker: ProjectIcons;
  jira: ProjectIcons;
  trello: ProjectIcons;
  asana: ProjectIcons;
  monday: ProjectIcons;
};
