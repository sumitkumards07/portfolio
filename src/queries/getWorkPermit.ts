// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

const dummyWorkPermit: WorkPermit = {
  visaStatus: "Work Visa",
  expiryDate: new Date("2026-12-31"),
  summary: "Eligible to work in the UK/USA/Canada.",
  additionalInfo: "No sponsorship required for immediate start."
};

export async function getWorkPermit(): Promise<WorkPermit> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyWorkPermit), 300);
  });
}
