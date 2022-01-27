export enum ActionType {
  sum = '+',
  divide = '/',
  remainder = '%',
  max = 'MAX',
}

export interface ResultState {
  id: string
  input1: string
  input2: string
  action: string
  result: string
}
