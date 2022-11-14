import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-storage-d3-map',
  templateUrl: './storage-d3-map.component.html',
  styleUrls: ['./storage-d3-map.component.scss'],
})
export class StorageD3MapComponent implements OnInit {
  public storages = this.storageService.getAll();

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}
}
