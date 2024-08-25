import { Octokit } from 'octokit';
import { PER_PAGE, DEFAULT_PAGE_NUM } from './constants';
import { PageParams, RequestParams } from './types';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

function request(url: string, params: RequestParams) {
  return octokit.request(url, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    ...params,
  });
}

function getRepositories(pageParams: Partial<PageParams>) {
  const url = 'GET /search/repositories';
  const { page, per_page } = pageParams;
  const params: RequestParams = {
    q: 'stars:>=10000+language:typescript+sort:stars',
    per_page: per_page ?? PER_PAGE,
    page: page ?? DEFAULT_PAGE_NUM,
  };

  return request(url, params);
}

export { request, getRepositories };
