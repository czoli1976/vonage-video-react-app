import { decodeSessionId } from '@node/helpers';
import type { ICommandExecutor, ActionInput, GetOrCreateSession, ActionResult } from '@types';

type Result = ActionResult<{
  sessionId: string;
}>;

async function getOrCreateSession(
  this: ICommandExecutor,
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

export default Object.assign(getOrCreateSession, {
  command: (sessionId?: string): GetOrCreateSession => ({
    action: 'getOrCreateSession',
    sessionId: sessionId ?? '',
    payload: { sessionId },
  }),
});
