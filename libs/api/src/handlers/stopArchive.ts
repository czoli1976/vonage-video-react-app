// type Result = ActionResult<{
//   sessionId: string;
// }>;

import type { ICommandExecutor, StopArchive } from '@types';

function stopArchive(this: ICommandExecutor) {
  // Implementation for stopping an archive
  return { success: true };
}

export default Object.assign(stopArchive, {
  command: (sessionId: string, room: string, archiveId: string): StopArchive => ({
    action: 'stopArchive',
    sessionId,
    payload: { room, archiveId },
  }),
});
