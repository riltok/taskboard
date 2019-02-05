import { Action } from '@ngrx/store';
import {Column} from "../../core/model/column";

export const SELECT = '[Task] Select';
export const ADD_ONE = '[Task] Add One';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export class AddTask implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: {name: string, column: Column}) { }
}

export type Action = AddTask | Select;
