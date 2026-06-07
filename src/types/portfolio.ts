export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[]; // rotates in typewriter
  bio: string;
  avatar: string;
  location: string;
  email: string;
  resume: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export interface ContactConfig {
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  social: SocialLinks;
  experience: Experience[];
  skills: Record<string, string[]>;
  projects: Project[];
  contact: ContactConfig;
}
