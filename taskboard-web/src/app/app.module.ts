import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/board/header/header.component';
import {BoardComponent} from './components/board/board/board.component';
import {reducers, metaReducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';

import {ColumnComponent} from './components/board/column/column.component';
import {AddColumnComponent} from './components/board/add-column/add-column.component';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ColumnComponent,
    AddColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
