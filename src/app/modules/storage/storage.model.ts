enum StorageType {
  Store = 0,
  Pallet = 10,
  Shelf = 20,
}

class StorageLocation {
  row!: number;
  column!: number;
}

class Storage {
  id!: string;
  name!: string;
  type!: StorageType;
  gridLocation!: number;
  // location!: StorageLocation[];
  row!: number;
  col!: number;
}

export { Storage, StorageLocation, StorageType };
