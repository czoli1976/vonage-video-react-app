import type { ICommandExecutor, ListArchives } from '@types';

function listArchives(this: ICommandExecutor) {
  // Implementation for listing archives
  return { success: true, archives: [] };
}

export default Object.assign(listArchives, {
  command: (sessionId: string, room: string): ListArchives => ({
    action: 'listArchives',
    sessionId,
    payload: { room },
  }),
});
