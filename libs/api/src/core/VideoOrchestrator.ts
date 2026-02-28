import { Any } from '@common/types';
import {
  getOrCreateSession,
  startArchive,
  stopArchive,
  listArchives,
  enableCaptions,
} from '@api-lib/handlers';
import { ActionInput, ActionResult, VeraAction, VonageProviderConfig } from '@api-lib/types';
import VonageVideoService from '@api-lib/providers/VonageVideoService';

/**
 * Forces ActionExecutor to have a method for each VeraAction
 * and correctly types the payload and return type
 */
type IVideoOrchestrator = {
  [key in VeraAction]: (
    this: VideoOrchestrator,
    payload: ActionInput<key>
  ) => ActionResult<unknown> | Promise<ActionResult<unknown>>;
};

class VideoOrchestrator implements IVideoOrchestrator {
  /**
   * Vonage video provider instance
   */
  public readonly videoProvider$: VonageVideoService;

  constructor(private readonly config: VonageProviderConfig) {
    this.videoProvider$ = new VonageVideoService(this.config);
  }

  /**
   * Creates or retrieves a session ID for a given room
   * [TODO]: We should receive the sessionId not the room name, room name must be informational only
   */
  getOrCreateSession = getOrCreateSession;

  /**
   * Starts an archive for a given session
   */
  startArchive = startArchive as Any;

  /**
   * Stops an archive for a given session
   */
  stopArchive = stopArchive as Any;

  /**
   * Lists archives for a given session
   */
  listArchives = listArchives as Any;

  /**
   *  Enables captions for a given session
   */
  enableCaptions = enableCaptions as Any;
}

export default VideoOrchestrator;
