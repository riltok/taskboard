import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../../model/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  constructor() { }

  ngOnInit() {
  }

}
