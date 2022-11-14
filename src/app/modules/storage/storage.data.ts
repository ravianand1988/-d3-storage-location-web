import { uniqueId } from 'lodash-es';
import { Storage, StorageType } from './storage.model';

const storages: Storage[] = [
  {
    id: uniqueId(),
    type: StorageType.Pallet,
    gridLocation: 10,
    row: 0,
    col: 0,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Pallet,
    gridLocation: 10,
    row: 0,
    col: 1,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Pallet,
    gridLocation: 10,
    row: 0,
    col: 2,
    name: 'Storage 1',
  },
];

export { storages };
