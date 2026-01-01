// queries/getCertifications.ts
import { Certification } from '../types';

const dummyCertifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issuedDate: "2023-08-15",
    link: "https://aws.amazon.com/certification/",
    iconName: "FaAws"
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta",
    issuedDate: "2022-12-10",
    link: "https://www.coursera.org",
    iconName: "FaReact"
  },
  {
    title: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    issuedDate: "2023-11-20",
    link: "https://cloud.google.com/certification",
    iconName: "FaGoogle"
  }
];

export async function getCertifications(): Promise<Certification[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCertifications), 300);
  });
}
