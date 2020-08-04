import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').store>;

  export type RootState = StateType<typeof import('./rootReducer').default>;

  export type RootAction = ActionType<typeof import('./rootAction').default>;

  interface Types {
    RootAction: RootAction;
  }

  type ThenArg<T> = T extends Promise<infer U> ? U :
  T extends ((...args: any[]) => Promise<infer V>) ? V :
  T
}
