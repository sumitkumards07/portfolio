// queries/getTimeline.ts
import { TimelineItem } from '../types';

const dummyTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: "Tech Solutions Inc.",
    title: "Senior Developer",
    techStack: "React, Node.js, AWS",
    summaryPoints: [
      "Led a team of 5 developers to build a scalable innovative platform.",
      "Improved performance by 40% through code optimization.",
      "Implemented CI/CD pipelines reducing deployment time."
    ],
    dateRange: "2023 - Present"
  },
  {
    timelineType: 'work',
    name: "WebCreatives Agency",
    title: "Frontend Developer",
    techStack: "Vue.js, Firebase, SCSS",
    summaryPoints: [
      "Developed responsive websites for 20+ clients.",
      "Collaborated with designers to ensure pixel-perfect implementation."
    ],
    dateRange: "2021 - 2023"
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
