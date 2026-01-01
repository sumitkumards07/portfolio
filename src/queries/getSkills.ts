// queries/getTimeline.ts
import { Skill } from '../types';

const dummySkills: Skill[] = [
  { name: "React", category: "Frontend", description: "Library for building UIs", icon: "FaReact" },
  { name: "Node.js", category: "Backend", description: "Runtime environment", icon: "FaNodeJs" },
  { name: "TypeScript", category: "Language", description: "Typed JavaScript", icon: "SiTypescript" },
  { name: "AWS", category: "Cloud", description: "Cloud computing", icon: "FaAws" },
  { name: "MongoDB", category: "Database", description: "NoSQL Database", icon: "SiMongodb" },
  { name: "Python", category: "Language", description: "Programming Language", icon: "FaPython" },
  { name: "Docker", category: "DevOps", description: "Containerization", icon: "FaDocker" },
  { name: "GraphQL", category: "API", description: "Query Language", icon: "SiGraphql" },
];

export async function getSkills(): Promise<Skill[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummySkills), 300);
  });
}
