import React from 'react';
import { Brief, ChooseGalaxyButton, GalaxiesModal, ViewModal } from '..';
import styles from './List.module.scss';
import { Repository } from '../../types';

type ListProps = {
  repos: Repository[];
  totalPages: number;
};

function List({ repos, totalPages }: ListProps) {
  return (
    <div className={styles.list__wrapper}>
      {repos && !!repos.length && (
        <ul className={styles.list}>
          {repos.map((repo) => <Brief key={repo.id} repo={repo} />)}
        </ul>
      )}
      {totalPages > 1 && (
        <ChooseGalaxyButton />
      )}
      <GalaxiesModal />
      <ViewModal />
    </div>
  );
}

export default List;
