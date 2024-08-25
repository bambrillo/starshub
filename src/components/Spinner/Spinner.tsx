import React from 'react';
import { Flex, Spin } from 'antd';
import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <Flex align='center' justify='center' className={styles.spinner}>
      <Spin size='large' />
    </Flex>
  );
}

export default Spinner;
