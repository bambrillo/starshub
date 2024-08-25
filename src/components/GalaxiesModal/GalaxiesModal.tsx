import { Modal } from 'antd';
import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { currentPageAtom, galaxiesModalOpenAtom, totalPagesAtom } from '../../store';
import styles from './GalaxiesModal.module.scss';

function GalaxiesModal() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const totalPages = useAtomValue(totalPagesAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(galaxiesModalOpenAtom);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(+e.currentTarget.value);
    handleOk();
  };

  if (totalPages === -1) {
    return null;
  }

  const numArray = Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <Modal
      title='Choose another galaxy, Captain'
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className={styles.modal}
    >
      <div className={styles.wrapper}>
        <p>{`We are currently in a galaxy #${currentPage}. There are ${totalPages} galaxies so far…`}</p>
        <ul className={styles.list}>
          {numArray.map(elem => (
            <li key={elem}>
              {currentPage === elem ? <span>{elem}</span> : <button onClick={handleClick} value={elem}>{elem}</button>}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default GalaxiesModal;
