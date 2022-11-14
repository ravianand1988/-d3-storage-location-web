import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageType } from '../../storage.model';

const STORAGE_TYPE_OPTIONS = Object.freeze([
  {
    label: 'Pallet',
    value: StorageType.Pallet,
  },
  {
    label: 'Shelf',
    value: StorageType.Shelf,
  },
]);

const STORAGE_FORM_FIELDS = {
  name: [null, [Validators.required]],
  gridLocation: [
    null,
    [Validators.required, Validators.min(0), Validators.max(99)],
  ],
  type: [null, Validators.compose([Validators.required])],
  row: [null, [Validators.required, Validators.min(0), Validators.max(99)]],
  column: [null, [Validators.required, Validators.min(0), Validators.max(99)]],
};

function createStorageFrom(): FormGroup {
  const builder = new FormBuilder();
  const form = builder.group(STORAGE_FORM_FIELDS);
  return form;
}

export { createStorageFrom, STORAGE_TYPE_OPTIONS };
