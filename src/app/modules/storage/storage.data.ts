import { uniqueId } from 'lodash-es';
import { StorageByrd, StorageType } from './storage.model';

const storages: StorageByrd[] = [
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 0,
    col: 0,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 0,
    col: 1,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 0,
    col: 3,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 0,
    col: 5,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 1,
    col: 0,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 1,
    col: 2,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 1,
    col: 5,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 2,
    col: 3,
    name: 'Storage 1',
  },
  {
    id: uniqueId(),
    type: StorageType.Shelf,
    gridLocation: 10,
    row: 3,
    col: 3,
    name: 'Storage 1',
  },
];

export { storages };
