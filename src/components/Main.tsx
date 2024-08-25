import { useAtom, useAtomValue } from 'jotai';
import React, { useState, useEffect } from 'react';
import { Spinner, List } from './';
import { RepoSearchResult } from '../types';
import { getRepositories } from '../api';
import { currentPageAtom, hueAtom, reposAtom, totalPagesAtom } from '../store';
import { PER_PAGE } from '../constants';
import { updateHues } from '../helpers';
import '../App.css';


function Main() {
  const [repos, setRepos] = useAtom(reposAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useAtom(totalPagesAtom);
  const currentPage = useAtomValue(currentPageAtom);
  const [hueMap, setHueMap] = useAtom(hueAtom);

  useEffect(() => {
    try {
      setIsLoading(true);
      getRepositories({ per_page: PER_PAGE, page: currentPage })
        .then((res: RepoSearchResult) => {
          const { data } = res;

          if (data.items?.length) {
            setRepos(data.items);
            const newHueMap = updateHues(hueMap, data.items);
            setHueMap(newHueMap);
          }

          if (totalPages === -1) {
            setTotalPages(Math.ceil(data.total_count / PER_PAGE))
          }

          setIsLoading(false);
        });
    } catch(err) {
      console.log(`An Error occurred: ${err}`);
    }
  }, [currentPage]);

  if (isLoading) return <Spinner />;

  return <List repos={repos} totalPages={totalPages} />;
}

export default Main;
