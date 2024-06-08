import React from "react";

export type ChildrenType = {
  children: React.ReactNode;
};

export type ProjectType = {
  title: string;
  description: string;
  date: string;
  role: string;
  image: string;
  color: string;
};

export type ProjectsType = ProjectType[];

export type CardPropsType = {
  project: ProjectType;
  i: number;
};

export type LinkType = {
  name: string;
  href: string;
};

export type LinksType = LinkType[];

export type PositionType = {
  left?: number;
  width?: number;
  opacity?: number;
};

export type ParallaxTextType = {
  text: string;
  classes: string;
};

export type CardType = {
  children: React.ReactNode;
  classes: string;
};

export type ModalType = {
  project: ProjectType;
  setOpen: (open: boolean) => void;
};
