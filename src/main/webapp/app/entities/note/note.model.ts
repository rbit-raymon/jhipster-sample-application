import * as dayjs from 'dayjs';

export interface INote {
  id?: number;
  createdAt?: dayjs.Dayjs;
}

export class Note implements INote {
  constructor(public id?: number, public createdAt?: dayjs.Dayjs) {}
}

export function getNoteIdentifier(note: INote): number | undefined {
  return note.id;
}
