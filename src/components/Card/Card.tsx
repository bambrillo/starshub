import { StarFilled } from '@ant-design/icons';
import { useAtomValue } from 'jotai';
import React from 'react';
import type { Repository } from '../../types';
import TagList from '../TagList/TagList';
import styles from './Card.module.scss';
import { hueAtom } from '../../store';

type CardProps = {
  repo: Repository;
};

function Card({ repo }: CardProps) {
  const hueMap = useAtomValue(hueAtom);
  const { id, name, html_url, description, stargazers_count, topics } = repo;
  const hue = hueMap.get(id);

  return (
    <div className={styles.card}>
      <div className={styles.space}>
        <div className={styles.star} style={{ background: `radial-gradient(hsl(${hue}deg 100% 70%), hsl(${hue}deg 100% 100%))` }}></div>
      </div>
      <article>
        <h2>{name}</h2>
        <em><StarFilled /> {stargazers_count}</em>
        {description && <p>{description}</p>}
        {topics && <TagList tags={topics} color='#696969' />}
        <a href={html_url}>{html_url}</a>
      </article>
    </div>
  );
}

export default Card;
