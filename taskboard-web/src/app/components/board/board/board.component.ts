import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../../model/column';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  columns$: Observable<Column[]>;
  columns: Column[];

  constructor(private store: Store<fromRoot.State>) {
    this.columns$ = store.select(fromRoot.getCOlumns);
    this.columns$.subscribe(cl => this.columns = cl);
  }

  ngOnInit() {
  }

}
