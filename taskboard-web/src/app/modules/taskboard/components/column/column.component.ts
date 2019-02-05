import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../../../core/model/column';
import {Task} from "../../../../core/model/task";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../../store/reducers";
import {Observable} from "rxjs";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;
  tasks$: Observable<{ [id: number]: Task }>;
  tasks: { [id: number]: Task };

  constructor(private store: Store<fromRoot.State>) {
    this.tasks$ = store.select(fromRoot.getTasks);
    this.tasks$.subscribe(t => this.tasks = t);
  }

  ngOnInit() {
  }

}
