export interface Basics {
  name: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  profiles: Profile[];
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string | null;
  location: string;
  highlights: string[];
  companyLogoUrl?: string;
}

export interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface Skill {
  name: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Project {
  name: string;
  type: string;
  summary: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  url?: string;
  images: string[];
  work?: string;
  colleagues?: string[];
}

export interface Colleague {
  name: string;
  picture: string;
  url: string;
}

export type Funfact = string;
