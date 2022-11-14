import { Injectable } from '@angular/core';
import { storages } from './storage.data';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public getAll() {
    return storages;
  }
}
