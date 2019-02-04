import { Action } from '@ngrx/store';

export const SELECT = '[Task] Select';
export const ADD_ONE = '[Task] Add One';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: String) { }
}

export type Action = AddOne | Select;
