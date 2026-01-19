import { VeraActionRequest } from '@api-lib/schemas';

export type ActionInput<A extends VeraActionRequest['action']> = Extract<
  VeraActionRequest,
  { action: A }
>['payload'];

export default ActionInput;
