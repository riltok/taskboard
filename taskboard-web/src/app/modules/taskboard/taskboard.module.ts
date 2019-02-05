import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module'
import {CommonModule} from "@angular/common";

import {MaterialModule} from '../../material.module';
import {BoardComponent} from './components/board/board.component';
import {ColumnComponent} from './components/column/column.component';
import {AddColumnComponent} from './components/add-column/add-column.component';
import {TaskComponent} from './components/task/task.component';
import { ColumnHeaderComponent } from './components/column-header/column-header.component';

@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    AddColumnComponent,
    TaskComponent,
    ColumnHeaderComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
  ]
})
export class TaskboardModule { }
