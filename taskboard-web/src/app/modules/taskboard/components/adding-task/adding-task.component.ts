import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../../store/reducers";
import {Column} from "../../../../core/model/column";
import {AddTask} from "../../../../store/actions/task";

@Component({
  selector: 'adding-task',
  templateUrl: './adding-task.component.html',
  styleUrls: ['./adding-task.component.sass']
})
export class AddingTaskComponent implements OnInit {

  toggle: boolean;

  @Input() column: Column;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addTask(name: string): void {
    if (name !== '') {
      this.toggle = false;
      this.store.dispatch(new AddTask({name: name, column: this.column}));
    }
  }

}
