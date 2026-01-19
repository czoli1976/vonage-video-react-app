import type { EnableCaptions, ICommandExecutor } from '@types';

function enableCaptions(this: ICommandExecutor) {
  // Implementation for enabling captions
  return { success: true };
}

export default Object.assign(enableCaptions, {
  command: (sessionId: string, room: string): EnableCaptions => ({
    action: 'enableCaptions',
    sessionId,
    payload: { room },
  }),
});
