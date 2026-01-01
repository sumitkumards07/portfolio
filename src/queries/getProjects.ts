// queries/getProjects.ts
import { Project } from '../types';

export const dummyProjects: Project[] = [
  {
    title: "Gossip",
    description: "A real-time chat application built with modern web technologies.",
    techUsed: "ReactJS, NodeJS, Socket.io, MongoDB",
    image: {
      url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop"
    }
  },
  {
    title: "Mock Transfer Drive",
    description: "A simulation platform for file transfer protocols.",
    techUsed: "ReactJS, Node.js, AWS",
    image: {
      url: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?w=500&auto=format&fit=crop"
    }
  },
  {
    title: "AssignFlow",
    description: "Streamlining assignment workflows for educational institutions.",
    techUsed: "React, Firebase, Material UI",
    image: {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop"
    }
  },
  {
    title: "E-Commerce",
    description: "Full-featured e-commerce platform with cart and payment integration.",
    techUsed: "ReactJS, Redux, Stripe, Node.js",
    image: {
      url: "https://images.unsplash.com/photo-1472851294608-41525b3f5834?w=500&auto=format&fit=crop"
    }
  },
  {
    title: "Weather App",
    description: "Live weather forecasting using open weather APIs.",
    techUsed: "JavaScript, HTML5, CSS3, API",
    image: {
      url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop"
    }
  }
];

export async function getProjects(): Promise<Project[]> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProjects);
    }, 500);
  });
}
