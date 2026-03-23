const fetch = require('node-fetch');

fetch('https://api.github.com/users/sumitkumards07/repos?sort=updated&per_page=100')
  .then(res => res.json())
  .then(repos => {
    const valid = repos.filter(repo => !repo.fork && !repo.archived);
    console.log('Total repos:', repos.length);
    console.log('Valid repos:', valid.length);
    console.log('Valid repo names:', valid.map(v => v.name));
  });
