export interface Skill {
  name: string;
  category: 'cloud' | 'security' | 'network' | 'general';
  level: number; 
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  link: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  impact: string;
  issuer: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type RackPort = 'Security' | 'Cloud' | 'Network' | 'Ops';

export enum VibeMode {
  Recruiter = 'Recruiter',
  ELI5 = 'ELI5'
}

export type PageView = 'home' | 'lab' | 'ops' | 'certs' | 'about';