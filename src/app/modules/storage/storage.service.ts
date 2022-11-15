import { Injectable } from '@angular/core';
import { storages } from './storage.data';
import { StorageByrd } from './storage.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public getAll(): StorageByrd[] {
    return storages;
  }
}
