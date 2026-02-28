import { makeInternalErrorHandler, makeThirdPartyErrorHandler } from '@api-lib/errors/handlers';
import type { EnableCaptions, IVideoOrchestrator } from '@api-lib/types';
import { isErrorLike } from '@common/assertions';
import { tryCatch } from '@common/execution';

async function enableCaptions(
  this: IVideoOrchestrator,
  { sessionId }: EnableCaptions
): Promise<void> {
  try {
    const { error } = await tryCatch(() => this.videoProvider$.enableCaptions(sessionId));

    if (error) {
      if (
        isErrorLike(error) &&
        error.message.toLowerCase().includes('live captions have already started')
      ) {
        return;
      }

      throw makeThirdPartyErrorHandler('Failed to enable captions')(error);
    }
  } catch (error) {
    throw makeInternalErrorHandler('Failed to enable captions')(error);
  }
}

export default enableCaptions;
