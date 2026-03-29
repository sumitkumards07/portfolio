// queries/getTimeline.ts
import { TimelineItem } from '../types';

const dummyTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: "Quantum Cut",
    title: "Agency Founder & Lead",
    techStack: "Fullstack Development, Strategic Operations, Leadership",
    summaryPoints: [
      "Leading an agency focused on delivering cutting-edge digital solutions.",
      "Managing end-to-end project lifecycles and client relations."
    ],
    dateRange: "2022 - Present"
  },
  {
    timelineType: 'education',
    name: "Vellore Institute of Technology",
    title: "Bachelor of Technology",
    techStack: "Java, Python, Algorithms",
    summaryPoints: [
      "Graduated with Honors.",
      "Specialized in Software Engineering and AI."
    ],
    dateRange: "2017 - 2021"
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyTimeline), 300);
  });
}
