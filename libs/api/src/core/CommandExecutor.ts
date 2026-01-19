import { VeraAction } from '../schemas/VeraAction';
import { ActionResult } from '../schemas/ActionResult';
import { Any } from '@common/types';
import {
  getOrCreateSession,
  startArchive,
  stopArchive,
  listArchives,
  enableCaptions,
} from '@api-lib/handlers';
import { ActionInput, IVideoProvider } from '@api-lib/types';

/**
 * Forces ActionExecutor to have a method for each VeraAction
 * and correctly types the payload and return type
 */
type ICommandExecutor = {
  [key in VeraAction]: (
    this: CommandExecutor,
    payload: ActionInput<key>
  ) => ActionResult<unknown> | Promise<ActionResult<unknown>>;
};

class CommandExecutor implements ICommandExecutor {
  public videoProvider: IVideoProvider;

  constructor(args: { videoProvider: IVideoProvider }) {
    this.videoProvider = args.videoProvider;
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

export default CommandExecutor;
