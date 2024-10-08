import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ᯔᯉᯮᯒᯖ᯲",
  DESCRIPTION: "Personal blog",
  EMAIL: "sitinjakamendo@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
  NUM_SERIES_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal blog",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SERIES: Metadata = {
  TITLE: "Series",
  DESCRIPTION:
    "A collection of series.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/mariesto",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/amendo-sitinjak",
  },
];
