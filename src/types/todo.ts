export interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TReplaceItem = (
  arr: ITodo[],
  index: number,
  newValue: ITodo
) => ITodo[];

export type TRemoveItem = (arr: ITodo[], index: number) => ITodo[];
