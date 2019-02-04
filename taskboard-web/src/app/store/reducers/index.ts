import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

// import * as fromBoard from './board';
import * as fromColumn from './column';

export interface State {
  columns: fromColumn.State;
}

export const reducers: ActionReducerMap<State> = {
  // todo что это, почему не column?
  columns: fromColumn.reducer
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

export const getCOlumns = createSelector(
  getColumnState,
  fromColumn.getColumns,
);

