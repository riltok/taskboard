import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module'
import {CommonModule} from "@angular/common";

import {MaterialModule} from '../../material.module';
import {BoardComponent} from './components/board/board.component';
import {ColumnComponent} from './components/column/column.component';
import {AddingColumnComponent} from './components/adding-column/adding-column.component';
import {TaskComponent} from './components/task/task.component';
import {ColumnHeaderComponent} from './components/column-header/column-header.component';
import {AddingTaskComponent} from './components/adding-task/adding-task.component';

@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    AddingColumnComponent,
    TaskComponent,
    ColumnHeaderComponent,
    AddingTaskComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
  ]
})
export class TaskboardModule {
}
