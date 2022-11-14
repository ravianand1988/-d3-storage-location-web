import { Component, OnInit } from '@angular/core';
import { createStorageFrom, STORAGE_TYPE_OPTIONS } from './storage-form.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage-create-edit',
  templateUrl: './storage-create-edit.component.html',
  styleUrls: ['./storage-create-edit.component.scss'],
})
export class StorageCreateEditComponent implements OnInit {
  public storageTypeOptions = [...STORAGE_TYPE_OPTIONS];
  public form = createStorageFrom();

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.form);
  }

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  public cancel(): void {
    this.router.navigateByUrl('/');
  }
}
