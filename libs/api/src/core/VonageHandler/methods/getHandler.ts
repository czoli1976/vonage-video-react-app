import type { Handler } from 'express';
import httpHandler from '@api-lib/routing/httpHandler';
import CommandExecutor from '@api-lib/core/CommandExecutor';
import { assertVeraRequest } from '@api-lib/helpers';
import { ActionResult } from '@api-lib/schemas';
import { Any } from '@common/types';
import type { VonageHandler } from '@api-lib/types/VonageHandler';

type HandlerExtensions = {
  provider: VonageHandler;
  executor: CommandExecutor;
};

type VeraHandler = Handler & HandlerExtensions;

function getHandler(this: VonageHandler): VeraHandler {
  const { videoProvider } = this;

  const executor = new CommandExecutor({
    videoProvider,
  });

  const expressHandler = httpHandler<unknown, ActionResult<unknown>, unknown>(async (req, res) => {
    assertVeraRequest(req);

    const { action, payload } = req.body;

    const result = await (executor[action] as ActionHandler).call(executor, payload);

    return res.json(result);
  });

  const extensions: HandlerExtensions = { provider: this, executor };

  return Object.assign(expressHandler, extensions);
}

type ActionHandler = (...args: Any[]) => ActionResult<unknown> | Promise<ActionResult<unknown>>;

export default getHandler;
