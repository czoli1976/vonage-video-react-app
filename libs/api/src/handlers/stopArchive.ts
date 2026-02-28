// type Result = ActionResult<{
//   sessionId: string;
// }>;

import { IVideoOrchestrator } from '@api-lib/types';

function stopArchive(this: IVideoOrchestrator) {
  // Implementation for stopping an archive
  return { success: true };
}

export default stopArchive;
