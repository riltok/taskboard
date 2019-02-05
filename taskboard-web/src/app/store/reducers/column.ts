import * as columnAction from '../actions/column';
import {Column} from '../../core/model/column';
import {Task} from '../../core/model/task';

export interface State {
  columns: Column[];
}

export const initialState: State = {
  columns: [
    {
      name: '1322',
      id: 5,
      taskIds: [1, 3]
    },
    {
      name: '1322',
      id: 5,
      taskIds: [2]
    }
  ]
};


export function reducer(state = initialState,
                        action: columnAction.Action) {
  switch (action.type) {
    case columnAction.ADD_ONE: {
      const newColumn: Column = new Column();
      newColumn.name = action.payload;
      return {
        ...state,
        columns: [...state.columns, newColumn]
      };
    }
    default:
      return state;
  }
}

export const getColumns = (state: State) => state.columns;
