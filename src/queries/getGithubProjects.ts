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
    console.log(`Successfully fetched ${repos.length} repositories for ${username}`);

    const filteredRepos = repos
      .filter((repo: any) => !repo.fork && !repo.archived);
    
    console.log(`Found ${filteredRepos.length} matching repositories (!fork && !archived)`);

    return filteredRepos.map((repo: any) => ({
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || 'No description provided.',
        techUsed: repo.language || 'Various',
        image: {
          url: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
        },
        link: repo.homepage || repo.html_url,
        githubUrl: repo.html_url,
      }));
  } catch (error: any) {
    if (error.message?.includes('Failed to fetch')) {
        console.error('GitHub API error: This might be a rate limit or network issue.');
    } else {
        console.error('Error fetching GitHub projects:', error);
    }
    return [];
  }
}
