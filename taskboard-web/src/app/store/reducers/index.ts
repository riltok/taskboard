import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

// import * as fromBoard from './board';
import * as fromColumn from './column';
import * as fromTask from './task';
import {Task} from "../../core/model/task";

export interface State {
  columns: fromColumn.State;
  tasks: fromTask.State;
}

export const reducers: ActionReducerMap<State> = {
  // todo что это, почему не column?
  columns: fromColumn.reducer,
  tasks: fromTask.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getColumnState = createFeatureSelector<fromColumn.State>('columns');

export const getColumns = createSelector(
  getColumnState,
  fromColumn.getColumns,
);

export const getTaskState = createFeatureSelector<fromTask.State>('tasks');

export const getTasks = createSelector(
  getTaskState,
  fromTask.getTasks,
);

