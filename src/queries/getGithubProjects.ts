// queries/getGithubProjects.ts
import { Project } from '../types';

export async function getGithubProjects(): Promise<Project[]> {
  const username = 'sumitkumards07';
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects from GitHub');
    }
    const repos = await response.json();

    return repos
      .filter((repo: any) => !repo.fork && !repo.archived)
      .map((repo: any) => ({
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || 'No description provided.',
        techUsed: repo.language || 'Various',
        image: {
          url: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
        },
        link: repo.homepage || repo.html_url,
        githubUrl: repo.html_url,
      }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}
