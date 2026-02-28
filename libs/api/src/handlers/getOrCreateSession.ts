import type { IVideoOrchestrator, ActionResult, ActionInput } from '@api-lib/types';
import { decodeSessionId } from '@node/helpers';

type Result = ActionResult<{
  sessionId: string;
}>;

async function getOrCreateSession(
  this: IVideoOrchestrator,
  payload: ActionInput<'getOrCreateSession'>
): Promise<Result> {
  // TODO: Validate integrity of sessionId if provided
  // const { sessionId } = payload;

  const sessionId = await (async () => {
    // TODO: Validate sessionId format and integrity
    if (payload.sessionId) {
      decodeSessionId(payload.sessionId);
    }

    return this.videoProvider.createSession();
  })();

  return {
    success: true,
    message: 'Session retrieved or created successfully',
    data: {
      sessionId,
    },
  };
}

export default getOrCreateSession;
