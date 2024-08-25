import { Tag } from 'antd';
import { LiteralUnion } from 'antd/es/_util/type';
import { PresetColorType } from 'antd/es/_util/colors';
import React from 'react';
import styles from './TagList.module.scss';

type TagListProps = {
  tags: string[];
  color?: LiteralUnion<PresetColorType | 'success' | 'processing' | 'error' | 'default' | 'warning'> | undefined;
};

function TagList({ tags, color }: TagListProps) {
  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag} >
          <Tag color={color} bordered={false} className={styles.tag}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}

export default TagList;
