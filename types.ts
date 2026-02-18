
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Model3D {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
}

export interface Collaborator {
  id: number;
  name: string;
  role: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  description: string;
  iconUrl: string;
}
