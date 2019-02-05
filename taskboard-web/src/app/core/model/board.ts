import {Column} from './column';
import {Task} from './task';

export class Board {
  id: number;
  name: string;
  columns: Column[];
  taskMap: {[key: number]: Task};

}
