// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

const dummyProfileBanner: ProfileBanner = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1500&auto=format&fit=crop"
  },
  headline: "Agency Founder & Lead | Full Stack Developer",
  profileSummary: "Founder and Lead at Quantum Cut, specializing in building scalable digital solutions and managing end-to-end project lifecycles. Expert in React, Node.js, and modern web architectures.",
  resumeLink: {
    url: "/resume.pdf"
  },
  linkedinLink: "https://www.linkedin.com/in/sumit-kumar-9159a636b"
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyProfileBanner), 300);
  });
}
