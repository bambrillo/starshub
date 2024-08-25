import React from 'react';
import { Flex } from 'antd';
import { StarFilled } from '@ant-design/icons'
import type { Repository } from '../../types';
import s from './Brief.module.scss';
import { useAtomValue, useSetAtom } from 'jotai';
import { hueAtom, viewModalAtom } from '../../store';

type BriefProps = {
  repo: Repository;
};

function Brief({ repo }: BriefProps) {
  const hueMap = useAtomValue(hueAtom);
  const setViewCard = useSetAtom(viewModalAtom);

  const { id, name, description, stargazers_count } = repo;
  const hue = hueMap.get(id);
  const styles = {fontSize: `1.5em`, color: `hsl(${hue}deg 100% 50%)`, opacity: 0.35 };

  const handleClick = () => {
    setViewCard({
      isOpen: true,
      repoId: id,
    });
  };

  return (
    <li className={s.brief} onClick={handleClick}>
      <Flex align="flex-start" justify="center" className={s.star}>
        <StarFilled size={64} style={styles} />
      </Flex>
      <article>
        <h2>{name}</h2>
        <em>• {stargazers_count}</em>
        {description && <p>{description}</p>}
      </article>
    </li>
  );
}

export default Brief;
