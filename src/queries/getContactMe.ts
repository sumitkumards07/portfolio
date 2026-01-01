// queries/getContactMe.ts
import { ContactMe } from '../types';

const dummyContactMe: ContactMe = {
  profilePicture: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop"
  },
  name: "Sumit Kumar",
  title: "Full Stack Developer",
  summary: "Open to new opportunities and collaborations. Feel free to reach out!",
  companyUniversity: "Tech University / Innovative Corp",
  linkedinLink: "https://www.linkedin.com/in/sumit-kumar-9159a636b",
  email: "sumitkumards07@gmail.com",
  phoneNumber: "+91 8950013181"
};

export async function getContactMe(): Promise<ContactMe> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyContactMe), 300);
  });
}
