import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-storage-d3-map',
  templateUrl: './storage-d3-map.component.html',
  styleUrls: ['./storage-d3-map.component.scss'],
})
export class StorageD3MapComponent implements OnInit {
  public storages = this.storageService.getAll();

  public chartData = [
    {
      name: 'Do not know D3 at all',
      value: 25,
    },
    {
      name: 'Already heard of D3',
      value: 48,
    },
    {
      name: 'Once used D3',
      value: 15,
    },
    {
      name: 'Use D3 regularly',
      value: 7,
    },
    {
      name: 'Contribute to D3',
      value: 1,
    },
  ];

  private svg: any;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.buildSvg();
  }

  private buildSvg() {
    // d3.select('#div-d3').append('h1').text('Hello Ravi!');

    const svg = d3
      .select('#div-d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    const bars = svg.selectAll('g').data(this.chartData).enter().append('g');
    const xScale = (value: number) =>
      d3.scaleLinear([0, 500]).domain([0, 100])(value);

    bars
      .append('rect')
      .attr('x', 140)
      .attr('y', function (data, index) {
        return index * 25;
      })
      .attr('height', 10)
      .attr('width', function (data, index) {
        // return data;
        return xScale(data.value);
      });

    bars
      .append('text')
      .attr('y', function (data, index) {
        return index * 25 + 10;
      })
      .text((d, i) => d.name);

    // svg
    //   .selectAll('rect')
    //   .data([10, 20, 15, 6, 5])
    //   .enter()
    //   .append('rect')
    //   .attr('x', 0)
    //   .attr('y', function (data, index) {
    //     return index * 30;
    //   })
    //   .attr('height', 20)
    //   .attr('width', function (data, index) {
    //     // return data;
    //     return d3.scaleLinear([0, 1000]).domain([0, 100])(data);
    //   });
  }
}
