import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import * as d3 from 'd3';
import { StorageType } from '../../storage.model';

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
    // this.buildSvg();
    this.buildSvgShelves();
  }

  private buildSvgShelves() {
    const svg = d3
      .select('#div-d3')
      .append('svg')
      .attr('width', '100%')
      .attr('height', 500)
      .attr('class', 'svg-shelf')
      .attr('style', 'background-color: beige;');

    const dataLength = this.storages.length;
    const shelf = svg.selectAll('g').data(this.storages).enter().append('g');
    const xScale = (value: number) =>
      d3.scaleLinear([0, 500]).domain([0, 100])(value);

    shelf
      .append('rect')
      .attr('x', (data, index) => {
        return data.col * 100;
      })
      .attr('y', function (data, index) {
        const rectHeight = 80 - data.row * 20;
        const totalHeight = 500;
        return (totalHeight * rectHeight) / 100;
      })
      .attr('height', 100)
      .attr('width', 100)
      .attr('style', 'stroke-width: 1; stroke: #959595; fill: none;');

    shelf
      .append('text')
      .attr('x', (data, index) => data.col * 100 + 10)
      .attr('y', function (data, index) {
        const rectHeight = 100;
        const yPostion = rectHeight - 20 - data.row * 20;
        const totalHeight = 500;
        return (totalHeight * yPostion) / 100 + (rectHeight - 10);
      })
      .text((d, i) => `${d.type} (${d.row},${d.col})`)
      .attr('style', 'font-weight: 500;');
  }

  /**
   * Example of basic bar chart
   */
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
