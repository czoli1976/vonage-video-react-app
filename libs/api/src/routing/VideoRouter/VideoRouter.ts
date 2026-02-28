// import getHandler from './methods/getHandler';
// import { ProviderConfig, assertProviderConfig } from '@api-lib/schemas';
// import { IVideoProvider } from '@api-lib/types';
import { Router, RouterOptions } from 'express';

function VideoRouter(options: RouterOptions) {
  const router = Router(options);

  return Object.assign(router, {
    before(middleware: any) {},

    after(middleware: any) {},

    override(method: string, path: string, handler: any) {},
  });
}

export default VideoRouter;

// public videoProvider: IVideoProvider;

// public providerConfig: ProviderConfig;

// constructor(args: ProviderConfig) {
//   assertProviderConfig(args);

//   this.providerConfig = args;
//   this.videoProvider = this.getProvider();
// }

// protected getProvider = getProvider;

// public getHandler = getHandler;

// type HandlerExtensions = {
//   provider: VonageHandler;
//   executor: CommandExecutor;
// };

// type VeraHandler = Handler & HandlerExtensions;

// function getHandler(this: VonageHandler): VeraHandler {
//   const { videoProvider } = this;

//   const executor = new CommandExecutor({
//     videoProvider,
//   });

//   const expressHandler = httpHandler<unknown, ActionResult<unknown>, unknown>(async (req, res) => {
//     assertVeraRequest(req);

//     const { action, payload } = req.body;

//     const result = await (executor[action] as ActionHandler).call(executor, payload);

//     return res.json(result);
//   });

//   const extensions: HandlerExtensions = { provider: this, executor };

//   return Object.assign(expressHandler, extensions);
// }

// type ActionHandler = (...args: Any[]) => ActionResult<unknown> | Promise<ActionResult<unknown>>;

// export default getHandler;
