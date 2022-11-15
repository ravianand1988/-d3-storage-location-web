import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { StorageService } from '../../storage.service';
import { StorageByrd } from '../../storage.model';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.scss'],
})
export class StorageListComponent implements OnInit {
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public storages$: Observable<StorageByrd[]> = of(
    this.storageService.getAll()
  );
  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'type' },
    { field: 'gridLocation' },
    { field: 'row' },
    { field: 'col' },
  ];

  // Each Column Definition results in one Column.
  // public columnDefs: ColDef[] = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' },
  // ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.storages$;
    // this.rowData$ = this.http.get<any[]>(
    //   'https://www.ag-grid.com/example-assets/row-data.json'
    // );
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
