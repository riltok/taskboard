import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddColumn} from '../../../../store/actions/column';
import {State} from '../../../../store/reducers';

@Component({
  selector: 'adding-column',
  templateUrl: './adding-column.component.html',
  styleUrls: ['./adding-column.component.sass']
})
export class AddingColumnComponent implements OnInit {

  toggle: boolean;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  addColumn(name: string): void {
    if (name !== '') {
      this.toggle = false;
      this.store.dispatch(new AddColumn({name: name}));
    }
  }

}
