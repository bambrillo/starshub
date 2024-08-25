import { Modal } from 'antd';
import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { viewModalAtom, reposAtom } from '../../store';
import styles from './ViewModal.module.scss';
import Card from '../Card';

function ViewModal() {
  const [viewModal, setViewModal] = useAtom(viewModalAtom);
  const repos = useAtomValue(reposAtom);
  const repo = repos.find((repoItem) => repoItem.id === viewModal.repoId);

  const handleOk = () => {
    setViewModal({
      ...viewModal,
      isOpen: false,
    });
  };

  const handleCancel = () => {
    setViewModal({
      ...viewModal,
      isOpen: false,
    });
  };

  if (!repo) return null;

  return (
    <Modal
      title='Explore repository information'
      open={viewModal.isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className={styles.modal}
    >
      <Card repo={repo} />
    </Modal>
  );
}

export default ViewModal;
