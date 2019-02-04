import * as columnAction from '../actions/column';
import {Column} from '../../model/column';
import {Task} from '../../model/task';

export interface State {
  columns: Column[];
}

export const initialState: State = {
  columns: [
    {
      name: '1322',
      id: 5,
      taskIds: []
    },
    {
      name: '1322',
      id: 5,
      taskIds: []
    }
    // {
    //   name: '1322',
    //   id: 5,
    //   taskIds: []
    // },
    // {
    //   name: '1322',
    //   id: 5,
    //   taskIds: []
    // },
    // {
    //   name: '1322',
    //   id: 5,
    //   taskIds: []
    // }
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
