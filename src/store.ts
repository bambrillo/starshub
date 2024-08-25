import { atom } from 'jotai';
import { Repository, ViewRepo } from './types';

const currentPageAtom = atom(1);
const totalPagesAtom = atom(-1);
const galaxiesModalOpenAtom = atom(false);
const viewModalAtom = atom<ViewRepo>({
  isOpen: false,
  repoId: null,
});
const reposAtom = atom<Repository[]>([]);
const hueAtom = atom(new Map<number, number>());

export {
  currentPageAtom,
  galaxiesModalOpenAtom,
  hueAtom,
  reposAtom,
  totalPagesAtom,
  viewModalAtom,
};
