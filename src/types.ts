type Repository = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  description?: string;
  topics?: string[];
};

type PageParams = {
  page: number;
  per_page: number;
};

type RequestParams = Partial<PageParams> & {
  q: string;
};

type SearchData = {
  items: Repository[];
  total_count: number;
};

type RepoSearchResult = {
  data: SearchData;
};

type ViewRepo = {
  isOpen: boolean;
  repoId: null | number;
};


export type { Repository, PageParams, RequestParams, SearchData, RepoSearchResult, ViewRepo };
