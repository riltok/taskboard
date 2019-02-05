import * as taskAction from '../actions/task';
import {Column} from '../../core/model/column';
import {Task} from '../../core/model/task';

export interface State {
  tasks: { [id: number]: Task };
}

export const initialState: State = {
  tasks: {
    1: {
      id: 1,
      name: "task 1",
      description: "desc"
    },
    2: {
      id: 2,
      name: "task 1",
      description: "desc"
    },
    3: {
      id: 3,
      name: "task 1",
      description: "desc"
    }
  }
};

let countIds = 0;


export function reducer(state = initialState,
                        action: taskAction.Action) {
  switch (action.type) {
    case taskAction.ADD_ONE: {
      const newTask: Task = new Task();
      newTask.name = action.payload.name;
      newTask.id = ++countIds;
      action.payload.column.taskIds.push(newTask.id);
      return {
        ...state,
        tasks: {
          ...state.tasks, 
          [newTask.id]: newTask
        }
      };
    }
    default:
      return state;
  }
}

export const getTasks = (state: State) => state.tasks;
