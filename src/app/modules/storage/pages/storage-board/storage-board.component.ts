import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_ROUTE_STORAGE } from '../../storage-route.config';

@Component({
  selector: 'app-storage-board',
  templateUrl: './storage-board.component.html',
  styleUrls: ['./storage-board.component.scss'],
})
export class StorageBoardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(route: string): void {
    this.router.navigateByUrl(`${BASE_ROUTE_STORAGE}/${route}`);
  }
}
