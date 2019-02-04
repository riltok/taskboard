import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './components/board/board/board.component';

const routes: Routes = [
  { path: 'b', component: BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
