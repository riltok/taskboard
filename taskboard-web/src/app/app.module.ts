import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {reducers, metaReducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';

import {CoreModule} from "./core/core.module";
import {TaskboardModule} from "./modules/taskboard/taskboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    TaskboardModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
