import { Repository } from './types';

function updateHues(map: Map<number, number>, repos: Repository[]) {
  const isNotIncluded = !map.has(repos[0].id);

  if (isNotIncluded) {
    for (let repo of repos) {
      const hue = Math.ceil(Math.random() * 361);
      map.set(repo.id, hue);
    }
  }

  return map;
}

export { updateHues };
