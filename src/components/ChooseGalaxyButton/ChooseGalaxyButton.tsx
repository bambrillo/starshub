import React from 'react';
import { Button } from 'antd';
import { galaxiesModalOpenAtom } from '../../store';
import styles from './ChooseGalaxyButton.module.scss';
import { useSetAtom } from 'jotai';

function ChooseGalaxyButton() {
  const setIsModalOpen = useSetAtom(galaxiesModalOpenAtom);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.button__wrapper}>
      <Button onClick={showModal} className={styles.button}>
        Hyperjump to another galaxy…
      </Button>
    </div>
  );
}

export default ChooseGalaxyButton;
