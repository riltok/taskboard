import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../../../../core/model/column";

@Component({
  selector: 'column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.sass']
})
export class ColumnHeaderComponent implements OnInit {

  @Input() column: Column;

  constructor() { }

  ngOnInit() {
  }

}
