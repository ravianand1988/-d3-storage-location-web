enum StorageType {
  Store = 'store',
  Pallet = 'pallet',
  Shelf = 'shelf',
}

class StorageLocation {
  row!: number;
  column!: number;
}

class StorageByrd {
  id!: string;
  name!: string;
  type!: StorageType;
  gridLocation!: number;
  // location!: StorageLocation[];
  row!: number;
  col!: number;
}

export { StorageByrd, StorageLocation, StorageType };
