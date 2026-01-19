import type { ICommandExecutor, StartArchive } from '@types';

// type Result = ActionResult<{
//   sessionId: string;
// }>;

function startArchive(this: ICommandExecutor) {
  // Implementation for starting an archive
  return { success: true, archiveId: 'archive_12345' };
}

export default Object.assign(startArchive, {
  command: (sessionId: string, room: string): StartArchive => ({
    action: 'startArchive',
    sessionId,
    payload: { room },
  }),
});
