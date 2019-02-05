import { Action } from '@ngrx/store';

export const ADD_ONE = '[Column] Add One';


export class AddColumn implements Action {
  readonly type = ADD_ONE;
  constructor(public payload: {name: string}) { }
}

export type Action = AddColumn;
