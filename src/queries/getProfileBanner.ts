// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

const dummyProfileBanner: ProfileBanner = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1500&auto=format&fit=crop"
  },
  headline: "Full Stack Developer | React & Node.js Expert",
  profileSummary: "Passionate developer with over 3 years of experience building scalable web applications. I specialize in the MERN stack and have a strong foundation in cloud technologies.",
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
